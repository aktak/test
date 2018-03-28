const path = require('path');
const webpack = require('webpack');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// Invocation	                   Resulting environment
//
// webpack --env prod            "prod"
// webpack --env.prod            { prod: true }
// webpack --env.prod=1          { prod: 1 }
// webpack --env.prod=foo        { prod: "foo" }
// webpack --env.prod --env.min  { prod: true, min: true }
// webpack --env.prod --env min  [{ prod: true }, "min"]
// webpack --env.prod=foo --env.prod=bar {prod: [ "foo", "bar" ]} 

module.exports = (env) => {

  const isProduct = (env && env.prod);
  const usePreact = (env && env.preact);

  // plugins

  var plugins    = [new HardSourceWebpackPlugin()];
  var outputpath = path.join(__dirname, 'build');
  var resolve    = {};

  if (isProduct) {
  
    plugins.push(new BundleAnalyzerPlugin());
    plugins.push(new webpack.optimize.UglifyJsPlugin());
    plugins.push(new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }));

    //outputpath = path.join(__dirname, '../ASPX10/JS/');

  }

  if (!isProduct) {
    plugins.push(new HardSourceWebpackPlugin());
  }

  if (usePreact) {

    // nahrada

    resolve.alias = {
      "react": "preact-compat",
      "react-dom": "preact-compat"
    }
  }

  var loaders = [
    {
      test: /\.js?/,
      loader: 'babel-loader',
      include: /js/,
      query: {
        presets: ["react", "es2015", "stage-2"]
      }
    }
  ];

  var config = {
    stats: { modules: false },
    entry: { 'main': './js/Root.js' },
    output: {
      path: outputpath,
      filename: 'React.js',
      publicPath: '/'
    },
    module: {
      loaders: loaders
    },

    plugins: plugins,
    resolve: resolve

  };

  return [config];

};