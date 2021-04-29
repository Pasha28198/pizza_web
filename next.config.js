const withImages = require('next-images');
// const withPlugins = require('next-compose-plugins');



// module.exports = {
//     webpack(config) {
//       config.module.rules.push({
//         test: /\.svg$/,
//         use: ["@svgr/webpack"]
//       });
  
//       return config;
//     }
//   };

//   module.exports = withPlugins([
//     [withImages],
//   ], nextJsConfig)

module.exports = withImages();