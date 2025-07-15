var Ln = Object.defineProperty;
var Dn = (t, n, v) =>
	n in t ? Ln(t, n, { enumerable: !0, configurable: !0, writable: !0, value: v }) : (t[n] = v);
var Bi = (t, n, v) => Dn(t, typeof n != 'symbol' ? n + '' : n, v);
import { f as Lt, a as gt, e as In, c as He } from './DcgrL8hp.js';
import {
	I as Bn,
	A as Ai,
	aE as rn,
	O as li,
	F as bt,
	J as Un,
	N as Vn,
	g as J,
	e as Ot,
	V as Yn,
	X as Xn,
	Y as Ui,
	Z as qe,
	G as Zt,
	at as Hn,
	_ as nn,
	B as ni,
	a0 as qn,
	aF as hi,
	ax as an,
	a4 as Wn,
	L as Vi,
	aG as Pi,
	aH as Yi,
	aI as Ti,
	m as zn,
	aJ as Xi,
	ao as sn,
	aK as Kn,
	aL as jn,
	aw as Qn,
	aM as Jn,
	D as ti,
	aN as Zn,
	aq as $n,
	a2 as Ei,
	v as ta,
	aO as ea,
	aA as ia,
	y as ra,
	aP as na,
	aQ as aa,
	aR as sa,
	aS as oa,
	aT as la,
	aU as ha,
	p as pt,
	k as Y,
	b as _t,
	S as Hi,
	d as ze,
	c as ut,
	r as ft,
	f as Qt,
	s as Nt,
	t as Je,
	u as ca,
	n as da,
	aV as on,
	aW as qi,
	aC as At,
	C as ln,
	o as ua,
	H as hn
} from './awzKxlHP.js';
import {
	l as fa,
	b as ga,
	i as pa,
	c as _a,
	d as Ri,
	f as ma,
	n as ya,
	g as va,
	s as Ze
} from './j6DJbcnn.js';
import {
	i as Ke,
	s as ba,
	a as Sa,
	b as cn,
	p as V,
	r as Pt,
	c as wa,
	d as Ca
} from './BVdWusFy.js';
import { g as Fi } from './n0jKMFEm.js';
import { c as xa, a as dn, s as un } from './CMe1BOE4.js';
import { i as fn } from './D9VeyYUl.js';
function fo(t, n) {
	return n;
}
function ka(t, n, v, u) {
	for (var p = [], l = n.length, o = 0; o < l; o++) jn(n[o].e, p, !0);
	var r = l > 0 && p.length === 0 && v !== null;
	if (r) {
		var h = v.parentNode;
		Qn(h), h.append(v), u.clear(), Yt(t, n[0].prev, n[l - 1].next);
	}
	Jn(p, () => {
		for (var a = 0; a < l; a++) {
			var f = n[a];
			r || (u.delete(f.k), Yt(t, f.prev, f.next)), ti(f.e, !r);
		}
	});
}
function gn(t, n, v, u, p, l = null) {
	var o = t,
		r = { flags: n, items: new Map(), first: null },
		h = (n & rn) !== 0;
	if (h) {
		var a = t;
		o = bt ? li(Un(a)) : a.appendChild(Bn());
	}
	bt && Vn();
	var f = null,
		_ = !1,
		i = Ot(() => {
			var e = v();
			return sn(e) ? e : e == null ? [] : an(e);
		});
	Ai(() => {
		var e = J(i),
			c = e.length;
		if (_ && c === 0) return;
		_ = c === 0;
		let y = !1;
		if (bt) {
			var b = Yn(o) === Xn;
			b !== (c === 0) && ((o = Ui()), li(o), qe(!1), (y = !0));
		}
		if (bt) {
			for (var k = null, d, s = 0; s < c; s++) {
				if (Zt.nodeType === 8 && Zt.data === Hn) {
					(o = Zt), (y = !0), qe(!1);
					break;
				}
				var m = e[s],
					w = u(m, s);
				(d = pn(Zt, r, k, null, m, w, s, p, n, v)), r.items.set(w, d), (k = d);
			}
			c > 0 && li(Ui());
		}
		bt || Aa(e, r, o, p, n, u, v),
			l !== null &&
				(c === 0
					? f
						? nn(f)
						: (f = ni(() => l(o)))
					: f !== null &&
						qn(f, () => {
							f = null;
						})),
			y && qe(!0),
			J(i);
	}),
		bt && (o = Zt);
}
function Aa(t, n, v, u, p, l, o) {
	var C, S, R, F;
	var r = (p & Kn) !== 0,
		h = (p & (Pi | Ti)) !== 0,
		a = t.length,
		f = n.items,
		_ = n.first,
		i = _,
		e,
		c = null,
		y,
		b = [],
		k = [],
		d,
		s,
		m,
		w;
	if (r)
		for (w = 0; w < a; w += 1)
			(d = t[w]),
				(s = l(d, w)),
				(m = f.get(s)),
				m !== void 0 && ((C = m.a) == null || C.measure(), (y ?? (y = new Set())).add(m));
	for (w = 0; w < a; w += 1) {
		if (((d = t[w]), (s = l(d, w)), (m = f.get(s)), m === void 0)) {
			var A = i ? i.e.nodes_start : v;
			(c = pn(A, n, c, c === null ? n.first : c.next, d, s, w, u, p, o)),
				f.set(s, c),
				(b = []),
				(k = []),
				(i = c.next);
			continue;
		}
		if (
			(h && Pa(m, d, w, p),
			(m.e.f & hi) !== 0 &&
				(nn(m.e), r && ((S = m.a) == null || S.unfix(), (y ?? (y = new Set())).delete(m))),
			m !== i)
		) {
			if (e !== void 0 && e.has(m)) {
				if (b.length < k.length) {
					var M = k[0],
						T;
					c = M.prev;
					var P = b[0],
						x = b[b.length - 1];
					for (T = 0; T < b.length; T += 1) Wi(b[T], M, v);
					for (T = 0; T < k.length; T += 1) e.delete(k[T]);
					Yt(n, P.prev, x.next),
						Yt(n, c, P),
						Yt(n, x, M),
						(i = M),
						(c = x),
						(w -= 1),
						(b = []),
						(k = []);
				} else
					e.delete(m),
						Wi(m, i, v),
						Yt(n, m.prev, m.next),
						Yt(n, m, c === null ? n.first : c.next),
						Yt(n, c, m),
						(c = m);
				continue;
			}
			for (b = [], k = []; i !== null && i.k !== s; )
				(i.e.f & hi) === 0 && (e ?? (e = new Set())).add(i), k.push(i), (i = i.next);
			if (i === null) continue;
			m = i;
		}
		b.push(m), (c = m), (i = m.next);
	}
	if (i !== null || e !== void 0) {
		for (var E = e === void 0 ? [] : an(e); i !== null; )
			(i.e.f & hi) === 0 && E.push(i), (i = i.next);
		var N = E.length;
		if (N > 0) {
			var g = (p & rn) !== 0 && a === 0 ? v : null;
			if (r) {
				for (w = 0; w < N; w += 1) (R = E[w].a) == null || R.measure();
				for (w = 0; w < N; w += 1) (F = E[w].a) == null || F.fix();
			}
			ka(n, E, g, f);
		}
	}
	r &&
		Wn(() => {
			var O;
			if (y !== void 0) for (m of y) (O = m.a) == null || O.apply();
		}),
		(Vi.first = n.first && n.first.e),
		(Vi.last = c && c.e);
}
function Pa(t, n, v, u) {
	(u & Pi) !== 0 && Yi(t.v, n), (u & Ti) !== 0 ? Yi(t.i, v) : (t.i = v);
}
function pn(t, n, v, u, p, l, o, r, h, a) {
	var f = (h & Pi) !== 0,
		_ = (h & Zn) === 0,
		i = f ? (_ ? zn(p) : Xi(p)) : p,
		e = (h & Ti) === 0 ? o : Xi(o),
		c = { i: e, v: i, k: l, a: null, e: null, prev: v, next: u };
	try {
		return (
			(c.e = ni(() => r(t, i, e, a), bt)),
			(c.e.prev = v && v.e),
			(c.e.next = u && u.e),
			v === null ? (n.first = c) : ((v.next = c), (v.e.next = c.e)),
			u !== null && ((u.prev = c), (u.e.prev = c.e)),
			c
		);
	} finally {
	}
}
function Wi(t, n, v) {
	for (
		var u = t.next ? t.next.e.nodes_start : v, p = n ? n.e.nodes_start : v, l = t.e.nodes_start;
		l !== u;

	) {
		var o = $n(l);
		p.before(l), (l = o);
	}
}
function Yt(t, n, v) {
	n === null ? (t.first = v) : ((n.next = v), (n.e.next = v && v.e)),
		v !== null && ((v.prev = n), (v.e.prev = n && n.e));
}
function Ta(t, n) {
	var v = void 0,
		u;
	Ai(() => {
		v !== (v = n()) &&
			(u && (ti(u), (u = null)),
			v &&
				(u = ni(() => {
					Ei(() => v(t));
				})));
	});
}
function _n(t) {
	var n,
		v,
		u = '';
	if (typeof t == 'string' || typeof t == 'number') u += t;
	else if (typeof t == 'object')
		if (Array.isArray(t)) {
			var p = t.length;
			for (n = 0; n < p; n++) t[n] && (v = _n(t[n])) && (u && (u += ' '), (u += v));
		} else for (v in t) t[v] && (u && (u += ' '), (u += v));
	return u;
}
function Ea() {
	for (var t, n, v = 0, u = '', p = arguments.length; v < p; v++)
		(t = arguments[v]) && (n = _n(t)) && (u && (u += ' '), (u += n));
	return u;
}
function Ra(t) {
	return typeof t == 'object' ? Ea(t) : (t ?? '');
}
const zi = [
	...` 	
\r\f \v\uFEFF`
];
function Fa(t, n, v) {
	var u = t == null ? '' : '' + t;
	if ((n && (u = u ? u + ' ' + n : n), v)) {
		for (var p in v)
			if (v[p]) u = u ? u + ' ' + p : p;
			else if (u.length)
				for (var l = p.length, o = 0; (o = u.indexOf(p, o)) >= 0; ) {
					var r = o + l;
					(o === 0 || zi.includes(u[o - 1])) && (r === u.length || zi.includes(u[r]))
						? (u = (o === 0 ? '' : u.substring(0, o)) + u.substring(r + 1))
						: (o = r);
				}
	}
	return u === '' ? null : u;
}
function Ki(t, n = !1) {
	var v = n ? ' !important;' : ';',
		u = '';
	for (var p in t) {
		var l = t[p];
		l != null && l !== '' && (u += ' ' + p + ': ' + l + v);
	}
	return u;
}
function ci(t) {
	return t[0] !== '-' || t[1] !== '-' ? t.toLowerCase() : t;
}
function Ma(t, n) {
	if (n) {
		var v = '',
			u,
			p;
		if ((Array.isArray(n) ? ((u = n[0]), (p = n[1])) : (u = n), t)) {
			t = String(t)
				.replaceAll(/\s*\/\*.*?\*\/\s*/g, '')
				.trim();
			var l = !1,
				o = 0,
				r = !1,
				h = [];
			u && h.push(...Object.keys(u).map(ci)), p && h.push(...Object.keys(p).map(ci));
			var a = 0,
				f = -1;
			const y = t.length;
			for (var _ = 0; _ < y; _++) {
				var i = t[_];
				if (
					(r
						? i === '/' && t[_ - 1] === '*' && (r = !1)
						: l
							? l === i && (l = !1)
							: i === '/' && t[_ + 1] === '*'
								? (r = !0)
								: i === '"' || i === "'"
									? (l = i)
									: i === '('
										? o++
										: i === ')' && o--,
					!r && l === !1 && o === 0)
				) {
					if (i === ':' && f === -1) f = _;
					else if (i === ';' || _ === y - 1) {
						if (f !== -1) {
							var e = ci(t.substring(a, f).trim());
							if (!h.includes(e)) {
								i !== ';' && _++;
								var c = t.substring(a, _).trim();
								v += ' ' + c + ';';
							}
						}
						(a = _ + 1), (f = -1);
					}
				}
			}
		}
		return u && (v += Ki(u)), p && (v += Ki(p, !0)), (v = v.trim()), v === '' ? null : v;
	}
	return t == null ? null : String(t);
}
function Wt(t, n, v, u, p, l) {
	var o = t.__className;
	if (bt || o !== v || o === void 0) {
		var r = Fa(v, u, l);
		(!bt || r !== t.getAttribute('class')) &&
			(r == null ? t.removeAttribute('class') : n ? (t.className = r) : t.setAttribute('class', r)),
			(t.__className = v);
	} else if (l && p !== l)
		for (var h in l) {
			var a = !!l[h];
			(p == null || a !== !!p[h]) && t.classList.toggle(h, a);
		}
	return l;
}
function di(t, n = {}, v, u) {
	for (var p in v) {
		var l = v[p];
		n[p] !== l && (v[p] == null ? t.style.removeProperty(p) : t.style.setProperty(p, l, u));
	}
}
function mn(t, n, v, u) {
	var p = t.__style;
	if (bt || p !== n) {
		var l = Ma(n, u);
		(!bt || l !== t.getAttribute('style')) &&
			(l == null ? t.removeAttribute('style') : (t.style.cssText = l)),
			(t.__style = n);
	} else
		u &&
			(Array.isArray(u)
				? (di(t, v == null ? void 0 : v[0], u[0]),
					di(t, v == null ? void 0 : v[1], u[1], 'important'))
				: di(t, v, u));
	return u;
}
function ei(t, n, v) {
	if (t.multiple) {
		if (n == null) return;
		if (!sn(n)) return ea();
		for (var u of t.options) u.selected = n.includes(We(u));
		return;
	}
	for (u of t.options) {
		var p = We(u);
		if (ia(p, n)) {
			u.selected = !0;
			return;
		}
	}
	(!v || n !== void 0) && (t.selectedIndex = -1);
}
function yn(t, n) {
	let v = !0;
	Ei(() => {
		n && ei(t, ta(n), v), (v = !1);
		var u = new MutationObserver(() => {
			var p = t.__value;
			ei(t, p);
		});
		return (
			u.observe(t, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ['value'] }),
			() => {
				u.disconnect();
			}
		);
	});
}
function go(t, n, v = n) {
	var u = !0;
	fa(t, 'change', (p) => {
		var l = p ? '[selected]' : ':checked',
			o;
		if (t.multiple) o = [].map.call(t.querySelectorAll(l), We);
		else {
			var r = t.querySelector(l) ?? t.querySelector('option:not([disabled])');
			o = r && We(r);
		}
		v(o);
	}),
		Ei(() => {
			var p = n();
			if ((ei(t, p, u), u && p === void 0)) {
				var l = t.querySelector(':checked');
				l !== null && ((p = We(l)), v(p));
			}
			(t.__value = p), (u = !1);
		}),
		yn(t);
}
function We(t) {
	return '__value' in t ? t.__value : t.value;
}
const $t = Symbol('class'),
	te = Symbol('style'),
	vn = Symbol('is custom element'),
	bn = Symbol('is html');
function po(t) {
	if (bt) {
		var n = !1,
			v = () => {
				if (!n) {
					if (((n = !0), t.hasAttribute('value'))) {
						var u = t.value;
						ii(t, 'value', null), (t.value = u);
					}
					if (t.hasAttribute('checked')) {
						var p = t.checked;
						ii(t, 'checked', null), (t.checked = p);
					}
				}
			};
		(t.__on_r = v), na(v), ga();
	}
}
function _o(t, n) {
	var v = Mi(t);
	v.value === (v.value = n ?? void 0) ||
		(t.value === n && (n !== 0 || t.nodeName !== 'PROGRESS')) ||
		(t.value = n ?? '');
}
function Ga(t, n) {
	n ? t.hasAttribute('selected') || t.setAttribute('selected', '') : t.removeAttribute('selected');
}
function ii(t, n, v, u) {
	var p = Mi(t);
	(bt &&
		((p[n] = t.getAttribute(n)),
		n === 'src' || n === 'srcset' || (n === 'href' && t.nodeName === 'LINK'))) ||
		(p[n] !== (p[n] = v) &&
			(n === 'loading' && (t[sa] = v),
			v == null
				? t.removeAttribute(n)
				: typeof v != 'string' && Sn(t).includes(n)
					? (t[n] = v)
					: t.setAttribute(n, v)));
}
function Na(t, n, v, u, p = !1) {
	var l = Mi(t),
		o = l[vn],
		r = !l[bn];
	let h = bt && o;
	h && qe(!1);
	var a = n || {},
		f = t.tagName === 'OPTION';
	for (var _ in n) _ in v || (v[_] = null);
	v.class ? (v.class = Ra(v.class)) : v[$t] && (v.class = null),
		v[te] && (v.style ?? (v.style = null));
	var i = Sn(t);
	for (const s in v) {
		let m = v[s];
		if (f && s === 'value' && m == null) {
			(t.value = t.__value = ''), (a[s] = m);
			continue;
		}
		if (s === 'class') {
			var e = t.namespaceURI === 'http://www.w3.org/1999/xhtml';
			Wt(t, e, m, u, n == null ? void 0 : n[$t], v[$t]), (a[s] = m), (a[$t] = v[$t]);
			continue;
		}
		if (s === 'style') {
			mn(t, m, n == null ? void 0 : n[te], v[te]), (a[s] = m), (a[te] = v[te]);
			continue;
		}
		var c = a[s];
		if (m !== c) {
			a[s] = m;
			var y = s[0] + s[1];
			if (y !== '$$')
				if (y === 'on') {
					const w = {},
						A = '$$' + s;
					let M = s.slice(2);
					var b = va(M);
					if ((pa(M) && ((M = M.slice(0, -7)), (w.capture = !0)), !b && c)) {
						if (m != null) continue;
						t.removeEventListener(M, a[A], w), (a[A] = null);
					}
					if (m != null)
						if (b) (t[`__${M}`] = m), Ri([M]);
						else {
							let T = function (P) {
								a[s].call(this, P);
							};
							a[A] = _a(M, t, T, w);
						}
					else b && (t[`__${M}`] = void 0);
				} else if (s === 'style') ii(t, s, m);
				else if (s === 'autofocus') ma(t, !!m);
				else if (!o && (s === '__value' || (s === 'value' && m != null))) t.value = t.__value = m;
				else if (s === 'selected' && f) Ga(t, m);
				else {
					var k = s;
					r || (k = ya(k));
					var d = k === 'defaultValue' || k === 'defaultChecked';
					if (m == null && !o && !d)
						if (((l[s] = null), k === 'value' || k === 'checked')) {
							let w = t;
							const A = n === void 0;
							if (k === 'value') {
								let M = w.defaultValue;
								w.removeAttribute(k), (w.defaultValue = M), (w.value = w.__value = A ? M : null);
							} else {
								let M = w.defaultChecked;
								w.removeAttribute(k), (w.defaultChecked = M), (w.checked = A ? M : !1);
							}
						} else t.removeAttribute(s);
					else
						d || (i.includes(k) && (o || typeof m != 'string'))
							? (t[k] = m)
							: typeof m != 'function' && ii(t, k, m);
				}
		}
	}
	return h && qe(!0), a;
}
function Oa(t, n, v = [], u, p = !1, l = ra) {
	const o = v.map(l);
	var r = void 0,
		h = {},
		a = t.nodeName === 'SELECT',
		f = !1;
	Ai(() => {
		var _ = n(...o.map(J));
		Na(t, r, _, u, p), f && a && 'value' in _ && ei(t, _.value, !1);
		for (let e of Object.getOwnPropertySymbols(h)) _[e] || ti(h[e]);
		for (let e of Object.getOwnPropertySymbols(_)) {
			var i = _[e];
			e.description === oa &&
				(!r || i !== r[e]) &&
				(h[e] && ti(h[e]), (h[e] = ni(() => Ta(t, () => i))));
		}
		r = _;
	}),
		a && yn(t, () => r.value),
		(f = !0);
}
function Mi(t) {
	return (
		t.__attributes ??
		(t.__attributes = { [vn]: t.nodeName.includes('-'), [bn]: t.namespaceURI === aa })
	);
}
var ji = new Map();
function Sn(t) {
	var n = ji.get(t.nodeName);
	if (n) return n;
	ji.set(t.nodeName, (n = []));
	for (var v, u = t, p = Element.prototype; p !== u; ) {
		v = ha(u);
		for (var l in v) v[l].set && n.push(l);
		u = la(u);
	}
	return n;
}
const mo = { ExportButton: 'Download' },
	ee = {
		PrimaryButton:
			'bg-primary text-black px-6 py-3 font-black tracking-wide transform -skew-x-6 hover:bg-primary-light transition-colors border-2 border-primary font-industrial',
		SmallButton:
			'bg-transparent text-primary px-4 py-1 text-sm font-black border border-primary hover:bg-primary hover:text-black transition-colors font-industrial',
		SidebarButton:
			'flex w-full flex-col items-center border-2 p-3 transition-all duration-200 font-black text-xs tracking-wide font-industrial',
		SidebarButtonActive: 'bg-primary text-black border-primary',
		SidebarButtonInactive:
			'text-primary border-primary hover:bg-primary hover:text-black bg-transparent',
		SidebarToolbox: 'flex w-20 flex-col h-full bg-background-panel border-r-2 border-primary',
		SidebarPanel:
			'flex w-80 flex-col transition-all duration-200 ease-in-out h-full bg-background-card border-r-2 border-primary',
		SidebarPanelHeader: 'p-6 border-b-2 border-primary',
		SidebarPanelTitle: 'text-lg font-black tracking-wide font-industrial text-primary',
		SidebarTrashSection: 'p-2 border-t border-border',
		SidebarTrashButton:
			'flex w-full flex-col items-center rounded-lg p-3 transition-all duration-200 hover:bg-danger hover:text-black font-industrial text-xs tracking-wide text-text-muted',
		ShapeGridItem:
			'group flex flex-col items-center rounded-lg p-4 text-center transition-all duration-200 border-2 border-border bg-background-panel hover:border-primary hover:bg-background-card',
		ShapeIcon: 'mb-2 transition-transform duration-200 group-hover:scale-110 text-primary',
		ShapeName: 'text-sm font-black tracking-wide font-industrial text-text',
		TextGridItem:
			'group flex items-center rounded-xl p-4 text-left transition-all duration-200 w-full border-2 border-border bg-background-panel hover:border-primary hover:bg-background-card',
		TextIcon: 'mr-3 text-primary',
		TextName: 'text-sm font-black tracking-wide font-industrial text-white',
		UploadArea:
			'block w-full cursor-pointer rounded-lg border-2 border-dashed p-6 text-center transition-all duration-200 border-border bg-background-panel hover:border-primary hover:bg-background-card',
		UploadIcon: 'mx-auto h-12 w-12 text-primary',
		UploadTitle: 'mt-2 text-sm font-black tracking-wide font-industrial text-white',
		UploadSubtext: 'mt-1 text-xs font-mono text-text-muted',
		InfoText: 'text-sm font-mono text-text-muted',
		PlaceholderIcon: 'w-12 h-12 mx-auto mb-3 text-text-disabled',
		EditPanelDivider: 'h-6 w-px bg-primary',
		EditPanelIconButton:
			'flex h-8 w-8 items-center justify-center border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-black focus:outline-none transition-colors font-industrial',
		EditPanelSmallButton:
			'flex h-6 w-6 items-center justify-center border border-primary bg-transparent text-primary hover:bg-primary hover:text-black focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
		EditPanelSelect:
			'rounded border-2 border-primary bg-background-panel text-primary px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary w-20 font-mono',
		DropdownPanel: 'bg-background-panel border-2 border-primary rounded-lg shadow-xl z-[999999]',
		DropdownButton:
			'flex items-center gap-2 px-3 py-1.5 text-sm border-2 border-primary rounded bg-background-panel text-primary hover:bg-primary hover:text-black focus:outline-none focus:ring-2 focus:ring-primary font-industrial',
		DropdownCategory:
			'text-xs font-black text-primary uppercase tracking-wide mb-1 px-2 font-industrial',
		DropdownItem:
			'w-full text-left px-2 py-1.5 text-sm hover:bg-primary hover:text-black rounded flex justify-between items-center group text-white font-mono',
		DropdownDivider: 'border-t border-primary',
		DropdownInput:
			'px-2 py-1 text-xs border border-primary rounded bg-background-panel text-primary focus:outline-none focus:ring-1 focus:ring-primary',
		DarkBg: 'bg-black photocopied',
		PanelBg: 'bg-background-card'
	},
	yo = { SidebarClosedWidth: '80px', EditBarHeight: '80px' },
	Xt = { IDLE: 'idle', SAVING: 'saving', SAVED: 'saved', ERROR: 'error' },
	vo = { [Xt.IDLE]: '', [Xt.SAVING]: 'SAVING...', [Xt.SAVED]: 'SAVED', [Xt.ERROR]: 'ERROR' },
	bo = {
		[Xt.IDLE]: 'text-text-muted',
		[Xt.SAVING]: 'text-warning',
		[Xt.SAVED]: 'text-primary',
		[Xt.ERROR]: 'text-danger'
	};
function La(t, n) {
	ze(n, !J(n));
}
async function Da(t, n) {
	await dn.logout(), ze(n, !1), Fi('/');
}
function Ia(t, n) {
	ze(n, !1), Fi('/dashboard');
}
function Ba() {
	dn.signInWithGoogle();
}
var Ua = Lt(
		'<div><div class="p-2"><div class="px-3 py-2 border-b border-green-400 mb-2"><div class="text-green-400 font-black text-xs font-industrial"> </div></div> <button><span>Dashboard</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></button> <div></div> <button><span>Logout</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16,17 21,12 16,7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg></button></div></div>'
	),
	Va = Lt(
		'<button class="flex items-center gap-2 px-3 py-2 border-2 border-green-400 bg-transparent text-green-400 hover:bg-green-400 hover:text-black transition-colors font-industrial font-black text-sm"><div class="w-6 h-6 rounded-full bg-green-400 text-black flex items-center justify-center text-xs font-black"> </div> <span class="hidden sm:inline"> </span> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6,9 12,15 18,9"></polyline></svg></button> <!>',
		1
	),
	Ya = Lt('<button>LOGIN</button>'),
	Xa = Lt('<div class="relative"><!></div>');
function Ha(t, n) {
	pt(n, !0);
	const [v, u] = ba(),
		p = () => Sa(xa, '$authStore', v);
	let l = Hi(!1),
		o = Hi(void 0);
	Y(() => {
		if (J(l)) {
			let _ = function (e) {
				J(o) && !J(o).contains(e.target) && ze(l, !1);
			};
			const i = setTimeout(() => {
				document.addEventListener('click', _, !0);
			}, 100);
			return () => {
				clearTimeout(i), document.removeEventListener('click', _, !0);
			};
		}
	});
	var r = Xa(),
		h = ut(r);
	{
		var a = (_) => {
				var i = Va(),
					e = Qt(i);
				e.__click = [La, l];
				var c = ut(e),
					y = ut(c, !0);
				ft(c);
				var b = Nt(c, 2),
					k = ut(b, !0);
				ft(b);
				var d = Nt(b, 2);
				ft(e),
					cn(
						e,
						(w) => ze(o, w),
						() => J(o)
					);
				var s = Nt(e, 2);
				{
					var m = (w) => {
						var A = Ua();
						const M = ca(() => {
							var S;
							return (S = J(o)) == null ? void 0 : S.getBoundingClientRect();
						});
						var T = ut(A),
							P = ut(T),
							x = ut(P),
							E = ut(x, !0);
						ft(x), ft(P);
						var N = Nt(P, 2);
						N.__click = [Ia, l];
						var g = Nt(N, 2),
							C = Nt(g, 2);
						(C.__click = [Da, l]),
							ft(T),
							ft(A),
							Je(() => {
								Wt(A, 1, `fixed ${ee.DropdownPanel} w-48 z-[99999]`),
									mn(
										A,
										`top: ${J(M) ? J(M).bottom - 24 : 0}px; left: ${J(M) ? J(M).right - 192 : 0}px;`
									),
									Ze(E, p().user.email),
									Wt(N, 1, `${ee.DropdownItem} mb-1`),
									Wt(g, 1, `${ee.DropdownDivider} my-2`),
									Wt(C, 1, `${ee.DropdownItem} text-red-400 hover:bg-red-400 hover:text-black`);
							}),
							gt(w, A);
					};
					Ke(s, (w) => {
						J(l) && w(m);
					});
				}
				Je(
					(w, A) => {
						Ze(y, w), Ze(k, A), Wt(d, 0, `transition-transform ${J(l) ? 'rotate-180' : ''}`);
					},
					[
						() => {
							var w, A;
							return (
								((A = (w = p().user.name) == null ? void 0 : w.charAt(0)) == null
									? void 0
									: A.toUpperCase()) || 'U'
							);
						},
						() => {
							var w;
							return ((w = p().user.name) == null ? void 0 : w.split(' ')[0]) || 'User';
						}
					]
				),
					gt(_, i);
			},
			f = (_) => {
				var i = Ya();
				(i.__click = [Ba]), Je(() => Wt(i, 1, `${ee.PrimaryButton} text-sm px-4 py-2`)), gt(_, i);
			};
		Ke(h, (_) => {
			p().user ? _(a) : _(f, !1);
		});
	}
	ft(r), gt(t, r), _t(), u();
}
Ri(['click']);
var qa = In(
	'<svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="text-green-400"><rect x="3" y="5" width="18" height="22" fill="currentColor" opacity="0.2" transform="rotate(-2)"></rect><rect x="5" y="4" width="18" height="22" fill="currentColor" opacity="0.3" transform="rotate(1)"></rect><rect x="4" y="3" width="20" height="24" fill="currentColor" stroke="currentColor" stroke-width="2"></rect><path d="M4 3 L6 5 L4 7 L7 9 L4 11 L6 13 L4 15 L5 17 L4 19 L7 21 L4 23 L6 25 L4 27" stroke="currentColor" stroke-width="1" fill="none"></path><rect x="6" y="6" width="3" height="1" fill="black"></rect><rect x="6" y="24" width="3" height="1" fill="black"></rect><rect x="8" y="8" width="12" height="3" fill="black" transform="rotate(-1)"></rect><rect x="9" y="13" width="8" height="2" fill="black" transform="rotate(1)"></rect><rect x="7" y="17" width="10" height="2" fill="black"></rect><line x1="6" y1="10" x2="22" y2="10" stroke="black" stroke-width="0.5" opacity="0.3"></line><line x1="6" y1="16" x2="22" y2="16" stroke="black" stroke-width="0.5" opacity="0.3"></line><line x1="6" y1="20" x2="22" y2="20" stroke="black" stroke-width="0.5" opacity="0.3"></line><polygon points="26,8 27,11 30,11 28,13 29,16 26,14 23,16 24,13 22,11 25,11" fill="currentColor" transform="rotate(15)"></polygon></svg>'
);
function Wa(t) {
	var n = qa();
	gt(t, n);
}
function za() {
	Fi('/');
}
var Ka = () => history.back(),
	ja = Lt(
		'<button class="flex h-8 w-8 items-center justify-center border-2 border-green-400 bg-transparent text-green-400 hover:bg-green-400 hover:text-black transition-colors" title="Go back" aria-label="Go back to previous page"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg></button>'
	),
	Qa = Lt(
		'<div class="flex-1 flex items-center justify-center"><h1 class="text-xl font-black text-white tracking-wide font-industrial"> </h1></div>'
	),
	Ja = Lt('<div class="flex-1"></div>'),
	Za = Lt(
		'<header class="fixed left-0 right-0 top-0 z-50 flex items-center bg-black border-b-2 border-green-400" style="height: 64px;"><div class="flex items-center gap-4 px-6"><!> <button class="flex items-center gap-2 hover:opacity-80 transition-opacity" title="ZINE LIFE - Home" aria-label="ZINE LIFE - Go to home page"><!> <span class="text-green-400 font-black text-lg font-punk transform -skew-x-12">ZINE LIFE</span></button></div> <!> <div class="flex items-center px-6"><!></div></header>'
	);
function So(t, n) {
	pt(n, !0);
	let v = V(n, 'showBackButton', 3, !1),
		u = V(n, 'title', 3, ''),
		p = V(n, 'variant', 3, 'default');
	var l = Za(),
		o = ut(l),
		r = ut(o);
	{
		var h = (b) => {
			var k = ja();
			(k.__click = [Ka]), gt(b, k);
		};
		Ke(r, (b) => {
			v() && b(h);
		});
	}
	var a = Nt(r, 2);
	a.__click = [za];
	var f = ut(a);
	Wa(f), da(2), ft(a), ft(o);
	var _ = Nt(o, 2);
	{
		var i = (b) => {
				var k = Qa(),
					d = ut(k),
					s = ut(d, !0);
				ft(d), ft(k), Je(() => Ze(s, u())), gt(b, k);
			},
			e = (b) => {
				var k = Ja();
				gt(b, k);
			};
		Ke(_, (b) => {
			u() && p() === 'editor' ? b(i) : b(e, !1);
		});
	}
	var c = Nt(_, 2),
		y = ut(c);
	Ha(y, {}), ft(c), ft(l), gt(t, l), _t();
}
Ri(['click']);
var Qi =
	typeof globalThis < 'u'
		? globalThis
		: typeof window < 'u'
			? window
			: typeof global < 'u'
				? global
				: typeof self < 'u'
					? self
					: {};
function wn(t) {
	return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t;
}
var ie = {},
	ui = {},
	fi = {},
	gi = {},
	Ji;
function $() {
	return (
		Ji ||
			((Ji = 1),
			(function (t) {
				Object.defineProperty(t, '__esModule', { value: !0 }),
					(t._registerNode = t.Konva = t.glob = void 0);
				const n = Math.PI / 180;
				function v() {
					return (
						typeof window < 'u' &&
						({}.toString.call(window) === '[object Window]' ||
							{}.toString.call(window) === '[object global]')
					);
				}
				(t.glob =
					typeof Qi < 'u'
						? Qi
						: typeof window < 'u'
							? window
							: typeof WorkerGlobalScope < 'u'
								? self
								: {}),
					(t.Konva = {
						_global: t.glob,
						version: '9.3.20',
						isBrowser: v(),
						isUnminified: /param/.test(function (p) {}.toString()),
						dblClickWindow: 400,
						getAngle(p) {
							return t.Konva.angleDeg ? p * n : p;
						},
						enableTrace: !1,
						pointerEventsEnabled: !0,
						autoDrawEnabled: !0,
						hitOnDragEnabled: !1,
						capturePointerEventsEnabled: !1,
						_mouseListenClick: !1,
						_touchListenClick: !1,
						_pointerListenClick: !1,
						_mouseInDblClickWindow: !1,
						_touchInDblClickWindow: !1,
						_pointerInDblClickWindow: !1,
						_mouseDblClickPointerId: null,
						_touchDblClickPointerId: null,
						_pointerDblClickPointerId: null,
						_fixTextRendering: !1,
						pixelRatio: (typeof window < 'u' && window.devicePixelRatio) || 1,
						dragDistance: 3,
						angleDeg: !0,
						showWarnings: !0,
						dragButtons: [0, 1],
						isDragging() {
							return t.Konva.DD.isDragging;
						},
						isTransforming() {
							var p;
							return (p = t.Konva.Transformer) === null || p === void 0
								? void 0
								: p.isTransforming();
						},
						isDragReady() {
							return !!t.Konva.DD.node;
						},
						releaseCanvasOnDestroy: !0,
						document: t.glob.document,
						_injectGlobal(p) {
							t.glob.Konva = p;
						}
					});
				const u = (p) => {
					t.Konva[p.prototype.getClassName()] = p;
				};
				(t._registerNode = u), t.Konva._injectGlobal(t.Konva);
			})(gi)),
		gi
	);
}
var Zi;
function ot() {
	return (
		Zi ||
			((Zi = 1),
			(function (t) {
				Object.defineProperty(t, '__esModule', { value: !0 }), (t.Util = t.Transform = void 0);
				const n = $();
				class v {
					constructor(m = [1, 0, 0, 1, 0, 0]) {
						(this.dirty = !1), (this.m = (m && m.slice()) || [1, 0, 0, 1, 0, 0]);
					}
					reset() {
						(this.m[0] = 1),
							(this.m[1] = 0),
							(this.m[2] = 0),
							(this.m[3] = 1),
							(this.m[4] = 0),
							(this.m[5] = 0);
					}
					copy() {
						return new v(this.m);
					}
					copyInto(m) {
						(m.m[0] = this.m[0]),
							(m.m[1] = this.m[1]),
							(m.m[2] = this.m[2]),
							(m.m[3] = this.m[3]),
							(m.m[4] = this.m[4]),
							(m.m[5] = this.m[5]);
					}
					point(m) {
						const w = this.m;
						return { x: w[0] * m.x + w[2] * m.y + w[4], y: w[1] * m.x + w[3] * m.y + w[5] };
					}
					translate(m, w) {
						return (
							(this.m[4] += this.m[0] * m + this.m[2] * w),
							(this.m[5] += this.m[1] * m + this.m[3] * w),
							this
						);
					}
					scale(m, w) {
						return (this.m[0] *= m), (this.m[1] *= m), (this.m[2] *= w), (this.m[3] *= w), this;
					}
					rotate(m) {
						const w = Math.cos(m),
							A = Math.sin(m),
							M = this.m[0] * w + this.m[2] * A,
							T = this.m[1] * w + this.m[3] * A,
							P = this.m[0] * -A + this.m[2] * w,
							x = this.m[1] * -A + this.m[3] * w;
						return (this.m[0] = M), (this.m[1] = T), (this.m[2] = P), (this.m[3] = x), this;
					}
					getTranslation() {
						return { x: this.m[4], y: this.m[5] };
					}
					skew(m, w) {
						const A = this.m[0] + this.m[2] * w,
							M = this.m[1] + this.m[3] * w,
							T = this.m[2] + this.m[0] * m,
							P = this.m[3] + this.m[1] * m;
						return (this.m[0] = A), (this.m[1] = M), (this.m[2] = T), (this.m[3] = P), this;
					}
					multiply(m) {
						const w = this.m[0] * m.m[0] + this.m[2] * m.m[1],
							A = this.m[1] * m.m[0] + this.m[3] * m.m[1],
							M = this.m[0] * m.m[2] + this.m[2] * m.m[3],
							T = this.m[1] * m.m[2] + this.m[3] * m.m[3],
							P = this.m[0] * m.m[4] + this.m[2] * m.m[5] + this.m[4],
							x = this.m[1] * m.m[4] + this.m[3] * m.m[5] + this.m[5];
						return (
							(this.m[0] = w),
							(this.m[1] = A),
							(this.m[2] = M),
							(this.m[3] = T),
							(this.m[4] = P),
							(this.m[5] = x),
							this
						);
					}
					invert() {
						const m = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]),
							w = this.m[3] * m,
							A = -this.m[1] * m,
							M = -this.m[2] * m,
							T = this.m[0] * m,
							P = m * (this.m[2] * this.m[5] - this.m[3] * this.m[4]),
							x = m * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
						return (
							(this.m[0] = w),
							(this.m[1] = A),
							(this.m[2] = M),
							(this.m[3] = T),
							(this.m[4] = P),
							(this.m[5] = x),
							this
						);
					}
					getMatrix() {
						return this.m;
					}
					decompose() {
						const m = this.m[0],
							w = this.m[1],
							A = this.m[2],
							M = this.m[3],
							T = this.m[4],
							P = this.m[5],
							x = m * M - w * A,
							E = { x: T, y: P, rotation: 0, scaleX: 0, scaleY: 0, skewX: 0, skewY: 0 };
						if (m != 0 || w != 0) {
							const N = Math.sqrt(m * m + w * w);
							(E.rotation = w > 0 ? Math.acos(m / N) : -Math.acos(m / N)),
								(E.scaleX = N),
								(E.scaleY = x / N),
								(E.skewX = (m * A + w * M) / x),
								(E.skewY = 0);
						} else if (A != 0 || M != 0) {
							const N = Math.sqrt(A * A + M * M);
							(E.rotation = Math.PI / 2 - (M > 0 ? Math.acos(-A / N) : -Math.acos(A / N))),
								(E.scaleX = x / N),
								(E.scaleY = N),
								(E.skewX = 0),
								(E.skewY = (m * A + w * M) / x);
						}
						return (E.rotation = t.Util._getRotation(E.rotation)), E;
					}
				}
				t.Transform = v;
				const u = '[object Array]',
					p = '[object Number]',
					l = '[object String]',
					o = '[object Boolean]',
					r = Math.PI / 180,
					h = 180 / Math.PI,
					a = '#',
					f = '',
					_ = '0',
					i = 'Konva warning: ',
					e = 'Konva error: ',
					c = 'rgb(',
					y = {
						aliceblue: [240, 248, 255],
						antiquewhite: [250, 235, 215],
						aqua: [0, 255, 255],
						aquamarine: [127, 255, 212],
						azure: [240, 255, 255],
						beige: [245, 245, 220],
						bisque: [255, 228, 196],
						black: [0, 0, 0],
						blanchedalmond: [255, 235, 205],
						blue: [0, 0, 255],
						blueviolet: [138, 43, 226],
						brown: [165, 42, 42],
						burlywood: [222, 184, 135],
						cadetblue: [95, 158, 160],
						chartreuse: [127, 255, 0],
						chocolate: [210, 105, 30],
						coral: [255, 127, 80],
						cornflowerblue: [100, 149, 237],
						cornsilk: [255, 248, 220],
						crimson: [220, 20, 60],
						cyan: [0, 255, 255],
						darkblue: [0, 0, 139],
						darkcyan: [0, 139, 139],
						darkgoldenrod: [184, 132, 11],
						darkgray: [169, 169, 169],
						darkgreen: [0, 100, 0],
						darkgrey: [169, 169, 169],
						darkkhaki: [189, 183, 107],
						darkmagenta: [139, 0, 139],
						darkolivegreen: [85, 107, 47],
						darkorange: [255, 140, 0],
						darkorchid: [153, 50, 204],
						darkred: [139, 0, 0],
						darksalmon: [233, 150, 122],
						darkseagreen: [143, 188, 143],
						darkslateblue: [72, 61, 139],
						darkslategray: [47, 79, 79],
						darkslategrey: [47, 79, 79],
						darkturquoise: [0, 206, 209],
						darkviolet: [148, 0, 211],
						deeppink: [255, 20, 147],
						deepskyblue: [0, 191, 255],
						dimgray: [105, 105, 105],
						dimgrey: [105, 105, 105],
						dodgerblue: [30, 144, 255],
						firebrick: [178, 34, 34],
						floralwhite: [255, 255, 240],
						forestgreen: [34, 139, 34],
						fuchsia: [255, 0, 255],
						gainsboro: [220, 220, 220],
						ghostwhite: [248, 248, 255],
						gold: [255, 215, 0],
						goldenrod: [218, 165, 32],
						gray: [128, 128, 128],
						green: [0, 128, 0],
						greenyellow: [173, 255, 47],
						grey: [128, 128, 128],
						honeydew: [240, 255, 240],
						hotpink: [255, 105, 180],
						indianred: [205, 92, 92],
						indigo: [75, 0, 130],
						ivory: [255, 255, 240],
						khaki: [240, 230, 140],
						lavender: [230, 230, 250],
						lavenderblush: [255, 240, 245],
						lawngreen: [124, 252, 0],
						lemonchiffon: [255, 250, 205],
						lightblue: [173, 216, 230],
						lightcoral: [240, 128, 128],
						lightcyan: [224, 255, 255],
						lightgoldenrodyellow: [250, 250, 210],
						lightgray: [211, 211, 211],
						lightgreen: [144, 238, 144],
						lightgrey: [211, 211, 211],
						lightpink: [255, 182, 193],
						lightsalmon: [255, 160, 122],
						lightseagreen: [32, 178, 170],
						lightskyblue: [135, 206, 250],
						lightslategray: [119, 136, 153],
						lightslategrey: [119, 136, 153],
						lightsteelblue: [176, 196, 222],
						lightyellow: [255, 255, 224],
						lime: [0, 255, 0],
						limegreen: [50, 205, 50],
						linen: [250, 240, 230],
						magenta: [255, 0, 255],
						maroon: [128, 0, 0],
						mediumaquamarine: [102, 205, 170],
						mediumblue: [0, 0, 205],
						mediumorchid: [186, 85, 211],
						mediumpurple: [147, 112, 219],
						mediumseagreen: [60, 179, 113],
						mediumslateblue: [123, 104, 238],
						mediumspringgreen: [0, 250, 154],
						mediumturquoise: [72, 209, 204],
						mediumvioletred: [199, 21, 133],
						midnightblue: [25, 25, 112],
						mintcream: [245, 255, 250],
						mistyrose: [255, 228, 225],
						moccasin: [255, 228, 181],
						navajowhite: [255, 222, 173],
						navy: [0, 0, 128],
						oldlace: [253, 245, 230],
						olive: [128, 128, 0],
						olivedrab: [107, 142, 35],
						orange: [255, 165, 0],
						orangered: [255, 69, 0],
						orchid: [218, 112, 214],
						palegoldenrod: [238, 232, 170],
						palegreen: [152, 251, 152],
						paleturquoise: [175, 238, 238],
						palevioletred: [219, 112, 147],
						papayawhip: [255, 239, 213],
						peachpuff: [255, 218, 185],
						peru: [205, 133, 63],
						pink: [255, 192, 203],
						plum: [221, 160, 203],
						powderblue: [176, 224, 230],
						purple: [128, 0, 128],
						rebeccapurple: [102, 51, 153],
						red: [255, 0, 0],
						rosybrown: [188, 143, 143],
						royalblue: [65, 105, 225],
						saddlebrown: [139, 69, 19],
						salmon: [250, 128, 114],
						sandybrown: [244, 164, 96],
						seagreen: [46, 139, 87],
						seashell: [255, 245, 238],
						sienna: [160, 82, 45],
						silver: [192, 192, 192],
						skyblue: [135, 206, 235],
						slateblue: [106, 90, 205],
						slategray: [119, 128, 144],
						slategrey: [119, 128, 144],
						snow: [255, 255, 250],
						springgreen: [0, 255, 127],
						steelblue: [70, 130, 180],
						tan: [210, 180, 140],
						teal: [0, 128, 128],
						thistle: [216, 191, 216],
						transparent: [255, 255, 255, 0],
						tomato: [255, 99, 71],
						turquoise: [64, 224, 208],
						violet: [238, 130, 238],
						wheat: [245, 222, 179],
						white: [255, 255, 255],
						whitesmoke: [245, 245, 245],
						yellow: [255, 255, 0],
						yellowgreen: [154, 205, 5]
					},
					b = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;
				let k = [];
				const d =
					(typeof requestAnimationFrame < 'u' && requestAnimationFrame) ||
					function (s) {
						setTimeout(s, 60);
					};
				t.Util = {
					_isElement(s) {
						return !!(s && s.nodeType == 1);
					},
					_isFunction(s) {
						return !!(s && s.constructor && s.call && s.apply);
					},
					_isPlainObject(s) {
						return !!s && s.constructor === Object;
					},
					_isArray(s) {
						return Object.prototype.toString.call(s) === u;
					},
					_isNumber(s) {
						return Object.prototype.toString.call(s) === p && !isNaN(s) && isFinite(s);
					},
					_isString(s) {
						return Object.prototype.toString.call(s) === l;
					},
					_isBoolean(s) {
						return Object.prototype.toString.call(s) === o;
					},
					isObject(s) {
						return s instanceof Object;
					},
					isValidSelector(s) {
						if (typeof s != 'string') return !1;
						const m = s[0];
						return m === '#' || m === '.' || m === m.toUpperCase();
					},
					_sign(s) {
						return s === 0 || s > 0 ? 1 : -1;
					},
					requestAnimFrame(s) {
						k.push(s),
							k.length === 1 &&
								d(function () {
									const m = k;
									(k = []),
										m.forEach(function (w) {
											w();
										});
								});
					},
					createCanvasElement() {
						const s = document.createElement('canvas');
						try {
							s.style = s.style || {};
						} catch {}
						return s;
					},
					createImageElement() {
						return document.createElement('img');
					},
					_isInDocument(s) {
						for (; (s = s.parentNode); ) if (s == document) return !0;
						return !1;
					},
					_urlToImage(s, m) {
						const w = t.Util.createImageElement();
						(w.onload = function () {
							m(w);
						}),
							(w.src = s);
					},
					_rgbToHex(s, m, w) {
						return ((1 << 24) + (s << 16) + (m << 8) + w).toString(16).slice(1);
					},
					_hexToRgb(s) {
						s = s.replace(a, f);
						const m = parseInt(s, 16);
						return { r: (m >> 16) & 255, g: (m >> 8) & 255, b: m & 255 };
					},
					getRandomColor() {
						let s = ((Math.random() * 16777215) << 0).toString(16);
						for (; s.length < 6; ) s = _ + s;
						return a + s;
					},
					getRGB(s) {
						let m;
						return s in y
							? ((m = y[s]), { r: m[0], g: m[1], b: m[2] })
							: s[0] === a
								? this._hexToRgb(s.substring(1))
								: s.substr(0, 4) === c
									? ((m = b.exec(s.replace(/ /g, ''))),
										{ r: parseInt(m[1], 10), g: parseInt(m[2], 10), b: parseInt(m[3], 10) })
									: { r: 0, g: 0, b: 0 };
					},
					colorToRGBA(s) {
						return (
							(s = s || 'black'),
							t.Util._namedColorToRBA(s) ||
								t.Util._hex3ColorToRGBA(s) ||
								t.Util._hex4ColorToRGBA(s) ||
								t.Util._hex6ColorToRGBA(s) ||
								t.Util._hex8ColorToRGBA(s) ||
								t.Util._rgbColorToRGBA(s) ||
								t.Util._rgbaColorToRGBA(s) ||
								t.Util._hslColorToRGBA(s)
						);
					},
					_namedColorToRBA(s) {
						const m = y[s.toLowerCase()];
						return m ? { r: m[0], g: m[1], b: m[2], a: 1 } : null;
					},
					_rgbColorToRGBA(s) {
						if (s.indexOf('rgb(') === 0) {
							s = s.match(/rgb\(([^)]+)\)/)[1];
							const m = s.split(/ *, */).map(Number);
							return { r: m[0], g: m[1], b: m[2], a: 1 };
						}
					},
					_rgbaColorToRGBA(s) {
						if (s.indexOf('rgba(') === 0) {
							s = s.match(/rgba\(([^)]+)\)/)[1];
							const m = s
								.split(/ *, */)
								.map((w, A) =>
									w.slice(-1) === '%'
										? A === 3
											? parseInt(w) / 100
											: (parseInt(w) / 100) * 255
										: Number(w)
								);
							return { r: m[0], g: m[1], b: m[2], a: m[3] };
						}
					},
					_hex8ColorToRGBA(s) {
						if (s[0] === '#' && s.length === 9)
							return {
								r: parseInt(s.slice(1, 3), 16),
								g: parseInt(s.slice(3, 5), 16),
								b: parseInt(s.slice(5, 7), 16),
								a: parseInt(s.slice(7, 9), 16) / 255
							};
					},
					_hex6ColorToRGBA(s) {
						if (s[0] === '#' && s.length === 7)
							return {
								r: parseInt(s.slice(1, 3), 16),
								g: parseInt(s.slice(3, 5), 16),
								b: parseInt(s.slice(5, 7), 16),
								a: 1
							};
					},
					_hex4ColorToRGBA(s) {
						if (s[0] === '#' && s.length === 5)
							return {
								r: parseInt(s[1] + s[1], 16),
								g: parseInt(s[2] + s[2], 16),
								b: parseInt(s[3] + s[3], 16),
								a: parseInt(s[4] + s[4], 16) / 255
							};
					},
					_hex3ColorToRGBA(s) {
						if (s[0] === '#' && s.length === 4)
							return {
								r: parseInt(s[1] + s[1], 16),
								g: parseInt(s[2] + s[2], 16),
								b: parseInt(s[3] + s[3], 16),
								a: 1
							};
					},
					_hslColorToRGBA(s) {
						if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(s)) {
							const [m, ...w] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(s),
								A = Number(w[0]) / 360,
								M = Number(w[1]) / 100,
								T = Number(w[2]) / 100;
							let P, x, E;
							if (M === 0)
								return (
									(E = T * 255), { r: Math.round(E), g: Math.round(E), b: Math.round(E), a: 1 }
								);
							T < 0.5 ? (P = T * (1 + M)) : (P = T + M - T * M);
							const N = 2 * T - P,
								g = [0, 0, 0];
							for (let C = 0; C < 3; C++)
								(x = A + (1 / 3) * -(C - 1)),
									x < 0 && x++,
									x > 1 && x--,
									6 * x < 1
										? (E = N + (P - N) * 6 * x)
										: 2 * x < 1
											? (E = P)
											: 3 * x < 2
												? (E = N + (P - N) * (2 / 3 - x) * 6)
												: (E = N),
									(g[C] = E * 255);
							return { r: Math.round(g[0]), g: Math.round(g[1]), b: Math.round(g[2]), a: 1 };
						}
					},
					haveIntersection(s, m) {
						return !(
							m.x > s.x + s.width ||
							m.x + m.width < s.x ||
							m.y > s.y + s.height ||
							m.y + m.height < s.y
						);
					},
					cloneObject(s) {
						const m = {};
						for (const w in s)
							this._isPlainObject(s[w])
								? (m[w] = this.cloneObject(s[w]))
								: this._isArray(s[w])
									? (m[w] = this.cloneArray(s[w]))
									: (m[w] = s[w]);
						return m;
					},
					cloneArray(s) {
						return s.slice(0);
					},
					degToRad(s) {
						return s * r;
					},
					radToDeg(s) {
						return s * h;
					},
					_degToRad(s) {
						return (
							t.Util.warn('Util._degToRad is removed. Please use public Util.degToRad instead.'),
							t.Util.degToRad(s)
						);
					},
					_radToDeg(s) {
						return (
							t.Util.warn('Util._radToDeg is removed. Please use public Util.radToDeg instead.'),
							t.Util.radToDeg(s)
						);
					},
					_getRotation(s) {
						return n.Konva.angleDeg ? t.Util.radToDeg(s) : s;
					},
					_capitalize(s) {
						return s.charAt(0).toUpperCase() + s.slice(1);
					},
					throw(s) {
						throw new Error(e + s);
					},
					error(s) {
						console.error(e + s);
					},
					warn(s) {
						n.Konva.showWarnings && console.warn(i + s);
					},
					each(s, m) {
						for (const w in s) m(w, s[w]);
					},
					_inRange(s, m, w) {
						return m <= s && s < w;
					},
					_getProjectionToSegment(s, m, w, A, M, T) {
						let P, x, E;
						const N = (s - w) * (s - w) + (m - A) * (m - A);
						if (N == 0) (P = s), (x = m), (E = (M - w) * (M - w) + (T - A) * (T - A));
						else {
							const g = ((M - s) * (w - s) + (T - m) * (A - m)) / N;
							g < 0
								? ((P = s), (x = m), (E = (s - M) * (s - M) + (m - T) * (m - T)))
								: g > 1
									? ((P = w), (x = A), (E = (w - M) * (w - M) + (A - T) * (A - T)))
									: ((P = s + g * (w - s)),
										(x = m + g * (A - m)),
										(E = (P - M) * (P - M) + (x - T) * (x - T)));
						}
						return [P, x, E];
					},
					_getProjectionToLine(s, m, w) {
						const A = t.Util.cloneObject(s);
						let M = Number.MAX_VALUE;
						return (
							m.forEach(function (T, P) {
								if (!w && P === m.length - 1) return;
								const x = m[(P + 1) % m.length],
									E = t.Util._getProjectionToSegment(T.x, T.y, x.x, x.y, s.x, s.y),
									N = E[0],
									g = E[1],
									C = E[2];
								C < M && ((A.x = N), (A.y = g), (M = C));
							}),
							A
						);
					},
					_prepareArrayForTween(s, m, w) {
						const A = [],
							M = [];
						if (s.length > m.length) {
							const P = m;
							(m = s), (s = P);
						}
						for (let P = 0; P < s.length; P += 2) A.push({ x: s[P], y: s[P + 1] });
						for (let P = 0; P < m.length; P += 2) M.push({ x: m[P], y: m[P + 1] });
						const T = [];
						return (
							M.forEach(function (P) {
								const x = t.Util._getProjectionToLine(P, A, w);
								T.push(x.x), T.push(x.y);
							}),
							T
						);
					},
					_prepareToStringify(s) {
						let m;
						s.visitedByCircularReferenceRemoval = !0;
						for (const w in s)
							if (s.hasOwnProperty(w) && s[w] && typeof s[w] == 'object') {
								if (
									((m = Object.getOwnPropertyDescriptor(s, w)),
									s[w].visitedByCircularReferenceRemoval || t.Util._isElement(s[w]))
								)
									if (m.configurable) delete s[w];
									else return null;
								else if (t.Util._prepareToStringify(s[w]) === null)
									if (m.configurable) delete s[w];
									else return null;
							}
						return delete s.visitedByCircularReferenceRemoval, s;
					},
					_assign(s, m) {
						for (const w in m) s[w] = m[w];
						return s;
					},
					_getFirstPointerId(s) {
						return s.touches ? s.changedTouches[0].identifier : s.pointerId || 999;
					},
					releaseCanvas(...s) {
						n.Konva.releaseCanvasOnDestroy &&
							s.forEach((m) => {
								(m.width = 0), (m.height = 0);
							});
					},
					drawRoundedRectPath(s, m, w, A) {
						let M = 0,
							T = 0,
							P = 0,
							x = 0;
						typeof A == 'number'
							? (M = T = P = x = Math.min(A, m / 2, w / 2))
							: ((M = Math.min(A[0] || 0, m / 2, w / 2)),
								(T = Math.min(A[1] || 0, m / 2, w / 2)),
								(x = Math.min(A[2] || 0, m / 2, w / 2)),
								(P = Math.min(A[3] || 0, m / 2, w / 2))),
							s.moveTo(M, 0),
							s.lineTo(m - T, 0),
							s.arc(m - T, T, T, (Math.PI * 3) / 2, 0, !1),
							s.lineTo(m, w - x),
							s.arc(m - x, w - x, x, 0, Math.PI / 2, !1),
							s.lineTo(P, w),
							s.arc(P, w - P, P, Math.PI / 2, Math.PI, !1),
							s.lineTo(0, M),
							s.arc(M, M, M, Math.PI, (Math.PI * 3) / 2, !1);
					}
				};
			})(fi)),
		fi
	);
}
var yt = {},
	$i;
function et() {
	if ($i) return yt;
	($i = 1),
		Object.defineProperty(yt, '__esModule', { value: !0 }),
		(yt.RGBComponent = u),
		(yt.alphaComponent = p),
		(yt.getNumberValidator = l),
		(yt.getNumberOrArrayOfNumbersValidator = o),
		(yt.getNumberOrAutoValidator = r),
		(yt.getStringValidator = h),
		(yt.getStringOrGradientValidator = a),
		(yt.getFunctionValidator = f),
		(yt.getNumberArrayValidator = _),
		(yt.getBooleanValidator = i),
		(yt.getComponentValidator = e);
	const t = $(),
		n = ot();
	function v(c) {
		return n.Util._isString(c)
			? '"' + c + '"'
			: Object.prototype.toString.call(c) === '[object Number]' || n.Util._isBoolean(c)
				? c
				: Object.prototype.toString.call(c);
	}
	function u(c) {
		return c > 255 ? 255 : c < 0 ? 0 : Math.round(c);
	}
	function p(c) {
		return c > 1 ? 1 : c < 1e-4 ? 1e-4 : c;
	}
	function l() {
		if (t.Konva.isUnminified)
			return function (c, y) {
				return (
					n.Util._isNumber(c) ||
						n.Util.warn(
							v(c) +
								' is a not valid value for "' +
								y +
								'" attribute. The value should be a number.'
						),
					c
				);
			};
	}
	function o(c) {
		if (t.Konva.isUnminified)
			return function (y, b) {
				let k = n.Util._isNumber(y),
					d = n.Util._isArray(y) && y.length == c;
				return (
					!k &&
						!d &&
						n.Util.warn(
							v(y) +
								' is a not valid value for "' +
								b +
								'" attribute. The value should be a number or Array<number>(' +
								c +
								')'
						),
					y
				);
			};
	}
	function r() {
		if (t.Konva.isUnminified)
			return function (c, y) {
				var b = n.Util._isNumber(c),
					k = c === 'auto';
				return (
					b ||
						k ||
						n.Util.warn(
							v(c) +
								' is a not valid value for "' +
								y +
								'" attribute. The value should be a number or "auto".'
						),
					c
				);
			};
	}
	function h() {
		if (t.Konva.isUnminified)
			return function (c, y) {
				return (
					n.Util._isString(c) ||
						n.Util.warn(
							v(c) +
								' is a not valid value for "' +
								y +
								'" attribute. The value should be a string.'
						),
					c
				);
			};
	}
	function a() {
		if (t.Konva.isUnminified)
			return function (c, y) {
				const b = n.Util._isString(c),
					k =
						Object.prototype.toString.call(c) === '[object CanvasGradient]' ||
						(c && c.addColorStop);
				return (
					b ||
						k ||
						n.Util.warn(
							v(c) +
								' is a not valid value for "' +
								y +
								'" attribute. The value should be a string or a native gradient.'
						),
					c
				);
			};
	}
	function f() {
		if (t.Konva.isUnminified)
			return function (c, y) {
				return (
					n.Util._isFunction(c) ||
						n.Util.warn(
							v(c) +
								' is a not valid value for "' +
								y +
								'" attribute. The value should be a function.'
						),
					c
				);
			};
	}
	function _() {
		if (t.Konva.isUnminified)
			return function (c, y) {
				const b = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
				return (
					(b && c instanceof b) ||
						(n.Util._isArray(c)
							? c.forEach(function (k) {
									n.Util._isNumber(k) ||
										n.Util.warn(
											'"' +
												y +
												'" attribute has non numeric element ' +
												k +
												'. Make sure that all elements are numbers.'
										);
								})
							: n.Util.warn(
									v(c) +
										' is a not valid value for "' +
										y +
										'" attribute. The value should be a array of numbers.'
								)),
					c
				);
			};
	}
	function i() {
		if (t.Konva.isUnminified)
			return function (c, y) {
				var b = c === !0 || c === !1;
				return (
					b ||
						n.Util.warn(
							v(c) +
								' is a not valid value for "' +
								y +
								'" attribute. The value should be a boolean.'
						),
					c
				);
			};
	}
	function e(c) {
		if (t.Konva.isUnminified)
			return function (y, b) {
				return (
					y == null ||
						n.Util.isObject(y) ||
						n.Util.warn(
							v(y) +
								' is a not valid value for "' +
								b +
								'" attribute. The value should be an object with properties ' +
								c
						),
					y
				);
			};
	}
	return yt;
}
var tr;
function tt() {
	return (
		tr ||
			((tr = 1),
			(function (t) {
				Object.defineProperty(t, '__esModule', { value: !0 }), (t.Factory = void 0);
				const n = ot(),
					v = et(),
					u = 'get',
					p = 'set';
				t.Factory = {
					addGetterSetter(l, o, r, h, a) {
						t.Factory.addGetter(l, o, r),
							t.Factory.addSetter(l, o, h, a),
							t.Factory.addOverloadedGetterSetter(l, o);
					},
					addGetter(l, o, r) {
						var h = u + n.Util._capitalize(o);
						l.prototype[h] =
							l.prototype[h] ||
							function () {
								const a = this.attrs[o];
								return a === void 0 ? r : a;
							};
					},
					addSetter(l, o, r, h) {
						var a = p + n.Util._capitalize(o);
						l.prototype[a] || t.Factory.overWriteSetter(l, o, r, h);
					},
					overWriteSetter(l, o, r, h) {
						var a = p + n.Util._capitalize(o);
						l.prototype[a] = function (f) {
							return (
								r && f !== void 0 && f !== null && (f = r.call(this, f, o)),
								this._setAttr(o, f),
								h && h.call(this),
								this
							);
						};
					},
					addComponentsGetterSetter(l, o, r, h, a) {
						const f = r.length,
							_ = n.Util._capitalize,
							i = u + _(o),
							e = p + _(o);
						l.prototype[i] = function () {
							const y = {};
							for (let b = 0; b < f; b++) {
								const k = r[b];
								y[k] = this.getAttr(o + _(k));
							}
							return y;
						};
						const c = (0, v.getComponentValidator)(r);
						(l.prototype[e] = function (y) {
							const b = this.attrs[o];
							h && (y = h.call(this, y, o)), c && c.call(this, y, o);
							for (const k in y) y.hasOwnProperty(k) && this._setAttr(o + _(k), y[k]);
							return (
								y ||
									r.forEach((k) => {
										this._setAttr(o + _(k), void 0);
									}),
								this._fireChangeEvent(o, b, y),
								a && a.call(this),
								this
							);
						}),
							t.Factory.addOverloadedGetterSetter(l, o);
					},
					addOverloadedGetterSetter(l, o) {
						var r = n.Util._capitalize(o),
							h = p + r,
							a = u + r;
						l.prototype[o] = function () {
							return arguments.length ? (this[h](arguments[0]), this) : this[a]();
						};
					},
					addDeprecatedGetterSetter(l, o, r, h) {
						n.Util.error('Adding deprecated ' + o);
						const a = u + n.Util._capitalize(o),
							f =
								o +
								' property is deprecated and will be removed soon. Look at Konva change log for more information.';
						(l.prototype[a] = function () {
							n.Util.error(f);
							const _ = this.attrs[o];
							return _ === void 0 ? r : _;
						}),
							t.Factory.addSetter(l, o, h, function () {
								n.Util.error(f);
							}),
							t.Factory.addOverloadedGetterSetter(l, o);
					},
					backCompat(l, o) {
						n.Util.each(o, function (r, h) {
							const a = l.prototype[h],
								f = u + n.Util._capitalize(r),
								_ = p + n.Util._capitalize(r);
							function i() {
								a.apply(this, arguments),
									n.Util.error(
										'"' +
											r +
											'" method is deprecated and will be removed soon. Use ""' +
											h +
											'" instead.'
									);
							}
							(l.prototype[r] = i), (l.prototype[f] = i), (l.prototype[_] = i);
						});
					},
					afterSetFilter() {
						this._filterUpToDate = !1;
					}
				};
			})(ui)),
		ui
	);
}
var pi = {},
	re = {},
	Mt = {},
	Gt = {},
	er;
function Cn() {
	if (er) return Gt;
	(er = 1),
		Object.defineProperty(Gt, '__esModule', { value: !0 }),
		(Gt.HitContext = Gt.SceneContext = Gt.Context = void 0);
	const t = ot(),
		n = $();
	function v(k) {
		const d = [],
			s = k.length,
			m = t.Util;
		for (let w = 0; w < s; w++) {
			let A = k[w];
			m._isNumber(A) ? (A = Math.round(A * 1e3) / 1e3) : m._isString(A) || (A = A + ''), d.push(A);
		}
		return d;
	}
	const u = ',',
		p = '(',
		l = ')',
		o = '([',
		r = '])',
		h = ';',
		a = '()',
		f = '=',
		_ = [
			'arc',
			'arcTo',
			'beginPath',
			'bezierCurveTo',
			'clearRect',
			'clip',
			'closePath',
			'createLinearGradient',
			'createPattern',
			'createRadialGradient',
			'drawImage',
			'ellipse',
			'fill',
			'fillText',
			'getImageData',
			'createImageData',
			'lineTo',
			'moveTo',
			'putImageData',
			'quadraticCurveTo',
			'rect',
			'roundRect',
			'restore',
			'rotate',
			'save',
			'scale',
			'setLineDash',
			'setTransform',
			'stroke',
			'strokeText',
			'transform',
			'translate'
		],
		i = [
			'fillStyle',
			'strokeStyle',
			'shadowColor',
			'shadowBlur',
			'shadowOffsetX',
			'shadowOffsetY',
			'letterSpacing',
			'lineCap',
			'lineDashOffset',
			'lineJoin',
			'lineWidth',
			'miterLimit',
			'direction',
			'font',
			'textAlign',
			'textBaseline',
			'globalAlpha',
			'globalCompositeOperation',
			'imageSmoothingEnabled'
		],
		e = 100;
	let c = class {
		constructor(d) {
			(this.canvas = d), n.Konva.enableTrace && ((this.traceArr = []), this._enableTrace());
		}
		fillShape(d) {
			d.fillEnabled() && this._fill(d);
		}
		_fill(d) {}
		strokeShape(d) {
			d.hasStroke() && this._stroke(d);
		}
		_stroke(d) {}
		fillStrokeShape(d) {
			d.attrs.fillAfterStrokeEnabled
				? (this.strokeShape(d), this.fillShape(d))
				: (this.fillShape(d), this.strokeShape(d));
		}
		getTrace(d, s) {
			let m = this.traceArr,
				w = m.length,
				A = '',
				M,
				T,
				P,
				x;
			for (M = 0; M < w; M++)
				(T = m[M]),
					(P = T.method),
					P
						? ((x = T.args),
							(A += P),
							d
								? (A += a)
								: t.Util._isArray(x[0])
									? (A += o + x.join(u) + r)
									: (s && (x = x.map((E) => (typeof E == 'number' ? Math.floor(E) : E))),
										(A += p + x.join(u) + l)))
						: ((A += T.property), d || (A += f + T.val)),
					(A += h);
			return A;
		}
		clearTrace() {
			this.traceArr = [];
		}
		_trace(d) {
			let s = this.traceArr,
				m;
			s.push(d), (m = s.length), m >= e && s.shift();
		}
		reset() {
			const d = this.getCanvas().getPixelRatio();
			this.setTransform(1 * d, 0, 0, 1 * d, 0, 0);
		}
		getCanvas() {
			return this.canvas;
		}
		clear(d) {
			const s = this.getCanvas();
			d
				? this.clearRect(d.x || 0, d.y || 0, d.width || 0, d.height || 0)
				: this.clearRect(0, 0, s.getWidth() / s.pixelRatio, s.getHeight() / s.pixelRatio);
		}
		_applyLineCap(d) {
			const s = d.attrs.lineCap;
			s && this.setAttr('lineCap', s);
		}
		_applyOpacity(d) {
			const s = d.getAbsoluteOpacity();
			s !== 1 && this.setAttr('globalAlpha', s);
		}
		_applyLineJoin(d) {
			const s = d.attrs.lineJoin;
			s && this.setAttr('lineJoin', s);
		}
		setAttr(d, s) {
			this._context[d] = s;
		}
		arc(d, s, m, w, A, M) {
			this._context.arc(d, s, m, w, A, M);
		}
		arcTo(d, s, m, w, A) {
			this._context.arcTo(d, s, m, w, A);
		}
		beginPath() {
			this._context.beginPath();
		}
		bezierCurveTo(d, s, m, w, A, M) {
			this._context.bezierCurveTo(d, s, m, w, A, M);
		}
		clearRect(d, s, m, w) {
			this._context.clearRect(d, s, m, w);
		}
		clip(...d) {
			this._context.clip.apply(this._context, d);
		}
		closePath() {
			this._context.closePath();
		}
		createImageData(d, s) {
			const m = arguments;
			if (m.length === 2) return this._context.createImageData(d, s);
			if (m.length === 1) return this._context.createImageData(d);
		}
		createLinearGradient(d, s, m, w) {
			return this._context.createLinearGradient(d, s, m, w);
		}
		createPattern(d, s) {
			return this._context.createPattern(d, s);
		}
		createRadialGradient(d, s, m, w, A, M) {
			return this._context.createRadialGradient(d, s, m, w, A, M);
		}
		drawImage(d, s, m, w, A, M, T, P, x) {
			const E = arguments,
				N = this._context;
			E.length === 3
				? N.drawImage(d, s, m)
				: E.length === 5
					? N.drawImage(d, s, m, w, A)
					: E.length === 9 && N.drawImage(d, s, m, w, A, M, T, P, x);
		}
		ellipse(d, s, m, w, A, M, T, P) {
			this._context.ellipse(d, s, m, w, A, M, T, P);
		}
		isPointInPath(d, s, m, w) {
			return m ? this._context.isPointInPath(m, d, s, w) : this._context.isPointInPath(d, s, w);
		}
		fill(...d) {
			this._context.fill.apply(this._context, d);
		}
		fillRect(d, s, m, w) {
			this._context.fillRect(d, s, m, w);
		}
		strokeRect(d, s, m, w) {
			this._context.strokeRect(d, s, m, w);
		}
		fillText(d, s, m, w) {
			w ? this._context.fillText(d, s, m, w) : this._context.fillText(d, s, m);
		}
		measureText(d) {
			return this._context.measureText(d);
		}
		getImageData(d, s, m, w) {
			return this._context.getImageData(d, s, m, w);
		}
		lineTo(d, s) {
			this._context.lineTo(d, s);
		}
		moveTo(d, s) {
			this._context.moveTo(d, s);
		}
		rect(d, s, m, w) {
			this._context.rect(d, s, m, w);
		}
		roundRect(d, s, m, w, A) {
			this._context.roundRect(d, s, m, w, A);
		}
		putImageData(d, s, m) {
			this._context.putImageData(d, s, m);
		}
		quadraticCurveTo(d, s, m, w) {
			this._context.quadraticCurveTo(d, s, m, w);
		}
		restore() {
			this._context.restore();
		}
		rotate(d) {
			this._context.rotate(d);
		}
		save() {
			this._context.save();
		}
		scale(d, s) {
			this._context.scale(d, s);
		}
		setLineDash(d) {
			this._context.setLineDash
				? this._context.setLineDash(d)
				: 'mozDash' in this._context
					? (this._context.mozDash = d)
					: 'webkitLineDash' in this._context && (this._context.webkitLineDash = d);
		}
		getLineDash() {
			return this._context.getLineDash();
		}
		setTransform(d, s, m, w, A, M) {
			this._context.setTransform(d, s, m, w, A, M);
		}
		stroke(d) {
			d ? this._context.stroke(d) : this._context.stroke();
		}
		strokeText(d, s, m, w) {
			this._context.strokeText(d, s, m, w);
		}
		transform(d, s, m, w, A, M) {
			this._context.transform(d, s, m, w, A, M);
		}
		translate(d, s) {
			this._context.translate(d, s);
		}
		_enableTrace() {
			let d = this,
				s = _.length,
				m = this.setAttr,
				w,
				A;
			const M = function (T) {
				let P = d[T],
					x;
				d[T] = function () {
					return (
						(A = v(Array.prototype.slice.call(arguments, 0))),
						(x = P.apply(d, arguments)),
						d._trace({ method: T, args: A }),
						x
					);
				};
			};
			for (w = 0; w < s; w++) M(_[w]);
			d.setAttr = function () {
				m.apply(d, arguments);
				const T = arguments[0];
				let P = arguments[1];
				(T === 'shadowOffsetX' || T === 'shadowOffsetY' || T === 'shadowBlur') &&
					(P = P / this.canvas.getPixelRatio()),
					d._trace({ property: T, val: P });
			};
		}
		_applyGlobalCompositeOperation(d) {
			const s = d.attrs.globalCompositeOperation;
			!s || s === 'source-over' || this.setAttr('globalCompositeOperation', s);
		}
	};
	(Gt.Context = c),
		i.forEach(function (k) {
			Object.defineProperty(c.prototype, k, {
				get() {
					return this._context[k];
				},
				set(d) {
					this._context[k] = d;
				}
			});
		});
	class y extends c {
		constructor(d, { willReadFrequently: s = !1 } = {}) {
			super(d), (this._context = d._canvas.getContext('2d', { willReadFrequently: s }));
		}
		_fillColor(d) {
			const s = d.fill();
			this.setAttr('fillStyle', s), d._fillFunc(this);
		}
		_fillPattern(d) {
			this.setAttr('fillStyle', d._getFillPattern()), d._fillFunc(this);
		}
		_fillLinearGradient(d) {
			const s = d._getLinearGradient();
			s && (this.setAttr('fillStyle', s), d._fillFunc(this));
		}
		_fillRadialGradient(d) {
			const s = d._getRadialGradient();
			s && (this.setAttr('fillStyle', s), d._fillFunc(this));
		}
		_fill(d) {
			const s = d.fill(),
				m = d.getFillPriority();
			if (s && m === 'color') {
				this._fillColor(d);
				return;
			}
			const w = d.getFillPatternImage();
			if (w && m === 'pattern') {
				this._fillPattern(d);
				return;
			}
			const A = d.getFillLinearGradientColorStops();
			if (A && m === 'linear-gradient') {
				this._fillLinearGradient(d);
				return;
			}
			const M = d.getFillRadialGradientColorStops();
			if (M && m === 'radial-gradient') {
				this._fillRadialGradient(d);
				return;
			}
			s
				? this._fillColor(d)
				: w
					? this._fillPattern(d)
					: A
						? this._fillLinearGradient(d)
						: M && this._fillRadialGradient(d);
		}
		_strokeLinearGradient(d) {
			const s = d.getStrokeLinearGradientStartPoint(),
				m = d.getStrokeLinearGradientEndPoint(),
				w = d.getStrokeLinearGradientColorStops(),
				A = this.createLinearGradient(s.x, s.y, m.x, m.y);
			if (w) {
				for (let M = 0; M < w.length; M += 2) A.addColorStop(w[M], w[M + 1]);
				this.setAttr('strokeStyle', A);
			}
		}
		_stroke(d) {
			const s = d.dash(),
				m = d.getStrokeScaleEnabled();
			if (d.hasStroke()) {
				if (!m) {
					this.save();
					const A = this.getCanvas().getPixelRatio();
					this.setTransform(A, 0, 0, A, 0, 0);
				}
				this._applyLineCap(d),
					s &&
						d.dashEnabled() &&
						(this.setLineDash(s), this.setAttr('lineDashOffset', d.dashOffset())),
					this.setAttr('lineWidth', d.strokeWidth()),
					d.getShadowForStrokeEnabled() || this.setAttr('shadowColor', 'rgba(0,0,0,0)'),
					d.getStrokeLinearGradientColorStops()
						? this._strokeLinearGradient(d)
						: this.setAttr('strokeStyle', d.stroke()),
					d._strokeFunc(this),
					m || this.restore();
			}
		}
		_applyShadow(d) {
			var s, m, w;
			const A = (s = d.getShadowRGBA()) !== null && s !== void 0 ? s : 'black',
				M = (m = d.getShadowBlur()) !== null && m !== void 0 ? m : 5,
				T = (w = d.getShadowOffset()) !== null && w !== void 0 ? w : { x: 0, y: 0 },
				P = d.getAbsoluteScale(),
				x = this.canvas.getPixelRatio(),
				E = P.x * x,
				N = P.y * x;
			this.setAttr('shadowColor', A),
				this.setAttr('shadowBlur', M * Math.min(Math.abs(E), Math.abs(N))),
				this.setAttr('shadowOffsetX', T.x * E),
				this.setAttr('shadowOffsetY', T.y * N);
		}
	}
	Gt.SceneContext = y;
	class b extends c {
		constructor(d) {
			super(d), (this._context = d._canvas.getContext('2d', { willReadFrequently: !0 }));
		}
		_fill(d) {
			this.save(), this.setAttr('fillStyle', d.colorKey), d._fillFuncHit(this), this.restore();
		}
		strokeShape(d) {
			d.hasHitStroke() && this._stroke(d);
		}
		_stroke(d) {
			if (d.hasHitStroke()) {
				const s = d.getStrokeScaleEnabled();
				if (!s) {
					this.save();
					const A = this.getCanvas().getPixelRatio();
					this.setTransform(A, 0, 0, A, 0, 0);
				}
				this._applyLineCap(d);
				const m = d.hitStrokeWidth(),
					w = m === 'auto' ? d.strokeWidth() : m;
				this.setAttr('lineWidth', w),
					this.setAttr('strokeStyle', d.colorKey),
					d._strokeFuncHit(this),
					s || this.restore();
			}
		}
	}
	return (Gt.HitContext = b), Gt;
}
var ir;
function ai() {
	if (ir) return Mt;
	(ir = 1),
		Object.defineProperty(Mt, '__esModule', { value: !0 }),
		(Mt.HitCanvas = Mt.SceneCanvas = Mt.Canvas = void 0);
	const t = ot(),
		n = Cn(),
		v = $();
	let u;
	function p() {
		if (u) return u;
		const h = t.Util.createCanvasElement(),
			a = h.getContext('2d');
		return (
			(u = (function () {
				const f = v.Konva._global.devicePixelRatio || 1,
					_ =
						a.webkitBackingStorePixelRatio ||
						a.mozBackingStorePixelRatio ||
						a.msBackingStorePixelRatio ||
						a.oBackingStorePixelRatio ||
						a.backingStorePixelRatio ||
						1;
				return f / _;
			})()),
			t.Util.releaseCanvas(h),
			u
		);
	}
	let l = class {
		constructor(a) {
			(this.pixelRatio = 1), (this.width = 0), (this.height = 0), (this.isCache = !1);
			const _ = (a || {}).pixelRatio || v.Konva.pixelRatio || p();
			(this.pixelRatio = _),
				(this._canvas = t.Util.createCanvasElement()),
				(this._canvas.style.padding = '0'),
				(this._canvas.style.margin = '0'),
				(this._canvas.style.border = '0'),
				(this._canvas.style.background = 'transparent'),
				(this._canvas.style.position = 'absolute'),
				(this._canvas.style.top = '0'),
				(this._canvas.style.left = '0');
		}
		getContext() {
			return this.context;
		}
		getPixelRatio() {
			return this.pixelRatio;
		}
		setPixelRatio(a) {
			const f = this.pixelRatio;
			(this.pixelRatio = a), this.setSize(this.getWidth() / f, this.getHeight() / f);
		}
		setWidth(a) {
			(this.width = this._canvas.width = a * this.pixelRatio),
				(this._canvas.style.width = a + 'px');
			const f = this.pixelRatio;
			this.getContext()._context.scale(f, f);
		}
		setHeight(a) {
			(this.height = this._canvas.height = a * this.pixelRatio),
				(this._canvas.style.height = a + 'px');
			const f = this.pixelRatio;
			this.getContext()._context.scale(f, f);
		}
		getWidth() {
			return this.width;
		}
		getHeight() {
			return this.height;
		}
		setSize(a, f) {
			this.setWidth(a || 0), this.setHeight(f || 0);
		}
		toDataURL(a, f) {
			try {
				return this._canvas.toDataURL(a, f);
			} catch {
				try {
					return this._canvas.toDataURL();
				} catch (i) {
					return (
						t.Util.error(
							'Unable to get data URL. ' +
								i.message +
								' For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html.'
						),
						''
					);
				}
			}
		}
	};
	Mt.Canvas = l;
	class o extends l {
		constructor(a = { width: 0, height: 0, willReadFrequently: !1 }) {
			super(a),
				(this.context = new n.SceneContext(this, { willReadFrequently: a.willReadFrequently })),
				this.setSize(a.width, a.height);
		}
	}
	Mt.SceneCanvas = o;
	class r extends l {
		constructor(a = { width: 0, height: 0 }) {
			super(a),
				(this.hitCanvas = !0),
				(this.context = new n.HitContext(this)),
				this.setSize(a.width, a.height);
		}
	}
	return (Mt.HitCanvas = r), Mt;
}
var _i = {},
	rr;
function Gi() {
	return (
		rr ||
			((rr = 1),
			(function (t) {
				Object.defineProperty(t, '__esModule', { value: !0 }), (t.DD = void 0);
				const n = $(),
					v = ot();
				(t.DD = {
					get isDragging() {
						let u = !1;
						return (
							t.DD._dragElements.forEach((p) => {
								p.dragStatus === 'dragging' && (u = !0);
							}),
							u
						);
					},
					justDragged: !1,
					get node() {
						let u;
						return (
							t.DD._dragElements.forEach((p) => {
								u = p.node;
							}),
							u
						);
					},
					_dragElements: new Map(),
					_drag(u) {
						const p = [];
						t.DD._dragElements.forEach((l, o) => {
							const { node: r } = l,
								h = r.getStage();
							h.setPointersPositions(u),
								l.pointerId === void 0 && (l.pointerId = v.Util._getFirstPointerId(u));
							const a = h._changedPointerPositions.find((f) => f.id === l.pointerId);
							if (a) {
								if (l.dragStatus !== 'dragging') {
									const f = r.dragDistance();
									if (
										Math.max(
											Math.abs(a.x - l.startPointerPos.x),
											Math.abs(a.y - l.startPointerPos.y)
										) < f ||
										(r.startDrag({ evt: u }), !r.isDragging())
									)
										return;
								}
								r._setDragPosition(u, l), p.push(r);
							}
						}),
							p.forEach((l) => {
								l.fire('dragmove', { type: 'dragmove', target: l, evt: u }, !0);
							});
					},
					_endDragBefore(u) {
						const p = [];
						t.DD._dragElements.forEach((l) => {
							const { node: o } = l,
								r = o.getStage();
							if (
								(u && r.setPointersPositions(u),
								!r._changedPointerPositions.find((f) => f.id === l.pointerId))
							)
								return;
							(l.dragStatus === 'dragging' || l.dragStatus === 'stopped') &&
								((t.DD.justDragged = !0),
								(n.Konva._mouseListenClick = !1),
								(n.Konva._touchListenClick = !1),
								(n.Konva._pointerListenClick = !1),
								(l.dragStatus = 'stopped'));
							const a = l.node.getLayer() || (l.node instanceof n.Konva.Stage && l.node);
							a && p.indexOf(a) === -1 && p.push(a);
						}),
							p.forEach((l) => {
								l.draw();
							});
					},
					_endDragAfter(u) {
						t.DD._dragElements.forEach((p, l) => {
							p.dragStatus === 'stopped' &&
								p.node.fire('dragend', { type: 'dragend', target: p.node, evt: u }, !0),
								p.dragStatus !== 'dragging' && t.DD._dragElements.delete(l);
						});
					}
				}),
					n.Konva.isBrowser &&
						(window.addEventListener('mouseup', t.DD._endDragBefore, !0),
						window.addEventListener('touchend', t.DD._endDragBefore, !0),
						window.addEventListener('touchcancel', t.DD._endDragBefore, !0),
						window.addEventListener('mousemove', t.DD._drag),
						window.addEventListener('touchmove', t.DD._drag),
						window.addEventListener('mouseup', t.DD._endDragAfter, !1),
						window.addEventListener('touchend', t.DD._endDragAfter, !1),
						window.addEventListener('touchcancel', t.DD._endDragAfter, !1));
			})(_i)),
		_i
	);
}
var nr;
function ht() {
	if (nr) return re;
	(nr = 1), Object.defineProperty(re, '__esModule', { value: !0 }), (re.Node = void 0);
	const t = ot(),
		n = tt(),
		v = ai(),
		u = $(),
		p = Gi(),
		l = et(),
		o = 'absoluteOpacity',
		r = 'allEventListeners',
		h = 'absoluteTransform',
		a = 'absoluteScale',
		f = 'canvas',
		_ = 'Change',
		i = 'children',
		e = 'konva',
		c = 'listening',
		y = 'mouseenter',
		b = 'mouseleave',
		k = 'set',
		d = 'Shape',
		s = ' ',
		m = 'stage',
		w = 'transform',
		A = 'Stage',
		M = 'visible',
		T = [
			'xChange.konva',
			'yChange.konva',
			'scaleXChange.konva',
			'scaleYChange.konva',
			'skewXChange.konva',
			'skewYChange.konva',
			'rotationChange.konva',
			'offsetXChange.konva',
			'offsetYChange.konva',
			'transformsEnabledChange.konva'
		].join(s);
	let P = 1,
		x = class xi {
			constructor(g) {
				(this._id = P++),
					(this.eventListeners = {}),
					(this.attrs = {}),
					(this.index = 0),
					(this._allEventListeners = null),
					(this.parent = null),
					(this._cache = new Map()),
					(this._attachedDepsListeners = new Map()),
					(this._lastPos = null),
					(this._batchingTransformChange = !1),
					(this._needClearTransformCache = !1),
					(this._filterUpToDate = !1),
					(this._isUnderCache = !1),
					(this._dragEventId = null),
					(this._shouldFireChangeEvents = !1),
					this.setAttrs(g),
					(this._shouldFireChangeEvents = !0);
			}
			hasChildren() {
				return !1;
			}
			_clearCache(g) {
				(g === w || g === h) && this._cache.get(g)
					? (this._cache.get(g).dirty = !0)
					: g
						? this._cache.delete(g)
						: this._cache.clear();
			}
			_getCache(g, C) {
				let S = this._cache.get(g);
				return (
					(S === void 0 || ((g === w || g === h) && S.dirty === !0)) &&
						((S = C.call(this)), this._cache.set(g, S)),
					S
				);
			}
			_calculate(g, C, S) {
				if (!this._attachedDepsListeners.get(g)) {
					const R = C.map((F) => F + 'Change.konva').join(s);
					this.on(R, () => {
						this._clearCache(g);
					}),
						this._attachedDepsListeners.set(g, !0);
				}
				return this._getCache(g, S);
			}
			_getCanvasCache() {
				return this._cache.get(f);
			}
			_clearSelfAndDescendantCache(g) {
				this._clearCache(g), g === h && this.fire('absoluteTransformChange');
			}
			clearCache() {
				if (this._cache.has(f)) {
					const { scene: g, filter: C, hit: S } = this._cache.get(f);
					t.Util.releaseCanvas(g, C, S), this._cache.delete(f);
				}
				return this._clearSelfAndDescendantCache(), this._requestDraw(), this;
			}
			cache(g) {
				const C = g || {};
				let S = {};
				(C.x === void 0 || C.y === void 0 || C.width === void 0 || C.height === void 0) &&
					(S = this.getClientRect({ skipTransform: !0, relativeTo: this.getParent() || void 0 }));
				let R = Math.ceil(C.width || S.width),
					F = Math.ceil(C.height || S.height),
					O = C.pixelRatio,
					I = C.x === void 0 ? Math.floor(S.x) : C.x,
					L = C.y === void 0 ? Math.floor(S.y) : C.y,
					U = C.offset || 0,
					W = C.drawBorder || !1,
					B = C.hitCanvasPixelRatio || 1;
				if (!R || !F) {
					t.Util.error(
						'Can not cache the node. Width or height of the node equals 0. Caching is skipped.'
					);
					return;
				}
				const H = Math.abs(Math.round(S.x) - I) > 0.5 ? 1 : 0,
					z = Math.abs(Math.round(S.y) - L) > 0.5 ? 1 : 0;
				(R += U * 2 + H), (F += U * 2 + z), (I -= U), (L -= U);
				const j = new v.SceneCanvas({ pixelRatio: O, width: R, height: F }),
					G = new v.SceneCanvas({ pixelRatio: O, width: 0, height: 0, willReadFrequently: !0 }),
					D = new v.HitCanvas({ pixelRatio: B, width: R, height: F }),
					X = j.getContext(),
					q = D.getContext();
				return (
					(D.isCache = !0),
					(j.isCache = !0),
					this._cache.delete(f),
					(this._filterUpToDate = !1),
					C.imageSmoothingEnabled === !1 &&
						((j.getContext()._context.imageSmoothingEnabled = !1),
						(G.getContext()._context.imageSmoothingEnabled = !1)),
					X.save(),
					q.save(),
					X.translate(-I, -L),
					q.translate(-I, -L),
					(this._isUnderCache = !0),
					this._clearSelfAndDescendantCache(o),
					this._clearSelfAndDescendantCache(a),
					this.drawScene(j, this),
					this.drawHit(D, this),
					(this._isUnderCache = !1),
					X.restore(),
					q.restore(),
					W &&
						(X.save(),
						X.beginPath(),
						X.rect(0, 0, R, F),
						X.closePath(),
						X.setAttr('strokeStyle', 'red'),
						X.setAttr('lineWidth', 5),
						X.stroke(),
						X.restore()),
					this._cache.set(f, { scene: j, filter: G, hit: D, x: I, y: L }),
					this._requestDraw(),
					this
				);
			}
			isCached() {
				return this._cache.has(f);
			}
			getClientRect(g) {
				throw new Error('abstract "getClientRect" method call');
			}
			_transformedRect(g, C) {
				const S = [
					{ x: g.x, y: g.y },
					{ x: g.x + g.width, y: g.y },
					{ x: g.x + g.width, y: g.y + g.height },
					{ x: g.x, y: g.y + g.height }
				];
				let R = 1 / 0,
					F = 1 / 0,
					O = -1 / 0,
					I = -1 / 0;
				const L = this.getAbsoluteTransform(C);
				return (
					S.forEach(function (U) {
						const W = L.point(U);
						R === void 0 && ((R = O = W.x), (F = I = W.y)),
							(R = Math.min(R, W.x)),
							(F = Math.min(F, W.y)),
							(O = Math.max(O, W.x)),
							(I = Math.max(I, W.y));
					}),
					{ x: R, y: F, width: O - R, height: I - F }
				);
			}
			_drawCachedSceneCanvas(g) {
				g.save(), g._applyOpacity(this), g._applyGlobalCompositeOperation(this);
				const C = this._getCanvasCache();
				g.translate(C.x, C.y);
				const S = this._getCachedSceneCanvas(),
					R = S.pixelRatio;
				g.drawImage(S._canvas, 0, 0, S.width / R, S.height / R), g.restore();
			}
			_drawCachedHitCanvas(g) {
				const C = this._getCanvasCache(),
					S = C.hit;
				g.save(),
					g.translate(C.x, C.y),
					g.drawImage(S._canvas, 0, 0, S.width / S.pixelRatio, S.height / S.pixelRatio),
					g.restore();
			}
			_getCachedSceneCanvas() {
				let g = this.filters(),
					C = this._getCanvasCache(),
					S = C.scene,
					R = C.filter,
					F = R.getContext(),
					O,
					I,
					L,
					U;
				if (g) {
					if (!this._filterUpToDate) {
						const W = S.pixelRatio;
						R.setSize(S.width / S.pixelRatio, S.height / S.pixelRatio);
						try {
							for (
								O = g.length,
									F.clear(),
									F.drawImage(S._canvas, 0, 0, S.getWidth() / W, S.getHeight() / W),
									I = F.getImageData(0, 0, R.getWidth(), R.getHeight()),
									L = 0;
								L < O;
								L++
							) {
								if (((U = g[L]), typeof U != 'function')) {
									t.Util.error(
										'Filter should be type of function, but got ' +
											typeof U +
											' instead. Please check correct filters'
									);
									continue;
								}
								U.call(this, I), F.putImageData(I, 0, 0);
							}
						} catch (B) {
							t.Util.error(
								'Unable to apply filter. ' +
									B.message +
									' This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.'
							);
						}
						this._filterUpToDate = !0;
					}
					return R;
				}
				return S;
			}
			on(g, C) {
				if ((this._cache && this._cache.delete(r), arguments.length === 3))
					return this._delegate.apply(this, arguments);
				let S = g.split(s),
					R = S.length,
					F,
					O,
					I,
					L,
					U;
				for (F = 0; F < R; F++)
					(O = S[F]),
						(I = O.split('.')),
						(L = I[0]),
						(U = I[1] || ''),
						this.eventListeners[L] || (this.eventListeners[L] = []),
						this.eventListeners[L].push({ name: U, handler: C });
				return this;
			}
			off(g, C) {
				let S = (g || '').split(s),
					R = S.length,
					F,
					O,
					I,
					L,
					U,
					W;
				if ((this._cache && this._cache.delete(r), !g)) for (O in this.eventListeners) this._off(O);
				for (F = 0; F < R; F++)
					if (((I = S[F]), (L = I.split('.')), (U = L[0]), (W = L[1]), U))
						this.eventListeners[U] && this._off(U, W, C);
					else for (O in this.eventListeners) this._off(O, W, C);
				return this;
			}
			dispatchEvent(g) {
				const C = { target: this, type: g.type, evt: g };
				return this.fire(g.type, C), this;
			}
			addEventListener(g, C) {
				return (
					this.on(g, function (S) {
						C.call(this, S.evt);
					}),
					this
				);
			}
			removeEventListener(g) {
				return this.off(g), this;
			}
			_delegate(g, C, S) {
				const R = this;
				this.on(g, function (F) {
					const O = F.target.findAncestors(C, !0, R);
					for (let I = 0; I < O.length; I++)
						(F = t.Util.cloneObject(F)), (F.currentTarget = O[I]), S.call(O[I], F);
				});
			}
			remove() {
				return (
					this.isDragging() && this.stopDrag(),
					p.DD._dragElements.delete(this._id),
					this._remove(),
					this
				);
			}
			_clearCaches() {
				this._clearSelfAndDescendantCache(h),
					this._clearSelfAndDescendantCache(o),
					this._clearSelfAndDescendantCache(a),
					this._clearSelfAndDescendantCache(m),
					this._clearSelfAndDescendantCache(M),
					this._clearSelfAndDescendantCache(c);
			}
			_remove() {
				this._clearCaches();
				const g = this.getParent();
				g &&
					g.children &&
					(g.children.splice(this.index, 1), g._setChildrenIndices(), (this.parent = null));
			}
			destroy() {
				return this.remove(), this.clearCache(), this;
			}
			getAttr(g) {
				const C = 'get' + t.Util._capitalize(g);
				return t.Util._isFunction(this[C]) ? this[C]() : this.attrs[g];
			}
			getAncestors() {
				let g = this.getParent(),
					C = [];
				for (; g; ) C.push(g), (g = g.getParent());
				return C;
			}
			getAttrs() {
				return this.attrs || {};
			}
			setAttrs(g) {
				return (
					this._batchTransformChanges(() => {
						let C, S;
						if (!g) return this;
						for (C in g)
							C !== i &&
								((S = k + t.Util._capitalize(C)),
								t.Util._isFunction(this[S]) ? this[S](g[C]) : this._setAttr(C, g[C]));
					}),
					this
				);
			}
			isListening() {
				return this._getCache(c, this._isListening);
			}
			_isListening(g) {
				if (!this.listening()) return !1;
				const S = this.getParent();
				return S && S !== g && this !== g ? S._isListening(g) : !0;
			}
			isVisible() {
				return this._getCache(M, this._isVisible);
			}
			_isVisible(g) {
				if (!this.visible()) return !1;
				const S = this.getParent();
				return S && S !== g && this !== g ? S._isVisible(g) : !0;
			}
			shouldDrawHit(g, C = !1) {
				if (g) return this._isVisible(g) && this._isListening(g);
				const S = this.getLayer();
				let R = !1;
				p.DD._dragElements.forEach((O) => {
					O.dragStatus === 'dragging' &&
						(O.node.nodeType === 'Stage' || O.node.getLayer() === S) &&
						(R = !0);
				});
				const F = !C && !u.Konva.hitOnDragEnabled && (R || u.Konva.isTransforming());
				return this.isListening() && this.isVisible() && !F;
			}
			show() {
				return this.visible(!0), this;
			}
			hide() {
				return this.visible(!1), this;
			}
			getZIndex() {
				return this.index || 0;
			}
			getAbsoluteZIndex() {
				let g = this.getDepth(),
					C = this,
					S = 0,
					R,
					F,
					O,
					I;
				function L(W) {
					for (R = [], F = W.length, O = 0; O < F; O++)
						(I = W[O]),
							S++,
							I.nodeType !== d && (R = R.concat(I.getChildren().slice())),
							I._id === C._id && (O = F);
					R.length > 0 && R[0].getDepth() <= g && L(R);
				}
				const U = this.getStage();
				return C.nodeType !== A && U && L(U.getChildren()), S;
			}
			getDepth() {
				let g = 0,
					C = this.parent;
				for (; C; ) g++, (C = C.parent);
				return g;
			}
			_batchTransformChanges(g) {
				(this._batchingTransformChange = !0),
					g(),
					(this._batchingTransformChange = !1),
					this._needClearTransformCache &&
						(this._clearCache(w), this._clearSelfAndDescendantCache(h)),
					(this._needClearTransformCache = !1);
			}
			setPosition(g) {
				return (
					this._batchTransformChanges(() => {
						this.x(g.x), this.y(g.y);
					}),
					this
				);
			}
			getPosition() {
				return { x: this.x(), y: this.y() };
			}
			getRelativePointerPosition() {
				const g = this.getStage();
				if (!g) return null;
				const C = g.getPointerPosition();
				if (!C) return null;
				const S = this.getAbsoluteTransform().copy();
				return S.invert(), S.point(C);
			}
			getAbsolutePosition(g) {
				let C = !1,
					S = this.parent;
				for (; S; ) {
					if (S.isCached()) {
						C = !0;
						break;
					}
					S = S.parent;
				}
				C && !g && (g = !0);
				const R = this.getAbsoluteTransform(g).getMatrix(),
					F = new t.Transform(),
					O = this.offset();
				return (F.m = R.slice()), F.translate(O.x, O.y), F.getTranslation();
			}
			setAbsolutePosition(g) {
				const { x: C, y: S, ...R } = this._clearTransform();
				(this.attrs.x = C), (this.attrs.y = S), this._clearCache(w);
				const F = this._getAbsoluteTransform().copy();
				return (
					F.invert(),
					F.translate(g.x, g.y),
					(g = { x: this.attrs.x + F.getTranslation().x, y: this.attrs.y + F.getTranslation().y }),
					this._setTransform(R),
					this.setPosition({ x: g.x, y: g.y }),
					this._clearCache(w),
					this._clearSelfAndDescendantCache(h),
					this
				);
			}
			_setTransform(g) {
				let C;
				for (C in g) this.attrs[C] = g[C];
			}
			_clearTransform() {
				const g = {
					x: this.x(),
					y: this.y(),
					rotation: this.rotation(),
					scaleX: this.scaleX(),
					scaleY: this.scaleY(),
					offsetX: this.offsetX(),
					offsetY: this.offsetY(),
					skewX: this.skewX(),
					skewY: this.skewY()
				};
				return (
					(this.attrs.x = 0),
					(this.attrs.y = 0),
					(this.attrs.rotation = 0),
					(this.attrs.scaleX = 1),
					(this.attrs.scaleY = 1),
					(this.attrs.offsetX = 0),
					(this.attrs.offsetY = 0),
					(this.attrs.skewX = 0),
					(this.attrs.skewY = 0),
					g
				);
			}
			move(g) {
				let C = g.x,
					S = g.y,
					R = this.x(),
					F = this.y();
				return (
					C !== void 0 && (R += C), S !== void 0 && (F += S), this.setPosition({ x: R, y: F }), this
				);
			}
			_eachAncestorReverse(g, C) {
				let S = [],
					R = this.getParent(),
					F,
					O;
				if (!(C && C._id === this._id)) {
					for (S.unshift(this); R && (!C || R._id !== C._id); ) S.unshift(R), (R = R.parent);
					for (F = S.length, O = 0; O < F; O++) g(S[O]);
				}
			}
			rotate(g) {
				return this.rotation(this.rotation() + g), this;
			}
			moveToTop() {
				if (!this.parent)
					return t.Util.warn('Node has no parent. moveToTop function is ignored.'), !1;
				const g = this.index,
					C = this.parent.getChildren().length;
				return g < C - 1
					? (this.parent.children.splice(g, 1),
						this.parent.children.push(this),
						this.parent._setChildrenIndices(),
						!0)
					: !1;
			}
			moveUp() {
				if (!this.parent) return t.Util.warn('Node has no parent. moveUp function is ignored.'), !1;
				const g = this.index,
					C = this.parent.getChildren().length;
				return g < C - 1
					? (this.parent.children.splice(g, 1),
						this.parent.children.splice(g + 1, 0, this),
						this.parent._setChildrenIndices(),
						!0)
					: !1;
			}
			moveDown() {
				if (!this.parent)
					return t.Util.warn('Node has no parent. moveDown function is ignored.'), !1;
				const g = this.index;
				return g > 0
					? (this.parent.children.splice(g, 1),
						this.parent.children.splice(g - 1, 0, this),
						this.parent._setChildrenIndices(),
						!0)
					: !1;
			}
			moveToBottom() {
				if (!this.parent)
					return t.Util.warn('Node has no parent. moveToBottom function is ignored.'), !1;
				const g = this.index;
				return g > 0
					? (this.parent.children.splice(g, 1),
						this.parent.children.unshift(this),
						this.parent._setChildrenIndices(),
						!0)
					: !1;
			}
			setZIndex(g) {
				if (!this.parent)
					return t.Util.warn('Node has no parent. zIndex parameter is ignored.'), this;
				(g < 0 || g >= this.parent.children.length) &&
					t.Util.warn(
						'Unexpected value ' +
							g +
							' for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to ' +
							(this.parent.children.length - 1) +
							'.'
					);
				const C = this.index;
				return (
					this.parent.children.splice(C, 1),
					this.parent.children.splice(g, 0, this),
					this.parent._setChildrenIndices(),
					this
				);
			}
			getAbsoluteOpacity() {
				return this._getCache(o, this._getAbsoluteOpacity);
			}
			_getAbsoluteOpacity() {
				let g = this.opacity();
				const C = this.getParent();
				return C && !C._isUnderCache && (g *= C.getAbsoluteOpacity()), g;
			}
			moveTo(g) {
				return this.getParent() !== g && (this._remove(), g.add(this)), this;
			}
			toObject() {
				let g = this.getAttrs(),
					C,
					S,
					R,
					F,
					O;
				const I = { attrs: {}, className: this.getClassName() };
				for (C in g)
					(S = g[C]),
						(O = t.Util.isObject(S) && !t.Util._isPlainObject(S) && !t.Util._isArray(S)),
						!O &&
							((R = typeof this[C] == 'function' && this[C]),
							delete g[C],
							(F = R ? R.call(this) : null),
							(g[C] = S),
							F !== S && (I.attrs[C] = S));
				return t.Util._prepareToStringify(I);
			}
			toJSON() {
				return JSON.stringify(this.toObject());
			}
			getParent() {
				return this.parent;
			}
			findAncestors(g, C, S) {
				const R = [];
				C && this._isMatch(g) && R.push(this);
				let F = this.parent;
				for (; F; ) {
					if (F === S) return R;
					F._isMatch(g) && R.push(F), (F = F.parent);
				}
				return R;
			}
			isAncestorOf(g) {
				return !1;
			}
			findAncestor(g, C, S) {
				return this.findAncestors(g, C, S)[0];
			}
			_isMatch(g) {
				if (!g) return !1;
				if (typeof g == 'function') return g(this);
				let C = g.replace(/ /g, '').split(','),
					S = C.length,
					R,
					F;
				for (R = 0; R < S; R++)
					if (
						((F = C[R]),
						t.Util.isValidSelector(F) ||
							(t.Util.warn(
								'Selector "' +
									F +
									'" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'
							),
							t.Util.warn(
								'If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'
							),
							t.Util.warn('Konva is awesome, right?')),
						F.charAt(0) === '#')
					) {
						if (this.id() === F.slice(1)) return !0;
					} else if (F.charAt(0) === '.') {
						if (this.hasName(F.slice(1))) return !0;
					} else if (this.className === F || this.nodeType === F) return !0;
				return !1;
			}
			getLayer() {
				const g = this.getParent();
				return g ? g.getLayer() : null;
			}
			getStage() {
				return this._getCache(m, this._getStage);
			}
			_getStage() {
				const g = this.getParent();
				return g ? g.getStage() : null;
			}
			fire(g, C = {}, S) {
				return (
					(C.target = C.target || this), S ? this._fireAndBubble(g, C) : this._fire(g, C), this
				);
			}
			getAbsoluteTransform(g) {
				return g ? this._getAbsoluteTransform(g) : this._getCache(h, this._getAbsoluteTransform);
			}
			_getAbsoluteTransform(g) {
				let C;
				if (g)
					return (
						(C = new t.Transform()),
						this._eachAncestorReverse(function (S) {
							const R = S.transformsEnabled();
							R === 'all'
								? C.multiply(S.getTransform())
								: R === 'position' && C.translate(S.x() - S.offsetX(), S.y() - S.offsetY());
						}, g),
						C
					);
				{
					(C = this._cache.get(h) || new t.Transform()),
						this.parent ? this.parent.getAbsoluteTransform().copyInto(C) : C.reset();
					const S = this.transformsEnabled();
					if (S === 'all') C.multiply(this.getTransform());
					else if (S === 'position') {
						const R = this.attrs.x || 0,
							F = this.attrs.y || 0,
							O = this.attrs.offsetX || 0,
							I = this.attrs.offsetY || 0;
						C.translate(R - O, F - I);
					}
					return (C.dirty = !1), C;
				}
			}
			getAbsoluteScale(g) {
				let C = this;
				for (; C; ) C._isUnderCache && (g = C), (C = C.getParent());
				const R = this.getAbsoluteTransform(g).decompose();
				return { x: R.scaleX, y: R.scaleY };
			}
			getAbsoluteRotation() {
				return this.getAbsoluteTransform().decompose().rotation;
			}
			getTransform() {
				return this._getCache(w, this._getTransform);
			}
			_getTransform() {
				var g, C;
				const S = this._cache.get(w) || new t.Transform();
				S.reset();
				const R = this.x(),
					F = this.y(),
					O = u.Konva.getAngle(this.rotation()),
					I = (g = this.attrs.scaleX) !== null && g !== void 0 ? g : 1,
					L = (C = this.attrs.scaleY) !== null && C !== void 0 ? C : 1,
					U = this.attrs.skewX || 0,
					W = this.attrs.skewY || 0,
					B = this.attrs.offsetX || 0,
					H = this.attrs.offsetY || 0;
				return (
					(R !== 0 || F !== 0) && S.translate(R, F),
					O !== 0 && S.rotate(O),
					(U !== 0 || W !== 0) && S.skew(U, W),
					(I !== 1 || L !== 1) && S.scale(I, L),
					(B !== 0 || H !== 0) && S.translate(-1 * B, -1 * H),
					(S.dirty = !1),
					S
				);
			}
			clone(g) {
				let C = t.Util.cloneObject(this.attrs),
					S,
					R,
					F,
					O,
					I;
				for (S in g) C[S] = g[S];
				const L = new this.constructor(C);
				for (S in this.eventListeners)
					for (R = this.eventListeners[S], F = R.length, O = 0; O < F; O++)
						(I = R[O]),
							I.name.indexOf(e) < 0 &&
								(L.eventListeners[S] || (L.eventListeners[S] = []), L.eventListeners[S].push(I));
				return L;
			}
			_toKonvaCanvas(g) {
				g = g || {};
				const C = this.getClientRect(),
					S = this.getStage(),
					R = g.x !== void 0 ? g.x : Math.floor(C.x),
					F = g.y !== void 0 ? g.y : Math.floor(C.y),
					O = g.pixelRatio || 1,
					I = new v.SceneCanvas({
						width: g.width || Math.ceil(C.width) || (S ? S.width() : 0),
						height: g.height || Math.ceil(C.height) || (S ? S.height() : 0),
						pixelRatio: O
					}),
					L = I.getContext(),
					U = new v.SceneCanvas({
						width: I.width / I.pixelRatio + Math.abs(R),
						height: I.height / I.pixelRatio + Math.abs(F),
						pixelRatio: I.pixelRatio
					});
				return (
					g.imageSmoothingEnabled === !1 && (L._context.imageSmoothingEnabled = !1),
					L.save(),
					(R || F) && L.translate(-1 * R, -1 * F),
					this.drawScene(I, void 0, U),
					L.restore(),
					I
				);
			}
			toCanvas(g) {
				return this._toKonvaCanvas(g)._canvas;
			}
			toDataURL(g) {
				g = g || {};
				const C = g.mimeType || null,
					S = g.quality || null,
					R = this._toKonvaCanvas(g).toDataURL(C, S);
				return g.callback && g.callback(R), R;
			}
			toImage(g) {
				return new Promise((C, S) => {
					try {
						const R = g == null ? void 0 : g.callback;
						R && delete g.callback,
							t.Util._urlToImage(this.toDataURL(g), function (F) {
								C(F), R == null || R(F);
							});
					} catch (R) {
						S(R);
					}
				});
			}
			toBlob(g) {
				return new Promise((C, S) => {
					try {
						const R = g == null ? void 0 : g.callback;
						R && delete g.callback,
							this.toCanvas(g).toBlob(
								(F) => {
									C(F), R == null || R(F);
								},
								g == null ? void 0 : g.mimeType,
								g == null ? void 0 : g.quality
							);
					} catch (R) {
						S(R);
					}
				});
			}
			setSize(g) {
				return this.width(g.width), this.height(g.height), this;
			}
			getSize() {
				return { width: this.width(), height: this.height() };
			}
			getClassName() {
				return this.className || this.nodeType;
			}
			getType() {
				return this.nodeType;
			}
			getDragDistance() {
				return this.attrs.dragDistance !== void 0
					? this.attrs.dragDistance
					: this.parent
						? this.parent.getDragDistance()
						: u.Konva.dragDistance;
			}
			_off(g, C, S) {
				let R = this.eventListeners[g],
					F,
					O,
					I;
				for (F = 0; F < R.length; F++)
					if (
						((O = R[F].name),
						(I = R[F].handler),
						(O !== 'konva' || C === 'konva') && (!C || O === C) && (!S || S === I))
					) {
						if ((R.splice(F, 1), R.length === 0)) {
							delete this.eventListeners[g];
							break;
						}
						F--;
					}
			}
			_fireChangeEvent(g, C, S) {
				this._fire(g + _, { oldVal: C, newVal: S });
			}
			addName(g) {
				if (!this.hasName(g)) {
					const C = this.name(),
						S = C ? C + ' ' + g : g;
					this.name(S);
				}
				return this;
			}
			hasName(g) {
				if (!g) return !1;
				const C = this.name();
				return C ? (C || '').split(/\s/g).indexOf(g) !== -1 : !1;
			}
			removeName(g) {
				const C = (this.name() || '').split(/\s/g),
					S = C.indexOf(g);
				return S !== -1 && (C.splice(S, 1), this.name(C.join(' '))), this;
			}
			setAttr(g, C) {
				const S = this[k + t.Util._capitalize(g)];
				return t.Util._isFunction(S) ? S.call(this, C) : this._setAttr(g, C), this;
			}
			_requestDraw() {
				if (u.Konva.autoDrawEnabled) {
					const g = this.getLayer() || this.getStage();
					g == null || g.batchDraw();
				}
			}
			_setAttr(g, C) {
				const S = this.attrs[g];
				(S === C && !t.Util.isObject(C)) ||
					(C == null ? delete this.attrs[g] : (this.attrs[g] = C),
					this._shouldFireChangeEvents && this._fireChangeEvent(g, S, C),
					this._requestDraw());
			}
			_setComponentAttr(g, C, S) {
				let R;
				S !== void 0 &&
					((R = this.attrs[g]),
					R || (this.attrs[g] = this.getAttr(g)),
					(this.attrs[g][C] = S),
					this._fireChangeEvent(g, R, S));
			}
			_fireAndBubble(g, C, S) {
				if (
					(C && this.nodeType === d && (C.target = this),
					!(
						(g === y || g === b) &&
						((S && (this === S || (this.isAncestorOf && this.isAncestorOf(S)))) ||
							(this.nodeType === 'Stage' && !S))
					))
				) {
					this._fire(g, C);
					const F =
						(g === y || g === b) &&
						S &&
						S.isAncestorOf &&
						S.isAncestorOf(this) &&
						!S.isAncestorOf(this.parent);
					((C && !C.cancelBubble) || !C) &&
						this.parent &&
						this.parent.isListening() &&
						!F &&
						(S && S.parent
							? this._fireAndBubble.call(this.parent, g, C, S)
							: this._fireAndBubble.call(this.parent, g, C));
				}
			}
			_getProtoListeners(g) {
				var C, S, R;
				const F = (C = this._cache.get(r)) !== null && C !== void 0 ? C : {};
				let O = F == null ? void 0 : F[g];
				if (O === void 0) {
					O = [];
					let I = Object.getPrototypeOf(this);
					for (; I; ) {
						const L =
							(R = (S = I.eventListeners) === null || S === void 0 ? void 0 : S[g]) !== null &&
							R !== void 0
								? R
								: [];
						O.push(...L), (I = Object.getPrototypeOf(I));
					}
					(F[g] = O), this._cache.set(r, F);
				}
				return O;
			}
			_fire(g, C) {
				(C = C || {}), (C.currentTarget = this), (C.type = g);
				const S = this._getProtoListeners(g);
				if (S) for (var R = 0; R < S.length; R++) S[R].handler.call(this, C);
				const F = this.eventListeners[g];
				if (F) for (var R = 0; R < F.length; R++) F[R].handler.call(this, C);
			}
			draw() {
				return this.drawScene(), this.drawHit(), this;
			}
			_createDragElement(g) {
				const C = g ? g.pointerId : void 0,
					S = this.getStage(),
					R = this.getAbsolutePosition();
				if (!S) return;
				const F = S._getPointerById(C) || S._changedPointerPositions[0] || R;
				p.DD._dragElements.set(this._id, {
					node: this,
					startPointerPos: F,
					offset: { x: F.x - R.x, y: F.y - R.y },
					dragStatus: 'ready',
					pointerId: C
				});
			}
			startDrag(g, C = !0) {
				p.DD._dragElements.has(this._id) || this._createDragElement(g);
				const S = p.DD._dragElements.get(this._id);
				(S.dragStatus = 'dragging'),
					this.fire('dragstart', { type: 'dragstart', target: this, evt: g && g.evt }, C);
			}
			_setDragPosition(g, C) {
				const S = this.getStage()._getPointerById(C.pointerId);
				if (!S) return;
				let R = { x: S.x - C.offset.x, y: S.y - C.offset.y };
				const F = this.dragBoundFunc();
				if (F !== void 0) {
					const O = F.call(this, R, g);
					O
						? (R = O)
						: t.Util.warn(
								'dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.'
							);
				}
				(!this._lastPos || this._lastPos.x !== R.x || this._lastPos.y !== R.y) &&
					(this.setAbsolutePosition(R), this._requestDraw()),
					(this._lastPos = R);
			}
			stopDrag(g) {
				const C = p.DD._dragElements.get(this._id);
				C && (C.dragStatus = 'stopped'), p.DD._endDragBefore(g), p.DD._endDragAfter(g);
			}
			setDraggable(g) {
				this._setAttr('draggable', g), this._dragChange();
			}
			isDragging() {
				const g = p.DD._dragElements.get(this._id);
				return g ? g.dragStatus === 'dragging' : !1;
			}
			_listenDrag() {
				this._dragCleanup(),
					this.on('mousedown.konva touchstart.konva', function (g) {
						if (
							!(!(g.evt.button !== void 0) || u.Konva.dragButtons.indexOf(g.evt.button) >= 0) ||
							this.isDragging()
						)
							return;
						let R = !1;
						p.DD._dragElements.forEach((F) => {
							this.isAncestorOf(F.node) && (R = !0);
						}),
							R || this._createDragElement(g);
					});
			}
			_dragChange() {
				if (this.attrs.draggable) this._listenDrag();
				else {
					if ((this._dragCleanup(), !this.getStage())) return;
					const C = p.DD._dragElements.get(this._id),
						S = C && C.dragStatus === 'dragging',
						R = C && C.dragStatus === 'ready';
					S ? this.stopDrag() : R && p.DD._dragElements.delete(this._id);
				}
			}
			_dragCleanup() {
				this.off('mousedown.konva'), this.off('touchstart.konva');
			}
			isClientRectOnScreen(g = { x: 0, y: 0 }) {
				const C = this.getStage();
				if (!C) return !1;
				const S = { x: -g.x, y: -g.y, width: C.width() + 2 * g.x, height: C.height() + 2 * g.y };
				return t.Util.haveIntersection(S, this.getClientRect());
			}
			static create(g, C) {
				return t.Util._isString(g) && (g = JSON.parse(g)), this._createNode(g, C);
			}
			static _createNode(g, C) {
				let S = xi.prototype.getClassName.call(g),
					R = g.children,
					F,
					O,
					I;
				C && (g.attrs.container = C),
					u.Konva[S] ||
						(t.Util.warn('Can not find a node with class name "' + S + '". Fallback to "Shape".'),
						(S = 'Shape'));
				const L = u.Konva[S];
				if (((F = new L(g.attrs)), R))
					for (O = R.length, I = 0; I < O; I++) F.add(xi._createNode(R[I]));
				return F;
			}
		};
	(re.Node = x),
		(x.prototype.nodeType = 'Node'),
		(x.prototype._attrsAffectingSize = []),
		(x.prototype.eventListeners = {}),
		x.prototype.on.call(x.prototype, T, function () {
			if (this._batchingTransformChange) {
				this._needClearTransformCache = !0;
				return;
			}
			this._clearCache(w), this._clearSelfAndDescendantCache(h);
		}),
		x.prototype.on.call(x.prototype, 'visibleChange.konva', function () {
			this._clearSelfAndDescendantCache(M);
		}),
		x.prototype.on.call(x.prototype, 'listeningChange.konva', function () {
			this._clearSelfAndDescendantCache(c);
		}),
		x.prototype.on.call(x.prototype, 'opacityChange.konva', function () {
			this._clearSelfAndDescendantCache(o);
		});
	const E = n.Factory.addGetterSetter;
	return (
		E(x, 'zIndex'),
		E(x, 'absolutePosition'),
		E(x, 'position'),
		E(x, 'x', 0, (0, l.getNumberValidator)()),
		E(x, 'y', 0, (0, l.getNumberValidator)()),
		E(x, 'globalCompositeOperation', 'source-over', (0, l.getStringValidator)()),
		E(x, 'opacity', 1, (0, l.getNumberValidator)()),
		E(x, 'name', '', (0, l.getStringValidator)()),
		E(x, 'id', '', (0, l.getStringValidator)()),
		E(x, 'rotation', 0, (0, l.getNumberValidator)()),
		n.Factory.addComponentsGetterSetter(x, 'scale', ['x', 'y']),
		E(x, 'scaleX', 1, (0, l.getNumberValidator)()),
		E(x, 'scaleY', 1, (0, l.getNumberValidator)()),
		n.Factory.addComponentsGetterSetter(x, 'skew', ['x', 'y']),
		E(x, 'skewX', 0, (0, l.getNumberValidator)()),
		E(x, 'skewY', 0, (0, l.getNumberValidator)()),
		n.Factory.addComponentsGetterSetter(x, 'offset', ['x', 'y']),
		E(x, 'offsetX', 0, (0, l.getNumberValidator)()),
		E(x, 'offsetY', 0, (0, l.getNumberValidator)()),
		E(x, 'dragDistance', void 0, (0, l.getNumberValidator)()),
		E(x, 'width', 0, (0, l.getNumberValidator)()),
		E(x, 'height', 0, (0, l.getNumberValidator)()),
		E(x, 'listening', !0, (0, l.getBooleanValidator)()),
		E(x, 'preventDefault', !0, (0, l.getBooleanValidator)()),
		E(x, 'filters', void 0, function (N) {
			return (this._filterUpToDate = !1), N;
		}),
		E(x, 'visible', !0, (0, l.getBooleanValidator)()),
		E(x, 'transformsEnabled', 'all', (0, l.getStringValidator)()),
		E(x, 'size'),
		E(x, 'dragBoundFunc'),
		E(x, 'draggable', !1, (0, l.getBooleanValidator)()),
		n.Factory.backCompat(x, {
			rotateDeg: 'rotate',
			setRotationDeg: 'setRotation',
			getRotationDeg: 'getRotation'
		}),
		re
	);
}
var Vt = {},
	ar;
function xn() {
	if (ar) return Vt;
	(ar = 1),
		Object.defineProperty(Vt, '__esModule', { value: !0 }),
		(Vt.getCapturedShape = u),
		(Vt.createEvent = p),
		(Vt.hasPointerCapture = l),
		(Vt.setPointerCapture = o),
		(Vt.releaseCapture = r);
	const t = $(),
		n = new Map(),
		v = t.Konva._global.PointerEvent !== void 0;
	function u(h) {
		return n.get(h);
	}
	function p(h) {
		return { evt: h, pointerId: h.pointerId };
	}
	function l(h, a) {
		return n.get(h) === a;
	}
	function o(h, a) {
		r(h),
			a.getStage() &&
				(n.set(h, a), v && a._fire('gotpointercapture', p(new PointerEvent('gotpointercapture'))));
	}
	function r(h, a) {
		const f = n.get(h);
		if (!f) return;
		const _ = f.getStage();
		_ && _.content,
			n.delete(h),
			v && f._fire('lostpointercapture', p(new PointerEvent('lostpointercapture')));
	}
	return Vt;
}
var sr;
function ct() {
	return (
		sr ||
			((sr = 1),
			(function (t) {
				Object.defineProperty(t, '__esModule', { value: !0 }), (t.Shape = t.shapes = void 0);
				const n = $(),
					v = ot(),
					u = tt(),
					p = ht(),
					l = et(),
					o = $(),
					r = xn(),
					h = 'hasShadow',
					a = 'shadowRGBA',
					f = 'patternImage',
					_ = 'linearGradient',
					i = 'radialGradient';
				let e;
				function c() {
					return e || ((e = v.Util.createCanvasElement().getContext('2d')), e);
				}
				t.shapes = {};
				function y(P) {
					const x = this.attrs.fillRule;
					x ? P.fill(x) : P.fill();
				}
				function b(P) {
					P.stroke();
				}
				function k(P) {
					const x = this.attrs.fillRule;
					x ? P.fill(x) : P.fill();
				}
				function d(P) {
					P.stroke();
				}
				function s() {
					this._clearCache(h);
				}
				function m() {
					this._clearCache(a);
				}
				function w() {
					this._clearCache(f);
				}
				function A() {
					this._clearCache(_);
				}
				function M() {
					this._clearCache(i);
				}
				class T extends p.Node {
					constructor(x) {
						super(x);
						let E;
						for (; (E = v.Util.getRandomColor()), !(E && !(E in t.shapes)); );
						(this.colorKey = E), (t.shapes[E] = this);
					}
					getContext() {
						return (
							v.Util.warn('shape.getContext() method is deprecated. Please do not use it.'),
							this.getLayer().getContext()
						);
					}
					getCanvas() {
						return (
							v.Util.warn('shape.getCanvas() method is deprecated. Please do not use it.'),
							this.getLayer().getCanvas()
						);
					}
					getSceneFunc() {
						return this.attrs.sceneFunc || this._sceneFunc;
					}
					getHitFunc() {
						return this.attrs.hitFunc || this._hitFunc;
					}
					hasShadow() {
						return this._getCache(h, this._hasShadow);
					}
					_hasShadow() {
						return (
							this.shadowEnabled() &&
							this.shadowOpacity() !== 0 &&
							!!(
								this.shadowColor() ||
								this.shadowBlur() ||
								this.shadowOffsetX() ||
								this.shadowOffsetY()
							)
						);
					}
					_getFillPattern() {
						return this._getCache(f, this.__getFillPattern);
					}
					__getFillPattern() {
						if (this.fillPatternImage()) {
							const E = c().createPattern(
								this.fillPatternImage(),
								this.fillPatternRepeat() || 'repeat'
							);
							if (E && E.setTransform) {
								const N = new v.Transform();
								N.translate(this.fillPatternX(), this.fillPatternY()),
									N.rotate(n.Konva.getAngle(this.fillPatternRotation())),
									N.scale(this.fillPatternScaleX(), this.fillPatternScaleY()),
									N.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
								const g = N.getMatrix(),
									C =
										typeof DOMMatrix > 'u'
											? { a: g[0], b: g[1], c: g[2], d: g[3], e: g[4], f: g[5] }
											: new DOMMatrix(g);
								E.setTransform(C);
							}
							return E;
						}
					}
					_getLinearGradient() {
						return this._getCache(_, this.__getLinearGradient);
					}
					__getLinearGradient() {
						const x = this.fillLinearGradientColorStops();
						if (x) {
							const E = c(),
								N = this.fillLinearGradientStartPoint(),
								g = this.fillLinearGradientEndPoint(),
								C = E.createLinearGradient(N.x, N.y, g.x, g.y);
							for (let S = 0; S < x.length; S += 2) C.addColorStop(x[S], x[S + 1]);
							return C;
						}
					}
					_getRadialGradient() {
						return this._getCache(i, this.__getRadialGradient);
					}
					__getRadialGradient() {
						const x = this.fillRadialGradientColorStops();
						if (x) {
							const E = c(),
								N = this.fillRadialGradientStartPoint(),
								g = this.fillRadialGradientEndPoint(),
								C = E.createRadialGradient(
									N.x,
									N.y,
									this.fillRadialGradientStartRadius(),
									g.x,
									g.y,
									this.fillRadialGradientEndRadius()
								);
							for (let S = 0; S < x.length; S += 2) C.addColorStop(x[S], x[S + 1]);
							return C;
						}
					}
					getShadowRGBA() {
						return this._getCache(a, this._getShadowRGBA);
					}
					_getShadowRGBA() {
						if (!this.hasShadow()) return;
						const x = v.Util.colorToRGBA(this.shadowColor());
						if (x)
							return (
								'rgba(' +
								x.r +
								',' +
								x.g +
								',' +
								x.b +
								',' +
								x.a * (this.shadowOpacity() || 1) +
								')'
							);
					}
					hasFill() {
						return this._calculate(
							'hasFill',
							[
								'fillEnabled',
								'fill',
								'fillPatternImage',
								'fillLinearGradientColorStops',
								'fillRadialGradientColorStops'
							],
							() =>
								this.fillEnabled() &&
								!!(
									this.fill() ||
									this.fillPatternImage() ||
									this.fillLinearGradientColorStops() ||
									this.fillRadialGradientColorStops()
								)
						);
					}
					hasStroke() {
						return this._calculate(
							'hasStroke',
							['strokeEnabled', 'strokeWidth', 'stroke', 'strokeLinearGradientColorStops'],
							() =>
								this.strokeEnabled() &&
								this.strokeWidth() &&
								!!(this.stroke() || this.strokeLinearGradientColorStops())
						);
					}
					hasHitStroke() {
						const x = this.hitStrokeWidth();
						return x === 'auto' ? this.hasStroke() : this.strokeEnabled() && !!x;
					}
					intersects(x) {
						const E = this.getStage();
						if (!E) return !1;
						const N = E.bufferHitCanvas;
						return (
							N.getContext().clear(),
							this.drawHit(N, void 0, !0),
							N.context.getImageData(Math.round(x.x), Math.round(x.y), 1, 1).data[3] > 0
						);
					}
					destroy() {
						return (
							p.Node.prototype.destroy.call(this),
							delete t.shapes[this.colorKey],
							delete this.colorKey,
							this
						);
					}
					_useBufferCanvas(x) {
						var E;
						if (!((E = this.attrs.perfectDrawEnabled) !== null && E !== void 0 ? E : !0)) return !1;
						const g = x || this.hasFill(),
							C = this.hasStroke(),
							S = this.getAbsoluteOpacity() !== 1;
						if (g && C && S) return !0;
						const R = this.hasShadow(),
							F = this.shadowForStrokeEnabled();
						return !!(g && C && R && F);
					}
					setStrokeHitEnabled(x) {
						v.Util.warn(
							'strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead.'
						),
							x ? this.hitStrokeWidth('auto') : this.hitStrokeWidth(0);
					}
					getStrokeHitEnabled() {
						return this.hitStrokeWidth() !== 0;
					}
					getSelfRect() {
						const x = this.size();
						return {
							x: this._centroid ? -x.width / 2 : 0,
							y: this._centroid ? -x.height / 2 : 0,
							width: x.width,
							height: x.height
						};
					}
					getClientRect(x = {}) {
						let E = !1,
							N = this.getParent();
						for (; N; ) {
							if (N.isCached()) {
								E = !0;
								break;
							}
							N = N.getParent();
						}
						const g = x.skipTransform,
							C = x.relativeTo || (E && this.getStage()) || void 0,
							S = this.getSelfRect(),
							F = (!x.skipStroke && this.hasStroke() && this.strokeWidth()) || 0,
							O = S.width + F,
							I = S.height + F,
							L = !x.skipShadow && this.hasShadow(),
							U = L ? this.shadowOffsetX() : 0,
							W = L ? this.shadowOffsetY() : 0,
							B = O + Math.abs(U),
							H = I + Math.abs(W),
							z = (L && this.shadowBlur()) || 0,
							j = B + z * 2,
							G = H + z * 2,
							D = {
								width: j,
								height: G,
								x: -(F / 2 + z) + Math.min(U, 0) + S.x,
								y: -(F / 2 + z) + Math.min(W, 0) + S.y
							};
						return g ? D : this._transformedRect(D, C);
					}
					drawScene(x, E, N) {
						const g = this.getLayer();
						let C = x || g.getCanvas(),
							S = C.getContext(),
							R = this._getCanvasCache(),
							F = this.getSceneFunc(),
							O = this.hasShadow(),
							I,
							L;
						const U = C.isCache,
							W = E === this;
						if (!this.isVisible() && !W) return this;
						if (R) {
							S.save();
							const H = this.getAbsoluteTransform(E).getMatrix();
							return (
								S.transform(H[0], H[1], H[2], H[3], H[4], H[5]),
								this._drawCachedSceneCanvas(S),
								S.restore(),
								this
							);
						}
						if (!F) return this;
						if ((S.save(), this._useBufferCanvas() && !U)) {
							I = this.getStage();
							const H = N || I.bufferCanvas;
							(L = H.getContext()), L.clear(), L.save(), L._applyLineJoin(this);
							var B = this.getAbsoluteTransform(E).getMatrix();
							L.transform(B[0], B[1], B[2], B[3], B[4], B[5]), F.call(this, L, this), L.restore();
							const z = H.pixelRatio;
							O && S._applyShadow(this),
								S._applyOpacity(this),
								S._applyGlobalCompositeOperation(this),
								S.drawImage(H._canvas, 0, 0, H.width / z, H.height / z);
						} else {
							if ((S._applyLineJoin(this), !W)) {
								var B = this.getAbsoluteTransform(E).getMatrix();
								S.transform(B[0], B[1], B[2], B[3], B[4], B[5]),
									S._applyOpacity(this),
									S._applyGlobalCompositeOperation(this);
							}
							O && S._applyShadow(this), F.call(this, S, this);
						}
						return S.restore(), this;
					}
					drawHit(x, E, N = !1) {
						if (!this.shouldDrawHit(E, N)) return this;
						const g = this.getLayer(),
							C = x || g.hitCanvas,
							S = C && C.getContext(),
							R = this.hitFunc() || this.sceneFunc(),
							F = this._getCanvasCache(),
							O = F && F.hit;
						if (
							(this.colorKey ||
								v.Util.warn(
									'Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()'
								),
							O)
						) {
							S.save();
							const L = this.getAbsoluteTransform(E).getMatrix();
							return (
								S.transform(L[0], L[1], L[2], L[3], L[4], L[5]),
								this._drawCachedHitCanvas(S),
								S.restore(),
								this
							);
						}
						if (!R) return this;
						if ((S.save(), S._applyLineJoin(this), !(this === E))) {
							const L = this.getAbsoluteTransform(E).getMatrix();
							S.transform(L[0], L[1], L[2], L[3], L[4], L[5]);
						}
						return R.call(this, S, this), S.restore(), this;
					}
					drawHitFromCache(x = 0) {
						const E = this._getCanvasCache(),
							N = this._getCachedSceneCanvas(),
							g = E.hit,
							C = g.getContext(),
							S = g.getWidth(),
							R = g.getHeight();
						C.clear(), C.drawImage(N._canvas, 0, 0, S, R);
						try {
							const F = C.getImageData(0, 0, S, R),
								O = F.data,
								I = O.length,
								L = v.Util._hexToRgb(this.colorKey);
							for (let U = 0; U < I; U += 4)
								O[U + 3] > x
									? ((O[U] = L.r), (O[U + 1] = L.g), (O[U + 2] = L.b), (O[U + 3] = 255))
									: (O[U + 3] = 0);
							C.putImageData(F, 0, 0);
						} catch (F) {
							v.Util.error('Unable to draw hit graph from cached scene canvas. ' + F.message);
						}
						return this;
					}
					hasPointerCapture(x) {
						return r.hasPointerCapture(x, this);
					}
					setPointerCapture(x) {
						r.setPointerCapture(x, this);
					}
					releaseCapture(x) {
						r.releaseCapture(x, this);
					}
				}
				(t.Shape = T),
					(T.prototype._fillFunc = y),
					(T.prototype._strokeFunc = b),
					(T.prototype._fillFuncHit = k),
					(T.prototype._strokeFuncHit = d),
					(T.prototype._centroid = !1),
					(T.prototype.nodeType = 'Shape'),
					(0, o._registerNode)(T),
					(T.prototype.eventListeners = {}),
					T.prototype.on.call(
						T.prototype,
						'shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva',
						s
					),
					T.prototype.on.call(
						T.prototype,
						'shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva',
						m
					),
					T.prototype.on.call(
						T.prototype,
						'fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva',
						w
					),
					T.prototype.on.call(
						T.prototype,
						'fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva',
						A
					),
					T.prototype.on.call(
						T.prototype,
						'fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva',
						M
					),
					u.Factory.addGetterSetter(T, 'stroke', void 0, (0, l.getStringOrGradientValidator)()),
					u.Factory.addGetterSetter(T, 'strokeWidth', 2, (0, l.getNumberValidator)()),
					u.Factory.addGetterSetter(T, 'fillAfterStrokeEnabled', !1),
					u.Factory.addGetterSetter(T, 'hitStrokeWidth', 'auto', (0, l.getNumberOrAutoValidator)()),
					u.Factory.addGetterSetter(T, 'strokeHitEnabled', !0, (0, l.getBooleanValidator)()),
					u.Factory.addGetterSetter(T, 'perfectDrawEnabled', !0, (0, l.getBooleanValidator)()),
					u.Factory.addGetterSetter(T, 'shadowForStrokeEnabled', !0, (0, l.getBooleanValidator)()),
					u.Factory.addGetterSetter(T, 'lineJoin'),
					u.Factory.addGetterSetter(T, 'lineCap'),
					u.Factory.addGetterSetter(T, 'sceneFunc'),
					u.Factory.addGetterSetter(T, 'hitFunc'),
					u.Factory.addGetterSetter(T, 'dash'),
					u.Factory.addGetterSetter(T, 'dashOffset', 0, (0, l.getNumberValidator)()),
					u.Factory.addGetterSetter(T, 'shadowColor', void 0, (0, l.getStringValidator)()),
					u.Factory.addGetterSetter(T, 'shadowBlur', 0, (0, l.getNumberValidator)()),
					u.Factory.addGetterSetter(T, 'shadowOpacity', 1, (0, l.getNumberValidator)()),
					u.Factory.addComponentsGetterSetter(T, 'shadowOffset', ['x', 'y']),
					u.Factory.addGetterSetter(T, 'shadowOffsetX', 0, (0, l.getNumberValidator)()),
					u.Factory.addGetterSetter(T, 'shadowOffsetY', 0, (0, l.getNumberValidator)()),
					u.Factory.addGetterSetter(T, 'fillPatternImage'),
					u.Factory.addGetterSetter(T, 'fill', void 0, (0, l.getStringOrGradientValidator)()),
					u.Factory.addGetterSetter(T, 'fillPatternX', 0, (0, l.getNumberValidator)()),
					u.Factory.addGetterSetter(T, 'fillPatternY', 0, (0, l.getNumberValidator)()),
					u.Factory.addGetterSetter(T, 'fillLinearGradientColorStops'),
					u.Factory.addGetterSetter(T, 'strokeLinearGradientColorStops'),
					u.Factory.addGetterSetter(T, 'fillRadialGradientStartRadius', 0),
					u.Factory.addGetterSetter(T, 'fillRadialGradientEndRadius', 0),
					u.Factory.addGetterSetter(T, 'fillRadialGradientColorStops'),
					u.Factory.addGetterSetter(T, 'fillPatternRepeat', 'repeat'),
					u.Factory.addGetterSetter(T, 'fillEnabled', !0),
					u.Factory.addGetterSetter(T, 'strokeEnabled', !0),
					u.Factory.addGetterSetter(T, 'shadowEnabled', !0),
					u.Factory.addGetterSetter(T, 'dashEnabled', !0),
					u.Factory.addGetterSetter(T, 'strokeScaleEnabled', !0),
					u.Factory.addGetterSetter(T, 'fillPriority', 'color'),
					u.Factory.addComponentsGetterSetter(T, 'fillPatternOffset', ['x', 'y']),
					u.Factory.addGetterSetter(T, 'fillPatternOffsetX', 0, (0, l.getNumberValidator)()),
					u.Factory.addGetterSetter(T, 'fillPatternOffsetY', 0, (0, l.getNumberValidator)()),
					u.Factory.addComponentsGetterSetter(T, 'fillPatternScale', ['x', 'y']),
					u.Factory.addGetterSetter(T, 'fillPatternScaleX', 1, (0, l.getNumberValidator)()),
					u.Factory.addGetterSetter(T, 'fillPatternScaleY', 1, (0, l.getNumberValidator)()),
					u.Factory.addComponentsGetterSetter(T, 'fillLinearGradientStartPoint', ['x', 'y']),
					u.Factory.addComponentsGetterSetter(T, 'strokeLinearGradientStartPoint', ['x', 'y']),
					u.Factory.addGetterSetter(T, 'fillLinearGradientStartPointX', 0),
					u.Factory.addGetterSetter(T, 'strokeLinearGradientStartPointX', 0),
					u.Factory.addGetterSetter(T, 'fillLinearGradientStartPointY', 0),
					u.Factory.addGetterSetter(T, 'strokeLinearGradientStartPointY', 0),
					u.Factory.addComponentsGetterSetter(T, 'fillLinearGradientEndPoint', ['x', 'y']),
					u.Factory.addComponentsGetterSetter(T, 'strokeLinearGradientEndPoint', ['x', 'y']),
					u.Factory.addGetterSetter(T, 'fillLinearGradientEndPointX', 0),
					u.Factory.addGetterSetter(T, 'strokeLinearGradientEndPointX', 0),
					u.Factory.addGetterSetter(T, 'fillLinearGradientEndPointY', 0),
					u.Factory.addGetterSetter(T, 'strokeLinearGradientEndPointY', 0),
					u.Factory.addComponentsGetterSetter(T, 'fillRadialGradientStartPoint', ['x', 'y']),
					u.Factory.addGetterSetter(T, 'fillRadialGradientStartPointX', 0),
					u.Factory.addGetterSetter(T, 'fillRadialGradientStartPointY', 0),
					u.Factory.addComponentsGetterSetter(T, 'fillRadialGradientEndPoint', ['x', 'y']),
					u.Factory.addGetterSetter(T, 'fillRadialGradientEndPointX', 0),
					u.Factory.addGetterSetter(T, 'fillRadialGradientEndPointY', 0),
					u.Factory.addGetterSetter(T, 'fillPatternRotation', 0),
					u.Factory.addGetterSetter(T, 'fillRule', void 0, (0, l.getStringValidator)()),
					u.Factory.backCompat(T, {
						dashArray: 'dash',
						getDashArray: 'getDash',
						setDashArray: 'getDash',
						drawFunc: 'sceneFunc',
						getDrawFunc: 'getSceneFunc',
						setDrawFunc: 'setSceneFunc',
						drawHitFunc: 'hitFunc',
						getDrawHitFunc: 'getHitFunc',
						setDrawHitFunc: 'setHitFunc'
					});
			})(pi)),
		pi
	);
}
var or;
function $a() {
	if (or) return ie;
	(or = 1), Object.defineProperty(ie, '__esModule', { value: !0 }), (ie.Arc = void 0);
	const t = tt(),
		n = ct(),
		v = $(),
		u = et(),
		p = $();
	let l = class extends n.Shape {
		_sceneFunc(r) {
			const h = v.Konva.getAngle(this.angle()),
				a = this.clockwise();
			r.beginPath(),
				r.arc(0, 0, this.outerRadius(), 0, h, a),
				r.arc(0, 0, this.innerRadius(), h, 0, !a),
				r.closePath(),
				r.fillStrokeShape(this);
		}
		getWidth() {
			return this.outerRadius() * 2;
		}
		getHeight() {
			return this.outerRadius() * 2;
		}
		setWidth(r) {
			this.outerRadius(r / 2);
		}
		setHeight(r) {
			this.outerRadius(r / 2);
		}
		getSelfRect() {
			const r = this.innerRadius(),
				h = this.outerRadius(),
				a = this.clockwise(),
				f = v.Konva.getAngle(a ? 360 - this.angle() : this.angle()),
				_ = Math.cos(Math.min(f, Math.PI)),
				i = 1,
				e = Math.sin(Math.min(Math.max(Math.PI, f), (3 * Math.PI) / 2)),
				c = Math.sin(Math.min(f, Math.PI / 2)),
				y = _ * (_ > 0 ? r : h),
				b = i * h,
				k = e * (e > 0 ? r : h),
				d = c * (c > 0 ? h : r);
			return { x: y, y: a ? -1 * d : k, width: b - y, height: d - k };
		}
	};
	return (
		(ie.Arc = l),
		(l.prototype._centroid = !0),
		(l.prototype.className = 'Arc'),
		(l.prototype._attrsAffectingSize = ['innerRadius', 'outerRadius', 'angle', 'clockwise']),
		(0, p._registerNode)(l),
		t.Factory.addGetterSetter(l, 'innerRadius', 0, (0, u.getNumberValidator)()),
		t.Factory.addGetterSetter(l, 'outerRadius', 0, (0, u.getNumberValidator)()),
		t.Factory.addGetterSetter(l, 'angle', 0, (0, u.getNumberValidator)()),
		t.Factory.addGetterSetter(l, 'clockwise', !1, (0, u.getBooleanValidator)()),
		ie
	);
}
const ts = [
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
function Tt(t, n) {
	ts.forEach((v) => {
		const u = t[`on${v}`];
		typeof u == 'function' &&
			n.on(v, (p) => {
				u(p);
			});
	});
}
const ri = ['svelte-konva-stage', 'svelte-konva-layer', 'svelte-konva-group', 'svelte-konva-label'];
var je;
(function (t) {
	(t[(t.Stage = 0)] = 'Stage'),
		(t[(t.Layer = 1)] = 'Layer'),
		(t[(t.Group = 2)] = 'Group'),
		(t[(t.Label = 3)] = 'Label');
})(je || (je = {}));
const es =
		'svelte-konva: Component does not have any parent container. Please make sure that the component is wrapped inside a Layer or Group.',
	is = 'svelte-konva: A Layer needs to have a Stage as parent.';
function kn(t, n) {
	ri.forEach((v) => {
		qi(v, null);
	}),
		qi(ri[t], n);
}
function Dt() {
	for (let t = 1; t < 4; t++) {
		const n = on(ri[t]);
		if (n) return n;
	}
	throw new Error(es);
}
function rs() {
	const t = on(ri[je.Stage]);
	if (t) return t;
	throw new Error(is);
}
var ne = {},
	ae = {},
	lr;
function An() {
	if (lr) return ae;
	(lr = 1), Object.defineProperty(ae, '__esModule', { value: !0 }), (ae.Line = void 0);
	const t = tt(),
		n = $(),
		v = ct(),
		u = et();
	function p(r, h, a, f, _, i, e) {
		const c = Math.sqrt(Math.pow(a - r, 2) + Math.pow(f - h, 2)),
			y = Math.sqrt(Math.pow(_ - a, 2) + Math.pow(i - f, 2)),
			b = (e * c) / (c + y),
			k = (e * y) / (c + y),
			d = a - b * (_ - r),
			s = f - b * (i - h),
			m = a + k * (_ - r),
			w = f + k * (i - h);
		return [d, s, m, w];
	}
	function l(r, h) {
		const a = r.length,
			f = [];
		for (let _ = 2; _ < a - 2; _ += 2) {
			const i = p(r[_ - 2], r[_ - 1], r[_], r[_ + 1], r[_ + 2], r[_ + 3], h);
			isNaN(i[0]) ||
				(f.push(i[0]), f.push(i[1]), f.push(r[_]), f.push(r[_ + 1]), f.push(i[2]), f.push(i[3]));
		}
		return f;
	}
	let o = class extends v.Shape {
		constructor(h) {
			super(h),
				this.on(
					'pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva',
					function () {
						this._clearCache('tensionPoints');
					}
				);
		}
		_sceneFunc(h) {
			let a = this.points(),
				f = a.length,
				_ = this.tension(),
				i = this.closed(),
				e = this.bezier(),
				c,
				y,
				b;
			if (f) {
				if ((h.beginPath(), h.moveTo(a[0], a[1]), _ !== 0 && f > 4)) {
					for (
						c = this.getTensionPoints(),
							y = c.length,
							b = i ? 0 : 4,
							i || h.quadraticCurveTo(c[0], c[1], c[2], c[3]);
						b < y - 2;

					)
						h.bezierCurveTo(c[b++], c[b++], c[b++], c[b++], c[b++], c[b++]);
					i || h.quadraticCurveTo(c[y - 2], c[y - 1], a[f - 2], a[f - 1]);
				} else if (e)
					for (b = 2; b < f; ) h.bezierCurveTo(a[b++], a[b++], a[b++], a[b++], a[b++], a[b++]);
				else for (b = 2; b < f; b += 2) h.lineTo(a[b], a[b + 1]);
				i ? (h.closePath(), h.fillStrokeShape(this)) : h.strokeShape(this);
			}
		}
		getTensionPoints() {
			return this._getCache('tensionPoints', this._getTensionPoints);
		}
		_getTensionPoints() {
			return this.closed() ? this._getTensionPointsClosed() : l(this.points(), this.tension());
		}
		_getTensionPointsClosed() {
			const h = this.points(),
				a = h.length,
				f = this.tension(),
				_ = p(h[a - 2], h[a - 1], h[0], h[1], h[2], h[3], f),
				i = p(h[a - 4], h[a - 3], h[a - 2], h[a - 1], h[0], h[1], f),
				e = l(h, f);
			return [_[2], _[3]]
				.concat(e)
				.concat([i[0], i[1], h[a - 2], h[a - 1], i[2], i[3], _[0], _[1], h[0], h[1]]);
		}
		getWidth() {
			return this.getSelfRect().width;
		}
		getHeight() {
			return this.getSelfRect().height;
		}
		getSelfRect() {
			let h = this.points();
			if (h.length < 4) return { x: h[0] || 0, y: h[1] || 0, width: 0, height: 0 };
			this.tension() !== 0
				? (h = [h[0], h[1], ...this._getTensionPoints(), h[h.length - 2], h[h.length - 1]])
				: (h = this.points());
			let a = h[0],
				f = h[0],
				_ = h[1],
				i = h[1],
				e,
				c;
			for (let y = 0; y < h.length / 2; y++)
				(e = h[y * 2]),
					(c = h[y * 2 + 1]),
					(a = Math.min(a, e)),
					(f = Math.max(f, e)),
					(_ = Math.min(_, c)),
					(i = Math.max(i, c));
			return { x: a, y: _, width: f - a, height: i - _ };
		}
	};
	return (
		(ae.Line = o),
		(o.prototype.className = 'Line'),
		(o.prototype._attrsAffectingSize = ['points', 'bezier', 'tension']),
		(0, n._registerNode)(o),
		t.Factory.addGetterSetter(o, 'closed', !1),
		t.Factory.addGetterSetter(o, 'bezier', !1),
		t.Factory.addGetterSetter(o, 'tension', 0, (0, u.getNumberValidator)()),
		t.Factory.addGetterSetter(o, 'points', [], (0, u.getNumberArrayValidator)()),
		ae
	);
}
var se = {},
	mi = {},
	hr;
function ns() {
	return (
		hr ||
			((hr = 1),
			(function (t) {
				Object.defineProperty(t, '__esModule', { value: !0 }),
					(t.t2length =
						t.getQuadraticArcLength =
						t.getCubicArcLength =
						t.binomialCoefficients =
						t.cValues =
						t.tValues =
							void 0),
					(t.tValues = [
						[],
						[],
						[-0.5773502691896257, 0.5773502691896257],
						[0, -0.7745966692414834, 0.7745966692414834],
						[-0.33998104358485626, 0.33998104358485626, -0.8611363115940526, 0.8611363115940526],
						[0, -0.5384693101056831, 0.5384693101056831, -0.906179845938664, 0.906179845938664],
						[
							0.6612093864662645, -0.6612093864662645, -0.2386191860831969, 0.2386191860831969,
							-0.932469514203152, 0.932469514203152
						],
						[
							0, 0.4058451513773972, -0.4058451513773972, -0.7415311855993945, 0.7415311855993945,
							-0.9491079123427585, 0.9491079123427585
						],
						[
							-0.1834346424956498, 0.1834346424956498, -0.525532409916329, 0.525532409916329,
							-0.7966664774136267, 0.7966664774136267, -0.9602898564975363, 0.9602898564975363
						],
						[
							0, -0.8360311073266358, 0.8360311073266358, -0.9681602395076261, 0.9681602395076261,
							-0.3242534234038089, 0.3242534234038089, -0.6133714327005904, 0.6133714327005904
						],
						[
							-0.14887433898163122, 0.14887433898163122, -0.4333953941292472, 0.4333953941292472,
							-0.6794095682990244, 0.6794095682990244, -0.8650633666889845, 0.8650633666889845,
							-0.9739065285171717, 0.9739065285171717
						],
						[
							0, -0.26954315595234496, 0.26954315595234496, -0.5190961292068118, 0.5190961292068118,
							-0.7301520055740494, 0.7301520055740494, -0.8870625997680953, 0.8870625997680953,
							-0.978228658146057, 0.978228658146057
						],
						[
							-0.1252334085114689, 0.1252334085114689, -0.3678314989981802, 0.3678314989981802,
							-0.5873179542866175, 0.5873179542866175, -0.7699026741943047, 0.7699026741943047,
							-0.9041172563704749, 0.9041172563704749, -0.9815606342467192, 0.9815606342467192
						],
						[
							0, -0.2304583159551348, 0.2304583159551348, -0.44849275103644687, 0.44849275103644687,
							-0.6423493394403402, 0.6423493394403402, -0.8015780907333099, 0.8015780907333099,
							-0.9175983992229779, 0.9175983992229779, -0.9841830547185881, 0.9841830547185881
						],
						[
							-0.10805494870734367, 0.10805494870734367, -0.31911236892788974, 0.31911236892788974,
							-0.5152486363581541, 0.5152486363581541, -0.6872929048116855, 0.6872929048116855,
							-0.827201315069765, 0.827201315069765, -0.9284348836635735, 0.9284348836635735,
							-0.9862838086968123, 0.9862838086968123
						],
						[
							0, -0.20119409399743451, 0.20119409399743451, -0.3941513470775634, 0.3941513470775634,
							-0.5709721726085388, 0.5709721726085388, -0.7244177313601701, 0.7244177313601701,
							-0.8482065834104272, 0.8482065834104272, -0.937273392400706, 0.937273392400706,
							-0.9879925180204854, 0.9879925180204854
						],
						[
							-0.09501250983763744, 0.09501250983763744, -0.2816035507792589, 0.2816035507792589,
							-0.45801677765722737, 0.45801677765722737, -0.6178762444026438, 0.6178762444026438,
							-0.755404408355003, 0.755404408355003, -0.8656312023878318, 0.8656312023878318,
							-0.9445750230732326, 0.9445750230732326, -0.9894009349916499, 0.9894009349916499
						],
						[
							0, -0.17848418149584785, 0.17848418149584785, -0.3512317634538763, 0.3512317634538763,
							-0.5126905370864769, 0.5126905370864769, -0.6576711592166907, 0.6576711592166907,
							-0.7815140038968014, 0.7815140038968014, -0.8802391537269859, 0.8802391537269859,
							-0.9506755217687678, 0.9506755217687678, -0.9905754753144174, 0.9905754753144174
						],
						[
							-0.0847750130417353, 0.0847750130417353, -0.2518862256915055, 0.2518862256915055,
							-0.41175116146284263, 0.41175116146284263, -0.5597708310739475, 0.5597708310739475,
							-0.6916870430603532, 0.6916870430603532, -0.8037049589725231, 0.8037049589725231,
							-0.8926024664975557, 0.8926024664975557, -0.9558239495713977, 0.9558239495713977,
							-0.9915651684209309, 0.9915651684209309
						],
						[
							0, -0.16035864564022537, 0.16035864564022537, -0.31656409996362983,
							0.31656409996362983, -0.46457074137596094, 0.46457074137596094, -0.600545304661681,
							0.600545304661681, -0.7209661773352294, 0.7209661773352294, -0.8227146565371428,
							0.8227146565371428, -0.9031559036148179, 0.9031559036148179, -0.96020815213483,
							0.96020815213483, -0.9924068438435844, 0.9924068438435844
						],
						[
							-0.07652652113349734, 0.07652652113349734, -0.22778585114164507, 0.22778585114164507,
							-0.37370608871541955, 0.37370608871541955, -0.5108670019508271, 0.5108670019508271,
							-0.636053680726515, 0.636053680726515, -0.7463319064601508, 0.7463319064601508,
							-0.8391169718222188, 0.8391169718222188, -0.912234428251326, 0.912234428251326,
							-0.9639719272779138, 0.9639719272779138, -0.9931285991850949, 0.9931285991850949
						],
						[
							0, -0.1455618541608951, 0.1455618541608951, -0.2880213168024011, 0.2880213168024011,
							-0.4243421202074388, 0.4243421202074388, -0.5516188358872198, 0.5516188358872198,
							-0.6671388041974123, 0.6671388041974123, -0.7684399634756779, 0.7684399634756779,
							-0.8533633645833173, 0.8533633645833173, -0.9200993341504008, 0.9200993341504008,
							-0.9672268385663063, 0.9672268385663063, -0.9937521706203895, 0.9937521706203895
						],
						[
							-0.06973927331972223, 0.06973927331972223, -0.20786042668822127, 0.20786042668822127,
							-0.34193582089208424, 0.34193582089208424, -0.469355837986757, 0.469355837986757,
							-0.5876404035069116, 0.5876404035069116, -0.6944872631866827, 0.6944872631866827,
							-0.7878168059792081, 0.7878168059792081, -0.8658125777203002, 0.8658125777203002,
							-0.926956772187174, 0.926956772187174, -0.9700604978354287, 0.9700604978354287,
							-0.9942945854823992, 0.9942945854823992
						],
						[
							0, -0.1332568242984661, 0.1332568242984661, -0.26413568097034495, 0.26413568097034495,
							-0.3903010380302908, 0.3903010380302908, -0.5095014778460075, 0.5095014778460075,
							-0.6196098757636461, 0.6196098757636461, -0.7186613631319502, 0.7186613631319502,
							-0.8048884016188399, 0.8048884016188399, -0.8767523582704416, 0.8767523582704416,
							-0.9329710868260161, 0.9329710868260161, -0.9725424712181152, 0.9725424712181152,
							-0.9947693349975522, 0.9947693349975522
						],
						[
							-0.06405689286260563, 0.06405689286260563, -0.1911188674736163, 0.1911188674736163,
							-0.3150426796961634, 0.3150426796961634, -0.4337935076260451, 0.4337935076260451,
							-0.5454214713888396, 0.5454214713888396, -0.6480936519369755, 0.6480936519369755,
							-0.7401241915785544, 0.7401241915785544, -0.820001985973903, 0.820001985973903,
							-0.8864155270044011, 0.8864155270044011, -0.9382745520027328, 0.9382745520027328,
							-0.9747285559713095, 0.9747285559713095, -0.9951872199970213, 0.9951872199970213
						]
					]),
					(t.cValues = [
						[],
						[],
						[1, 1],
						[0.8888888888888888, 0.5555555555555556, 0.5555555555555556],
						[0.6521451548625461, 0.6521451548625461, 0.34785484513745385, 0.34785484513745385],
						[
							0.5688888888888889, 0.47862867049936647, 0.47862867049936647, 0.23692688505618908,
							0.23692688505618908
						],
						[
							0.3607615730481386, 0.3607615730481386, 0.46791393457269104, 0.46791393457269104,
							0.17132449237917036, 0.17132449237917036
						],
						[
							0.4179591836734694, 0.3818300505051189, 0.3818300505051189, 0.27970539148927664,
							0.27970539148927664, 0.1294849661688697, 0.1294849661688697
						],
						[
							0.362683783378362, 0.362683783378362, 0.31370664587788727, 0.31370664587788727,
							0.22238103445337448, 0.22238103445337448, 0.10122853629037626, 0.10122853629037626
						],
						[
							0.3302393550012598, 0.1806481606948574, 0.1806481606948574, 0.08127438836157441,
							0.08127438836157441, 0.31234707704000286, 0.31234707704000286, 0.26061069640293544,
							0.26061069640293544
						],
						[
							0.29552422471475287, 0.29552422471475287, 0.26926671930999635, 0.26926671930999635,
							0.21908636251598204, 0.21908636251598204, 0.1494513491505806, 0.1494513491505806,
							0.06667134430868814, 0.06667134430868814
						],
						[
							0.2729250867779006, 0.26280454451024665, 0.26280454451024665, 0.23319376459199048,
							0.23319376459199048, 0.18629021092773426, 0.18629021092773426, 0.1255803694649046,
							0.1255803694649046, 0.05566856711617366, 0.05566856711617366
						],
						[
							0.24914704581340277, 0.24914704581340277, 0.2334925365383548, 0.2334925365383548,
							0.20316742672306592, 0.20316742672306592, 0.16007832854334622, 0.16007832854334622,
							0.10693932599531843, 0.10693932599531843, 0.04717533638651183, 0.04717533638651183
						],
						[
							0.2325515532308739, 0.22628318026289723, 0.22628318026289723, 0.2078160475368885,
							0.2078160475368885, 0.17814598076194574, 0.17814598076194574, 0.13887351021978725,
							0.13887351021978725, 0.09212149983772845, 0.09212149983772845, 0.04048400476531588,
							0.04048400476531588
						],
						[
							0.2152638534631578, 0.2152638534631578, 0.2051984637212956, 0.2051984637212956,
							0.18553839747793782, 0.18553839747793782, 0.15720316715819355, 0.15720316715819355,
							0.12151857068790319, 0.12151857068790319, 0.08015808715976021, 0.08015808715976021,
							0.03511946033175186, 0.03511946033175186
						],
						[
							0.2025782419255613, 0.19843148532711158, 0.19843148532711158, 0.1861610000155622,
							0.1861610000155622, 0.16626920581699392, 0.16626920581699392, 0.13957067792615432,
							0.13957067792615432, 0.10715922046717194, 0.10715922046717194, 0.07036604748810812,
							0.07036604748810812, 0.03075324199611727, 0.03075324199611727
						],
						[
							0.1894506104550685, 0.1894506104550685, 0.18260341504492358, 0.18260341504492358,
							0.16915651939500254, 0.16915651939500254, 0.14959598881657674, 0.14959598881657674,
							0.12462897125553388, 0.12462897125553388, 0.09515851168249279, 0.09515851168249279,
							0.062253523938647894, 0.062253523938647894, 0.027152459411754096, 0.027152459411754096
						],
						[
							0.17944647035620653, 0.17656270536699264, 0.17656270536699264, 0.16800410215645004,
							0.16800410215645004, 0.15404576107681028, 0.15404576107681028, 0.13513636846852548,
							0.13513636846852548, 0.11188384719340397, 0.11188384719340397, 0.08503614831717918,
							0.08503614831717918, 0.0554595293739872, 0.0554595293739872, 0.02414830286854793,
							0.02414830286854793
						],
						[
							0.1691423829631436, 0.1691423829631436, 0.16427648374583273, 0.16427648374583273,
							0.15468467512626524, 0.15468467512626524, 0.14064291467065065, 0.14064291467065065,
							0.12255520671147846, 0.12255520671147846, 0.10094204410628717, 0.10094204410628717,
							0.07642573025488905, 0.07642573025488905, 0.0497145488949698, 0.0497145488949698,
							0.02161601352648331, 0.02161601352648331
						],
						[
							0.1610544498487837, 0.15896884339395434, 0.15896884339395434, 0.15276604206585967,
							0.15276604206585967, 0.1426067021736066, 0.1426067021736066, 0.12875396253933621,
							0.12875396253933621, 0.11156664554733399, 0.11156664554733399, 0.09149002162245,
							0.09149002162245, 0.06904454273764123, 0.06904454273764123, 0.0448142267656996,
							0.0448142267656996, 0.019461788229726478, 0.019461788229726478
						],
						[
							0.15275338713072584, 0.15275338713072584, 0.14917298647260374, 0.14917298647260374,
							0.14209610931838204, 0.14209610931838204, 0.13168863844917664, 0.13168863844917664,
							0.11819453196151841, 0.11819453196151841, 0.10193011981724044, 0.10193011981724044,
							0.08327674157670475, 0.08327674157670475, 0.06267204833410907, 0.06267204833410907,
							0.04060142980038694, 0.04060142980038694, 0.017614007139152118, 0.017614007139152118
						],
						[
							0.14608113364969041, 0.14452440398997005, 0.14452440398997005, 0.13988739479107315,
							0.13988739479107315, 0.13226893863333747, 0.13226893863333747, 0.12183141605372853,
							0.12183141605372853, 0.10879729916714838, 0.10879729916714838, 0.09344442345603386,
							0.09344442345603386, 0.0761001136283793, 0.0761001136283793, 0.057134425426857205,
							0.057134425426857205, 0.036953789770852494, 0.036953789770852494,
							0.016017228257774335, 0.016017228257774335
						],
						[
							0.13925187285563198, 0.13925187285563198, 0.13654149834601517, 0.13654149834601517,
							0.13117350478706238, 0.13117350478706238, 0.12325237681051242, 0.12325237681051242,
							0.11293229608053922, 0.11293229608053922, 0.10041414444288096, 0.10041414444288096,
							0.08594160621706773, 0.08594160621706773, 0.06979646842452049, 0.06979646842452049,
							0.052293335152683286, 0.052293335152683286, 0.03377490158481415, 0.03377490158481415,
							0.0146279952982722, 0.0146279952982722
						],
						[
							0.13365457218610619, 0.1324620394046966, 0.1324620394046966, 0.12890572218808216,
							0.12890572218808216, 0.12304908430672953, 0.12304908430672953, 0.11499664022241136,
							0.11499664022241136, 0.10489209146454141, 0.10489209146454141, 0.09291576606003515,
							0.09291576606003515, 0.07928141177671895, 0.07928141177671895, 0.06423242140852585,
							0.06423242140852585, 0.04803767173108467, 0.04803767173108467, 0.030988005856979445,
							0.030988005856979445, 0.013411859487141771, 0.013411859487141771
						],
						[
							0.12793819534675216, 0.12793819534675216, 0.1258374563468283, 0.1258374563468283,
							0.12167047292780339, 0.12167047292780339, 0.1155056680537256, 0.1155056680537256,
							0.10744427011596563, 0.10744427011596563, 0.09761865210411388, 0.09761865210411388,
							0.08619016153195327, 0.08619016153195327, 0.0733464814110803, 0.0733464814110803,
							0.05929858491543678, 0.05929858491543678, 0.04427743881741981, 0.04427743881741981,
							0.028531388628933663, 0.028531388628933663, 0.0123412297999872, 0.0123412297999872
						]
					]),
					(t.binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]);
				const n = (o, r, h) => {
					let a, f;
					const i = h / 2;
					a = 0;
					for (let e = 0; e < 20; e++)
						(f = i * t.tValues[20][e] + i), (a += t.cValues[20][e] * u(o, r, f));
					return i * a;
				};
				t.getCubicArcLength = n;
				const v = (o, r, h) => {
					h === void 0 && (h = 1);
					const a = o[0] - 2 * o[1] + o[2],
						f = r[0] - 2 * r[1] + r[2],
						_ = 2 * o[1] - 2 * o[0],
						i = 2 * r[1] - 2 * r[0],
						e = 4 * (a * a + f * f),
						c = 4 * (a * _ + f * i),
						y = _ * _ + i * i;
					if (e === 0) return h * Math.sqrt(Math.pow(o[2] - o[0], 2) + Math.pow(r[2] - r[0], 2));
					const b = c / (2 * e),
						k = y / e,
						d = h + b,
						s = k - b * b,
						m = d * d + s > 0 ? Math.sqrt(d * d + s) : 0,
						w = b * b + s > 0 ? Math.sqrt(b * b + s) : 0,
						A = b + Math.sqrt(b * b + s) !== 0 ? s * Math.log(Math.abs((d + m) / (b + w))) : 0;
					return (Math.sqrt(e) / 2) * (d * m - b * w + A);
				};
				t.getQuadraticArcLength = v;
				function u(o, r, h) {
					const a = p(1, h, o),
						f = p(1, h, r),
						_ = a * a + f * f;
					return Math.sqrt(_);
				}
				const p = (o, r, h) => {
						const a = h.length - 1;
						let f, _;
						if (a === 0) return 0;
						if (o === 0) {
							_ = 0;
							for (let i = 0; i <= a; i++)
								_ += t.binomialCoefficients[a][i] * Math.pow(1 - r, a - i) * Math.pow(r, i) * h[i];
							return _;
						} else {
							f = new Array(a);
							for (let i = 0; i < a; i++) f[i] = a * (h[i + 1] - h[i]);
							return p(o - 1, r, f);
						}
					},
					l = (o, r, h) => {
						let a = 1,
							f = o / r,
							_ = (o - h(f)) / r,
							i = 0;
						for (; a > 0.001; ) {
							const e = h(f + _),
								c = Math.abs(o - e) / r;
							if (c < a) (a = c), (f += _);
							else {
								const y = h(f - _),
									b = Math.abs(o - y) / r;
								b < a ? ((a = b), (f -= _)) : (_ /= 2);
							}
							if ((i++, i > 500)) break;
						}
						return f;
					};
				t.t2length = l;
			})(mi)),
		mi
	);
}
var cr;
function Ni() {
	if (cr) return se;
	(cr = 1), Object.defineProperty(se, '__esModule', { value: !0 }), (se.Path = void 0);
	const t = tt(),
		n = ct(),
		v = $(),
		u = ns();
	let p = class vt extends n.Shape {
		constructor(o) {
			super(o),
				(this.dataArray = []),
				(this.pathLength = 0),
				this._readDataAttribute(),
				this.on('dataChange.konva', function () {
					this._readDataAttribute();
				});
		}
		_readDataAttribute() {
			(this.dataArray = vt.parsePathData(this.data())),
				(this.pathLength = vt.getPathLength(this.dataArray));
		}
		_sceneFunc(o) {
			const r = this.dataArray;
			o.beginPath();
			let h = !1;
			for (let m = 0; m < r.length; m++) {
				const w = r[m].command,
					A = r[m].points;
				switch (w) {
					case 'L':
						o.lineTo(A[0], A[1]);
						break;
					case 'M':
						o.moveTo(A[0], A[1]);
						break;
					case 'C':
						o.bezierCurveTo(A[0], A[1], A[2], A[3], A[4], A[5]);
						break;
					case 'Q':
						o.quadraticCurveTo(A[0], A[1], A[2], A[3]);
						break;
					case 'A':
						var a = A[0],
							f = A[1],
							_ = A[2],
							i = A[3],
							e = A[4],
							c = A[5],
							y = A[6],
							b = A[7],
							k = _ > i ? _ : i,
							d = _ > i ? 1 : _ / i,
							s = _ > i ? i / _ : 1;
						o.translate(a, f),
							o.rotate(y),
							o.scale(d, s),
							o.arc(0, 0, k, e, e + c, 1 - b),
							o.scale(1 / d, 1 / s),
							o.rotate(-y),
							o.translate(-a, -f);
						break;
					case 'z':
						(h = !0), o.closePath();
						break;
				}
			}
			!h && !this.hasFill() ? o.strokeShape(this) : o.fillStrokeShape(this);
		}
		getSelfRect() {
			let o = [];
			this.dataArray.forEach(function (e) {
				if (e.command === 'A') {
					const c = e.points[4],
						y = e.points[5],
						b = e.points[4] + y;
					let k = Math.PI / 180;
					if ((Math.abs(c - b) < k && (k = Math.abs(c - b)), y < 0))
						for (let d = c - k; d > b; d -= k) {
							const s = vt.getPointOnEllipticalArc(
								e.points[0],
								e.points[1],
								e.points[2],
								e.points[3],
								d,
								0
							);
							o.push(s.x, s.y);
						}
					else
						for (let d = c + k; d < b; d += k) {
							const s = vt.getPointOnEllipticalArc(
								e.points[0],
								e.points[1],
								e.points[2],
								e.points[3],
								d,
								0
							);
							o.push(s.x, s.y);
						}
				} else if (e.command === 'C')
					for (let c = 0; c <= 1; c += 0.01) {
						const y = vt.getPointOnCubicBezier(
							c,
							e.start.x,
							e.start.y,
							e.points[0],
							e.points[1],
							e.points[2],
							e.points[3],
							e.points[4],
							e.points[5]
						);
						o.push(y.x, y.y);
					}
				else o = o.concat(e.points);
			});
			let r = o[0],
				h = o[0],
				a = o[1],
				f = o[1],
				_,
				i;
			for (let e = 0; e < o.length / 2; e++)
				(_ = o[e * 2]),
					(i = o[e * 2 + 1]),
					isNaN(_) || ((r = Math.min(r, _)), (h = Math.max(h, _))),
					isNaN(i) || ((a = Math.min(a, i)), (f = Math.max(f, i)));
			return { x: r, y: a, width: h - r, height: f - a };
		}
		getLength() {
			return this.pathLength;
		}
		getPointAtLength(o) {
			return vt.getPointAtLengthOfDataArray(o, this.dataArray);
		}
		static getLineLength(o, r, h, a) {
			return Math.sqrt((h - o) * (h - o) + (a - r) * (a - r));
		}
		static getPathLength(o) {
			let r = 0;
			for (let h = 0; h < o.length; ++h) r += o[h].pathLength;
			return r;
		}
		static getPointAtLengthOfDataArray(o, r) {
			let h,
				a = 0,
				f = r.length;
			if (!f) return null;
			for (; a < f && o > r[a].pathLength; ) (o -= r[a].pathLength), ++a;
			if (a === f) return (h = r[a - 1].points.slice(-2)), { x: h[0], y: h[1] };
			if (o < 0.01) return (h = r[a].points.slice(0, 2)), { x: h[0], y: h[1] };
			const _ = r[a],
				i = _.points;
			switch (_.command) {
				case 'L':
					return vt.getPointOnLine(o, _.start.x, _.start.y, i[0], i[1]);
				case 'C':
					return vt.getPointOnCubicBezier(
						(0, u.t2length)(o, vt.getPathLength(r), (m) =>
							(0, u.getCubicArcLength)(
								[_.start.x, i[0], i[2], i[4]],
								[_.start.y, i[1], i[3], i[5]],
								m
							)
						),
						_.start.x,
						_.start.y,
						i[0],
						i[1],
						i[2],
						i[3],
						i[4],
						i[5]
					);
				case 'Q':
					return vt.getPointOnQuadraticBezier(
						(0, u.t2length)(o, vt.getPathLength(r), (m) =>
							(0, u.getQuadraticArcLength)([_.start.x, i[0], i[2]], [_.start.y, i[1], i[3]], m)
						),
						_.start.x,
						_.start.y,
						i[0],
						i[1],
						i[2],
						i[3]
					);
				case 'A':
					var e = i[0],
						c = i[1],
						y = i[2],
						b = i[3],
						k = i[4],
						d = i[5],
						s = i[6];
					return (k += (d * o) / _.pathLength), vt.getPointOnEllipticalArc(e, c, y, b, k, s);
			}
			return null;
		}
		static getPointOnLine(o, r, h, a, f, _, i) {
			(_ = _ ?? r), (i = i ?? h);
			const e = this.getLineLength(r, h, a, f);
			if (e < 1e-10) return { x: r, y: h };
			if (a === r) return { x: _, y: i + (f > h ? o : -o) };
			const c = (f - h) / (a - r),
				y = Math.sqrt((o * o) / (1 + c * c)) * (a < r ? -1 : 1),
				b = c * y;
			if (Math.abs(i - h - c * (_ - r)) < 1e-10) return { x: _ + y, y: i + b };
			const k = ((_ - r) * (a - r) + (i - h) * (f - h)) / (e * e),
				d = r + k * (a - r),
				s = h + k * (f - h),
				m = this.getLineLength(_, i, d, s),
				w = Math.sqrt(o * o - m * m),
				A = Math.sqrt((w * w) / (1 + c * c)) * (a < r ? -1 : 1),
				M = c * A;
			return { x: d + A, y: s + M };
		}
		static getPointOnCubicBezier(o, r, h, a, f, _, i, e, c) {
			function y(w) {
				return w * w * w;
			}
			function b(w) {
				return 3 * w * w * (1 - w);
			}
			function k(w) {
				return 3 * w * (1 - w) * (1 - w);
			}
			function d(w) {
				return (1 - w) * (1 - w) * (1 - w);
			}
			const s = e * y(o) + _ * b(o) + a * k(o) + r * d(o),
				m = c * y(o) + i * b(o) + f * k(o) + h * d(o);
			return { x: s, y: m };
		}
		static getPointOnQuadraticBezier(o, r, h, a, f, _, i) {
			function e(d) {
				return d * d;
			}
			function c(d) {
				return 2 * d * (1 - d);
			}
			function y(d) {
				return (1 - d) * (1 - d);
			}
			const b = _ * e(o) + a * c(o) + r * y(o),
				k = i * e(o) + f * c(o) + h * y(o);
			return { x: b, y: k };
		}
		static getPointOnEllipticalArc(o, r, h, a, f, _) {
			const i = Math.cos(_),
				e = Math.sin(_),
				c = { x: h * Math.cos(f), y: a * Math.sin(f) };
			return { x: o + (c.x * i - c.y * e), y: r + (c.x * e + c.y * i) };
		}
		static parsePathData(o) {
			if (!o) return [];
			let r = o;
			const h = [
				'm',
				'M',
				'l',
				'L',
				'v',
				'V',
				'h',
				'H',
				'z',
				'Z',
				'c',
				'C',
				'q',
				'Q',
				't',
				'T',
				's',
				'S',
				'a',
				'A'
			];
			r = r.replace(new RegExp(' ', 'g'), ',');
			for (var a = 0; a < h.length; a++) r = r.replace(new RegExp(h[a], 'g'), '|' + h[a]);
			const f = r.split('|'),
				_ = [],
				i = [];
			let e = 0,
				c = 0;
			const y = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
			let b;
			for (a = 1; a < f.length; a++) {
				let g = f[a],
					C = g.charAt(0);
				for (g = g.slice(1), i.length = 0; (b = y.exec(g)); ) i.push(b[0]);
				const S = [];
				for (let R = 0, F = i.length; R < F; R++) {
					if (i[R] === '00') {
						S.push(0, 0);
						continue;
					}
					const O = parseFloat(i[R]);
					isNaN(O) ? S.push(0) : S.push(O);
				}
				for (; S.length > 0 && !isNaN(S[0]); ) {
					let R = '',
						F = [];
					const O = e,
						I = c;
					var k, d, s, m, w, A, M, T, P, x;
					switch (C) {
						case 'l':
							(e += S.shift()), (c += S.shift()), (R = 'L'), F.push(e, c);
							break;
						case 'L':
							(e = S.shift()), (c = S.shift()), F.push(e, c);
							break;
						case 'm':
							var E = S.shift(),
								N = S.shift();
							if (
								((e += E), (c += N), (R = 'M'), _.length > 2 && _[_.length - 1].command === 'z')
							) {
								for (let L = _.length - 2; L >= 0; L--)
									if (_[L].command === 'M') {
										(e = _[L].points[0] + E), (c = _[L].points[1] + N);
										break;
									}
							}
							F.push(e, c), (C = 'l');
							break;
						case 'M':
							(e = S.shift()), (c = S.shift()), (R = 'M'), F.push(e, c), (C = 'L');
							break;
						case 'h':
							(e += S.shift()), (R = 'L'), F.push(e, c);
							break;
						case 'H':
							(e = S.shift()), (R = 'L'), F.push(e, c);
							break;
						case 'v':
							(c += S.shift()), (R = 'L'), F.push(e, c);
							break;
						case 'V':
							(c = S.shift()), (R = 'L'), F.push(e, c);
							break;
						case 'C':
							F.push(S.shift(), S.shift(), S.shift(), S.shift()),
								(e = S.shift()),
								(c = S.shift()),
								F.push(e, c);
							break;
						case 'c':
							F.push(e + S.shift(), c + S.shift(), e + S.shift(), c + S.shift()),
								(e += S.shift()),
								(c += S.shift()),
								(R = 'C'),
								F.push(e, c);
							break;
						case 'S':
							(d = e),
								(s = c),
								(k = _[_.length - 1]),
								k.command === 'C' && ((d = e + (e - k.points[2])), (s = c + (c - k.points[3]))),
								F.push(d, s, S.shift(), S.shift()),
								(e = S.shift()),
								(c = S.shift()),
								(R = 'C'),
								F.push(e, c);
							break;
						case 's':
							(d = e),
								(s = c),
								(k = _[_.length - 1]),
								k.command === 'C' && ((d = e + (e - k.points[2])), (s = c + (c - k.points[3]))),
								F.push(d, s, e + S.shift(), c + S.shift()),
								(e += S.shift()),
								(c += S.shift()),
								(R = 'C'),
								F.push(e, c);
							break;
						case 'Q':
							F.push(S.shift(), S.shift()), (e = S.shift()), (c = S.shift()), F.push(e, c);
							break;
						case 'q':
							F.push(e + S.shift(), c + S.shift()),
								(e += S.shift()),
								(c += S.shift()),
								(R = 'Q'),
								F.push(e, c);
							break;
						case 'T':
							(d = e),
								(s = c),
								(k = _[_.length - 1]),
								k.command === 'Q' && ((d = e + (e - k.points[0])), (s = c + (c - k.points[1]))),
								(e = S.shift()),
								(c = S.shift()),
								(R = 'Q'),
								F.push(d, s, e, c);
							break;
						case 't':
							(d = e),
								(s = c),
								(k = _[_.length - 1]),
								k.command === 'Q' && ((d = e + (e - k.points[0])), (s = c + (c - k.points[1]))),
								(e += S.shift()),
								(c += S.shift()),
								(R = 'Q'),
								F.push(d, s, e, c);
							break;
						case 'A':
							(m = S.shift()),
								(w = S.shift()),
								(A = S.shift()),
								(M = S.shift()),
								(T = S.shift()),
								(P = e),
								(x = c),
								(e = S.shift()),
								(c = S.shift()),
								(R = 'A'),
								(F = this.convertEndpointToCenterParameterization(P, x, e, c, M, T, m, w, A));
							break;
						case 'a':
							(m = S.shift()),
								(w = S.shift()),
								(A = S.shift()),
								(M = S.shift()),
								(T = S.shift()),
								(P = e),
								(x = c),
								(e += S.shift()),
								(c += S.shift()),
								(R = 'A'),
								(F = this.convertEndpointToCenterParameterization(P, x, e, c, M, T, m, w, A));
							break;
					}
					_.push({
						command: R || C,
						points: F,
						start: { x: O, y: I },
						pathLength: this.calcLength(O, I, R || C, F)
					});
				}
				(C === 'z' || C === 'Z') &&
					_.push({ command: 'z', points: [], start: void 0, pathLength: 0 });
			}
			return _;
		}
		static calcLength(o, r, h, a) {
			let f, _, i, e;
			const c = vt;
			switch (h) {
				case 'L':
					return c.getLineLength(o, r, a[0], a[1]);
				case 'C':
					return (0, u.getCubicArcLength)([o, a[0], a[2], a[4]], [r, a[1], a[3], a[5]], 1);
				case 'Q':
					return (0, u.getQuadraticArcLength)([o, a[0], a[2]], [r, a[1], a[3]], 1);
				case 'A':
					f = 0;
					var y = a[4],
						b = a[5],
						k = a[4] + b,
						d = Math.PI / 180;
					if (
						(Math.abs(y - k) < d && (d = Math.abs(y - k)),
						(_ = c.getPointOnEllipticalArc(a[0], a[1], a[2], a[3], y, 0)),
						b < 0)
					)
						for (e = y - d; e > k; e -= d)
							(i = c.getPointOnEllipticalArc(a[0], a[1], a[2], a[3], e, 0)),
								(f += c.getLineLength(_.x, _.y, i.x, i.y)),
								(_ = i);
					else
						for (e = y + d; e < k; e += d)
							(i = c.getPointOnEllipticalArc(a[0], a[1], a[2], a[3], e, 0)),
								(f += c.getLineLength(_.x, _.y, i.x, i.y)),
								(_ = i);
					return (
						(i = c.getPointOnEllipticalArc(a[0], a[1], a[2], a[3], k, 0)),
						(f += c.getLineLength(_.x, _.y, i.x, i.y)),
						f
					);
			}
			return 0;
		}
		static convertEndpointToCenterParameterization(o, r, h, a, f, _, i, e, c) {
			const y = c * (Math.PI / 180),
				b = (Math.cos(y) * (o - h)) / 2 + (Math.sin(y) * (r - a)) / 2,
				k = (-1 * Math.sin(y) * (o - h)) / 2 + (Math.cos(y) * (r - a)) / 2,
				d = (b * b) / (i * i) + (k * k) / (e * e);
			d > 1 && ((i *= Math.sqrt(d)), (e *= Math.sqrt(d)));
			let s = Math.sqrt(
				(i * i * (e * e) - i * i * (k * k) - e * e * (b * b)) / (i * i * (k * k) + e * e * (b * b))
			);
			f === _ && (s *= -1), isNaN(s) && (s = 0);
			const m = (s * i * k) / e,
				w = (s * -e * b) / i,
				A = (o + h) / 2 + Math.cos(y) * m - Math.sin(y) * w,
				M = (r + a) / 2 + Math.sin(y) * m + Math.cos(y) * w,
				T = function (S) {
					return Math.sqrt(S[0] * S[0] + S[1] * S[1]);
				},
				P = function (S, R) {
					return (S[0] * R[0] + S[1] * R[1]) / (T(S) * T(R));
				},
				x = function (S, R) {
					return (S[0] * R[1] < S[1] * R[0] ? -1 : 1) * Math.acos(P(S, R));
				},
				E = x([1, 0], [(b - m) / i, (k - w) / e]),
				N = [(b - m) / i, (k - w) / e],
				g = [(-1 * b - m) / i, (-1 * k - w) / e];
			let C = x(N, g);
			return (
				P(N, g) <= -1 && (C = Math.PI),
				P(N, g) >= 1 && (C = 0),
				_ === 0 && C > 0 && (C = C - 2 * Math.PI),
				_ === 1 && C < 0 && (C = C + 2 * Math.PI),
				[A, M, i, e, E, C, y, _]
			);
		}
	};
	return (
		(se.Path = p),
		(p.prototype.className = 'Path'),
		(p.prototype._attrsAffectingSize = ['data']),
		(0, v._registerNode)(p),
		t.Factory.addGetterSetter(p, 'data'),
		se
	);
}
var dr;
function Pn() {
	if (dr) return ne;
	(dr = 1), Object.defineProperty(ne, '__esModule', { value: !0 }), (ne.Arrow = void 0);
	const t = tt(),
		n = An(),
		v = et(),
		u = $(),
		p = Ni();
	class l extends n.Line {
		_sceneFunc(r) {
			super._sceneFunc(r);
			const h = Math.PI * 2,
				a = this.points();
			let f = a;
			const _ = this.tension() !== 0 && a.length > 4;
			_ && (f = this.getTensionPoints());
			const i = this.pointerLength(),
				e = a.length;
			let c, y;
			if (_) {
				const d = [
						f[f.length - 4],
						f[f.length - 3],
						f[f.length - 2],
						f[f.length - 1],
						a[e - 2],
						a[e - 1]
					],
					s = p.Path.calcLength(f[f.length - 4], f[f.length - 3], 'C', d),
					m = p.Path.getPointOnQuadraticBezier(
						Math.min(1, 1 - i / s),
						d[0],
						d[1],
						d[2],
						d[3],
						d[4],
						d[5]
					);
				(c = a[e - 2] - m.x), (y = a[e - 1] - m.y);
			} else (c = a[e - 2] - a[e - 4]), (y = a[e - 1] - a[e - 3]);
			const b = (Math.atan2(y, c) + h) % h,
				k = this.pointerWidth();
			this.pointerAtEnding() &&
				(r.save(),
				r.beginPath(),
				r.translate(a[e - 2], a[e - 1]),
				r.rotate(b),
				r.moveTo(0, 0),
				r.lineTo(-i, k / 2),
				r.lineTo(-i, -k / 2),
				r.closePath(),
				r.restore(),
				this.__fillStroke(r)),
				this.pointerAtBeginning() &&
					(r.save(),
					r.beginPath(),
					r.translate(a[0], a[1]),
					_
						? ((c = (f[0] + f[2]) / 2 - a[0]), (y = (f[1] + f[3]) / 2 - a[1]))
						: ((c = a[2] - a[0]), (y = a[3] - a[1])),
					r.rotate((Math.atan2(-y, -c) + h) % h),
					r.moveTo(0, 0),
					r.lineTo(-i, k / 2),
					r.lineTo(-i, -k / 2),
					r.closePath(),
					r.restore(),
					this.__fillStroke(r));
		}
		__fillStroke(r) {
			const h = this.dashEnabled();
			h && ((this.attrs.dashEnabled = !1), r.setLineDash([])),
				r.fillStrokeShape(this),
				h && (this.attrs.dashEnabled = !0);
		}
		getSelfRect() {
			const r = super.getSelfRect(),
				h = this.pointerWidth() / 2;
			return { x: r.x, y: r.y - h, width: r.width, height: r.height + h * 2 };
		}
	}
	return (
		(ne.Arrow = l),
		(l.prototype.className = 'Arrow'),
		(0, u._registerNode)(l),
		t.Factory.addGetterSetter(l, 'pointerLength', 10, (0, v.getNumberValidator)()),
		t.Factory.addGetterSetter(l, 'pointerWidth', 10, (0, v.getNumberValidator)()),
		t.Factory.addGetterSetter(l, 'pointerAtBeginning', !1),
		t.Factory.addGetterSetter(l, 'pointerAtEnding', !0),
		ne
	);
}
var as = Pn();
function ss(t, n) {
	pt(n, !0);
	let v = V(n, 'staticConfig', 3, !1),
		u = V(n, 'x', 15),
		p = V(n, 'y', 15),
		l = V(n, 'scale', 15),
		o = V(n, 'scaleX', 15),
		r = V(n, 'scaleY', 15),
		h = V(n, 'rotation', 15),
		a = V(n, 'skewX', 15),
		f = V(n, 'skewY', 15),
		_ = Pt(n, [
			'$$slots',
			'$$events',
			'$$legacy',
			'staticConfig',
			'x',
			'y',
			'scale',
			'scaleX',
			'scaleY',
			'rotation',
			'skewX',
			'skewY'
		]);
	const i = new as.Arrow({
		x: u(),
		y: p(),
		scale: l(),
		scaleX: o(),
		scaleY: r(),
		rotation: h(),
		skewX: a(),
		skewY: f(),
		..._
	});
	if ((Dt().add(i), !v())) {
		const e = i.getAttrs();
		i.on('transformend', () => {
			u() !== void 0 && u(e.x),
				p() !== void 0 && p(e.y),
				l() !== void 0 && l(e.scale),
				o() !== void 0 && o(e.scaleX),
				r() !== void 0 && r(e.scaleY),
				h() !== void 0 && h(e.rotation),
				a() !== void 0 && a(e.skewX),
				f() !== void 0 && f(e.skewY);
		}),
			i.on('dragend', () => {
				u() !== void 0 && u(e.x), p() !== void 0 && p(e.y);
			});
	}
	return (
		Object.keys(_)
			.filter((e) => !e.startsWith('on'))
			.forEach((e) => {
				Y(() => {
					i.setAttr(e, _[e]);
				});
			}),
		Y(() => {
			i.setAttr('x', u());
		}),
		Y(() => {
			i.setAttr('y', p());
		}),
		Y(() => {
			i.setAttr('scale', l());
		}),
		Y(() => {
			i.setAttr('scaleX', o());
		}),
		Y(() => {
			i.setAttr('scaleY', r());
		}),
		Y(() => {
			i.setAttr('rotation', h());
		}),
		Y(() => {
			i.setAttr('skewX', a());
		}),
		Y(() => {
			i.setAttr('skewY', f());
		}),
		Tt(_, i),
		At(() => {
			i.destroy();
		}),
		_t({ node: i })
	);
}
var oe = {},
	ur;
function Tn() {
	if (ur) return oe;
	(ur = 1), Object.defineProperty(oe, '__esModule', { value: !0 }), (oe.Circle = void 0);
	const t = tt(),
		n = ct(),
		v = et(),
		u = $();
	class p extends n.Shape {
		_sceneFunc(o) {
			o.beginPath(),
				o.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, !1),
				o.closePath(),
				o.fillStrokeShape(this);
		}
		getWidth() {
			return this.radius() * 2;
		}
		getHeight() {
			return this.radius() * 2;
		}
		setWidth(o) {
			this.radius() !== o / 2 && this.radius(o / 2);
		}
		setHeight(o) {
			this.radius() !== o / 2 && this.radius(o / 2);
		}
	}
	return (
		(oe.Circle = p),
		(p.prototype._centroid = !0),
		(p.prototype.className = 'Circle'),
		(p.prototype._attrsAffectingSize = ['radius']),
		(0, u._registerNode)(p),
		t.Factory.addGetterSetter(p, 'radius', 0, (0, v.getNumberValidator)()),
		oe
	);
}
var os = Tn();
function ls(t, n) {
	pt(n, !0);
	let v = V(n, 'staticConfig', 3, !1),
		u = V(n, 'x', 15),
		p = V(n, 'y', 15),
		l = V(n, 'scale', 15),
		o = V(n, 'scaleX', 15),
		r = V(n, 'scaleY', 15),
		h = V(n, 'rotation', 15),
		a = V(n, 'skewX', 15),
		f = V(n, 'skewY', 15),
		_ = Pt(n, [
			'$$slots',
			'$$events',
			'$$legacy',
			'staticConfig',
			'x',
			'y',
			'scale',
			'scaleX',
			'scaleY',
			'rotation',
			'skewX',
			'skewY'
		]);
	const i = new os.Circle({
		x: u(),
		y: p(),
		scale: l(),
		scaleX: o(),
		scaleY: r(),
		rotation: h(),
		skewX: a(),
		skewY: f(),
		..._
	});
	if ((Dt().add(i), !v())) {
		const e = i.getAttrs();
		i.on('transformend', () => {
			u() !== void 0 && u(e.x),
				p() !== void 0 && p(e.y),
				l() !== void 0 && l(e.scale),
				o() !== void 0 && o(e.scaleX),
				r() !== void 0 && r(e.scaleY),
				h() !== void 0 && h(e.rotation),
				a() !== void 0 && a(e.skewX),
				f() !== void 0 && f(e.skewY);
		}),
			i.on('dragend', () => {
				u() !== void 0 && u(e.x), p() !== void 0 && p(e.y);
			});
	}
	return (
		Object.keys(_)
			.filter((e) => !e.startsWith('on'))
			.forEach((e) => {
				Y(() => {
					i.setAttr(e, _[e]);
				});
			}),
		Y(() => {
			i.setAttr('x', u());
		}),
		Y(() => {
			i.setAttr('y', p());
		}),
		Y(() => {
			i.setAttr('scale', l());
		}),
		Y(() => {
			i.setAttr('scaleX', o());
		}),
		Y(() => {
			i.setAttr('scaleY', r());
		}),
		Y(() => {
			i.setAttr('rotation', h());
		}),
		Y(() => {
			i.setAttr('skewX', a());
		}),
		Y(() => {
			i.setAttr('skewY', f());
		}),
		Tt(_, i),
		At(() => {
			i.destroy();
		}),
		_t({ node: i })
	);
}
var le = {},
	fr;
function En() {
	if (fr) return le;
	(fr = 1), Object.defineProperty(le, '__esModule', { value: !0 }), (le.Ellipse = void 0);
	const t = tt(),
		n = ct(),
		v = et(),
		u = $();
	class p extends n.Shape {
		_sceneFunc(o) {
			const r = this.radiusX(),
				h = this.radiusY();
			o.beginPath(),
				o.save(),
				r !== h && o.scale(1, h / r),
				o.arc(0, 0, r, 0, Math.PI * 2, !1),
				o.restore(),
				o.closePath(),
				o.fillStrokeShape(this);
		}
		getWidth() {
			return this.radiusX() * 2;
		}
		getHeight() {
			return this.radiusY() * 2;
		}
		setWidth(o) {
			this.radiusX(o / 2);
		}
		setHeight(o) {
			this.radiusY(o / 2);
		}
	}
	return (
		(le.Ellipse = p),
		(p.prototype.className = 'Ellipse'),
		(p.prototype._centroid = !0),
		(p.prototype._attrsAffectingSize = ['radiusX', 'radiusY']),
		(0, u._registerNode)(p),
		t.Factory.addComponentsGetterSetter(p, 'radius', ['x', 'y']),
		t.Factory.addGetterSetter(p, 'radiusX', 0, (0, v.getNumberValidator)()),
		t.Factory.addGetterSetter(p, 'radiusY', 0, (0, v.getNumberValidator)()),
		le
	);
}
var hs = En();
function cs(t, n) {
	pt(n, !0);
	let v = V(n, 'staticConfig', 3, !1),
		u = V(n, 'x', 15),
		p = V(n, 'y', 15),
		l = V(n, 'scale', 15),
		o = V(n, 'scaleX', 15),
		r = V(n, 'scaleY', 15),
		h = V(n, 'rotation', 15),
		a = V(n, 'skewX', 15),
		f = V(n, 'skewY', 15),
		_ = Pt(n, [
			'$$slots',
			'$$events',
			'$$legacy',
			'staticConfig',
			'x',
			'y',
			'scale',
			'scaleX',
			'scaleY',
			'rotation',
			'skewX',
			'skewY'
		]);
	const i = new hs.Ellipse({
		x: u(),
		y: p(),
		scale: l(),
		scaleX: o(),
		scaleY: r(),
		rotation: h(),
		skewX: a(),
		skewY: f(),
		..._
	});
	if ((Dt().add(i), !v())) {
		const e = i.getAttrs();
		i.on('transformend', () => {
			u() !== void 0 && u(e.x),
				p() !== void 0 && p(e.y),
				l() !== void 0 && l(e.scale),
				o() !== void 0 && o(e.scaleX),
				r() !== void 0 && r(e.scaleY),
				h() !== void 0 && h(e.rotation),
				a() !== void 0 && a(e.skewX),
				f() !== void 0 && f(e.skewY);
		}),
			i.on('dragend', () => {
				u() !== void 0 && u(e.x), p() !== void 0 && p(e.y);
			});
	}
	return (
		Object.keys(_)
			.filter((e) => !e.startsWith('on'))
			.forEach((e) => {
				Y(() => {
					i.setAttr(e, _[e]);
				});
			}),
		Y(() => {
			i.setAttr('x', u());
		}),
		Y(() => {
			i.setAttr('y', p());
		}),
		Y(() => {
			i.setAttr('scale', l());
		}),
		Y(() => {
			i.setAttr('scaleX', o());
		}),
		Y(() => {
			i.setAttr('scaleY', r());
		}),
		Y(() => {
			i.setAttr('rotation', h());
		}),
		Y(() => {
			i.setAttr('skewX', a());
		}),
		Y(() => {
			i.setAttr('skewY', f());
		}),
		Tt(_, i),
		At(() => {
			i.destroy();
		}),
		_t({ node: i })
	);
}
var Qe = { exports: {} },
	yi = {},
	he = {},
	gr;
function si() {
	if (gr) return he;
	(gr = 1), Object.defineProperty(he, '__esModule', { value: !0 }), (he.Container = void 0);
	const t = tt(),
		n = ht(),
		v = et();
	let u = class extends n.Node {
		constructor() {
			super(...arguments), (this.children = []);
		}
		getChildren(l) {
			if (!l) return this.children || [];
			const o = this.children || [],
				r = [];
			return (
				o.forEach(function (h) {
					l(h) && r.push(h);
				}),
				r
			);
		}
		hasChildren() {
			return this.getChildren().length > 0;
		}
		removeChildren() {
			return (
				this.getChildren().forEach((l) => {
					(l.parent = null), (l.index = 0), l.remove();
				}),
				(this.children = []),
				this._requestDraw(),
				this
			);
		}
		destroyChildren() {
			return (
				this.getChildren().forEach((l) => {
					(l.parent = null), (l.index = 0), l.destroy();
				}),
				(this.children = []),
				this._requestDraw(),
				this
			);
		}
		add(...l) {
			if (l.length === 0) return this;
			if (l.length > 1) {
				for (let r = 0; r < l.length; r++) this.add(l[r]);
				return this;
			}
			const o = l[0];
			return o.getParent()
				? (o.moveTo(this), this)
				: (this._validateAdd(o),
					(o.index = this.getChildren().length),
					(o.parent = this),
					o._clearCaches(),
					this.getChildren().push(o),
					this._fire('add', { child: o }),
					this._requestDraw(),
					this);
		}
		destroy() {
			return this.hasChildren() && this.destroyChildren(), super.destroy(), this;
		}
		find(l) {
			return this._generalFind(l, !1);
		}
		findOne(l) {
			const o = this._generalFind(l, !0);
			return o.length > 0 ? o[0] : void 0;
		}
		_generalFind(l, o) {
			const r = [];
			return (
				this._descendants((h) => {
					const a = h._isMatch(l);
					return a && r.push(h), !!(a && o);
				}),
				r
			);
		}
		_descendants(l) {
			let o = !1;
			const r = this.getChildren();
			for (const h of r) {
				if (((o = l(h)), o)) return !0;
				if (h.hasChildren() && ((o = h._descendants(l)), o)) return !0;
			}
			return !1;
		}
		toObject() {
			const l = n.Node.prototype.toObject.call(this);
			return (
				(l.children = []),
				this.getChildren().forEach((o) => {
					l.children.push(o.toObject());
				}),
				l
			);
		}
		isAncestorOf(l) {
			let o = l.getParent();
			for (; o; ) {
				if (o._id === this._id) return !0;
				o = o.getParent();
			}
			return !1;
		}
		clone(l) {
			const o = n.Node.prototype.clone.call(this, l);
			return (
				this.getChildren().forEach(function (r) {
					o.add(r.clone());
				}),
				o
			);
		}
		getAllIntersections(l) {
			const o = [];
			return (
				this.find('Shape').forEach((r) => {
					r.isVisible() && r.intersects(l) && o.push(r);
				}),
				o
			);
		}
		_clearSelfAndDescendantCache(l) {
			var o;
			super._clearSelfAndDescendantCache(l),
				!this.isCached() &&
					((o = this.children) === null ||
						o === void 0 ||
						o.forEach(function (r) {
							r._clearSelfAndDescendantCache(l);
						}));
		}
		_setChildrenIndices() {
			var l;
			(l = this.children) === null ||
				l === void 0 ||
				l.forEach(function (o, r) {
					o.index = r;
				}),
				this._requestDraw();
		}
		drawScene(l, o, r) {
			const h = this.getLayer(),
				a = l || (h && h.getCanvas()),
				f = a && a.getContext(),
				_ = this._getCanvasCache(),
				i = _ && _.scene,
				e = a && a.isCache;
			if (!this.isVisible() && !e) return this;
			if (i) {
				f.save();
				const c = this.getAbsoluteTransform(o).getMatrix();
				f.transform(c[0], c[1], c[2], c[3], c[4], c[5]),
					this._drawCachedSceneCanvas(f),
					f.restore();
			} else this._drawChildren('drawScene', a, o, r);
			return this;
		}
		drawHit(l, o) {
			if (!this.shouldDrawHit(o)) return this;
			const r = this.getLayer(),
				h = l || (r && r.hitCanvas),
				a = h && h.getContext(),
				f = this._getCanvasCache();
			if (f && f.hit) {
				a.save();
				const i = this.getAbsoluteTransform(o).getMatrix();
				a.transform(i[0], i[1], i[2], i[3], i[4], i[5]), this._drawCachedHitCanvas(a), a.restore();
			} else this._drawChildren('drawHit', h, o);
			return this;
		}
		_drawChildren(l, o, r, h) {
			var a;
			const f = o && o.getContext(),
				_ = this.clipWidth(),
				i = this.clipHeight(),
				e = this.clipFunc(),
				c = (typeof _ == 'number' && typeof i == 'number') || e,
				y = r === this;
			if (c) {
				f.save();
				const k = this.getAbsoluteTransform(r);
				let d = k.getMatrix();
				f.transform(d[0], d[1], d[2], d[3], d[4], d[5]), f.beginPath();
				let s;
				if (e) s = e.call(this, f, this);
				else {
					const m = this.clipX(),
						w = this.clipY();
					f.rect(m || 0, w || 0, _, i);
				}
				f.clip.apply(f, s),
					(d = k.copy().invert().getMatrix()),
					f.transform(d[0], d[1], d[2], d[3], d[4], d[5]);
			}
			const b = !y && this.globalCompositeOperation() !== 'source-over' && l === 'drawScene';
			b && (f.save(), f._applyGlobalCompositeOperation(this)),
				(a = this.children) === null ||
					a === void 0 ||
					a.forEach(function (k) {
						k[l](o, r, h);
					}),
				b && f.restore(),
				c && f.restore();
		}
		getClientRect(l = {}) {
			var o;
			const r = l.skipTransform,
				h = l.relativeTo;
			let a,
				f,
				_,
				i,
				e = { x: 1 / 0, y: 1 / 0, width: 0, height: 0 };
			const c = this;
			(o = this.children) === null ||
				o === void 0 ||
				o.forEach(function (k) {
					if (!k.visible()) return;
					const d = k.getClientRect({
						relativeTo: c,
						skipShadow: l.skipShadow,
						skipStroke: l.skipStroke
					});
					(d.width === 0 && d.height === 0) ||
						(a === void 0
							? ((a = d.x), (f = d.y), (_ = d.x + d.width), (i = d.y + d.height))
							: ((a = Math.min(a, d.x)),
								(f = Math.min(f, d.y)),
								(_ = Math.max(_, d.x + d.width)),
								(i = Math.max(i, d.y + d.height))));
				});
			const y = this.find('Shape');
			let b = !1;
			for (let k = 0; k < y.length; k++)
				if (y[k]._isVisible(this)) {
					b = !0;
					break;
				}
			return (
				b && a !== void 0
					? (e = { x: a, y: f, width: _ - a, height: i - f })
					: (e = { x: 0, y: 0, width: 0, height: 0 }),
				r ? e : this._transformedRect(e, h)
			);
		}
	};
	return (
		(he.Container = u),
		t.Factory.addComponentsGetterSetter(u, 'clip', ['x', 'y', 'width', 'height']),
		t.Factory.addGetterSetter(u, 'clipX', void 0, (0, v.getNumberValidator)()),
		t.Factory.addGetterSetter(u, 'clipY', void 0, (0, v.getNumberValidator)()),
		t.Factory.addGetterSetter(u, 'clipWidth', void 0, (0, v.getNumberValidator)()),
		t.Factory.addGetterSetter(u, 'clipHeight', void 0, (0, v.getNumberValidator)()),
		t.Factory.addGetterSetter(u, 'clipFunc'),
		he
	);
}
var vi = {},
	pr;
function Rn() {
	return (
		pr ||
			((pr = 1),
			(function (t) {
				Object.defineProperty(t, '__esModule', { value: !0 }), (t.Stage = t.stages = void 0);
				const n = ot(),
					v = tt(),
					u = si(),
					p = $(),
					l = ai(),
					o = Gi(),
					r = $(),
					h = xn(),
					a = 'Stage',
					f = 'string',
					_ = 'px',
					i = 'mouseout',
					e = 'mouseleave',
					c = 'mouseover',
					y = 'mouseenter',
					b = 'mousemove',
					k = 'mousedown',
					d = 'mouseup',
					s = 'pointermove',
					m = 'pointerdown',
					w = 'pointerup',
					A = 'pointercancel',
					M = 'lostpointercapture',
					T = 'pointerout',
					P = 'pointerleave',
					x = 'pointerover',
					E = 'pointerenter',
					N = 'contextmenu',
					g = 'touchstart',
					C = 'touchend',
					S = 'touchmove',
					R = 'touchcancel',
					F = 'wheel',
					O = 5,
					I = [
						[y, '_pointerenter'],
						[k, '_pointerdown'],
						[b, '_pointermove'],
						[d, '_pointerup'],
						[e, '_pointerleave'],
						[g, '_pointerdown'],
						[S, '_pointermove'],
						[C, '_pointerup'],
						[R, '_pointercancel'],
						[c, '_pointerover'],
						[F, '_wheel'],
						[N, '_contextmenu'],
						[m, '_pointerdown'],
						[s, '_pointermove'],
						[w, '_pointerup'],
						[A, '_pointercancel'],
						[M, '_lostpointercapture']
					],
					L = {
						mouse: {
							[T]: i,
							[P]: e,
							[x]: c,
							[E]: y,
							[s]: b,
							[m]: k,
							[w]: d,
							[A]: 'mousecancel',
							pointerclick: 'click',
							pointerdblclick: 'dblclick'
						},
						touch: {
							[T]: 'touchout',
							[P]: 'touchleave',
							[x]: 'touchover',
							[E]: 'touchenter',
							[s]: S,
							[m]: g,
							[w]: C,
							[A]: R,
							pointerclick: 'tap',
							pointerdblclick: 'dbltap'
						},
						pointer: {
							[T]: T,
							[P]: P,
							[x]: x,
							[E]: E,
							[s]: s,
							[m]: m,
							[w]: w,
							[A]: A,
							pointerclick: 'pointerclick',
							pointerdblclick: 'pointerdblclick'
						}
					},
					U = (j) =>
						j.indexOf('pointer') >= 0 ? 'pointer' : j.indexOf('touch') >= 0 ? 'touch' : 'mouse',
					W = (j) => {
						const G = U(j);
						if (G === 'pointer') return p.Konva.pointerEventsEnabled && L.pointer;
						if (G === 'touch') return L.touch;
						if (G === 'mouse') return L.mouse;
					};
				function B(j = {}) {
					return (
						(j.clipFunc || j.clipWidth || j.clipHeight) &&
							n.Util.warn('Stage does not support clipping. Please use clip for Layers or Groups.'),
						j
					);
				}
				const H =
					'Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);';
				t.stages = [];
				class z extends u.Container {
					constructor(G) {
						super(B(G)),
							(this._pointerPositions = []),
							(this._changedPointerPositions = []),
							this._buildDOM(),
							this._bindContentEvents(),
							t.stages.push(this),
							this.on('widthChange.konva heightChange.konva', this._resizeDOM),
							this.on('visibleChange.konva', this._checkVisibility),
							this.on('clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva', () => {
								B(this.attrs);
							}),
							this._checkVisibility();
					}
					_validateAdd(G) {
						const D = G.getType() === 'Layer',
							X = G.getType() === 'FastLayer';
						D || X || n.Util.throw('You may only add layers to the stage.');
					}
					_checkVisibility() {
						if (!this.content) return;
						const G = this.visible() ? '' : 'none';
						this.content.style.display = G;
					}
					setContainer(G) {
						if (typeof G === f) {
							if (G.charAt(0) === '.') {
								const X = G.slice(1);
								G = document.getElementsByClassName(X)[0];
							} else {
								var D;
								G.charAt(0) !== '#' ? (D = G) : (D = G.slice(1)), (G = document.getElementById(D));
							}
							if (!G) throw 'Can not find container in document with id ' + D;
						}
						return (
							this._setAttr('container', G),
							this.content &&
								(this.content.parentElement && this.content.parentElement.removeChild(this.content),
								G.appendChild(this.content)),
							this
						);
					}
					shouldDrawHit() {
						return !0;
					}
					clear() {
						const G = this.children,
							D = G.length;
						for (let X = 0; X < D; X++) G[X].clear();
						return this;
					}
					clone(G) {
						return (
							G || (G = {}),
							(G.container = typeof document < 'u' && document.createElement('div')),
							u.Container.prototype.clone.call(this, G)
						);
					}
					destroy() {
						super.destroy();
						const G = this.content;
						G && n.Util._isInDocument(G) && this.container().removeChild(G);
						const D = t.stages.indexOf(this);
						return (
							D > -1 && t.stages.splice(D, 1),
							n.Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas),
							this
						);
					}
					getPointerPosition() {
						const G = this._pointerPositions[0] || this._changedPointerPositions[0];
						return G ? { x: G.x, y: G.y } : (n.Util.warn(H), null);
					}
					_getPointerById(G) {
						return this._pointerPositions.find((D) => D.id === G);
					}
					getPointersPositions() {
						return this._pointerPositions;
					}
					getStage() {
						return this;
					}
					getContent() {
						return this.content;
					}
					_toKonvaCanvas(G) {
						(G = G || {}),
							(G.x = G.x || 0),
							(G.y = G.y || 0),
							(G.width = G.width || this.width()),
							(G.height = G.height || this.height());
						const D = new l.SceneCanvas({
								width: G.width,
								height: G.height,
								pixelRatio: G.pixelRatio || 1
							}),
							X = D.getContext()._context,
							q = this.children;
						return (
							(G.x || G.y) && X.translate(-1 * G.x, -1 * G.y),
							q.forEach(function (K) {
								if (!K.isVisible()) return;
								const Q = K._toKonvaCanvas(G);
								X.drawImage(
									Q._canvas,
									G.x,
									G.y,
									Q.getWidth() / Q.getPixelRatio(),
									Q.getHeight() / Q.getPixelRatio()
								);
							}),
							D
						);
					}
					getIntersection(G) {
						if (!G) return null;
						const D = this.children,
							X = D.length,
							q = X - 1;
						for (let K = q; K >= 0; K--) {
							const Q = D[K].getIntersection(G);
							if (Q) return Q;
						}
						return null;
					}
					_resizeDOM() {
						const G = this.width(),
							D = this.height();
						this.content &&
							((this.content.style.width = G + _), (this.content.style.height = D + _)),
							this.bufferCanvas.setSize(G, D),
							this.bufferHitCanvas.setSize(G, D),
							this.children.forEach((X) => {
								X.setSize({ width: G, height: D }), X.draw();
							});
					}
					add(G, ...D) {
						if (arguments.length > 1) {
							for (let q = 0; q < arguments.length; q++) this.add(arguments[q]);
							return this;
						}
						super.add(G);
						const X = this.children.length;
						return (
							X > O &&
								n.Util.warn(
									'The stage has ' +
										X +
										' layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group.'
								),
							G.setSize({ width: this.width(), height: this.height() }),
							G.draw(),
							p.Konva.isBrowser && this.content.appendChild(G.canvas._canvas),
							this
						);
					}
					getParent() {
						return null;
					}
					getLayer() {
						return null;
					}
					hasPointerCapture(G) {
						return h.hasPointerCapture(G, this);
					}
					setPointerCapture(G) {
						h.setPointerCapture(G, this);
					}
					releaseCapture(G) {
						h.releaseCapture(G, this);
					}
					getLayers() {
						return this.children;
					}
					_bindContentEvents() {
						p.Konva.isBrowser &&
							I.forEach(([G, D]) => {
								this.content.addEventListener(
									G,
									(X) => {
										this[D](X);
									},
									{ passive: !1 }
								);
							});
					}
					_pointerenter(G) {
						this.setPointersPositions(G);
						const D = W(G.type);
						D && this._fire(D.pointerenter, { evt: G, target: this, currentTarget: this });
					}
					_pointerover(G) {
						this.setPointersPositions(G);
						const D = W(G.type);
						D && this._fire(D.pointerover, { evt: G, target: this, currentTarget: this });
					}
					_getTargetShape(G) {
						let D = this[G + 'targetShape'];
						return D && !D.getStage() && (D = null), D;
					}
					_pointerleave(G) {
						const D = W(G.type),
							X = U(G.type);
						if (!D) return;
						this.setPointersPositions(G);
						const q = this._getTargetShape(X),
							K = !(p.Konva.isDragging() || p.Konva.isTransforming()) || p.Konva.hitOnDragEnabled;
						q && K
							? (q._fireAndBubble(D.pointerout, { evt: G }),
								q._fireAndBubble(D.pointerleave, { evt: G }),
								this._fire(D.pointerleave, { evt: G, target: this, currentTarget: this }),
								(this[X + 'targetShape'] = null))
							: K &&
								(this._fire(D.pointerleave, { evt: G, target: this, currentTarget: this }),
								this._fire(D.pointerout, { evt: G, target: this, currentTarget: this })),
							(this.pointerPos = null),
							(this._pointerPositions = []);
					}
					_pointerdown(G) {
						const D = W(G.type),
							X = U(G.type);
						if (!D) return;
						this.setPointersPositions(G);
						let q = !1;
						this._changedPointerPositions.forEach((K) => {
							const Q = this.getIntersection(K);
							if (
								((o.DD.justDragged = !1),
								(p.Konva['_' + X + 'ListenClick'] = !0),
								!Q || !Q.isListening())
							) {
								this[X + 'ClickStartShape'] = void 0;
								return;
							}
							p.Konva.capturePointerEventsEnabled && Q.setPointerCapture(K.id),
								(this[X + 'ClickStartShape'] = Q),
								Q._fireAndBubble(D.pointerdown, { evt: G, pointerId: K.id }),
								(q = !0);
							const it = G.type.indexOf('touch') >= 0;
							Q.preventDefault() && G.cancelable && it && G.preventDefault();
						}),
							q ||
								this._fire(D.pointerdown, {
									evt: G,
									target: this,
									currentTarget: this,
									pointerId: this._pointerPositions[0].id
								});
					}
					_pointermove(G) {
						const D = W(G.type),
							X = U(G.type);
						if (
							!D ||
							(p.Konva.isDragging() &&
								o.DD.node.preventDefault() &&
								G.cancelable &&
								G.preventDefault(),
							this.setPointersPositions(G),
							!(!(p.Konva.isDragging() || p.Konva.isTransforming()) || p.Konva.hitOnDragEnabled))
						)
							return;
						const K = {};
						let Q = !1;
						const it = this._getTargetShape(X);
						this._changedPointerPositions.forEach((rt) => {
							const Z = h.getCapturedShape(rt.id) || this.getIntersection(rt),
								dt = rt.id,
								nt = { evt: G, pointerId: dt },
								lt = it !== Z;
							if (
								(lt &&
									it &&
									(it._fireAndBubble(D.pointerout, { ...nt }, Z),
									it._fireAndBubble(D.pointerleave, { ...nt }, Z)),
								Z)
							) {
								if (K[Z._id]) return;
								K[Z._id] = !0;
							}
							Z && Z.isListening()
								? ((Q = !0),
									lt &&
										(Z._fireAndBubble(D.pointerover, { ...nt }, it),
										Z._fireAndBubble(D.pointerenter, { ...nt }, it),
										(this[X + 'targetShape'] = Z)),
									Z._fireAndBubble(D.pointermove, { ...nt }))
								: it &&
									(this._fire(D.pointerover, {
										evt: G,
										target: this,
										currentTarget: this,
										pointerId: dt
									}),
									(this[X + 'targetShape'] = null));
						}),
							Q ||
								this._fire(D.pointermove, {
									evt: G,
									target: this,
									currentTarget: this,
									pointerId: this._changedPointerPositions[0].id
								});
					}
					_pointerup(G) {
						const D = W(G.type),
							X = U(G.type);
						if (!D) return;
						this.setPointersPositions(G);
						const q = this[X + 'ClickStartShape'],
							K = this[X + 'ClickEndShape'],
							Q = {};
						let it = !1;
						this._changedPointerPositions.forEach((rt) => {
							const Z = h.getCapturedShape(rt.id) || this.getIntersection(rt);
							if (Z) {
								if ((Z.releaseCapture(rt.id), Q[Z._id])) return;
								Q[Z._id] = !0;
							}
							const dt = rt.id,
								nt = { evt: G, pointerId: dt };
							let lt = !1;
							p.Konva['_' + X + 'InDblClickWindow']
								? ((lt = !0), clearTimeout(this[X + 'DblTimeout']))
								: o.DD.justDragged ||
									((p.Konva['_' + X + 'InDblClickWindow'] = !0),
									clearTimeout(this[X + 'DblTimeout'])),
								(this[X + 'DblTimeout'] = setTimeout(function () {
									p.Konva['_' + X + 'InDblClickWindow'] = !1;
								}, p.Konva.dblClickWindow)),
								Z && Z.isListening()
									? ((it = !0),
										(this[X + 'ClickEndShape'] = Z),
										Z._fireAndBubble(D.pointerup, { ...nt }),
										p.Konva['_' + X + 'ListenClick'] &&
											q &&
											q === Z &&
											(Z._fireAndBubble(D.pointerclick, { ...nt }),
											lt && K && K === Z && Z._fireAndBubble(D.pointerdblclick, { ...nt })))
									: ((this[X + 'ClickEndShape'] = null),
										p.Konva['_' + X + 'ListenClick'] &&
											this._fire(D.pointerclick, {
												evt: G,
												target: this,
												currentTarget: this,
												pointerId: dt
											}),
										lt &&
											this._fire(D.pointerdblclick, {
												evt: G,
												target: this,
												currentTarget: this,
												pointerId: dt
											}));
						}),
							it ||
								this._fire(D.pointerup, {
									evt: G,
									target: this,
									currentTarget: this,
									pointerId: this._changedPointerPositions[0].id
								}),
							(p.Konva['_' + X + 'ListenClick'] = !1),
							G.cancelable && X !== 'touch' && X !== 'pointer' && G.preventDefault();
					}
					_contextmenu(G) {
						this.setPointersPositions(G);
						const D = this.getIntersection(this.getPointerPosition());
						D && D.isListening()
							? D._fireAndBubble(N, { evt: G })
							: this._fire(N, { evt: G, target: this, currentTarget: this });
					}
					_wheel(G) {
						this.setPointersPositions(G);
						const D = this.getIntersection(this.getPointerPosition());
						D && D.isListening()
							? D._fireAndBubble(F, { evt: G })
							: this._fire(F, { evt: G, target: this, currentTarget: this });
					}
					_pointercancel(G) {
						this.setPointersPositions(G);
						const D =
							h.getCapturedShape(G.pointerId) || this.getIntersection(this.getPointerPosition());
						D && D._fireAndBubble(w, h.createEvent(G)), h.releaseCapture(G.pointerId);
					}
					_lostpointercapture(G) {
						h.releaseCapture(G.pointerId);
					}
					setPointersPositions(G) {
						const D = this._getContentPosition();
						let X = null,
							q = null;
						(G = G || window.event),
							G.touches !== void 0
								? ((this._pointerPositions = []),
									(this._changedPointerPositions = []),
									Array.prototype.forEach.call(G.touches, (K) => {
										this._pointerPositions.push({
											id: K.identifier,
											x: (K.clientX - D.left) / D.scaleX,
											y: (K.clientY - D.top) / D.scaleY
										});
									}),
									Array.prototype.forEach.call(G.changedTouches || G.touches, (K) => {
										this._changedPointerPositions.push({
											id: K.identifier,
											x: (K.clientX - D.left) / D.scaleX,
											y: (K.clientY - D.top) / D.scaleY
										});
									}))
								: ((X = (G.clientX - D.left) / D.scaleX),
									(q = (G.clientY - D.top) / D.scaleY),
									(this.pointerPos = { x: X, y: q }),
									(this._pointerPositions = [{ x: X, y: q, id: n.Util._getFirstPointerId(G) }]),
									(this._changedPointerPositions = [
										{ x: X, y: q, id: n.Util._getFirstPointerId(G) }
									]));
					}
					_setPointerPosition(G) {
						n.Util.warn(
							'Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'
						),
							this.setPointersPositions(G);
					}
					_getContentPosition() {
						if (!this.content || !this.content.getBoundingClientRect)
							return { top: 0, left: 0, scaleX: 1, scaleY: 1 };
						const G = this.content.getBoundingClientRect();
						return {
							top: G.top,
							left: G.left,
							scaleX: G.width / this.content.clientWidth || 1,
							scaleY: G.height / this.content.clientHeight || 1
						};
					}
					_buildDOM() {
						if (
							((this.bufferCanvas = new l.SceneCanvas({
								width: this.width(),
								height: this.height()
							})),
							(this.bufferHitCanvas = new l.HitCanvas({
								pixelRatio: 1,
								width: this.width(),
								height: this.height()
							})),
							!p.Konva.isBrowser)
						)
							return;
						const G = this.container();
						if (!G) throw 'Stage has no container. A container is required.';
						(G.innerHTML = ''),
							(this.content = document.createElement('div')),
							(this.content.style.position = 'relative'),
							(this.content.style.userSelect = 'none'),
							(this.content.className = 'konvajs-content'),
							this.content.setAttribute('role', 'presentation'),
							G.appendChild(this.content),
							this._resizeDOM();
					}
					cache() {
						return (
							n.Util.warn(
								'Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.'
							),
							this
						);
					}
					clearCache() {
						return this;
					}
					batchDraw() {
						return (
							this.getChildren().forEach(function (G) {
								G.batchDraw();
							}),
							this
						);
					}
				}
				(t.Stage = z),
					(z.prototype.nodeType = a),
					(0, r._registerNode)(z),
					v.Factory.addGetterSetter(z, 'container'),
					p.Konva.isBrowser &&
						document.addEventListener('visibilitychange', () => {
							t.stages.forEach((j) => {
								j.batchDraw();
							});
						});
			})(vi)),
		vi
	);
}
var ce = {},
	_r;
function Fn() {
	if (_r) return ce;
	(_r = 1), Object.defineProperty(ce, '__esModule', { value: !0 }), (ce.Layer = void 0);
	const t = ot(),
		n = si(),
		v = ht(),
		u = tt(),
		p = ai(),
		l = et(),
		o = ct(),
		r = $(),
		h = '#',
		a = 'beforeDraw',
		f = 'draw',
		_ = [
			{ x: 0, y: 0 },
			{ x: -1, y: -1 },
			{ x: 1, y: -1 },
			{ x: 1, y: 1 },
			{ x: -1, y: 1 }
		],
		i = _.length;
	class e extends n.Container {
		constructor(y) {
			super(y),
				(this.canvas = new p.SceneCanvas()),
				(this.hitCanvas = new p.HitCanvas({ pixelRatio: 1 })),
				(this._waitingForDraw = !1),
				this.on('visibleChange.konva', this._checkVisibility),
				this._checkVisibility(),
				this.on('imageSmoothingEnabledChange.konva', this._setSmoothEnabled),
				this._setSmoothEnabled();
		}
		createPNGStream() {
			return this.canvas._canvas.createPNGStream();
		}
		getCanvas() {
			return this.canvas;
		}
		getNativeCanvasElement() {
			return this.canvas._canvas;
		}
		getHitCanvas() {
			return this.hitCanvas;
		}
		getContext() {
			return this.getCanvas().getContext();
		}
		clear(y) {
			return this.getContext().clear(y), this.getHitCanvas().getContext().clear(y), this;
		}
		setZIndex(y) {
			super.setZIndex(y);
			const b = this.getStage();
			return (
				b &&
					b.content &&
					(b.content.removeChild(this.getNativeCanvasElement()),
					y < b.children.length - 1
						? b.content.insertBefore(
								this.getNativeCanvasElement(),
								b.children[y + 1].getCanvas()._canvas
							)
						: b.content.appendChild(this.getNativeCanvasElement())),
				this
			);
		}
		moveToTop() {
			v.Node.prototype.moveToTop.call(this);
			const y = this.getStage();
			return (
				y &&
					y.content &&
					(y.content.removeChild(this.getNativeCanvasElement()),
					y.content.appendChild(this.getNativeCanvasElement())),
				!0
			);
		}
		moveUp() {
			if (!v.Node.prototype.moveUp.call(this)) return !1;
			const b = this.getStage();
			return !b || !b.content
				? !1
				: (b.content.removeChild(this.getNativeCanvasElement()),
					this.index < b.children.length - 1
						? b.content.insertBefore(
								this.getNativeCanvasElement(),
								b.children[this.index + 1].getCanvas()._canvas
							)
						: b.content.appendChild(this.getNativeCanvasElement()),
					!0);
		}
		moveDown() {
			if (v.Node.prototype.moveDown.call(this)) {
				const y = this.getStage();
				if (y) {
					const b = y.children;
					y.content &&
						(y.content.removeChild(this.getNativeCanvasElement()),
						y.content.insertBefore(
							this.getNativeCanvasElement(),
							b[this.index + 1].getCanvas()._canvas
						));
				}
				return !0;
			}
			return !1;
		}
		moveToBottom() {
			if (v.Node.prototype.moveToBottom.call(this)) {
				const y = this.getStage();
				if (y) {
					const b = y.children;
					y.content &&
						(y.content.removeChild(this.getNativeCanvasElement()),
						y.content.insertBefore(this.getNativeCanvasElement(), b[1].getCanvas()._canvas));
				}
				return !0;
			}
			return !1;
		}
		getLayer() {
			return this;
		}
		remove() {
			const y = this.getNativeCanvasElement();
			return (
				v.Node.prototype.remove.call(this),
				y && y.parentNode && t.Util._isInDocument(y) && y.parentNode.removeChild(y),
				this
			);
		}
		getStage() {
			return this.parent;
		}
		setSize({ width: y, height: b }) {
			return (
				this.canvas.setSize(y, b), this.hitCanvas.setSize(y, b), this._setSmoothEnabled(), this
			);
		}
		_validateAdd(y) {
			const b = y.getType();
			b !== 'Group' &&
				b !== 'Shape' &&
				t.Util.throw('You may only add groups and shapes to a layer.');
		}
		_toKonvaCanvas(y) {
			return (
				(y = y || {}),
				(y.width = y.width || this.getWidth()),
				(y.height = y.height || this.getHeight()),
				(y.x = y.x !== void 0 ? y.x : this.x()),
				(y.y = y.y !== void 0 ? y.y : this.y()),
				v.Node.prototype._toKonvaCanvas.call(this, y)
			);
		}
		_checkVisibility() {
			this.visible()
				? (this.canvas._canvas.style.display = 'block')
				: (this.canvas._canvas.style.display = 'none');
		}
		_setSmoothEnabled() {
			this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
		}
		getWidth() {
			if (this.parent) return this.parent.width();
		}
		setWidth() {
			t.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
		}
		getHeight() {
			if (this.parent) return this.parent.height();
		}
		setHeight() {
			t.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
		}
		batchDraw() {
			return (
				this._waitingForDraw ||
					((this._waitingForDraw = !0),
					t.Util.requestAnimFrame(() => {
						this.draw(), (this._waitingForDraw = !1);
					})),
				this
			);
		}
		getIntersection(y) {
			if (!this.isListening() || !this.isVisible()) return null;
			let b = 1,
				k = !1;
			for (;;) {
				for (let d = 0; d < i; d++) {
					const s = _[d],
						m = this._getIntersection({ x: y.x + s.x * b, y: y.y + s.y * b }),
						w = m.shape;
					if (w) return w;
					if (((k = !!m.antialiased), !m.antialiased)) break;
				}
				if (k) b += 1;
				else return null;
			}
		}
		_getIntersection(y) {
			const b = this.hitCanvas.pixelRatio,
				k = this.hitCanvas.context.getImageData(
					Math.round(y.x * b),
					Math.round(y.y * b),
					1,
					1
				).data,
				d = k[3];
			if (d === 255) {
				const s = t.Util._rgbToHex(k[0], k[1], k[2]),
					m = o.shapes[h + s];
				return m ? { shape: m } : { antialiased: !0 };
			} else if (d > 0) return { antialiased: !0 };
			return {};
		}
		drawScene(y, b) {
			const k = this.getLayer(),
				d = y || (k && k.getCanvas());
			return (
				this._fire(a, { node: this }),
				this.clearBeforeDraw() && d.getContext().clear(),
				n.Container.prototype.drawScene.call(this, d, b),
				this._fire(f, { node: this }),
				this
			);
		}
		drawHit(y, b) {
			const k = this.getLayer(),
				d = y || (k && k.hitCanvas);
			return (
				k && k.clearBeforeDraw() && k.getHitCanvas().getContext().clear(),
				n.Container.prototype.drawHit.call(this, d, b),
				this
			);
		}
		enableHitGraph() {
			return this.hitGraphEnabled(!0), this;
		}
		disableHitGraph() {
			return this.hitGraphEnabled(!1), this;
		}
		setHitGraphEnabled(y) {
			t.Util.warn('hitGraphEnabled method is deprecated. Please use layer.listening() instead.'),
				this.listening(y);
		}
		getHitGraphEnabled(y) {
			return (
				t.Util.warn('hitGraphEnabled method is deprecated. Please use layer.listening() instead.'),
				this.listening()
			);
		}
		toggleHitCanvas() {
			if (!this.parent || !this.parent.content) return;
			const y = this.parent;
			!!this.hitCanvas._canvas.parentNode
				? y.content.removeChild(this.hitCanvas._canvas)
				: y.content.appendChild(this.hitCanvas._canvas);
		}
		destroy() {
			return (
				t.Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas),
				super.destroy()
			);
		}
	}
	return (
		(ce.Layer = e),
		(e.prototype.nodeType = 'Layer'),
		(0, r._registerNode)(e),
		u.Factory.addGetterSetter(e, 'imageSmoothingEnabled', !0),
		u.Factory.addGetterSetter(e, 'clearBeforeDraw', !0),
		u.Factory.addGetterSetter(e, 'hitGraphEnabled', !0, (0, l.getBooleanValidator)()),
		ce
	);
}
var de = {},
	mr;
function ds() {
	if (mr) return de;
	(mr = 1), Object.defineProperty(de, '__esModule', { value: !0 }), (de.FastLayer = void 0);
	const t = ot(),
		n = Fn(),
		v = $();
	let u = class extends n.Layer {
		constructor(l) {
			super(l),
				this.listening(!1),
				t.Util.warn(
					'Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.'
				);
		}
	};
	return (de.FastLayer = u), (u.prototype.nodeType = 'FastLayer'), (0, v._registerNode)(u), de;
}
var ue = {},
	yr;
function Oi() {
	if (yr) return ue;
	(yr = 1), Object.defineProperty(ue, '__esModule', { value: !0 }), (ue.Group = void 0);
	const t = ot(),
		n = si(),
		v = $();
	let u = class extends n.Container {
		_validateAdd(l) {
			const o = l.getType();
			o !== 'Group' &&
				o !== 'Shape' &&
				t.Util.throw('You may only add groups and shapes to groups.');
		}
	};
	return (ue.Group = u), (u.prototype.nodeType = 'Group'), (0, v._registerNode)(u), ue;
}
var fe = {},
	vr;
function Li() {
	if (vr) return fe;
	(vr = 1), Object.defineProperty(fe, '__esModule', { value: !0 }), (fe.Animation = void 0);
	const t = $(),
		n = ot(),
		v = (function () {
			return t.glob.performance && t.glob.performance.now
				? function () {
						return t.glob.performance.now();
					}
				: function () {
						return new Date().getTime();
					};
		})();
	let u = class jt {
		constructor(l, o) {
			(this.id = jt.animIdCounter++),
				(this.frame = { time: 0, timeDiff: 0, lastTime: v(), frameRate: 0 }),
				(this.func = l),
				this.setLayers(o);
		}
		setLayers(l) {
			let o = [];
			return l && (o = Array.isArray(l) ? l : [l]), (this.layers = o), this;
		}
		getLayers() {
			return this.layers;
		}
		addLayer(l) {
			const o = this.layers,
				r = o.length;
			for (let h = 0; h < r; h++) if (o[h]._id === l._id) return !1;
			return this.layers.push(l), !0;
		}
		isRunning() {
			const o = jt.animations,
				r = o.length;
			for (let h = 0; h < r; h++) if (o[h].id === this.id) return !0;
			return !1;
		}
		start() {
			return (
				this.stop(),
				(this.frame.timeDiff = 0),
				(this.frame.lastTime = v()),
				jt._addAnimation(this),
				this
			);
		}
		stop() {
			return jt._removeAnimation(this), this;
		}
		_updateFrameObject(l) {
			(this.frame.timeDiff = l - this.frame.lastTime),
				(this.frame.lastTime = l),
				(this.frame.time += this.frame.timeDiff),
				(this.frame.frameRate = 1e3 / this.frame.timeDiff);
		}
		static _addAnimation(l) {
			this.animations.push(l), this._handleAnimation();
		}
		static _removeAnimation(l) {
			const o = l.id,
				r = this.animations,
				h = r.length;
			for (let a = 0; a < h; a++)
				if (r[a].id === o) {
					this.animations.splice(a, 1);
					break;
				}
		}
		static _runFrames() {
			const l = {},
				o = this.animations;
			for (let r = 0; r < o.length; r++) {
				const h = o[r],
					a = h.layers,
					f = h.func;
				h._updateFrameObject(v());
				const _ = a.length;
				let i;
				if ((f ? (i = f.call(h, h.frame) !== !1) : (i = !0), !!i))
					for (let e = 0; e < _; e++) {
						const c = a[e];
						c._id !== void 0 && (l[c._id] = c);
					}
			}
			for (const r in l) l.hasOwnProperty(r) && l[r].batchDraw();
		}
		static _animationLoop() {
			const l = jt;
			l.animations.length
				? (l._runFrames(), n.Util.requestAnimFrame(l._animationLoop))
				: (l.animRunning = !1);
		}
		static _handleAnimation() {
			this.animRunning || ((this.animRunning = !0), n.Util.requestAnimFrame(this._animationLoop));
		}
	};
	return (fe.Animation = u), (u.animations = []), (u.animIdCounter = 0), (u.animRunning = !1), fe;
}
var bi = {},
	br;
function us() {
	return (
		br ||
			((br = 1),
			(function (t) {
				Object.defineProperty(t, '__esModule', { value: !0 }), (t.Easings = t.Tween = void 0);
				const n = ot(),
					v = Li(),
					u = ht(),
					p = $(),
					l = { node: 1, duration: 1, easing: 1, onFinish: 1, yoyo: 1 },
					o = 1,
					r = 2,
					h = 3,
					a = ['fill', 'stroke', 'shadowColor'];
				let f = 0;
				class _ {
					constructor(c, y, b, k, d, s, m) {
						(this.prop = c),
							(this.propFunc = y),
							(this.begin = k),
							(this._pos = k),
							(this.duration = s),
							(this._change = 0),
							(this.prevPos = 0),
							(this.yoyo = m),
							(this._time = 0),
							(this._position = 0),
							(this._startTime = 0),
							(this._finish = 0),
							(this.func = b),
							(this._change = d - this.begin),
							this.pause();
					}
					fire(c) {
						const y = this[c];
						y && y();
					}
					setTime(c) {
						c > this.duration
							? this.yoyo
								? ((this._time = this.duration), this.reverse())
								: this.finish()
							: c < 0
								? this.yoyo
									? ((this._time = 0), this.play())
									: this.reset()
								: ((this._time = c), this.update());
					}
					getTime() {
						return this._time;
					}
					setPosition(c) {
						(this.prevPos = this._pos), this.propFunc(c), (this._pos = c);
					}
					getPosition(c) {
						return (
							c === void 0 && (c = this._time),
							this.func(c, this.begin, this._change, this.duration)
						);
					}
					play() {
						(this.state = r),
							(this._startTime = this.getTimer() - this._time),
							this.onEnterFrame(),
							this.fire('onPlay');
					}
					reverse() {
						(this.state = h),
							(this._time = this.duration - this._time),
							(this._startTime = this.getTimer() - this._time),
							this.onEnterFrame(),
							this.fire('onReverse');
					}
					seek(c) {
						this.pause(), (this._time = c), this.update(), this.fire('onSeek');
					}
					reset() {
						this.pause(), (this._time = 0), this.update(), this.fire('onReset');
					}
					finish() {
						this.pause(), (this._time = this.duration), this.update(), this.fire('onFinish');
					}
					update() {
						this.setPosition(this.getPosition(this._time)), this.fire('onUpdate');
					}
					onEnterFrame() {
						const c = this.getTimer() - this._startTime;
						this.state === r
							? this.setTime(c)
							: this.state === h && this.setTime(this.duration - c);
					}
					pause() {
						(this.state = o), this.fire('onPause');
					}
					getTimer() {
						return new Date().getTime();
					}
				}
				class i {
					constructor(c) {
						const y = this,
							b = c.node,
							k = b._id,
							d = c.easing || t.Easings.Linear,
							s = !!c.yoyo;
						let m, w;
						typeof c.duration > 'u' ? (m = 0.3) : c.duration === 0 ? (m = 0.001) : (m = c.duration),
							(this.node = b),
							(this._id = f++);
						const A = b.getLayer() || (b instanceof p.Konva.Stage ? b.getLayers() : null);
						A ||
							n.Util.error(
								'Tween constructor have `node` that is not in a layer. Please add node into layer first.'
							),
							(this.anim = new v.Animation(function () {
								y.tween.onEnterFrame();
							}, A)),
							(this.tween = new _(
								w,
								function (M) {
									y._tweenFunc(M);
								},
								d,
								0,
								1,
								m * 1e3,
								s
							)),
							this._addListeners(),
							i.attrs[k] || (i.attrs[k] = {}),
							i.attrs[k][this._id] || (i.attrs[k][this._id] = {}),
							i.tweens[k] || (i.tweens[k] = {});
						for (w in c) l[w] === void 0 && this._addAttr(w, c[w]);
						this.reset(),
							(this.onFinish = c.onFinish),
							(this.onReset = c.onReset),
							(this.onUpdate = c.onUpdate);
					}
					_addAttr(c, y) {
						const b = this.node,
							k = b._id;
						let d, s, m, w, A;
						const M = i.tweens[k][c];
						M && delete i.attrs[k][M][c];
						let T = b.getAttr(c);
						if (n.Util._isArray(y))
							if (
								((d = []),
								(s = Math.max(y.length, T.length)),
								c === 'points' &&
									y.length !== T.length &&
									(y.length > T.length
										? ((w = T), (T = n.Util._prepareArrayForTween(T, y, b.closed())))
										: ((m = y), (y = n.Util._prepareArrayForTween(y, T, b.closed())))),
								c.indexOf('fill') === 0)
							)
								for (let P = 0; P < s; P++)
									if (P % 2 === 0) d.push(y[P] - T[P]);
									else {
										const x = n.Util.colorToRGBA(T[P]);
										(A = n.Util.colorToRGBA(y[P])),
											(T[P] = x),
											d.push({ r: A.r - x.r, g: A.g - x.g, b: A.b - x.b, a: A.a - x.a });
									}
							else for (let P = 0; P < s; P++) d.push(y[P] - T[P]);
						else
							a.indexOf(c) !== -1
								? ((T = n.Util.colorToRGBA(T)),
									(A = n.Util.colorToRGBA(y)),
									(d = { r: A.r - T.r, g: A.g - T.g, b: A.b - T.b, a: A.a - T.a }))
								: (d = y - T);
						(i.attrs[k][this._id][c] = { start: T, diff: d, end: y, trueEnd: m, trueStart: w }),
							(i.tweens[k][c] = this._id);
					}
					_tweenFunc(c) {
						const y = this.node,
							b = i.attrs[y._id][this._id];
						let k, d, s, m, w, A, M, T;
						for (k in b) {
							if (((d = b[k]), (s = d.start), (m = d.diff), (T = d.end), n.Util._isArray(s)))
								if (((w = []), (M = Math.max(s.length, T.length)), k.indexOf('fill') === 0))
									for (A = 0; A < M; A++)
										A % 2 === 0
											? w.push((s[A] || 0) + m[A] * c)
											: w.push(
													'rgba(' +
														Math.round(s[A].r + m[A].r * c) +
														',' +
														Math.round(s[A].g + m[A].g * c) +
														',' +
														Math.round(s[A].b + m[A].b * c) +
														',' +
														(s[A].a + m[A].a * c) +
														')'
												);
								else for (A = 0; A < M; A++) w.push((s[A] || 0) + m[A] * c);
							else
								a.indexOf(k) !== -1
									? (w =
											'rgba(' +
											Math.round(s.r + m.r * c) +
											',' +
											Math.round(s.g + m.g * c) +
											',' +
											Math.round(s.b + m.b * c) +
											',' +
											(s.a + m.a * c) +
											')')
									: (w = s + m * c);
							y.setAttr(k, w);
						}
					}
					_addListeners() {
						(this.tween.onPlay = () => {
							this.anim.start();
						}),
							(this.tween.onReverse = () => {
								this.anim.start();
							}),
							(this.tween.onPause = () => {
								this.anim.stop();
							}),
							(this.tween.onFinish = () => {
								const c = this.node,
									y = i.attrs[c._id][this._id];
								y.points && y.points.trueEnd && c.setAttr('points', y.points.trueEnd),
									this.onFinish && this.onFinish.call(this);
							}),
							(this.tween.onReset = () => {
								const c = this.node,
									y = i.attrs[c._id][this._id];
								y.points && y.points.trueStart && c.points(y.points.trueStart),
									this.onReset && this.onReset();
							}),
							(this.tween.onUpdate = () => {
								this.onUpdate && this.onUpdate.call(this);
							});
					}
					play() {
						return this.tween.play(), this;
					}
					reverse() {
						return this.tween.reverse(), this;
					}
					reset() {
						return this.tween.reset(), this;
					}
					seek(c) {
						return this.tween.seek(c * 1e3), this;
					}
					pause() {
						return this.tween.pause(), this;
					}
					finish() {
						return this.tween.finish(), this;
					}
					destroy() {
						const c = this.node._id,
							y = this._id,
							b = i.tweens[c];
						this.pause();
						for (const k in b) delete i.tweens[c][k];
						delete i.attrs[c][y];
					}
				}
				(t.Tween = i),
					(i.attrs = {}),
					(i.tweens = {}),
					(u.Node.prototype.to = function (e) {
						const c = e.onFinish;
						(e.node = this),
							(e.onFinish = function () {
								this.destroy(), c && c();
							}),
							new i(e).play();
					}),
					(t.Easings = {
						BackEaseIn(e, c, y, b) {
							return y * (e /= b) * e * ((1.70158 + 1) * e - 1.70158) + c;
						},
						BackEaseOut(e, c, y, b) {
							return y * ((e = e / b - 1) * e * ((1.70158 + 1) * e + 1.70158) + 1) + c;
						},
						BackEaseInOut(e, c, y, b) {
							let k = 1.70158;
							return (e /= b / 2) < 1
								? (y / 2) * (e * e * (((k *= 1.525) + 1) * e - k)) + c
								: (y / 2) * ((e -= 2) * e * (((k *= 1.525) + 1) * e + k) + 2) + c;
						},
						ElasticEaseIn(e, c, y, b, k, d) {
							let s = 0;
							return e === 0
								? c
								: (e /= b) === 1
									? c + y
									: (d || (d = b * 0.3),
										!k || k < Math.abs(y)
											? ((k = y), (s = d / 4))
											: (s = (d / (2 * Math.PI)) * Math.asin(y / k)),
										-(
											k *
											Math.pow(2, 10 * (e -= 1)) *
											Math.sin(((e * b - s) * (2 * Math.PI)) / d)
										) + c);
						},
						ElasticEaseOut(e, c, y, b, k, d) {
							let s = 0;
							return e === 0
								? c
								: (e /= b) === 1
									? c + y
									: (d || (d = b * 0.3),
										!k || k < Math.abs(y)
											? ((k = y), (s = d / 4))
											: (s = (d / (2 * Math.PI)) * Math.asin(y / k)),
										k * Math.pow(2, -10 * e) * Math.sin(((e * b - s) * (2 * Math.PI)) / d) + y + c);
						},
						ElasticEaseInOut(e, c, y, b, k, d) {
							let s = 0;
							return e === 0
								? c
								: (e /= b / 2) === 2
									? c + y
									: (d || (d = b * (0.3 * 1.5)),
										!k || k < Math.abs(y)
											? ((k = y), (s = d / 4))
											: (s = (d / (2 * Math.PI)) * Math.asin(y / k)),
										e < 1
											? -0.5 *
													(k *
														Math.pow(2, 10 * (e -= 1)) *
														Math.sin(((e * b - s) * (2 * Math.PI)) / d)) +
												c
											: k *
													Math.pow(2, -10 * (e -= 1)) *
													Math.sin(((e * b - s) * (2 * Math.PI)) / d) *
													0.5 +
												y +
												c);
						},
						BounceEaseOut(e, c, y, b) {
							return (e /= b) < 1 / 2.75
								? y * (7.5625 * e * e) + c
								: e < 2 / 2.75
									? y * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + c
									: e < 2.5 / 2.75
										? y * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + c
										: y * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + c;
						},
						BounceEaseIn(e, c, y, b) {
							return y - t.Easings.BounceEaseOut(b - e, 0, y, b) + c;
						},
						BounceEaseInOut(e, c, y, b) {
							return e < b / 2
								? t.Easings.BounceEaseIn(e * 2, 0, y, b) * 0.5 + c
								: t.Easings.BounceEaseOut(e * 2 - b, 0, y, b) * 0.5 + y * 0.5 + c;
						},
						EaseIn(e, c, y, b) {
							return y * (e /= b) * e + c;
						},
						EaseOut(e, c, y, b) {
							return -y * (e /= b) * (e - 2) + c;
						},
						EaseInOut(e, c, y, b) {
							return (e /= b / 2) < 1 ? (y / 2) * e * e + c : (-y / 2) * (--e * (e - 2) - 1) + c;
						},
						StrongEaseIn(e, c, y, b) {
							return y * (e /= b) * e * e * e * e + c;
						},
						StrongEaseOut(e, c, y, b) {
							return y * ((e = e / b - 1) * e * e * e * e + 1) + c;
						},
						StrongEaseInOut(e, c, y, b) {
							return (e /= b / 2) < 1
								? (y / 2) * e * e * e * e * e + c
								: (y / 2) * ((e -= 2) * e * e * e * e + 2) + c;
						},
						Linear(e, c, y, b) {
							return (y * e) / b + c;
						}
					});
			})(bi)),
		bi
	);
}
var Sr;
function ki() {
	return (
		Sr ||
			((Sr = 1),
			(function (t) {
				Object.defineProperty(t, '__esModule', { value: !0 }), (t.Konva = void 0);
				const n = $(),
					v = ot(),
					u = ht(),
					p = si(),
					l = Rn(),
					o = Fn(),
					r = ds(),
					h = Oi(),
					a = Gi(),
					f = ct(),
					_ = Li(),
					i = us(),
					e = Cn(),
					c = ai();
				(t.Konva = v.Util._assign(n.Konva, {
					Util: v.Util,
					Transform: v.Transform,
					Node: u.Node,
					Container: p.Container,
					Stage: l.Stage,
					stages: l.stages,
					Layer: o.Layer,
					FastLayer: r.FastLayer,
					Group: h.Group,
					DD: a.DD,
					Shape: f.Shape,
					shapes: f.shapes,
					Animation: _.Animation,
					Tween: i.Tween,
					Easings: i.Easings,
					Context: e.Context,
					Canvas: c.Canvas
				})),
					(t.default = t.Konva);
			})(yi)),
		yi
	);
}
var wr;
function fs() {
	return (
		wr ||
			((wr = 1),
			(function (t, n) {
				Object.defineProperty(n, '__esModule', { value: !0 }), (n.Konva = void 0);
				var v = ki();
				Object.defineProperty(n, 'Konva', {
					enumerable: !0,
					get: function () {
						return v.Konva;
					}
				});
				const u = ki();
				t.exports = u.Konva;
			})(Qe, Qe.exports)),
		Qe.exports
	);
}
var gs = fs();
const ps = wn(gs);
var ge = {},
	Cr;
function Mn() {
	if (Cr) return ge;
	(Cr = 1), Object.defineProperty(ge, '__esModule', { value: !0 }), (ge.Image = void 0);
	const t = ot(),
		n = tt(),
		v = ct(),
		u = $(),
		p = et();
	class l extends v.Shape {
		constructor(r) {
			super(r),
				(this._loadListener = () => {
					this._requestDraw();
				}),
				this.on('imageChange.konva', (h) => {
					this._removeImageLoad(h.oldVal), this._setImageLoad();
				}),
				this._setImageLoad();
		}
		_setImageLoad() {
			const r = this.image();
			(r && r.complete) ||
				(r && r.readyState === 4) ||
				(r && r.addEventListener && r.addEventListener('load', this._loadListener));
		}
		_removeImageLoad(r) {
			r && r.removeEventListener && r.removeEventListener('load', this._loadListener);
		}
		destroy() {
			return this._removeImageLoad(this.image()), super.destroy(), this;
		}
		_useBufferCanvas() {
			const r = !!this.cornerRadius(),
				h = this.hasShadow();
			return r && h ? !0 : super._useBufferCanvas(!0);
		}
		_sceneFunc(r) {
			const h = this.getWidth(),
				a = this.getHeight(),
				f = this.cornerRadius(),
				_ = this.attrs.image;
			let i;
			if (_) {
				const e = this.attrs.cropWidth,
					c = this.attrs.cropHeight;
				e && c ? (i = [_, this.cropX(), this.cropY(), e, c, 0, 0, h, a]) : (i = [_, 0, 0, h, a]);
			}
			(this.hasFill() || this.hasStroke() || f) &&
				(r.beginPath(),
				f ? t.Util.drawRoundedRectPath(r, h, a, f) : r.rect(0, 0, h, a),
				r.closePath(),
				r.fillStrokeShape(this)),
				_ && (f && r.clip(), r.drawImage.apply(r, i));
		}
		_hitFunc(r) {
			const h = this.width(),
				a = this.height(),
				f = this.cornerRadius();
			r.beginPath(),
				f ? t.Util.drawRoundedRectPath(r, h, a, f) : r.rect(0, 0, h, a),
				r.closePath(),
				r.fillStrokeShape(this);
		}
		getWidth() {
			var r, h;
			return (r = this.attrs.width) !== null && r !== void 0
				? r
				: (h = this.image()) === null || h === void 0
					? void 0
					: h.width;
		}
		getHeight() {
			var r, h;
			return (r = this.attrs.height) !== null && r !== void 0
				? r
				: (h = this.image()) === null || h === void 0
					? void 0
					: h.height;
		}
		static fromURL(r, h, a = null) {
			const f = t.Util.createImageElement();
			(f.onload = function () {
				const _ = new l({ image: f });
				h(_);
			}),
				(f.onerror = a),
				(f.crossOrigin = 'Anonymous'),
				(f.src = r);
		}
	}
	return (
		(ge.Image = l),
		(l.prototype.className = 'Image'),
		(0, u._registerNode)(l),
		n.Factory.addGetterSetter(l, 'cornerRadius', 0, (0, p.getNumberOrArrayOfNumbersValidator)(4)),
		n.Factory.addGetterSetter(l, 'image'),
		n.Factory.addComponentsGetterSetter(l, 'crop', ['x', 'y', 'width', 'height']),
		n.Factory.addGetterSetter(l, 'cropX', 0, (0, p.getNumberValidator)()),
		n.Factory.addGetterSetter(l, 'cropY', 0, (0, p.getNumberValidator)()),
		n.Factory.addGetterSetter(l, 'cropWidth', 0, (0, p.getNumberValidator)()),
		n.Factory.addGetterSetter(l, 'cropHeight', 0, (0, p.getNumberValidator)()),
		ge
	);
}
var _s = Mn();
function ms(t, n) {
	pt(n, !0);
	let v = V(n, 'staticConfig', 3, !1),
		u = V(n, 'x', 15),
		p = V(n, 'y', 15),
		l = V(n, 'scale', 15),
		o = V(n, 'scaleX', 15),
		r = V(n, 'scaleY', 15),
		h = V(n, 'rotation', 15),
		a = V(n, 'skewX', 15),
		f = V(n, 'skewY', 15),
		_ = Pt(n, [
			'$$slots',
			'$$events',
			'$$legacy',
			'staticConfig',
			'x',
			'y',
			'scale',
			'scaleX',
			'scaleY',
			'rotation',
			'skewX',
			'skewY'
		]);
	const i = new _s.Image({
		x: u(),
		y: p(),
		scale: l(),
		scaleX: o(),
		scaleY: r(),
		rotation: h(),
		skewX: a(),
		skewY: f(),
		..._
	});
	if ((Dt().add(i), !v())) {
		const e = i.getAttrs();
		i.on('transformend', () => {
			u() !== void 0 && u(e.x),
				p() !== void 0 && p(e.y),
				l() !== void 0 && l(e.scale),
				o() !== void 0 && o(e.scaleX),
				r() !== void 0 && r(e.scaleY),
				h() !== void 0 && h(e.rotation),
				a() !== void 0 && a(e.skewX),
				f() !== void 0 && f(e.skewY);
		}),
			i.on('dragend', () => {
				u() !== void 0 && u(e.x), p() !== void 0 && p(e.y);
			});
	}
	return (
		Object.keys(_)
			.filter((e) => !e.startsWith('on'))
			.forEach((e) => {
				Y(() => {
					i.setAttr(e, _[e]);
				});
			}),
		Y(() => {
			i.setAttr('x', u());
		}),
		Y(() => {
			i.setAttr('y', p());
		}),
		Y(() => {
			i.setAttr('scale', l());
		}),
		Y(() => {
			i.setAttr('scaleX', o());
		}),
		Y(() => {
			i.setAttr('scaleY', r());
		}),
		Y(() => {
			i.setAttr('rotation', h());
		}),
		Y(() => {
			i.setAttr('skewX', a());
		}),
		Y(() => {
			i.setAttr('skewY', f());
		}),
		Tt(_, i),
		At(() => {
			i.destroy();
		}),
		_t({ node: i })
	);
}
var qt = {},
	xr;
function ys() {
	if (xr) return qt;
	(xr = 1), Object.defineProperty(qt, '__esModule', { value: !0 }), (qt.Tag = qt.Label = void 0);
	const t = tt(),
		n = ct(),
		v = Oi(),
		u = et(),
		p = $(),
		l = [
			'fontFamily',
			'fontSize',
			'fontStyle',
			'padding',
			'lineHeight',
			'text',
			'width',
			'height',
			'pointerDirection',
			'pointerWidth',
			'pointerHeight'
		],
		o = 'Change.konva',
		r = 'none',
		h = 'up',
		a = 'right',
		f = 'down',
		_ = 'left',
		i = l.length;
	let e = class extends v.Group {
		constructor(b) {
			super(b),
				this.on('add.konva', function (k) {
					this._addListeners(k.child), this._sync();
				});
		}
		getText() {
			return this.find('Text')[0];
		}
		getTag() {
			return this.find('Tag')[0];
		}
		_addListeners(b) {
			let k = this,
				d;
			const s = function () {
				k._sync();
			};
			for (d = 0; d < i; d++) b.on(l[d] + o, s);
		}
		getWidth() {
			return this.getText().width();
		}
		getHeight() {
			return this.getText().height();
		}
		_sync() {
			let b = this.getText(),
				k = this.getTag(),
				d,
				s,
				m,
				w,
				A,
				M,
				T;
			if (b && k) {
				switch (
					((d = b.width()),
					(s = b.height()),
					(m = k.pointerDirection()),
					(w = k.pointerWidth()),
					(T = k.pointerHeight()),
					(A = 0),
					(M = 0),
					m)
				) {
					case h:
						(A = d / 2), (M = -1 * T);
						break;
					case a:
						(A = d + w), (M = s / 2);
						break;
					case f:
						(A = d / 2), (M = s + T);
						break;
					case _:
						(A = -1 * w), (M = s / 2);
						break;
				}
				k.setAttrs({ x: -1 * A, y: -1 * M, width: d, height: s }),
					b.setAttrs({ x: -1 * A, y: -1 * M });
			}
		}
	};
	(qt.Label = e), (e.prototype.className = 'Label'), (0, p._registerNode)(e);
	class c extends n.Shape {
		_sceneFunc(b) {
			const k = this.width(),
				d = this.height(),
				s = this.pointerDirection(),
				m = this.pointerWidth(),
				w = this.pointerHeight(),
				A = this.cornerRadius();
			let M = 0,
				T = 0,
				P = 0,
				x = 0;
			typeof A == 'number'
				? (M = T = P = x = Math.min(A, k / 2, d / 2))
				: ((M = Math.min(A[0] || 0, k / 2, d / 2)),
					(T = Math.min(A[1] || 0, k / 2, d / 2)),
					(x = Math.min(A[2] || 0, k / 2, d / 2)),
					(P = Math.min(A[3] || 0, k / 2, d / 2))),
				b.beginPath(),
				b.moveTo(M, 0),
				s === h && (b.lineTo((k - m) / 2, 0), b.lineTo(k / 2, -1 * w), b.lineTo((k + m) / 2, 0)),
				b.lineTo(k - T, 0),
				b.arc(k - T, T, T, (Math.PI * 3) / 2, 0, !1),
				s === a && (b.lineTo(k, (d - w) / 2), b.lineTo(k + m, d / 2), b.lineTo(k, (d + w) / 2)),
				b.lineTo(k, d - x),
				b.arc(k - x, d - x, x, 0, Math.PI / 2, !1),
				s === f && (b.lineTo((k + m) / 2, d), b.lineTo(k / 2, d + w), b.lineTo((k - m) / 2, d)),
				b.lineTo(P, d),
				b.arc(P, d - P, P, Math.PI / 2, Math.PI, !1),
				s === _ && (b.lineTo(0, (d + w) / 2), b.lineTo(-1 * m, d / 2), b.lineTo(0, (d - w) / 2)),
				b.lineTo(0, M),
				b.arc(M, M, M, Math.PI, (Math.PI * 3) / 2, !1),
				b.closePath(),
				b.fillStrokeShape(this);
		}
		getSelfRect() {
			let b = 0,
				k = 0,
				d = this.pointerWidth(),
				s = this.pointerHeight(),
				m = this.pointerDirection(),
				w = this.width(),
				A = this.height();
			return (
				m === h
					? ((k -= s), (A += s))
					: m === f
						? (A += s)
						: m === _
							? ((b -= d * 1.5), (w += d))
							: m === a && (w += d * 1.5),
				{ x: b, y: k, width: w, height: A }
			);
		}
	}
	return (
		(qt.Tag = c),
		(c.prototype.className = 'Tag'),
		(0, p._registerNode)(c),
		t.Factory.addGetterSetter(c, 'pointerDirection', r),
		t.Factory.addGetterSetter(c, 'pointerWidth', 0, (0, u.getNumberValidator)()),
		t.Factory.addGetterSetter(c, 'pointerHeight', 0, (0, u.getNumberValidator)()),
		t.Factory.addGetterSetter(c, 'cornerRadius', 0, (0, u.getNumberOrArrayOfNumbersValidator)(4)),
		qt
	);
}
function Ro(t, n) {
	pt(n, !0);
	let v = V(n, 'staticConfig', 3, !1),
		u = V(n, 'x', 15),
		p = V(n, 'y', 15),
		l = V(n, 'scale', 15),
		o = V(n, 'scaleX', 15),
		r = V(n, 'scaleY', 15),
		h = V(n, 'rotation', 15),
		a = V(n, 'skewX', 15),
		f = V(n, 'skewY', 15),
		_ = Pt(n, [
			'$$slots',
			'$$events',
			'$$legacy',
			'children',
			'staticConfig',
			'x',
			'y',
			'scale',
			'scaleX',
			'scaleY',
			'rotation',
			'skewX',
			'skewY'
		]);
	const i = new ps.Layer({
		x: u(),
		y: p(),
		scale: l(),
		scaleX: o(),
		scaleY: r(),
		rotation: h(),
		skewX: a(),
		skewY: f(),
		..._
	});
	if ((rs().add(i), !v())) {
		const y = i.getAttrs();
		i.on('transformend', () => {
			u() !== void 0 && u(y.x),
				p() !== void 0 && p(y.y),
				l() !== void 0 && l(y.scale),
				o() !== void 0 && o(y.scaleX),
				r() !== void 0 && r(y.scaleY),
				h() !== void 0 && h(y.rotation),
				a() !== void 0 && a(y.skewX),
				f() !== void 0 && f(y.skewY);
		}),
			i.on('dragend', () => {
				u() !== void 0 && u(y.x), p() !== void 0 && p(y.y);
			});
	}
	Object.keys(_)
		.filter((y) => !y.startsWith('on'))
		.forEach((y) => {
			Y(() => {
				i.setAttr(y, _[y]);
			});
		}),
		Y(() => {
			i.setAttr('x', u());
		}),
		Y(() => {
			i.setAttr('y', p());
		}),
		Y(() => {
			i.setAttr('scale', l());
		}),
		Y(() => {
			i.setAttr('scaleX', o());
		}),
		Y(() => {
			i.setAttr('scaleY', r());
		}),
		Y(() => {
			i.setAttr('rotation', h());
		}),
		Y(() => {
			i.setAttr('skewX', a());
		}),
		Y(() => {
			i.setAttr('skewY', f());
		}),
		Tt(_, i),
		kn(je.Layer, i),
		At(() => {
			i.destroy();
		});
	var e = He(),
		c = Qt(e);
	return un(c, () => n.children ?? ln), gt(t, e), _t({ node: i });
}
var pe = {},
	kr;
function Di() {
	if (kr) return pe;
	(kr = 1), Object.defineProperty(pe, '__esModule', { value: !0 }), (pe.Rect = void 0);
	const t = tt(),
		n = ct(),
		v = $(),
		u = ot(),
		p = et();
	class l extends n.Shape {
		_sceneFunc(r) {
			const h = this.cornerRadius(),
				a = this.width(),
				f = this.height();
			r.beginPath(),
				h ? u.Util.drawRoundedRectPath(r, a, f, h) : r.rect(0, 0, a, f),
				r.closePath(),
				r.fillStrokeShape(this);
		}
	}
	return (
		(pe.Rect = l),
		(l.prototype.className = 'Rect'),
		(0, v._registerNode)(l),
		t.Factory.addGetterSetter(l, 'cornerRadius', 0, (0, p.getNumberOrArrayOfNumbersValidator)(4)),
		pe
	);
}
var vs = Di();
function Ar(t, n) {
	pt(n, !0);
	let v = V(n, 'staticConfig', 3, !1),
		u = V(n, 'x', 15),
		p = V(n, 'y', 15),
		l = V(n, 'scale', 15),
		o = V(n, 'scaleX', 15),
		r = V(n, 'scaleY', 15),
		h = V(n, 'rotation', 15),
		a = V(n, 'skewX', 15),
		f = V(n, 'skewY', 15),
		_ = Pt(n, [
			'$$slots',
			'$$events',
			'$$legacy',
			'staticConfig',
			'x',
			'y',
			'scale',
			'scaleX',
			'scaleY',
			'rotation',
			'skewX',
			'skewY'
		]);
	const i = new vs.Rect({
		x: u(),
		y: p(),
		scale: l(),
		scaleX: o(),
		scaleY: r(),
		rotation: h(),
		skewX: a(),
		skewY: f(),
		..._
	});
	if ((Dt().add(i), !v())) {
		const e = i.getAttrs();
		i.on('transformend', () => {
			u() !== void 0 && u(e.x),
				p() !== void 0 && p(e.y),
				l() !== void 0 && l(e.scale),
				o() !== void 0 && o(e.scaleX),
				r() !== void 0 && r(e.scaleY),
				h() !== void 0 && h(e.rotation),
				a() !== void 0 && a(e.skewX),
				f() !== void 0 && f(e.skewY);
		}),
			i.on('dragend', () => {
				u() !== void 0 && u(e.x), p() !== void 0 && p(e.y);
			});
	}
	return (
		Object.keys(_)
			.filter((e) => !e.startsWith('on'))
			.forEach((e) => {
				Y(() => {
					i.setAttr(e, _[e]);
				});
			}),
		Y(() => {
			i.setAttr('x', u());
		}),
		Y(() => {
			i.setAttr('y', p());
		}),
		Y(() => {
			i.setAttr('scale', l());
		}),
		Y(() => {
			i.setAttr('scaleX', o());
		}),
		Y(() => {
			i.setAttr('scaleY', r());
		}),
		Y(() => {
			i.setAttr('rotation', h());
		}),
		Y(() => {
			i.setAttr('skewX', a());
		}),
		Y(() => {
			i.setAttr('skewY', f());
		}),
		Tt(_, i),
		At(() => {
			i.destroy();
		}),
		_t({ node: i })
	);
}
var _e = {},
	Pr;
function Gn() {
	if (Pr) return _e;
	(Pr = 1), Object.defineProperty(_e, '__esModule', { value: !0 }), (_e.RegularPolygon = void 0);
	const t = tt(),
		n = ct(),
		v = et(),
		u = $();
	class p extends n.Shape {
		_sceneFunc(o) {
			const r = this._getPoints();
			o.beginPath(), o.moveTo(r[0].x, r[0].y);
			for (let h = 1; h < r.length; h++) o.lineTo(r[h].x, r[h].y);
			o.closePath(), o.fillStrokeShape(this);
		}
		_getPoints() {
			const o = this.attrs.sides,
				r = this.attrs.radius || 0,
				h = [];
			for (let a = 0; a < o; a++)
				h.push({
					x: r * Math.sin((a * 2 * Math.PI) / o),
					y: -1 * r * Math.cos((a * 2 * Math.PI) / o)
				});
			return h;
		}
		getSelfRect() {
			const o = this._getPoints();
			let r = o[0].x,
				h = o[0].y,
				a = o[0].x,
				f = o[0].y;
			return (
				o.forEach((_) => {
					(r = Math.min(r, _.x)),
						(h = Math.max(h, _.x)),
						(a = Math.min(a, _.y)),
						(f = Math.max(f, _.y));
				}),
				{ x: r, y: a, width: h - r, height: f - a }
			);
		}
		getWidth() {
			return this.radius() * 2;
		}
		getHeight() {
			return this.radius() * 2;
		}
		setWidth(o) {
			this.radius(o / 2);
		}
		setHeight(o) {
			this.radius(o / 2);
		}
	}
	return (
		(_e.RegularPolygon = p),
		(p.prototype.className = 'RegularPolygon'),
		(p.prototype._centroid = !0),
		(p.prototype._attrsAffectingSize = ['radius']),
		(0, u._registerNode)(p),
		t.Factory.addGetterSetter(p, 'radius', 0, (0, v.getNumberValidator)()),
		t.Factory.addGetterSetter(p, 'sides', 0, (0, v.getNumberValidator)()),
		_e
	);
}
var bs = Gn();
function Si(t, n) {
	pt(n, !0);
	let v = V(n, 'staticConfig', 3, !1),
		u = V(n, 'x', 15),
		p = V(n, 'y', 15),
		l = V(n, 'scale', 15),
		o = V(n, 'scaleX', 15),
		r = V(n, 'scaleY', 15),
		h = V(n, 'rotation', 15),
		a = V(n, 'skewX', 15),
		f = V(n, 'skewY', 15),
		_ = Pt(n, [
			'$$slots',
			'$$events',
			'$$legacy',
			'staticConfig',
			'x',
			'y',
			'scale',
			'scaleX',
			'scaleY',
			'rotation',
			'skewX',
			'skewY'
		]);
	const i = new bs.RegularPolygon({
		x: u(),
		y: p(),
		scale: l(),
		scaleX: o(),
		scaleY: r(),
		rotation: h(),
		skewX: a(),
		skewY: f(),
		..._
	});
	if ((Dt().add(i), !v())) {
		const e = i.getAttrs();
		i.on('transformend', () => {
			u() !== void 0 && u(e.x),
				p() !== void 0 && p(e.y),
				l() !== void 0 && l(e.scale),
				o() !== void 0 && o(e.scaleX),
				r() !== void 0 && r(e.scaleY),
				h() !== void 0 && h(e.rotation),
				a() !== void 0 && a(e.skewX),
				f() !== void 0 && f(e.skewY);
		}),
			i.on('dragend', () => {
				u() !== void 0 && u(e.x), p() !== void 0 && p(e.y);
			});
	}
	return (
		Object.keys(_)
			.filter((e) => !e.startsWith('on'))
			.forEach((e) => {
				Y(() => {
					i.setAttr(e, _[e]);
				});
			}),
		Y(() => {
			i.setAttr('x', u());
		}),
		Y(() => {
			i.setAttr('y', p());
		}),
		Y(() => {
			i.setAttr('scale', l());
		}),
		Y(() => {
			i.setAttr('scaleX', o());
		}),
		Y(() => {
			i.setAttr('scaleY', r());
		}),
		Y(() => {
			i.setAttr('rotation', h());
		}),
		Y(() => {
			i.setAttr('skewX', a());
		}),
		Y(() => {
			i.setAttr('skewY', f());
		}),
		Tt(_, i),
		At(() => {
			i.destroy();
		}),
		_t({ node: i })
	);
}
var me = {},
	Tr;
function Ss() {
	if (Tr) return me;
	(Tr = 1), Object.defineProperty(me, '__esModule', { value: !0 }), (me.Ring = void 0);
	const t = tt(),
		n = ct(),
		v = et(),
		u = $(),
		p = Math.PI * 2;
	let l = class extends n.Shape {
		_sceneFunc(r) {
			r.beginPath(),
				r.arc(0, 0, this.innerRadius(), 0, p, !1),
				r.moveTo(this.outerRadius(), 0),
				r.arc(0, 0, this.outerRadius(), p, 0, !0),
				r.closePath(),
				r.fillStrokeShape(this);
		}
		getWidth() {
			return this.outerRadius() * 2;
		}
		getHeight() {
			return this.outerRadius() * 2;
		}
		setWidth(r) {
			this.outerRadius(r / 2);
		}
		setHeight(r) {
			this.outerRadius(r / 2);
		}
	};
	return (
		(me.Ring = l),
		(l.prototype.className = 'Ring'),
		(l.prototype._centroid = !0),
		(l.prototype._attrsAffectingSize = ['innerRadius', 'outerRadius']),
		(0, u._registerNode)(l),
		t.Factory.addGetterSetter(l, 'innerRadius', 0, (0, v.getNumberValidator)()),
		t.Factory.addGetterSetter(l, 'outerRadius', 0, (0, v.getNumberValidator)()),
		me
	);
}
var ws = ct();
function wi(t, n) {
	pt(n, !0);
	let v = V(n, 'staticConfig', 3, !1),
		u = V(n, 'x', 15),
		p = V(n, 'y', 15),
		l = V(n, 'scale', 15),
		o = V(n, 'scaleX', 15),
		r = V(n, 'scaleY', 15),
		h = V(n, 'rotation', 15),
		a = V(n, 'skewX', 15),
		f = V(n, 'skewY', 15),
		_ = Pt(n, [
			'$$slots',
			'$$events',
			'$$legacy',
			'staticConfig',
			'x',
			'y',
			'scale',
			'scaleX',
			'scaleY',
			'rotation',
			'skewX',
			'skewY'
		]);
	const i = new ws.Shape({
		x: u(),
		y: p(),
		scale: l(),
		scaleX: o(),
		scaleY: r(),
		rotation: h(),
		skewX: a(),
		skewY: f(),
		..._
	});
	if ((Dt().add(i), !v())) {
		const e = i.getAttrs();
		i.on('transformend', () => {
			u() !== void 0 && u(e.x),
				p() !== void 0 && p(e.y),
				l() !== void 0 && l(e.scale),
				o() !== void 0 && o(e.scaleX),
				r() !== void 0 && r(e.scaleY),
				h() !== void 0 && h(e.rotation),
				a() !== void 0 && a(e.skewX),
				f() !== void 0 && f(e.skewY);
		}),
			i.on('dragend', () => {
				u() !== void 0 && u(e.x), p() !== void 0 && p(e.y);
			});
	}
	return (
		Object.keys(_)
			.filter((e) => !e.startsWith('on'))
			.forEach((e) => {
				Y(() => {
					i.setAttr(e, _[e]);
				});
			}),
		Y(() => {
			i.setAttr('x', u());
		}),
		Y(() => {
			i.setAttr('y', p());
		}),
		Y(() => {
			i.setAttr('scale', l());
		}),
		Y(() => {
			i.setAttr('scaleX', o());
		}),
		Y(() => {
			i.setAttr('scaleY', r());
		}),
		Y(() => {
			i.setAttr('rotation', h());
		}),
		Y(() => {
			i.setAttr('skewX', a());
		}),
		Y(() => {
			i.setAttr('skewY', f());
		}),
		Tt(_, i),
		At(() => {
			i.destroy();
		}),
		_t({ node: i })
	);
}
var ye = {},
	Er;
function Cs() {
	if (Er) return ye;
	(Er = 1), Object.defineProperty(ye, '__esModule', { value: !0 }), (ye.Sprite = void 0);
	const t = tt(),
		n = ct(),
		v = Li(),
		u = et(),
		p = $();
	let l = class extends n.Shape {
		constructor(r) {
			super(r),
				(this._updated = !0),
				(this.anim = new v.Animation(() => {
					const h = this._updated;
					return (this._updated = !1), h;
				})),
				this.on('animationChange.konva', function () {
					this.frameIndex(0);
				}),
				this.on('frameIndexChange.konva', function () {
					this._updated = !0;
				}),
				this.on('frameRateChange.konva', function () {
					this.anim.isRunning() && (clearInterval(this.interval), this._setInterval());
				});
		}
		_sceneFunc(r) {
			const h = this.animation(),
				a = this.frameIndex(),
				f = a * 4,
				_ = this.animations()[h],
				i = this.frameOffsets(),
				e = _[f + 0],
				c = _[f + 1],
				y = _[f + 2],
				b = _[f + 3],
				k = this.image();
			if (
				((this.hasFill() || this.hasStroke()) &&
					(r.beginPath(), r.rect(0, 0, y, b), r.closePath(), r.fillStrokeShape(this)),
				k)
			)
				if (i) {
					const d = i[h],
						s = a * 2;
					r.drawImage(k, e, c, y, b, d[s + 0], d[s + 1], y, b);
				} else r.drawImage(k, e, c, y, b, 0, 0, y, b);
		}
		_hitFunc(r) {
			const h = this.animation(),
				a = this.frameIndex(),
				f = a * 4,
				_ = this.animations()[h],
				i = this.frameOffsets(),
				e = _[f + 2],
				c = _[f + 3];
			if ((r.beginPath(), i)) {
				const y = i[h],
					b = a * 2;
				r.rect(y[b + 0], y[b + 1], e, c);
			} else r.rect(0, 0, e, c);
			r.closePath(), r.fillShape(this);
		}
		_useBufferCanvas() {
			return super._useBufferCanvas(!0);
		}
		_setInterval() {
			const r = this;
			this.interval = setInterval(function () {
				r._updateIndex();
			}, 1e3 / this.frameRate());
		}
		start() {
			if (this.isRunning()) return;
			const r = this.getLayer();
			this.anim.setLayers(r), this._setInterval(), this.anim.start();
		}
		stop() {
			this.anim.stop(), clearInterval(this.interval);
		}
		isRunning() {
			return this.anim.isRunning();
		}
		_updateIndex() {
			const r = this.frameIndex(),
				h = this.animation(),
				a = this.animations(),
				f = a[h],
				_ = f.length / 4;
			r < _ - 1 ? this.frameIndex(r + 1) : this.frameIndex(0);
		}
	};
	return (
		(ye.Sprite = l),
		(l.prototype.className = 'Sprite'),
		(0, p._registerNode)(l),
		t.Factory.addGetterSetter(l, 'animation'),
		t.Factory.addGetterSetter(l, 'animations'),
		t.Factory.addGetterSetter(l, 'frameOffsets'),
		t.Factory.addGetterSetter(l, 'image'),
		t.Factory.addGetterSetter(l, 'frameIndex', 0, (0, u.getNumberValidator)()),
		t.Factory.addGetterSetter(l, 'frameRate', 17, (0, u.getNumberValidator)()),
		t.Factory.backCompat(l, {
			index: 'frameIndex',
			getIndex: 'getFrameIndex',
			setIndex: 'setFrameIndex'
		}),
		ye
	);
}
var xs = Rn(),
	ks = Lt('<div><!></div>');
function Go(t, n) {
	pt(n, !0);
	let v = V(n, 'staticConfig', 3, !1),
		u = V(n, 'x', 15),
		p = V(n, 'y', 15),
		l = Pt(n, [
			'$$slots',
			'$$events',
			'$$legacy',
			'children',
			'staticConfig',
			'x',
			'y',
			'divWrapperProps'
		]),
		o,
		r;
	try {
		r = document.createElement('div');
	} catch (_) {
		throw new Error(
			'svelte-konva: Library can only be used in a browser context but is currently used in a server environment. If you are using SvelteKit, please refer to the following docs: https://konvajs.org/docs/svelte/SvelteKit.html',
			{ cause: _ }
		);
	}
	const h = new xs.Stage({ container: r, y: p(), x: u(), ...l });
	if (!v()) {
		const _ = h.getAttrs();
		h.on('dragend', () => {
			u() !== void 0 && u(_.x), p() !== void 0 && p(_.y);
		});
	}
	Object.keys(l)
		.filter((_) => !_.startsWith('on'))
		.forEach((_) => {
			Y(() => {
				h.setAttr(_, l[_]);
			});
		}),
		Y(() => {
			h.setAttr('x', u());
		}),
		Y(() => {
			h.setAttr('y', p());
		}),
		Tt(l, h),
		kn(je.Stage, h),
		ua(() => {
			h.setContainer(o);
		}),
		At(() => {
			h.destroy();
		});
	var a = ks();
	Oa(a, () => ({ ...n.divWrapperProps }));
	var f = ut(a);
	return (
		un(f, () => n.children ?? ln),
		ft(a),
		cn(
			a,
			(_) => (o = _),
			() => o
		),
		gt(t, a),
		_t({ node: h })
	);
}
var ve = {},
	Rr;
function Nn() {
	if (Rr) return ve;
	(Rr = 1), Object.defineProperty(ve, '__esModule', { value: !0 }), (ve.Star = void 0);
	const t = tt(),
		n = ct(),
		v = et(),
		u = $();
	class p extends n.Shape {
		_sceneFunc(o) {
			const r = this.innerRadius(),
				h = this.outerRadius(),
				a = this.numPoints();
			o.beginPath(), o.moveTo(0, 0 - h);
			for (let f = 1; f < a * 2; f++) {
				const _ = f % 2 === 0 ? h : r,
					i = _ * Math.sin((f * Math.PI) / a),
					e = -1 * _ * Math.cos((f * Math.PI) / a);
				o.lineTo(i, e);
			}
			o.closePath(), o.fillStrokeShape(this);
		}
		getWidth() {
			return this.outerRadius() * 2;
		}
		getHeight() {
			return this.outerRadius() * 2;
		}
		setWidth(o) {
			this.outerRadius(o / 2);
		}
		setHeight(o) {
			this.outerRadius(o / 2);
		}
	}
	return (
		(ve.Star = p),
		(p.prototype.className = 'Star'),
		(p.prototype._centroid = !0),
		(p.prototype._attrsAffectingSize = ['innerRadius', 'outerRadius']),
		(0, u._registerNode)(p),
		t.Factory.addGetterSetter(p, 'numPoints', 5, (0, v.getNumberValidator)()),
		t.Factory.addGetterSetter(p, 'innerRadius', 0, (0, v.getNumberValidator)()),
		t.Factory.addGetterSetter(p, 'outerRadius', 0, (0, v.getNumberValidator)()),
		ve
	);
}
var As = Nn();
function Ps(t, n) {
	pt(n, !0);
	let v = V(n, 'staticConfig', 3, !1),
		u = V(n, 'x', 15),
		p = V(n, 'y', 15),
		l = V(n, 'scale', 15),
		o = V(n, 'scaleX', 15),
		r = V(n, 'scaleY', 15),
		h = V(n, 'rotation', 15),
		a = V(n, 'skewX', 15),
		f = V(n, 'skewY', 15),
		_ = Pt(n, [
			'$$slots',
			'$$events',
			'$$legacy',
			'staticConfig',
			'x',
			'y',
			'scale',
			'scaleX',
			'scaleY',
			'rotation',
			'skewX',
			'skewY'
		]);
	const i = new As.Star({
		x: u(),
		y: p(),
		scale: l(),
		scaleX: o(),
		scaleY: r(),
		rotation: h(),
		skewX: a(),
		skewY: f(),
		..._
	});
	if ((Dt().add(i), !v())) {
		const e = i.getAttrs();
		i.on('transformend', () => {
			u() !== void 0 && u(e.x),
				p() !== void 0 && p(e.y),
				l() !== void 0 && l(e.scale),
				o() !== void 0 && o(e.scaleX),
				r() !== void 0 && r(e.scaleY),
				h() !== void 0 && h(e.rotation),
				a() !== void 0 && a(e.skewX),
				f() !== void 0 && f(e.skewY);
		}),
			i.on('dragend', () => {
				u() !== void 0 && u(e.x), p() !== void 0 && p(e.y);
			});
	}
	return (
		Object.keys(_)
			.filter((e) => !e.startsWith('on'))
			.forEach((e) => {
				Y(() => {
					i.setAttr(e, _[e]);
				});
			}),
		Y(() => {
			i.setAttr('x', u());
		}),
		Y(() => {
			i.setAttr('y', p());
		}),
		Y(() => {
			i.setAttr('scale', l());
		}),
		Y(() => {
			i.setAttr('scaleX', o());
		}),
		Y(() => {
			i.setAttr('scaleY', r());
		}),
		Y(() => {
			i.setAttr('rotation', h());
		}),
		Y(() => {
			i.setAttr('skewX', a());
		}),
		Y(() => {
			i.setAttr('skewY', f());
		}),
		Tt(_, i),
		At(() => {
			i.destroy();
		}),
		_t({ node: i })
	);
}
var Kt = {},
	Fr;
function Ii() {
	if (Fr) return Kt;
	(Fr = 1),
		Object.defineProperty(Kt, '__esModule', { value: !0 }),
		(Kt.Text = void 0),
		(Kt.stringToArray = o);
	const t = ot(),
		n = tt(),
		v = ct(),
		u = $(),
		p = et(),
		l = $();
	function o(W) {
		return [...W].reduce((B, H, z, j) => {
			if (new RegExp('\\p{Emoji}', 'u').test(H)) {
				const G = j[z + 1];
				G && new RegExp('\\p{Emoji_Modifier}|\\u200D', 'u').test(G)
					? (B.push(H + G), (j[z + 1] = ''))
					: B.push(H);
			} else
				new RegExp('\\p{Regional_Indicator}{2}', 'u').test(H + (j[z + 1] || ''))
					? B.push(H + j[z + 1])
					: z > 0 && new RegExp('\\p{Mn}|\\p{Me}|\\p{Mc}', 'u').test(H)
						? (B[B.length - 1] += H)
						: H && B.push(H);
			return B;
		}, []);
	}
	const r = 'auto',
		h = 'center',
		a = 'inherit',
		f = 'justify',
		_ = 'Change.konva',
		i = '2d',
		e = '-',
		c = 'left',
		y = 'text',
		b = 'Text',
		k = 'top',
		d = 'bottom',
		s = 'middle',
		m = 'normal',
		w = 'px ',
		A = ' ',
		M = 'right',
		T = 'rtl',
		P = 'word',
		x = 'char',
		E = 'none',
		N = '…',
		g = [
			'direction',
			'fontFamily',
			'fontSize',
			'fontStyle',
			'fontVariant',
			'padding',
			'align',
			'verticalAlign',
			'lineHeight',
			'text',
			'width',
			'height',
			'wrap',
			'ellipsis',
			'letterSpacing'
		],
		C = g.length;
	function S(W) {
		return W.split(',')
			.map((B) => {
				B = B.trim();
				const H = B.indexOf(' ') >= 0,
					z = B.indexOf('"') >= 0 || B.indexOf("'") >= 0;
				return H && !z && (B = `"${B}"`), B;
			})
			.join(', ');
	}
	let R;
	function F() {
		return R || ((R = t.Util.createCanvasElement().getContext(i)), R);
	}
	function O(W) {
		W.fillText(this._partialText, this._partialTextX, this._partialTextY);
	}
	function I(W) {
		W.setAttr('miterLimit', 2),
			W.strokeText(this._partialText, this._partialTextX, this._partialTextY);
	}
	function L(W) {
		return (
			(W = W || {}),
			!W.fillLinearGradientColorStops &&
				!W.fillRadialGradientColorStops &&
				!W.fillPatternImage &&
				(W.fill = W.fill || 'black'),
			W
		);
	}
	class U extends v.Shape {
		constructor(B) {
			super(L(B)), (this._partialTextX = 0), (this._partialTextY = 0);
			for (let H = 0; H < C; H++) this.on(g[H] + _, this._setTextData);
			this._setTextData();
		}
		_sceneFunc(B) {
			const H = this.textArr,
				z = H.length;
			if (!this.text()) return;
			let j = this.padding(),
				G = this.fontSize(),
				D = this.lineHeight() * G,
				X = this.verticalAlign(),
				q = this.direction(),
				K = 0,
				Q = this.align(),
				it = this.getWidth(),
				rt = this.letterSpacing(),
				Z = this.fill(),
				dt = this.textDecoration(),
				nt = dt.indexOf('underline') !== -1,
				lt = dt.indexOf('line-through') !== -1,
				zt;
			q = q === a ? B.direction : q;
			let St = D / 2,
				Jt = s;
			if (u.Konva._fixTextRendering) {
				const Bt = this.measureSize('M');
				(Jt = 'alphabetic'),
					(St = (Bt.fontBoundingBoxAscent - Bt.fontBoundingBoxDescent) / 2 + D / 2);
			}
			var st = 0,
				wt = 0;
			for (
				q === T && B.setAttr('direction', q),
					B.setAttr('font', this._getContextFont()),
					B.setAttr('textBaseline', Jt),
					B.setAttr('textAlign', c),
					X === s
						? (K = (this.getHeight() - z * D - j * 2) / 2)
						: X === d && (K = this.getHeight() - z * D - j * 2),
					B.translate(j, K + j),
					zt = 0;
				zt < z;
				zt++
			) {
				var st = 0,
					wt = 0,
					Et = H[zt],
					Rt = Et.text,
					mt = Et.width,
					It = Et.lastInParagraph,
					Ft,
					Ht;
				if (
					(B.save(),
					Q === M ? (st += it - mt - j * 2) : Q === h && (st += (it - mt - j * 2) / 2),
					nt)
				) {
					B.save(), B.beginPath();
					const Ct = u.Konva._fixTextRendering ? Math.round(G / 4) : Math.round(G / 2),
						xt = st,
						kt = St + wt + Ct;
					B.moveTo(xt, kt),
						(Ft = Rt.split(' ').length - 1),
						(Ht = Q === f && !It ? it - j * 2 : mt),
						B.lineTo(xt + Math.round(Ht), kt),
						(B.lineWidth = G / 15);
					const oi = this._getLinearGradient();
					(B.strokeStyle = oi || Z), B.stroke(), B.restore();
				}
				if (lt) {
					B.save(), B.beginPath();
					const Ct = u.Konva._fixTextRendering ? -Math.round(G / 4) : 0;
					B.moveTo(st, St + wt + Ct),
						(Ft = Rt.split(' ').length - 1),
						(Ht = Q === f && !It ? it - j * 2 : mt),
						B.lineTo(st + Math.round(Ht), St + wt + Ct),
						(B.lineWidth = G / 15);
					const xt = this._getLinearGradient();
					(B.strokeStyle = xt || Z), B.stroke(), B.restore();
				}
				if (q !== T && (rt !== 0 || Q === f)) {
					Ft = Rt.split(' ').length - 1;
					const Ct = o(Rt);
					for (let xt = 0; xt < Ct.length; xt++) {
						const kt = Ct[xt];
						kt === ' ' && !It && Q === f && (st += (it - j * 2 - mt) / Ft),
							(this._partialTextX = st),
							(this._partialTextY = St + wt),
							(this._partialText = kt),
							B.fillStrokeShape(this),
							(st += this.measureSize(kt).width + rt);
					}
				} else
					rt !== 0 && B.setAttr('letterSpacing', `${rt}px`),
						(this._partialTextX = st),
						(this._partialTextY = St + wt),
						(this._partialText = Rt),
						B.fillStrokeShape(this);
				B.restore(), z > 1 && (St += D);
			}
		}
		_hitFunc(B) {
			const H = this.getWidth(),
				z = this.getHeight();
			B.beginPath(), B.rect(0, 0, H, z), B.closePath(), B.fillStrokeShape(this);
		}
		setText(B) {
			const H = t.Util._isString(B) ? B : B == null ? '' : B + '';
			return this._setAttr(y, H), this;
		}
		getWidth() {
			return this.attrs.width === r || this.attrs.width === void 0
				? this.getTextWidth() + this.padding() * 2
				: this.attrs.width;
		}
		getHeight() {
			return this.attrs.height === r || this.attrs.height === void 0
				? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2
				: this.attrs.height;
		}
		getTextWidth() {
			return this.textWidth;
		}
		getTextHeight() {
			return (
				t.Util.warn(
					'text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.'
				),
				this.textHeight
			);
		}
		measureSize(B) {
			var H, z, j, G, D, X, q, K, Q, it, rt;
			let Z = F(),
				dt = this.fontSize(),
				nt;
			Z.save(), (Z.font = this._getContextFont()), (nt = Z.measureText(B)), Z.restore();
			const lt = dt / 100;
			return {
				actualBoundingBoxAscent:
					(H = nt.actualBoundingBoxAscent) !== null && H !== void 0 ? H : 71.58203125 * lt,
				actualBoundingBoxDescent:
					(z = nt.actualBoundingBoxDescent) !== null && z !== void 0 ? z : 0,
				actualBoundingBoxLeft:
					(j = nt.actualBoundingBoxLeft) !== null && j !== void 0 ? j : -7.421875 * lt,
				actualBoundingBoxRight:
					(G = nt.actualBoundingBoxRight) !== null && G !== void 0 ? G : 75.732421875 * lt,
				alphabeticBaseline: (D = nt.alphabeticBaseline) !== null && D !== void 0 ? D : 0,
				emHeightAscent: (X = nt.emHeightAscent) !== null && X !== void 0 ? X : 100 * lt,
				emHeightDescent: (q = nt.emHeightDescent) !== null && q !== void 0 ? q : -20 * lt,
				fontBoundingBoxAscent:
					(K = nt.fontBoundingBoxAscent) !== null && K !== void 0 ? K : 91 * lt,
				fontBoundingBoxDescent:
					(Q = nt.fontBoundingBoxDescent) !== null && Q !== void 0 ? Q : 21 * lt,
				hangingBaseline:
					(it = nt.hangingBaseline) !== null && it !== void 0 ? it : 72.80000305175781 * lt,
				ideographicBaseline:
					(rt = nt.ideographicBaseline) !== null && rt !== void 0 ? rt : -21 * lt,
				width: nt.width,
				height: dt
			};
		}
		_getContextFont() {
			return (
				this.fontStyle() + A + this.fontVariant() + A + (this.fontSize() + w) + S(this.fontFamily())
			);
		}
		_addTextLine(B) {
			this.align() === f && (B = B.trim());
			const z = this._getTextWidth(B);
			return this.textArr.push({ text: B, width: z, lastInParagraph: !1 });
		}
		_getTextWidth(B) {
			const H = this.letterSpacing(),
				z = B.length;
			return F().measureText(B).width + H * z;
		}
		_setTextData() {
			let B = this.text().split(`
`),
				H = +this.fontSize(),
				z = 0,
				j = this.lineHeight() * H,
				G = this.attrs.width,
				D = this.attrs.height,
				X = G !== r && G !== void 0,
				q = D !== r && D !== void 0,
				K = this.padding(),
				Q = G - K * 2,
				it = D - K * 2,
				rt = 0,
				Z = this.wrap(),
				dt = Z !== E,
				nt = Z !== x && dt,
				lt = this.ellipsis();
			(this.textArr = []), (F().font = this._getContextFont());
			const zt = lt ? this._getTextWidth(N) : 0;
			for (let St = 0, Jt = B.length; St < Jt; ++St) {
				let st = B[St],
					wt = this._getTextWidth(st);
				if (X && wt > Q)
					for (; st.length > 0; ) {
						let Et = 0,
							Rt = o(st).length,
							mt = '',
							It = 0;
						for (; Et < Rt; ) {
							const Ft = (Et + Rt) >>> 1,
								Ht = o(st),
								Bt = Ht.slice(0, Ft + 1).join(''),
								Ut = this._getTextWidth(Bt);
							(lt && q && rt + j > it ? Ut + zt : Ut) <= Q
								? ((Et = Ft + 1), (mt = Bt), (It = Ut))
								: (Rt = Ft);
						}
						if (mt) {
							if (nt) {
								const Bt = o(st),
									Ut = o(mt),
									Ct = Bt[Ut.length],
									xt = Ct === A || Ct === e;
								let kt;
								if (xt && It <= Q) kt = Ut.length;
								else {
									const oi = Ut.lastIndexOf(A),
										On = Ut.lastIndexOf(e);
									kt = Math.max(oi, On) + 1;
								}
								kt > 0 &&
									((Et = kt), (mt = Bt.slice(0, Et).join('')), (It = this._getTextWidth(mt)));
							}
							if (
								((mt = mt.trimRight()),
								this._addTextLine(mt),
								(z = Math.max(z, It)),
								(rt += j),
								this._shouldHandleEllipsis(rt))
							) {
								this._tryToAddEllipsisToLastLine();
								break;
							}
							if (
								((st = o(st).slice(Et).join('').trimLeft()),
								st.length > 0 && ((wt = this._getTextWidth(st)), wt <= Q))
							) {
								this._addTextLine(st), (rt += j), (z = Math.max(z, wt));
								break;
							}
						} else break;
					}
				else
					this._addTextLine(st),
						(rt += j),
						(z = Math.max(z, wt)),
						this._shouldHandleEllipsis(rt) && St < Jt - 1 && this._tryToAddEllipsisToLastLine();
				if (
					(this.textArr[this.textArr.length - 1] &&
						(this.textArr[this.textArr.length - 1].lastInParagraph = !0),
					q && rt + j > it)
				)
					break;
			}
			(this.textHeight = H), (this.textWidth = z);
		}
		_shouldHandleEllipsis(B) {
			const H = +this.fontSize(),
				z = this.lineHeight() * H,
				j = this.attrs.height,
				G = j !== r && j !== void 0,
				D = this.padding(),
				X = j - D * 2;
			return !(this.wrap() !== E) || (G && B + z > X);
		}
		_tryToAddEllipsisToLastLine() {
			const B = this.attrs.width,
				H = B !== r && B !== void 0,
				z = this.padding(),
				j = B - z * 2,
				G = this.ellipsis(),
				D = this.textArr[this.textArr.length - 1];
			!D ||
				!G ||
				(H && (this._getTextWidth(D.text + N) < j || (D.text = D.text.slice(0, D.text.length - 3))),
				this.textArr.splice(this.textArr.length - 1, 1),
				this._addTextLine(D.text + N));
		}
		getStrokeScaleEnabled() {
			return !0;
		}
		_useBufferCanvas() {
			const B =
					this.textDecoration().indexOf('underline') !== -1 ||
					this.textDecoration().indexOf('line-through') !== -1,
				H = this.hasShadow();
			return B && H ? !0 : super._useBufferCanvas();
		}
	}
	return (
		(Kt.Text = U),
		(U.prototype._fillFunc = O),
		(U.prototype._strokeFunc = I),
		(U.prototype.className = b),
		(U.prototype._attrsAffectingSize = [
			'text',
			'fontSize',
			'padding',
			'wrap',
			'lineHeight',
			'letterSpacing'
		]),
		(0, l._registerNode)(U),
		n.Factory.overWriteSetter(U, 'width', (0, p.getNumberOrAutoValidator)()),
		n.Factory.overWriteSetter(U, 'height', (0, p.getNumberOrAutoValidator)()),
		n.Factory.addGetterSetter(U, 'direction', a),
		n.Factory.addGetterSetter(U, 'fontFamily', 'Arial'),
		n.Factory.addGetterSetter(U, 'fontSize', 12, (0, p.getNumberValidator)()),
		n.Factory.addGetterSetter(U, 'fontStyle', m),
		n.Factory.addGetterSetter(U, 'fontVariant', m),
		n.Factory.addGetterSetter(U, 'padding', 0, (0, p.getNumberValidator)()),
		n.Factory.addGetterSetter(U, 'align', c),
		n.Factory.addGetterSetter(U, 'verticalAlign', k),
		n.Factory.addGetterSetter(U, 'lineHeight', 1, (0, p.getNumberValidator)()),
		n.Factory.addGetterSetter(U, 'wrap', P),
		n.Factory.addGetterSetter(U, 'ellipsis', !1, (0, p.getBooleanValidator)()),
		n.Factory.addGetterSetter(U, 'letterSpacing', 0, (0, p.getNumberValidator)()),
		n.Factory.addGetterSetter(U, 'text', '', (0, p.getStringValidator)()),
		n.Factory.addGetterSetter(U, 'textDecoration', ''),
		Kt
	);
}
var Ts = Ii();
function No(t, n) {
	pt(n, !0);
	let v = V(n, 'staticConfig', 3, !1),
		u = V(n, 'x', 15),
		p = V(n, 'y', 15),
		l = V(n, 'scale', 15),
		o = V(n, 'scaleX', 15),
		r = V(n, 'scaleY', 15),
		h = V(n, 'rotation', 15),
		a = V(n, 'skewX', 15),
		f = V(n, 'skewY', 15),
		_ = Pt(n, [
			'$$slots',
			'$$events',
			'$$legacy',
			'staticConfig',
			'x',
			'y',
			'scale',
			'scaleX',
			'scaleY',
			'rotation',
			'skewX',
			'skewY'
		]);
	const i = new Ts.Text({
		x: u(),
		y: p(),
		scale: l(),
		scaleX: o(),
		scaleY: r(),
		rotation: h(),
		skewX: a(),
		skewY: f(),
		..._
	});
	if ((Dt().add(i), !v())) {
		const e = i.getAttrs();
		i.on('transformend', () => {
			u() !== void 0 && u(e.x),
				p() !== void 0 && p(e.y),
				l() !== void 0 && l(e.scale),
				o() !== void 0 && o(e.scaleX),
				r() !== void 0 && r(e.scaleY),
				h() !== void 0 && h(e.rotation),
				a() !== void 0 && a(e.skewX),
				f() !== void 0 && f(e.skewY);
		}),
			i.on('dragend', () => {
				u() !== void 0 && u(e.x), p() !== void 0 && p(e.y);
			});
	}
	return (
		Object.keys(_)
			.filter((e) => !e.startsWith('on'))
			.forEach((e) => {
				Y(() => {
					i.setAttr(e, _[e]);
				});
			}),
		Y(() => {
			i.setAttr('x', u());
		}),
		Y(() => {
			i.setAttr('y', p());
		}),
		Y(() => {
			i.setAttr('scale', l());
		}),
		Y(() => {
			i.setAttr('scaleX', o());
		}),
		Y(() => {
			i.setAttr('scaleY', r());
		}),
		Y(() => {
			i.setAttr('rotation', h());
		}),
		Y(() => {
			i.setAttr('skewX', a());
		}),
		Y(() => {
			i.setAttr('skewY', f());
		}),
		Tt(_, i),
		At(() => {
			i.destroy();
		}),
		_t({ node: i })
	);
}
var be = {},
	Mr;
function Es() {
	if (Mr) return be;
	(Mr = 1), Object.defineProperty(be, '__esModule', { value: !0 }), (be.TextPath = void 0);
	const t = ot(),
		n = tt(),
		v = ct(),
		u = Ni(),
		p = Ii(),
		l = et(),
		o = $(),
		r = '',
		h = 'normal';
	function a(i) {
		i.fillText(this.partialText, 0, 0);
	}
	function f(i) {
		i.strokeText(this.partialText, 0, 0);
	}
	let _ = class extends v.Shape {
		constructor(e) {
			super(e),
				(this.dummyCanvas = t.Util.createCanvasElement()),
				(this.dataArray = []),
				this._readDataAttribute(),
				this.on('dataChange.konva', function () {
					this._readDataAttribute(), this._setTextData();
				}),
				this.on(
					'textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva',
					this._setTextData
				),
				this._setTextData();
		}
		_getTextPathLength() {
			return u.Path.getPathLength(this.dataArray);
		}
		_getPointAtLength(e) {
			if (!this.attrs.data) return null;
			const c = this.pathLength;
			return e - 1 > c ? null : u.Path.getPointAtLengthOfDataArray(e, this.dataArray);
		}
		_readDataAttribute() {
			(this.dataArray = u.Path.parsePathData(this.attrs.data)),
				(this.pathLength = this._getTextPathLength());
		}
		_sceneFunc(e) {
			e.setAttr('font', this._getContextFont()),
				e.setAttr('textBaseline', this.textBaseline()),
				e.setAttr('textAlign', 'left'),
				e.save();
			const c = this.textDecoration(),
				y = this.fill(),
				b = this.fontSize(),
				k = this.glyphInfo;
			c === 'underline' && e.beginPath();
			for (let d = 0; d < k.length; d++) {
				e.save();
				const s = k[d].p0;
				e.translate(s.x, s.y),
					e.rotate(k[d].rotation),
					(this.partialText = k[d].text),
					e.fillStrokeShape(this),
					c === 'underline' && (d === 0 && e.moveTo(0, b / 2 + 1), e.lineTo(b, b / 2 + 1)),
					e.restore();
			}
			c === 'underline' && ((e.strokeStyle = y), (e.lineWidth = b / 20), e.stroke()), e.restore();
		}
		_hitFunc(e) {
			e.beginPath();
			const c = this.glyphInfo;
			if (c.length >= 1) {
				const y = c[0].p0;
				e.moveTo(y.x, y.y);
			}
			for (let y = 0; y < c.length; y++) {
				const b = c[y].p1;
				e.lineTo(b.x, b.y);
			}
			e.setAttr('lineWidth', this.fontSize()), e.setAttr('strokeStyle', this.colorKey), e.stroke();
		}
		getTextWidth() {
			return this.textWidth;
		}
		getTextHeight() {
			return (
				t.Util.warn(
					'text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.'
				),
				this.textHeight
			);
		}
		setText(e) {
			return p.Text.prototype.setText.call(this, e);
		}
		_getContextFont() {
			return p.Text.prototype._getContextFont.call(this);
		}
		_getTextSize(e) {
			const y = this.dummyCanvas.getContext('2d');
			y.save(), (y.font = this._getContextFont());
			const b = y.measureText(e);
			return y.restore(), { width: b.width, height: parseInt(`${this.fontSize()}`, 10) };
		}
		_setTextData() {
			const { width: e, height: c } = this._getTextSize(this.attrs.text);
			if (((this.textWidth = e), (this.textHeight = c), (this.glyphInfo = []), !this.attrs.data))
				return null;
			const y = this.letterSpacing(),
				b = this.align(),
				k = this.kerningFunc(),
				d = Math.max(this.textWidth + ((this.attrs.text || '').length - 1) * y, 0);
			let s = 0;
			b === 'center' && (s = Math.max(0, this.pathLength / 2 - d / 2)),
				b === 'right' && (s = Math.max(0, this.pathLength - d));
			const m = (0, p.stringToArray)(this.text());
			let w = s;
			for (let A = 0; A < m.length; A++) {
				const M = this._getPointAtLength(w);
				if (!M) return;
				let T = this._getTextSize(m[A]).width + y;
				if (m[A] === ' ' && b === 'justify') {
					const C = this.text().split(' ').length - 1;
					T += (this.pathLength - d) / C;
				}
				const P = this._getPointAtLength(w + T);
				if (!P) return;
				const x = u.Path.getLineLength(M.x, M.y, P.x, P.y);
				let E = 0;
				if (k)
					try {
						E = k(m[A - 1], m[A]) * this.fontSize();
					} catch {
						E = 0;
					}
				(M.x += E), (P.x += E), (this.textWidth += E);
				const N = u.Path.getPointOnLine(E + x / 2, M.x, M.y, P.x, P.y),
					g = Math.atan2(P.y - M.y, P.x - M.x);
				this.glyphInfo.push({
					transposeX: N.x,
					transposeY: N.y,
					text: m[A],
					rotation: g,
					p0: M,
					p1: P
				}),
					(w += T);
			}
		}
		getSelfRect() {
			if (!this.glyphInfo.length) return { x: 0, y: 0, width: 0, height: 0 };
			const e = [];
			this.glyphInfo.forEach(function (w) {
				e.push(w.p0.x), e.push(w.p0.y), e.push(w.p1.x), e.push(w.p1.y);
			});
			let c = e[0] || 0,
				y = e[0] || 0,
				b = e[1] || 0,
				k = e[1] || 0,
				d,
				s;
			for (let w = 0; w < e.length / 2; w++)
				(d = e[w * 2]),
					(s = e[w * 2 + 1]),
					(c = Math.min(c, d)),
					(y = Math.max(y, d)),
					(b = Math.min(b, s)),
					(k = Math.max(k, s));
			const m = this.fontSize();
			return { x: c - m / 2, y: b - m / 2, width: y - c + m, height: k - b + m };
		}
		destroy() {
			return t.Util.releaseCanvas(this.dummyCanvas), super.destroy();
		}
	};
	return (
		(be.TextPath = _),
		(_.prototype._fillFunc = a),
		(_.prototype._strokeFunc = f),
		(_.prototype._fillFuncHit = a),
		(_.prototype._strokeFuncHit = f),
		(_.prototype.className = 'TextPath'),
		(_.prototype._attrsAffectingSize = ['text', 'fontSize', 'data']),
		(0, o._registerNode)(_),
		n.Factory.addGetterSetter(_, 'data'),
		n.Factory.addGetterSetter(_, 'fontFamily', 'Arial'),
		n.Factory.addGetterSetter(_, 'fontSize', 12, (0, l.getNumberValidator)()),
		n.Factory.addGetterSetter(_, 'fontStyle', h),
		n.Factory.addGetterSetter(_, 'align', 'left'),
		n.Factory.addGetterSetter(_, 'letterSpacing', 0, (0, l.getNumberValidator)()),
		n.Factory.addGetterSetter(_, 'textBaseline', 'middle'),
		n.Factory.addGetterSetter(_, 'fontVariant', h),
		n.Factory.addGetterSetter(_, 'text', r),
		n.Factory.addGetterSetter(_, 'textDecoration', ''),
		n.Factory.addGetterSetter(_, 'kerningFunc', void 0),
		be
	);
}
var Se = {},
	Gr;
function Rs() {
	if (Gr) return Se;
	(Gr = 1), Object.defineProperty(Se, '__esModule', { value: !0 }), (Se.Transformer = void 0);
	const t = ot(),
		n = tt(),
		v = ht(),
		u = ct(),
		p = Di(),
		l = Oi(),
		o = $(),
		r = et(),
		h = $(),
		a = 'tr-konva',
		f = [
			'resizeEnabledChange',
			'rotateAnchorOffsetChange',
			'rotateEnabledChange',
			'enabledAnchorsChange',
			'anchorSizeChange',
			'borderEnabledChange',
			'borderStrokeChange',
			'borderStrokeWidthChange',
			'borderDashChange',
			'anchorStrokeChange',
			'anchorStrokeWidthChange',
			'anchorFillChange',
			'anchorCornerRadiusChange',
			'ignoreStrokeChange',
			'anchorStyleFuncChange'
		]
			.map((T) => T + `.${a}`)
			.join(' '),
		_ = 'nodesRect',
		i = [
			'widthChange',
			'heightChange',
			'scaleXChange',
			'scaleYChange',
			'skewXChange',
			'skewYChange',
			'rotationChange',
			'offsetXChange',
			'offsetYChange',
			'transformsEnabledChange',
			'strokeWidthChange'
		],
		e = {
			'top-left': -45,
			'top-center': 0,
			'top-right': 45,
			'middle-right': -90,
			'middle-left': 90,
			'bottom-left': -135,
			'bottom-center': 180,
			'bottom-right': 135
		},
		c = 'ontouchstart' in o.Konva._global;
	function y(T, P, x) {
		if (T === 'rotater') return x;
		P += t.Util.degToRad(e[T] || 0);
		const E = ((t.Util.radToDeg(P) % 360) + 360) % 360;
		return t.Util._inRange(E, 315 + 22.5, 360) || t.Util._inRange(E, 0, 22.5)
			? 'ns-resize'
			: t.Util._inRange(E, 45 - 22.5, 45 + 22.5)
				? 'nesw-resize'
				: t.Util._inRange(E, 90 - 22.5, 90 + 22.5)
					? 'ew-resize'
					: t.Util._inRange(E, 135 - 22.5, 135 + 22.5)
						? 'nwse-resize'
						: t.Util._inRange(E, 180 - 22.5, 180 + 22.5)
							? 'ns-resize'
							: t.Util._inRange(E, 225 - 22.5, 225 + 22.5)
								? 'nesw-resize'
								: t.Util._inRange(E, 270 - 22.5, 270 + 22.5)
									? 'ew-resize'
									: t.Util._inRange(E, 315 - 22.5, 315 + 22.5)
										? 'nwse-resize'
										: (t.Util.error('Transformer has unknown angle for cursor detection: ' + E),
											'pointer');
	}
	const b = [
		'top-left',
		'top-center',
		'top-right',
		'middle-right',
		'middle-left',
		'bottom-left',
		'bottom-center',
		'bottom-right'
	];
	function k(T) {
		return {
			x: T.x + (T.width / 2) * Math.cos(T.rotation) + (T.height / 2) * Math.sin(-T.rotation),
			y: T.y + (T.height / 2) * Math.cos(T.rotation) + (T.width / 2) * Math.sin(T.rotation)
		};
	}
	function d(T, P, x) {
		const E = x.x + (T.x - x.x) * Math.cos(P) - (T.y - x.y) * Math.sin(P),
			N = x.y + (T.x - x.x) * Math.sin(P) + (T.y - x.y) * Math.cos(P);
		return { ...T, rotation: T.rotation + P, x: E, y: N };
	}
	function s(T, P) {
		const x = k(T);
		return d(T, P, x);
	}
	function m(T, P, x) {
		let E = P;
		for (let N = 0; N < T.length; N++) {
			const g = o.Konva.getAngle(T[N]),
				C = Math.abs(g - P) % (Math.PI * 2);
			Math.min(C, Math.PI * 2 - C) < x && (E = g);
		}
		return E;
	}
	let w = 0,
		A = class extends l.Group {
			constructor(P) {
				super(P),
					(this._movingAnchorName = null),
					(this._transforming = !1),
					this._createElements(),
					(this._handleMouseMove = this._handleMouseMove.bind(this)),
					(this._handleMouseUp = this._handleMouseUp.bind(this)),
					(this.update = this.update.bind(this)),
					this.on(f, this.update),
					this.getNode() && this.update();
			}
			attachTo(P) {
				return this.setNode(P), this;
			}
			setNode(P) {
				return (
					t.Util.warn(
						'tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead.'
					),
					this.setNodes([P])
				);
			}
			getNode() {
				return this._nodes && this._nodes[0];
			}
			_getEventNamespace() {
				return a + this._id;
			}
			setNodes(P = []) {
				this._nodes && this._nodes.length && this.detach();
				const x = P.filter((N) =>
					N.isAncestorOf(this)
						? (t.Util.error(
								'Konva.Transformer cannot be an a child of the node you are trying to attach'
							),
							!1)
						: !0
				);
				return (
					(this._nodes = P = x),
					P.length === 1 && this.useSingleNodeRotation()
						? this.rotation(P[0].getAbsoluteRotation())
						: this.rotation(0),
					this._nodes.forEach((N) => {
						const g = () => {
							this.nodes().length === 1 &&
								this.useSingleNodeRotation() &&
								this.rotation(this.nodes()[0].getAbsoluteRotation()),
								this._resetTransformCache(),
								!this._transforming && !this.isDragging() && this.update();
						};
						if (N._attrsAffectingSize.length) {
							const C = N._attrsAffectingSize
								.map((S) => S + 'Change.' + this._getEventNamespace())
								.join(' ');
							N.on(C, g);
						}
						N.on(i.map((C) => C + `.${this._getEventNamespace()}`).join(' '), g),
							N.on(`absoluteTransformChange.${this._getEventNamespace()}`, g),
							this._proxyDrag(N);
					}),
					this._resetTransformCache(),
					!!this.findOne('.top-left') && this.update(),
					this
				);
			}
			_proxyDrag(P) {
				let x;
				P.on(`dragstart.${this._getEventNamespace()}`, (E) => {
					(x = P.getAbsolutePosition()),
						!this.isDragging() && P !== this.findOne('.back') && this.startDrag(E, !1);
				}),
					P.on(`dragmove.${this._getEventNamespace()}`, (E) => {
						if (!x) return;
						const N = P.getAbsolutePosition(),
							g = N.x - x.x,
							C = N.y - x.y;
						this.nodes().forEach((S) => {
							if (S === P || S.isDragging()) return;
							const R = S.getAbsolutePosition();
							S.setAbsolutePosition({ x: R.x + g, y: R.y + C }), S.startDrag(E);
						}),
							(x = null);
					});
			}
			getNodes() {
				return this._nodes || [];
			}
			getActiveAnchor() {
				return this._movingAnchorName;
			}
			detach() {
				this._nodes &&
					this._nodes.forEach((P) => {
						P.off('.' + this._getEventNamespace());
					}),
					(this._nodes = []),
					this._resetTransformCache();
			}
			_resetTransformCache() {
				this._clearCache(_),
					this._clearCache('transform'),
					this._clearSelfAndDescendantCache('absoluteTransform');
			}
			_getNodeRect() {
				return this._getCache(_, this.__getNodeRect);
			}
			__getNodeShape(P, x = this.rotation(), E) {
				const N = P.getClientRect({
						skipTransform: !0,
						skipShadow: !0,
						skipStroke: this.ignoreStroke()
					}),
					g = P.getAbsoluteScale(E),
					C = P.getAbsolutePosition(E),
					S = N.x * g.x - P.offsetX() * g.x,
					R = N.y * g.y - P.offsetY() * g.y,
					F = (o.Konva.getAngle(P.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2),
					O = {
						x: C.x + S * Math.cos(F) + R * Math.sin(-F),
						y: C.y + R * Math.cos(F) + S * Math.sin(F),
						width: N.width * g.x,
						height: N.height * g.y,
						rotation: F
					};
				return d(O, -o.Konva.getAngle(x), { x: 0, y: 0 });
			}
			__getNodeRect() {
				if (!this.getNode()) return { x: -1e8, y: -1e8, width: 0, height: 0, rotation: 0 };
				const x = [];
				this.nodes().map((F) => {
					const O = F.getClientRect({
							skipTransform: !0,
							skipShadow: !0,
							skipStroke: this.ignoreStroke()
						}),
						I = [
							{ x: O.x, y: O.y },
							{ x: O.x + O.width, y: O.y },
							{ x: O.x + O.width, y: O.y + O.height },
							{ x: O.x, y: O.y + O.height }
						],
						L = F.getAbsoluteTransform();
					I.forEach(function (U) {
						const W = L.point(U);
						x.push(W);
					});
				});
				const E = new t.Transform();
				E.rotate(-o.Konva.getAngle(this.rotation()));
				let N = 1 / 0,
					g = 1 / 0,
					C = -1 / 0,
					S = -1 / 0;
				x.forEach(function (F) {
					const O = E.point(F);
					N === void 0 && ((N = C = O.x), (g = S = O.y)),
						(N = Math.min(N, O.x)),
						(g = Math.min(g, O.y)),
						(C = Math.max(C, O.x)),
						(S = Math.max(S, O.y));
				}),
					E.invert();
				const R = E.point({ x: N, y: g });
				return {
					x: R.x,
					y: R.y,
					width: C - N,
					height: S - g,
					rotation: o.Konva.getAngle(this.rotation())
				};
			}
			getX() {
				return this._getNodeRect().x;
			}
			getY() {
				return this._getNodeRect().y;
			}
			getWidth() {
				return this._getNodeRect().width;
			}
			getHeight() {
				return this._getNodeRect().height;
			}
			_createElements() {
				this._createBack(),
					b.forEach((P) => {
						this._createAnchor(P);
					}),
					this._createAnchor('rotater');
			}
			_createAnchor(P) {
				const x = new p.Rect({
						stroke: 'rgb(0, 161, 255)',
						fill: 'white',
						strokeWidth: 1,
						name: P + ' _anchor',
						dragDistance: 0,
						draggable: !0,
						hitStrokeWidth: c ? 10 : 'auto'
					}),
					E = this;
				x.on('mousedown touchstart', function (N) {
					E._handleMouseDown(N);
				}),
					x.on('dragstart', (N) => {
						x.stopDrag(), (N.cancelBubble = !0);
					}),
					x.on('dragend', (N) => {
						N.cancelBubble = !0;
					}),
					x.on('mouseenter', () => {
						const N = o.Konva.getAngle(this.rotation()),
							g = this.rotateAnchorCursor(),
							C = y(P, N, g);
						x.getStage().content && (x.getStage().content.style.cursor = C),
							(this._cursorChange = !0);
					}),
					x.on('mouseout', () => {
						x.getStage().content && (x.getStage().content.style.cursor = ''),
							(this._cursorChange = !1);
					}),
					this.add(x);
			}
			_createBack() {
				const P = new u.Shape({
					name: 'back',
					width: 0,
					height: 0,
					draggable: !0,
					sceneFunc(x, E) {
						const N = E.getParent(),
							g = N.padding();
						x.beginPath(),
							x.rect(-g, -g, E.width() + g * 2, E.height() + g * 2),
							x.moveTo(E.width() / 2, -g),
							N.rotateEnabled() &&
								N.rotateLineVisible() &&
								x.lineTo(E.width() / 2, -N.rotateAnchorOffset() * t.Util._sign(E.height()) - g),
							x.fillStrokeShape(E);
					},
					hitFunc: (x, E) => {
						if (!this.shouldOverdrawWholeArea()) return;
						const N = this.padding();
						x.beginPath(),
							x.rect(-N, -N, E.width() + N * 2, E.height() + N * 2),
							x.fillStrokeShape(E);
					}
				});
				this.add(P),
					this._proxyDrag(P),
					P.on('dragstart', (x) => {
						x.cancelBubble = !0;
					}),
					P.on('dragmove', (x) => {
						x.cancelBubble = !0;
					}),
					P.on('dragend', (x) => {
						x.cancelBubble = !0;
					}),
					this.on('dragmove', (x) => {
						this.update();
					});
			}
			_handleMouseDown(P) {
				if (this._transforming) return;
				this._movingAnchorName = P.target.name().split(' ')[0];
				const x = this._getNodeRect(),
					E = x.width,
					N = x.height,
					g = Math.sqrt(Math.pow(E, 2) + Math.pow(N, 2));
				(this.sin = Math.abs(N / g)),
					(this.cos = Math.abs(E / g)),
					typeof window < 'u' &&
						(window.addEventListener('mousemove', this._handleMouseMove),
						window.addEventListener('touchmove', this._handleMouseMove),
						window.addEventListener('mouseup', this._handleMouseUp, !0),
						window.addEventListener('touchend', this._handleMouseUp, !0)),
					(this._transforming = !0);
				const C = P.target.getAbsolutePosition(),
					S = P.target.getStage().getPointerPosition();
				(this._anchorDragOffset = { x: S.x - C.x, y: S.y - C.y }),
					w++,
					this._fire('transformstart', { evt: P.evt, target: this.getNode() }),
					this._nodes.forEach((R) => {
						R._fire('transformstart', { evt: P.evt, target: R });
					});
			}
			_handleMouseMove(P) {
				let x, E, N;
				const g = this.findOne('.' + this._movingAnchorName),
					C = g.getStage();
				C.setPointersPositions(P);
				const S = C.getPointerPosition();
				let R = { x: S.x - this._anchorDragOffset.x, y: S.y - this._anchorDragOffset.y };
				const F = g.getAbsolutePosition();
				this.anchorDragBoundFunc() && (R = this.anchorDragBoundFunc()(F, R, P)),
					g.setAbsolutePosition(R);
				const O = g.getAbsolutePosition();
				if (F.x === O.x && F.y === O.y) return;
				if (this._movingAnchorName === 'rotater') {
					const X = this._getNodeRect();
					(x = g.x() - X.width / 2), (E = -g.y() + X.height / 2);
					let q = Math.atan2(-E, x) + Math.PI / 2;
					X.height < 0 && (q -= Math.PI);
					const Q = o.Konva.getAngle(this.rotation()) + q,
						it = o.Konva.getAngle(this.rotationSnapTolerance()),
						Z = m(this.rotationSnaps(), Q, it) - X.rotation,
						dt = s(X, Z);
					this._fitNodesInto(dt, P);
					return;
				}
				const I = this.shiftBehavior();
				let L;
				I === 'inverted'
					? (L = this.keepRatio() && !P.shiftKey)
					: I === 'none'
						? (L = this.keepRatio())
						: (L = this.keepRatio() || P.shiftKey);
				var z = this.centeredScaling() || P.altKey;
				if (this._movingAnchorName === 'top-left') {
					if (L) {
						var U = z
							? { x: this.width() / 2, y: this.height() / 2 }
							: { x: this.findOne('.bottom-right').x(), y: this.findOne('.bottom-right').y() };
						N = Math.sqrt(Math.pow(U.x - g.x(), 2) + Math.pow(U.y - g.y(), 2));
						var W = this.findOne('.top-left').x() > U.x ? -1 : 1,
							B = this.findOne('.top-left').y() > U.y ? -1 : 1;
						(x = N * this.cos * W),
							(E = N * this.sin * B),
							this.findOne('.top-left').x(U.x - x),
							this.findOne('.top-left').y(U.y - E);
					}
				} else if (this._movingAnchorName === 'top-center') this.findOne('.top-left').y(g.y());
				else if (this._movingAnchorName === 'top-right') {
					if (L) {
						var U = z
							? { x: this.width() / 2, y: this.height() / 2 }
							: { x: this.findOne('.bottom-left').x(), y: this.findOne('.bottom-left').y() };
						N = Math.sqrt(Math.pow(g.x() - U.x, 2) + Math.pow(U.y - g.y(), 2));
						var W = this.findOne('.top-right').x() < U.x ? -1 : 1,
							B = this.findOne('.top-right').y() > U.y ? -1 : 1;
						(x = N * this.cos * W),
							(E = N * this.sin * B),
							this.findOne('.top-right').x(U.x + x),
							this.findOne('.top-right').y(U.y - E);
					}
					var H = g.position();
					this.findOne('.top-left').y(H.y), this.findOne('.bottom-right').x(H.x);
				} else if (this._movingAnchorName === 'middle-left') this.findOne('.top-left').x(g.x());
				else if (this._movingAnchorName === 'middle-right') this.findOne('.bottom-right').x(g.x());
				else if (this._movingAnchorName === 'bottom-left') {
					if (L) {
						var U = z
							? { x: this.width() / 2, y: this.height() / 2 }
							: { x: this.findOne('.top-right').x(), y: this.findOne('.top-right').y() };
						N = Math.sqrt(Math.pow(U.x - g.x(), 2) + Math.pow(g.y() - U.y, 2));
						var W = U.x < g.x() ? -1 : 1,
							B = g.y() < U.y ? -1 : 1;
						(x = N * this.cos * W), (E = N * this.sin * B), g.x(U.x - x), g.y(U.y + E);
					}
					(H = g.position()),
						this.findOne('.top-left').x(H.x),
						this.findOne('.bottom-right').y(H.y);
				} else if (this._movingAnchorName === 'bottom-center')
					this.findOne('.bottom-right').y(g.y());
				else if (this._movingAnchorName === 'bottom-right') {
					if (L) {
						var U = z
							? { x: this.width() / 2, y: this.height() / 2 }
							: { x: this.findOne('.top-left').x(), y: this.findOne('.top-left').y() };
						N = Math.sqrt(Math.pow(g.x() - U.x, 2) + Math.pow(g.y() - U.y, 2));
						var W = this.findOne('.bottom-right').x() < U.x ? -1 : 1,
							B = this.findOne('.bottom-right').y() < U.y ? -1 : 1;
						(x = N * this.cos * W),
							(E = N * this.sin * B),
							this.findOne('.bottom-right').x(U.x + x),
							this.findOne('.bottom-right').y(U.y + E);
					}
				} else
					console.error(
						new Error('Wrong position argument of selection resizer: ' + this._movingAnchorName)
					);
				var z = this.centeredScaling() || P.altKey;
				if (z) {
					const X = this.findOne('.top-left'),
						q = this.findOne('.bottom-right'),
						K = X.x(),
						Q = X.y(),
						it = this.getWidth() - q.x(),
						rt = this.getHeight() - q.y();
					q.move({ x: -K, y: -Q }), X.move({ x: it, y: rt });
				}
				const j = this.findOne('.top-left').getAbsolutePosition();
				(x = j.x), (E = j.y);
				const G = this.findOne('.bottom-right').x() - this.findOne('.top-left').x(),
					D = this.findOne('.bottom-right').y() - this.findOne('.top-left').y();
				this._fitNodesInto(
					{ x, y: E, width: G, height: D, rotation: o.Konva.getAngle(this.rotation()) },
					P
				);
			}
			_handleMouseUp(P) {
				this._removeEvents(P);
			}
			getAbsoluteTransform() {
				return this.getTransform();
			}
			_removeEvents(P) {
				var x;
				if (this._transforming) {
					(this._transforming = !1),
						typeof window < 'u' &&
							(window.removeEventListener('mousemove', this._handleMouseMove),
							window.removeEventListener('touchmove', this._handleMouseMove),
							window.removeEventListener('mouseup', this._handleMouseUp, !0),
							window.removeEventListener('touchend', this._handleMouseUp, !0));
					const E = this.getNode();
					w--,
						this._fire('transformend', { evt: P, target: E }),
						(x = this.getLayer()) === null || x === void 0 || x.batchDraw(),
						E &&
							this._nodes.forEach((N) => {
								var g;
								N._fire('transformend', { evt: P, target: N }),
									(g = N.getLayer()) === null || g === void 0 || g.batchDraw();
							}),
						(this._movingAnchorName = null);
				}
			}
			_fitNodesInto(P, x) {
				const E = this._getNodeRect(),
					N = 1;
				if (t.Util._inRange(P.width, -this.padding() * 2 - N, N)) {
					this.update();
					return;
				}
				if (t.Util._inRange(P.height, -this.padding() * 2 - N, N)) {
					this.update();
					return;
				}
				const g = new t.Transform();
				if (
					(g.rotate(o.Konva.getAngle(this.rotation())),
					this._movingAnchorName && P.width < 0 && this._movingAnchorName.indexOf('left') >= 0)
				) {
					const L = g.point({ x: -this.padding() * 2, y: 0 });
					(P.x += L.x),
						(P.y += L.y),
						(P.width += this.padding() * 2),
						(this._movingAnchorName = this._movingAnchorName.replace('left', 'right')),
						(this._anchorDragOffset.x -= L.x),
						(this._anchorDragOffset.y -= L.y);
				} else if (
					this._movingAnchorName &&
					P.width < 0 &&
					this._movingAnchorName.indexOf('right') >= 0
				) {
					const L = g.point({ x: this.padding() * 2, y: 0 });
					(this._movingAnchorName = this._movingAnchorName.replace('right', 'left')),
						(this._anchorDragOffset.x -= L.x),
						(this._anchorDragOffset.y -= L.y),
						(P.width += this.padding() * 2);
				}
				if (this._movingAnchorName && P.height < 0 && this._movingAnchorName.indexOf('top') >= 0) {
					const L = g.point({ x: 0, y: -this.padding() * 2 });
					(P.x += L.x),
						(P.y += L.y),
						(this._movingAnchorName = this._movingAnchorName.replace('top', 'bottom')),
						(this._anchorDragOffset.x -= L.x),
						(this._anchorDragOffset.y -= L.y),
						(P.height += this.padding() * 2);
				} else if (
					this._movingAnchorName &&
					P.height < 0 &&
					this._movingAnchorName.indexOf('bottom') >= 0
				) {
					const L = g.point({ x: 0, y: this.padding() * 2 });
					(this._movingAnchorName = this._movingAnchorName.replace('bottom', 'top')),
						(this._anchorDragOffset.x -= L.x),
						(this._anchorDragOffset.y -= L.y),
						(P.height += this.padding() * 2);
				}
				if (this.boundBoxFunc()) {
					const L = this.boundBoxFunc()(E, P);
					L
						? (P = L)
						: t.Util.warn('boundBoxFunc returned falsy. You should return new bound rect from it!');
				}
				const C = 1e7,
					S = new t.Transform();
				S.translate(E.x, E.y), S.rotate(E.rotation), S.scale(E.width / C, E.height / C);
				const R = new t.Transform(),
					F = P.width / C,
					O = P.height / C;
				this.flipEnabled() === !1
					? (R.translate(P.x, P.y),
						R.rotate(P.rotation),
						R.translate(P.width < 0 ? P.width : 0, P.height < 0 ? P.height : 0),
						R.scale(Math.abs(F), Math.abs(O)))
					: (R.translate(P.x, P.y), R.rotate(P.rotation), R.scale(F, O));
				const I = R.multiply(S.invert());
				this._nodes.forEach((L) => {
					var U;
					const W = L.getParent().getAbsoluteTransform(),
						B = L.getTransform().copy();
					B.translate(L.offsetX(), L.offsetY());
					const H = new t.Transform();
					H.multiply(W.copy().invert()).multiply(I).multiply(W).multiply(B);
					const z = H.decompose();
					L.setAttrs(z), (U = L.getLayer()) === null || U === void 0 || U.batchDraw();
				}),
					this.rotation(t.Util._getRotation(P.rotation)),
					this._nodes.forEach((L) => {
						this._fire('transform', { evt: x, target: L }),
							L._fire('transform', { evt: x, target: L });
					}),
					this._resetTransformCache(),
					this.update(),
					this.getLayer().batchDraw();
			}
			forceUpdate() {
				this._resetTransformCache(), this.update();
			}
			_batchChangeChild(P, x) {
				this.findOne(P).setAttrs(x);
			}
			update() {
				var P;
				const x = this._getNodeRect();
				this.rotation(t.Util._getRotation(x.rotation));
				const E = x.width,
					N = x.height,
					g = this.enabledAnchors(),
					C = this.resizeEnabled(),
					S = this.padding(),
					R = this.anchorSize(),
					F = this.find('._anchor');
				F.forEach((I) => {
					I.setAttrs({
						width: R,
						height: R,
						offsetX: R / 2,
						offsetY: R / 2,
						stroke: this.anchorStroke(),
						strokeWidth: this.anchorStrokeWidth(),
						fill: this.anchorFill(),
						cornerRadius: this.anchorCornerRadius()
					});
				}),
					this._batchChangeChild('.top-left', {
						x: 0,
						y: 0,
						offsetX: R / 2 + S,
						offsetY: R / 2 + S,
						visible: C && g.indexOf('top-left') >= 0
					}),
					this._batchChangeChild('.top-center', {
						x: E / 2,
						y: 0,
						offsetY: R / 2 + S,
						visible: C && g.indexOf('top-center') >= 0
					}),
					this._batchChangeChild('.top-right', {
						x: E,
						y: 0,
						offsetX: R / 2 - S,
						offsetY: R / 2 + S,
						visible: C && g.indexOf('top-right') >= 0
					}),
					this._batchChangeChild('.middle-left', {
						x: 0,
						y: N / 2,
						offsetX: R / 2 + S,
						visible: C && g.indexOf('middle-left') >= 0
					}),
					this._batchChangeChild('.middle-right', {
						x: E,
						y: N / 2,
						offsetX: R / 2 - S,
						visible: C && g.indexOf('middle-right') >= 0
					}),
					this._batchChangeChild('.bottom-left', {
						x: 0,
						y: N,
						offsetX: R / 2 + S,
						offsetY: R / 2 - S,
						visible: C && g.indexOf('bottom-left') >= 0
					}),
					this._batchChangeChild('.bottom-center', {
						x: E / 2,
						y: N,
						offsetY: R / 2 - S,
						visible: C && g.indexOf('bottom-center') >= 0
					}),
					this._batchChangeChild('.bottom-right', {
						x: E,
						y: N,
						offsetX: R / 2 - S,
						offsetY: R / 2 - S,
						visible: C && g.indexOf('bottom-right') >= 0
					}),
					this._batchChangeChild('.rotater', {
						x: E / 2,
						y: -this.rotateAnchorOffset() * t.Util._sign(N) - S,
						visible: this.rotateEnabled()
					}),
					this._batchChangeChild('.back', {
						width: E,
						height: N,
						visible: this.borderEnabled(),
						stroke: this.borderStroke(),
						strokeWidth: this.borderStrokeWidth(),
						dash: this.borderDash(),
						x: 0,
						y: 0
					});
				const O = this.anchorStyleFunc();
				O &&
					F.forEach((I) => {
						O(I);
					}),
					(P = this.getLayer()) === null || P === void 0 || P.batchDraw();
			}
			isTransforming() {
				return this._transforming;
			}
			stopTransform() {
				if (this._transforming) {
					this._removeEvents();
					const P = this.findOne('.' + this._movingAnchorName);
					P && P.stopDrag();
				}
			}
			destroy() {
				return (
					this.getStage() &&
						this._cursorChange &&
						this.getStage().content &&
						(this.getStage().content.style.cursor = ''),
					l.Group.prototype.destroy.call(this),
					this.detach(),
					this._removeEvents(),
					this
				);
			}
			toObject() {
				return v.Node.prototype.toObject.call(this);
			}
			clone(P) {
				return v.Node.prototype.clone.call(this, P);
			}
			getClientRect() {
				return this.nodes().length > 0
					? super.getClientRect()
					: { x: 0, y: 0, width: 0, height: 0 };
			}
		};
	(Se.Transformer = A), (A.isTransforming = () => w > 0);
	function M(T) {
		return (
			T instanceof Array || t.Util.warn('enabledAnchors value should be an array'),
			T instanceof Array &&
				T.forEach(function (P) {
					b.indexOf(P) === -1 &&
						t.Util.warn('Unknown anchor name: ' + P + '. Available names are: ' + b.join(', '));
				}),
			T || []
		);
	}
	return (
		(A.prototype.className = 'Transformer'),
		(0, h._registerNode)(A),
		n.Factory.addGetterSetter(A, 'enabledAnchors', b, M),
		n.Factory.addGetterSetter(A, 'flipEnabled', !0, (0, r.getBooleanValidator)()),
		n.Factory.addGetterSetter(A, 'resizeEnabled', !0),
		n.Factory.addGetterSetter(A, 'anchorSize', 10, (0, r.getNumberValidator)()),
		n.Factory.addGetterSetter(A, 'rotateEnabled', !0),
		n.Factory.addGetterSetter(A, 'rotateLineVisible', !0),
		n.Factory.addGetterSetter(A, 'rotationSnaps', []),
		n.Factory.addGetterSetter(A, 'rotateAnchorOffset', 50, (0, r.getNumberValidator)()),
		n.Factory.addGetterSetter(A, 'rotateAnchorCursor', 'crosshair'),
		n.Factory.addGetterSetter(A, 'rotationSnapTolerance', 5, (0, r.getNumberValidator)()),
		n.Factory.addGetterSetter(A, 'borderEnabled', !0),
		n.Factory.addGetterSetter(A, 'anchorStroke', 'rgb(0, 161, 255)'),
		n.Factory.addGetterSetter(A, 'anchorStrokeWidth', 1, (0, r.getNumberValidator)()),
		n.Factory.addGetterSetter(A, 'anchorFill', 'white'),
		n.Factory.addGetterSetter(A, 'anchorCornerRadius', 0, (0, r.getNumberValidator)()),
		n.Factory.addGetterSetter(A, 'borderStroke', 'rgb(0, 161, 255)'),
		n.Factory.addGetterSetter(A, 'borderStrokeWidth', 1, (0, r.getNumberValidator)()),
		n.Factory.addGetterSetter(A, 'borderDash'),
		n.Factory.addGetterSetter(A, 'keepRatio', !0),
		n.Factory.addGetterSetter(A, 'shiftBehavior', 'default'),
		n.Factory.addGetterSetter(A, 'centeredScaling', !1),
		n.Factory.addGetterSetter(A, 'ignoreStroke', !1),
		n.Factory.addGetterSetter(A, 'padding', 0, (0, r.getNumberValidator)()),
		n.Factory.addGetterSetter(A, 'nodes'),
		n.Factory.addGetterSetter(A, 'node'),
		n.Factory.addGetterSetter(A, 'boundBoxFunc'),
		n.Factory.addGetterSetter(A, 'anchorDragBoundFunc'),
		n.Factory.addGetterSetter(A, 'anchorStyleFunc'),
		n.Factory.addGetterSetter(A, 'shouldOverdrawWholeArea', !1),
		n.Factory.addGetterSetter(A, 'useSingleNodeRotation', !0),
		n.Factory.backCompat(A, {
			lineEnabled: 'borderEnabled',
			rotateHandlerOffset: 'rotateAnchorOffset',
			enabledHandlers: 'enabledAnchors'
		}),
		Se
	);
}
var we = {},
	Nr;
function Fs() {
	if (Nr) return we;
	(Nr = 1), Object.defineProperty(we, '__esModule', { value: !0 }), (we.Wedge = void 0);
	const t = tt(),
		n = ct(),
		v = $(),
		u = et(),
		p = $();
	let l = class extends n.Shape {
		_sceneFunc(r) {
			r.beginPath(),
				r.arc(0, 0, this.radius(), 0, v.Konva.getAngle(this.angle()), this.clockwise()),
				r.lineTo(0, 0),
				r.closePath(),
				r.fillStrokeShape(this);
		}
		getWidth() {
			return this.radius() * 2;
		}
		getHeight() {
			return this.radius() * 2;
		}
		setWidth(r) {
			this.radius(r / 2);
		}
		setHeight(r) {
			this.radius(r / 2);
		}
	};
	return (
		(we.Wedge = l),
		(l.prototype.className = 'Wedge'),
		(l.prototype._centroid = !0),
		(l.prototype._attrsAffectingSize = ['radius']),
		(0, p._registerNode)(l),
		t.Factory.addGetterSetter(l, 'radius', 0, (0, u.getNumberValidator)()),
		t.Factory.addGetterSetter(l, 'angle', 0, (0, u.getNumberValidator)()),
		t.Factory.addGetterSetter(l, 'clockwise', !1),
		t.Factory.backCompat(l, {
			angleDeg: 'angle',
			getAngleDeg: 'getAngle',
			setAngleDeg: 'setAngle'
		}),
		we
	);
}
const Io = { Shape: 'shape', Text: 'text', Image: 'image', Other: 'other' },
	Ci = { Shapes: 'shapes', Text: 'text', Images: 'images' };
class Ms {
	constructor() {
		Bi(this, 'elements', new Map());
	}
	getKey(n, v) {
		return `${n}:${v}`;
	}
	register(n) {
		const v = this.getKey(n.type, n.subType);
		this.elements.set(v, n);
	}
	get(n, v) {
		const u = this.getKey(n, v);
		return this.elements.get(u);
	}
	getByCategory(n) {
		return Array.from(this.elements.values()).filter((v) => v.category === n);
	}
	getEditPanel(n, v) {
		var u;
		return (u = this.get(n, v)) == null ? void 0 : u.editPanel;
	}
	getKonvaComponent(n, v) {
		var u;
		return (u = this.get(n, v)) == null ? void 0 : u.konvaComponent;
	}
}
const Bo = new Ms(),
	at = {
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
	},
	Uo = hn([]);
function Ce(t) {
	return {
		id: `page-${t}-${Date.now()}`,
		pageNumber: t,
		canvasWidth: 500,
		canvasHeight: 400,
		canvasBackgroundColor: '#ffffff',
		shapes: [],
		texts: [],
		images: []
	};
}
function Gs() {
	const {
		subscribe: t,
		set: n,
		update: v
	} = hn({ pages: [Ce(1)], currentPageIndex: 0, readerMode: !1 });
	return {
		subscribe: t,
		addPage: () =>
			v((u) => {
				const p = u.pages.length + 1,
					l = Ce(p);
				return u.pages.push(l), (u.currentPageIndex = u.pages.length - 1), u;
			}),
		deletePage: (u) =>
			v(
				(p) => (
					p.pages.length <= 1 ||
						(p.pages.splice(u, 1),
						p.pages.forEach((l, o) => {
							l.pageNumber = o + 1;
						}),
						p.currentPageIndex >= p.pages.length && (p.currentPageIndex = p.pages.length - 1)),
					p
				)
			),
		setCurrentPage: (u) => v((p) => (u >= 0 && u < p.pages.length && (p.currentPageIndex = u), p)),
		goToNextPage: () =>
			v((u) => (u.currentPageIndex < u.pages.length - 1 && u.currentPageIndex++, u)),
		goToPreviousPage: () => v((u) => (u.currentPageIndex > 0 && u.currentPageIndex--, u)),
		toggleReaderMode: () => v((u) => ((u.readerMode = !u.readerMode), u)),
		updatePageProperty: (u, p, l) =>
			v((o) => (u >= 0 && u < o.pages.length && (o.pages[u][p] = l), o)),
		updateCurrentPageSize: (u, p) =>
			v((l) => {
				const o = l.pages[l.currentPageIndex];
				return o && ((o.canvasWidth = u), (o.canvasHeight = p)), l;
			}),
		updateCurrentPageBackground: (u) =>
			v((p) => {
				const l = p.pages[p.currentPageIndex];
				return l && (l.canvasBackgroundColor = u), p;
			}),
		updateCurrentPageElements: (u, p, l) =>
			v((o) => {
				const r = o.pages[o.currentPageIndex];
				return r && ((r.shapes = u), (r.texts = p), (r.images = l)), o;
			}),
		addElementToCurrentPage: (u, p) =>
			v((l) => {
				const o = l.pages[l.currentPageIndex];
				return (
					o &&
						(u === Ci.Shapes
							? o.shapes.push(p)
							: u === Ci.Text
								? o.texts.push(p)
								: u === Ci.Images && o.images.push(p)),
					l
				);
			}),
		getCurrentPage: (u) => u.pages[u.currentPageIndex],
		resetToSinglePage: () =>
			v((u) => ({
				pages: [u.pages[u.currentPageIndex] || Ce(1)],
				currentPageIndex: 0,
				readerMode: !1
			})),
		importPages: (u) =>
			v((p) =>
				u.length === 0
					? { ...p, pages: [Ce(1)], currentPageIndex: 0 }
					: { ...p, pages: u, currentPageIndex: 0 }
			),
		exportPages: (u) => u.pages,
		reset: () => n({ pages: [Ce(1)], currentPageIndex: 0, readerMode: !1 })
	};
}
const Vo = Gs();
function Ns(t) {
	switch (t.shapeType) {
		case at.Circle:
			return { radius: t.radius };
		case at.Rectangle:
			return { width: t.width, height: t.height };
		case at.Square:
			return { width: t.size, height: t.size };
		case at.Triangle:
			return { sides: 3, radius: t.radius };
		case at.Pentagon:
			return { sides: 5, radius: t.radius };
		case at.Hexagon:
			return { sides: 6, radius: t.radius };
		case at.Diamond:
			return {
				width: t.width,
				height: t.height,
				sceneFunc: (v, u) => {
					const p = u.width() || 40,
						l = u.height() || 60;
					v.beginPath(),
						v.moveTo(p / 2, l * 0.9),
						v.lineTo(p * 0.1, l * 0.3),
						v.lineTo(p * 0.2, l * 0.1),
						v.lineTo(p * 0.8, l * 0.1),
						v.lineTo(p * 0.9, l * 0.3),
						v.closePath(),
						v.fillStrokeShape(u);
				}
			};
		case at.Star:
			return { numPoints: t.numPoints, innerRadius: t.innerRadius, outerRadius: t.outerRadius };
		case at.Ellipse:
			return { radiusX: t.radiusX, radiusY: t.radiusY };
		case at.Arrow:
			return { points: t.points, pointerLength: t.pointerLength, pointerWidth: t.pointerWidth };
		case at.Heart:
			return {
				width: t.width,
				height: t.height,
				sceneFunc: (v, u) => {
					const p = u.width() || 50,
						l = u.height() || 45;
					v.beginPath(),
						v.moveTo(p / 2, l * 0.9),
						v.bezierCurveTo(p / 2, l * 0.6, p * 0.1, l * 0.6, p * 0.1, l * 0.35),
						v.bezierCurveTo(p * 0.1, l * 0.15, p * 0.3, l * 0.1, p / 2, l * 0.25),
						v.bezierCurveTo(p * 0.7, l * 0.1, p * 0.9, l * 0.15, p * 0.9, l * 0.35),
						v.bezierCurveTo(p * 0.9, l * 0.6, p / 2, l * 0.6, p / 2, l * 0.9),
						v.closePath(),
						v.fillStrokeShape(u);
				}
			};
		case at.Cross:
			return {
				width: t.width,
				height: t.height,
				thickness: t.thickness,
				sceneFunc: (v, u) => {
					const p = u.width() || 50,
						l = u.height() || 50,
						r = (u.attrs.thickness || 15) / 2,
						h = p / 2,
						a = l / 2;
					v.beginPath(),
						v.moveTo(h - r, 0),
						v.lineTo(h + r, 0),
						v.lineTo(h + r, a - r),
						v.lineTo(p, a - r),
						v.lineTo(p, a + r),
						v.lineTo(h + r, a + r),
						v.lineTo(h + r, l),
						v.lineTo(h - r, l),
						v.lineTo(h - r, a + r),
						v.lineTo(0, a + r),
						v.lineTo(0, a - r),
						v.lineTo(h - r, a - r),
						v.closePath(),
						v.fillStrokeShape(u);
				}
			};
		default:
			return {};
	}
}
function Yo(t, n) {
	pt(n, !1);
	let v = V(n, 'shapes', 8);
	V(n, 'selectedId', 8);
	let u = V(n, 'onDragEnd', 8),
		p = V(n, 'onElementClick', 8);
	const l = {
		[at.Circle]: ls,
		[at.Rectangle]: Ar,
		[at.Square]: Ar,
		[at.Triangle]: Si,
		[at.Pentagon]: Si,
		[at.Hexagon]: Si,
		[at.Diamond]: wi,
		[at.Star]: Ps,
		[at.Ellipse]: cs,
		[at.Arrow]: ss,
		[at.Heart]: wi,
		[at.Cross]: wi
	};
	function o(a) {
		const f = {
				x: a.x,
				y: a.y,
				fill: a.fill,
				draggable: !0,
				id: a.id,
				stroke: a.stroke,
				strokeWidth: a.strokeWidth,
				opacity: a.opacity ?? 1,
				scaleX: a.scaleX ?? 1,
				scaleY: a.scaleY ?? 1,
				rotation: a.rotation ?? 0,
				subType: a.subType
			},
			_ = Ns(a);
		return { ...f, ..._ };
	}
	fn();
	var r = He(),
		h = Qt(r);
	gn(
		h,
		1,
		v,
		(a) => a.id,
		(a, f) => {
			var _ = He();
			const i = Ot(() => J(f).shapeType || J(f).type),
				e = Ot(() => l[J(i)]),
				c = Ot(() => o(J(f)));
			var y = Qt(_);
			{
				var b = (k) => {
					var d = He(),
						s = Qt(d);
					wa(
						s,
						() => J(e),
						(m, w) => {
							w(
								m,
								Ca(() => J(c), {
									onclick: (A) => {
										(A.cancelBubble = !0), p()(J(f).id);
									},
									ondragend: (A) => u()(J(f), A)
								})
							);
						}
					),
						gt(k, d);
				};
				Ke(y, (k) => {
					J(e) && k(b);
				});
			}
			gt(a, _);
		}
	),
		gt(t, r),
		_t();
}
function Xo(t, n) {
	pt(n, !1);
	let v = V(n, 'images', 8);
	V(n, 'selectedId', 8);
	let u = V(n, 'onDragEnd', 8),
		p = V(n, 'onElementClick', 8);
	function l(h) {
		if ((!h.brightness || h.brightness === 0) && (!h.contrast || h.contrast === 0))
			return h.imageElement;
		const a = document.createElement('canvas'),
			f = a.getContext('2d');
		if (!f || !h.imageElement) return h.imageElement;
		(a.width = h.imageElement.naturalWidth), (a.height = h.imageElement.naturalHeight);
		const _ = [];
		if (h.brightness && h.brightness !== 0) {
			const i = 1 + h.brightness * 0.5;
			_.push(`brightness(${i})`);
		}
		if (h.contrast && h.contrast !== 0) {
			const i = 1 + h.contrast * 0.5;
			_.push(`contrast(${i})`);
		}
		return (f.filter = _.join(' ')), f.drawImage(h.imageElement, 0, 0), (f.filter = 'none'), a;
	}
	fn();
	var o = He(),
		r = Qt(o);
	gn(
		r,
		1,
		v,
		(h) => h.id,
		(h, a) => {
			const f = Ot(() => l(J(a))),
				_ = Ot(() => J(a).opacity || 1),
				i = Ot(() => J(a).scaleX || 1),
				e = Ot(() => J(a).scaleY || 1),
				c = Ot(() => J(a).rotation || 0);
			ms(h, {
				get x() {
					return J(a).x;
				},
				get y() {
					return J(a).y;
				},
				get width() {
					return J(a).width;
				},
				get height() {
					return J(a).height;
				},
				get image() {
					return J(f);
				},
				get opacity() {
					return J(_);
				},
				get scaleX() {
					return J(i);
				},
				get scaleY() {
					return J(e);
				},
				get rotation() {
					return J(c);
				},
				draggable: !0,
				get id() {
					return J(a).id;
				},
				onclick: (y) => {
					(y.cancelBubble = !0), p()(J(a).id);
				},
				ondragend: (y) => u()(J(a), y)
			});
		}
	),
		gt(t, o),
		_t();
}
var $e = { exports: {} },
	xe = {},
	ke = {},
	Or;
function Os() {
	if (Or) return ke;
	(Or = 1), Object.defineProperty(ke, '__esModule', { value: !0 }), (ke.Blur = void 0);
	const t = tt(),
		n = ht(),
		v = et();
	function u() {
		(this.r = 0), (this.g = 0), (this.b = 0), (this.a = 0), (this.next = null);
	}
	const p = [
			512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364,
			328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364,
			345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323,
			312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364,
			354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465,
			456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323,
			318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475,
			468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364,
			359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287,
			284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465,
			460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385,
			381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323,
			320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275,
			273, 271, 269, 267, 265, 263, 261, 259
		],
		l = [
			9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18,
			18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20,
			20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21,
			21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22,
			22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
			22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
			23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
			23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24,
			24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
			24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
			24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24
		];
	function o(h, a) {
		const f = h.data,
			_ = h.width,
			i = h.height;
		let e, c, y, b, k, d, s, m, w, A, M, T, P, x, E, N, g, C, S, R, F, O, I, L;
		const U = a + a + 1,
			W = _ - 1,
			B = i - 1,
			H = a + 1,
			z = (H * (H + 1)) / 2,
			j = new u(),
			G = p[a],
			D = l[a];
		let X = null,
			q = j,
			K = null,
			Q = null;
		for (y = 1; y < U; y++) (q = q.next = new u()), y === H && (X = q);
		for (q.next = j, s = d = 0, c = 0; c < i; c++) {
			for (
				N = g = C = S = m = w = A = M = 0,
					T = H * (R = f[d]),
					P = H * (F = f[d + 1]),
					x = H * (O = f[d + 2]),
					E = H * (I = f[d + 3]),
					m += z * R,
					w += z * F,
					A += z * O,
					M += z * I,
					q = j,
					y = 0;
				y < H;
				y++
			)
				(q.r = R), (q.g = F), (q.b = O), (q.a = I), (q = q.next);
			for (y = 1; y < H; y++)
				(b = d + ((W < y ? W : y) << 2)),
					(m += (q.r = R = f[b]) * (L = H - y)),
					(w += (q.g = F = f[b + 1]) * L),
					(A += (q.b = O = f[b + 2]) * L),
					(M += (q.a = I = f[b + 3]) * L),
					(N += R),
					(g += F),
					(C += O),
					(S += I),
					(q = q.next);
			for (K = j, Q = X, e = 0; e < _; e++)
				(f[d + 3] = I = (M * G) >> D),
					I !== 0
						? ((I = 255 / I),
							(f[d] = ((m * G) >> D) * I),
							(f[d + 1] = ((w * G) >> D) * I),
							(f[d + 2] = ((A * G) >> D) * I))
						: (f[d] = f[d + 1] = f[d + 2] = 0),
					(m -= T),
					(w -= P),
					(A -= x),
					(M -= E),
					(T -= K.r),
					(P -= K.g),
					(x -= K.b),
					(E -= K.a),
					(b = (s + ((b = e + a + 1) < W ? b : W)) << 2),
					(N += K.r = f[b]),
					(g += K.g = f[b + 1]),
					(C += K.b = f[b + 2]),
					(S += K.a = f[b + 3]),
					(m += N),
					(w += g),
					(A += C),
					(M += S),
					(K = K.next),
					(T += R = Q.r),
					(P += F = Q.g),
					(x += O = Q.b),
					(E += I = Q.a),
					(N -= R),
					(g -= F),
					(C -= O),
					(S -= I),
					(Q = Q.next),
					(d += 4);
			s += _;
		}
		for (e = 0; e < _; e++) {
			for (
				g = C = S = N = w = A = M = m = 0,
					d = e << 2,
					T = H * (R = f[d]),
					P = H * (F = f[d + 1]),
					x = H * (O = f[d + 2]),
					E = H * (I = f[d + 3]),
					m += z * R,
					w += z * F,
					A += z * O,
					M += z * I,
					q = j,
					y = 0;
				y < H;
				y++
			)
				(q.r = R), (q.g = F), (q.b = O), (q.a = I), (q = q.next);
			for (k = _, y = 1; y <= a; y++)
				(d = (k + e) << 2),
					(m += (q.r = R = f[d]) * (L = H - y)),
					(w += (q.g = F = f[d + 1]) * L),
					(A += (q.b = O = f[d + 2]) * L),
					(M += (q.a = I = f[d + 3]) * L),
					(N += R),
					(g += F),
					(C += O),
					(S += I),
					(q = q.next),
					y < B && (k += _);
			for (d = e, K = j, Q = X, c = 0; c < i; c++)
				(b = d << 2),
					(f[b + 3] = I = (M * G) >> D),
					I > 0
						? ((I = 255 / I),
							(f[b] = ((m * G) >> D) * I),
							(f[b + 1] = ((w * G) >> D) * I),
							(f[b + 2] = ((A * G) >> D) * I))
						: (f[b] = f[b + 1] = f[b + 2] = 0),
					(m -= T),
					(w -= P),
					(A -= x),
					(M -= E),
					(T -= K.r),
					(P -= K.g),
					(x -= K.b),
					(E -= K.a),
					(b = (e + ((b = c + H) < B ? b : B) * _) << 2),
					(m += N += K.r = f[b]),
					(w += g += K.g = f[b + 1]),
					(A += C += K.b = f[b + 2]),
					(M += S += K.a = f[b + 3]),
					(K = K.next),
					(T += R = Q.r),
					(P += F = Q.g),
					(x += O = Q.b),
					(E += I = Q.a),
					(N -= R),
					(g -= F),
					(C -= O),
					(S -= I),
					(Q = Q.next),
					(d += _);
		}
	}
	const r = function (a) {
		const f = Math.round(this.blurRadius());
		f > 0 && o(a, f);
	};
	return (
		(ke.Blur = r),
		t.Factory.addGetterSetter(
			n.Node,
			'blurRadius',
			0,
			(0, v.getNumberValidator)(),
			t.Factory.afterSetFilter
		),
		ke
	);
}
var Ae = {},
	Lr;
function Ls() {
	if (Lr) return Ae;
	(Lr = 1), Object.defineProperty(Ae, '__esModule', { value: !0 }), (Ae.Brighten = void 0);
	const t = tt(),
		n = ht(),
		v = et(),
		u = function (p) {
			const l = this.brightness() * 255,
				o = p.data,
				r = o.length;
			for (let h = 0; h < r; h += 4) (o[h] += l), (o[h + 1] += l), (o[h + 2] += l);
		};
	return (
		(Ae.Brighten = u),
		t.Factory.addGetterSetter(
			n.Node,
			'brightness',
			0,
			(0, v.getNumberValidator)(),
			t.Factory.afterSetFilter
		),
		Ae
	);
}
var Pe = {},
	Dr;
function Ds() {
	if (Dr) return Pe;
	(Dr = 1), Object.defineProperty(Pe, '__esModule', { value: !0 }), (Pe.Contrast = void 0);
	const t = tt(),
		n = ht(),
		v = et(),
		u = function (p) {
			const l = Math.pow((this.contrast() + 100) / 100, 2),
				o = p.data,
				r = o.length;
			let h = 150,
				a = 150,
				f = 150;
			for (let _ = 0; _ < r; _ += 4)
				(h = o[_]),
					(a = o[_ + 1]),
					(f = o[_ + 2]),
					(h /= 255),
					(h -= 0.5),
					(h *= l),
					(h += 0.5),
					(h *= 255),
					(a /= 255),
					(a -= 0.5),
					(a *= l),
					(a += 0.5),
					(a *= 255),
					(f /= 255),
					(f -= 0.5),
					(f *= l),
					(f += 0.5),
					(f *= 255),
					(h = h < 0 ? 0 : h > 255 ? 255 : h),
					(a = a < 0 ? 0 : a > 255 ? 255 : a),
					(f = f < 0 ? 0 : f > 255 ? 255 : f),
					(o[_] = h),
					(o[_ + 1] = a),
					(o[_ + 2] = f);
		};
	return (
		(Pe.Contrast = u),
		t.Factory.addGetterSetter(
			n.Node,
			'contrast',
			0,
			(0, v.getNumberValidator)(),
			t.Factory.afterSetFilter
		),
		Pe
	);
}
var Te = {},
	Ir;
function Is() {
	if (Ir) return Te;
	(Ir = 1), Object.defineProperty(Te, '__esModule', { value: !0 }), (Te.Emboss = void 0);
	const t = tt(),
		n = ht(),
		v = ot(),
		u = et(),
		p = function (l) {
			const o = this.embossStrength() * 10,
				r = this.embossWhiteLevel() * 255,
				h = this.embossDirection(),
				a = this.embossBlend(),
				f = l.data,
				_ = l.width,
				i = l.height,
				e = _ * 4;
			let c = 0,
				y = 0,
				b = i;
			switch (h) {
				case 'top-left':
					(c = -1), (y = -1);
					break;
				case 'top':
					(c = -1), (y = 0);
					break;
				case 'top-right':
					(c = -1), (y = 1);
					break;
				case 'right':
					(c = 0), (y = 1);
					break;
				case 'bottom-right':
					(c = 1), (y = 1);
					break;
				case 'bottom':
					(c = 1), (y = 0);
					break;
				case 'bottom-left':
					(c = 1), (y = -1);
					break;
				case 'left':
					(c = 0), (y = -1);
					break;
				default:
					v.Util.error('Unknown emboss direction: ' + h);
			}
			do {
				const k = (b - 1) * e;
				let d = c;
				b + d < 1 && (d = 0), b + d > i && (d = 0);
				const s = (b - 1 + d) * _ * 4;
				let m = _;
				do {
					const w = k + (m - 1) * 4;
					let A = y;
					m + A < 1 && (A = 0), m + A > _ && (A = 0);
					const M = s + (m - 1 + A) * 4,
						T = f[w] - f[M],
						P = f[w + 1] - f[M + 1],
						x = f[w + 2] - f[M + 2];
					let E = T;
					const N = E > 0 ? E : -E,
						g = P > 0 ? P : -P,
						C = x > 0 ? x : -x;
					if ((g > N && (E = P), C > N && (E = x), (E *= o), a)) {
						const S = f[w] + E,
							R = f[w + 1] + E,
							F = f[w + 2] + E;
						(f[w] = S > 255 ? 255 : S < 0 ? 0 : S),
							(f[w + 1] = R > 255 ? 255 : R < 0 ? 0 : R),
							(f[w + 2] = F > 255 ? 255 : F < 0 ? 0 : F);
					} else {
						let S = r - E;
						S < 0 ? (S = 0) : S > 255 && (S = 255), (f[w] = f[w + 1] = f[w + 2] = S);
					}
				} while (--m);
			} while (--b);
		};
	return (
		(Te.Emboss = p),
		t.Factory.addGetterSetter(
			n.Node,
			'embossStrength',
			0.5,
			(0, u.getNumberValidator)(),
			t.Factory.afterSetFilter
		),
		t.Factory.addGetterSetter(
			n.Node,
			'embossWhiteLevel',
			0.5,
			(0, u.getNumberValidator)(),
			t.Factory.afterSetFilter
		),
		t.Factory.addGetterSetter(
			n.Node,
			'embossDirection',
			'top-left',
			void 0,
			t.Factory.afterSetFilter
		),
		t.Factory.addGetterSetter(n.Node, 'embossBlend', !1, void 0, t.Factory.afterSetFilter),
		Te
	);
}
var Ee = {},
	Br;
function Bs() {
	if (Br) return Ee;
	(Br = 1), Object.defineProperty(Ee, '__esModule', { value: !0 }), (Ee.Enhance = void 0);
	const t = tt(),
		n = ht(),
		v = et();
	function u(l, o, r, h, a) {
		const f = r - o,
			_ = a - h;
		if (f === 0) return h + _ / 2;
		if (_ === 0) return h;
		let i = (l - o) / f;
		return (i = _ * i + h), i;
	}
	const p = function (l) {
		const o = l.data,
			r = o.length;
		let h = o[0],
			a = h,
			f,
			_ = o[1],
			i = _,
			e,
			c = o[2],
			y = c,
			b;
		const k = this.enhance();
		if (k === 0) return;
		for (let E = 0; E < r; E += 4)
			(f = o[E + 0]),
				f < h ? (h = f) : f > a && (a = f),
				(e = o[E + 1]),
				e < _ ? (_ = e) : e > i && (i = e),
				(b = o[E + 2]),
				b < c ? (c = b) : b > y && (y = b);
		a === h && ((a = 255), (h = 0)),
			i === _ && ((i = 255), (_ = 0)),
			y === c && ((y = 255), (c = 0));
		let d, s, m, w, A, M, T, P, x;
		k > 0
			? ((s = a + k * (255 - a)),
				(m = h - k * (h - 0)),
				(A = i + k * (255 - i)),
				(M = _ - k * (_ - 0)),
				(P = y + k * (255 - y)),
				(x = c - k * (c - 0)))
			: ((d = (a + h) * 0.5),
				(s = a + k * (a - d)),
				(m = h + k * (h - d)),
				(w = (i + _) * 0.5),
				(A = i + k * (i - w)),
				(M = _ + k * (_ - w)),
				(T = (y + c) * 0.5),
				(P = y + k * (y - T)),
				(x = c + k * (c - T)));
		for (let E = 0; E < r; E += 4)
			(o[E + 0] = u(o[E + 0], h, a, m, s)),
				(o[E + 1] = u(o[E + 1], _, i, M, A)),
				(o[E + 2] = u(o[E + 2], c, y, x, P));
	};
	return (
		(Ee.Enhance = p),
		t.Factory.addGetterSetter(
			n.Node,
			'enhance',
			0,
			(0, v.getNumberValidator)(),
			t.Factory.afterSetFilter
		),
		Ee
	);
}
var Re = {},
	Ur;
function Us() {
	if (Ur) return Re;
	(Ur = 1), Object.defineProperty(Re, '__esModule', { value: !0 }), (Re.Grayscale = void 0);
	const t = function (n) {
		const v = n.data,
			u = v.length;
		for (let p = 0; p < u; p += 4) {
			const l = 0.34 * v[p] + 0.5 * v[p + 1] + 0.16 * v[p + 2];
			(v[p] = l), (v[p + 1] = l), (v[p + 2] = l);
		}
	};
	return (Re.Grayscale = t), Re;
}
var Fe = {},
	Vr;
function Vs() {
	if (Vr) return Fe;
	(Vr = 1), Object.defineProperty(Fe, '__esModule', { value: !0 }), (Fe.HSL = void 0);
	const t = tt(),
		n = ht(),
		v = et();
	t.Factory.addGetterSetter(
		n.Node,
		'hue',
		0,
		(0, v.getNumberValidator)(),
		t.Factory.afterSetFilter
	),
		t.Factory.addGetterSetter(
			n.Node,
			'saturation',
			0,
			(0, v.getNumberValidator)(),
			t.Factory.afterSetFilter
		),
		t.Factory.addGetterSetter(
			n.Node,
			'luminance',
			0,
			(0, v.getNumberValidator)(),
			t.Factory.afterSetFilter
		);
	const u = function (p) {
		const l = p.data,
			o = l.length,
			r = 1,
			h = Math.pow(2, this.saturation()),
			a = Math.abs(this.hue() + 360) % 360,
			f = this.luminance() * 127,
			_ = r * h * Math.cos((a * Math.PI) / 180),
			i = r * h * Math.sin((a * Math.PI) / 180),
			e = 0.299 * r + 0.701 * _ + 0.167 * i,
			c = 0.587 * r - 0.587 * _ + 0.33 * i,
			y = 0.114 * r - 0.114 * _ - 0.497 * i,
			b = 0.299 * r - 0.299 * _ - 0.328 * i,
			k = 0.587 * r + 0.413 * _ + 0.035 * i,
			d = 0.114 * r - 0.114 * _ + 0.293 * i,
			s = 0.299 * r - 0.3 * _ + 1.25 * i,
			m = 0.587 * r - 0.586 * _ - 1.05 * i,
			w = 0.114 * r + 0.886 * _ - 0.2 * i;
		let A, M, T, P;
		for (let x = 0; x < o; x += 4)
			(A = l[x + 0]),
				(M = l[x + 1]),
				(T = l[x + 2]),
				(P = l[x + 3]),
				(l[x + 0] = e * A + c * M + y * T + f),
				(l[x + 1] = b * A + k * M + d * T + f),
				(l[x + 2] = s * A + m * M + w * T + f),
				(l[x + 3] = P);
	};
	return (Fe.HSL = u), Fe;
}
var Me = {},
	Yr;
function Ys() {
	if (Yr) return Me;
	(Yr = 1), Object.defineProperty(Me, '__esModule', { value: !0 }), (Me.HSV = void 0);
	const t = tt(),
		n = ht(),
		v = et(),
		u = function (p) {
			const l = p.data,
				o = l.length,
				r = Math.pow(2, this.value()),
				h = Math.pow(2, this.saturation()),
				a = Math.abs(this.hue() + 360) % 360,
				f = r * h * Math.cos((a * Math.PI) / 180),
				_ = r * h * Math.sin((a * Math.PI) / 180),
				i = 0.299 * r + 0.701 * f + 0.167 * _,
				e = 0.587 * r - 0.587 * f + 0.33 * _,
				c = 0.114 * r - 0.114 * f - 0.497 * _,
				y = 0.299 * r - 0.299 * f - 0.328 * _,
				b = 0.587 * r + 0.413 * f + 0.035 * _,
				k = 0.114 * r - 0.114 * f + 0.293 * _,
				d = 0.299 * r - 0.3 * f + 1.25 * _,
				s = 0.587 * r - 0.586 * f - 1.05 * _,
				m = 0.114 * r + 0.886 * f - 0.2 * _;
			let w, A, M, T;
			for (let P = 0; P < o; P += 4)
				(w = l[P + 0]),
					(A = l[P + 1]),
					(M = l[P + 2]),
					(T = l[P + 3]),
					(l[P + 0] = i * w + e * A + c * M),
					(l[P + 1] = y * w + b * A + k * M),
					(l[P + 2] = d * w + s * A + m * M),
					(l[P + 3] = T);
		};
	return (
		(Me.HSV = u),
		t.Factory.addGetterSetter(
			n.Node,
			'hue',
			0,
			(0, v.getNumberValidator)(),
			t.Factory.afterSetFilter
		),
		t.Factory.addGetterSetter(
			n.Node,
			'saturation',
			0,
			(0, v.getNumberValidator)(),
			t.Factory.afterSetFilter
		),
		t.Factory.addGetterSetter(
			n.Node,
			'value',
			0,
			(0, v.getNumberValidator)(),
			t.Factory.afterSetFilter
		),
		Me
	);
}
var Ge = {},
	Xr;
function Xs() {
	if (Xr) return Ge;
	(Xr = 1), Object.defineProperty(Ge, '__esModule', { value: !0 }), (Ge.Invert = void 0);
	const t = function (n) {
		const v = n.data,
			u = v.length;
		for (let p = 0; p < u; p += 4)
			(v[p] = 255 - v[p]), (v[p + 1] = 255 - v[p + 1]), (v[p + 2] = 255 - v[p + 2]);
	};
	return (Ge.Invert = t), Ge;
}
var Ne = {},
	Hr;
function Hs() {
	if (Hr) return Ne;
	(Hr = 1), Object.defineProperty(Ne, '__esModule', { value: !0 }), (Ne.Kaleidoscope = void 0);
	const t = tt(),
		n = ht(),
		v = ot(),
		u = et(),
		p = function (r, h, a) {
			const f = r.data,
				_ = h.data,
				i = r.width,
				e = r.height,
				c = a.polarCenterX || i / 2,
				y = a.polarCenterY || e / 2;
			let b = Math.sqrt(c * c + y * y),
				k = i - c,
				d = e - y;
			const s = Math.sqrt(k * k + d * d);
			b = s > b ? s : b;
			const m = e,
				w = i,
				A = ((360 / w) * Math.PI) / 180;
			for (let M = 0; M < w; M += 1) {
				const T = Math.sin(M * A),
					P = Math.cos(M * A);
				for (let x = 0; x < m; x += 1) {
					(k = Math.floor(c + ((b * x) / m) * P)), (d = Math.floor(y + ((b * x) / m) * T));
					let E = (d * i + k) * 4;
					const N = f[E + 0],
						g = f[E + 1],
						C = f[E + 2],
						S = f[E + 3];
					(E = (M + x * i) * 4), (_[E + 0] = N), (_[E + 1] = g), (_[E + 2] = C), (_[E + 3] = S);
				}
			}
		},
		l = function (r, h, a) {
			const f = r.data,
				_ = h.data,
				i = r.width,
				e = r.height,
				c = a.polarCenterX || i / 2,
				y = a.polarCenterY || e / 2;
			let b = Math.sqrt(c * c + y * y),
				k = i - c,
				d = e - y;
			const s = Math.sqrt(k * k + d * d);
			b = s > b ? s : b;
			const m = e,
				w = i,
				A = 0;
			let M, T;
			for (k = 0; k < i; k += 1)
				for (d = 0; d < e; d += 1) {
					const P = k - c,
						x = d - y,
						E = (Math.sqrt(P * P + x * x) * m) / b;
					let N = ((Math.atan2(x, P) * 180) / Math.PI + 360 + A) % 360;
					(N = (N * w) / 360), (M = Math.floor(N)), (T = Math.floor(E));
					let g = (T * i + M) * 4;
					const C = f[g + 0],
						S = f[g + 1],
						R = f[g + 2],
						F = f[g + 3];
					(g = (d * i + k) * 4), (_[g + 0] = C), (_[g + 1] = S), (_[g + 2] = R), (_[g + 3] = F);
				}
		},
		o = function (r) {
			const h = r.width,
				a = r.height;
			let f,
				_,
				i,
				e,
				c,
				y,
				b,
				k,
				d,
				s,
				m = Math.round(this.kaleidoscopePower());
			const w = Math.round(this.kaleidoscopeAngle()),
				A = Math.floor((h * (w % 360)) / 360);
			if (m < 1) return;
			const M = v.Util.createCanvasElement();
			(M.width = h), (M.height = a);
			const T = M.getContext('2d').getImageData(0, 0, h, a);
			v.Util.releaseCanvas(M), p(r, T, { polarCenterX: h / 2, polarCenterY: a / 2 });
			let P = h / Math.pow(2, m);
			for (; P <= 8; ) (P = P * 2), (m -= 1);
			P = Math.ceil(P);
			let x = P,
				E = 0,
				N = x,
				g = 1;
			for (A + P > h && ((E = x), (N = 0), (g = -1)), _ = 0; _ < a; _ += 1)
				for (f = E; f !== N; f += g)
					(i = Math.round(f + A) % h),
						(d = (h * _ + i) * 4),
						(c = T.data[d + 0]),
						(y = T.data[d + 1]),
						(b = T.data[d + 2]),
						(k = T.data[d + 3]),
						(s = (h * _ + f) * 4),
						(T.data[s + 0] = c),
						(T.data[s + 1] = y),
						(T.data[s + 2] = b),
						(T.data[s + 3] = k);
			for (_ = 0; _ < a; _ += 1)
				for (x = Math.floor(P), e = 0; e < m; e += 1) {
					for (f = 0; f < x + 1; f += 1)
						(d = (h * _ + f) * 4),
							(c = T.data[d + 0]),
							(y = T.data[d + 1]),
							(b = T.data[d + 2]),
							(k = T.data[d + 3]),
							(s = (h * _ + x * 2 - f - 1) * 4),
							(T.data[s + 0] = c),
							(T.data[s + 1] = y),
							(T.data[s + 2] = b),
							(T.data[s + 3] = k);
					x *= 2;
				}
			l(T, r, {});
		};
	return (
		(Ne.Kaleidoscope = o),
		t.Factory.addGetterSetter(
			n.Node,
			'kaleidoscopePower',
			2,
			(0, u.getNumberValidator)(),
			t.Factory.afterSetFilter
		),
		t.Factory.addGetterSetter(
			n.Node,
			'kaleidoscopeAngle',
			0,
			(0, u.getNumberValidator)(),
			t.Factory.afterSetFilter
		),
		Ne
	);
}
var Oe = {},
	qr;
function qs() {
	if (qr) return Oe;
	(qr = 1), Object.defineProperty(Oe, '__esModule', { value: !0 }), (Oe.Mask = void 0);
	const t = tt(),
		n = ht(),
		v = et();
	function u(i, e, c) {
		let y = (c * i.width + e) * 4;
		const b = [];
		return b.push(i.data[y++], i.data[y++], i.data[y++], i.data[y++]), b;
	}
	function p(i, e) {
		return Math.sqrt(
			Math.pow(i[0] - e[0], 2) + Math.pow(i[1] - e[1], 2) + Math.pow(i[2] - e[2], 2)
		);
	}
	function l(i) {
		const e = [0, 0, 0];
		for (let c = 0; c < i.length; c++) (e[0] += i[c][0]), (e[1] += i[c][1]), (e[2] += i[c][2]);
		return (e[0] /= i.length), (e[1] /= i.length), (e[2] /= i.length), e;
	}
	function o(i, e) {
		const c = u(i, 0, 0),
			y = u(i, i.width - 1, 0),
			b = u(i, 0, i.height - 1),
			k = u(i, i.width - 1, i.height - 1),
			d = e || 10;
		if (p(c, y) < d && p(y, k) < d && p(k, b) < d && p(b, c) < d) {
			const s = l([y, c, k, b]),
				m = [];
			for (let w = 0; w < i.width * i.height; w++) {
				const A = p(s, [i.data[w * 4], i.data[w * 4 + 1], i.data[w * 4 + 2]]);
				m[w] = A < d ? 0 : 255;
			}
			return m;
		}
	}
	function r(i, e) {
		for (let c = 0; c < i.width * i.height; c++) i.data[4 * c + 3] = e[c];
	}
	function h(i, e, c) {
		const y = [1, 1, 1, 1, 0, 1, 1, 1, 1],
			b = Math.round(Math.sqrt(y.length)),
			k = Math.floor(b / 2),
			d = [];
		for (let s = 0; s < c; s++)
			for (let m = 0; m < e; m++) {
				const w = s * e + m;
				let A = 0;
				for (let M = 0; M < b; M++)
					for (let T = 0; T < b; T++) {
						const P = s + M - k,
							x = m + T - k;
						if (P >= 0 && P < c && x >= 0 && x < e) {
							const E = P * e + x,
								N = y[M * b + T];
							A += i[E] * N;
						}
					}
				d[w] = A === 255 * 8 ? 255 : 0;
			}
		return d;
	}
	function a(i, e, c) {
		const y = [1, 1, 1, 1, 1, 1, 1, 1, 1],
			b = Math.round(Math.sqrt(y.length)),
			k = Math.floor(b / 2),
			d = [];
		for (let s = 0; s < c; s++)
			for (let m = 0; m < e; m++) {
				const w = s * e + m;
				let A = 0;
				for (let M = 0; M < b; M++)
					for (let T = 0; T < b; T++) {
						const P = s + M - k,
							x = m + T - k;
						if (P >= 0 && P < c && x >= 0 && x < e) {
							const E = P * e + x,
								N = y[M * b + T];
							A += i[E] * N;
						}
					}
				d[w] = A >= 255 * 4 ? 255 : 0;
			}
		return d;
	}
	function f(i, e, c) {
		const y = [
				0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111,
				0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111,
				0.1111111111111111
			],
			b = Math.round(Math.sqrt(y.length)),
			k = Math.floor(b / 2),
			d = [];
		for (let s = 0; s < c; s++)
			for (let m = 0; m < e; m++) {
				const w = s * e + m;
				let A = 0;
				for (let M = 0; M < b; M++)
					for (let T = 0; T < b; T++) {
						const P = s + M - k,
							x = m + T - k;
						if (P >= 0 && P < c && x >= 0 && x < e) {
							const E = P * e + x,
								N = y[M * b + T];
							A += i[E] * N;
						}
					}
				d[w] = A;
			}
		return d;
	}
	const _ = function (i) {
		const e = this.threshold();
		let c = o(i, e);
		return (
			c &&
				((c = h(c, i.width, i.height)),
				(c = a(c, i.width, i.height)),
				(c = f(c, i.width, i.height)),
				r(i, c)),
			i
		);
	};
	return (
		(Oe.Mask = _),
		t.Factory.addGetterSetter(
			n.Node,
			'threshold',
			0,
			(0, v.getNumberValidator)(),
			t.Factory.afterSetFilter
		),
		Oe
	);
}
var Le = {},
	Wr;
function Ws() {
	if (Wr) return Le;
	(Wr = 1), Object.defineProperty(Le, '__esModule', { value: !0 }), (Le.Noise = void 0);
	const t = tt(),
		n = ht(),
		v = et(),
		u = function (p) {
			const l = this.noise() * 255,
				o = p.data,
				r = o.length,
				h = l / 2;
			for (let a = 0; a < r; a += 4)
				(o[a + 0] += h - 2 * h * Math.random()),
					(o[a + 1] += h - 2 * h * Math.random()),
					(o[a + 2] += h - 2 * h * Math.random());
		};
	return (
		(Le.Noise = u),
		t.Factory.addGetterSetter(
			n.Node,
			'noise',
			0.2,
			(0, v.getNumberValidator)(),
			t.Factory.afterSetFilter
		),
		Le
	);
}
var De = {},
	zr;
function zs() {
	if (zr) return De;
	(zr = 1), Object.defineProperty(De, '__esModule', { value: !0 }), (De.Pixelate = void 0);
	const t = tt(),
		n = ot(),
		v = ht(),
		u = et(),
		p = function (l) {
			let o = Math.ceil(this.pixelSize()),
				r = l.width,
				h = l.height,
				a,
				f,
				_,
				i,
				e,
				c,
				y,
				b = Math.ceil(r / o),
				k = Math.ceil(h / o),
				d,
				s,
				m,
				w,
				A,
				M,
				T,
				P = l.data;
			if (o <= 0) {
				n.Util.error('pixelSize value can not be <= 0');
				return;
			}
			for (A = 0; A < b; A += 1)
				for (M = 0; M < k; M += 1) {
					for (
						i = 0, e = 0, c = 0, y = 0, d = A * o, s = d + o, m = M * o, w = m + o, T = 0, a = d;
						a < s;
						a += 1
					)
						if (!(a >= r))
							for (f = m; f < w; f += 1)
								f >= h ||
									((_ = (r * f + a) * 4),
									(i += P[_ + 0]),
									(e += P[_ + 1]),
									(c += P[_ + 2]),
									(y += P[_ + 3]),
									(T += 1));
					for (i = i / T, e = e / T, c = c / T, y = y / T, a = d; a < s; a += 1)
						if (!(a >= r))
							for (f = m; f < w; f += 1)
								f >= h ||
									((_ = (r * f + a) * 4),
									(P[_ + 0] = i),
									(P[_ + 1] = e),
									(P[_ + 2] = c),
									(P[_ + 3] = y));
				}
		};
	return (
		(De.Pixelate = p),
		t.Factory.addGetterSetter(
			v.Node,
			'pixelSize',
			8,
			(0, u.getNumberValidator)(),
			t.Factory.afterSetFilter
		),
		De
	);
}
var Ie = {},
	Kr;
function Ks() {
	if (Kr) return Ie;
	(Kr = 1), Object.defineProperty(Ie, '__esModule', { value: !0 }), (Ie.Posterize = void 0);
	const t = tt(),
		n = ht(),
		v = et(),
		u = function (p) {
			const l = Math.round(this.levels() * 254) + 1,
				o = p.data,
				r = o.length,
				h = 255 / l;
			for (let a = 0; a < r; a += 1) o[a] = Math.floor(o[a] / h) * h;
		};
	return (
		(Ie.Posterize = u),
		t.Factory.addGetterSetter(
			n.Node,
			'levels',
			0.5,
			(0, v.getNumberValidator)(),
			t.Factory.afterSetFilter
		),
		Ie
	);
}
var Be = {},
	jr;
function js() {
	if (jr) return Be;
	(jr = 1), Object.defineProperty(Be, '__esModule', { value: !0 }), (Be.RGB = void 0);
	const t = tt(),
		n = ht(),
		v = et(),
		u = function (p) {
			const l = p.data,
				o = l.length,
				r = this.red(),
				h = this.green(),
				a = this.blue();
			for (let f = 0; f < o; f += 4) {
				const _ = (0.34 * l[f] + 0.5 * l[f + 1] + 0.16 * l[f + 2]) / 255;
				(l[f] = _ * r), (l[f + 1] = _ * h), (l[f + 2] = _ * a), (l[f + 3] = l[f + 3]);
			}
		};
	return (
		(Be.RGB = u),
		t.Factory.addGetterSetter(n.Node, 'red', 0, function (p) {
			return (this._filterUpToDate = !1), p > 255 ? 255 : p < 0 ? 0 : Math.round(p);
		}),
		t.Factory.addGetterSetter(n.Node, 'green', 0, function (p) {
			return (this._filterUpToDate = !1), p > 255 ? 255 : p < 0 ? 0 : Math.round(p);
		}),
		t.Factory.addGetterSetter(n.Node, 'blue', 0, v.RGBComponent, t.Factory.afterSetFilter),
		Be
	);
}
var Ue = {},
	Qr;
function Qs() {
	if (Qr) return Ue;
	(Qr = 1), Object.defineProperty(Ue, '__esModule', { value: !0 }), (Ue.RGBA = void 0);
	const t = tt(),
		n = ht(),
		v = et(),
		u = function (p) {
			const l = p.data,
				o = l.length,
				r = this.red(),
				h = this.green(),
				a = this.blue(),
				f = this.alpha();
			for (let _ = 0; _ < o; _ += 4) {
				const i = 1 - f;
				(l[_] = r * f + l[_] * i),
					(l[_ + 1] = h * f + l[_ + 1] * i),
					(l[_ + 2] = a * f + l[_ + 2] * i);
			}
		};
	return (
		(Ue.RGBA = u),
		t.Factory.addGetterSetter(n.Node, 'red', 0, function (p) {
			return (this._filterUpToDate = !1), p > 255 ? 255 : p < 0 ? 0 : Math.round(p);
		}),
		t.Factory.addGetterSetter(n.Node, 'green', 0, function (p) {
			return (this._filterUpToDate = !1), p > 255 ? 255 : p < 0 ? 0 : Math.round(p);
		}),
		t.Factory.addGetterSetter(n.Node, 'blue', 0, v.RGBComponent, t.Factory.afterSetFilter),
		t.Factory.addGetterSetter(n.Node, 'alpha', 1, function (p) {
			return (this._filterUpToDate = !1), p > 1 ? 1 : p < 0 ? 0 : p;
		}),
		Ue
	);
}
var Ve = {},
	Jr;
function Js() {
	if (Jr) return Ve;
	(Jr = 1), Object.defineProperty(Ve, '__esModule', { value: !0 }), (Ve.Sepia = void 0);
	const t = function (n) {
		const v = n.data,
			u = v.length;
		for (let p = 0; p < u; p += 4) {
			const l = v[p + 0],
				o = v[p + 1],
				r = v[p + 2];
			(v[p + 0] = Math.min(255, l * 0.393 + o * 0.769 + r * 0.189)),
				(v[p + 1] = Math.min(255, l * 0.349 + o * 0.686 + r * 0.168)),
				(v[p + 2] = Math.min(255, l * 0.272 + o * 0.534 + r * 0.131));
		}
	};
	return (Ve.Sepia = t), Ve;
}
var Ye = {},
	Zr;
function Zs() {
	if (Zr) return Ye;
	(Zr = 1), Object.defineProperty(Ye, '__esModule', { value: !0 }), (Ye.Solarize = void 0);
	const t = function (n) {
		const v = n.data,
			u = n.width,
			p = n.height,
			l = u * 4;
		let o = p;
		do {
			const r = (o - 1) * l;
			let h = u;
			do {
				const a = r + (h - 1) * 4;
				let f = v[a],
					_ = v[a + 1],
					i = v[a + 2];
				f > 127 && (f = 255 - f),
					_ > 127 && (_ = 255 - _),
					i > 127 && (i = 255 - i),
					(v[a] = f),
					(v[a + 1] = _),
					(v[a + 2] = i);
			} while (--h);
		} while (--o);
	};
	return (Ye.Solarize = t), Ye;
}
var Xe = {},
	$r;
function $s() {
	if ($r) return Xe;
	($r = 1), Object.defineProperty(Xe, '__esModule', { value: !0 }), (Xe.Threshold = void 0);
	const t = tt(),
		n = ht(),
		v = et(),
		u = function (p) {
			const l = this.threshold() * 255,
				o = p.data,
				r = o.length;
			for (let h = 0; h < r; h += 1) o[h] = o[h] < l ? 0 : 255;
		};
	return (
		(Xe.Threshold = u),
		t.Factory.addGetterSetter(
			n.Node,
			'threshold',
			0.5,
			(0, v.getNumberValidator)(),
			t.Factory.afterSetFilter
		),
		Xe
	);
}
var tn;
function to() {
	if (tn) return xe;
	(tn = 1), Object.defineProperty(xe, '__esModule', { value: !0 }), (xe.Konva = void 0);
	const t = ki(),
		n = $a(),
		v = Pn(),
		u = Tn(),
		p = En(),
		l = Mn(),
		o = ys(),
		r = An(),
		h = Ni(),
		a = Di(),
		f = Gn(),
		_ = Ss(),
		i = Cs(),
		e = Nn(),
		c = Ii(),
		y = Es(),
		b = Rs(),
		k = Fs(),
		d = Os(),
		s = Ls(),
		m = Ds(),
		w = Is(),
		A = Bs(),
		M = Us(),
		T = Vs(),
		P = Ys(),
		x = Xs(),
		E = Hs(),
		N = qs(),
		g = Ws(),
		C = zs(),
		S = Ks(),
		R = js(),
		F = Qs(),
		O = Js(),
		I = Zs(),
		L = $s();
	return (
		(xe.Konva = t.Konva.Util._assign(t.Konva, {
			Arc: n.Arc,
			Arrow: v.Arrow,
			Circle: u.Circle,
			Ellipse: p.Ellipse,
			Image: l.Image,
			Label: o.Label,
			Tag: o.Tag,
			Line: r.Line,
			Path: h.Path,
			Rect: a.Rect,
			RegularPolygon: f.RegularPolygon,
			Ring: _.Ring,
			Sprite: i.Sprite,
			Star: e.Star,
			Text: c.Text,
			TextPath: y.TextPath,
			Transformer: b.Transformer,
			Wedge: k.Wedge,
			Filters: {
				Blur: d.Blur,
				Brighten: s.Brighten,
				Contrast: m.Contrast,
				Emboss: w.Emboss,
				Enhance: A.Enhance,
				Grayscale: M.Grayscale,
				HSL: T.HSL,
				HSV: P.HSV,
				Invert: x.Invert,
				Kaleidoscope: E.Kaleidoscope,
				Mask: N.Mask,
				Noise: g.Noise,
				Pixelate: C.Pixelate,
				Posterize: S.Posterize,
				RGB: R.RGB,
				RGBA: F.RGBA,
				Sepia: O.Sepia,
				Solarize: I.Solarize,
				Threshold: L.Threshold
			}
		})),
		xe
	);
}
var eo = $e.exports,
	en;
function io() {
	if (en) return $e.exports;
	(en = 1), Object.defineProperty(eo, '__esModule', { value: !0 });
	const t = to();
	return ($e.exports = t.Konva), $e.exports;
}
var ro = io();
const Ho = wn(ro);
export {
	wi as A,
	cs as B,
	ls as C,
	ss as D,
	Io as E,
	ms as F,
	yo as G,
	So as H,
	Xo as I,
	Qi as J,
	Ho as K,
	Ro as L,
	wn as M,
	Ar as R,
	Go as S,
	No as T,
	mo as U,
	mn as a,
	Wt as b,
	Yo as c,
	Oa as d,
	gn as e,
	Tt as f,
	Dt as g,
	Bo as h,
	fo as i,
	Ci as j,
	ee as k,
	po as l,
	_o as m,
	yn as n,
	ei as o,
	Uo as p,
	at as q,
	Rs as r,
	ii as s,
	go as t,
	Xt as u,
	bo as v,
	vo as w,
	Si as x,
	Ps as y,
	Vo as z
};
