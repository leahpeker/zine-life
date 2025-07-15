export const index = 0;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/0.DIg3WW-u.js',
	'_app/immutable/chunks/DcgrL8hp.js',
	'_app/immutable/chunks/awzKxlHP.js',
	'_app/immutable/chunks/CMe1BOE4.js'
];
export const stylesheets = ['_app/immutable/assets/0.CxF7hybA.css'];
export const fonts = [];
