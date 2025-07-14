import { A as push, P as attr_class, D as pop, M as stringify, O as attr_style, Q as bind_props, F as escape_html, J as ensure_array_like, K as attr, W as maybe_selected, G as store_get, N as unsubscribe_stores, T as copy_payload, U as assign_payload } from "../../../chunks/index.js";
import { w as writable, g as get } from "../../../chunks/index2.js";
import { z as zineStore, h as elementRegistry, i as ElementCategories, j as StyleGuide, k as SaveStatus, l as SaveStatusText, U as UIStrings, m as SaveStatusColors, f as Circle, S as ShapeTypes, n as ElementTypes, e as Rect, R as RegularPolygon, d as Star, a as Shape, E as Ellipse, c as Arrow, T as Text, I as Image, H as Header, L as LayoutDimensions, b as buildApiUrl, A as API_ENDPOINTS } from "../../../chunks/pageStore.js";
import "clsx";
import "konva";
import "jspdf";
import "../../../chunks/client.js";
import { F as FETCH_OPTIONS } from "../../../chunks/http.js";
import { a as authStore } from "../../../chunks/auth.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
const Colors = {
  // Post-Punk Brand Colors
  Black: "#000000",
  White: "#ffffff",
  Gray: "#808080",
  // Common UI colors
  Transparent: "transparent",
  // Default shape colors (keep existing for canvas)
  DefaultFill: "#ffa500",
  // Orange
  DefaultStroke: "#000000"
  // Black
};
const ElementType = {
  Shape: "shape",
  Text: "text",
  Image: "image"
};
const elements = writable([]);
function updateElement(elementId, updates) {
  elements.update(
    (current) => current.map(
      (element) => element.id === elementId ? { ...element, ...updates } : element
    )
  );
}
function isShape(element) {
  return element.type === ElementType.Shape;
}
function isText(element) {
  return element.type === ElementType.Text;
}
function isImage(element) {
  return element.type === ElementType.Image;
}
function createHistoryStore() {
  const store = writable({
    states: [],
    currentIndex: -1
  });
  const { subscribe, set, update } = store;
  function captureCurrentState(canvasBackgroundColor, canvasWidth, canvasHeight) {
    return {
      elements: get(elements),
      canvasBackgroundColor: canvasBackgroundColor || "var(--color-secondary)",
      canvasWidth: canvasWidth || 500,
      canvasHeight: canvasHeight || 400
    };
  }
  function pushState(canvasBackgroundColor, canvasWidth, canvasHeight) {
    const currentState = captureCurrentState(canvasBackgroundColor, canvasWidth, canvasHeight);
    update((store2) => {
      const newStates = store2.states.slice(0, store2.currentIndex + 1);
      newStates.push(currentState);
      if (newStates.length > 50) {
        newStates.shift();
        return {
          states: newStates,
          currentIndex: newStates.length - 1
        };
      }
      return {
        states: newStates,
        currentIndex: newStates.length - 1
      };
    });
  }
  function undo() {
    update((store2) => {
      if (store2.currentIndex > 0) {
        const previousState = store2.states[store2.currentIndex - 1];
        elements.set(previousState.elements);
        return {
          ...store2,
          currentIndex: store2.currentIndex - 1,
          restoredState: previousState
        };
      }
      return store2;
    });
  }
  function redo() {
    update((store2) => {
      if (store2.currentIndex < store2.states.length - 1) {
        const nextState = store2.states[store2.currentIndex + 1];
        elements.set(nextState.elements);
        return {
          ...store2,
          currentIndex: store2.currentIndex + 1,
          restoredState: nextState
        };
      }
      return store2;
    });
  }
  function canUndo(store2) {
    return store2.currentIndex > 0;
  }
  function canRedo(store2) {
    return store2.currentIndex < store2.states.length - 1;
  }
  pushState();
  function getRestoredState() {
    const currentStore = get(store);
    return currentStore.restoredState;
  }
  function reset() {
    set({
      states: [],
      currentIndex: -1
    });
    pushState();
  }
  return {
    subscribe,
    pushState,
    undo,
    redo,
    canUndo,
    canRedo,
    getRestoredState,
    reset
  };
}
const history = createHistoryStore();
function updateElementPosition(id, x, y) {
  elements.update(
    (current) => current.map(
      (element) => element.id === id ? { ...element, x, y } : element
    )
  );
}
function handleUpdateCanvasBackground(setCanvasBackgroundColor) {
  return (color) => {
    setCanvasBackgroundColor(color);
    zineStore.updateCurrentPageBackground(color);
    history.pushState(color);
  };
}
const ImageTypes = {
  Upload: "upload"
};
function handleUpdateElement() {
  return (elementId, updates) => {
    updateElement(elementId, updates);
    history.pushState();
  };
}
const TextTypes = {
  Heading: "heading",
  Paragraph: "paragraph",
  Caption: "caption",
  SpeechBubble: "speech_bubble",
  TextBanner: "text_banner"
};
function handleTextElementDragEnd(canvasZoom) {
  return (textElement, e) => {
    const node = e.target;
    const zoomFactor = canvasZoom / 100;
    updateElementPosition(textElement.id, node.x() / zoomFactor, node.y() / zoomFactor);
    history.pushState();
  };
}
function CanvasSidebar($$payload, $$props) {
  push();
  elementRegistry.getByCategory(ElementCategories.Shapes);
  elementRegistry.getByCategory(ElementCategories.Text);
  elementRegistry.getByCategory(ElementCategories.Images);
  $$payload.out += `<div class="flex h-full"><div${attr_class(StyleGuide.SidebarToolbox)}><div class="flex-1 space-y-1 px-2 pt-4"><button${attr_class(`${stringify(StyleGuide.SidebarButton)} ${stringify(StyleGuide.SidebarButtonInactive)}`)}><svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg> <span>SHAPES</span></button> <button${attr_class(`${stringify(StyleGuide.SidebarButton)} ${stringify(StyleGuide.SidebarButtonInactive)}`)}><svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> <span>IMAGES</span></button> <button${attr_class(`${stringify(StyleGuide.SidebarButton)} ${stringify(StyleGuide.SidebarButtonInactive)}`)}><svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg> <span>TEXT</span></button></div> <div${attr_class(StyleGuide.SidebarTrashSection)}><button${attr_class(StyleGuide.SidebarTrashButton)}><svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16"></path></svg> <span class="text-xs font-medium">Clear</span></button></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
function EditBarComponent($$payload, $$props) {
  push();
  let {
    selectedElement,
    isVisible,
    onUpdateElement
  } = $$props;
  function handleUpdateProperty(property, value) {
    if (!selectedElement) return;
    onUpdateElement(selectedElement.id, { [property]: value });
  }
  $$payload.out += `<div${attr_class(`h-full ${stringify(StyleGuide.PanelBg)} px-6 py-3 ${stringify(isVisible && selectedElement ? "border-b-2 border-green-400" : "")}`)}>`;
  if (isVisible && selectedElement) {
    $$payload.out += "<!--[-->";
    const editPanel = elementRegistry.getEditPanel(selectedElement.type, selectedElement.subType);
    if (editPanel) {
      $$payload.out += "<!--[-->";
      const Component = editPanel.component;
      $$payload.out += `<div class="flex h-full items-center gap-6 overflow-x-auto"><div class="flex items-center gap-3 flex-shrink-0"><span class="text-purple-600">${html(editPanel.icon)}</span></div> <div class="h-6 w-px bg-primary flex-shrink-0"></div> <div class="flex-1 min-w-0"><!---->`;
      Component($$payload, {
        element: selectedElement,
        updateProperty: handleUpdateProperty
      });
      $$payload.out += `<!----></div></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
const ColorPickerType = {
  Fill: "fill",
  Border: "border",
  Text: "text"
};
function ZineColorPicker($$payload, $$props) {
  push();
  let { value, onUpdate, type = ColorPickerType.Fill } = $$props;
  $$payload.out += `<div class="relative flex items-center gap-2"><button type="button" class="h-8 w-8 rounded border-2 border-green-400 relative overflow-hidden transition-all hover:scale-105 focus:ring-2 focus:ring-green-400 focus:outline-none flex items-center justify-center bg-gray-900" aria-label="Choose color">`;
  if (type === ColorPickerType.Fill) {
    $$payload.out += "<!--[-->";
    if (value === "transparent" || value === "#00000000") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="absolute inset-0 bg-gray-200" style="background-image: repeating-conic-gradient(#ccc 0% 25%, transparent 0% 50%) 50% / 4px 4px;"></div> <div class="absolute inset-0 flex items-center justify-center"><span class="text-red-500 text-xs font-bold">∅</span></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<div class="absolute inset-0"${attr_style(`background-color: ${stringify(value)};`)}></div>`;
    }
    $$payload.out += `<!--]-->`;
  } else if (type === ColorPickerType.Border) {
    $$payload.out += "<!--[1-->";
    if (value === "transparent" || value === "#00000000") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="text-red-500 text-xs font-bold">∅</span>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<div class="absolute inset-0 rounded border-4 bg-transparent pointer-events-none"${attr_style(`border-color: ${stringify(value)};`)}></div>`;
    }
    $$payload.out += `<!--]-->`;
  } else if (type === ColorPickerType.Text) {
    $$payload.out += "<!--[2-->";
    if (value === "transparent" || value === "#00000000") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="text-red-500 text-xs font-bold">∅</span>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<span class="text-sm font-medium"${attr_style(`color: ${stringify(value)};`)}>A</span>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></button> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { ColorPickerType });
  pop();
}
function CanvasSizeSelector($$payload, $$props) {
  push();
  const { currentWidth, currentHeight } = $$props;
  const presetSizes = [
    // Social Media
    {
      name: "Instagram Post",
      width: 1080,
      height: 1080,
      category: "Social"
    },
    {
      name: "Instagram Story",
      width: 1080,
      height: 1920,
      category: "Social"
    },
    {
      name: "Facebook Post",
      width: 1200,
      height: 630,
      category: "Social"
    },
    {
      name: "Twitter Post",
      width: 1200,
      height: 675,
      category: "Social"
    },
    {
      name: "LinkedIn Post",
      width: 1200,
      height: 627,
      category: "Social"
    },
    // Print
    {
      name: "A4",
      width: 2480,
      height: 3508,
      category: "Print"
    },
    {
      name: "US Letter",
      width: 2550,
      height: 3300,
      category: "Print"
    },
    {
      name: "Business Card",
      width: 1050,
      height: 600,
      category: "Print"
    },
    {
      name: "Poster",
      width: 2400,
      height: 3600,
      category: "Print"
    },
    // Web
    {
      name: "Desktop Banner",
      width: 1920,
      height: 1080,
      category: "Web"
    },
    {
      name: "Mobile Banner",
      width: 320,
      height: 568,
      category: "Web"
    },
    {
      name: "Square",
      width: 800,
      height: 800,
      category: "Web"
    }
    // Custom (current size if not matching preset)
  ];
  const currentSizeName = () => {
    const preset = presetSizes.find((size) => size.width === currentWidth && size.height === currentHeight);
    return preset ? preset.name : `${currentWidth} × ${currentHeight}`;
  };
  $$payload.out += `<div class="relative"><button type="button"${attr_class(StyleGuide.DropdownButton)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M9 9h6v6H9z"></path></svg> <span class="max-w-32 truncate">${escape_html(currentSizeName())}</span> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"${attr_class(`transition-transform ${stringify("")}`)}><polyline points="6,9 12,15 18,9"></polyline></svg></button> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function CanvasEditPanel($$payload, $$props) {
  push();
  let {
    backgroundColor,
    showGrid,
    zoom,
    canvasWidth,
    canvasHeight,
    onUpdateBackground
  } = $$props;
  const zoomLevels = [
    25,
    50,
    75,
    100,
    125,
    150,
    200,
    300,
    400,
    500
  ];
  const availableZoomLevels = zoomLevels.includes(zoom) ? zoomLevels : [...zoomLevels, zoom].sort((a, b) => a - b);
  const each_array = ensure_array_like(availableZoomLevels);
  $$payload.out += `<div class="flex items-center gap-4">`;
  CanvasSizeSelector($$payload, {
    currentWidth: canvasWidth,
    currentHeight: canvasHeight
  });
  $$payload.out += `<!----> <div${attr_class(StyleGuide.EditPanelDivider)}></div> `;
  ZineColorPicker($$payload, {
    value: backgroundColor,
    onUpdate: onUpdateBackground
  });
  $$payload.out += `<!----> <div${attr_class(StyleGuide.EditPanelDivider)}></div> <button type="button"${attr_class(`${stringify(StyleGuide.EditPanelIconButton)} ${stringify(showGrid ? "bg-green-400 text-black" : "")}`)}${attr("aria-pressed", showGrid)} title="Toggle grid"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="8" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="16" y2="21"></line><line x1="3" y1="8" x2="21" y2="8"></line><line x1="3" y1="16" x2="21" y2="16"></line></svg></button> <div${attr_class(StyleGuide.EditPanelDivider)}></div> <div class="flex items-center gap-2"><button type="button"${attr_class(StyleGuide.EditPanelSmallButton)}${attr("disabled", zoom <= 25, true)} title="Zoom out" aria-label="Zoom out canvas"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path><line x1="8" y1="11" x2="14" y2="11"></line></svg></button> <select${attr_class(StyleGuide.EditPanelSelect)} aria-label="Canvas zoom level">`;
  $$payload.select_value = zoom;
  $$payload.out += `<!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let level = each_array[$$index];
    $$payload.out += `<option${attr("value", level)}${maybe_selected($$payload, level)}>${escape_html(level)}%</option>`;
  }
  $$payload.out += `<!--]-->`;
  $$payload.select_value = void 0;
  $$payload.out += `</select> <button type="button"${attr_class(StyleGuide.EditPanelSmallButton)}${attr("disabled", zoom >= 500, true)} title="Zoom in" aria-label="Zoom in canvas"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg></button></div> <div${attr_class(StyleGuide.EditPanelDivider)}></div> <button type="button"${attr_class(StyleGuide.EditPanelIconButton)} title="Fit to window" aria-label="Fit canvas to window"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg></button></div>`;
  pop();
}
function CanvasContainer($$payload, $$props) {
  push();
  let {
    canvasWidth,
    canvasHeight,
    canvasZoom,
    canvasBackgroundColor,
    showGrid,
    shapes,
    images,
    texts,
    selectedId,
    onStageClick,
    onWheel,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onElementDragEnd,
    onElementClick,
    onTextElementClick,
    onTextElementDblClick,
    onTextElementDragEnd,
    onStageReady
  } = $$props;
  let stageRef = void 0;
  function updateTransformer() {
    return;
  }
  $$payload.out += `<div class="flex-1 overflow-auto"><div class="flex items-center justify-center"${attr_style(`padding: 48px; min-width: ${stringify(canvasWidth + 96)}px; min-height: ${stringify(canvasHeight + 96)}px;`)}><div class="border border-gray-200 shadow-lg relative"${attr_style(`background-color: ${stringify(canvasBackgroundColor)}; width: ${stringify(canvasWidth)}px; height: ${stringify(canvasHeight)}px;`)}>`;
  if (showGrid) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="absolute inset-0 pointer-events-none"><div class="absolute top-0 bottom-0" style="left: 33.33%; border-left: 2px solid #6b7280; opacity: 0.8;"></div> <div class="absolute top-0 bottom-0" style="left: 66.67%; border-left: 2px solid #6b7280; opacity: 0.8;"></div> <div class="absolute left-0 right-0" style="top: 33.33%; border-top: 2px solid #6b7280; opacity: 0.8;"></div> <div class="absolute left-0 right-0" style="top: 66.67%; border-top: 2px solid #6b7280; opacity: 0.8;"></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div></div>`;
  bind_props($$props, { stageRef, updateTransformer });
  pop();
}
function AddPageButton($$payload, $$props) {
  push();
  $$payload.out += `<button class="flex flex-col items-center justify-center w-16 border-2 border-dashed border-primary bg-transparent hover:bg-background-panel transition-colors group" style="writing-mode: vertical-rl; text-orientation: mixed;" aria-label="Add new page" title="Add Page"><svg class="w-6 h-6 mb-2 text-primary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> <span class="text-sm font-black tracking-wide font-industrial text-primary">ADD PAGE</span></button>`;
  pop();
}
function MultiPageCanvas($$payload, $$props) {
  push();
  var $$store_subs;
  let {
    canvasZoom,
    showGrid,
    selectedId,
    onStageClick,
    onWheel,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onElementDragEnd,
    onElementClick,
    onTextElementClick,
    onTextElementDblClick,
    onTextElementDragEnd,
    onStageReady,
    updateTransformer = void 0,
    stageRefs = void 0
  } = $$props;
  function handleStageReady(stage, pageIndex) {
    stageRefs[pageIndex] = { node: stage };
    if (pageIndex === store_get($$store_subs ??= {}, "$zineStore", zineStore).currentPageIndex && onStageReady) {
      onStageReady(stage);
    }
  }
  function getElementsForPage(pageId) {
    const pageElements = store_get($$store_subs ??= {}, "$elements", elements).filter((element) => element.pageId === pageId);
    return {
      shapes: pageElements.filter(isShape),
      texts: pageElements.filter(isText),
      images: pageElements.filter(isImage)
    };
  }
  const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$zineStore", zineStore).pages);
  $$payload.out += `<div${attr_class("flex items-start gap-4 overflow-x-auto pb-4 pt-4 svelte-qexxnd", void 0, {
    "justify-center": store_get($$store_subs ??= {}, "$zineStore", zineStore).pages.length === 1
  })}><!--[-->`;
  for (let pageIndex = 0, $$length = each_array.length; pageIndex < $$length; pageIndex++) {
    let page = each_array[pageIndex];
    const pageElements = getElementsForPage(page.id);
    $$payload.out += `<div class="flex-shrink-0 border-2 transition-all duration-200"${attr_style(`border-color: ${stringify(pageIndex === store_get($$store_subs ??= {}, "$zineStore", zineStore).currentPageIndex ? "var(--color-primary)" : "var(--color-border)")};`)}><div class="px-3 py-1 text-xs font-black tracking-wide font-industrial bg-background-panel border-b border-border"><span class="text-text-muted">Page ${escape_html(page.pageNumber)}</span></div> <div class="cursor-default">`;
    CanvasContainer($$payload, {
      onStageReady: (stage) => handleStageReady(stage, pageIndex),
      canvasWidth: page.canvasWidth,
      canvasHeight: page.canvasHeight,
      canvasZoom,
      canvasBackgroundColor: page.canvasBackgroundColor,
      showGrid,
      shapes: pageElements.shapes,
      images: pageElements.images,
      texts: pageElements.texts,
      selectedId,
      onStageClick,
      onWheel,
      onMouseDown,
      onMouseMove,
      onMouseUp,
      onElementDragEnd,
      onElementClick,
      onTextElementClick,
      onTextElementDblClick,
      onTextElementDragEnd
    });
    $$payload.out += `<!----></div></div>`;
  }
  $$payload.out += `<!--]--> <div class="flex-shrink-0 flex">`;
  AddPageButton($$payload);
  $$payload.out += `<!----></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { updateTransformer, stageRefs });
  pop();
}
function DownloadModal($$payload, $$props) {
  push();
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function TitleSection($$payload, $$props) {
  push();
  let { title } = $$props;
  $$payload.out += `<div class="flex-1 flex items-center">`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button class="text-xl font-black text-white cursor-pointer hover:bg-gray-800 px-2 py-1 transition-colors bg-transparent border-none font-industrial tracking-wide" aria-label="Edit design title">${escape_html(title)}</button>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
function EditorTopBar($$payload, $$props) {
  push();
  let {
    title,
    canUndo,
    canRedo,
    onSave,
    saveStatus = SaveStatus.IDLE
  } = $$props;
  $$payload.out += `<div class="fixed left-0 right-0 z-40 flex items-center bg-gray-900 border-b-2 border-green-400" style="top: 64px; height: 48px;"><div class="flex w-20 items-center justify-center bg-gray-800 border-r-2 border-green-400" style="height: 48px;"><div class="text-green-400 font-black text-sm font-punk transform -skew-x-12">EDIT</div></div> <div class="flex-1 flex items-center justify-between px-6">`;
  TitleSection($$payload, { title });
  $$payload.out += `<!----> <div class="flex items-center space-x-4">`;
  if (saveStatus !== SaveStatus.IDLE) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex items-center gap-2"><div${attr_class(`text-xs font-mono ${stringify(SaveStatusColors[saveStatus])}`)}>${escape_html(SaveStatusText[saveStatus])}</div> `;
    if (saveStatus === SaveStatus.SAVING) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="flex items-center gap-1"><button${attr("disabled", !canUndo, true)} class="flex h-6 w-6 items-center justify-center border border-green-400 bg-transparent text-green-400 hover:bg-green-400 hover:text-black focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-xs" title="Undo" aria-label="Undo last action"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7v6h6"></path><path d="M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13"></path></svg></button> <button${attr("disabled", !canRedo, true)} class="flex h-6 w-6 items-center justify-center border border-green-400 bg-transparent text-green-400 hover:bg-green-400 hover:text-black focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-xs" title="Redo" aria-label="Redo last action"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 7v6h-6"></path><path d="M3 17a9 9 0 919-9 9 9 0 016 2.3l3 2.7"></path></svg></button></div> `;
  if (onSave) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button${attr("disabled", saveStatus === SaveStatus.SAVING, true)}${attr_class(`${stringify(StyleGuide.SmallButton)} px-3 py-1 disabled:opacity-50`)} title="Save (Ctrl+S)">SAVE</button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <button${attr_class(`${stringify(StyleGuide.SmallButton)} px-3 py-1`)}>${escape_html(UIStrings.ExportButton)}</button></div></div></div>`;
  pop();
}
function TextEditor($$payload, $$props) {
  push();
  let { editingTextId, texts: textsArray, onClose } = $$props;
  const editingText = editingTextId ? textsArray.find((t) => t.id === editingTextId) : null;
  function positionInput(textElement, stageRef, canvasZoom) {
    if (!stageRef) return;
    const stage = stageRef.getNode ? stageRef.getNode() : stageRef.node || stageRef._node;
    if (!stage) return;
    stage.container().getBoundingClientRect();
    setTimeout(
      () => {
      },
      10
    );
  }
  if (editingTextId && editingText) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<input type="text"${attr("value", editingText.text)}${attr_style(`position: absolute; font-family: ${stringify(editingText.fontFamily)}; font-size: ${stringify(editingText.fontSize)}px; font-weight: ${stringify(editingText.fontWeight)}; color: ${stringify(editingText.fill)}; background: white; border: 2px solid #3b82f6; border-radius: 4px; padding: 4px; z-index: 1000; outline: none;`)}/>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { positionInput });
  pop();
}
function createElementDragEndHandler(canvasZoom) {
  return function handleElementDragEnd(element, e) {
    const node = e.target;
    const zoomFactor = canvasZoom / 100;
    updateElementPosition(element.id, node.x() / zoomFactor, node.y() / zoomFactor);
    history.pushState();
  };
}
function createZoomHandler(getStageRef, setCanvasZoom) {
  return function handleWheel(e) {
    if (!e.evt.ctrlKey && !e.evt.metaKey) return;
    e.evt.preventDefault();
    e.evt.stopPropagation();
    const stageRef = getStageRef();
    if (!stageRef) {
      console.log("No stage ref available");
      return;
    }
    console.log("Canvas zoom triggered");
    const konvaStage = stageRef.node;
    if (!konvaStage || !konvaStage.scaleX) {
      console.log("Konva stage not available or scaleX method not found");
      return;
    }
    const oldScale = konvaStage.scaleX();
    const pointer = konvaStage.getPointerPosition();
    if (!pointer) return;
    const scaleBy = 1.1;
    const newScale = e.evt.deltaY > 0 ? oldScale / scaleBy : oldScale * scaleBy;
    const clampedScale = Math.max(0.25, Math.min(5, newScale));
    const mousePointTo = {
      x: (pointer.x - konvaStage.x()) / oldScale,
      y: (pointer.y - konvaStage.y()) / oldScale
    };
    const newPos = {
      x: pointer.x - mousePointTo.x * clampedScale,
      y: pointer.y - mousePointTo.y * clampedScale
    };
    konvaStage.scale({ x: clampedScale, y: clampedScale });
    konvaStage.position(newPos);
    setCanvasZoom(clampedScale * 100);
  };
}
function createPanHandlers() {
  let isDragging = false;
  let dragStart = { x: 0, y: 0 };
  let stageRef = null;
  const handleMouseDown = (e) => {
    if (e.evt.button === 1 || e.evt.button === 0 && e.evt.altKey) {
      isDragging = true;
      dragStart = { x: e.evt.clientX, y: e.evt.clientY };
      e.evt.preventDefault();
    }
  };
  const handleMouseMove = (e) => {
    if (!isDragging || !stageRef) return;
    const dx = e.evt.clientX - dragStart.x;
    const dy = e.evt.clientY - dragStart.y;
    const stage = stageRef;
    const currentPos = stage.position();
    stage.position({
      x: currentPos.x + dx,
      y: currentPos.y + dy
    });
    dragStart = { x: e.evt.clientX, y: e.evt.clientY };
  };
  const handleMouseUp = () => {
    isDragging = false;
  };
  const setStageRef = (ref) => {
    stageRef = ref;
  };
  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    setStageRef
  };
}
const ElementProperties = {
  // Visual properties
  Fill: "fill",
  Stroke: "stroke",
  StrokeWidth: "strokeWidth",
  Opacity: "opacity"
};
function FillEditor($$payload, $$props) {
  let { value, onUpdate } = $$props;
  ZineColorPicker($$payload, { value, onUpdate });
}
function BorderEditor($$payload, $$props) {
  push();
  let { color, width, onUpdateColor, onUpdateWidth } = $$props;
  $$payload.out += `<div class="flex items-center gap-4">`;
  ZineColorPicker($$payload, {
    value: color,
    onUpdate: onUpdateColor,
    type: ColorPickerType.Border
  });
  $$payload.out += `<!----> <div class="relative"><button type="button" class="flex items-center gap-2 px-3 py-1.5 text-sm border border-primary rounded hover:bg-primary hover:text-black focus:outline-none focus:ring-2 focus:ring-purple-500"><div class="w-6 h-px bg-primary"${attr_style(`height: ${stringify(width)}px;`)}></div> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"${attr_class(`transition-transform ${stringify("")}`)}><polyline points="6,9 12,15 18,9"></polyline></svg></button> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
function OpacityEditor($$payload, $$props) {
  push();
  let { value, onUpdate } = $$props;
  $$payload.out += `<div class="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary"><circle cx="12" cy="12" r="8" opacity="0.3"></circle><circle cx="12" cy="12" r="5" opacity="0.6"></circle><circle cx="12" cy="12" r="2" opacity="1"></circle></svg> <input id="opacity" type="range" min="0" max="1" step="0.01"${attr("value", value)} class="w-20 focus:outline-none focus:ring-2 focus:ring-purple-500"/> <span class="text-sm text-text-muted w-8">${escape_html(Math.round(value * 100))}%</span></div>`;
  pop();
}
function ShapeEditPanel($$payload, $$props) {
  push();
  let { element, updateProperty } = $$props;
  $$payload.out += `<div class="flex items-center gap-4">`;
  FillEditor($$payload, {
    value: element.fill,
    onUpdate: (value) => updateProperty(ElementProperties.Fill, value)
  });
  $$payload.out += `<!----> <div class="h-6 w-px bg-primary"></div> `;
  BorderEditor($$payload, {
    color: element.stroke,
    width: element.strokeWidth,
    onUpdateColor: (color) => updateProperty(ElementProperties.Stroke, color),
    onUpdateWidth: (width) => updateProperty(ElementProperties.StrokeWidth, width)
  });
  $$payload.out += `<!----> <div class="h-6 w-px bg-primary"></div> `;
  OpacityEditor($$payload, {
    value: element.opacity || 1,
    onUpdate: (value) => updateProperty(ElementProperties.Opacity, value)
  });
  $$payload.out += `<!----></div>`;
  pop();
}
const Icons = {
  // Shape icons
  Circle: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<circle cx="12" cy="12" r="10" stroke-width="2"/>
	</svg>`,
  Rectangle: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke-width="2"/>
	</svg>`,
  Square: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<rect x="4" y="4" width="16" height="16" rx="2" ry="2" stroke-width="2"/>
	</svg>`,
  Triangle: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M12 2 L22 20 L2 20 Z" stroke-width="2"/>
	</svg>`,
  Pentagon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M12 2 L22 9 L18 20 L6 20 L2 9 Z" stroke-width="2"/>
	</svg>`,
  Hexagon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M17 3 L21 9 L21 15 L17 21 L7 21 L3 15 L3 9 L7 3 Z" stroke-width="2"/>
	</svg>`,
  Star: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 Z" stroke-width="2"/>
	</svg>`,
  Diamond: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M6 3 H18 L22 9 L12 21 L2 9 Z" stroke-width="2"/>
	</svg>`,
  Arrow: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M5 12 L19 12" stroke-width="2"/>
		<path d="M12 5 L19 12 L12 19" stroke-width="2"/>
	</svg>`,
  Heart: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke-width="2"/>
	</svg>`,
  Cross: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M12 2 L12 22" stroke-width="2"/>
		<path d="M2 12 L22 12" stroke-width="2"/>
	</svg>`,
  // Text icons
  Heading: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M6 4 L6 20" stroke-width="2"/>
		<path d="M18 4 L18 20" stroke-width="2"/>
		<path d="M6 12 L18 12" stroke-width="2"/>
	</svg>`,
  Paragraph: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M3 6 L21 6" stroke-width="2"/>
		<path d="M3 12 L21 12" stroke-width="2"/>
		<path d="M3 18 L15 18" stroke-width="2"/>
	</svg>`,
  Label: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke-width="2"/>
		<circle cx="7" cy="7" r="1"/>
	</svg>`,
  SpeechBubble: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke-width="2"/>
	</svg>`,
  TextBanner: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M4 12 L2 10 L4 8 L20 8 L22 10 L20 12 L22 14 L20 16 L4 16 L2 14 Z" stroke-width="2"/>
		<path d="M8 10 L16 10" stroke-width="1"/>
		<path d="M8 14 L16 14" stroke-width="1"/>
	</svg>`,
  // Image icons
  Image: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke-width="2"/>
		<circle cx="8.5" cy="8.5" r="1.5"/>
		<path d="M21 15 L16 10 L5 21" stroke-width="2"/>
	</svg>`
};
function registerShapes() {
  elementRegistry.register({
    type: ElementTypes.Shape,
    subType: ShapeTypes.Circle,
    name: "Circle",
    icon: Icons.Circle,
    description: "Perfect circle",
    category: ElementCategories.Shapes,
    editPanel: {
      component: ShapeEditPanel,
      title: "Circle Properties",
      icon: Icons.Circle
    },
    konvaComponent: Circle,
    defaultProps: {
      radius: 30,
      fill: Colors.DefaultFill,
      stroke: Colors.DefaultStroke,
      strokeWidth: 2,
      draggable: true
    }
  });
  elementRegistry.register({
    type: ElementTypes.Shape,
    subType: ShapeTypes.Rectangle,
    name: "Rectangle",
    icon: Icons.Rectangle,
    description: "Basic rectangle shape",
    category: ElementCategories.Shapes,
    editPanel: {
      component: ShapeEditPanel,
      title: "Rectangle Properties",
      icon: Icons.Rectangle
    },
    konvaComponent: Rect,
    defaultProps: {
      width: 60,
      height: 40,
      fill: Colors.DefaultFill,
      stroke: Colors.DefaultStroke,
      strokeWidth: 2,
      draggable: true
    }
  });
  elementRegistry.register({
    type: ElementTypes.Shape,
    subType: ShapeTypes.Square,
    name: "Square",
    icon: Icons.Square,
    description: "Perfect square",
    category: ElementCategories.Shapes,
    editPanel: {
      component: ShapeEditPanel,
      title: "Square Properties",
      icon: Icons.Square
    },
    konvaComponent: Rect,
    defaultProps: {
      size: 50,
      fill: Colors.DefaultFill,
      stroke: Colors.DefaultStroke,
      strokeWidth: 2,
      draggable: true
    }
  });
  elementRegistry.register({
    type: ElementTypes.Shape,
    subType: ShapeTypes.Triangle,
    name: "Triangle",
    icon: Icons.Triangle,
    description: "Triangle shape",
    category: ElementCategories.Shapes,
    editPanel: {
      component: ShapeEditPanel,
      title: "Triangle Properties",
      icon: Icons.Triangle
    },
    konvaComponent: RegularPolygon,
    defaultProps: {
      sides: 3,
      radius: 35,
      fill: Colors.DefaultFill,
      stroke: Colors.DefaultStroke,
      strokeWidth: 2,
      draggable: true
    }
  });
  elementRegistry.register({
    type: ElementTypes.Shape,
    subType: ShapeTypes.Pentagon,
    name: "Pentagon",
    icon: Icons.Pentagon,
    description: "5-sided polygon",
    category: ElementCategories.Shapes,
    editPanel: {
      component: ShapeEditPanel,
      title: "Pentagon Properties",
      icon: Icons.Pentagon
    },
    konvaComponent: RegularPolygon,
    defaultProps: {
      sides: 5,
      radius: 35,
      fill: Colors.DefaultFill,
      stroke: Colors.DefaultStroke,
      strokeWidth: 2,
      draggable: true
    }
  });
  elementRegistry.register({
    type: ElementTypes.Shape,
    subType: ShapeTypes.Hexagon,
    name: "Hexagon",
    icon: Icons.Hexagon,
    description: "6-sided polygon",
    category: ElementCategories.Shapes,
    editPanel: {
      component: ShapeEditPanel,
      title: "Hexagon Properties",
      icon: Icons.Hexagon
    },
    konvaComponent: RegularPolygon,
    defaultProps: {
      sides: 6,
      radius: 35,
      fill: Colors.DefaultFill,
      stroke: Colors.DefaultStroke,
      strokeWidth: 2,
      draggable: true
    }
  });
  elementRegistry.register({
    type: ElementTypes.Shape,
    subType: ShapeTypes.Star,
    name: "Star",
    icon: Icons.Star,
    description: "5-point star",
    category: ElementCategories.Shapes,
    editPanel: {
      component: ShapeEditPanel,
      title: "Star Properties",
      icon: Icons.Star
    },
    konvaComponent: Star,
    defaultProps: {
      numPoints: 5,
      innerRadius: 20,
      outerRadius: 40,
      fill: Colors.DefaultFill,
      stroke: Colors.DefaultStroke,
      strokeWidth: 2,
      draggable: true
    }
  });
  elementRegistry.register({
    type: ElementTypes.Shape,
    subType: ShapeTypes.Diamond,
    name: "Diamond",
    icon: Icons.Diamond,
    description: "Diamond shape",
    category: ElementCategories.Shapes,
    editPanel: {
      component: ShapeEditPanel,
      title: "Diamond Properties",
      icon: Icons.Diamond
    },
    konvaComponent: Shape,
    defaultProps: {
      width: 40,
      height: 60,
      fill: Colors.DefaultFill,
      stroke: Colors.DefaultStroke,
      strokeWidth: 2,
      draggable: true
    }
  });
  elementRegistry.register({
    type: ElementTypes.Shape,
    subType: ShapeTypes.Ellipse,
    name: "Ellipse",
    icon: Icons.Circle,
    description: "Oval shape",
    category: ElementCategories.Shapes,
    editPanel: {
      component: ShapeEditPanel,
      title: "Ellipse Properties",
      icon: Icons.Circle
    },
    konvaComponent: Ellipse,
    defaultProps: {
      radiusX: 50,
      radiusY: 30,
      fill: Colors.DefaultFill,
      stroke: Colors.DefaultStroke,
      strokeWidth: 2,
      draggable: true
    }
  });
  elementRegistry.register({
    type: ElementTypes.Shape,
    subType: ShapeTypes.Arrow,
    name: "Arrow",
    icon: Icons.Arrow,
    description: "Arrow pointer",
    category: ElementCategories.Shapes,
    editPanel: {
      component: ShapeEditPanel,
      title: "Arrow Properties",
      icon: Icons.Arrow
    },
    konvaComponent: Arrow,
    defaultProps: {
      points: [0, 0, 60, 0],
      pointerLength: 15,
      pointerWidth: 10,
      fill: Colors.DefaultFill,
      stroke: Colors.DefaultStroke,
      strokeWidth: 2,
      draggable: true
    }
  });
  elementRegistry.register({
    type: ElementTypes.Shape,
    subType: ShapeTypes.Heart,
    name: "Heart",
    icon: Icons.Heart,
    description: "Heart shape",
    category: ElementCategories.Shapes,
    editPanel: {
      component: ShapeEditPanel,
      title: "Heart Properties",
      icon: Icons.Heart
    },
    konvaComponent: Shape,
    defaultProps: {
      width: 50,
      height: 45,
      fill: Colors.DefaultFill,
      stroke: Colors.DefaultStroke,
      strokeWidth: 2,
      draggable: true
    }
  });
  elementRegistry.register({
    type: ElementTypes.Shape,
    subType: ShapeTypes.Cross,
    name: "Cross",
    icon: Icons.Cross,
    description: "Cross shape",
    category: ElementCategories.Shapes,
    editPanel: {
      component: ShapeEditPanel,
      title: "Cross Properties",
      icon: Icons.Cross
    },
    konvaComponent: Shape,
    defaultProps: {
      width: 50,
      height: 50,
      thickness: 15,
      fill: Colors.DefaultFill,
      stroke: Colors.DefaultStroke,
      strokeWidth: 2,
      draggable: true
    }
  });
}
function TextEditPanel($$payload, $$props) {
  push();
  let { element, updateProperty } = $$props;
  $$payload.out += `<div class="flex items-center gap-4"><div class="flex items-center gap-2"><label for="font-family-select" class="sr-only">Font family</label> <select id="font-family-select" class="rounded border border-primary px-2 py-1 text-sm" aria-label="Choose font family">`;
  $$payload.select_value = element.fontFamily;
  $$payload.out += `<option value="Arial"${maybe_selected($$payload, "Arial")}>Arial</option><option value="Helvetica"${maybe_selected($$payload, "Helvetica")}>Helvetica</option><option value="Times New Roman"${maybe_selected($$payload, "Times New Roman")}>Times New Roman</option><option value="Georgia"${maybe_selected($$payload, "Georgia")}>Georgia</option><option value="Courier New"${maybe_selected($$payload, "Courier New")}>Courier New</option>`;
  $$payload.select_value = void 0;
  $$payload.out += `</select></div> <div class="flex items-center gap-2"><label for="font-size-input" class="sr-only">Font size</label> <input id="font-size-input" type="number" min="8" max="200"${attr("value", element.fontSize)} class="w-16 rounded border border-primary px-2 py-1 text-sm" aria-label="Font size in pixels"/></div> <div class="h-6 w-px bg-primary"></div> `;
  FillEditor($$payload, {
    value: element.fill,
    onUpdate: (value) => updateProperty(ElementProperties.Fill, value)
  });
  $$payload.out += `<!----> <div class="h-6 w-px bg-primary"></div> `;
  BorderEditor($$payload, {
    color: element.stroke || "#000000",
    width: element.strokeWidth || 0,
    onUpdateColor: (color) => updateProperty(ElementProperties.Stroke, color),
    onUpdateWidth: (width) => updateProperty(ElementProperties.StrokeWidth, width)
  });
  $$payload.out += `<!----> <div class="h-6 w-px bg-primary"></div> `;
  OpacityEditor($$payload, {
    value: element.opacity || 1,
    onUpdate: (value) => updateProperty(ElementProperties.Opacity, value)
  });
  $$payload.out += `<!----></div>`;
  pop();
}
function registerText() {
  elementRegistry.register({
    type: ElementTypes.Text,
    subType: TextTypes.Heading,
    name: "Heading",
    icon: Icons.Heading,
    description: "Large heading text",
    category: ElementCategories.Text,
    editPanel: {
      component: TextEditPanel,
      title: "Heading Properties",
      icon: Icons.Heading
    },
    konvaComponent: Text,
    defaultProps: {
      text: "Heading",
      fontFamily: "Arial",
      fontSize: 32,
      fontWeight: "bold",
      textAlign: "left",
      fill: Colors.Black,
      stroke: Colors.Transparent,
      strokeWidth: 0,
      draggable: true,
      opacity: 1,
      padding: 8,
      width: 200,
      height: 50
    }
  });
  elementRegistry.register({
    type: ElementTypes.Text,
    subType: TextTypes.Paragraph,
    name: "Body",
    icon: Icons.Paragraph,
    description: "Body text paragraph",
    category: ElementCategories.Text,
    editPanel: {
      component: TextEditPanel,
      title: "Body Properties",
      icon: Icons.Paragraph
    },
    konvaComponent: Text,
    defaultProps: {
      text: "Your text here",
      fontFamily: "Arial",
      fontSize: 16,
      fontWeight: "normal",
      textAlign: "left",
      fill: Colors.Black,
      stroke: Colors.Transparent,
      strokeWidth: 0,
      draggable: true,
      opacity: 1,
      padding: 6,
      width: 180,
      height: 30
    }
  });
  elementRegistry.register({
    type: ElementTypes.Text,
    subType: TextTypes.Caption,
    name: "Caption",
    icon: Icons.Label,
    description: "Small caption text",
    category: ElementCategories.Text,
    editPanel: {
      component: TextEditPanel,
      title: "Caption Properties",
      icon: Icons.Label
    },
    konvaComponent: Text,
    defaultProps: {
      text: "Caption",
      fontFamily: "Arial",
      fontSize: 12,
      fontWeight: "normal",
      textAlign: "left",
      fill: Colors.Gray,
      stroke: Colors.Transparent,
      strokeWidth: 0,
      draggable: true,
      opacity: 1,
      padding: 4,
      width: 120,
      height: 20
    }
  });
  elementRegistry.register({
    type: ElementTypes.Text,
    subType: TextTypes.SpeechBubble,
    name: "Speech Bubble",
    icon: Icons.SpeechBubble,
    description: "Text in a speech bubble",
    category: ElementCategories.Text,
    editPanel: {
      component: TextEditPanel,
      title: "Speech Bubble Properties",
      icon: Icons.SpeechBubble
    },
    konvaComponent: Text,
    defaultProps: {
      text: "Hello!",
      fontFamily: "Arial",
      fontSize: 16,
      fontWeight: "normal",
      textAlign: "center",
      fill: Colors.Black,
      stroke: Colors.Black,
      strokeWidth: 2,
      draggable: true,
      opacity: 1,
      padding: 16,
      width: 120,
      height: 60,
      bubbleStyle: "round",
      tailDirection: "bottom-left"
    }
  });
  elementRegistry.register({
    type: ElementTypes.Text,
    subType: TextTypes.TextBanner,
    name: "Text Banner",
    icon: Icons.TextBanner,
    description: "Text in a decorative banner",
    category: ElementCategories.Text,
    editPanel: {
      component: TextEditPanel,
      title: "Text Banner Properties",
      icon: Icons.TextBanner
    },
    konvaComponent: Text,
    defaultProps: {
      text: "BANNER TEXT",
      fontFamily: "Arial",
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      fill: Colors.White,
      stroke: Colors.Black,
      strokeWidth: 1,
      draggable: true,
      opacity: 1,
      padding: 12,
      width: 200,
      height: 50,
      bannerStyle: "ribbon",
      curved: false
    }
  });
}
function ImageEditPanel($$payload, $$props) {
  push();
  let { element, updateProperty } = $$props;
  $$payload.out += `<div class="flex items-center gap-4">`;
  OpacityEditor($$payload, {
    value: element.opacity || 1,
    onUpdate: (value) => updateProperty(ElementProperties.Opacity, value)
  });
  $$payload.out += `<!----> <div class="h-6 w-px bg-primary"></div> <div class="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path></svg> <input type="range" min="-1" max="1" step="0.01"${attr("value", element.brightness || 0)} class="w-20"/> <span class="text-xs text-text-muted w-8">${escape_html(Math.round((element.brightness || 0) * 100))}</span></div> <div class="h-6 w-px bg-primary"></div> <div class="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a10 10 0 0 0 0 20v-20z" fill="currentColor"></path></svg> <input type="range" min="-1" max="1" step="0.01"${attr("value", element.contrast || 0)} class="w-20"/> <span class="text-xs text-text-muted w-8">${escape_html(Math.round((element.contrast || 0) * 100))}</span></div></div>`;
  pop();
}
function registerImages() {
  elementRegistry.register({
    type: ElementTypes.Image,
    subType: ImageTypes.Upload,
    name: "Upload Image",
    icon: Icons.Image,
    description: "Upload and add an image",
    category: ElementCategories.Images,
    editPanel: {
      component: ImageEditPanel,
      title: "Image Properties",
      icon: Icons.Image
    },
    konvaComponent: Image,
    defaultProps: {
      width: 100,
      height: 100,
      draggable: true,
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
      rotation: 0
    }
  });
}
function initializeApp() {
  registerShapes();
  registerText();
  registerImages();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  initializeApp();
  let selectedId = null;
  let stageRef = void 0;
  let stageRefs = [];
  let updateTransformer = void 0;
  function handleStageReady(stage) {
    stageRef = stage;
  }
  let editingTextId = null;
  let designTitle = "Design Canvas";
  let currentDesignId = null;
  let saveStatus = SaveStatus.IDLE;
  let canvasBackgroundColor = "#ffffff";
  let showGrid = false;
  let canvasZoom = 100;
  let canvasWidth = 500;
  let canvasHeight = 400;
  const selectedElement = selectedId ? store_get($$store_subs ??= {}, "$elements", elements).find((element) => element.id === selectedId) || null : null;
  const editBarVisible = !!selectedElement;
  const elementDragEndHandler = createElementDragEndHandler(canvasZoom);
  const zoomHandler = createZoomHandler(() => stageRef, (zoom) => canvasZoom = zoom);
  const panHandlers = createPanHandlers();
  const updateElementHandler = handleUpdateElement();
  const updateCanvasBackgroundHandler = handleUpdateCanvasBackground((color) => canvasBackgroundColor = color);
  const textElementDragEndHandler = handleTextElementDragEnd(canvasZoom);
  function handleTextElementDblClick(textElement) {
    editingTextId = textElement.id;
  }
  function handleCloseTextEditor() {
    editingTextId = null;
  }
  async function saveDesign() {
    const currentAuthState = store_get($$store_subs ??= {}, "$authStore", authStore);
    if (!currentAuthState.user) {
      console.error("Cannot save: user not authenticated");
      saveStatus = SaveStatus.ERROR;
      return;
    }
    if (!currentDesignId) {
      return await createNewDesign();
    }
    try {
      saveStatus = SaveStatus.SAVING;
      const designData = {
        title: designTitle,
        pages: zineStore.exportPages(store_get($$store_subs ??= {}, "$zineStore", zineStore))
      };
      const url = buildApiUrl(API_ENDPOINTS.DESIGNS.BY_ID(currentDesignId));
      const response = await fetch(url, {
        method: "PUT",
        ...FETCH_OPTIONS.WITH_JSON,
        body: JSON.stringify(designData)
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Save failed with response:", errorText);
        throw new Error(`Failed to save design: ${response.status} - ${errorText}`);
      }
      const savedDesign = await response.json();
      saveStatus = SaveStatus.SAVED;
      setTimeout(
        () => {
          if (saveStatus === SaveStatus.SAVED) {
            saveStatus = SaveStatus.IDLE;
          }
        },
        2e3
      );
    } catch (error) {
      console.error("Failed to save design:", error);
      saveStatus = SaveStatus.ERROR;
      setTimeout(
        () => {
          if (saveStatus === SaveStatus.ERROR) {
            saveStatus = SaveStatus.IDLE;
          }
        },
        5e3
      );
    }
  }
  async function createNewDesign() {
    const currentAuthState = store_get($$store_subs ??= {}, "$authStore", authStore);
    if (!currentAuthState.user) {
      console.error("Cannot create design: user not authenticated");
      saveStatus = SaveStatus.ERROR;
      return;
    }
    try {
      saveStatus = SaveStatus.SAVING;
      const designData = {
        title: designTitle,
        pages: zineStore.exportPages(store_get($$store_subs ??= {}, "$zineStore", zineStore))
      };
      const url = buildApiUrl(API_ENDPOINTS.DESIGNS.BASE);
      const response = await fetch(url, {
        method: "POST",
        ...FETCH_OPTIONS.WITH_JSON,
        body: JSON.stringify(designData)
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Create failed with response:", errorText);
        throw new Error(`Failed to create design: ${response.status} - ${errorText}`);
      }
      const newDesign = await response.json();
      console.log("New design created:", newDesign);
      currentDesignId = newDesign.id;
      const url2 = new URL(window.location.href);
      url2.searchParams.set("id", newDesign.id);
      window.history.replaceState({}, "", url2);
      console.log("URL updated to:", url2.toString());
      saveStatus = SaveStatus.SAVED;
      setTimeout(
        () => {
          if (saveStatus === SaveStatus.SAVED) {
            saveStatus = SaveStatus.IDLE;
          }
        },
        2e3
      );
    } catch (error) {
      console.error("Failed to create design:", error);
      saveStatus = SaveStatus.ERROR;
      setTimeout(
        () => {
          if (saveStatus === SaveStatus.ERROR) {
            saveStatus = SaveStatus.IDLE;
          }
        },
        5e3
      );
    }
  }
  function handleManualSave() {
    saveDesign();
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div${attr_class(`fixed inset-0 ${stringify(StyleGuide.DarkBg)}`)}>`;
    Header($$payload2, {});
    $$payload2.out += `<!----> `;
    EditorTopBar($$payload2, {
      title: designTitle,
      canUndo: history.canUndo(store_get($$store_subs ??= {}, "$history", history)),
      canRedo: history.canRedo(store_get($$store_subs ??= {}, "$history", history)),
      onSave: handleManualSave,
      saveStatus
    });
    $$payload2.out += `<!----> <div class="fixed left-0 z-30" style="top: 112px; bottom: 0;">`;
    CanvasSidebar($$payload2);
    $$payload2.out += `<!----></div> <div class="flex h-full flex-col"${attr_style(`margin-left: ${stringify(LayoutDimensions.SidebarClosedWidth)}; margin-top: 112px;`)}><div class="fixed z-20"${attr_style(`top: 112px; left: ${stringify(LayoutDimensions.SidebarClosedWidth)}; right: 0; height: ${stringify(LayoutDimensions.EditBarHeight)};`)}>`;
    if (selectedElement) {
      $$payload2.out += "<!--[-->";
      EditBarComponent($$payload2, {
        selectedElement,
        isVisible: editBarVisible,
        onUpdateElement: updateElementHandler
      });
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<div${attr_class(`h-full ${stringify(StyleGuide.PanelBg)} px-6 py-3 border-b border-border`)}><div class="flex h-full items-center gap-6 overflow-x-auto">`;
      CanvasEditPanel($$payload2, {
        backgroundColor: canvasBackgroundColor,
        showGrid,
        zoom: canvasZoom,
        canvasWidth,
        canvasHeight,
        onUpdateBackground: updateCanvasBackgroundHandler
      });
      $$payload2.out += `<!----></div></div>`;
    }
    $$payload2.out += `<!--]--></div> <div class="pt-8 px-4 pb-4"${attr_style(`margin-top: ${stringify(LayoutDimensions.EditBarHeight)};`)}>`;
    MultiPageCanvas($$payload2, {
      onStageReady: handleStageReady,
      canvasZoom,
      showGrid,
      selectedId,
      onStageClick: (e) => {
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
          selectedId = null;
        }
      },
      onWheel: zoomHandler,
      onMouseDown: panHandlers.handleMouseDown,
      onMouseMove: panHandlers.handleMouseMove,
      onMouseUp: panHandlers.handleMouseUp,
      onElementDragEnd: elementDragEndHandler,
      onElementClick: (id) => {
        selectedId = id;
        if (updateTransformer) updateTransformer();
      },
      onTextElementClick: (id) => {
        selectedId = id;
        if (updateTransformer) updateTransformer();
      },
      onTextElementDblClick: handleTextElementDblClick,
      onTextElementDragEnd: textElementDragEndHandler,
      get updateTransformer() {
        return updateTransformer;
      },
      set updateTransformer($$value) {
        updateTransformer = $$value;
        $$settled = false;
      },
      get stageRefs() {
        return stageRefs;
      },
      set stageRefs($$value) {
        stageRefs = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div></div> `;
    TextEditor($$payload2, {
      editingTextId,
      texts: store_get($$store_subs ??= {}, "$elements", elements).filter(isText),
      onClose: handleCloseTextEditor
    });
    $$payload2.out += `<!----> `;
    DownloadModal($$payload2, {
      pages: store_get($$store_subs ??= {}, "$zineStore", zineStore).pages || []
    });
    $$payload2.out += `<!----></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
