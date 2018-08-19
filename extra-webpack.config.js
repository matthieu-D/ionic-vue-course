const { VueLoaderPlugin } = require('vue-loader');

console.log('The custom config is used');

const vueAlias = {
  extensions: [".ts", ".js", ".vue", ".json"],
  alias: {
    vue$: "vue/dist/vue.esm.js"
  }
};

const vueRule = [{
  test: /\.vue$/,
  loader: "vue-loader",
  options: {
    // Since sass-loader (weirdly) has SCSS as its default parse mode, we map the
    // "scss" and "sass" values for the lang attribute to the right configs here.
    // other preprocessors should work out of the box, no loader config like this
    // necessary.
    scss: ["vue-style-loader", "css-loader", "sass-loader"],
    sass: ["vue-style-loader", "css-loader", "sass-loader?indentedSyntax"]
  }
  // other vue-loader options go here
}];

module.exports = {
  resolve: vueAlias,
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: vueRule
  }
}