import { f as h, a as g } from '../chunks/DcgrL8hp.js';
import { i as l } from '../chunks/D9VeyYUl.js';
import { p as v, f as d, t as _, b as x, c as e, r as o, s as $ } from '../chunks/awzKxlHP.js';
import { s as p } from '../chunks/j6DJbcnn.js';
import { s as b, p as m } from '../chunks/n0jKMFEm.js';
const k = {
	get error() {
		return m.error;
	},
	get status() {
		return m.status;
	}
};
b.updated.check;
const f = k;
var E = h('<h1> </h1> <p> </p>', 1);
function A(i, c) {
	v(c, !1), l();
	var t = E(),
		r = d(t),
		n = e(r, !0);
	o(r);
	var s = $(r, 2),
		u = e(s, !0);
	o(s),
		_(() => {
			var a;
			p(n, f.status), p(u, (a = f.error) == null ? void 0 : a.message);
		}),
		g(i, t),
		x();
}
export { A as component };
