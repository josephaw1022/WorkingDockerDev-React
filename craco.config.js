const CracoAlias = require("craco-alias");
const tailwind = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  style: {
    postcssOptions: {
      plugins: [tailwind, autoprefixer]
    }
  },

  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: ".", 
        tsConfigPath: "./tsconfig.path.json",
      }
    }
  ]
};