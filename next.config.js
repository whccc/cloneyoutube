const path = require("path");
const loaderUtils = require("loader-utils");

const hashOnlyIdent = (context, _, exportName) => `${exportName}`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },

  webpack(config) {
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === "object")
      .oneOf.filter((rule) => Array.isArray(rule.use));

    rules.forEach((rule) => {
      rule.use.forEach((moduleLoader) => {
        if (
          moduleLoader.loader?.includes("css-loader") &&
          !moduleLoader.loader?.includes("postcss-loader")
        )
          moduleLoader.options.modules.getLocalIdent = hashOnlyIdent;
      });
    });

    return config;
  },
};

module.exports = nextConfig;
