var yn = Array.isArray,
	wn = Array.prototype.indexOf,
	le = Array.from,
	ie = Object.defineProperty,
	z = Object.getOwnPropertyDescriptor,
	En = Object.getOwnPropertyDescriptors,
	gn = Object.prototype,
	mn = Array.prototype,
	Yt = Object.getPrototypeOf,
	Pt = Object.isExtensible;
function ue(t) {
	return typeof t == 'function';
}
const rt = () => {};
function fe(t) {
	return t();
}
function Ht(t) {
	for (var e = 0; e < t.length; e++) t[e]();
}
function oe(t, e) {
	if (Array.isArray(t)) return t;
	if (!(Symbol.iterator in t)) return Array.from(t);
	const n = [];
	for (const r of t) if ((n.push(r), n.length === e)) break;
	return n;
}
const A = 2,
	Bt = 4,
	_t = 8,
	At = 16,
	k = 32,
	V = 64,
	st = 128,
	m = 256,
	lt = 512,
	w = 1024,
	O = 2048,
	C = 4096,
	B = 8192,
	vt = 16384,
	bn = 32768,
	Ut = 65536,
	ce = 1 << 17,
	Tn = 1 << 19,
	Vt = 1 << 20,
	mt = 1 << 21,
	P = Symbol('$state'),
	_e = Symbol('legacy props'),
	ve = Symbol('');
function Gt(t) {
	return t === this.v;
}
function Kt(t, e) {
	return t != t
		? e == e
		: t !== e || (t !== null && typeof t == 'object') || typeof t == 'function';
}
function $t(t) {
	return !Kt(t, this.v);
}
function xn(t) {
	throw new Error('https://svelte.dev/e/effect_in_teardown');
}
function An() {
	throw new Error('https://svelte.dev/e/effect_in_unowned_derived');
}
function Rn(t) {
	throw new Error('https://svelte.dev/e/effect_orphan');
}
function Dn() {
	throw new Error('https://svelte.dev/e/effect_update_depth_exceeded');
}
function pe() {
	throw new Error('https://svelte.dev/e/hydration_failed');
}
function he(t) {
	throw new Error('https://svelte.dev/e/props_invalid_value');
}
function In() {
	throw new Error('https://svelte.dev/e/state_descriptors_fixed');
}
function On() {
	throw new Error('https://svelte.dev/e/state_prototype_fixed');
}
function kn() {
	throw new Error('https://svelte.dev/e/state_unsafe_mutation');
}
let tt = !1;
function de() {
	tt = !0;
}
const ye = 1,
	we = 2,
	Ee = 4,
	ge = 8,
	me = 16,
	be = 1,
	Te = 2,
	xe = 4,
	Ae = 8,
	Re = 16,
	De = 1,
	Ie = 2,
	Sn = '[',
	Nn = '[!',
	Cn = ']',
	Rt = {},
	E = Symbol(),
	Oe = 'http://www.w3.org/1999/xhtml',
	ke = '@attach';
