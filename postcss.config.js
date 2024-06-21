// Converts px to rem in dev mode also
// module.exports = {
//   plugins: {
//     "postcss-pxtorem": {
//       rootValue: 16,
//       propList: ["*"],
//     },
//   },
// };

const purgecss = require("@fullhuman/postcss-purgecss");

// Converst px to rem in production mode only
module.exports = {
  plugins: [
    ...(process.env.NODE_ENV === "production"
      ? [
          require("postcss-pxtorem")({
            rootValue: 16,
            propList: ["*"],
          }),
        ]
      : []),
    // purgecss({
    //   content: ["./src/**/*.html"],
    //   defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    // }),
  ],
};
