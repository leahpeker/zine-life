import 'clsx';
import { D as pop, A as push } from '../../chunks/index.js';
import '../../chunks/auth.js';
function _layout($$payload, $$props) {
	push();
	let { children } = $$props;
	children($$payload);
	$$payload.out += `<!---->`;
	pop();
}
export { _layout as default };