function Dt(t) {
	throw new Error('https://svelte.dev/e/lifecycle_outside_component');
}
let v = null;
function Mt(t) {
	v = t;
}
function Se(t) {
	return zt().get(t);
}
function Ne(t, e) {
	return zt().set(t, e), e;
}
function Ce(t, e = !1, n) {
	var r = (v = { p: v, c: null, d: !1, e: null, m: !1, s: t, x: null, l: null });
	tt && !e && (v.l = { s: null, u: null, r1: [], r2: Ot(!1) }),
		Yn(() => {
			r.d = !0;
		});
}
function Pe(t) {
	const e = v;
	if (e !== null) {
		t !== void 0 && (e.x = t);
		const f = e.e;
		if (f !== null) {
			var n = h,
				r = p;
			e.e = null;
			try {
				for (var a = 0; a < f.length; a++) {
					var s = f[a];
					ft(s.effect), U(s.reaction), en(s.fn);
				}
			} finally {
				ft(n), U(r);
			}
		}
		(v = e.p), (e.m = !0);
	}
	return t || {};
}
function pt() {
	return !tt || (v !== null && v.l === null);
}
function zt(t) {
	return v === null && Dt(), v.c ?? (v.c = new Map(Pn(v) || void 0));
}
function Pn(t) {
	let e = t.p;
	for (; e !== null; ) {
		const n = e.c;
		if (n !== null) return n;
		e = e.p;
	}
	return null;
}
function Y(t) {
	if (typeof t != 'object' || t === null || P in t) return t;
	const e = Yt(t);
	if (e !== gn && e !== mn) return t;
	var n = new Map(),
		r = yn(t),
		a = S(0),
		s = p,
		f = (u) => {
			var l = p;
			U(s);
			var i = u();
			return U(l), i;
		};
	return (
		r && n.set('length', S(t.length)),
		new Proxy(t, {
			defineProperty(u, l, i) {
				(!('value' in i) || i.configurable === !1 || i.enumerable === !1 || i.writable === !1) &&
					In();
				var c = n.get(l);
				return (
					c === void 0
						? ((c = f(() => S(i.value))), n.set(l, c))
						: I(
								c,
								f(() => Y(i.value))
							),
					!0
				);
			},
			deleteProperty(u, l) {
				var i = n.get(l);
				if (i === void 0)
					l in u &&
						(n.set(
							l,
							f(() => S(E))
						),
						gt(a));
				else {
					if (r && typeof l == 'string') {
						var c = n.get('length'),
							o = Number(l);
						Number.isInteger(o) && o < c.v && I(c, o);
					}
					I(i, E), gt(a);
				}
				return !0;
			},
			get(u, l, i) {
				var x;
				if (l === P) return t;
				var c = n.get(l),
					o = l in u;
				if (
					(c === void 0 &&
						(!o || ((x = z(u, l)) != null && x.writable)) &&
						((c = f(() => S(Y(o ? u[l] : E)))), n.set(l, c)),
					c !== void 0)
				) {
					var _ = H(c);
					return _ === E ? void 0 : _;
				}
				return Reflect.get(u, l, i);
			},
			getOwnPropertyDescriptor(u, l) {
				var i = Reflect.getOwnPropertyDescriptor(u, l);
				if (i && 'value' in i) {
					var c = n.get(l);
					c && (i.value = H(c));
				} else if (i === void 0) {
					var o = n.get(l),
						_ = o == null ? void 0 : o.v;
					if (o !== void 0 && _ !== E)
						return { enumerable: !0, configurable: !0, value: _, writable: !0 };
				}
				return i;
			},
			has(u, l) {
				var _;
				if (l === P) return !0;
				var i = n.get(l),
					c = (i !== void 0 && i.v !== E) || Reflect.has(u, l);
				if (i !== void 0 || (h !== null && (!c || ((_ = z(u, l)) != null && _.writable)))) {
					i === void 0 && ((i = f(() => S(c ? Y(u[l]) : E))), n.set(l, i));
					var o = H(i);
					if (o === E) return !1;
				}
				return c;
			},
			set(u, l, i, c) {
				var Ct;
				var o = n.get(l),
					_ = l in u;
				if (r && l === 'length')
					for (var x = i; x < o.v; x += 1) {
						var nt = n.get(x + '');
						nt !== void 0 ? I(nt, E) : x in u && ((nt = f(() => S(E))), n.set(x + '', nt));
					}
				o === void 0
					? (!_ || ((Ct = z(u, l)) != null && Ct.writable)) &&
						((o = f(() => S(void 0))),
						I(
							o,
							f(() => Y(i))
						),
						n.set(l, o))
					: ((_ = o.v !== E),
						I(
							o,
							f(() => Y(i))
						));
				var et = Reflect.getOwnPropertyDescriptor(u, l);
				if ((et != null && et.set && et.set.call(c, i), !_)) {
					if (r && typeof l == 'string') {
						var Nt = n.get('length'),
							Et = Number(l);
						Number.isInteger(Et) && Et >= Nt.v && I(Nt, Et + 1);
					}
					gt(a);
				}
				return !0;
			},
			ownKeys(u) {
				H(a);
				var l = Reflect.ownKeys(u).filter((o) => {
					var _ = n.get(o);
					return _ === void 0 || _.v !== E;
				});
				for (var [i, c] of n) c.v !== E && !(i in u) && l.push(i);
				return l;
			},
			setPrototypeOf() {
				On();
			}
		})
	);
}
function gt(t, e = 1) {
	I(t, t.v + e);
}
function Ft(t) {
	try {
		if (t !== null && typeof t == 'object' && P in t) return t[P];
	} catch {}
	return t;
}
function Me(t, e) {
	return Object.is(Ft(t), Ft(e));
}
function It(t) {
	var e = A | O,
		n = p !== null && (p.f & A) !== 0 ? p : null;
	return (
		h === null || (n !== null && (n.f & m) !== 0) ? (e |= m) : (h.f |= Vt),
		{
			ctx: v,
			deps: null,
			effects: null,
			equals: Gt,
			f: e,
			fn: t,
			reactions: null,
			rv: 0,
			v: null,
			wv: 0,
			parent: n ?? h
		}
	);
}
function Fe(t) {
	const e = It(t);
	return cn(e), e;
}
function qe(t) {
	const e = It(t);
	return (e.equals = $t), e;
}
function Wt(t) {
	var e = t.effects;
	if (e !== null) {
		t.effects = null;
		for (var n = 0; n < e.length; n += 1) q(e[n]);
	}
}
function Mn(t) {
	for (var e = t.parent; e !== null; ) {
		if ((e.f & A) === 0) return e;
		e = e.parent;
	}
	return null;
}
function Zt(t) {
	var e,
		n = h;
	ft(Mn(t));
	try {
		Wt(t), (e = hn(t));
	} finally {
		ft(n);
	}
	return e;
}
function Jt(t) {
	var e = Zt(t);
	if ((t.equals(e) || ((t.v = e), (t.wv = vn())), !K)) {
		var n = (N || (t.f & m) !== 0) && t.deps !== null ? C : w;
		T(t, n);
	}
}
const Z = new Map();
function Ot(t, e) {
	var n = { f: 0, v: t, reactions: null, equals: Gt, rv: 0, wv: 0 };
	return n;
}
function S(t, e) {
	const n = Ot(t);
	return cn(n), n;
}
function Le(t, e = !1) {
	var r;
	const n = Ot(t);
	return (
		e || (n.equals = $t), tt && v !== null && v.l !== null && ((r = v.l).s ?? (r.s = [])).push(n), n
	);
}
function I(t, e, n = !1) {
	p !== null && !D && pt() && (p.f & (A | At)) !== 0 && !(y != null && y.includes(t)) && kn();
	let r = n ? Y(e) : e;
	return Fn(t, r);
}
function Fn(t, e) {
	if (!t.equals(e)) {
		var n = t.v;
		K ? Z.set(t, e) : Z.set(t, n),
			(t.v = e),
			(t.f & A) !== 0 && ((t.f & O) !== 0 && Zt(t), T(t, (t.f & m) === 0 ? w : C)),
			(t.wv = vn()),
			Qt(t, O),
			pt() &&
				h !== null &&
				(h.f & w) !== 0 &&
				(h.f & (k | V)) === 0 &&
				(b === null ? Wn([t]) : b.push(t));
	}
	return e;
}
function Qt(t, e) {
	var n = t.reactions;
	if (n !== null)
		for (var r = pt(), a = n.length, s = 0; s < a; s++) {
			var f = n[s],
				u = f.f;
			(u & O) === 0 &&
				((!r && f === h) || (T(f, e), (u & (w | m)) !== 0 && ((u & A) !== 0 ? Qt(f, C) : yt(f))));
		}
}
function kt(t) {
	console.warn('https://svelte.dev/e/hydration_mismatch');
}
function je() {
	console.warn('https://svelte.dev/e/select_multiple_invalid_value');
}
let F = !1;
function Ye(t) {
	F = t;
}
let R;
function J(t) {
	if (t === null) throw (kt(), Rt);
	return (R = t);
}
function He() {
	return J(L(R));
}
function Be(t) {
	if (F) {
		if (L(R) !== null) throw (kt(), Rt);
		R = t;
	}
}
function Ue(t = 1) {
	if (F) {
		for (var e = t, n = R; e--; ) n = L(n);
		R = n;
	}
}
function Ve() {
	for (var t = 0, e = R; ; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === Cn) {
				if (t === 0) return e;
				t -= 1;
			} else (n === Sn || n === Nn) && (t += 1);
		}
		var r = L(e);
		e.remove(), (e = r);
	}
}
function Ge(t) {
	if (!t || t.nodeType !== 8) throw (kt(), Rt);
	return t.data;
}
var qt, qn, Ln, Xt, tn;
function Ke() {
	if (qt === void 0) {
		(qt = window), (qn = document), (Ln = /Firefox/.test(navigator.userAgent));
		var t = Element.prototype,
			e = Node.prototype,
			n = Text.prototype;
		(Xt = z(e, 'firstChild').get),
			(tn = z(e, 'nextSibling').get),
			Pt(t) &&
				((t.__click = void 0),
				(t.__className = void 0),
				(t.__attributes = null),
				(t.__style = void 0),
				(t.__e = void 0)),
			Pt(n) && (n.__t = void 0);
	}
}
function bt(t = '') {
	return document.createTextNode(t);
}
function Tt(t) {
	return Xt.call(t);
}
function L(t) {
	return tn.call(t);
}
function $e(t, e) {
	if (!F) return Tt(t);
	var n = Tt(R);
	if (n === null) n = R.appendChild(bt());
	else if (e && n.nodeType !== 3) {
		var r = bt();
		return n == null || n.before(r), J(r), r;
	}
	return J(n), n;
}
function ze(t, e) {
	if (!F) {
		var n = Tt(t);
		return n instanceof Comment && n.data === '' ? L(n) : n;
	}
	return R;
}
function We(t, e = 1, n = !1) {
	let r = F ? R : t;
	for (var a; e--; ) (a = r), (r = L(r));
	if (!F) return r;
	var s = r == null ? void 0 : r.nodeType;
	if (n && s !== 3) {
		var f = bt();
		return r === null ? a == null || a.after(f) : r.before(f), J(f), f;
	}
	return J(r), r;
}
function Ze(t) {
	t.textContent = '';
}
function nn(t) {
	h === null && p === null && Rn(), p !== null && (p.f & m) !== 0 && h === null && An(), K && xn();
}
function jn(t, e) {
	var n = e.last;
	n === null ? (e.last = e.first = t) : ((n.next = t), (t.prev = n), (e.last = t));
}
function G(t, e, n, r = !0) {
	var a = h,
		s = {
			ctx: v,
			deps: null,
			nodes_start: null,
			nodes_end: null,
			f: t | O,
			first: null,
			fn: e,
			last: null,
			next: null,
			parent: a,
			prev: null,
			teardown: null,
			transitions: null,
			wv: 0
		};
	if (n)
		try {
			dt(s), (s.f |= bn);
		} catch (l) {
			throw (q(s), l);
		}
	else e !== null && yt(s);
	var f =
		n &&
		s.deps === null &&
		s.first === null &&
		s.nodes_start === null &&
		s.teardown === null &&
		(s.f & (Vt | st)) === 0;
	if (!f && r && (a !== null && jn(s, a), p !== null && (p.f & A) !== 0)) {
		var u = p;
		(u.effects ?? (u.effects = [])).push(s);
	}
	return s;
}
function Yn(t) {
	const e = G(_t, null, !1);
	return T(e, w), (e.teardown = t), e;
}
function Hn(t) {
	nn();
	var e = h !== null && (h.f & k) !== 0 && v !== null && !v.m;
	if (e) {
		var n = v;
		(n.e ?? (n.e = [])).push({ fn: t, effect: h, reaction: p });
	} else {
		var r = en(t);
		return r;
	}
}
function Je(t) {
	return nn(), St(t);
}
function Qe(t) {
	const e = G(V, t, !0);
	return (n = {}) =>
		new Promise((r) => {
			n.outro
				? Gn(e, () => {
						q(e), r(void 0);
					})
				: (q(e), r(void 0));
		});
}
function en(t) {
	return G(Bt, t, !1);
}
function Xe(t, e) {
	var n = v,
		r = { effect: null, ran: !1 };
	n.l.r1.push(r),
		(r.effect = St(() => {
			t(), !r.ran && ((r.ran = !0), I(n.l.r2, !0), wt(e));
		}));
}
function tr() {
	var t = v;
	St(() => {
		if (H(t.l.r2)) {
			for (var e of t.l.r1) {
				var n = e.effect;
				(n.f & w) !== 0 && T(n, C), $(n) && dt(n), (e.ran = !1);
			}
			t.l.r2.v = !1;
		}
	});
}
function St(t) {
	return G(_t, t, !0);
}
function nr(t, e = [], n = It) {
	const r = e.map(n);
	return Bn(() => t(...r.map(H)));
}
function Bn(t, e = 0) {
	return G(_t | At | e, t, !0);
}
function er(t, e = !0) {
	return G(_t | k, t, !0, e);
}
function rn(t) {
	var e = t.teardown;
	if (e !== null) {
		const n = K,
			r = p;
		Lt(!0), U(null);
		try {
			e.call(null);
		} finally {
			Lt(n), U(r);
		}
	}
}
function an(t, e = !1) {
	var n = t.first;
	for (t.first = t.last = null; n !== null; ) {
		var r = n.next;
		(n.f & V) !== 0 ? (n.parent = null) : q(n, e), (n = r);
	}
}
function Un(t) {
	for (var e = t.first; e !== null; ) {
		var n = e.next;
		(e.f & k) === 0 && q(e), (e = n);
	}
}
function q(t, e = !0) {
	var n = !1;
	(e || (t.f & Tn) !== 0) && t.nodes_start !== null && (Vn(t.nodes_start, t.nodes_end), (n = !0)),
		an(t, e && !n),
		ct(t, 0),
		T(t, vt);
	var r = t.transitions;
	if (r !== null) for (const s of r) s.stop();
	rn(t);
	var a = t.parent;
	a !== null && a.first !== null && sn(t),
		(t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null);
}
function Vn(t, e) {
	for (; t !== null; ) {
		var n = t === e ? null : L(t);
		t.remove(), (t = n);
	}
}
function sn(t) {
	var e = t.parent,
		n = t.prev,
		r = t.next;
	n !== null && (n.next = r),
		r !== null && (r.prev = n),
		e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Gn(t, e) {
	var n = [];
	ln(t, n, !0),
		Kn(n, () => {
			q(t), e && e();
		});
}
function Kn(t, e) {
	var n = t.length;
	if (n > 0) {
		var r = () => --n || e();
		for (var a of t) a.out(r);
	} else e();
}
function ln(t, e, n) {
	if ((t.f & B) === 0) {
		if (((t.f ^= B), t.transitions !== null))
			for (const f of t.transitions) (f.is_global || n) && e.push(f);
		for (var r = t.first; r !== null; ) {
			var a = r.next,
				s = (r.f & Ut) !== 0 || (r.f & k) !== 0;
			ln(r, e, s ? n : !1), (r = a);
		}
	}
}
function rr(t) {
	un(t, !0);
}
function un(t, e) {
	if ((t.f & B) !== 0) {
		(t.f ^= B), (t.f & w) === 0 && (t.f ^= w), $(t) && (T(t, O), yt(t));
		for (var n = t.first; n !== null; ) {
			var r = n.next,
				a = (n.f & Ut) !== 0 || (n.f & k) !== 0;
			un(n, a ? e : !1), (n = r);
		}
		if (t.transitions !== null) for (const s of t.transitions) (s.is_global || e) && s.in();
	}
}
const $n = typeof requestIdleCallback > 'u' ? (t) => setTimeout(t, 1) : requestIdleCallback;
let Q = [],
	X = [];
function fn() {
	var t = Q;
	(Q = []), Ht(t);
}
function on() {
	var t = X;
	(X = []), Ht(t);
}
function ar(t) {
	Q.length === 0 && queueMicrotask(fn), Q.push(t);
}
function sr(t) {
	X.length === 0 && $n(on), X.push(t);
}
function zn() {
	Q.length > 0 && fn(), X.length > 0 && on();
}
let at = !1,
	it = !1,
	ut = null,
	M = !1,
	K = !1;
function Lt(t) {
	K = t;
}
let W = [];
let p = null,
	D = !1;
function U(t) {
	p = t;
}
let h = null;
function ft(t) {
	h = t;
}
let y = null;
function cn(t) {
	p !== null && p.f & mt && (y === null ? (y = [t]) : y.push(t));
}
let d = null,
	g = 0,
	b = null;
function Wn(t) {
	b = t;
}
let _n = 1,
	ot = 0,
	N = !1;
function vn() {
	return ++_n;
}
function $(t) {
	var o;
	var e = t.f;
	if ((e & O) !== 0) return !0;
	if ((e & C) !== 0) {
		var n = t.deps,
			r = (e & m) !== 0;
		if (n !== null) {
			var a,
				s,
				f = (e & lt) !== 0,
				u = r && h !== null && !N,
				l = n.length;
			if (f || u) {
				var i = t,
					c = i.parent;
				for (a = 0; a < l; a++)
					(s = n[a]),
						(f || !((o = s == null ? void 0 : s.reactions) != null && o.includes(i))) &&
							(s.reactions ?? (s.reactions = [])).push(i);
				f && (i.f ^= lt), u && c !== null && (c.f & m) === 0 && (i.f ^= m);
			}
			for (a = 0; a < l; a++) if (((s = n[a]), $(s) && Jt(s), s.wv > t.wv)) return !0;
		}
		(!r || (h !== null && !N)) && T(t, w);
	}
	return !1;
}
function Zn(t, e) {
	for (var n = e; n !== null; ) {
		if ((n.f & st) !== 0)
			try {
				n.fn(t);
				return;
			} catch {
				n.f ^= st;
			}
		n = n.parent;
	}
	throw ((at = !1), t);
}
function jt(t) {
	return (t.f & vt) === 0 && (t.parent === null || (t.parent.f & st) === 0);
}
function ht(t, e, n, r) {
	if (at) {
		if ((n === null && (at = !1), jt(e))) throw t;
		return;
	}
	if ((n !== null && (at = !0), Zn(t, e), jt(e))) throw t;
}
function pn(t, e, n = !0) {
	var r = t.reactions;
	if (r !== null)
		for (var a = 0; a < r.length; a++) {
			var s = r[a];
			(y != null && y.includes(t)) ||
				((s.f & A) !== 0
					? pn(s, e, !1)
					: e === s && (n ? T(s, O) : (s.f & w) !== 0 && T(s, C), yt(s)));
		}
}
function hn(t) {
	var x;
	var e = d,
		n = g,
		r = b,
		a = p,
		s = N,
		f = y,
		u = v,
		l = D,
		i = t.f;
	(d = null),
		(g = 0),
		(b = null),
		(N = (i & m) !== 0 && (D || !M || p === null)),
		(p = (i & (k | V)) === 0 ? t : null),
		(y = null),
		Mt(t.ctx),
		(D = !1),
		ot++,
		(t.f |= mt);
	try {
		var c = (0, t.fn)(),
			o = t.deps;
		if (d !== null) {
			var _;
			if ((ct(t, g), o !== null && g > 0))
				for (o.length = g + d.length, _ = 0; _ < d.length; _++) o[g + _] = d[_];
			else t.deps = o = d;
			if (!N) for (_ = g; _ < o.length; _++) ((x = o[_]).reactions ?? (x.reactions = [])).push(t);
		} else o !== null && g < o.length && (ct(t, g), (o.length = g));
		if (pt() && b !== null && !D && o !== null && (t.f & (A | C | O)) === 0)
			for (_ = 0; _ < b.length; _++) pn(b[_], t);
		return a !== null && a !== t && (ot++, b !== null && (r === null ? (r = b) : r.push(...b))), c;
	} finally {
		(d = e), (g = n), (b = r), (p = a), (N = s), (y = f), Mt(u), (D = l), (t.f ^= mt);
	}
}
function Jn(t, e) {
	let n = e.reactions;
	if (n !== null) {
		var r = wn.call(n, t);
		if (r !== -1) {
			var a = n.length - 1;
			a === 0 ? (n = e.reactions = null) : ((n[r] = n[a]), n.pop());
		}
	}
	n === null &&
		(e.f & A) !== 0 &&
		(d === null || !d.includes(e)) &&
		(T(e, C), (e.f & (m | lt)) === 0 && (e.f ^= lt), Wt(e), ct(e, 0));
}
function ct(t, e) {
	var n = t.deps;
	if (n !== null) for (var r = e; r < n.length; r++) Jn(t, n[r]);
}
function dt(t) {
	var e = t.f;
	if ((e & vt) === 0) {
		T(t, w);
		var n = h,
			r = v,
			a = M;
		(h = t), (M = !0);
		try {
			(e & At) !== 0 ? Un(t) : an(t), rn(t);
			var s = hn(t);
			(t.teardown = typeof s == 'function' ? s : null), (t.wv = _n);
			var f = t.deps,
				u;
		} catch (l) {
			ht(l, t, n, r || t.ctx);
		} finally {
			(M = a), (h = n);
		}
	}
}
function Qn() {
	try {
		Dn();
	} catch (t) {
		if (ut !== null) ht(t, ut, null);
		else throw t;
	}
}
function dn() {
	var t = M;
	try {
		var e = 0;
		for (M = !0; W.length > 0; ) {
			e++ > 1e3 && Qn();
			var n = W,
				r = n.length;
			W = [];
			for (var a = 0; a < r; a++) {
				var s = te(n[a]);
				Xn(s);
			}
			Z.clear();
		}
	} finally {
		(it = !1), (M = t), (ut = null);
	}
}
function Xn(t) {
	var e = t.length;
	if (e !== 0)
		for (var n = 0; n < e; n++) {
			var r = t[n];
			if ((r.f & (vt | B)) === 0)
				try {
					$(r) &&
						(dt(r),
						r.deps === null &&
							r.first === null &&
							r.nodes_start === null &&
							(r.teardown === null ? sn(r) : (r.fn = null)));
				} catch (a) {
					ht(a, r, null, r.ctx);
				}
		}
}
function yt(t) {
	it || ((it = !0), queueMicrotask(dn));
	for (var e = (ut = t); e.parent !== null; ) {
		e = e.parent;
		var n = e.f;
		if ((n & (V | k)) !== 0) {
			if ((n & w) === 0) return;
			e.f ^= w;
		}
	}
	W.push(e);
}
function te(t) {
	for (var e = [], n = t; n !== null; ) {
		var r = n.f,
			a = (r & (k | V)) !== 0,
			s = a && (r & w) !== 0;
		if (!s && (r & B) === 0) {
			if ((r & Bt) !== 0) e.push(n);
			else if (a) n.f ^= w;
			else
				try {
					$(n) && dt(n);
				} catch (l) {
					ht(l, n, null, n.ctx);
				}
			var f = n.first;
			if (f !== null) {
				n = f;
				continue;
			}
		}
		var u = n.parent;
		for (n = n.next; n === null && u !== null; ) (n = u.next), (u = u.parent);
	}
	return e;
}
function ne(t) {
	for (var e; ; ) {
		if ((zn(), W.length === 0)) return e;
		(it = !0), dn();
	}
}
async function lr() {
	await Promise.resolve(), ne();
}
function H(t) {
	var e = t.f,
		n = (e & A) !== 0;
	if (p !== null && !D) {
		if (!(y != null && y.includes(t))) {
			var r = p.deps;
			t.rv < ot &&
				((t.rv = ot),
				d === null && r !== null && r[g] === t
					? g++
					: d === null
						? (d = [t])
						: (!N || !d.includes(t)) && d.push(t));
		}
	} else if (n && t.deps === null && t.effects === null) {
		var a = t,
			s = a.parent;
		s !== null && (s.f & m) === 0 && (a.f ^= m);
	}
	return n && ((a = t), $(a) && Jt(a)), K && Z.has(t) ? Z.get(t) : t.v;
}
function wt(t) {
	var e = D;
	try {
		return (D = !0), t();
	} finally {
		D = e;
	}
}
const ee = -7169;
function T(t, e) {
	t.f = (t.f & ee) | e;
}
function ir(t) {
	if (!(typeof t != 'object' || !t || t instanceof EventTarget)) {
		if (P in t) xt(t);
		else if (!Array.isArray(t))
			for (let e in t) {
				const n = t[e];
				typeof n == 'object' && n && P in n && xt(n);
			}
	}
}
function xt(t, e = new Set()) {
	if (typeof t == 'object' && t !== null && !(t instanceof EventTarget) && !e.has(t)) {
		e.add(t), t instanceof Date && t.getTime();
		for (let r in t)
			try {
				xt(t[r], e);
			} catch {}
		const n = Yt(t);
		if (
			n !== Object.prototype &&
			n !== Array.prototype &&
			n !== Map.prototype &&
			n !== Set.prototype &&
			n !== Date.prototype
		) {
			const r = En(n);
			for (let a in r) {
				const s = r[a].get;
				if (s)
					try {
						s.call(t);
					} catch {}
			}
		}
	}
}
function re(t, e, n) {
	if (t == null) return e(void 0), rt;
	const r = wt(() => t.subscribe(e, n));
	return r.unsubscribe ? () => r.unsubscribe() : r;
}
const j = [];
function ur(t, e = rt) {
	let n = null;
	const r = new Set();
	function a(u) {
		if (Kt(t, u) && ((t = u), n)) {
			const l = !j.length;
			for (const i of r) i[1](), j.push(i, t);
			if (l) {
				for (let i = 0; i < j.length; i += 2) j[i][0](j[i + 1]);
				j.length = 0;
			}
		}
	}
	function s(u) {
		a(u(t));
	}
	function f(u, l = rt) {
		const i = [u, l];
		return (
			r.add(i),
			r.size === 1 && (n = e(a, s) || rt),
			u(t),
			() => {
				r.delete(i), r.size === 0 && n && (n(), (n = null));
			}
		);
	}
	return { set: a, update: s, subscribe: f };
}
function fr(t) {
	let e;
	return re(t, (n) => (e = n))(), e;
}
function ae(t) {
	v === null && Dt(),
		tt && v.l !== null
			? se(v).m.push(t)
			: Hn(() => {
					const e = wt(t);
					if (typeof e == 'function') return e;
				});
}
function or(t) {
	v === null && Dt(), ae(() => () => wt(t));
}
function se(t) {
	var e = t.l;
	return e.u ?? (e.u = { a: [], b: [], m: [] });
}
export {
	qn as $,
	Bn as A,
	er as B,
	rt as C,
	q as D,
	Ut as E,
	F,
	R as G,
	ur as H,
	bt as I,
	Tt as J,
	Ln as K,
	h as L,
	Ie as M,
	He as N,
	J as O,
	_e as P,
	ne as Q,
	ie as R,
	S,
	De as T,
	lr as U,
	Ge as V,
	Sn as W,
	Nn as X,
	Ve as Y,
	Ye as Z,
	rr as _,
	tr as a,
	Gn as a0,
	E as a1,
	en as a2,
	St as a3,
	ar as a4,
	P as a5,
	Yn as a6,
	re as a7,
	fr as a8,
	z as a9,
	Me as aA,
	pt as aB,
	or as aC,
	qt as aD,
	Ee as aE,
	B as aF,
	ye as aG,
	Fn as aH,
	we as aI,
	Ot as aJ,
	ge as aK,
	ln as aL,
	Kn as aM,
	me as aN,
	je as aO,
	sr as aP,
	Oe as aQ,
	ve as aR,
	ke as aS,
	Yt as aT,
	En as aU,
	Se as aV,
	Ne as aW,
	he as aa,
	ce as ab,
	xe as ac,
	$t as ad,
	Y as ae,
	Ae as af,
	tt as ag,
	Te as ah,
	be as ai,
	Re as aj,
	ue as ak,
	U as al,
	ft as am,
	p as an,
	yn as ao,
	Tn as ap,
	L as aq,
	Ke as ar,
	Rt as as,
	Cn as at,
	kt as au,
	pe as av,
	Ze as aw,
	le as ax,
	Qe as ay,
	Vn as az,
	Pe as b,
	$e as c,
	I as d,
	qe as e,
	ze as f,
	H as g,
	oe as h,
	v as i,
	Je as j,
	Hn as k,
	Xe as l,
	Le as m,
	Ue as n,
	ae as o,
	Ce as p,
	Ht as q,
	Be as r,
	We as s,
	nr as t,
	Fe as u,
	wt as v,
	fe as w,
	ir as x,
	It as y,
	de as z
};
