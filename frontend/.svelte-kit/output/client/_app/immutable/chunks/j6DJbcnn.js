import {
	a4 as V,
	al as E,
	am as T,
	an as M,
	L as O,
	a6 as G,
	R as $,
	ao as x,
	I as C,
	A as z,
	ap as J,
	F as b,
	W as H,
	aq as S,
	Z as g,
	O as L,
	G as p,
	J as W,
	ar as N,
	as as A,
	N as U,
	at as Z,
	au as K,
	av as Q,
	aw as X,
	ax as ee,
	ay as te,
	B as re,
	p as ae,
	i as ne,
	b as oe
} from './awzKxlHP.js';
import { b as ie } from './DcgrL8hp.js';
function ye(e) {
	return e.endsWith('capture') && e !== 'gotpointercapture' && e !== 'lostpointercapture';
}
const se = [
	'beforeinput',
	'click',
	'change',
	'dblclick',
	'contextmenu',
	'focusin',
	'focusout',
	'input',
	'keydown',
	'keyup',
	'mousedown',
	'mousemove',
	'mouseout',
	'mouseover',
	'mouseup',
	'pointerdown',
	'pointermove',
	'pointerout',
	'pointerover',
	'pointerup',
	'touchend',
	'touchmove',
	'touchstart'
];
function ge(e) {
	return se.includes(e);
}
const ue = {
	formnovalidate: 'formNoValidate',
	ismap: 'isMap',
	nomodule: 'noModule',
	playsinline: 'playsInline',
	readonly: 'readOnly',
	defaultvalue: 'defaultValue',
	defaultchecked: 'defaultChecked',
	srcobject: 'srcObject',
	novalidate: 'noValidate',
	allowfullscreen: 'allowFullscreen',
	disablepictureinpicture: 'disablePictureInPicture',
	disableremoteplayback: 'disableRemotePlayback'
};
function be(e) {
	return (e = e.toLowerCase()), ue[e] ?? e;
}
const le = ['touchstart', 'touchmove'];
function ce(e) {
	return le.includes(e);
}
function we(e, t) {
	if (t) {
		const r = document.body;
		(e.autofocus = !0),
			V(() => {
				document.activeElement === r && e.focus();
			});
	}
}
let P = !1;
function de() {
	P ||
		((P = !0),
		document.addEventListener(
			'reset',
			(e) => {
				Promise.resolve().then(() => {
					var t;
					if (!e.defaultPrevented)
						for (const r of e.target.elements) (t = r.__on_r) == null || t.call(r);
				});
			},
			{ capture: !0 }
		));
}
function B(e) {
	var t = M,
		r = O;
	E(null), T(null);
	try {
		return e();
	} finally {
		E(t), T(r);
	}
}
function me(e, t, r, n = r) {
	e.addEventListener(t, () => B(r));
	const o = e.__on_r;
	o
		? (e.__on_r = () => {
				o(), n(!0);
			})
		: (e.__on_r = () => n(!0)),
		de();
}
const F = new Set(),
	R = new Set();
