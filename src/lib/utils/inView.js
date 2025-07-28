// src/lib/utils/inView.js
export function inView(node, callback) {
	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				callback();
				observer.unobserve(node); // optional: nur einmal auslösen
			}
		},
		{ threshold: 0.1 }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
