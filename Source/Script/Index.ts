function debounce(_Function, Delay) {
	let Timer;

	return function (...Argumnents) {
		if (Timer) {
			clearTimeout(Timer);
		}
		Timer = setTimeout(() => {
			_Function.apply(this, Argumnents);
			Timer = null;
		}, Delay);
	};
}

document
  .querySelector<HTMLInputElement>("#mce-EMAIL")
  ?.addEventListener(
    "input",
    debounce((Event) => {
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Event.target.value)
        ? document.querySelector<HTMLFormElement>('[name="mc-embedded-subscribe-form"]')?.submit()
        : null;
    }, 5000)
  );
