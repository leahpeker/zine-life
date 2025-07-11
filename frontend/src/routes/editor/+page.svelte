<script lang="ts">
	import { shapes, type UserShape } from '../../lib/stores/shapeStore';
	import { textElements, type UserText } from '../../lib/stores/textStore';
	import { images, type UserImage } from '../../lib/stores/imageStore';
	import { history } from '../../lib/stores/historyStore';
	import { zineStore } from '../../lib/stores/pageStore';
	import { 
		handleUpdateCanvasBackground,
		handleToggleGrid,
		handleUpdateZoom,
		handleUpdateCanvasSize,
		handleFitToWindow,
		handleResetCanvas,
		handleTitleChange
	} from '../../lib/helpers/canvasHelpers';
	import {
		handleElementSelected,
		handleUpdateElement,
		handleCloseEditBar
	} from '../../lib/helpers/elementManagementHelpers';
	import {
		handleTextElementDragEnd
	} from '../../lib/helpers/textEditingHelpers';
	import { removeAllElements } from '../../lib/utils/elementHelpers';
	import CanvasSidebar from '../../lib/components/canvas/canvasSidebar.svelte';
	import EditBarComponent from '../../lib/components/editing/EditBarComponent.svelte';
	import CanvasEditPanel from '../../lib/components/editing/panels/CanvasEditPanel.svelte';
	import CanvasContainer from '../../lib/components/canvas/CanvasContainer.svelte';
	import MultiPageCanvas from '../../lib/components/pages/MultiPageCanvas.svelte';
	import DownloadModal from '../../lib/components/DownloadModal.svelte';
	import Header from '../../lib/components/layout/Header.svelte';
