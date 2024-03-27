const Debounce = (_Function: any, Delay: number) => {
	let Timer = null;

	return function (...Argument) {
		if (Timer) {
			clearTimeout(Timer);
		}

		Timer = setTimeout(() => {
			_Function.apply(this, Argument);
			Timer = null;
		}, Delay);
	};
};

const Spinner = document.querySelector("#mce-spinner");

document.querySelector<HTMLInputElement>("#mce-EMAIL")?.addEventListener(
	"input",
	Debounce(({ target }: InputEvent) => {
		Spinner?.classList.add("hidden");

		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(target?.value)
			? document
					.querySelector<HTMLFormElement>(
						'[name="mc-embedded-subscribe-form"]',
					)
					?.submit()
			: null;
	}, 5000),
);

document.querySelector<HTMLInputElement>("#mce-EMAIL")?.addEventListener(
	"input",
	Debounce(
		({ target }: InputEvent) => Spinner?.classList.remove("hidden"),
		4000,
	),
);
