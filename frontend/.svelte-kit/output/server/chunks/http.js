const FETCH_OPTIONS = {
	DEFAULT: {
		credentials: 'include'
	},
	WITH_JSON: {
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		}
	}
};
export { FETCH_OPTIONS as F };
