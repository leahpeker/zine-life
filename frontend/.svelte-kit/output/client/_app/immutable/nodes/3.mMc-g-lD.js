import { f as k, a as b, t as et } from '../chunks/DcgrL8hp.js';
import { i as Dt } from '../chunks/D9VeyYUl.js';
import {
	p as Tt,
	o as It,
	l as ot,
	a as wt,
	f as $t,
	b as Lt,
	$ as Ft,
	s,
	c as e,
	d as c,
	m as T,
	g as t,
	n as st,
	r as a,
	t as N,
	u as Nt,
	h as At,
	e as it
} from '../chunks/awzKxlHP.js';
import { d as Rt, h as Pt, s as y } from '../chunks/j6DJbcnn.js';
import { i as U, s as Ut, a as Gt } from '../chunks/BVdWusFy.js';
import { H as Ot, e as lt, i as nt, a as Ct, s as G, b as ct } from '../chunks/DPuKpAsp.js';
import { b as dt, A as vt, F as pt, c as Mt } from '../chunks/CMe1BOE4.js';
import { g as ut } from '../chunks/n0jKMFEm.js';
import { N as bt, D as A, F as Bt, U as W, S as Yt, R as jt } from '../chunks/CI7QNg88.js';
function Ht(I, f, _) {
	c(f, !1), _();
}
var Vt = (I, f, _) => c(f, _()),
	Wt = k(
		'<span class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity font-black" style="background-color: var(--color-primary); color: black;"> </span>'
	),
	qt = k(
		'<button class="px-4 py-2 font-black tracking-wide border-2 font-industrial transition-all relative group"><span> </span> <!></button>'
	),
	zt = k(
		'<div class="text-center py-16"><div class="text-primary font-mono text-xl">Loading your designs...</div></div>'
	),
	Kt = k(
		'<div class="text-center py-16"><div class="text-danger font-mono text-xl mb-4"> </div> <button class="bg-primary text-black px-6 py-2 font-black tracking-wide transform -skew-x-6 hover:bg-primary-light transition-colors border-2 border-primary font-industrial" aria-label="Retry loading designs">RETRY</button></div>'
	),
	Xt = k(
		'<div class="text-center py-16 border-2 border-background-card bg-background-panel"><div class="text-primary text-6xl mb-4">[+]</div> <h2 class="text-2xl font-black text-white mb-4 font-industrial"> </h2> <p class="text-text-muted font-mono mb-6"> </p> <!></div>'
	),
	Zt = (I, f, _) => f(t(_).id),
	Jt = (I, f, _) => f(t(_).id),
	Qt = k(
		'<li class="border-2 border-background-card bg-background-panel hover:border-primary transition-colors photocopied"><div class="bg-background-card h-48 flex items-center justify-center relative"><!> <div class="absolute top-2 right-2"><span> </span></div></div> <div class="p-4"><h3 class="text-lg font-black text-white mb-2 font-industrial"> </h3> <p class="text-text-muted font-mono text-xs mb-4"> <br/> </p> <div class="flex gap-2"><button class="bg-primary text-black px-3 py-1 text-sm font-black tracking-wide hover:bg-primary-light transition-colors border border-primary font-industrial">EDIT</button> <button class="bg-transparent text-danger px-3 py-1 text-sm font-black tracking-wide border border-danger hover:bg-danger hover:text-black transition-colors font-industrial">DELETE</button></div></div></li>'
	),
	tr = k(
		'<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Your designs"></ul>'
	),
	rr = k(
		'<!> <div class="min-h-screen bg-black text-white photocopied" style="margin-top: 64px;"><div class="max-w-6xl mx-auto px-4 py-8"><div class="mb-8"><h1 class="text-4xl font-black text-primary font-punk tracking-wider transform -skew-x-3 mb-2">MY DESIGNS</h1> <p class="text-text-muted font-mono">Your underground graphics collection</p></div> <div class="flex flex-wrap justify-between items-center mb-8 gap-4"><!> <div class="flex gap-2"></div></div> <!></div></div>',
		1
	);
