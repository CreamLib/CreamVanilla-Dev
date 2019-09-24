module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addCollection('categories', collection => {
    return collection.getFilteredByGlob('components/*/*.md');
  });

  eleventyConfig.addCollection('components', collection => {
    return collection.getFilteredByGlob('components/*/*/*.md');
  });

  eleventyConfig.addJavaScriptFunction("searchCatMenu", function (a, b) {
    return "ok boy"
  });

  eleventyConfig.addFilter("slice", require("./filters/slice.js"));
  eleventyConfig.addFilter("lookup", require("./filters/lookup.js"));
};