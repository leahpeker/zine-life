import {
	X as current_component,
	G as store_get,
	F as escape_html,
	P as attr_class,
	N as unsubscribe_stores,
	D as pop,
	A as push,
	M as stringify,
	C as setContext,
	E as getContext,
	Q as bind_props
} from './index.js';
import 'clsx';
import './client.js';
import { a as authStore } from './auth.js';
import { Arrow as Arrow$1 } from 'konva/lib/shapes/Arrow.js';
import { Circle as Circle$1 } from 'konva/lib/shapes/Circle.js';
import { Ellipse as Ellipse$1 } from 'konva/lib/shapes/Ellipse.js';
import { Image as Image$1 } from 'konva/lib/shapes/Image.js';
import { Rect as Rect$1 } from 'konva/lib/shapes/Rect.js';
import { RegularPolygon as RegularPolygon$1 } from 'konva/lib/shapes/RegularPolygon.js';
import { Shape as Shape$1 } from 'konva/lib/Shape.js';
import { Star as Star$1 } from 'konva/lib/shapes/Star.js';
import { Text as Text$1 } from 'konva/lib/shapes/Text.js';
import { w as writable } from './index2.js';
function onDestroy(fn) {
	var context =
		/** @type {Component} */
		current_component;
	(context.d ??= []).push(fn);
}
const API_CONFIG = {
	BASE_URL: 'http://localhost:8000'
};
const API_ENDPOINTS = {
	// Auth endpoints
	AUTH: {
		ME: '/api/auth/me',
		LOGOUT: '/api/auth/logout',
		GOOGLE_LOGIN: '/auth/google'
	},
	// Design endpoints
	DESIGNS: {
		BASE: '/api/designs',
		PUBLIC: '/api/designs/public',
		BY_ID: (id) => `/api/designs/${id}`
	},
	// Health endpoints
	HEALTH: '/health',
	DB_STATUS: '/api/db-status'
};
function buildApiUrl(endpoint) {
	return `${API_CONFIG.BASE_URL}${endpoint}`;
}
const UIStrings = {
	ExportButton: 'Download'
};
const StyleGuide = {
	// Button styles
	PrimaryButton:
		'bg-primary text-black px-6 py-3 font-black tracking-wide transform -skew-x-6 hover:bg-primary-light transition-colors border-2 border-primary font-industrial',
	SmallButton:
		'bg-transparent text-primary px-4 py-1 text-sm font-black border border-primary hover:bg-primary hover:text-black transition-colors font-industrial',
	// Sidebar specific buttons
	SidebarButton:
		'flex w-full flex-col items-center border-2 p-3 transition-all duration-200 font-black text-xs tracking-wide font-industrial',
	SidebarButtonInactive:
		'text-primary border-primary hover:bg-primary hover:text-black bg-transparent',
	// Sidebar layout components
	SidebarToolbox: 'flex w-20 flex-col h-full bg-background-panel border-r-2 border-primary',
	SidebarTrashSection: 'p-2 border-t border-border',
	SidebarTrashButton:
		'flex w-full flex-col items-center rounded-lg p-3 transition-all duration-200 hover:bg-danger hover:text-black font-industrial text-xs tracking-wide text-text-muted',
	// Edit panel controls
	EditPanelDivider: 'h-6 w-px bg-primary',
	EditPanelIconButton:
		'flex h-8 w-8 items-center justify-center border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-black focus:outline-none transition-colors font-industrial',
	EditPanelSmallButton:
		'flex h-6 w-6 items-center justify-center border border-primary bg-transparent text-primary hover:bg-primary hover:text-black focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
	EditPanelSelect:
		'rounded border-2 border-primary bg-background-panel text-primary px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary w-20 font-mono',
	DropdownButton:
		'flex items-center gap-2 px-3 py-1.5 text-sm border-2 border-primary rounded bg-background-panel text-primary hover:bg-primary hover:text-black focus:outline-none focus:ring-2 focus:ring-primary font-industrial',
	// Backgrounds
	DarkBg: 'bg-black photocopied',
	PanelBg: 'bg-background-card'
};
const LayoutDimensions = {
	SidebarClosedWidth: '80px',
	// 80px toolbox + 320px panel
	EditBarHeight: '80px'
};
const SaveStatus = {
	IDLE: 'idle',
	SAVING: 'saving',
	SAVED: 'saved',
	ERROR: 'error'
};
const SaveStatusText = {
	[SaveStatus.IDLE]: '',
	[SaveStatus.SAVING]: 'SAVING...',
	[SaveStatus.SAVED]: 'SAVED',
	[SaveStatus.ERROR]: 'ERROR'
};
const SaveStatusColors = {
	[SaveStatus.IDLE]: 'text-text-muted',
	[SaveStatus.SAVING]: 'text-warning',
	[SaveStatus.SAVED]: 'text-primary',
	[SaveStatus.ERROR]: 'text-danger'
};
function AccountDropdown($$payload, $$props) {
	push();
	var $$store_subs;
	$$payload.out += `<div class="relative">`;
	if (store_get(($$store_subs ??= {}), '$authStore', authStore).user) {
		$$payload.out += '<!--[-->';
		$$payload.out += `<button class="flex items-center gap-2 px-3 py-2 border-2 border-green-400 bg-transparent text-green-400 hover:bg-green-400 hover:text-black transition-colors font-industrial font-black text-sm"><div class="w-6 h-6 rounded-full bg-green-400 text-black flex items-center justify-center text-xs font-black">${escape_html(
			store_get(($$store_subs ??= {}), '$authStore', authStore)
				.user.name?.charAt(0)
				?.toUpperCase() || 'U'
		)}</div> <span class="hidden sm:inline">${escape_html(store_get(($$store_subs ??= {}), '$authStore', authStore).user.name?.split(' ')[0] || 'User')}</span> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"${attr_class(`transition-transform ${stringify('')}`)}><polyline points="6,9 12,15 18,9"></polyline></svg></button> `;
		{
			$$payload.out += '<!--[!-->';
		}
		$$payload.out += `<!--]-->`;
	} else {
		$$payload.out += '<!--[!-->';
		$$payload.out += `<button${attr_class(`${stringify(StyleGuide.PrimaryButton)} text-sm px-4 py-2`)}>LOGIN</button>`;
	}
	$$payload.out += `<!--]--></div>`;
	if ($$store_subs) unsubscribe_stores($$store_subs);
	pop();
}
function ZineIcon($$payload) {
	$$payload.out += `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="text-green-400"><rect x="3" y="5" width="18" height="22" fill="currentColor" opacity="0.2" transform="rotate(-2)"></rect><rect x="5" y="4" width="18" height="22" fill="currentColor" opacity="0.3" transform="rotate(1)"></rect><rect x="4" y="3" width="20" height="24" fill="currentColor" stroke="currentColor" stroke-width="2"></rect><path d="M4 3 L6 5 L4 7 L7 9 L4 11 L6 13 L4 15 L5 17 L4 19 L7 21 L4 23 L6 25 L4 27" stroke="currentColor" stroke-width="1" fill="none"></path><rect x="6" y="6" width="3" height="1" fill="black"></rect><rect x="6" y="24" width="3" height="1" fill="black"></rect><rect x="8" y="8" width="12" height="3" fill="black" transform="rotate(-1)"></rect><rect x="9" y="13" width="8" height="2" fill="black" transform="rotate(1)"></rect><rect x="7" y="17" width="10" height="2" fill="black"></rect><line x1="6" y1="10" x2="22" y2="10" stroke="black" stroke-width="0.5" opacity="0.3"></line><line x1="6" y1="16" x2="22" y2="16" stroke="black" stroke-width="0.5" opacity="0.3"></line><line x1="6" y1="20" x2="22" y2="20" stroke="black" stroke-width="0.5" opacity="0.3"></line><polygon points="26,8 27,11 30,11 28,13 29,16 26,14 23,16 24,13 22,11 25,11" fill="currentColor" transform="rotate(15)"></polygon></svg>`;
}
function Header($$payload, $$props) {
	push();
	let { showBackButton = false, title = '', variant = 'default' } = $$props;
	$$payload.out += `<header class="fixed left-0 right-0 top-0 z-50 flex items-center bg-black border-b-2 border-green-400" style="height: 64px;"><div class="flex items-center gap-4 px-6">`;
	if (showBackButton) {
		$$payload.out += '<!--[-->';
		$$payload.out += `<button class="flex h-8 w-8 items-center justify-center border-2 border-green-400 bg-transparent text-green-400 hover:bg-green-400 hover:text-black transition-colors" title="Go back" aria-label="Go back to previous page"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg></button>`;
	} else {
		$$payload.out += '<!--[!-->';
	}
	$$payload.out += `<!--]--> <button class="flex items-center gap-2 hover:opacity-80 transition-opacity" title="ZINE LIFE - Home" aria-label="ZINE LIFE - Go to home page">`;
	ZineIcon($$payload);
	$$payload.out += `<!----> <span class="text-green-400 font-black text-lg font-punk transform -skew-x-12">ZINE LIFE</span></button></div> `;
	if (title && variant === 'editor') {
		$$payload.out += '<!--[-->';
		$$payload.out += `<div class="flex-1 flex items-center justify-center"><h1 class="text-xl font-black text-white tracking-wide font-industrial">${escape_html(title)}</h1></div>`;
	} else {
		$$payload.out += '<!--[!-->';
		$$payload.out += `<div class="flex-1"></div>`;
	}
	$$payload.out += `<!--]--> <div class="flex items-center px-6">`;
	AccountDropdown($$payload);
	$$payload.out += `<!----></div></header>`;
	pop();
}
const KONVA_EVENTS = [
	'mouseover',
	'mouseout',
	'mouseenter',
	'mouseleave',
	'mousemove',
	'mousedown',
	'mouseup',
	'wheel',
	'click',
	'dblclick',
	'touchstart',
	'touchmove',
	'touchend',
	'tap',
	'dbltap',
	'pointerdown',
	'pointermove',
	'pointerup',
	'pointercancel',
	'pointerover',
	'pointerenter',
	'pointerout',
	'pointerleave',
	'pointerclick',
	'pointerdblclick',
	'contextmenu',
	'dragstart',
	'dragmove',
	'dragend',
	'transformstart',
	'transform',
	'transformend'
];
function registerEvents(eventHooks, node) {
	KONVA_EVENTS.forEach((event) => {
		const hook = eventHooks[`on${event}`];
		if (typeof hook === 'function') {
			node.on(event, (payload) => {
				hook(payload);
			});
		}
	});
}
const CONTAINER_COMPONENT_KEYS = [
	'svelte-konva-stage',
	'svelte-konva-layer',
	'svelte-konva-group',
	'svelte-konva-label'
];
var Container;
(function (Container2) {
	Container2[(Container2['Stage'] = 0)] = 'Stage';
	Container2[(Container2['Layer'] = 1)] = 'Layer';
	Container2[(Container2['Group'] = 2)] = 'Group';
	Container2[(Container2['Label'] = 3)] = 'Label';
})(Container || (Container = {}));
const CONTAINER_ERROR =
	'svelte-konva: Component does not have any parent container. Please make sure that the component is wrapped inside a Layer or Group.';
