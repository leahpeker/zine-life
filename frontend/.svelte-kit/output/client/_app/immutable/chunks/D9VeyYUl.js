import {
	i as g,
	j as d,
	k as c,
	q as i,
	v as m,
	w as b,
	g as p,
	x as v,
	y as k,
	z as y
} from './awzKxlHP.js';
function x(n = !1) {
	const s = g,
		e = s.l.u;
	if (!e) return;
	let f = () => v(s.s);
	if (n) {
		let a = 0,
			t = {};
		const _ = k(() => {
			let l = !1;
			const r = s.s;
			for (const o in r) r[o] !== t[o] && ((t[o] = r[o]), (l = !0));
			return l && a++, a;
		});
		f = () => p(_);
	}
	e.b.length &&
		d(() => {
			u(s, f), i(e.b);
		}),
		c(() => {
			const a = m(() => e.m.map(b));
			return () => {
				for (const t of a) typeof t == 'function' && t();
			};
		}),
		e.a.length &&
			c(() => {
				u(s, f), i(e.a);
			});
}
function u(n, s) {
	if (n.l.s) for (const e of n.l.s) p(e);
	s();
}
y();
export { x as i };
