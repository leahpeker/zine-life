import {
	A as G,
	F as I,
	N as K,
	E as Z,
	V as X,
	W as J,
	X as Q,
	Y as x,
	O as k,
	Z as U,
	_ as B,
	B as w,
	a0 as y,
	a1 as ee,
	G as $,
	a2 as re,
	a3 as ne,
	v as N,
	a4 as se,
	a5 as m,
	a6 as ie,
	R as ae,
	C as j,
	m as H,
	a7 as fe,
	d as V,
	a8 as ue,
	g as v,
	a9 as D,
	aa as te,
	ab as le,
	y as C,
	e as ce,
	ac as oe,
	ad as pe,
	ae as _e,
	af as de,
	P as z,
	ag as ve,
	ah as be,
	ai as he,
	aj as Pe,
	ak as P
} from './awzKxlHP.js';
function Ae(e, r, [s, n] = [0, 0]) {
	I && s === 0 && K();
	var i = e,
		a = null,
		u = null,
		d = ee,
		S = s > 0 ? Z : 0,
		l = !1;
	const A = (t, c = !0) => {
			(l = !0), _(c, t);
		},
		_ = (t, c) => {
			if (d === (d = t)) return;
			let b = !1;
			if (I && n !== -1) {
				if (s === 0) {
					const o = X(i);
					o === J
						? (n = 0)
						: o === Q
							? (n = 1 / 0)
							: ((n = parseInt(o.substring(1))), n !== n && (n = d ? 1 / 0 : -1));
				}
				const E = n > s;
				!!d === E && ((i = x()), k(i), U(!1), (b = !0), (n = -1));
			}
			d
				? (a ? B(a) : c && (a = w(() => c(i))),
					u &&
						y(u, () => {
							u = null;
						}))
				: (u ? B(u) : c && (u = w(() => c(i, [s + 1, n]))),
					a &&
						y(a, () => {
							a = null;
						})),
				b && U(!0);
		};
	G(() => {
		(l = !1), r(A), l || _(null, null);
	}, S),
		I && (i = $);
}
function Oe(e, r, s) {
	I && K();
	var n = e,
		i,
		a;
	G(() => {
		i !== (i = r()) && (a && (y(a), (a = null)), i && (a = w(() => s(n, i))));
	}, Z),
		I && (n = $);
}
function M(e, r) {
	return e === r || (e == null ? void 0 : e[m]) === r;
}
function Te(e = {}, r, s, n) {
	return (
		re(() => {
			var i, a;
			return (
				ne(() => {
					(i = a),
						(a = (n == null ? void 0 : n()) || []),
						N(() => {
							e !== s(...a) && (r(e, ...a), i && M(s(...i), e) && r(null, ...i));
						});
				}),
				() => {
					se(() => {
						a && M(s(...a), e) && r(null, ...a);
					});
				}
			);
		}),
		e
	);
}
let R = !1,
	L = Symbol();
