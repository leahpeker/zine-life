import { f as c, a as i, t as H } from '../chunks/DcgrL8hp.js';
import { i as gt } from '../chunks/D9VeyYUl.js';
import {
	p as ft,
	o as ht,
	l as kt,
	a as _t,
	f as V,
	b as yt,
	$ as wt,
	s as o,
	c as e,
	g as s,
	m as B,
	r as t,
	n as g,
	d as I,
	t as Y,
	e as F
} from '../chunks/awzKxlHP.js';
import { d as Et, h as Dt, s as R } from '../chunks/j6DJbcnn.js';
import { i as T, s as St, a as Rt } from '../chunks/BVdWusFy.js';
import { H as Nt, e as X, s as J, i as Q } from '../chunks/DPuKpAsp.js';
import { g as at } from '../chunks/n0jKMFEm.js';
import { a as It, b as tt, A as et, c as Tt } from '../chunks/CMe1BOE4.js';
import { N as W, U as At, S as rt, R as $t } from '../chunks/CI7QNg88.js';
function Ut() {
	at($t.DASHBOARD);
}
var Ot = c(
		'<meta name="description" content="Create punk flyers, zines, and underground graphics. No corporate BS."/>'
	),
	Gt = c('<div class="text-primary font-mono">Loading your designs...</div>'),
	Pt = c(
		'<div class="text-center py-12 border-2 border-background-card bg-background-panel"><div class="text-primary text-6xl mb-4">[+]</div> <h3 class="text-xl font-black text-white mb-2 font-industrial">NO DESIGNS YET</h3> <p class="text-text-muted font-mono mb-4">Time to create your first underground masterpiece</p> <!></div>'
	),
	Lt = (j, A) => at(`/editor?id=${s(A).id}`),
	Ct = c(
		'<li class="border-2 border-background-card bg-background-panel p-4 hover:border-primary transition-colors photocopied"><div class="h-40 mb-4 flex items-center justify-center bg-background-card"><!></div> <h3 class="text-lg font-black text-white mb-2 font-industrial"> </h3> <p class="text-text-muted font-mono text-xs mb-3"> </p> <button class="bg-transparent text-primary px-4 py-1 text-sm font-black border border-primary hover:bg-primary hover:text-black transition-colors font-industrial">EDIT</button></li>'
	),
	Ht = c(
		'<ul class="grid grid-cols-1 md:grid-cols-3 gap-6" role="list" aria-label="Recent designs"></ul>'
	),
	Bt = c(
		'<section class="bg-black py-12 px-4"><div class="max-w-6xl mx-auto"><div class="mb-12"><h1 class="text-4xl md:text-6xl font-black text-white mb-4 tracking-wider transform -skew-x-6 font-punk"> </h1> <p class="text-xl text-green-400 font-mono">Ready to create more underground graphics?</p></div> <div class="flex flex-wrap gap-4 mb-12"><!> <button class="bg-transparent text-green-400 px-8 py-3 text-xl font-black tracking-wide border-2 border-green-400 hover:bg-green-400 hover:text-black transition-colors font-industrial" aria-label="View all your designs in the dashboard">VIEW ALL DESIGNS</button></div> <div class="mb-12"><h2 class="text-3xl font-black text-white mb-6 transform -skew-x-3 font-punk border-b-2 border-background-card pb-2">YOUR RECENT WORK</h2> <!></div></div></section>'
	),
	Yt = c(
		`<section class="bg-black py-20 px-4"><div class="max-w-4xl mx-auto text-center"><div class="mb-8"><h1 class="text-6xl md:text-8xl font-black text-white mb-4 tracking-wider transform -skew-x-6 font-punk glitch-text" data-text="DIY GRAPHICS">DIY GRAPHICS</h1> <h2 class="text-3xl md:text-5xl font-black text-green-400 mb-6 transform skew-x-3 font-industrial">FOR THE UNDERGROUND</h2></div> <p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-mono">Make punk flyers, zines, and underground graphics.<br/> No corporate bullshit.</p> <div class="space-y-4"><!> <div class="text-gray-500 font-mono text-sm">no signup required to start</div></div></div></section> <section class="bg-black py-16 px-4 border-t-2 border-background-card"><div class="max-w-4xl mx-auto"><div class="text-center mb-12"><h2 class="text-4xl font-black text-white mb-6 transform -skew-x-3 font-punk">WHAT WE'RE ABOUT</h2></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="text-center p-6 border-2 border-background-card bg-background-panel photocopied hover:border-primary transition-colors"><div class="text-primary text-4xl mb-4 font-black">[✗]</div> <h3 class="text-xl font-black text-white mb-3 tracking-wide font-industrial">PUNK FLYERS</h3> <p class="text-text-muted font-mono text-sm">Raw, aggressive show posters that cut through the noise</p></div> <div class="text-center p-6 border-2 border-background-card bg-background-panel photocopied hover:border-primary transition-colors"><div class="text-primary text-4xl mb-4 font-black">[✗]</div> <h3 class="text-xl font-black text-white mb-3 tracking-wide font-industrial">ZINES</h3> <p class="text-text-muted font-mono text-sm">DIY publications with that photocopied underground feel</p></div> <div class="text-center p-6 border-2 border-background-card bg-background-panel photocopied hover:border-primary transition-colors"><div class="text-primary text-4xl mb-4 font-black">[✗]</div> <h3 class="text-xl font-black text-white mb-3 tracking-wide font-industrial">PROTEST ART</h3> <p class="text-text-muted font-mono text-sm">Bold graphics that actually say something</p></div></div></div></section>`,
		1
	),
	Ft = c(
		'<li class="border-2 border-background-card bg-background-panel hover:border-primary transition-colors photocopied"><div class="bg-background-card h-48 flex items-center justify-center"><!></div> <div class="p-4"><h3 class="text-lg font-black text-white mb-2 font-industrial"> </h3> <p class="text-text-muted font-mono text-xs mb-3"> </p> <button class="bg-transparent text-primary px-4 py-1 text-sm font-black border border-primary hover:bg-primary hover:text-black transition-colors font-industrial">DUPLICATE</button></div></li>'
	),
	Wt = c(
		'<section class="bg-black py-16 px-4 border-t-2 border-background-card"><div class="max-w-6xl mx-auto"><div class="text-center mb-12"><h2 class="text-4xl font-black text-white mb-6 transform -skew-x-3 font-punk">UNDERGROUND GALLERY</h2> <p class="text-text-muted font-mono">Real designs from real rebels</p></div> <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Public designs gallery"></ul></div></section>'
	),
	jt = c(
		'<!> <main class="bg-black min-h-screen photocopied relative" style="margin-top: 64px;"><!> <!></main> <footer class="bg-background-panel border-t-2 border-primary py-8"><div class="max-w-4xl mx-auto px-4 text-center"><div class="mb-6"><h3 class="text-2xl font-black text-white tracking-wider transform -skew-x-6 mb-2 font-punk">ZINE LIFE</h3> <p class="text-text-muted font-mono text-sm">anti-corporate design tools</p></div> <div class="border-t border-border-muted pt-6"><p class="text-text-disabled font-mono text-xs">no venture capital • no tracking • just tools</p></div></div></footer>',
		1
	);
