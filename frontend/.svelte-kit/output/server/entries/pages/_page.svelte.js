import {
	G as store_get,
	I as head,
	F as escape_html,
	J as ensure_array_like,
	K as attr,
	M as stringify,
	N as unsubscribe_stores,
	D as pop,
	A as push
} from '../../chunks/index.js';
import '../../chunks/client.js';
import { a as authStore } from '../../chunks/auth.js';
import { H as Header, b as buildApiUrl, A as API_ENDPOINTS } from '../../chunks/pageStore.js';
import {
	U as UI_TEXT,
	N as NewDesignButton,
	S as SimpleThumbnail
} from '../../chunks/NewDesignButton.js';
function _page($$payload, $$props) {
	push();
	var $$store_subs;
	let recentDesigns = [];
	let publicDesigns = [];
	let loading = false;
	async function fetchRecentDesigns() {
		if (!store_get(($$store_subs ??= {}), '$authStore', authStore).user) return;
		try {
			loading = true;
			const designsUrl = buildApiUrl(API_ENDPOINTS.DESIGNS.BASE);
			const response = await fetch(designsUrl, { credentials: 'include' });
			if (response.ok) {
				const data = await response.json();
				recentDesigns = (data.designs || []).slice(0, 3);
			}
		} catch (error) {
			console.error('Failed to fetch recent designs:', error);
		} finally {
			loading = false;
		}
	}
	if (store_get(($$store_subs ??= {}), '$authStore', authStore).user) {
		fetchRecentDesigns();
	}
	head($$payload, ($$payload2) => {
		$$payload2.title = `<title>ZINE LIFE - DIY GRAPHICS FOR THE UNDERGROUND</title>`;
		$$payload2.out += `<meta name="description" content="Create punk flyers, zines, and underground graphics. No corporate BS."/>`;
	});
	Header($$payload, {});
	$$payload.out += `<!----> <main class="bg-black min-h-screen photocopied relative" style="margin-top: 64px;">`;
	if (store_get(($$store_subs ??= {}), '$authStore', authStore).user) {
		$$payload.out += '<!--[-->';
		$$payload.out += `<section class="bg-black py-12 px-4"><div class="max-w-6xl mx-auto"><div class="mb-12"><h1 class="text-4xl md:text-6xl font-black text-white mb-4 tracking-wider transform -skew-x-6 font-punk">${escape_html(UI_TEXT.HEADINGS.WELCOME_BACK(store_get(($$store_subs ??= {}), '$authStore', authStore).user.name))}</h1> <p class="text-xl text-green-400 font-mono">Ready to create more underground graphics?</p></div> <div class="flex flex-wrap gap-4 mb-12">`;
		NewDesignButton($$payload, {
			class:
				'bg-green-400 text-black px-8 py-3 text-xl font-black tracking-wide transform -skew-x-6 hover:bg-green-300 transition-colors border-2 border-green-400 font-industrial',
			children: ($$payload2) => {
				$$payload2.out += `<!---->NEW DESIGN`;
			},
			$$slots: { default: true }
		});
		$$payload.out += `<!----> <button class="bg-transparent text-green-400 px-8 py-3 text-xl font-black tracking-wide border-2 border-green-400 hover:bg-green-400 hover:text-black transition-colors font-industrial" aria-label="View all your designs in the dashboard">VIEW ALL DESIGNS</button></div> <div class="mb-12"><h2 class="text-3xl font-black text-white mb-6 transform -skew-x-3 font-punk border-b-2 border-background-card pb-2">YOUR RECENT WORK</h2> `;
		if (loading) {
			$$payload.out += '<!--[-->';
			$$payload.out += `<div class="text-primary font-mono">Loading your designs...</div>`;
		} else if (recentDesigns.length === 0) {
			$$payload.out += '<!--[1-->';
			$$payload.out += `<div class="text-center py-12 border-2 border-background-card bg-background-panel"><div class="text-primary text-6xl mb-4">[+]</div> <h3 class="text-xl font-black text-white mb-2 font-industrial">NO DESIGNS YET</h3> <p class="text-text-muted font-mono mb-4">Time to create your first underground masterpiece</p> `;
			NewDesignButton($$payload, {
				class:
					'bg-primary text-black px-6 py-2 font-black tracking-wide transform -skew-x-6 hover:bg-primary-light transition-colors border-2 border-primary font-industrial',
				children: ($$payload2) => {
					$$payload2.out += `<!---->START NOW`;
				},
				$$slots: { default: true }
			});
			$$payload.out += `<!----></div>`;
		} else {
			$$payload.out += '<!--[!-->';
			const each_array = ensure_array_like(recentDesigns);
			$$payload.out += `<ul class="grid grid-cols-1 md:grid-cols-3 gap-6" role="list" aria-label="Recent designs"><!--[-->`;
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let design = each_array[$$index];
				$$payload.out += `<li class="border-2 border-background-card bg-background-panel p-4 hover:border-primary transition-colors photocopied"><div class="h-40 mb-4 flex items-center justify-center bg-background-card">`;
				SimpleThumbnail($$payload, {
					design,
					size: 'medium',
					className: 'bg-white'
				});
				$$payload.out += `<!----></div> <h3 class="text-lg font-black text-white mb-2 font-industrial">${escape_html(design.title)}</h3> <p class="text-text-muted font-mono text-xs mb-3">${escape_html(new Date(design.updated_at).toLocaleDateString())}</p> <button class="bg-transparent text-primary px-4 py-1 text-sm font-black border border-primary hover:bg-primary hover:text-black transition-colors font-industrial"${attr('aria-label', `Edit ${stringify(design.title)}`)}>EDIT</button></li>`;
			}
			$$payload.out += `<!--]--></ul>`;
		}
		$$payload.out += `<!--]--></div></div></section>`;
	} else {
		$$payload.out += '<!--[!-->';
		$$payload.out += `<section class="bg-black py-20 px-4"><div class="max-w-4xl mx-auto text-center"><div class="mb-8"><h1 class="text-6xl md:text-8xl font-black text-white mb-4 tracking-wider transform -skew-x-6 font-punk glitch-text" data-text="DIY GRAPHICS">DIY GRAPHICS</h1> <h2 class="text-3xl md:text-5xl font-black text-green-400 mb-6 transform skew-x-3 font-industrial">FOR THE UNDERGROUND</h2></div> <p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-mono">Make punk flyers, zines, and underground graphics.<br/> No corporate bullshit.</p> <div class="space-y-4">`;
		NewDesignButton($$payload, {
			class:
				'bg-green-400 text-black px-12 py-4 text-2xl font-black tracking-wide transform -skew-x-6 hover:bg-green-300 transition-colors border-4 border-green-400 shadow-lg hover:shadow-green-400/50 font-industrial',
			children: ($$payload2) => {
				$$payload2.out += `<!---->START CREATING`;
			},
			$$slots: { default: true }
		});
		$$payload.out += `<!----> <div class="text-gray-500 font-mono text-sm">no signup required to start</div></div></div></section> <section class="bg-black py-16 px-4 border-t-2 border-background-card"><div class="max-w-4xl mx-auto"><div class="text-center mb-12"><h2 class="text-4xl font-black text-white mb-6 transform -skew-x-3 font-punk">WHAT WE'RE ABOUT</h2></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="text-center p-6 border-2 border-background-card bg-background-panel photocopied hover:border-primary transition-colors"><div class="text-primary text-4xl mb-4 font-black">[✗]</div> <h3 class="text-xl font-black text-white mb-3 tracking-wide font-industrial">PUNK FLYERS</h3> <p class="text-text-muted font-mono text-sm">Raw, aggressive show posters that cut through the noise</p></div> <div class="text-center p-6 border-2 border-background-card bg-background-panel photocopied hover:border-primary transition-colors"><div class="text-primary text-4xl mb-4 font-black">[✗]</div> <h3 class="text-xl font-black text-white mb-3 tracking-wide font-industrial">ZINES</h3> <p class="text-text-muted font-mono text-sm">DIY publications with that photocopied underground feel</p></div> <div class="text-center p-6 border-2 border-background-card bg-background-panel photocopied hover:border-primary transition-colors"><div class="text-primary text-4xl mb-4 font-black">[✗]</div> <h3 class="text-xl font-black text-white mb-3 tracking-wide font-industrial">PROTEST ART</h3> <p class="text-text-muted font-mono text-sm">Bold graphics that actually say something</p></div></div></div></section>`;
	}
	$$payload.out += `<!--]--> `;
	if (publicDesigns.length > 0) {
		$$payload.out += '<!--[-->';
		const each_array_1 = ensure_array_like(publicDesigns);
		$$payload.out += `<section class="bg-black py-16 px-4 border-t-2 border-background-card"><div class="max-w-6xl mx-auto"><div class="text-center mb-12"><h2 class="text-4xl font-black text-white mb-6 transform -skew-x-3 font-punk">UNDERGROUND GALLERY</h2> <p class="text-text-muted font-mono">Real designs from real rebels</p></div> <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Public designs gallery"><!--[-->`;
		for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
			let design = each_array_1[$$index_1];
			$$payload.out += `<li class="border-2 border-background-card bg-background-panel hover:border-primary transition-colors photocopied"><div class="bg-background-card h-48 flex items-center justify-center">`;
			SimpleThumbnail($$payload, { design, size: 'large', className: 'bg-white' });
			$$payload.out += `<!----></div> <div class="p-4"><h3 class="text-lg font-black text-white mb-2 font-industrial">${escape_html(design.title)}</h3> <p class="text-text-muted font-mono text-xs mb-3">by underground artist • ${escape_html(new Date(design.created_at).toLocaleDateString())}</p> <button class="bg-transparent text-primary px-4 py-1 text-sm font-black border border-primary hover:bg-primary hover:text-black transition-colors font-industrial"${attr('aria-label', `Duplicate ${stringify(design.title)}`)}>DUPLICATE</button></div></li>`;
		}
		$$payload.out += `<!--]--></ul></div></section>`;
	} else {
		$$payload.out += '<!--[!-->';
	}
	$$payload.out += `<!--]--></main> <footer class="bg-background-panel border-t-2 border-primary py-8"><div class="max-w-4xl mx-auto px-4 text-center"><div class="mb-6"><h3 class="text-2xl font-black text-white tracking-wider transform -skew-x-6 mb-2 font-punk">ZINE LIFE</h3> <p class="text-text-muted font-mono text-sm">anti-corporate design tools</p></div> <div class="border-t border-border-muted pt-6"><p class="text-text-disabled font-mono text-xs">no venture capital • no tracking • just tools</p></div></div></footer>`;
	if ($$store_subs) unsubscribe_stores($$store_subs);
	pop();
}
export { _page as default };
