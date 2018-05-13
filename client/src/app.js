
const writeEvent = (text) => {

	// <ul> element
	const parent = document.querySelector("#events");

	// <li> element
	const el = document.createElement('li');
	el.innerHTML = text;

	parent.appendChild(el);
};

const onFormSubmitted = (e) => {
	// this method tells the user agent that if the event does not get
	// explicitly handled, its default action should not be taken as it
	// normally would be. The event continues to propogate as usual, unless
	// one of its event listeners calls stopPropagation();
	 e.preventDefault();

	 const input = document.querySelector("#chat");
	 const text = input.value;
	 input.value = '';

	 sock.emit('message', text);
};

writeEvent("Welcome to RPS");

const sock = io();
sock.on('message', writeEvent);

document
	.querySelector("#chatForm")
	.addEventListener('submit', onFormSubmitted);