function te(j, A) {
	ft(A, !1);
	const [ot, st] = St(),
		k = () => Rt(Tt, '$authStore', ot);
	let $ = B([]),
		U = B([]),
		O = B(!1);
	async function it() {
		if (k().user)
			try {
				I(O, !0);
				const r = tt(et.DESIGNS.BASE),
					a = await fetch(r, { credentials: 'include' });
				if (a.ok) {
					const n = await a.json();
					I($, (n.designs || []).slice(0, 3));
				}
			} catch (r) {
				console.error('Failed to fetch recent designs:', r);
			} finally {
				I(O, !1);
			}
	}
	async function nt() {
		try {
			const r = tt(et.DESIGNS.PUBLIC),
				a = await fetch(r);
			if (a.ok) {
				const n = await a.json();
				I(U, (n.designs || []).slice(0, 6));
			}
		} catch (r) {
			console.error('Failed to fetch public designs:', r);
		}
	}
	ht(() => {
		It.checkAuth(), nt();
	}),
		kt(
			() => k(),
			() => {
				k().user && it();
			}
		),
		_t(),
		gt();
	var z = jt();
	Dt((r) => {
		var a = Ot();
		(wt.title = 'ZINE LIFE - DIY GRAPHICS FOR THE UNDERGROUND'), i(r, a);
	});
	var K = V(z);
	Nt(K, {});
	var M = o(K, 2),
		Z = e(M);
	{
		var lt = (r) => {
				var a = Bt(),
					n = e(a),
					d = e(n),
					p = e(d),
					x = e(p, !0);
				t(p), g(2), t(d);
				var b = o(d, 2),
					m = e(b);
				W(m, {
					class:
						'bg-green-400 text-black px-8 py-3 text-xl font-black tracking-wide transform -skew-x-6 hover:bg-green-300 transition-colors border-2 border-green-400 font-industrial',
					children: (l, f) => {
						g();
						var D = H('NEW DESIGN');
						i(l, D);
					},
					$$slots: { default: !0 }
				});
				var _ = o(m, 2);
				(_.__click = [Ut]), t(b);
				var y = o(b, 2),
					w = o(e(y), 2);
				{
					var G = (l) => {
							var f = Gt();
							i(l, f);
						},
						E = (l, f) => {
							{
								var D = (h) => {
										var v = Pt(),
											P = o(e(v), 6);
										W(P, {
											class:
												'bg-primary text-black px-6 py-2 font-black tracking-wide transform -skew-x-6 hover:bg-primary-light transition-colors border-2 border-primary font-industrial',
											children: (u, N) => {
												g();
												var S = H('START NOW');
												i(u, S);
											},
											$$slots: { default: !0 }
										}),
											t(v),
											i(h, v);
									},
									xt = (h) => {
										var v = Ht();
										X(
											v,
											5,
											() => s($),
											Q,
											(P, u) => {
												var N = Ct(),
													S = e(N),
													pt = e(S);
												rt(pt, {
													get design() {
														return s(u);
													},
													size: 'medium',
													className: 'bg-white'
												}),
													t(S);
												var L = o(S, 2),
													mt = e(L, !0);
												t(L);
												var C = o(L, 2),
													vt = e(C, !0);
												t(C);
												var q = o(C, 2);
												(q.__click = [Lt, u]),
													t(N),
													Y(
														(ut) => {
															R(mt, s(u).title),
																R(vt, ut),
																J(q, 'aria-label', `Edit ${s(u).title ?? ''}`);
														},
														[() => new Date(s(u).updated_at).toLocaleDateString()],
														F
													),
													i(P, N);
											}
										),
											t(v),
											i(h, v);
									};
								T(
									l,
									(h) => {
										s($).length === 0 ? h(D) : h(xt, !1);
									},
									f
								);
							}
						};
					T(w, (l) => {
						s(O) ? l(G) : l(E, !1);
					});
				}
				t(y),
					t(n),
					t(a),
					Y((l) => R(x, l), [() => At.HEADINGS.WELCOME_BACK(k().user.name)], F),
					i(r, a);
			},
			ct = (r) => {
				var a = Yt(),
					n = V(a),
					d = e(n),
					p = o(e(d), 4),
					x = e(p);
				W(x, {
					class:
						'bg-green-400 text-black px-12 py-4 text-2xl font-black tracking-wide transform -skew-x-6 hover:bg-green-300 transition-colors border-4 border-green-400 shadow-lg hover:shadow-green-400/50 font-industrial',
					children: (b, m) => {
						g();
						var _ = H('START CREATING');
						i(b, _);
					},
					$$slots: { default: !0 }
				}),
					g(2),
					t(p),
					t(d),
					t(n),
					g(2),
					i(r, a);
			};
		T(Z, (r) => {
			k().user ? r(lt) : r(ct, !1);
		});
	}
	var dt = o(Z, 2);
	{
		var bt = (r) => {
			var a = Wt(),
				n = e(a),
				d = o(e(n), 2);
			X(
				d,
				5,
				() => s(U),
				Q,
				(p, x) => {
					var b = Ft(),
						m = e(b),
						_ = e(m);
					rt(_, {
						get design() {
							return s(x);
						},
						size: 'large',
						className: 'bg-white'
					}),
						t(m);
					var y = o(m, 2),
						w = e(y),
						G = e(w, !0);
					t(w);
					var E = o(w, 2),
						l = e(E);
					t(E);
					var f = o(E, 2);
					t(y),
						t(b),
						Y(
							(D) => {
								R(G, s(x).title),
									R(l, `by underground artist • ${D ?? ''}`),
									J(f, 'aria-label', `Duplicate ${s(x).title ?? ''}`);
							},
							[() => new Date(s(x).created_at).toLocaleDateString()],
							F
						),
						i(p, b);
				}
			),
				t(d),
				t(n),
				t(a),
				i(r, a);
		};
		T(dt, (r) => {
			s(U).length > 0 && r(bt);
		});
	}
	t(M), g(2), i(j, z), yt(), st();
}
Et(['click']);
export { te as component };
