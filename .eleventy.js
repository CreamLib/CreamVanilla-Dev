module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addCollection('categories', collection => {
    return collection.getFilteredByGlob('components/*/*.md');
  });

  eleventyConfig.addCollection('components', collection => {
    return collection.getFilteredByGlob('components/*/*/*.md');
  });

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    pathPrefix: "/creamJS/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};