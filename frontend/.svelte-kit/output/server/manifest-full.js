export const manifest = (() => {
	function __memo(fn) {
		let value;
		return () => (value ??= value = fn());
	}

	return {
		appDir: '_app',
		appPath: '_app',
		assets: new Set(['favicon.png']),
		mimeTypes: { '.png': 'image/png' },
		_: {
			client: {
				start: '_app/immutable/entry/start.n0CiAucn.js',
				app: '_app/immutable/entry/app.BpLBxU4e.js',
				imports: [
					'_app/immutable/entry/start.n0CiAucn.js',
					'_app/immutable/chunks/n0jKMFEm.js',
					'_app/immutable/chunks/awzKxlHP.js',
					'_app/immutable/entry/app.BpLBxU4e.js',
					'_app/immutable/chunks/Dp1pzeXC.js',
					'_app/immutable/chunks/awzKxlHP.js',
					'_app/immutable/chunks/j6DJbcnn.js',
					'_app/immutable/chunks/DcgrL8hp.js',
					'_app/immutable/chunks/BVdWusFy.js'
				],
				stylesheets: [],
				fonts: [],
				uses_env_dynamic_public: false
			},
			nodes: [
				__memo(() => import('./nodes/0.js')),
				__memo(() => import('./nodes/1.js')),
				__memo(() => import('./nodes/2.js')),
				__memo(() => import('./nodes/3.js')),
				__memo(() => import('./nodes/4.js'))
			],
			routes: [
				{
					id: '/',
					pattern: /^\/$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 2 },
					endpoint: null
				},
				{
					id: '/dashboard',
					pattern: /^\/dashboard\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 3 },
					endpoint: null
				},
				{
					id: '/editor',
					pattern: /^\/editor\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 4 },
					endpoint: null
				}
			],
			prerendered_routes: new Set([]),
			matchers: async () => {
				return {};
			},
			server_assets: {}
		}
	};
})();
