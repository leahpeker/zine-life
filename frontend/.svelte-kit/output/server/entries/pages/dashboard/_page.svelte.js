import {
	G as store_get,
	J as ensure_array_like,
	I as head,
	O as attr_style,
	K as attr,
	P as attr_class,
	F as escape_html,
	N as unsubscribe_stores,
	D as pop,
	A as push,
	M as stringify
} from '../../../chunks/index.js';
import { a as authStore } from '../../../chunks/auth.js';
import '../../../chunks/client.js';
import { H as Header, b as buildApiUrl, A as API_ENDPOINTS } from '../../../chunks/pageStore.js';
import { F as FETCH_OPTIONS } from '../../../chunks/http.js';
import {
	N as NewDesignButton,
	D as DESIGN_FILTERS,
	F as FILTER_CONFIG,
	S as SimpleThumbnail,
	U as UI_TEXT
} from '../../../chunks/NewDesignButton.js';
function _page($$payload, $$props) {
	push();
	var $$store_subs;
	let filteredDesigns;
	let designs = [];
	let loading = true;
	let error = null;
	let filter = DESIGN_FILTERS.ALL;
	let hasInitiallyFetched = false;
	async function fetchDesigns() {
		if (!store_get(($$store_subs ??= {}), '$authStore', authStore).user) return;
		try {
			loading = true;
			error = null;
			const designsUrl = buildApiUrl(API_ENDPOINTS.DESIGNS.BASE);
			const response = await fetch(designsUrl, FETCH_OPTIONS.DEFAULT);
			if (response.ok) {
				const data = await response.json();
				designs = data.designs || [];
			} else {
				error = 'Failed to fetch designs';
			}
		} catch (err) {
			error = 'Failed to connect to server';
			console.error('Failed to fetch designs:', err);
		} finally {
			loading = false;
			hasInitiallyFetched = true;
		}
	}
	if (store_get(($$store_subs ??= {}), '$authStore', authStore).user && !hasInitiallyFetched) {
		fetchDesigns();
	}
	filteredDesigns = designs.filter((design) => {
		return true;
	});
	const each_array = ensure_array_like(Object.entries(FILTER_CONFIG));
	head($$payload, ($$payload2) => {
		$$payload2.title = `<title>Dashboard - ZINE LIFE</title>`;
	});
	Header($$payload, { showBackButton: true });
	$$payload.out += `<!----> <div class="min-h-screen bg-black text-white photocopied" style="margin-top: 64px;"><div class="max-w-6xl mx-auto px-4 py-8"><div class="mb-8"><h1 class="text-4xl font-black text-primary font-punk tracking-wider transform -skew-x-3 mb-2">MY DESIGNS</h1> <p class="text-text-muted font-mono">Your underground graphics collection</p></div> <div class="flex flex-wrap justify-between items-center mb-8 gap-4">`;
	NewDesignButton($$payload, {
		class:
			'px-6 py-3 font-black tracking-wide transform -skew-x-6 transition-all border-2 font-industrial hover:brightness-110',
		style:
			'background-color: var(--color-primary); color: black; border-color: var(--color-primary);',
		children: ($$payload2) => {
			$$payload2.out += `<!---->NEW DESIGN`;
		},
		$$slots: { default: true }
	});
	$$payload.out += `<!----> <div class="flex gap-2"><!--[-->`;
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let [filterKey, config] = each_array[$$index];
		$$payload.out += `<button class="px-4 py-2 font-black tracking-wide border-2 font-industrial transition-all relative group"${attr_style(` background-color: ${stringify(filter === filterKey ? 'var(--color-primary)' : 'transparent')}; color: ${stringify(filter === filterKey ? 'black' : 'var(--color-primary)')}; border-color: var(--color-primary); `)}${attr('aria-label', config.ariaLabel)}${attr('aria-pressed', filter === filterKey)}><span${attr_class(`${stringify(filter === filterKey ? '' : 'group-hover:opacity-0')} transition-opacity`)}>${escape_html(config.label)}</span> `;
		if (filter !== filterKey) {
			$$payload.out += '<!--[-->';
			$$payload.out += `<span class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity font-black" style="background-color: var(--color-primary); color: black;">${escape_html(config.label)}</span>`;
		} else {
			$$payload.out += '<!--[!-->';
		}
		$$payload.out += `<!--]--></button>`;
	}
	$$payload.out += `<!--]--></div></div> `;
	if (loading) {
		$$payload.out += '<!--[-->';
		$$payload.out += `<div class="text-center py-16"><div class="text-primary font-mono text-xl">Loading your designs...</div></div>`;
	} else if (error) {
		$$payload.out += '<!--[1-->';
		$$payload.out += `<div class="text-center py-16"><div class="text-danger font-mono text-xl mb-4">${escape_html(error)}</div> <button class="bg-primary text-black px-6 py-2 font-black tracking-wide transform -skew-x-6 hover:bg-primary-light transition-colors border-2 border-primary font-industrial" aria-label="Retry loading designs">RETRY</button></div>`;
	} else if (filteredDesigns.length === 0) {
		$$payload.out += '<!--[2-->';
		$$payload.out += `<div class="text-center py-16 border-2 border-background-card bg-background-panel"><div class="text-primary text-6xl mb-4">[+]</div> <h2 class="text-2xl font-black text-white mb-4 font-industrial">${escape_html(UI_TEXT.MESSAGES.EMPTY_STATE_TITLE(filter))}</h2> <p class="text-text-muted font-mono mb-6">${escape_html(UI_TEXT.MESSAGES.EMPTY_STATE_DESCRIPTION(filter))}</p> `;
		NewDesignButton($$payload, {
			class:
				'bg-primary text-black px-6 py-3 font-black tracking-wide transform -skew-x-6 hover:bg-primary-light transition-colors border-2 border-primary font-industrial',
			children: ($$payload2) => {
				$$payload2.out += `<!---->CREATE FIRST DESIGN`;
			},
			$$slots: { default: true }
		});
		$$payload.out += `<!----></div>`;
	} else {
		$$payload.out += '<!--[!-->';
		const each_array_1 = ensure_array_like(filteredDesigns);
		$$payload.out += `<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Your designs"><!--[-->`;
		for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
			let design = each_array_1[$$index_1];
			$$payload.out += `<li class="border-2 border-background-card bg-background-panel hover:border-primary transition-colors photocopied"><div class="bg-background-card h-48 flex items-center justify-center relative">`;
			SimpleThumbnail($$payload, { design, size: 'large', className: 'bg-white' });
			$$payload.out += `<!----> <div class="absolute top-2 right-2"><span${attr_class(`px-2 py-1 text-xs font-black tracking-wide font-industrial ${stringify(design.is_public ? 'bg-primary text-black' : 'bg-background-input text-text-muted')}`)}>${escape_html(design.is_public ? 'PUBLIC' : 'PRIVATE')}</span></div></div> <div class="p-4"><h3 class="text-lg font-black text-white mb-2 font-industrial">${escape_html(design.title)}</h3> <p class="text-text-muted font-mono text-xs mb-4">Created: ${escape_html(new Date(design.created_at).toLocaleDateString())}<br/> Updated: ${escape_html(new Date(design.updated_at).toLocaleDateString())}</p> <div class="flex gap-2"><button class="bg-primary text-black px-3 py-1 text-sm font-black tracking-wide hover:bg-primary-light transition-colors border border-primary font-industrial"${attr('aria-label', `Edit ${stringify(design.title)}`)}>EDIT</button> <button class="bg-transparent text-danger px-3 py-1 text-sm font-black tracking-wide border border-danger hover:bg-danger hover:text-black transition-colors font-industrial"${attr('aria-label', `Delete ${stringify(design.title)}`)}>DELETE</button></div></div></li>`;
		}
		$$payload.out += `<!--]--></ul>`;
	}
	$$payload.out += `<!--]--></div></div>`;
	if ($$store_subs) unsubscribe_stores($$store_subs);
	pop();
}
export { _page as default };
