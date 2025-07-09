import { P as current_component, z as push, N as attr_class, C as pop, K as stringify, O as attr_style, Q as bind_props, E as escape_html, I as ensure_array_like, J as attr, R as maybe_selected, D as getContext, S as copy_payload, T as assign_payload, F as store_get, M as unsubscribe_stores } from "../../../chunks/index.js";
import { w as writable, g as get } from "../../../chunks/index2.js";
import "clsx";
import { P as PostPunkStyles, S as SaveStatus, a as SaveStatusText, U as UIStrings, c as SaveStatusColors, H as Header, L as LayoutDimensions, b as buildApiUrl, A as API_ENDPOINTS } from "../../../chunks/Header.js";
import "konva";
import { Arrow as Arrow$1 } from "konva/lib/shapes/Arrow.js";
import { Circle as Circle$1 } from "konva/lib/shapes/Circle.js";
import { Ellipse as Ellipse$1 } from "konva/lib/shapes/Ellipse.js";
import { Rect as Rect$1 } from "konva/lib/shapes/Rect.js";
import { RegularPolygon as RegularPolygon$1 } from "konva/lib/shapes/RegularPolygon.js";
import { Shape as Shape$1 } from "konva/lib/Shape.js";
import { Star as Star$1 } from "konva/lib/shapes/Star.js";
import { Text as Text$1 } from "konva/lib/shapes/Text.js";
import { Image as Image$1 } from "konva/lib/shapes/Image.js";
import "../../../chunks/client.js";
import { F as FETCH_OPTIONS } from "../../../chunks/http.js";
import { a as authStore } from "../../../chunks/auth.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
const ShapeTypes = {
  Circle: "circle",
  Rectangle: "rectangle",
  Square: "square",
  Triangle: "triangle",
  Pentagon: "pentagon",
  Hexagon: "hexagon",
  Star: "star",
  Diamond: "diamond",
  Ellipse: "ellipse",
  Arrow: "arrow",
  Heart: "heart",
  Cross: "cross"
};
const shapes = writable([]);
const TextTypes = {
  Heading: "heading",
  Paragraph: "paragraph",
  Caption: "caption"
};
const textElements = writable([]);
const ImageTypes = {
  Upload: "upload"
};
const images = writable([]);
function createHistoryStore() {
  const { subscribe, set, update } = writable({
    states: [],
    currentIndex: -1
  });
  function captureCurrentState(canvasBackgroundColor, canvasWidth, canvasHeight) {
    return {
      shapes: get(shapes),
      textElements: get(textElements),
      images: get(images),
      canvasBackgroundColor: canvasBackgroundColor || "#ffffff",
      canvasWidth: canvasWidth || 500,
      canvasHeight: canvasHeight || 400
    };
  }
  function pushState(canvasBackgroundColor, canvasWidth, canvasHeight) {
    const currentState = captureCurrentState(canvasBackgroundColor, canvasWidth, canvasHeight);
    update((store) => {
      const newStates = store.states.slice(0, store.currentIndex + 1);
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
    update((store) => {
      if (store.currentIndex > 0) {
        const previousState = store.states[store.currentIndex - 1];
        shapes.set(previousState.shapes);
        textElements.set(previousState.textElements);
        images.set(previousState.images);
        return {
          ...store,
          currentIndex: store.currentIndex - 1,
          restoredState: previousState
        };
      }
      return store;
    });
  }
  function redo() {
    update((store) => {
      if (store.currentIndex < store.states.length - 1) {
        const nextState = store.states[store.currentIndex + 1];
        shapes.set(nextState.shapes);
        textElements.set(nextState.textElements);
        images.set(nextState.images);
        return {
          ...store,
          currentIndex: store.currentIndex + 1,
          restoredState: nextState
        };
      }
      return store;
    });
  }
  function canUndo(store) {
    return store.currentIndex > 0;
  }
  function canRedo(store) {
    return store.currentIndex < store.states.length - 1;
  }
  pushState();
  function getRestoredState() {
    const store = get({ subscribe, update, set });
    return store.restoredState;
  }
  return {
    subscribe,
    pushState,
    undo,
    redo,
    canUndo,
    canRedo,
    getRestoredState
  };
}
const history = createHistoryStore();
const ElementTypes = {
  Shape: "shape",
  Text: "text",
  Image: "image"
};
const ElementCategories = {
  Shapes: "shapes",
  Text: "text",
  Images: "images"
};
class ElementRegistryImpl {
  elements = /* @__PURE__ */ new Map();
  getKey(type, subType) {
    return `${type}:${subType}`;
  }
  register(definition) {
    const key = this.getKey(definition.type, definition.subType);
    this.elements.set(key, definition);
  }
  get(type, subType) {
    const key = this.getKey(type, subType);
    return this.elements.get(key);
  }
  getByCategory(category) {
    return Array.from(this.elements.values()).filter((el) => el.category === category);
  }
  getEditPanel(type, subType) {
    return this.get(type, subType)?.editPanel;
  }
  getKonvaComponent(type, subType) {
    return this.get(type, subType)?.konvaComponent;
  }
}
const elementRegistry = new ElementRegistryImpl();
const Colors = {
  // Post-Punk Brand Colors
  Black: "#000000",
  Gray: "#808080",
  // Common UI colors
  Transparent: "transparent",
  // Default shape colors (keep existing for canvas)
  DefaultFill: "#ffa500",
  // Orange
  DefaultStroke: "#000000"
  // Black
};
function updateElementPosition(id, x, y) {
  shapes.update(
    (current) => current.map(
      (shape) => shape.id === id ? { ...shape, x, y } : shape
    )
  );
  textElements.update(
    (current) => current.map(
      (text) => text.id === id ? { ...text, x, y } : text
    )
  );
  images.update(
    (current) => current.map(
      (image) => image.id === id ? { ...image, x, y } : image
    )
  );
}
function handleUpdateCanvasBackground(setCanvasBackgroundColor) {
  return (color) => {
    setCanvasBackgroundColor(color);
    history.pushState(color);
  };
}
function updateShapePosition(id, x, y) {
  shapes.update(
    (current) => current.map(
      (shape) => shape.id === id ? { ...shape, x, y } : shape
    )
  );
}
function handleUpdateElement() {
  return (elementId, updates) => {
    shapes.update(
      (currentShapes) => currentShapes.map(
        (shape) => shape.id === elementId ? { ...shape, ...updates } : shape
      )
    );
    textElements.update(
      (currentElements) => currentElements.map(
        (element) => element.id === elementId ? { ...element, ...updates } : element
      )
    );
    images.update(
      (currentImages) => currentImages.map(
        (image) => image.id === elementId ? { ...image, ...updates } : image
      )
    );
    history.pushState();
  };
}
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
  $$payload.out += `<div class="flex h-full"><div${attr_class(PostPunkStyles.SidebarToolbox)}><div class="flex-1 space-y-1 px-2 pt-4"><button${attr_class(`${stringify(PostPunkStyles.SidebarButton)} ${stringify(PostPunkStyles.SidebarButtonInactive)}`)}><svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg> <span>SHAPES</span></button> <button${attr_class(`${stringify(PostPunkStyles.SidebarButton)} ${stringify(PostPunkStyles.SidebarButtonInactive)}`)}><svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> <span>IMAGES</span></button> <button${attr_class(`${stringify(PostPunkStyles.SidebarButton)} ${stringify(PostPunkStyles.SidebarButtonInactive)}`)}><svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg> <span>TEXT</span></button></div> <div${attr_class(PostPunkStyles.SidebarTrashSection)}><button${attr_class(PostPunkStyles.SidebarTrashButton)}><svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16"></path></svg> <span class="text-xs font-medium">Clear</span></button></div></div> `;
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
  $$payload.out += `<div${attr_class(`h-full ${stringify(PostPunkStyles.PanelBg)} px-6 py-3 ${stringify(isVisible && selectedElement ? "border-b-2 border-green-400" : "")}`)}>`;
  if (isVisible && selectedElement) {
    $$payload.out += "<!--[-->";
    const editPanel = elementRegistry.getEditPanel(selectedElement.type, selectedElement.subType);
    if (editPanel) {
      $$payload.out += "<!--[-->";
      const Component = editPanel.component;
      $$payload.out += `<div class="flex h-full items-center gap-6 overflow-x-auto"><div class="flex items-center gap-3 flex-shrink-0"><span class="text-purple-600">${html(editPanel.icon)}</span></div> <div class="h-6 w-px bg-gray-300 flex-shrink-0"></div> <div class="flex-1 min-w-0"><!---->`;
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
  $$payload.out += `<div class="relative"><button type="button"${attr_class(PostPunkStyles.DropdownButton)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M9 9h6v6H9z"></path></svg> <span class="max-w-32 truncate">${escape_html(currentSizeName())}</span> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"${attr_class(`transition-transform ${stringify("")}`)}><polyline points="6,9 12,15 18,9"></polyline></svg></button> `;
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
  $$payload.out += `<!----> <div${attr_class(PostPunkStyles.EditPanelDivider)}></div> `;
  ZineColorPicker($$payload, {
    value: backgroundColor,
    onUpdate: onUpdateBackground
  });
  $$payload.out += `<!----> <div${attr_class(PostPunkStyles.EditPanelDivider)}></div> <button type="button"${attr_class(`${stringify(PostPunkStyles.EditPanelIconButton)} ${stringify(showGrid ? "bg-green-400 text-black" : "")}`)}${attr("aria-pressed", showGrid)} title="Toggle grid"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="8" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="16" y2="21"></line><line x1="3" y1="8" x2="21" y2="8"></line><line x1="3" y1="16" x2="21" y2="16"></line></svg></button> <div${attr_class(PostPunkStyles.EditPanelDivider)}></div> <div class="flex items-center gap-2"><button type="button"${attr_class(PostPunkStyles.EditPanelSmallButton)}${attr("disabled", zoom <= 25, true)} title="Zoom out" aria-label="Zoom out canvas"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path><line x1="8" y1="11" x2="14" y2="11"></line></svg></button> <select${attr_class(PostPunkStyles.EditPanelSelect)} aria-label="Canvas zoom level">`;
  $$payload.select_value = zoom;
  $$payload.out += `<!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let level = each_array[$$index];
    $$payload.out += `<option${attr("value", level)}${maybe_selected($$payload, level)}>${escape_html(level)}%</option>`;
  }
  $$payload.out += `<!--]-->`;
  $$payload.select_value = void 0;
  $$payload.out += `</select> <button type="button"${attr_class(PostPunkStyles.EditPanelSmallButton)}${attr("disabled", zoom >= 500, true)} title="Zoom in" aria-label="Zoom in canvas"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg></button></div> <div${attr_class(PostPunkStyles.EditPanelDivider)}></div> <button type="button"${attr_class(PostPunkStyles.EditPanelIconButton)} title="Fit to window" aria-label="Fit canvas to window"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg></button></div>`;
  pop();
}
const KONVA_EVENTS = [
  "mouseover",
  "mouseout",
  "mouseenter",
  "mouseleave",
  "mousemove",
  "mousedown",
  "mouseup",
  "wheel",
  "click",
  "dblclick",
  "touchstart",
  "touchmove",
  "touchend",
  "tap",
  "dbltap",
  "pointerdown",
  "pointermove",
  "pointerup",
  "pointercancel",
  "pointerover",
  "pointerenter",
  "pointerout",
  "pointerleave",
  "pointerclick",
  "pointerdblclick",
  "contextmenu",
  "dragstart",
  "dragmove",
  "dragend",
  "transformstart",
  "transform",
  "transformend"
];
function registerEvents(eventHooks, node) {
  KONVA_EVENTS.forEach((event) => {
    const hook = eventHooks[`on${event}`];
    if (typeof hook === "function") {
      node.on(event, (payload) => {
        hook(payload);
      });
    }
  });
}
const CONTAINER_COMPONENT_KEYS = [
  "svelte-konva-stage",
  "svelte-konva-layer",
  "svelte-konva-group",
  "svelte-konva-label"
];
var Container;
(function(Container2) {
  Container2[Container2["Stage"] = 0] = "Stage";
  Container2[Container2["Layer"] = 1] = "Layer";
  Container2[Container2["Group"] = 2] = "Group";
  Container2[Container2["Label"] = 3] = "Label";
})(Container || (Container = {}));
const CONTAINER_ERROR = "svelte-konva: Component does not have any parent container. Please make sure that the component is wrapped inside a Layer or Group.";
function getParentContainer() {
  for (let i = 1; i < 4; i++) {
    const parent = getContext(CONTAINER_COMPONENT_KEYS[i]);
    if (parent) {
      return parent;
    }
  }
  throw new Error(CONTAINER_ERROR);
}
function Arrow($$payload, $$props) {
  push();
  let {
    staticConfig = false,
    x = void 0,
    y = void 0,
    scale = void 0,
    scaleX = void 0,
    scaleY = void 0,
    rotation = void 0,
    skewX = void 0,
    skewY = void 0,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const node = new Arrow$1({
    x,
    y,
    scale,
    scaleX,
    scaleY,
    rotation,
    skewX,
    skewY,
    ...restProps
  });
  getParentContainer().add(node);
  if (!staticConfig) {
    const attrs = node.getAttrs();
    node.on("transformend", () => {
      if (x !== void 0) x = attrs.x;
      if (y !== void 0) y = attrs.y;
      if (scale !== void 0) scale = attrs.scale;
      if (scaleX !== void 0) scaleX = attrs.scaleX;
      if (scaleY !== void 0) scaleY = attrs.scaleY;
      if (rotation !== void 0) rotation = attrs.rotation;
      if (skewX !== void 0) skewX = attrs.skewX;
      if (skewY !== void 0) skewY = attrs.skewY;
    });
    node.on("dragend", () => {
      if (x !== void 0) x = attrs.x;
      if (y !== void 0) y = attrs.y;
    });
  }
  Object.keys(restProps).filter((e) => !e.startsWith("on")).forEach((e) => {
  });
  registerEvents(restProps, node);
  onDestroy(() => {
    node.destroy();
  });
  bind_props($$props, {
    x,
    y,
    scale,
    scaleX,
    scaleY,
    rotation,
    skewX,
    skewY,
    node
  });
  pop();
}
function Circle($$payload, $$props) {
  push();
  let {
    staticConfig = false,
    x = void 0,
    y = void 0,
    scale = void 0,
    scaleX = void 0,
    scaleY = void 0,
    rotation = void 0,
    skewX = void 0,
    skewY = void 0,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const node = new Circle$1({
    x,
    y,
    scale,
    scaleX,
    scaleY,
    rotation,
    skewX,
    skewY,
    ...restProps
  });
  getParentContainer().add(node);
  if (!staticConfig) {
    const attrs = node.getAttrs();
    node.on("transformend", () => {
      if (x !== void 0) x = attrs.x;
      if (y !== void 0) y = attrs.y;
      if (scale !== void 0) scale = attrs.scale;
      if (scaleX !== void 0) scaleX = attrs.scaleX;
      if (scaleY !== void 0) scaleY = attrs.scaleY;
      if (rotation !== void 0) rotation = attrs.rotation;
      if (skewX !== void 0) skewX = attrs.skewX;
      if (skewY !== void 0) skewY = attrs.skewY;
    });
    node.on("dragend", () => {
      if (x !== void 0) x = attrs.x;
      if (y !== void 0) y = attrs.y;
    });
  }
  Object.keys(restProps).filter((e) => !e.startsWith("on")).forEach((e) => {
  });
  registerEvents(restProps, node);
  onDestroy(() => {
    node.destroy();
  });
  bind_props($$props, {
    x,
    y,
    scale,
    scaleX,
    scaleY,
    rotation,
    skewX,
    skewY,
    node
  });
  pop();
}
function Ellipse($$payload, $$props) {
  push();
  let {
    staticConfig = false,
    x = void 0,
    y = void 0,
    scale = void 0,
    scaleX = void 0,
    scaleY = void 0,
    rotation = void 0,
    skewX = void 0,
    skewY = void 0,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const node = new Ellipse$1({
    x,
    y,
    scale,
    scaleX,
    scaleY,
    rotation,
    skewX,
    skewY,
    ...restProps
  });
  getParentContainer().add(node);
  if (!staticConfig) {
    const attrs = node.getAttrs();
    node.on("transformend", () => {
      if (x !== void 0) x = attrs.x;
      if (y !== void 0) y = attrs.y;
      if (scale !== void 0) scale = attrs.scale;
      if (scaleX !== void 0) scaleX = attrs.scaleX;
      if (scaleY !== void 0) scaleY = attrs.scaleY;
      if (rotation !== void 0) rotation = attrs.rotation;
      if (skewX !== void 0) skewX = attrs.skewX;
      if (skewY !== void 0) skewY = attrs.skewY;
    });
    node.on("dragend", () => {
      if (x !== void 0) x = attrs.x;
      if (y !== void 0) y = attrs.y;
    });
  }
  Object.keys(restProps).filter((e) => !e.startsWith("on")).forEach((e) => {
  });
  registerEvents(restProps, node);
  onDestroy(() => {
    node.destroy();
  });
  bind_props($$props, {
    x,
    y,
    scale,
    scaleX,
    scaleY,
    rotation,
    skewX,
    skewY,
    node
  });
  pop();
}
function Image($$payload, $$props) {
  push();
  let {
    staticConfig = false,
    x = void 0,
    y = void 0,
    scale = void 0,
    scaleX = void 0,
    scaleY = void 0,
    rotation = void 0,
    skewX = void 0,
    skewY = void 0,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const node = new Image$1({
    x,
    y,
    scale,
    scaleX,
    scaleY,
    rotation,
    skewX,
    skewY,
    ...restProps
  });
  getParentContainer().add(node);
  if (!staticConfig) {
    const attrs = node.getAttrs();
    node.on("transformend", () => {
      if (x !== void 0) x = attrs.x;
      if (y !== void 0) y = attrs.y;
      if (scale !== void 0) scale = attrs.scale;
      if (scaleX !== void 0) scaleX = attrs.scaleX;
      if (scaleY !== void 0) scaleY = attrs.scaleY;
      if (rotation !== void 0) rotation = attrs.rotation;
      if (skewX !== void 0) skewX = attrs.skewX;
      if (skewY !== void 0) skewY = attrs.skewY;
    });
    node.on("dragend", () => {
      if (x !== void 0) x = attrs.x;
      if (y !== void 0) y = attrs.y;
    });
  }
  Object.keys(restProps).filter((e) => !e.startsWith("on")).forEach((e) => {
  });
  registerEvents(restProps, node);
  onDestroy(() => {
    node.destroy();
  });
  bind_props($$props, {
    x,
    y,
    scale,
    scaleX,
    scaleY,
    rotation,
    skewX,
    skewY,
    node
  });
  pop();
}
function Rect($$payload, $$props) {
  push();
  let {
    staticConfig = false,
    x = void 0,
    y = void 0,
    scale = void 0,
    scaleX = void 0,
    scaleY = void 0,
    rotation = void 0,
    skewX = void 0,
    skewY = void 0,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const node = new Rect$1({
    x,
    y,
    scale,
    scaleX,
    scaleY,
    rotation,
    skewX,
    skewY,
    ...restProps
  });
  getParentContainer().add(node);
  if (!staticConfig) {
    const attrs = node.getAttrs();
    node.on("transformend", () => {
      if (x !== void 0) x = attrs.x;
      if (y !== void 0) y = attrs.y;
      if (scale !== void 0) scale = attrs.scale;
      if (scaleX !== void 0) scaleX = attrs.scaleX;
      if (scaleY !== void 0) scaleY = attrs.scaleY;
      if (rotation !== void 0) rotation = attrs.rotation;
      if (skewX !== void 0) skewX = attrs.skewX;
      if (skewY !== void 0) skewY = attrs.skewY;
    });
    node.on("dragend", () => {
      if (x !== void 0) x = attrs.x;
      if (y !== void 0) y = attrs.y;
    });
  }
  Object.keys(restProps).filter((e) => !e.startsWith("on")).forEach((e) => {
  });
  registerEvents(restProps, node);
  onDestroy(() => {
    node.destroy();
  });
  bind_props($$props, {
    x,
    y,
    scale,
    scaleX,
    scaleY,
    rotation,
    skewX,
    skewY,
    node
  });
  pop();
}
function RegularPolygon($$payload, $$props) {
  push();
  let {
    staticConfig = false,
    x = void 0,
    y = void 0,
    scale = void 0,
    scaleX = void 0,
    scaleY = void 0,
    rotation = void 0,
    skewX = void 0,
    skewY = void 0,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const node = new RegularPolygon$1({
    x,
    y,
    scale,
    scaleX,
    scaleY,
    rotation,
    skewX,
    skewY,
    ...restProps
  });
  getParentContainer().add(node);
  if (!staticConfig) {
    const attrs = node.getAttrs();
    node.on("transformend", () => {
      if (x !== void 0) x = attrs.x;
      if (y !== void 0) y = attrs.y;
      if (scale !== void 0) scale = attrs.scale;
      if (scaleX !== void 0) scaleX = attrs.scaleX;
      if (scaleY !== void 0) scaleY = attrs.scaleY;
      if (rotation !== void 0) rotation = attrs.rotation;
      if (skewX !== void 0) skewX = attrs.skewX;
      if (skewY !== void 0) skewY = attrs.skewY;
    });
    node.on("dragend", () => {
      if (x !== void 0) x = attrs.x;
      if (y !== void 0) y = attrs.y;
    });
  }
  Object.keys(restProps).filter((e) => !e.startsWith("on")).forEach((e) => {
  });
  registerEvents(restProps, node);
  onDestroy(() => {
    node.destroy();
  });
  bind_props($$props, {
    x,
    y,
    scale,
    scaleX,
    scaleY,
    rotation,
    skewX,
    skewY,
    node
  });
  pop();
}
function Shape($$payload, $$props) {
  push();
  let {
    staticConfig = false,
    x = void 0,
    y = void 0,
    scale = void 0,
    scaleX = void 0,
    scaleY = void 0,
    rotation = void 0,
    skewX = void 0,
    skewY = void 0,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const node = new Shape$1({
    x,
    y,
    scale,
    scaleX,
    scaleY,
    rotation,
    skewX,
    skewY,
    ...restProps
  });
  getParentContainer().add(node);
  if (!staticConfig) {
    const attrs = node.getAttrs();
    node.on("transformend", () => {
      if (x !== void 0) x = attrs.x;
      if (y !== void 0) y = attrs.y;
      if (scale !== void 0) scale = attrs.scale;
      if (scaleX !== void 0) scaleX = attrs.scaleX;
      if (scaleY !== void 0) scaleY = attrs.scaleY;
      if (rotation !== void 0) rotation = attrs.rotation;
      if (skewX !== void 0) skewX = attrs.skewX;
      if (skewY !== void 0) skewY = attrs.skewY;
    });
    node.on("dragend", () => {
      if (x !== void 0) x = attrs.x;
      if (y !== void 0) y = attrs.y;
    });
  }
  Object.keys(restProps).filter((e) => !e.startsWith("on")).forEach((e) => {
  });
  registerEvents(restProps, node);
  onDestroy(() => {
    node.destroy();
  });
  bind_props($$props, {
    x,
    y,
    scale,
    scaleX,
    scaleY,
    rotation,
    skewX,
    skewY,
    node
  });
  pop();
}
function Star($$payload, $$props) {
  push();
  let {
    staticConfig = false,
    x = void 0,
    y = void 0,
    scale = void 0,
    scaleX = void 0,
    scaleY = void 0,
    rotation = void 0,
    skewX = void 0,
    skewY = void 0,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const node = new Star$1({
    x,
    y,
    scale,
    scaleX,
    scaleY,
    rotation,
    skewX,
    skewY,
    ...restProps
  });
  getParentContainer().add(node);
  if (!staticConfig) {
    const attrs = node.getAttrs();
    node.on("transformend", () => {
      if (x !== void 0) x = attrs.x;
      if (y !== void 0) y = attrs.y;
      if (scale !== void 0) scale = attrs.scale;
      if (scaleX !== void 0) scaleX = attrs.scaleX;
      if (scaleY !== void 0) scaleY = attrs.scaleY;
      if (rotation !== void 0) rotation = attrs.rotation;
      if (skewX !== void 0) skewX = attrs.skewX;
      if (skewY !== void 0) skewY = attrs.skewY;
    });
    node.on("dragend", () => {
      if (x !== void 0) x = attrs.x;
      if (y !== void 0) y = attrs.y;
    });
  }
  Object.keys(restProps).filter((e) => !e.startsWith("on")).forEach((e) => {
  });
  registerEvents(restProps, node);
  onDestroy(() => {
    node.destroy();
  });
  bind_props($$props, {
    x,
    y,
    scale,
    scaleX,
    scaleY,
    rotation,
    skewX,
    skewY,
    node
  });
  pop();
}
function Text($$payload, $$props) {
  push();
  let {
    staticConfig = false,
    x = void 0,
    y = void 0,
    scale = void 0,
    scaleX = void 0,
    scaleY = void 0,
    rotation = void 0,
    skewX = void 0,
    skewY = void 0,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const node = new Text$1({
    x,
    y,
    scale,
    scaleX,
    scaleY,
    rotation,
    skewX,
    skewY,
    ...restProps
  });
  getParentContainer().add(node);
  if (!staticConfig) {
    const attrs = node.getAttrs();
    node.on("transformend", () => {
      if (x !== void 0) x = attrs.x;
      if (y !== void 0) y = attrs.y;
      if (scale !== void 0) scale = attrs.scale;
      if (scaleX !== void 0) scaleX = attrs.scaleX;
      if (scaleY !== void 0) scaleY = attrs.scaleY;
      if (rotation !== void 0) rotation = attrs.rotation;
      if (skewX !== void 0) skewX = attrs.skewX;
      if (skewY !== void 0) skewY = attrs.skewY;
    });
    node.on("dragend", () => {
      if (x !== void 0) x = attrs.x;
      if (y !== void 0) y = attrs.y;
    });
  }
  Object.keys(restProps).filter((e) => !e.startsWith("on")).forEach((e) => {
  });
  registerEvents(restProps, node);
  onDestroy(() => {
    node.destroy();
  });
  bind_props($$props, {
    x,
    y,
    scale,
    scaleX,
    scaleY,
    rotation,
    skewX,
    skewY,
    node
  });
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
    shapes: shapes$1,
    images: images$1,
    textElements: textElements$1,
    selectedId,
    onStageClick,
    onWheel,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onShapeDragEnd,
    onImageDragEnd,
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
  $$payload.out += `<div class="flex-1 overflow-auto"><div class="flex items-start justify-start"${attr_style(`padding: 48px; min-width: ${stringify(canvasWidth * (canvasZoom / 100) + 96)}px; min-height: ${stringify(canvasHeight * (canvasZoom / 100) + 96)}px;`)}><div class="border border-gray-200 shadow-lg relative"${attr_style(`background-color: ${stringify(canvasBackgroundColor)}; width: ${stringify(canvasWidth * (canvasZoom / 100))}px; height: ${stringify(canvasHeight * (canvasZoom / 100))}px;`)}>`;
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
    $$payload.out += `<button${attr("disabled", saveStatus === SaveStatus.SAVING, true)}${attr_class(`${stringify(PostPunkStyles.SmallButton)} px-3 py-1 disabled:opacity-50`)} title="Save (Ctrl+S)">SAVE</button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <button${attr_class(`${stringify(PostPunkStyles.SmallButton)} px-3 py-1`)}>${escape_html(UIStrings.ExportButton)}</button></div></div></div>`;
  pop();
}
function TextEditor($$payload, $$props) {
  push();
  let {
    editingTextId,
    textElements: textElementsArray,
    onClose
  } = $$props;
  const editingText = editingTextId ? textElementsArray.find((t) => t.id === editingTextId) : null;
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
function createShapeDragEndHandler(canvasZoom) {
  return function handleShapeDragEnd(shape, e) {
    const node = e.target;
    const zoomFactor = canvasZoom / 100;
    updateShapePosition(shape.id, node.x() / zoomFactor, node.y() / zoomFactor);
    history.pushState();
  };
}
function createImageDragEndHandler(canvasZoom) {
  return function handleImageDragEnd(image, e) {
    const node = e.target;
    const zoomFactor = canvasZoom / 100;
    updateElementPosition(image.id, node.x() / zoomFactor, node.y() / zoomFactor);
    history.pushState();
  };
}
function createZoomHandler(canvasZoom, setCanvasZoom) {
  return function handleWheel(e) {
    if (!e.ctrlKey && !e.metaKey) return;
    e.preventDefault();
    const zoomStep = 10;
    let newZoom;
    if (e.deltaY > 0) {
      newZoom = Math.max(25, canvasZoom - zoomStep);
    } else {
      newZoom = Math.min(500, canvasZoom + zoomStep);
    }
    setCanvasZoom(newZoom);
  };
}
function createPanHandlers() {
  let isDragging = false;
  let dragStart = { x: 0, y: 0 };
  let stageRef = null;
  const handleMouseDown = (e) => {
    if (e.button === 1 || e.button === 0 && e.altKey) {
      isDragging = true;
      dragStart = { x: e.clientX, y: e.clientY };
      e.preventDefault();
    }
  };
  const handleMouseMove = (e) => {
    if (!isDragging || !stageRef) return;
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    const stage = stageRef;
    const currentPos = stage.position();
    stage.position({
      x: currentPos.x + dx,
      y: currentPos.y + dy
    });
    dragStart = { x: e.clientX, y: e.clientY };
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
  $$payload.out += `<!----> <div class="relative"><button type="button" class="flex items-center gap-2 px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"><div class="w-6 h-px bg-gray-700"${attr_style(`height: ${stringify(width)}px;`)}></div> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"${attr_class(`transition-transform ${stringify("")}`)}><polyline points="6,9 12,15 18,9"></polyline></svg></button> `;
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
  $$payload.out += `<div class="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-gray-600"><circle cx="12" cy="12" r="8" opacity="0.3"></circle><circle cx="12" cy="12" r="5" opacity="0.6"></circle><circle cx="12" cy="12" r="2" opacity="1"></circle></svg> <input id="opacity" type="range" min="0" max="1" step="0.01"${attr("value", value)} class="w-20 focus:outline-none focus:ring-2 focus:ring-purple-500"/> <span class="text-sm text-gray-500 w-8">${escape_html(Math.round(value * 100))}%</span></div>`;
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
  $$payload.out += `<!----> <div class="h-6 w-px bg-gray-200"></div> `;
  BorderEditor($$payload, {
    color: element.stroke,
    width: element.strokeWidth,
    onUpdateColor: (color) => updateProperty(ElementProperties.Stroke, color),
    onUpdateWidth: (width) => updateProperty(ElementProperties.StrokeWidth, width)
  });
  $$payload.out += `<!----> <div class="h-6 w-px bg-gray-200"></div> `;
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
    konvaComponent: RegularPolygon,
    defaultProps: {
      sides: 4,
      radius: 35,
      rotation: 45,
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
  $$payload.out += `<div class="flex items-center gap-4"><div class="flex items-center gap-2"><label for="font-family-select" class="sr-only">Font family</label> <select id="font-family-select" class="rounded border border-gray-300 px-2 py-1 text-sm" aria-label="Choose font family">`;
  $$payload.select_value = element.fontFamily;
  $$payload.out += `<option value="Arial"${maybe_selected($$payload, "Arial")}>Arial</option><option value="Helvetica"${maybe_selected($$payload, "Helvetica")}>Helvetica</option><option value="Times New Roman"${maybe_selected($$payload, "Times New Roman")}>Times New Roman</option><option value="Georgia"${maybe_selected($$payload, "Georgia")}>Georgia</option><option value="Courier New"${maybe_selected($$payload, "Courier New")}>Courier New</option>`;
  $$payload.select_value = void 0;
  $$payload.out += `</select></div> <div class="flex items-center gap-2"><label for="font-size-input" class="sr-only">Font size</label> <input id="font-size-input" type="number" min="8" max="200"${attr("value", element.fontSize)} class="w-16 rounded border border-gray-300 px-2 py-1 text-sm" aria-label="Font size in pixels"/></div> <div class="h-6 w-px bg-gray-200"></div> `;
  FillEditor($$payload, {
    value: element.fill,
    onUpdate: (value) => updateProperty(ElementProperties.Fill, value)
  });
  $$payload.out += `<!----> <div class="h-6 w-px bg-gray-200"></div> `;
  BorderEditor($$payload, {
    color: element.stroke || "#000000",
    width: element.strokeWidth || 0,
    onUpdateColor: (color) => updateProperty(ElementProperties.Stroke, color),
    onUpdateWidth: (width) => updateProperty(ElementProperties.StrokeWidth, width)
  });
  $$payload.out += `<!----> <div class="h-6 w-px bg-gray-200"></div> `;
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
}
function ImageEditPanel($$payload, $$props) {
  push();
  let { element, updateProperty } = $$props;
  $$payload.out += `<div class="flex items-center gap-4">`;
  OpacityEditor($$payload, {
    value: element.opacity || 1,
    onUpdate: (value) => updateProperty(ElementProperties.Opacity, value)
  });
  $$payload.out += `<!----> <div class="h-6 w-px bg-gray-200"></div> <div class="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-gray-600"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path></svg> <input type="range" min="-1" max="1" step="0.01"${attr("value", element.brightness || 0)} class="w-20"/> <span class="text-xs text-gray-500 w-8">${escape_html(Math.round((element.brightness || 0) * 100))}</span></div> <div class="h-6 w-px bg-gray-200"></div> <div class="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-gray-600"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a10 10 0 0 0 0 20v-20z" fill="currentColor"></path></svg> <input type="range" min="-1" max="1" step="0.01"${attr("value", element.contrast || 0)} class="w-20"/> <span class="text-xs text-gray-500 w-8">${escape_html(Math.round((element.contrast || 0) * 100))}</span></div></div>`;
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
  let updateTransformer = void 0;
  function handleStageReady(stage) {
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
  const selectedElement = selectedId ? store_get($$store_subs ??= {}, "$shapes", shapes).find((shape) => shape.id === selectedId) || store_get($$store_subs ??= {}, "$textElements", textElements).find((text) => text.id === selectedId) || store_get($$store_subs ??= {}, "$images", images).find((image) => image.id === selectedId) || null : null;
  const editBarVisible = !!selectedElement;
  const shapeDragEndHandler = createShapeDragEndHandler(canvasZoom);
  const imageDragEndHandler = createImageDragEndHandler(canvasZoom);
  const zoomHandler = createZoomHandler(canvasZoom, (zoom) => canvasZoom = zoom);
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
      console.log("No current design ID, creating new design");
      return await createNewDesign();
    }
    try {
      saveStatus = SaveStatus.SAVING;
      console.log("Saving design with ID:", currentDesignId);
      const designData = {
        title: designTitle,
        canvas_data: {
          shapes: store_get($$store_subs ??= {}, "$shapes", shapes),
          textElements: store_get($$store_subs ??= {}, "$textElements", textElements),
          images: store_get($$store_subs ??= {}, "$images", images)
        },
        canvas_background: canvasBackgroundColor,
        canvas_size: { width: canvasWidth, height: canvasHeight }
      };
      console.log("Design data being saved:", designData);
      const url = buildApiUrl(API_ENDPOINTS.DESIGNS.BY_ID(currentDesignId));
      console.log("Saving to URL:", url);
      const response = await fetch(url, {
        method: "PUT",
        ...FETCH_OPTIONS.WITH_JSON,
        body: JSON.stringify(designData)
      });
      console.log("Save response status:", response.status);
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Save failed with response:", errorText);
        throw new Error(`Failed to save design: ${response.status} - ${errorText}`);
      }
      const savedDesign = await response.json();
      console.log("Design saved successfully:", savedDesign);
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
      console.log("Creating new design");
      const designData = {
        title: designTitle,
        canvas_data: {
          shapes: store_get($$store_subs ??= {}, "$shapes", shapes),
          textElements: store_get($$store_subs ??= {}, "$textElements", textElements),
          images: store_get($$store_subs ??= {}, "$images", images)
        },
        canvas_background: canvasBackgroundColor,
        canvas_size: { width: canvasWidth, height: canvasHeight }
      };
      console.log("New design data:", designData);
      const url = buildApiUrl(API_ENDPOINTS.DESIGNS.BASE);
      console.log("Creating design at URL:", url);
      const response = await fetch(url, {
        method: "POST",
        ...FETCH_OPTIONS.WITH_JSON,
        body: JSON.stringify(designData)
      });
      console.log("Create response status:", response.status);
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
    $$payload2.out += `<div${attr_class(`relative h-screen ${stringify(PostPunkStyles.DarkBg)}`)}>`;
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
      $$payload2.out += `<div${attr_class(`h-full ${stringify(PostPunkStyles.PanelBg)} px-6 py-3 border-b border-gray-700`)}><div class="flex h-full items-center gap-6 overflow-x-auto">`;
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
    $$payload2.out += `<!--]--></div> <div${attr_style(`margin-top: ${stringify(LayoutDimensions.EditBarHeight)};`)}>`;
    CanvasContainer($$payload2, {
      onStageReady: handleStageReady,
      canvasWidth,
      canvasHeight,
      canvasZoom,
      canvasBackgroundColor,
      showGrid,
      shapes: store_get($$store_subs ??= {}, "$shapes", shapes),
      images: store_get($$store_subs ??= {}, "$images", images),
      textElements: store_get($$store_subs ??= {}, "$textElements", textElements),
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
      onShapeDragEnd: shapeDragEndHandler,
      onImageDragEnd: imageDragEndHandler,
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
      }
    });
    $$payload2.out += `<!----></div></div> `;
    TextEditor($$payload2, {
      editingTextId,
      textElements: store_get($$store_subs ??= {}, "$textElements", textElements),
      onClose: handleCloseTextEditor
    });
    $$payload2.out += `<!----> `;
    DownloadModal($$payload2);
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
