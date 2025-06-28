<script lang="ts">
	import { shapes, type UserShape } from '../lib/stores/shapeStore';
	import { textElements, type UserTextElement } from '../lib/stores/textStore';
	import { images, type UserImage } from '../lib/stores/imageStore';
	import { 
		handleUpdateCanvasBackground,
		handleToggleGrid,
		handleUpdateZoom,
		handleUpdateCanvasSize,
		handleFitToWindow,
		handleResetCanvas,
		handleTitleChange
	} from '../lib/helpers/canvasHelpers';
	import {
		handleElementSelected,
		handleUpdateElement,
		handleCloseEditBar
	} from '../lib/helpers/elementManagementHelpers';
	import {
		handleTextElementDragEnd
	} from '../lib/helpers/textEditingHelpers';
	import { removeAllElements } from '../lib/utils/elementHelpers';
	import CanvasSidebar from '../lib/components/canvas/canvasSidebar.svelte';
	import EditBarComponent from '../lib/components/editing/EditBarComponent.svelte';
	import CanvasEditPanel from '../lib/components/editing/panels/CanvasEditPanel.svelte';
	import CanvasContainer from '../lib/components/canvas/CanvasContainer.svelte';
	import DownloadModal from '../lib/components/DownloadModal.svelte';
	import TopBar from '../lib/components/layout/TopBar.svelte';
	import TextEditor from '../lib/components/editing/TextEditor.svelte';
	import {
		createShapeDragEndHandler,
		createImageDragEndHandler,
		createZoomHandler,
		createPanHandlers
	} from '../lib/utils/canvasHandlers';
	import { initializeApp } from '../lib/init';
	import { LayoutDimensions } from '../lib/constants';

	// Initialize the element registry system
	initializeApp();

	let sidebarOpen = $state(false);
	let selectedId = $state<string | null>(null);
	let canvasContainerRef: any;
	let editingTextId = $state<string | null>(null);
	let designTitle = $state('Design Canvas');
	let downloadModalOpen = $state(false);

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
	const zoomHandler = $derived(createZoomHandler(canvasZoom, (zoom) => canvasZoom = zoom));
	const panHandlers = createPanHandlers();
	
	// Set up stage ref for pan handlers
	$effect(() => {
		if (stageRef) {
			panHandlers.setStageRef(stageRef);
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

	function handleTextElementDblClick(textElement: UserTextElement) {
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
</script>

<div class="relative h-screen bg-gray-50">

	<!-- Top Bar -->
	<TopBar 
		title={designTitle}
		onTitleChange={titleChangeHandler}
		onExportClick={() => downloadModalOpen = true}
	/>

	<!-- Sidebar Component (below header) -->
	<div class="fixed left-0 z-30" style="top: 64px; bottom: 0;">
		<CanvasSidebar
			isOpen={sidebarOpen}
			elementSelected={elementSelectedHandler}
			open={handleSidebarOpen}
			close={handleSidebarClose}
			clearCanvas={removeAllElements}
		/>
	</div>

	<!-- Main Canvas Area (fixed positioning, always starts at sidebar closed width) -->
	<div class="flex h-full flex-col" style="margin-left: {LayoutDimensions.SidebarClosedWidth}; margin-top: 64px;">

		<!-- Sticky Edit Bar -->
		<div class="sticky z-20" style="top: 64px; height: {LayoutDimensions.EditBarHeight};">
			{#if selectedElement}
				<EditBarComponent
					{selectedElement}
					isVisible={editBarVisible}
					onUpdateElement={updateElementHandler}
					onClose={closeEditBarHandler}
				/>
			{:else}
				<!-- Canvas Edit Panel when nothing is selected -->
				<div class="h-full bg-gray-50 px-6 py-3 border-b border-gray-200">
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

		<!-- Canvas Container -->
		<CanvasContainer 
			bind:this={canvasContainerRef}
			{canvasWidth}
			{canvasHeight}
			{canvasZoom}
			{canvasBackgroundColor}
			{showGrid}
			shapes={$shapes}
			images={$images}
			textElements={$textElements}
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
				updateTransformer();
			}}
			onTextElementClick={(id) => {
				selectedId = id;
				updateTransformer();
			}}
			onTextElementDblClick={handleTextElementDblClick}
			onTextElementDragEnd={textElementDragEndHandler}
		/>
	</div>

	<!-- Text Editor -->
	<TextEditor 
		bind:this={textEditorRef}
		{editingTextId}
		textElements={$textElements}
		onClose={handleCloseTextEditor}
	/>

	<!-- Download Modal -->
	<!-- Download Modal disabled for now -->
	<!--
	<DownloadModal 
		isOpen={downloadModalOpen}
		{stageRef}
		{canvasBackgroundColor}
		{designTitle}
		onClose={() => downloadModalOpen = false}
	/>
	-->
</div>
