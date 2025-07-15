import { A as u, E as h, B as d, C as p, D as g, F as A, G as f, H as T } from './awzKxlHP.js';
function L(e, t, ...o) {
	var s = e,
		n = p,
		l;
	u(() => {
		n !== (n = t()) && (l && (g(l), (l = null)), (l = d(() => n(s, ...o))));
	}, h),
		A && (s = f);
}
const E = { BASE_URL: 'http://localhost:8000' },
	r = {
		AUTH: { ME: '/api/auth/me', LOGOUT: '/api/auth/logout', GOOGLE_LOGIN: '/auth/google' },
		DESIGNS: {
			BASE: '/api/designs',
			PUBLIC: '/api/designs/public',
			BY_ID: (e) => `/api/designs/${e}`
		},
		HEALTH: '/health',
		DB_STATUS: '/api/db-status'
	};
function c(e) {
	return `${E.BASE_URL}${e}`;
}
const i = {
		DEFAULT: { credentials: 'include' },
		WITH_JSON: { credentials: 'include', headers: { 'Content-Type': 'application/json' } }
	},
	O = { user: null, loading: !1, error: null },
	a = T(O);
console.log('Auth store initialized');
const S = {
	async checkAuth() {
		console.log('checkAuth called'), a.update((e) => ({ ...e, loading: !0, error: null }));
		try {
			const e = c(r.AUTH.ME);
			console.log('Making auth check request to:', e);
			const t = await fetch(e, i.DEFAULT);
			if ((console.log('Auth check response status:', t.status), t.ok)) {
				const o = await t.json();
				console.log('Auth check successful, user:', o),
					a.update((s) => ({ ...s, user: o, loading: !1 }));
			} else
				console.log('Auth check failed with status:', t.status),
					a.update((o) => ({ ...o, user: null, loading: !1 }));
		} catch (e) {
			console.log('Auth check error:', e),
				a.update((t) => ({ ...t, user: null, loading: !1, error: 'Authentication check failed' }));
		}
	},
	async logout() {
		a.update((e) => ({ ...e, loading: !0, error: null }));
		try {
			const e = c(r.AUTH.LOGOUT);
			if ((await fetch(e, { method: 'POST', ...i.DEFAULT })).ok)
				a.update((o) => ({ ...o, user: null, loading: !1 }));
			else throw new Error('Logout failed');
		} catch {
			a.update((t) => ({ ...t, loading: !1, error: 'Logout failed' }));
		}
	},
	signInWithGoogle() {
		window.location.href = c(r.AUTH.GOOGLE_LOGIN);
	}
};
export { r as A, i as F, S as a, c as b, a as c, L as s };