function fe(e, t, r, n = {}) {
	function o(a) {
		if ((n.capture || w.call(t, a), !a.cancelBubble))
			return B(() => (r == null ? void 0 : r.call(this, a)));
	}
	return (
		e.startsWith('pointer') || e.startsWith('touch') || e === 'wheel'
			? V(() => {
					t.addEventListener(e, o, n);
				})
			: t.addEventListener(e, o, n),
		o
	);
}
function Ee(e, t, r, n, o) {
	var a = { capture: n, passive: o },
		l = fe(e, t, r, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) &&
		G(() => {
			t.removeEventListener(e, l, a);
		});
}
function Te(e) {
	for (var t = 0; t < e.length; t++) F.add(e[t]);
	for (var r of R) r(e);
}
function w(e) {
	var D;
	var t = this,
		r = t.ownerDocument,
		n = e.type,
		o = ((D = e.composedPath) == null ? void 0 : D.call(e)) || [],
		a = o[0] || e.target,
		l = 0,
		h = e.__root;
	if (h) {
		var f = o.indexOf(h);
		if (f !== -1 && (t === document || t === window)) {
			e.__root = t;
			return;
		}
		var v = o.indexOf(t);
		if (v === -1) return;
		f <= v && (l = f);
	}
	if (((a = o[l] || e.target), a !== t)) {
		$(e, 'currentTarget', {
			configurable: !0,
			get() {
				return a || r;
			}
		});
		var k = M,
			c = O;
		E(null), T(null);
		try {
			for (var i, s = []; a !== null; ) {
				var d = a.assignedSlot || a.parentNode || a.host || null;
				try {
					var _ = a['__' + n];
					if (_ != null && (!a.disabled || e.target === a))
						if (x(_)) {
							var [q, ...Y] = _;
							q.apply(a, [e, ...Y]);
						} else _.call(a, e);
				} catch (m) {
					i ? s.push(m) : (i = m);
				}
				if (e.cancelBubble || d === t || d === null) break;
				a = d;
			}
			if (i) {
				for (let m of s)
					queueMicrotask(() => {
						throw m;
					});
				throw i;
			}
		} finally {
			(e.__root = t), delete e.currentTarget, E(k), T(c);
		}
	}
}
let u;
function _e() {
	u = void 0;
}
function Le(e) {
	let t = null,
		r = b;
	var n;
	if (b) {
		for (
			t = p, u === void 0 && (u = W(document.head));
			u !== null && (u.nodeType !== 8 || u.data !== H);

		)
			u = S(u);
		u === null ? g(!1) : (u = L(S(u)));
	}
	b || (n = document.head.appendChild(C()));
	try {
		z(() => e(n), J);
	} finally {
		r && (g(!0), (u = p), L(t));
	}
}
function ke(e, t) {
	var r = t == null ? '' : typeof t == 'object' ? t + '' : t;
	r !== (e.__t ?? (e.__t = e.nodeValue)) && ((e.__t = r), (e.nodeValue = r + ''));
}
function pe(e, t) {
	return j(e, t);
}
function Ae(e, t) {
	N(), (t.intro = t.intro ?? !1);
	const r = t.target,
		n = b,
		o = p;
	try {
		for (var a = W(r); a && (a.nodeType !== 8 || a.data !== H); ) a = S(a);
		if (!a) throw A;
		g(!0), L(a), U();
		const l = j(e, { ...t, anchor: a });
		if (p === null || p.nodeType !== 8 || p.data !== Z) throw (K(), A);
		return g(!1), l;
	} catch (l) {
		if (l === A) return t.recover === !1 && Q(), N(), X(r), g(!1), pe(e, t);
		throw l;
	} finally {
		g(n), L(o), _e();
	}
}
const y = new Map();
function j(e, { target: t, anchor: r, props: n = {}, events: o, context: a, intro: l = !0 }) {
	N();
	var h = new Set(),
		f = (c) => {
			for (var i = 0; i < c.length; i++) {
				var s = c[i];
				if (!h.has(s)) {
					h.add(s);
					var d = ce(s);
					t.addEventListener(s, w, { passive: d });
					var _ = y.get(s);
					_ === void 0
						? (document.addEventListener(s, w, { passive: d }), y.set(s, 1))
						: y.set(s, _ + 1);
				}
			}
		};
	f(ee(F)), R.add(f);
	var v = void 0,
		k = te(() => {
			var c = r ?? t.appendChild(C());
			return (
				re(() => {
					if (a) {
						ae({});
						var i = ne;
						i.c = a;
					}
					o && (n.$$events = o),
						b && ie(c, null),
						(v = e(c, n) || {}),
						b && (O.nodes_end = p),
						a && oe();
				}),
				() => {
					var d;
					for (var i of h) {
						t.removeEventListener(i, w);
						var s = y.get(i);
						--s === 0 ? (document.removeEventListener(i, w), y.delete(i)) : y.set(i, s);
					}
					R.delete(f), c !== r && ((d = c.parentNode) == null || d.removeChild(c));
				}
			);
		});
	return I.set(v, k), v;
}
let I = new WeakMap();
function Se(e, t) {
	const r = I.get(e);
	return r ? (I.delete(e), r(t)) : Promise.resolve();
}
export {
	Ae as a,
	de as b,
	fe as c,
	Te as d,
	Ee as e,
	we as f,
	ge as g,
	Le as h,
	ye as i,
	me as l,
	pe as m,
	be as n,
	ke as s,
	Se as u
};
