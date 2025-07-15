import { w as writable } from './index2.js';
const initialState = {
	user: null,
	loading: false,
	error: null
};
const authStore = writable(initialState);
console.log('Auth store initialized');
export { authStore as a };