function vr(I, f) {
	Tt(f, !1);
	const [_, ft] = Ut(),
		E = () => Gt(Mt, '$authStore', _),
		O = T();
	let w = T([]),
		C = T(!0),
		$ = T(null),
		n = T(A.ALL),
		R = T(!1);
	It(() => {
		!E().user && !E().loading ? ut('/') : E().user && M();
	});
	async function M() {
		if (E().user)
			try {
				c(C, !0), c($, null);
				const r = dt(vt.DESIGNS.BASE),
					i = await fetch(r, pt.DEFAULT);
				if (i.ok) {
					const g = await i.json();
					c(w, g.designs || []);
				} else c($, 'Failed to fetch designs');
			} catch (r) {
				c($, 'Failed to connect to server'), console.error('Failed to fetch designs:', r);
			} finally {
				c(C, !1), c(R, !0);
			}
	}
	async function _t(r) {
		if (confirm(W.MESSAGES.DELETE_CONFIRM))
			try {
				const i = dt(vt.DESIGNS.BY_ID(r));
				(await fetch(i, { method: 'DELETE', ...pt.DEFAULT })).ok
					? c(
							w,
							t(w).filter((d) => d.id !== r)
						)
					: alert('Failed to delete design');
			} catch (i) {
				alert('Failed to delete design'), console.error('Delete failed:', i);
			}
	}
	function gt(r) {
		ut(jt.EDITOR_WITH_ID(r));
	}
	ot(
		() => (E(), t(R)),
		() => {
			E().user && !t(R) && M();
		}
	),
		ot(
			() => (t(w), t(n), A),
			() => {
				c(
					O,
					t(w).filter((r) =>
						t(n) === A.ALL
							? !0
							: t(n) === A.PUBLIC
								? r.is_public
								: t(n) === A.PRIVATE
									? !r.is_public
									: !0
					)
				);
			}
		),
		wt(),
		Dt();
	var q = rr();
	Pt((r) => {
		Ft.title = 'Dashboard - ZINE LIFE';
	});
	var z = $t(q);
	Ot(z, { showBackButton: !0 });
	var K = s(z, 2),
		X = e(K),
		B = s(e(X), 2),
		Z = e(B);
	bt(Z, {
		class:
			'px-6 py-3 font-black tracking-wide transform -skew-x-6 transition-all border-2 font-industrial hover:brightness-110',
		style:
			'background-color: var(--color-primary); color: black; border-color: var(--color-primary);',
		children: (r, i) => {
			st();
			var g = et('NEW DESIGN');
			b(r, g);
		},
		$$slots: { default: !0 }
	});
	var J = s(Z, 2);
	lt(
		J,
		5,
		() => Object.entries(Bt),
		nt,
		(r, i) => {
			var g = Nt(() => At(t(i), 2));
			let d = () => t(g)[0],
				v = () => t(g)[1];
			var l = qt();
			l.__click = [Vt, n, d];
			var p = e(l),
				L = e(p, !0);
			a(p);
			var u = s(p, 2);
			{
				var m = (x) => {
					var o = Wt(),
						h = e(o, !0);
					a(o), N(() => y(h, v().label)), b(x, o);
				};
				U(u, (x) => {
					t(n) !== d() && x(m);
				});
			}
			a(l),
				N(() => {
					Ct(
						l,
						`
							background-color: ${t(n) === d() ? 'var(--color-primary)' : 'transparent'};
							color: ${t(n) === d() ? 'black' : 'var(--color-primary)'};
							border-color: var(--color-primary);
						`
					),
						G(l, 'aria-label', v().ariaLabel),
						G(l, 'aria-pressed', t(n) === d()),
						ct(p, 1, `${t(n) === d() ? '' : 'group-hover:opacity-0'} transition-opacity`),
						y(L, v().label);
				}),
				b(r, l);
		}
	),
		a(J),
		a(B);
	var mt = s(B, 2);
	{
		var xt = (r) => {
				var i = zt();
				b(r, i);
			},
			ht = (r, i) => {
				{
					var g = (v) => {
							var l = Kt(),
								p = e(l),
								L = e(p, !0);
							a(p);
							var u = s(p, 2);
							(u.__click = [Ht, R, M]), a(l), N(() => y(L, t($))), b(v, l);
						},
						d = (v, l) => {
							{
								var p = (u) => {
										var m = Xt(),
											x = s(e(m), 2),
											o = e(x, !0);
										a(x);
										var h = s(x, 2),
											F = e(h, !0);
										a(h);
										var P = s(h, 2);
										bt(P, {
											class:
												'bg-primary text-black px-6 py-3 font-black tracking-wide transform -skew-x-6 hover:bg-primary-light transition-colors border-2 border-primary font-industrial',
											children: (S, D) => {
												st();
												var Y = et('CREATE FIRST DESIGN');
												b(S, Y);
											},
											$$slots: { default: !0 }
										}),
											a(m),
											N(
												(S, D) => {
													y(o, S), y(F, D);
												},
												[
													() => W.MESSAGES.EMPTY_STATE_TITLE(t(n)),
													() => W.MESSAGES.EMPTY_STATE_DESCRIPTION(t(n))
												],
												it
											),
											b(u, m);
									},
									L = (u) => {
										var m = tr();
										lt(
											m,
											5,
											() => t(O),
											nt,
											(x, o) => {
												var h = Qt(),
													F = e(h),
													P = e(F);
												Yt(P, {
													get design() {
														return t(o);
													},
													size: 'large',
													className: 'bg-white'
												});
												var S = s(P, 2),
													D = e(S),
													Y = e(D, !0);
												a(D), a(S), a(F);
												var Q = s(F, 2),
													j = e(Q),
													yt = e(j, !0);
												a(j);
												var H = s(j, 2),
													tt = e(H),
													kt = s(tt, 2);
												a(H);
												var rt = s(H, 2),
													V = e(rt);
												V.__click = [Zt, gt, o];
												var at = s(V, 2);
												(at.__click = [Jt, _t, o]),
													a(rt),
													a(Q),
													a(h),
													N(
														(Et, St) => {
															ct(
																D,
																1,
																`px-2 py-1 text-xs font-black tracking-wide font-industrial ${t(o).is_public ? 'bg-primary text-black' : 'bg-background-input text-text-muted'}`
															),
																y(Y, t(o).is_public ? 'PUBLIC' : 'PRIVATE'),
																y(yt, t(o).title),
																y(tt, `Created: ${Et ?? ''}`),
																y(kt, ` Updated: ${St ?? ''}`),
																G(V, 'aria-label', `Edit ${t(o).title ?? ''}`),
																G(at, 'aria-label', `Delete ${t(o).title ?? ''}`);
														},
														[
															() => new Date(t(o).created_at).toLocaleDateString(),
															() => new Date(t(o).updated_at).toLocaleDateString()
														],
														it
													),
													b(x, h);
											}
										),
											a(m),
											b(u, m);
									};
								U(
									v,
									(u) => {
										t(O).length === 0 ? u(p) : u(L, !1);
									},
									l
								);
							}
						};
					U(
						r,
						(v) => {
							t($) ? v(g) : v(d, !1);
						},
						i
					);
				}
			};
		U(mt, (r) => {
			t(C) ? r(xt) : r(ht, !1);
		});
	}
	a(X), a(K), b(I, q), Lt(), ft();
}
Rt(['click']);
export { vr as component };
