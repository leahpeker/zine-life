<script lang="ts">
	import { elements, isText, type Element } from '../../lib/stores/elementsStore';
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
	import { removeAllElements } from '../../lib/utils/elementHelpers';
	import CanvasSidebar from '../../lib/components/canvas/canvasSidebar.svelte';
	import EditBarComponent from '../../lib/components/editing/EditBarComponent.svelte';
	import CanvasEditPanel from '../../lib/components/editing/panels/CanvasEditPanel.svelte';
	import MultiPageCanvas from '../../lib/components/pages/MultiPageCanvas.svelte';
	import DownloadModal from '../../lib/components/download/DownloadModal.svelte';
	import Header from '../../lib/components/layout/Header.svelte';
	import EditorTopBar from '../../lib/components/layout/EditorTopBar.svelte';
	import TextEditor from '../../lib/components/editing/TextEditor.svelte';
	import { createZoomHandler, createPanHandlers } from '../../lib/utils/canvasHandlers';
	import { initializeApp } from '../../lib/init';
	import {
		LayoutDimensions,
		StyleGuide,
		SaveStatus,
		type SaveStatusType
	} from '../../lib/constants';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { authStore } from '../../lib/stores/auth';
	import { authService } from '../../lib/services/authService';
	import { designService } from '../../lib/services/designService';
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
	}

	let editingTextId = $state<string | null>(null);
	let designTitle = $state('Design Canvas');
	let downloadModalOpen = $state(false);

	// Design save/load state
	let currentDesignId = $state<string | null>(null);
	let saveStatus = $state<SaveStatusType>(SaveStatus.IDLE);
	let isLoading = $state(false);
	let autoSaveTimeout: number | null = null;
	let statusResetTimeout: number | null = null;

	// Canvas state
	let canvasBackgroundColor = $state('#ffffff');
	let showGrid = $state(false);
	let canvasZoom = $state(100);
	let canvasWidth = $state(500);
	let canvasHeight = $state(400);

	// Svelte 5 derived values - computed reactively
	const selectedElement = $derived(
		selectedId ? $elements.find((element) => element.id === selectedId) || null : null
	);

	const editBarVisible = $derived(!!selectedElement);

	// Event handlers
	const zoomHandler = createZoomHandler(
		() => stageRef,
		(zoom) => (canvasZoom = zoom)
	);
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
			elements: $elements,
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
		authService.checkAuth();
	});

	// Redirect to home if not authenticated
	$effect(() => {
		const authState = $authStore;
		if (!authState.loading && !authState.user) {
			goto('/');
		}
	});

	// Simplified - removed complex event setup function

	// Create handler functions with state setters
	const elementSelectedHandler = $derived(handleElementSelected(canvasWidth, canvasHeight));
	const updateElementHandler = handleUpdateElement();
	const closeEditBarHandler = handleCloseEditBar((id) => (selectedId = id));

	// Create canvas control handlers with state setters
	const updateCanvasBackgroundHandler = handleUpdateCanvasBackground(
		(color) => (canvasBackgroundColor = color)
	);
	const toggleGridHandler = handleToggleGrid((show) => (showGrid = show));
	const updateZoomHandler = handleUpdateZoom((zoom) => (canvasZoom = zoom));
	const updateCanvasSizeHandler = handleUpdateCanvasSize(
		(width) => (canvasWidth = width),
		(height) => (canvasHeight = height)
	);
	const fitToWindowHandler = $derived(
		handleFitToWindow(canvasWidth, canvasHeight, (zoom) => (canvasZoom = zoom))
	);
	const resetCanvasHandler = handleResetCanvas((id) => (selectedId = id));
	const titleChangeHandler = handleTitleChange((title) => (designTitle = title));

	let textEditorRef = $state<any>();

	function handleTextElementDblClick(textElement: Element) {
		if (isText(textElement)) {
			editingTextId = textElement.id;
			if (textEditorRef) {
				textEditorRef.positionInput(textElement, stageRef, canvasZoom);
			}
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

	async function loadDesign(designId: string) {
		await designService.loadDesign(designId, {
			setIsLoading: (loading) => (isLoading = loading),
			setSaveStatus: (status) => (saveStatus = status),
			setDesignTitle: (title) => (designTitle = title),
			setSelectedId: (id) => (selectedId = id)
		});
	}

	async function saveDesign() {
		const currentAuthState = $authStore;
		await designService.saveDesign(currentDesignId!, designTitle, !!currentAuthState.user, {
			setSaveStatus: (status) => (saveStatus = status),
			clearStatusResetTimeout: () => {
				if (statusResetTimeout) {
					clearTimeout(statusResetTimeout);
				}
			},
			setStatusResetTimeout: (timeoutId) => (statusResetTimeout = timeoutId)
		});
	}

	// Create auto-save and manual save handlers using the service
	const autoSaveTimeoutRef = { current: autoSaveTimeout };
	const scheduleAutoSave = designService.createAutoSaveHandler(saveDesign, autoSaveTimeoutRef);
	const handleManualSave = designService.createManualSaveHandler(saveDesign, autoSaveTimeoutRef);

	// Sync the timeout ref with the state variable
	$effect(() => {
		autoSaveTimeoutRef.current = autoSaveTimeout;
	});

	// Handle keyboard shortcuts
	function handleKeyDown(event: KeyboardEvent) {
		if ((event.ctrlKey || event.metaKey) && event.key === 's') {
			event.preventDefault();
			handleManualSave();
		}
	}
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="fixed inset-0 {StyleGuide.DarkBg}">
	<!-- Main Header -->
	<Header />

	<!-- Editor Top Bar -->
	<EditorTopBar
		title={designTitle}
		onTitleChange={titleChangeHandler}
		onExportClick={() => (downloadModalOpen = true)}
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
	<div
		class="flex h-full flex-col"
		style="margin-left: {LayoutDimensions.SidebarClosedWidth}; margin-top: 112px;"
	>
		<!-- Fixed Edit Bar -->
		<div
			class="fixed z-20"
			style="top: 112px; left: {LayoutDimensions.SidebarClosedWidth}; right: 0; height: {LayoutDimensions.EditBarHeight};"
		>
			{#if selectedElement}
				<EditBarComponent
					{selectedElement}
					isVisible={editBarVisible}
					onUpdateElement={updateElementHandler}
					onClose={closeEditBarHandler}
				/>
			{:else}
				<!-- Canvas Edit Panel when nothing is selected -->
				<div class="h-full {StyleGuide.PanelBg} border-border border-b px-6 py-3">
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
		<div class="px-4 pb-4 pt-8" style="margin-top: {LayoutDimensions.EditBarHeight};">
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
				onElementClick={(id) => {
					selectedId = id;
					if (updateTransformer) updateTransformer();
				}}
				onTextElementDblClick={handleTextElementDblClick}
			/>
		</div>
	</div>

	<!-- Text Editor -->
	<TextEditor
		bind:this={textEditorRef}
		{editingTextId}
		texts={$elements.filter(isText)}
		onClose={handleCloseTextEditor}
	/>

	<!-- Download Modal -->
	<DownloadModal
		isOpen={downloadModalOpen}
		stageRefs={stageRefs || []}
		pages={$zineStore.pages || []}
		{designTitle}
		onClose={() => (downloadModalOpen = false)}
	/>
</div>
