const d = "modulepreload",
	f = function (o) {
		return "/" + o;
	},
	c = {},
	h = function (l, s, y) {
		let a = Promise.resolve();
		if (s && s.length > 0) {
			document.getElementsByTagName("link");
			const r = document.querySelector("meta[property=csp-nonce]"),
				n = r?.nonce || r?.getAttribute("nonce");
			a = Promise.all(
				s.map((e) => {
					if (((e = f(e)), e in c)) return;
					c[e] = !0;
					const i = e.endsWith(".css"),
						u = i ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${e}"]${u}`)) return;
					const t = document.createElement("link");
					if (
						((t.rel = i ? "stylesheet" : d),
						i || (t.as = "script"),
						(t.crossOrigin = ""),
						(t.href = e),
						n && t.setAttribute("nonce", n),
						document.head.appendChild(t),
						i)
					)
						return new Promise((p, m) => {
							t.addEventListener("load", p),
								t.addEventListener("error", () =>
									m(
										new Error(
											`Unable to preload CSS for ${e}`,
										),
									),
								);
						});
				}),
			);
		}
		return a
			.then(() => l())
			.catch((r) => {
				const n = new Event("vite:preloadError", { cancelable: !0 });
				if (
					((n.payload = r),
					window.dispatchEvent(n),
					!n.defaultPrevented)
				)
					throw r;
			});
	};
(
	await h(async () => {
		const { initializeApp: o } = await import("./index.esm.C4IwMFMF.js");
		return { initializeApp: o };
	}, [])
).initializeApp({
	apiKey: "AIzaSyAkevZLi2u7BNRBxvnwYTTgRbpbQYWjGL8",
	authDomain: "playform-cloud.firebaseapp.com",
	projectId: "playform-cloud",
	storageBucket: "playform-cloud.appspot.com",
	messagingSenderId: "541150662775",
	appId: "1:541150662775:web:574599325594e05ae7f672",
	measurementId: "G-RFLGQF2GPJ",
});
//# sourceMappingURL=Base.astro_astro_type_script_index_0_lang.nTjWXGPD.js.map
