const webpack = require('webpack');

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      plugins: [
        new webpack.IgnorePlugin({
          resourceRegExp: /canvas|jsdom/,
          contextRegExp: /konva/,
        }),
      ],
    });
  };