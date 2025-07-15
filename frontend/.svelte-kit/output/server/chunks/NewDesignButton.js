import {
	A as push,
	Q as bind_props,
	D as pop,
	R as spread_attributes,
	J as ensure_array_like,
	S as spread_props,
	T as copy_payload,
	U as assign_payload,
	P as attr_class,
	O as attr_style,
	M as stringify,
	V as clsx
} from './index.js';
import Konva from 'konva/lib/Core.js';
import {
	g as getParentStage,
	r as registerEvents,
	s as setContainerContext,
	C as Container,
	o as onDestroy,
	S as ShapeTypes,
	a as Shape,
	c as Arrow,
	E as Ellipse,
	d as Star,
	R as RegularPolygon,
	e as Rect,
	f as Circle,
	I as Image,
	T as Text
} from './pageStore.js';
import { Stage as Stage$1 } from 'konva/lib/Stage.js';
import 'clsx';
import 'konva';
import './client.js';
const DESIGN_FILTERS = {
	ALL: 'all',
	PRIVATE: 'private',
	PUBLIC: 'public'
};
const FILTER_CONFIG = {
	[DESIGN_FILTERS.ALL]: {
		label: 'ALL',
		description: 'Show all designs',
		ariaLabel: 'Show all designs'
	},
	[DESIGN_FILTERS.PRIVATE]: {
		label: 'PRIVATE',
		description: 'Show only private designs',
		ariaLabel: 'Show only private designs'
	},
	[DESIGN_FILTERS.PUBLIC]: {
		label: 'PUBLIC',
		description: 'Show only public designs',
		ariaLabel: 'Show only public designs'
	}
};
const UI_TEXT = {
	HEADINGS: {
		WELCOME_BACK: (name) => {
			const firstName = name.split(' ')[0];
			return `WELCOME BACK, ${firstName.toUpperCase()}`;
		},
		MY_DESIGNS: 'MY DESIGNS',
		RECENT_WORK: 'YOUR RECENT WORK',
		UNDERGROUND_GALLERY: 'UNDERGROUND GALLERY',
		WHAT_WE_ABOUT: "WHAT WE'RE ABOUT",
		DIY_GRAPHICS: 'DIY GRAPHICS',
		FOR_UNDERGROUND: 'FOR THE UNDERGROUND'
	},
	MESSAGES: {
		LOADING: 'Loading...',
		LOADING_DESIGNS: 'Loading your designs...',
		LOADING_AUTH: 'loading...',
		NO_DESIGNS: 'NO DESIGNS YET',
		NO_PRIVATE_DESIGNS: 'NO PRIVATE DESIGNS',
		NO_PUBLIC_DESIGNS: 'NO PUBLIC DESIGNS',
		LOGGED_OUT: 'Logged out successfully',
		DELETE_CONFIRM: 'Are you sure you want to delete this design? This action cannot be undone.',
		// Dynamic empty state messages
		EMPTY_STATE_TITLE: (filter) => {
			if (filter === DESIGN_FILTERS.ALL) return 'NO DESIGNS YET';
			if (filter === DESIGN_FILTERS.PRIVATE) return 'NO PRIVATE DESIGNS';
			if (filter === DESIGN_FILTERS.PUBLIC) return 'NO PUBLIC DESIGNS';
			return 'NO DESIGNS FOUND';
		},
		EMPTY_STATE_DESCRIPTION: (filter) => {
			if (filter === DESIGN_FILTERS.ALL) return 'Time to create your first underground masterpiece';
			if (filter === DESIGN_FILTERS.PRIVATE) return 'All your designs are public';
			if (filter === DESIGN_FILTERS.PUBLIC) return 'None of your designs are public yet';
			return 'No designs match the current filter';
		}
	}
};
function Layer($$payload, $$props) {
	push();
	let {
		children,
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
	const node = new Konva.Layer({
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
	getParentStage().add(node);
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
	setContainerContext(Container.Layer, node);
	onDestroy(() => {
		node.destroy();
	});
	children?.($$payload);
	$$payload.out += `<!---->`;
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
function Stage($$payload, $$props) {
	push();
	let {
		children,
		staticConfig = false,
		x = void 0,
		y = void 0,
		// Props forwarded to wrapper div:
		divWrapperProps,
		$$slots,
		$$events,
		...restProps
	} = $$props;
	let fakeContainer;
	try {
		fakeContainer = document.createElement('div');
	} catch (err) {
		throw new Error(
			`svelte-konva: Library can only be used in a browser context but is currently used in a server environment. If you are using SvelteKit, please refer to the following docs: https://konvajs.org/docs/svelte/SvelteKit.html`,
			{ cause: err }
		);
	}
	const node = new Stage$1({
		container: fakeContainer,
		y,
		x,
		...restProps
	});
	if (!staticConfig) {
		const attrs = node.getAttrs();
		node.on('dragend', () => {
			if (x !== void 0) x = attrs.x;
			if (y !== void 0) y = attrs.y;
		});
	}
	Object.keys(restProps)
		.filter((e) => !e.startsWith('on'))
		.forEach((e) => {});
	registerEvents(restProps, node);
	setContainerContext(Container.Stage, node);
	onDestroy(() => {
		node.destroy();
	});
	$$payload.out += `<div${spread_attributes({ ...divWrapperProps })}>`;
	children?.($$payload);
	$$payload.out += `<!----></div>`;
	bind_props($$props, { x, y, node });
	pop();
}
function getSpecificShapeProps(shape) {
	const shapeType = shape.shapeType;
	switch (shapeType) {
		case ShapeTypes.Circle:
			return { radius: shape.radius };
		case ShapeTypes.Rectangle:
			return { width: shape.width, height: shape.height };
		case ShapeTypes.Square:
			return { width: shape.size, height: shape.size };
		case ShapeTypes.Triangle:
			return { sides: 3, radius: shape.radius };
		case ShapeTypes.Pentagon:
			return { sides: 5, radius: shape.radius };
		case ShapeTypes.Hexagon:
			return { sides: 6, radius: shape.radius };
		case ShapeTypes.Diamond:
			return {
				width: shape.width,
				height: shape.height,
				sceneFunc: (context, shapeNode) => {
					const width = shapeNode.width() || 40;
					const height = shapeNode.height() || 60;
					context.beginPath();
					context.moveTo(width / 2, height * 0.9);
					context.lineTo(width * 0.1, height * 0.3);
					context.lineTo(width * 0.2, height * 0.1);
					context.lineTo(width * 0.8, height * 0.1);
					context.lineTo(width * 0.9, height * 0.3);
					context.closePath();
					context.fillStrokeShape(shapeNode);
				}
			};
		case ShapeTypes.Star:
			return {
				numPoints: shape.numPoints,
				innerRadius: shape.innerRadius,
				outerRadius: shape.outerRadius
			};
		case ShapeTypes.Ellipse:
			return { radiusX: shape.radiusX, radiusY: shape.radiusY };
		case ShapeTypes.Arrow:
			return {
				points: shape.points,
				pointerLength: shape.pointerLength,
				pointerWidth: shape.pointerWidth
			};
		case ShapeTypes.Heart:
			return {
				width: shape.width,
				height: shape.height,
				sceneFunc: (context, shapeNode) => {
					const width = shapeNode.width() || 50;
					const height = shapeNode.height() || 45;
					context.beginPath();
					context.moveTo(width / 2, height * 0.9);
					context.bezierCurveTo(
						width / 2,
						height * 0.6,
						width * 0.1,
						height * 0.6,
						width * 0.1,
						height * 0.35
					);
					context.bezierCurveTo(
						width * 0.1,
						height * 0.15,
						width * 0.3,
						height * 0.1,
						width / 2,
						height * 0.25
					);
					context.bezierCurveTo(
						width * 0.7,
						height * 0.1,
						width * 0.9,
						height * 0.15,
						width * 0.9,
						height * 0.35
					);
					context.bezierCurveTo(
						width * 0.9,
						height * 0.6,
						width / 2,
						height * 0.6,
						width / 2,
						height * 0.9
					);
					context.closePath();
					context.fillStrokeShape(shapeNode);
				}
			};
		case ShapeTypes.Cross:
			return {
				width: shape.width,
				height: shape.height,
				thickness: shape.thickness,
				sceneFunc: (context, shapeNode) => {
					const width = shapeNode.width() || 50;
					const height = shapeNode.height() || 50;
					const thickness = shapeNode.attrs.thickness || 15;
					const halfThickness = thickness / 2;
					const centerX = width / 2;
					const centerY = height / 2;
					context.beginPath();
					context.moveTo(centerX - halfThickness, 0);
					context.lineTo(centerX + halfThickness, 0);
					context.lineTo(centerX + halfThickness, centerY - halfThickness);
					context.lineTo(width, centerY - halfThickness);
					context.lineTo(width, centerY + halfThickness);
					context.lineTo(centerX + halfThickness, centerY + halfThickness);
					context.lineTo(centerX + halfThickness, height);
					context.lineTo(centerX - halfThickness, height);
					context.lineTo(centerX - halfThickness, centerY + halfThickness);
					context.lineTo(0, centerY + halfThickness);
					context.lineTo(0, centerY - halfThickness);
					context.lineTo(centerX - halfThickness, centerY - halfThickness);
					context.closePath();
					context.fillStrokeShape(shapeNode);
				}
			};
		default:
			return {};
	}
}
function ShapeRenderer($$payload, $$props) {
	push();
	let shapes = $$props['shapes'];
	let selectedId = $$props['selectedId'];
	let onDragEnd = $$props['onDragEnd'];
	let onElementClick = $$props['onElementClick'];
	const shapeComponents = {
		[ShapeTypes.Circle]: Circle,
		[ShapeTypes.Rectangle]: Rect,
		[ShapeTypes.Square]: Rect,
		[ShapeTypes.Triangle]: RegularPolygon,
		[ShapeTypes.Pentagon]: RegularPolygon,
		[ShapeTypes.Hexagon]: RegularPolygon,
		[ShapeTypes.Diamond]: Shape,
		[ShapeTypes.Star]: Star,
		[ShapeTypes.Ellipse]: Ellipse,
		[ShapeTypes.Arrow]: Arrow,
		[ShapeTypes.Heart]: Shape,
		[ShapeTypes.Cross]: Shape
	};
	function getShapeProps(shape) {
		const baseProps = {
			x: shape.x,
			y: shape.y,
			fill: shape.fill,
			draggable: true,
			id: shape.id,
			stroke: shape.stroke,
			strokeWidth: shape.strokeWidth,
			opacity: shape.opacity ?? 1,
			scaleX: shape.scaleX ?? 1,
			scaleY: shape.scaleY ?? 1,
			rotation: shape.rotation ?? 0,
			subType: shape.subType
		};
		const specificProps = getSpecificShapeProps(shape);
		return { ...baseProps, ...specificProps };
	}
	const each_array = ensure_array_like(shapes);
	$$payload.out += `<!--[-->`;
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let shape = each_array[$$index];
		const componentKey = shape.shapeType || shape.type;
		const component = shapeComponents[componentKey];
		const shapeProps = getShapeProps(shape);
		if (component) {
			$$payload.out += '<!--[-->';
			$$payload.out += `<!---->`;
			component?.(
				$$payload,
				spread_props([
					shapeProps,
					{
						onclick: (e) => {
							e.cancelBubble = true;
							onElementClick(shape.id);
						},
						ondragend: (e) => onDragEnd(shape, e)
					}
				])
			);
			$$payload.out += `<!---->`;
		} else {
			$$payload.out += '<!--[!-->';
		}
		$$payload.out += `<!--]-->`;
	}
	$$payload.out += `<!--]-->`;
	bind_props($$props, {
		shapes,
		selectedId,
		onDragEnd,
		onElementClick
	});
	pop();
}
function ImageRenderer($$payload, $$props) {
	push();
	let images = $$props['images'];
	let selectedId = $$props['selectedId'];
	let onDragEnd = $$props['onDragEnd'];
	let onElementClick = $$props['onElementClick'];
	function getFilteredImageElement(image) {
		if (
			(!image.brightness || image.brightness === 0) &&
			(!image.contrast || image.contrast === 0)
		) {
			return image.imageElement;
		}
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		if (!ctx || !image.imageElement) return image.imageElement;
		canvas.width = image.imageElement.naturalWidth;
		canvas.height = image.imageElement.naturalHeight;
		const filters = [];
		if (image.brightness && image.brightness !== 0) {
			const brightnessValue = 1 + image.brightness * 0.5;
			filters.push(`brightness(${brightnessValue})`);
		}
		if (image.contrast && image.contrast !== 0) {
			const contrastValue = 1 + image.contrast * 0.5;
			filters.push(`contrast(${contrastValue})`);
		}
		ctx.filter = filters.join(' ');
		ctx.drawImage(image.imageElement, 0, 0);
		ctx.filter = 'none';
		return canvas;
	}
	const each_array = ensure_array_like(images);
	$$payload.out += `<!--[-->`;
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let image = each_array[$$index];
		Image($$payload, {
			x: image.x,
			y: image.y,
			width: image.width,
			height: image.height,
			image: getFilteredImageElement(image),
			opacity: image.opacity || 1,
			scaleX: image.scaleX || 1,
			scaleY: image.scaleY || 1,
			rotation: image.rotation || 0,
			draggable: true,
			id: image.id,
			onclick: (e) => {
				e.cancelBubble = true;
				onElementClick(image.id);
			},
			ondragend: (e) => onDragEnd(image, e)
		});
	}
	$$payload.out += `<!--]-->`;
	bind_props($$props, {
		images,
		selectedId,
		onDragEnd,
		onElementClick
	});
	pop();
}
function SimpleThumbnail($$payload, $$props) {
	push();
	let { design, size = 'medium', className = '' } = $$props;
	let stageRef;
	let showFallback = true;
	const sizes = {
		small: { width: 120, height: 96 },
		medium: { width: 180, height: 144 },
		large: { width: 240, height: 192 }
	};
	const thumbnailSize = sizes[size];
	const canvasSize = design.canvas_size || { width: 500, height: 400 };
	const scaleX = thumbnailSize.width / canvasSize.width;
	const scaleY = thumbnailSize.height / canvasSize.height;
	const scale = Math.min(scaleX, scaleY);
	const scaledWidth = canvasSize.width * scale;
	const scaledHeight = canvasSize.height * scale;
	const offsetX = (thumbnailSize.width - scaledWidth) / 2;
	const offsetY = (thumbnailSize.height - scaledHeight) / 2;
	const shapes = design.canvas_data?.shapes || [];
	const texts = design.canvas_data?.texts || [];
	const images = design.canvas_data?.images || [];
	let $$settled = true;
	let $$inner_payload;
	function $$render_inner($$payload2) {
		$$payload2.out += `<div${attr_class(`relative inline-block ${stringify(className)}`)}><div class="absolute opacity-0 pointer-events-none" style="top: -9999px;">`;
		Stage($$payload2, {
			config: {
				width: thumbnailSize.width,
				height: thumbnailSize.height
			},
			get ref() {
				return stageRef;
			},
			set ref($$value) {
				stageRef = $$value;
				$$settled = false;
			},
			children: ($$payload3) => {
				Layer($$payload3, {
					config: {
						x: offsetX,
						y: offsetY,
						scaleX: scale,
						scaleY: scale
					},
					children: ($$payload4) => {
						const each_array = ensure_array_like(texts);
						ShapeRenderer($$payload4, {
							shapes,
							canvasZoom: 100,
							selectedId: null,
							onDragEnd: () => {},
							onElementClick: () => {}
						});
						$$payload4.out += `<!----> `;
						ImageRenderer($$payload4, {
							images,
							canvasZoom: 100,
							selectedId: null,
							onDragEnd: () => {},
							onElementClick: () => {}
						});
						$$payload4.out += `<!----> <!--[-->`;
						for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
							let textElement = each_array[$$index];
							Text($$payload4, {
								config: {
									x: textElement.x || 0,
									y: textElement.y || 0,
									text: textElement.text || '',
									fontSize: textElement.fontSize || 20,
									fontFamily: textElement.fontFamily || 'Arial',
									fill: textElement.fill || '#000000',
									align: textElement.align || 'left',
									fontStyle: textElement.fontStyle || 'normal',
									listening: false
								}
							});
						}
						$$payload4.out += `<!--]-->`;
					},
					$$slots: { default: true }
				});
			},
			$$slots: { default: true }
		});
		$$payload2.out += `<!----></div> <img alt="Design thumbnail"${attr_class('border border-gray-600 bg-white', void 0, { hidden: showFallback })}${attr_style(`width: ${stringify(thumbnailSize.width)}px; height: ${stringify(thumbnailSize.height)}px;`)}/> <div${attr_class('flex items-center justify-center bg-gray-200 border border-gray-600 text-gray-500 text-xs', void 0, { hidden: !showFallback })}${attr_style(`width: ${stringify(thumbnailSize.width)}px; height: ${stringify(thumbnailSize.height)}px;`)}>PREVIEW</div></div>`;
	}
	do {
		$$settled = true;
		$$inner_payload = copy_payload($$payload);
		$$render_inner($$inner_payload);
	} while (!$$settled);
	assign_payload($$payload, $$inner_payload);
	pop();
}
function NewDesignButton($$payload, $$props) {
	push();
	let { class: className = '', children, $$slots, $$events, ...restProps } = $$props;
	$$payload.out += `<button${spread_attributes({
		class: clsx(className),
		'aria-label': 'Create a new design',
		...restProps
	})}>`;
	children($$payload);
	$$payload.out += `<!----></button>`;
	pop();
}
export {
	DESIGN_FILTERS as D,
	FILTER_CONFIG as F,
	NewDesignButton as N,
	SimpleThumbnail as S,
	UI_TEXT as U
};
