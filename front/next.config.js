const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins([withBundleAnalyzer, withImages], {
  webpack(config, { webpack }) {
    return config;
  },
});
// const withBundleAnalyzer = require("@next/bundle-analyzer");
// module.exports = withBundleAnalyzer({
//   compress: true,
//   webpack(config, { webpack }) {
//     const prod = process.env.NODE_ENV === "production";
//     const plugins = [...config.plugins];
//     return {
//       ...config,
//       mode: prod ? "production" : "development",
//       devtool: prod ? "hidden-source-map" : "eval",
//       plugins,
//     };
//   },
// });

// module.exports = withImages({
//   esModule: true,
//   webpack(config, options) {
//     return config;
//   },
// });