const LAYER_ERROR = 'svelte-konva: A Layer needs to have a Stage as parent.';
function setContainerContext(kind, value) {
	CONTAINER_COMPONENT_KEYS.forEach((key) => {
		setContext(key, null);
	});
	setContext(CONTAINER_COMPONENT_KEYS[kind], value);
}
function getParentContainer() {
	for (let i = 1; i < 4; i++) {
		const parent = getContext(CONTAINER_COMPONENT_KEYS[i]);
		if (parent) {
			return parent;
		}
	}
	throw new Error(CONTAINER_ERROR);
}
function getParentStage() {
	const parent = getContext(CONTAINER_COMPONENT_KEYS[Container.Stage]);
	if (parent) {
		return parent;
	}
	throw new Error(LAYER_ERROR);
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
		node.on('transformend', () => {
			if (x !== void 0) x = attrs.x;
			if (y !== void 0) y = attrs.y;
			if (scale !== void 0) scale = attrs.scale;
			if (scaleX !== void 0) scaleX = attrs.scaleX;
			if (scaleY !== void 0) scaleY = attrs.scaleY;
			if (rotation !== void 0) rotation = attrs.rotation;
			if (skewX !== void 0) skewX = attrs.skewX;
			if (skewY !== void 0) skewY = attrs.skewY;
		});
		node.on('dragend', () => {
			if (x !== void 0) x = attrs.x;
			if (y !== void 0) y = attrs.y;
		});
	}
	Object.keys(restProps)
		.filter((e) => !e.startsWith('on'))
		.forEach((e) => {});
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
		node.on('transformend', () => {
			if (x !== void 0) x = attrs.x;
			if (y !== void 0) y = attrs.y;
			if (scale !== void 0) scale = attrs.scale;
			if (scaleX !== void 0) scaleX = attrs.scaleX;
			if (scaleY !== void 0) scaleY = attrs.scaleY;
			if (rotation !== void 0) rotation = attrs.rotation;
			if (skewX !== void 0) skewX = attrs.skewX;
			if (skewY !== void 0) skewY = attrs.skewY;
		});
		node.on('dragend', () => {
			if (x !== void 0) x = attrs.x;
			if (y !== void 0) y = attrs.y;
		});
	}
	Object.keys(restProps)
		.filter((e) => !e.startsWith('on'))
		.forEach((e) => {});
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
		node.on('transformend', () => {
			if (x !== void 0) x = attrs.x;
			if (y !== void 0) y = attrs.y;
			if (scale !== void 0) scale = attrs.scale;
			if (scaleX !== void 0) scaleX = attrs.scaleX;
			if (scaleY !== void 0) scaleY = attrs.scaleY;
			if (rotation !== void 0) rotation = attrs.rotation;
			if (skewX !== void 0) skewX = attrs.skewX;
			if (skewY !== void 0) skewY = attrs.skewY;
		});
		node.on('dragend', () => {
			if (x !== void 0) x = attrs.x;
			if (y !== void 0) y = attrs.y;
		});
	}
	Object.keys(restProps)
		.filter((e) => !e.startsWith('on'))
		.forEach((e) => {});
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
		node.on('transformend', () => {
			if (x !== void 0) x = attrs.x;
			if (y !== void 0) y = attrs.y;
			if (scale !== void 0) scale = attrs.scale;
			if (scaleX !== void 0) scaleX = attrs.scaleX;
			if (scaleY !== void 0) scaleY = attrs.scaleY;
			if (rotation !== void 0) rotation = attrs.rotation;
			if (skewX !== void 0) skewX = attrs.skewX;
			if (skewY !== void 0) skewY = attrs.skewY;
		});
		node.on('dragend', () => {
			if (x !== void 0) x = attrs.x;
			if (y !== void 0) y = attrs.y;
		});
	}
	Object.keys(restProps)
		.filter((e) => !e.startsWith('on'))
		.forEach((e) => {});
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
		node.on('transformend', () => {
			if (x !== void 0) x = attrs.x;
			if (y !== void 0) y = attrs.y;
			if (scale !== void 0) scale = attrs.scale;
			if (scaleX !== void 0) scaleX = attrs.scaleX;
			if (scaleY !== void 0) scaleY = attrs.scaleY;
			if (rotation !== void 0) rotation = attrs.rotation;
			if (skewX !== void 0) skewX = attrs.skewX;
			if (skewY !== void 0) skewY = attrs.skewY;
		});
		node.on('dragend', () => {
			if (x !== void 0) x = attrs.x;
			if (y !== void 0) y = attrs.y;
		});
	}
	Object.keys(restProps)
		.filter((e) => !e.startsWith('on'))
		.forEach((e) => {});
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
		node.on('transformend', () => {
			if (x !== void 0) x = attrs.x;
			if (y !== void 0) y = attrs.y;
			if (scale !== void 0) scale = attrs.scale;
			if (scaleX !== void 0) scaleX = attrs.scaleX;
			if (scaleY !== void 0) scaleY = attrs.scaleY;
			if (rotation !== void 0) rotation = attrs.rotation;
			if (skewX !== void 0) skewX = attrs.skewX;
			if (skewY !== void 0) skewY = attrs.skewY;
		});
		node.on('dragend', () => {
			if (x !== void 0) x = attrs.x;
			if (y !== void 0) y = attrs.y;
		});
	}
	Object.keys(restProps)
		.filter((e) => !e.startsWith('on'))
		.forEach((e) => {});
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
		node.on('transformend', () => {
			if (x !== void 0) x = attrs.x;
			if (y !== void 0) y = attrs.y;
			if (scale !== void 0) scale = attrs.scale;
			if (scaleX !== void 0) scaleX = attrs.scaleX;
			if (scaleY !== void 0) scaleY = attrs.scaleY;
			if (rotation !== void 0) rotation = attrs.rotation;
			if (skewX !== void 0) skewX = attrs.skewX;
			if (skewY !== void 0) skewY = attrs.skewY;
		});
		node.on('dragend', () => {
			if (x !== void 0) x = attrs.x;
			if (y !== void 0) y = attrs.y;
		});
	}
	Object.keys(restProps)
		.filter((e) => !e.startsWith('on'))
		.forEach((e) => {});
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
		node.on('transformend', () => {
			if (x !== void 0) x = attrs.x;
			if (y !== void 0) y = attrs.y;
			if (scale !== void 0) scale = attrs.scale;
			if (scaleX !== void 0) scaleX = attrs.scaleX;
			if (scaleY !== void 0) scaleY = attrs.scaleY;
			if (rotation !== void 0) rotation = attrs.rotation;
			if (skewX !== void 0) skewX = attrs.skewX;
			if (skewY !== void 0) skewY = attrs.skewY;
		});
		node.on('dragend', () => {
			if (x !== void 0) x = attrs.x;
			if (y !== void 0) y = attrs.y;
		});
	}
	Object.keys(restProps)
		.filter((e) => !e.startsWith('on'))
		.forEach((e) => {});
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
		node.on('transformend', () => {
			if (x !== void 0) x = attrs.x;
			if (y !== void 0) y = attrs.y;
			if (scale !== void 0) scale = attrs.scale;
			if (scaleX !== void 0) scaleX = attrs.scaleX;
			if (scaleY !== void 0) scaleY = attrs.scaleY;
			if (rotation !== void 0) rotation = attrs.rotation;
			if (skewX !== void 0) skewX = attrs.skewX;
			if (skewY !== void 0) skewY = attrs.skewY;
		});
		node.on('dragend', () => {
			if (x !== void 0) x = attrs.x;
			if (y !== void 0) y = attrs.y;
		});
	}
	Object.keys(restProps)
		.filter((e) => !e.startsWith('on'))
		.forEach((e) => {});
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
const ElementTypes = {
	Shape: 'shape',
	Text: 'text',
	Image: 'image'
};
const ElementCategories = {
	Shapes: 'shapes',
	Text: 'text',
	Images: 'images'
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
const ShapeTypes = {
	Circle: 'circle',
	Rectangle: 'rectangle',
	Square: 'square',
	Triangle: 'triangle',
	Pentagon: 'pentagon',
	Hexagon: 'hexagon',
	Star: 'star',
	Diamond: 'diamond',
	Ellipse: 'ellipse',
	Arrow: 'arrow',
	Heart: 'heart',
	Cross: 'cross'
};
function createDefaultPage(pageNumber) {
	return {
		id: `page-${pageNumber}-${Date.now()}`,
		pageNumber,
		canvasWidth: 500,
		canvasHeight: 400,
		canvasBackgroundColor: '#ffffff',
		shapes: [],
		texts: [],
		images: []
	};
}
function createZineStore() {
	const { subscribe, set, update } = writable({
		pages: [createDefaultPage(1)],
		// Start with one page
		currentPageIndex: 0,
		readerMode: false
	});
	return {
		subscribe,
		// Page management
		addPage: () =>
			update((store) => {
				const newPageNumber = store.pages.length + 1;
				const newPage = createDefaultPage(newPageNumber);
				store.pages.push(newPage);
				store.currentPageIndex = store.pages.length - 1;
				return store;
			}),
		deletePage: (pageIndex) =>
			update((store) => {
				if (store.pages.length <= 1) return store;
				store.pages.splice(pageIndex, 1);
				store.pages.forEach((page, index) => {
					page.pageNumber = index + 1;
				});
				if (store.currentPageIndex >= store.pages.length) {
					store.currentPageIndex = store.pages.length - 1;
				}
				return store;
			}),
		// Navigation
		setCurrentPage: (pageIndex) =>
			update((store) => {
				if (pageIndex >= 0 && pageIndex < store.pages.length) {
					store.currentPageIndex = pageIndex;
				}
				return store;
			}),
		goToNextPage: () =>
			update((store) => {
				if (store.currentPageIndex < store.pages.length - 1) {
					store.currentPageIndex++;
				}
				return store;
			}),
		goToPreviousPage: () =>
			update((store) => {
				if (store.currentPageIndex > 0) {
					store.currentPageIndex--;
				}
				return store;
			}),
		// Reader mode toggle
		toggleReaderMode: () =>
			update((store) => {
				store.readerMode = !store.readerMode;
				return store;
			}),
		// Page properties
		updatePageProperty: (pageIndex, property, value) =>
			update((store) => {
				if (pageIndex >= 0 && pageIndex < store.pages.length) {
					store.pages[pageIndex][property] = value;
				}
				return store;
			}),
		// Canvas size updates for current page
		updateCurrentPageSize: (width, height) =>
			update((store) => {
				const currentPage = store.pages[store.currentPageIndex];
				if (currentPage) {
					currentPage.canvasWidth = width;
					currentPage.canvasHeight = height;
				}
				return store;
			}),
		// Background color for current page
		updateCurrentPageBackground: (color) =>
			update((store) => {
				const currentPage = store.pages[store.currentPageIndex];
				if (currentPage) {
					currentPage.canvasBackgroundColor = color;
				}
				return store;
			}),
		// Element management for current page
		updateCurrentPageElements: (shapes, texts, images) =>
			update((store) => {
				const currentPage = store.pages[store.currentPageIndex];
				if (currentPage) {
					currentPage.shapes = shapes;
					currentPage.texts = texts;
					currentPage.images = images;
				}
				return store;
			}),
		// Add individual element to current page
		addElementToCurrentPage: (elementCategory, element) =>
			update((store) => {
				const currentPage = store.pages[store.currentPageIndex];
				if (currentPage) {
					if (elementCategory === ElementCategories.Shapes) {
						currentPage.shapes.push(element);
					} else if (elementCategory === ElementCategories.Text) {
						currentPage.texts.push(element);
					} else if (elementCategory === ElementCategories.Images) {
						currentPage.images.push(element);
					}
				}
				return store;
			}),
		// Get current page data
		getCurrentPage: (store) => store.pages[store.currentPageIndex],
		// Reset to single page
		resetToSinglePage: () =>
			update((store) => {
				const currentPage = store.pages[store.currentPageIndex] || createDefaultPage(1);
				return {
					pages: [currentPage],
					currentPageIndex: 0,
					readerMode: false
				};
			}),
		// Import page data (for loading from backend)
		importPages: (pages) =>
			update((store) => {
				if (pages.length === 0) {
					return {
						...store,
						pages: [createDefaultPage(1)],
						currentPageIndex: 0
					};
				}
				return {
					...store,
					pages,
					currentPageIndex: 0
				};
			}),
		// Export all pages (for saving to backend)
		exportPages: (store) => store.pages,
		// Reset everything
		reset: () =>
			set({
				pages: [createDefaultPage(1)],
				currentPageIndex: 0,
				readerMode: false
			})
	};
}
const zineStore = createZineStore();
export {
	API_ENDPOINTS as A,
	Container as C,
	Ellipse as E,
	Header as H,
	Image as I,
	LayoutDimensions as L,
	RegularPolygon as R,
	ShapeTypes as S,
	Text as T,
	UIStrings as U,
	Shape as a,
	buildApiUrl as b,
	Arrow as c,
	Star as d,
	Rect as e,
	Circle as f,
	getParentStage as g,
	elementRegistry as h,
	ElementCategories as i,
	StyleGuide as j,
	SaveStatus as k,
	SaveStatusText as l,
	SaveStatusColors as m,
	ElementTypes as n,
	onDestroy as o,
	registerEvents as r,
	setContainerContext as s,
	zineStore as z
};
