import * as express from 'express';
import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as config from '../webpack.config.js';

const server = express();
const port = 3000;

// serve webpack files (stored in memory) using express
server.use(webpackDevMiddleware(webpack(config), {
	publicPath: config[0].output.publicPath
}));

// add a public directory for static files
const assetsPath = path.resolve(__dirname, '..', 'public');
server.use(express.static(assetsPath));

// listen for users connecting
server.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}!\n`);
});

// server side of live reloading when changes are made
import * as livereload from 'livereload';
const livereloadServer = livereload.createServer({
	extraExts: [ 'scss', 'ts', 'tsx' ]
});
livereloadServer.watch(__dirname);
