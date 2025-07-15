export const index = 1;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/1.KYY_2HMb.js',
	'_app/immutable/chunks/DcgrL8hp.js',
	'_app/immutable/chunks/awzKxlHP.js',
	'_app/immutable/chunks/D9VeyYUl.js',
	'_app/immutable/chunks/j6DJbcnn.js',
	'_app/immutable/chunks/n0jKMFEm.js'
];
export const stylesheets = [];
export const fonts = [];
