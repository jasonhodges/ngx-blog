const _ = require("lodash");
const { RawSource } = require("webpack-sources");
const POSTS_DIR = "./src/assets/_posts/";

// https://survivejs.com/webpack/extending/plugins/
// function LoopMarkdownPlugin(options) {
//   this.options = _.extend(
//     {
//       template: POSTS_DIR + "template.html",
//       cache: true,
//       compile: true,
//       inject: true,
//       hash: false,
//       minify: false,
//       showErrors: true
//     },
//     options
//   );
// }

class LoopMarkdownPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {

    const { name } = this.options;

    compiler.plugin('emit', (compilation, callback) => {
      console.log("Loop Markdown Plugin!", this.options);
      compilation.assets[name] = new RawSource('some raw source');
      callback();
    });
  }
}

module.exports = LoopMarkdownPlugin;