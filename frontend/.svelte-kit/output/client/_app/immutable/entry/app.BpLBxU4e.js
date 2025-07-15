const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			'../nodes/0.DIg3WW-u.js',
			'../chunks/DcgrL8hp.js',
			'../chunks/awzKxlHP.js',
			'../chunks/CMe1BOE4.js',
			'../assets/0.CxF7hybA.css',
			'../nodes/1.KYY_2HMb.js',
			'../chunks/D9VeyYUl.js',
			'../chunks/j6DJbcnn.js',
			'../chunks/n0jKMFEm.js',
			'../nodes/2.DPke79jR.js',
			'../chunks/BVdWusFy.js',
			'../chunks/DPuKpAsp.js',
			'../chunks/CI7QNg88.js',
			'../nodes/3.mMc-g-lD.js',
			'../nodes/4.2KZjGsri.js',
			'../chunks/D88yL9vU.js',
			'../chunks/Dp1pzeXC.js',
			'../assets/4.CMpPs6TI.css'
		])
) => i.map((i) => d[i]);
var G = (e) => {
	throw TypeError(e);
};
var Q = (e, t, r) => t.has(e) || G('Cannot ' + r);
var o = (e, t, r) => (Q(e, t, 'read from private field'), r ? r.call(e) : t.get(e)),
	k = (e, t, r) =>
		t.has(e)
			? G('Cannot add the same private member more than once')
			: t instanceof WeakSet
				? t.add(e)
				: t.set(e, r),
	w = (e, t, r, n) => (Q(e, t, 'write to private field'), n ? n.call(e, r) : t.set(e, r), r);
import { _ as E } from '../chunks/Dp1pzeXC.js';
import {
	d as O,
	P as K,
	g as l,
	Q as N,
	R as W,
	m as X,
	p as Z,
	j as p,
	k as $,
	o as tt,
	S as A,
	U as et,
	f as x,
	s as rt,
	b as st,
	c as at,
	r as ot,
	u as L,
	t as nt
} from '../chunks/awzKxlHP.js';
import { a as ct, m as it, u as ut, s as dt } from '../chunks/j6DJbcnn.js';
import { f as U, a as b, c as j, t as mt } from '../chunks/DcgrL8hp.js';
import { p as D, i as I, c as T, b as V } from '../chunks/BVdWusFy.js';
function lt(e) {
	return class extends _t {
		constructor(t) {
			super({ component: e, ...t });
		}
	};
}
var _, i;
class _t {
	constructor(t) {
		k(this, _);
		k(this, i);
		var v;
		var r = new Map(),
			n = (s, a) => {
				var f = X(a);
				return r.set(s, f), f;
			};
		const d = new Proxy(
			{ ...(t.props || {}), $$events: {} },
			{
				get(s, a) {
					return l(r.get(a) ?? n(a, Reflect.get(s, a)));
				},
				has(s, a) {
					return a === K ? !0 : (l(r.get(a) ?? n(a, Reflect.get(s, a))), Reflect.has(s, a));
				},
				set(s, a, f) {
					return O(r.get(a) ?? n(a, f), f), Reflect.set(s, a, f);
				}
			}
		);
		w(
			this,
			i,
			(t.hydrate ? ct : it)(t.component, {
				target: t.target,
				anchor: t.anchor,
				props: d,
				context: t.context,
				intro: t.intro ?? !1,
				recover: t.recover
			})
		),
			(!((v = t == null ? void 0 : t.props) != null && v.$$host) || t.sync === !1) && N(),
			w(this, _, d.$$events);
		for (const s of Object.keys(o(this, i)))
			s === '$set' ||
				s === '$destroy' ||
				s === '$on' ||
				W(this, s, {
					get() {
						return o(this, i)[s];
					},
					set(a) {
						o(this, i)[s] = a;
					},
					enumerable: !0
				});
		(o(this, i).$set = (s) => {
			Object.assign(d, s);
		}),
			(o(this, i).$destroy = () => {
				ut(o(this, i));
			});
	}
	$set(t) {
		o(this, i).$set(t);
	}
	$on(t, r) {
		o(this, _)[t] = o(this, _)[t] || [];
		const n = (...d) => r.call(this, ...d);
		return (
			o(this, _)[t].push(n),
			() => {
				o(this, _)[t] = o(this, _)[t].filter((d) => d !== n);
			}
		);
	}
	$destroy() {
		o(this, i).$destroy();
	}
}
(_ = new WeakMap()), (i = new WeakMap());
const wt = {};
var ft = U(
		'<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'
	),
	ht = U('<!> <!>', 1);
