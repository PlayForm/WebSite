const visualization =
	document.querySelector<HTMLVideoElement>("#visualization");

if (visualization) {
	visualization.srcObject = await navigator.mediaDevices.getUserMedia({ video: true });
}

export { };