import EditorTopBar from '../../lib/components/layout/EditorTopBar.svelte';
	import TextEditor from '../../lib/components/editing/TextEditor.svelte';
	import {
		createShapeDragEndHandler,
		createImageDragEndHandler,
		createZoomHandler,
		createPanHandlers
	} from '../../lib/utils/canvasHandlers';
	import { initializeApp } from '../../lib/init';
	import { LayoutDimensions, PostPunkStyles, SaveStatus, type SaveStatusType } from '../../lib/constants';
	import { Colors } from '../../lib/core/colors';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { buildApiUrl, API_ENDPOINTS } from '../../lib/constants/api';
	import { FETCH_OPTIONS } from '../../lib/constants/http';
	import { authStore, authService } from '../../lib/stores/auth';
	import { onMount } from 'svelte';

	// Initialize the element registry system
	initializeApp();

	let sidebarOpen = $state(false);
	let selectedId = $state<string | null>(null);
	let canvasContainerRef: any;
	let stageRef = $state<any>();
	let stageRefs = $state<any[]>([]);
	let updateTransformer = $state<(() => void) | undefined>();
	
	// Handle stage ready callback
	function handleStageReady(stage: any) {
		stageRef = stage;
		console.log("Stage ref handld", stageRef);

	}

	console.log("Stage ref", stageRef);
	let editingTextId = $state<string | null>(null);
	let designTitle = $state('Design Canvas');
	let downloadModalOpen = $state(false);
	
	// Design save/load state
	let currentDesignId = $state<string | null>(null);
	let saveStatus = $state<SaveStatusType>(SaveStatus.IDLE);
	let isLoading = $state(false);
	let autoSaveTimeout: NodeJS.Timeout | null = null;

	// Canvas state
	let canvasBackgroundColor = $state('#ffffff');
	let showGrid = $state(false);
	let canvasZoom = $state(100);
	let canvasWidth = $state(500);
	let canvasHeight = $state(400);

	// Svelte 5 derived values - computed reactively
	const selectedElement = $derived(
		selectedId 
			? $shapes.find(shape => shape.id === selectedId) || 
			  $textElements.find(text => text.id === selectedId) || 
			  $images.find(image => image.id === selectedId) ||
			  null
			: null
	);
	
	const editBarVisible = $derived(!!selectedElement);


	// Event handlers
	const shapeDragEndHandler = $derived(createShapeDragEndHandler(canvasZoom));
	const imageDragEndHandler = $derived(createImageDragEndHandler(canvasZoom));
	const zoomHandler = createZoomHandler(() => stageRef, (zoom) => canvasZoom = zoom);
	const panHandlers = createPanHandlers();
	
	// Set up stage ref for pan handlers
	$effect(() => {
		if (stageRef) {
			panHandlers.setStageRef(stageRef);
		}
	});

	// Clear selection if selected element no longer exists (e.g., after undo)
	$effect(() => {
		if (selectedId && !selectedElement) {
			selectedId = null;
		}
	});

	// Handle URL parameters and load design if ID is provided
	$effect(() => {
		const designId = $page.url.searchParams.get('id');
		if (designId && designId !== currentDesignId) {
			currentDesignId = designId;
			loadDesign(designId);
		} else if (!designId && currentDesignId) {
			// If no ID in URL but we have a current design ID, clear it for new design
			currentDesignId = null;
			// Reset to default canvas state
			designTitle = 'Design Canvas';
			zineStore.reset();
			selectedId = null;
			history.reset();
			saveStatus = SaveStatus.IDLE;
		}
	});

	// Sync canvas properties with current page
	$effect(() => {
		const currentPage = zineStore.getCurrentPage($zineStore);
		if (currentPage) {
			canvasBackgroundColor = currentPage.canvasBackgroundColor;
			canvasWidth = currentPage.canvasWidth;
			canvasHeight = currentPage.canvasHeight;
		}
	});

	// Auto-save when canvas state changes
	$effect(() => {
		// Dependencies that should trigger auto-save
		const canvasState = {
			shapes: $shapes,
			textElements: $textElements,
			images: $images,
			background: canvasBackgroundColor,
			size: { width: canvasWidth, height: canvasHeight },
			title: designTitle
		};
		
		// Only auto-save if we have a design ID and we're not currently loading
		if (currentDesignId && !isLoading && saveStatus !== SaveStatus.SAVING) {
			scheduleAutoSave();
		}
	});

	// Check authentication on mount
	onMount(() => {
		console.log('Editor mounted, checking authentication');
		authService.checkAuth();
	});

	// Redirect to home if not authenticated
	$effect(() => {
		const authState = $authStore;
		if (!authState.loading && !authState.user) {
			console.log('User not authenticated, redirecting to home');
			goto('/');
		}
	});

	// Simplified - removed complex event setup function



	// Create handler functions with state setters
	const elementSelectedHandler = $derived(handleElementSelected(canvasWidth, canvasHeight));
	const updateElementHandler = handleUpdateElement();
	const closeEditBarHandler = handleCloseEditBar((id) => selectedId = id);

	// Create canvas control handlers with state setters
	const updateCanvasBackgroundHandler = handleUpdateCanvasBackground((color) => canvasBackgroundColor = color);
	const toggleGridHandler = handleToggleGrid((show) => showGrid = show);
	const updateZoomHandler = handleUpdateZoom((zoom) => canvasZoom = zoom);
	const updateCanvasSizeHandler = handleUpdateCanvasSize((width) => canvasWidth = width, (height) => canvasHeight = height);
	const fitToWindowHandler = $derived(handleFitToWindow(canvasWidth, canvasHeight, (zoom) => canvasZoom = zoom));
	const resetCanvasHandler = handleResetCanvas((id) => selectedId = id);
	const titleChangeHandler = handleTitleChange((title) => designTitle = title);

	// Create text editing handlers
	const textElementDragEndHandler = $derived(handleTextElementDragEnd(canvasZoom));
	
	let textEditorRef = $state<any>();

	function handleTextElementDblClick(textElement: UserText) {
		editingTextId = textElement.id;
		if (textEditorRef) {
			textEditorRef.positionInput(textElement, stageRef, canvasZoom);
		}
	}

	function handleCloseTextEditor() {
		editingTextId = null;
	}

	function handleSidebarOpen(event: CustomEvent) {
		sidebarOpen = true;
	}

	function handleSidebarClose() {
		sidebarOpen = false;
	}

	// Save/Load Functions
	async function loadDesign(designId: string) {
		try {
			isLoading = true;
			saveStatus = SaveStatus.IDLE;
			console.log('Loading design with ID:', designId);
			
			const url = buildApiUrl(API_ENDPOINTS.DESIGNS.BY_ID(designId));
			console.log('Loading from URL:', url);
			
			const response = await fetch(url, FETCH_OPTIONS.DEFAULT);
			
			console.log('Load response status:', response.status);
			
			if (!response.ok) {
				const errorText = await response.text();
				console.error('Load failed with response:', errorText);
				throw new Error(`Failed to load design: ${response.status} - ${errorText}`);
			}
			
			const design = await response.json();
			console.log('Design loaded:', design);
			
			// Update design state
			designTitle = design.title;
			
			// Load multi-page design
			if (design.pages && design.pages.length > 0) {
				zineStore.importPages(design.pages);
				console.log('Loaded multi-page design with', design.pages.length, 'pages');
			} else {
				console.log('No pages found in design, creating default page');
				zineStore.reset();
			}
			
			// Clear selection and reset history
			selectedId = null;
			history.reset();
			
			saveStatus = SaveStatus.SAVED;
		} catch (error) {
			console.error('Failed to load design:', error);
			saveStatus = SaveStatus.ERROR;
			// Could show a toast notification here
		} finally {
			isLoading = false;
		}
	}

	async function saveDesign() {
		// Use get() to access store value in Svelte 5
		const currentAuthState = $authStore;
		if (!currentAuthState.user) {
			console.error('Cannot save: user not authenticated');
			saveStatus = SaveStatus.ERROR;
			return;
		}

		if (!currentDesignId) {
			console.log('No current design ID, creating new design');
			return await createNewDesign();
		}
		
		try {
			saveStatus = SaveStatus.SAVING;
			console.log('Saving design with ID:', currentDesignId);
			
			const designData = {
				title: designTitle,
				pages: zineStore.exportPages($zineStore)
			};
			
			console.log('Design data being saved:', designData);
			
			const url = buildApiUrl(API_ENDPOINTS.DESIGNS.BY_ID(currentDesignId));
			console.log('Saving to URL:', url);
			
			const response = await fetch(url, {
				method: 'PUT',
				...FETCH_OPTIONS.WITH_JSON,
				body: JSON.stringify(designData)
			});
			
			console.log('Save response status:', response.status);
			
			if (!response.ok) {
				const errorText = await response.text();
				console.error('Save failed with response:', errorText);
				throw new Error(`Failed to save design: ${response.status} - ${errorText}`);
			}
			
			const savedDesign = await response.json();
			console.log('Design saved successfully:', savedDesign);
			
			saveStatus = SaveStatus.SAVED;
			
			// Reset to idle after 2 seconds
			setTimeout(() => {
				if (saveStatus === SaveStatus.SAVED) {
					saveStatus = SaveStatus.IDLE;
				}
			}, 2000);
			
		} catch (error) {
			console.error('Failed to save design:', error);
			saveStatus = SaveStatus.ERROR;
			
			// Show error for longer
			setTimeout(() => {
				if (saveStatus === SaveStatus.ERROR) {
					saveStatus = SaveStatus.IDLE;
				}
			}, 5000);
		}
	}

	async function createNewDesign() {
		// Use get() to access store value in Svelte 5
		const currentAuthState = $authStore;
		if (!currentAuthState.user) {
			console.error('Cannot create design: user not authenticated');
			saveStatus = SaveStatus.ERROR;
			return;
		}

		try {
			saveStatus = SaveStatus.SAVING;
			console.log('Creating new design');
			
			const designData = {
				title: designTitle,
				pages: zineStore.exportPages($zineStore)
			};
			
			console.log('New design data:', designData);
			
			const url = buildApiUrl(API_ENDPOINTS.DESIGNS.BASE);
			console.log('Creating design at URL:', url);
			
			const response = await fetch(url, {
				method: 'POST',
				...FETCH_OPTIONS.WITH_JSON,
				body: JSON.stringify(designData)
			});
			
			console.log('Create response status:', response.status);
			
			if (!response.ok) {
				const errorText = await response.text();
				console.error('Create failed with response:', errorText);
				throw new Error(`Failed to create design: ${response.status} - ${errorText}`);
			}
			
			const newDesign = await response.json();
			console.log('New design created:', newDesign);
			
			currentDesignId = newDesign.id;
			
			// Update URL without reload
			const url2 = new URL(window.location.href);
			url2.searchParams.set('id', newDesign.id);
			window.history.replaceState({}, '', url2);
			console.log('URL updated to:', url2.toString());
			
			saveStatus = SaveStatus.SAVED;
			
			// Reset to idle after 2 seconds
			setTimeout(() => {
				if (saveStatus === SaveStatus.SAVED) {
					saveStatus = SaveStatus.IDLE;
				}
			}, 2000);
			
		} catch (error) {
			console.error('Failed to create design:', error);
			saveStatus = SaveStatus.ERROR;
			
			// Show error for longer
			setTimeout(() => {
				if (saveStatus === SaveStatus.ERROR) {
					saveStatus = SaveStatus.IDLE;
				}
			}, 5000);
		}
	}

	function scheduleAutoSave() {
		if (autoSaveTimeout) {
			clearTimeout(autoSaveTimeout);
		}
		
		autoSaveTimeout = setTimeout(() => {
			saveDesign();
		}, 2000); // Auto-save after 2 seconds of inactivity
	}

	function handleManualSave() {
		if (autoSaveTimeout) {
			clearTimeout(autoSaveTimeout);
		}
		saveDesign();
	}

	// Handle keyboard shortcuts
	function handleKeyDown(event: KeyboardEvent) {
		if ((event.ctrlKey || event.metaKey) && event.key === 's') {
			event.preventDefault();
			handleManualSave();
		}
	}
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="fixed inset-0 {PostPunkStyles.DarkBg}">

	<!-- Main Header -->
	<Header />
	
	<!-- Editor Top Bar -->
	<EditorTopBar 
		title={designTitle}
		onTitleChange={titleChangeHandler}
		onExportClick={() => downloadModalOpen = true}
		onUndo={() => history.undo()}
		onRedo={() => history.redo()}
		canUndo={history.canUndo($history)}
		canRedo={history.canRedo($history)}
		onSave={handleManualSave}
		{saveStatus}
	/>

	<!-- Sidebar Component (below both headers) -->
	<div class="fixed left-0 z-30" style="top: 112px; bottom: 0;">
		<CanvasSidebar
			isOpen={sidebarOpen}
			elementSelected={elementSelectedHandler}
			open={handleSidebarOpen}
			close={handleSidebarClose}
			clearCanvas={removeAllElements}
		/>
	</div>

	<!-- Main Canvas Area (fixed positioning, always starts at sidebar closed width) -->
	<div class="flex h-full flex-col" style="margin-left: {LayoutDimensions.SidebarClosedWidth}; margin-top: 112px;">

		<!-- Fixed Edit Bar -->
		<div class="fixed z-20" style="top: 112px; left: {LayoutDimensions.SidebarClosedWidth}; right: 0; height: {LayoutDimensions.EditBarHeight};">
			{#if selectedElement}
				<EditBarComponent
					{selectedElement}
					isVisible={editBarVisible}
					onUpdateElement={updateElementHandler}
					onClose={closeEditBarHandler}
				/>
			{:else}
				<!-- Canvas Edit Panel when nothing is selected -->
				<div class="h-full {PostPunkStyles.PanelBg} px-6 py-3 border-b border-border">
					<div class="flex h-full items-center gap-6 overflow-x-auto">
						<CanvasEditPanel
							backgroundColor={canvasBackgroundColor}
							{showGrid}
							zoom={canvasZoom}
							{canvasWidth}
							{canvasHeight}
							onUpdateBackground={updateCanvasBackgroundHandler}
							onToggleGrid={toggleGridHandler}
							onUpdateZoom={updateZoomHandler}
							onUpdateCanvasSize={updateCanvasSizeHandler}
							onFitToWindow={fitToWindowHandler}
							onResetCanvas={resetCanvasHandler}
						/>
					</div>
				</div>
			{/if}
		</div>

		<!-- Multi-Page Canvas Container -->
		<div class="pt-8 px-4 pb-4" style="margin-top: {LayoutDimensions.EditBarHeight};">
			<MultiPageCanvas 
				bind:this={canvasContainerRef}
				bind:updateTransformer
				bind:stageRefs
				onStageReady={handleStageReady}
				{canvasZoom}
				{showGrid}
				{selectedId}
				onStageClick={(e) => {
					const clickedOnEmpty = e.target === e.target.getStage();
					if (clickedOnEmpty) {
						selectedId = null;
					}
				}}
				onWheel={zoomHandler}
				onMouseDown={panHandlers.handleMouseDown}
				onMouseMove={panHandlers.handleMouseMove}
				onMouseUp={panHandlers.handleMouseUp}
				onShapeDragEnd={shapeDragEndHandler}
				onImageDragEnd={imageDragEndHandler}
				onElementClick={(id) => {
					selectedId = id;
					if (updateTransformer) updateTransformer();
				}}
				onTextElementClick={(id) => {
					selectedId = id;
					if (updateTransformer) updateTransformer();
				}}
				onTextElementDblClick={handleTextElementDblClick}
				onTextElementDragEnd={textElementDragEndHandler}
			/>
		</div>
	</div>

	<!-- Text Editor -->
	<TextEditor 
		bind:this={textEditorRef}
		{editingTextId}
		textElements={$textElements}
		onClose={handleCloseTextEditor}
	/>

	<!-- Download Modal -->
	<DownloadModal 
		isOpen={downloadModalOpen}
		stageRefs={stageRefs || []}
		pages={$zineStore.pages || []}
		{designTitle}
		onClose={() => downloadModalOpen = false}
	/>
</div>