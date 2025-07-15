import { f as A, a as w } from './DcgrL8hp.js';
import {
	p as z,
	o as re,
	c as y,
	f as oe,
	s as _,
	g as r,
	u as R,
	r as O,
	t as le,
	S as ce,
	b as K,
	d as de
} from './awzKxlHP.js';
import {
	K as he,
	S as ge,
	L as ue,
	c as fe,
	I as Ee,
	e as Se,
	i as Ie,
	T as me,
	b as v,
	a as W,
	d as Ne
} from './DPuKpAsp.js';
import { p as L, b as Y, r as Te } from './BVdWusFy.js';
import { s as De, b as _e, A as be, F as Re } from './CMe1BOE4.js';
import { g as M } from './n0jKMFEm.js';
const V = {
		HOME: '/',
		DASHBOARD: '/dashboard',
		EDITOR: '/editor',
		EDITOR_WITH_ID: (e) => `/editor?id=${e}`
	},
	d = { ALL: 'all', PRIVATE: 'private', PUBLIC: 'public' },
	xe = {
		[d.ALL]: { label: 'ALL', description: 'Show all designs', ariaLabel: 'Show all designs' },
		[d.PRIVATE]: {
			label: 'PRIVATE',
			description: 'Show only private designs',
			ariaLabel: 'Show only private designs'
		},
		[d.PUBLIC]: {
			label: 'PUBLIC',
			description: 'Show only public designs',
			ariaLabel: 'Show only public designs'
		}
	},
	Be = {
		HEADINGS: {
			WELCOME_BACK: (e) => `WELCOME BACK, ${e.split(' ')[0].toUpperCase()}`,
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
			EMPTY_STATE_TITLE: (e) =>
				e === d.ALL
					? 'NO DESIGNS YET'
					: e === d.PRIVATE
						? 'NO PRIVATE DESIGNS'
						: e === d.PUBLIC
							? 'NO PUBLIC DESIGNS'
							: 'NO DESIGNS FOUND',
			EMPTY_STATE_DESCRIPTION: (e) =>
				e === d.ALL
					? 'Time to create your first underground masterpiece'
					: e === d.PRIVATE
						? 'All your designs are public'
						: e === d.PUBLIC
							? 'None of your designs are public yet'
							: 'No designs match the current filter'
		}
	};
function ve(e, t) {
	return new Promise((S, f) => {
		try {
			if (!e || !e.toDataURL) {
				f(new Error('Invalid stage provided'));
				return;
			}
			const s = e.find('Transformer'),
				i = [];
			s.forEach((c, I) => {
				(i[I] = c.visible()), c.visible(!1);
			});
			let o = null;
			if (t.includeBackground && t.backgroundColor) {
				o = new he.Rect({
					x: 0,
					y: 0,
					width: e.width(),
					height: e.height(),
					fill: t.backgroundColor,
					listening: !1
				});
				const c = e.children[0];
				c && (c.add(o), o.moveToBottom(), c.batchDraw());
			}
			const l = e.width(),
				m = e.height(),
				a = t.width / l,
				h = t.height / m,
				E = Math.min(a, h),
				b = e.toDataURL({
					mimeType: 'image/png',
					quality: t.quality || 0.8,
					pixelRatio: E,
					width: t.width,
					height: t.height
				});
			s.forEach((c, I) => {
				c.visible(i[I]);
			}),
				o && o.destroy();
			const u = e.children[0];
			u && u.batchDraw(), S(b);
		} catch (s) {
			f(s);
		}
	});
}
var we = A('<!> <!> <!>', 1),
	ye = A(
		'<div><div class="absolute opacity-0 pointer-events-none" style="top: -9999px;"><!></div> <img alt="Design thumbnail"/> <div>PREVIEW</div></div>'
	);
