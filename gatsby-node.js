// const webpack = require('webpack');

// exports.onCreateWebpackConfig = ({ stage,
//   rules,
//   loaders,
//   plugins,
//   actions, }) => {
//     actions.setWebpackConfig({
//       plugins: [
//         new webpack.IgnorePlugin({
//           resourceRegExp: /canvas|jsdom/,
//           contextRegExp: /konva/,
//         }),
//       ],
//       externals: ['canvas']
//     });
//   };