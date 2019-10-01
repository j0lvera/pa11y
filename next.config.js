const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  env: {
    API_URL: process.env.API_URL,
    FRONTEND_URL: process.env.FRONTEND_URL,
    API_ROUTES_URL: process.env.API_ROUTES_URL,
    SECRET: process.env.SECRET
  },
  cssModules: true,
  target: "serverless",
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack"
        }
      ]
    });

    return config;
  }
});
