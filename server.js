const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

require('./app_server/mongo/models/db.js');
var routesApi = require('./app_server/mongo/routes/index.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3200 : process.env.PORT;
const app = express();

if (isDeveloping) {
  //config.entry.main.push('webpack-hot-middleware/client', 'webpack/hot/only-dev-server');
  config.entry.main.push('webpack-hot-middleware/client?reload=true');
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  const compiler = webpack(config);
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'app_client',
    noInfo: false,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler, { log: console.log }));
  app.use('/api', routesApi);

  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser. isDev: %s', port, port, isDeveloping);
});
