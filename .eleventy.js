module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/assets");
  return {
    dir: {
      input: "src",
      output: "public",
    },
    serverOptions: {
      host: "0.0.0.0",
      port: 8000, 
    },
  };
};
