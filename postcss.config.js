module.exports = {
  plugins: [
    require("rucksack-css")({
      responsiveType: true,
      shorthandPosition: false,
      quantityQueries: false,
      alias: false,
      inputPseudo: false,
      clearFix: false,
      fontPath: false,
      hexRGBA: false,
      easings: false
    }),
    require("autoprefixer")(),
    require("cssnano")({
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  ]
};
