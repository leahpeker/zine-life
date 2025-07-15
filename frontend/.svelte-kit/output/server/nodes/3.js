export const index = 3;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/3.mMc-g-lD.js',
	'_app/immutable/chunks/DcgrL8hp.js',
	'_app/immutable/chunks/awzKxlHP.js',
	'_app/immutable/chunks/D9VeyYUl.js',
	'_app/immutable/chunks/j6DJbcnn.js',
	'_app/immutable/chunks/BVdWusFy.js',
	'_app/immutable/chunks/DPuKpAsp.js',
	'_app/immutable/chunks/n0jKMFEm.js',
	'_app/immutable/chunks/CMe1BOE4.js',
	'_app/immutable/chunks/CI7QNg88.js'
];
export const stylesheets = [];
export const fonts = [];
