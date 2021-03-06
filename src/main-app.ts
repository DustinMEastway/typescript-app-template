import { app } from 'app/app';
import './style.scss';

document.body.appendChild(app());

// client side of live reloading when changes are made
const url = (location.host || 'localhost').split(':')[0];
document.write(`<script src="http://${url}:35729/livereload.js?snipver=1"></script>`);
