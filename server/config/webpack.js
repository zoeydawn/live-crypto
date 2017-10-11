const webpack = require('webpack');
const webpackConfig = require('../../webpack.config.js');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackMiddleware = require('webpack-dev-middleware');
const compiler = webpack(webpackConfig);

module.exports = function(app) {
  app.use(webpackMiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }));

  app.use(webpackHotMiddleware(compiler));
};