function vt(e, t) {
	Z(t, !0);
	let r = D(t, 'components', 23, () => []),
		n = D(t, 'data_0', 3, null),
		d = D(t, 'data_1', 3, null);
	p(() => t.stores.page.set(t.page)),
		$(() => {
			t.stores, t.page, t.constructors, r(), t.form, n(), d(), t.stores.page.notify();
		});
	let v = A(!1),
		s = A(!1),
		a = A(null);
	tt(() => {
		const c = t.stores.page.subscribe(() => {
			l(v) &&
				(O(s, !0),
				et().then(() => {
					O(a, document.title || 'untitled page', !0);
				}));
		});
		return O(v, !0), c;
	});
	const f = L(() => t.constructors[1]);
	var C = ht(),
		S = x(C);
	{
		var Y = (c) => {
				var m = j();
				const y = L(() => t.constructors[0]);
				var P = x(m);
				T(
					P,
					() => l(y),
					(h, g) => {
						V(
							g(h, {
								get data() {
									return n();
								},
								get form() {
									return t.form;
								},
								children: (u, yt) => {
									var M = j(),
										F = x(M);
									T(
										F,
										() => l(f),
										(H, J) => {
											V(
												J(H, {
													get data() {
														return d();
													},
													get form() {
														return t.form;
													}
												}),
												(R) => (r()[1] = R),
												() => {
													var R;
													return (R = r()) == null ? void 0 : R[1];
												}
											);
										}
									),
										b(u, M);
								},
								$$slots: { default: !0 }
							}),
							(u) => (r()[0] = u),
							() => {
								var u;
								return (u = r()) == null ? void 0 : u[0];
							}
						);
					}
				),
					b(c, m);
			},
			q = (c) => {
				var m = j();
				const y = L(() => t.constructors[0]);
				var P = x(m);
				T(
					P,
					() => l(y),
					(h, g) => {
						V(
							g(h, {
								get data() {
									return n();
								},
								get form() {
									return t.form;
								}
							}),
							(u) => (r()[0] = u),
							() => {
								var u;
								return (u = r()) == null ? void 0 : u[0];
							}
						);
					}
				),
					b(c, m);
			};
		I(S, (c) => {
			t.constructors[1] ? c(Y) : c(q, !1);
		});
	}
	var z = rt(S, 2);
	{
		var B = (c) => {
			var m = ft(),
				y = at(m);
			{
				var P = (h) => {
					var g = mt();
					nt(() => dt(g, l(a))), b(h, g);
				};
				I(y, (h) => {
					l(s) && h(P);
				});
			}
			ot(m), b(c, m);
		};
		I(z, (c) => {
			l(v) && c(B);
		});
	}
	b(e, C), st();
}
const At = lt(vt),
	Lt = [
		() =>
			E(() => import('../nodes/0.DIg3WW-u.js'), __vite__mapDeps([0, 1, 2, 3, 4]), import.meta.url),
		() =>
			E(
				() => import('../nodes/1.KYY_2HMb.js'),
				__vite__mapDeps([5, 1, 2, 6, 7, 8]),
				import.meta.url
			),
		() =>
			E(
				() => import('../nodes/2.DPke79jR.js'),
				__vite__mapDeps([9, 1, 2, 6, 7, 10, 11, 8, 3, 12]),
				import.meta.url
			),
		() =>
			E(
				() => import('../nodes/3.mMc-g-lD.js'),
				__vite__mapDeps([13, 1, 2, 6, 7, 10, 11, 8, 3, 12]),
				import.meta.url
			),
		() =>
			E(
				() => import('../nodes/4.2KZjGsri.js'),
				__vite__mapDeps([14, 15, 1, 2, 7, 10, 11, 8, 3, 6, 16, 17]),
				import.meta.url
			)
	],
	jt = [],
	Dt = { '/': [2], '/dashboard': [3], '/editor': [4] },
	gt = {
		handleError: ({ error: e }) => {
			console.error(e);
		},
		reroute: () => {},
		transport: {}
	},
	bt = Object.fromEntries(Object.entries(gt.transport).map(([e, t]) => [e, t.decode])),
	It = !1,
	Tt = (e, t) => bt[e](t);
export {
	Tt as decode,
	bt as decoders,
	Dt as dictionary,
	It as hash,
	gt as hooks,
	wt as matchers,
	Lt as nodes,
	At as root,
	jt as server_loads
};
