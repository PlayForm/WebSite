function debounce(_Function, Delay) {
	let Timer;

	return function (...Argument) {
		if (Timer) {
			clearTimeout(Timer);
		}
		Timer = setTimeout(() => {
			_Function.apply(this, Argument);
			Timer = null;
		}, Delay);
	};
}

document.querySelector<HTMLInputElement>("#mce-EMAIL")?.addEventListener(
	"input",
	debounce((Event) => {
		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Event.target.value)
			? document
					.querySelector<HTMLFormElement>(
						'[name="mc-embedded-subscribe-form"]',
					)
					?.submit()
			: null;
	}, 5000),
);