function ge(e, r, s) {
	const n = s[r] ?? (s[r] = { store: null, source: H(void 0), unsubscribe: j });
	if (n.store !== e && !(L in s))
		if ((n.unsubscribe(), (n.store = e ?? null), e == null))
			(n.source.v = void 0), (n.unsubscribe = j);
		else {
			var i = !0;
			(n.unsubscribe = fe(e, (a) => {
				i ? (n.source.v = a) : V(n.source, a);
			})),
				(i = !1);
		}
	return e && L in s ? ue(e) : v(n.source);
}
function we() {
	const e = {};
	function r() {
		ie(() => {
			for (var s in e) e[s].unsubscribe();
			ae(e, L, { enumerable: !1, value: !0 });
		});
	}
	return [e, r];
}
function Ie(e) {
	var r = R;
	try {
		return (R = !1), [e(), R];
	} finally {
		R = r;
	}
}
const Se = {
	get(e, r) {
		if (!e.exclude.includes(r)) return e.props[r];
	},
	set(e, r) {
		return !1;
	},
	getOwnPropertyDescriptor(e, r) {
		if (!e.exclude.includes(r) && r in e.props)
			return { enumerable: !0, configurable: !0, value: e.props[r] };
	},
	has(e, r) {
		return e.exclude.includes(r) ? !1 : r in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((r) => !e.exclude.includes(r));
	}
};
function ye(e, r, s) {
	return new Proxy({ props: e, exclude: r }, Se);
}
const Ee = {
	get(e, r) {
		let s = e.props.length;
		for (; s--; ) {
			let n = e.props[s];
			if ((P(n) && (n = n()), typeof n == 'object' && n !== null && r in n)) return n[r];
		}
	},
	set(e, r, s) {
		let n = e.props.length;
		for (; n--; ) {
			let i = e.props[n];
			P(i) && (i = i());
			const a = D(i, r);
			if (a && a.set) return a.set(s), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(e, r) {
		let s = e.props.length;
		for (; s--; ) {
			let n = e.props[s];
			if ((P(n) && (n = n()), typeof n == 'object' && n !== null && r in n)) {
				const i = D(n, r);
				return i && !i.configurable && (i.configurable = !0), i;
			}
		}
	},
	has(e, r) {
		if (r === m || r === z) return !1;
		for (let s of e.props) if ((P(s) && (s = s()), s != null && r in s)) return !0;
		return !1;
	},
	ownKeys(e) {
		const r = [];
		for (let s of e.props)
			if ((P(s) && (s = s()), !!s)) {
				for (const n in s) r.includes(n) || r.push(n);
				for (const n of Object.getOwnPropertySymbols(s)) r.includes(n) || r.push(n);
			}
		return r;
	}
};
function Ne(...e) {
	return new Proxy({ props: e }, Ee);
}
function F(e) {
	var r;
	return ((r = e.ctx) == null ? void 0 : r.d) ?? !1;
}
function De(e, r, s, n) {
	var q;
	var i = (s & he) !== 0,
		a = !ve || (s & be) !== 0,
		u = (s & de) !== 0,
		d = (s & Pe) !== 0,
		S = !1,
		l;
	u ? ([l, S] = Ie(() => e[r])) : (l = e[r]);
	var A = m in e || z in e,
		_ =
			(u && (((q = D(e, r)) == null ? void 0 : q.set) ?? (A && r in e && ((f) => (e[r] = f))))) ||
			void 0,
		t = n,
		c = !0,
		b = !1,
		E = () => ((b = !0), c && ((c = !1), d ? (t = N(n)) : (t = n)), t);
	l === void 0 && n !== void 0 && (_ && a && te(), (l = E()), _ && _(l));
	var o;
	if (a)
		o = () => {
			var f = e[r];
			return f === void 0 ? E() : ((c = !0), (b = !1), f);
		};
	else {
		var Y = (i ? C : ce)(() => e[r]);
		(Y.f |= le),
			(o = () => {
				var f = v(Y);
				return f !== void 0 && (t = void 0), f === void 0 ? t : f;
			});
	}
	if ((s & oe) === 0 && a) return o;
	if (_) {
		var W = e.$$legacy;
		return function (f, h) {
			return arguments.length > 0 ? ((!a || !h || W || S) && _(h ? o() : f), f) : o();
		};
	}
	var O = !1,
		T = H(l),
		p = C(() => {
			var f = o(),
				h = v(T);
			return O ? ((O = !1), h) : (T.v = f);
		});
	return (
		u && v(p),
		i || (p.equals = pe),
		function (f, h) {
			if (arguments.length > 0) {
				const g = h ? v(p) : a && u ? _e(f) : f;
				if (!p.equals(g)) {
					if (((O = !0), V(T, g), b && t !== void 0 && (t = g), F(p))) return f;
					N(() => v(p));
				}
				return f;
			}
			return F(p) ? p.v : v(p);
		}
	);
}
export { ge as a, Te as b, Oe as c, Ne as d, Ae as i, De as p, ye as r, we as s };
