export const index = 4;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/editor/_page.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/4.2KZjGsri.js',
	'_app/immutable/chunks/D88yL9vU.js',
	'_app/immutable/chunks/DcgrL8hp.js',
	'_app/immutable/chunks/awzKxlHP.js',
	'_app/immutable/chunks/j6DJbcnn.js',
	'_app/immutable/chunks/BVdWusFy.js',
	'_app/immutable/chunks/DPuKpAsp.js',
	'_app/immutable/chunks/n0jKMFEm.js',
	'_app/immutable/chunks/CMe1BOE4.js',
	'_app/immutable/chunks/D9VeyYUl.js',
	'_app/immutable/chunks/Dp1pzeXC.js'
];
export const stylesheets = ['_app/immutable/assets/4.CMpPs6TI.css'];
export const fonts = [];