function Fe(e, t) {
	var P, C, x;
	z(t, !0);
	let S = L(t, 'size', 3, 'medium'),
		f = L(t, 'className', 3, ''),
		s,
		i,
		o,
		l = ce(!0);
	const a = {
			small: { width: 120, height: 96 },
			medium: { width: 180, height: 144 },
			large: { width: 240, height: 192 }
		}[S()],
		h = t.design.canvas_size || { width: 500, height: 400 },
		E = a.width / h.width,
		b = a.height / h.height,
		u = Math.min(E, b),
		c = h.width * u,
		I = h.height * u,
		X = (a.width - c) / 2,
		q = (a.height - I) / 2;
	re(() => {
		setTimeout(() => {
			$();
		}, 100);
	});
	async function $() {
		if (!(!(s != null && s.node) || !t.design.canvas_data))
			try {
				const n = await ve(s.node, {
					width: a.width,
					height: a.height,
					quality: 0.8,
					backgroundColor: t.design.canvas_background || '#ffffff',
					includeBackground: !0
				});
				i &&
					((i.src = n),
					(i.onload = () => {
						de(l, !1);
					}));
			} catch (n) {
				console.error('Error generating thumbnail:', n);
			}
	}
	const J = ((P = t.design.canvas_data) == null ? void 0 : P.shapes) || [],
		Z = ((C = t.design.canvas_data) == null ? void 0 : C.texts) || [],
		j = ((x = t.design.canvas_data) == null ? void 0 : x.images) || [];
	var N = ye(),
		T = y(N),
		Q = y(T);
	const ee = R(() => ({ width: a.width, height: a.height }));
	ge(Q, {
		get config() {
			return r(ee);
		},
		get ref() {
			return s;
		},
		set ref(n) {
			s = n;
		},
		children: (n, B) => {
			const te = R(() => ({ x: X, y: q, scaleX: u, scaleY: u }));
			ue(n, {
				get config() {
					return r(te);
				},
				children: (ae, Le) => {
					var F = we(),
						H = oe(F);
					fe(H, {
						get shapes() {
							return J;
						},
						canvasZoom: 100,
						selectedId: null,
						onDragEnd: () => {},
						onElementClick: () => {}
					});
					var k = _(H, 2);
					Ee(k, {
						get images() {
							return j;
						},
						canvasZoom: 100,
						selectedId: null,
						onDragEnd: () => {},
						onElementClick: () => {}
					});
					var se = _(k, 2);
					Se(
						se,
						17,
						() => Z,
						Ie,
						(ie, g) => {
							const ne = R(() => ({
								x: r(g).x || 0,
								y: r(g).y || 0,
								text: r(g).text || '',
								fontSize: r(g).fontSize || 20,
								fontFamily: r(g).fontFamily || 'Arial',
								fill: r(g).fill || '#000000',
								align: r(g).align || 'left',
								fontStyle: r(g).fontStyle || 'normal',
								listening: !1
							}));
							me(ie, {
								get config() {
									return r(ne);
								}
							});
						}
					),
						w(ae, F);
				},
				$$slots: { default: !0 }
			});
		},
		$$slots: { default: !0 }
	}),
		O(T),
		Y(
			T,
			(n) => (o = n),
			() => o
		);
	var D = _(T, 2);
	let p;
	Y(
		D,
		(n) => (i = n),
		() => i
	);
	var U = _(D, 2);
	let G;
	O(N),
		le(
			(n, B) => {
				v(N, 1, `relative inline-block ${f() ?? ''}`),
					(p = v(D, 1, 'border border-gray-600 bg-white', null, p, n)),
					W(D, `width: ${a.width ?? ''}px; height: ${a.height ?? ''}px;`),
					(G = v(
						U,
						1,
						'flex items-center justify-center bg-gray-200 border border-gray-600 text-gray-500 text-xs',
						null,
						G,
						B
					)),
					W(U, `width: ${a.width ?? ''}px; height: ${a.height ?? ''}px;`);
			},
			[() => ({ hidden: r(l) }), () => ({ hidden: !r(l) })]
		),
		w(e, N),
		K();
}
var Oe = A('<button><!></button>');
function He(e, t) {
	z(t, !0);
	let S = L(t, 'class', 3, ''),
		f = Te(t, ['$$slots', '$$events', '$$legacy', 'class', 'children']);
	async function s() {
		try {
			const l = {
					title: 'Untitled Design',
					pages: [
						{
							id: `page-1-${Date.now()}`,
							pageNumber: 1,
							canvasWidth: 500,
							canvasHeight: 400,
							canvasBackgroundColor: '#ffffff',
							shapes: [],
							texts: [],
							images: []
						}
					]
				},
				m = _e(be.DESIGNS.BASE),
				a = await fetch(m, { method: 'POST', ...Re.WITH_JSON, body: JSON.stringify(l) });
			if (!a.ok) {
				const E = await a.text();
				throw (
					(console.error('Backend error response:', E),
					console.error('Request data sent:', l),
					new Error(`Failed to create design: ${a.status} - ${E}`))
				);
			}
			const h = await a.json();
			M(V.EDITOR_WITH_ID(h.id));
		} catch (l) {
			console.error('Failed to create new design:', l), M(V.EDITOR);
		}
	}
	var i = Oe();
	Ne(i, () => ({ onclick: s, class: S(), 'aria-label': 'Create a new design', ...f }));
	var o = y(i);
	De(o, () => t.children), O(i), w(e, i), K();
}
export { d as D, xe as F, He as N, V as R, Fe as S, Be as U };
