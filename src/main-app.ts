import './style.scss';

document.body.innerHTML = '<p>Hello World!</p>';

// client side of live reloading when changes are made
const url = (location.host || 'localhost').split(':')[0];
document.write(`<script src="http://${url}:35729/livereload.js?snipver=1"></script>`);
