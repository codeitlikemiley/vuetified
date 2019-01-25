let mix = require("laravel-mix");

/* Allow Us To Compile Stylus in app.js */
mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.styl$/,
        loader: ["style-loader", "css-loader", "stylus-loader"]
      }
    ]
  },
  resolve: {
    /* Path Shortcuts */
    alias: {
      /* root */
      "~": path.resolve(__dirname, "resources/js"),
      Components: path.resolve(__dirname, "resources/js/components"),
      Routes: path.resolve(__dirname, "resources/js/routes"),
      Pages: path.resolve(__dirname, "resources/js/pages"),
      /* vuex modules */
      Modules: path.resolve(__dirname, "resources/js/modules"),
      Layouts: path.resolve(__dirname, "resources/js/layouts"),
      Partials: path.resolve(__dirname, "resources/js/partials"),
      Services: path.resolve(__dirname, "resources/js/services"),
      Api: path.resolve(__dirname, "resources/js/api"),
      Mixins: path.resolve(__dirname, "resources/js/mixins"),
      /* Jquery Plugins */
      Plugins: path.resolve(__dirname, "resources/js/plugins")
    }
  }
});
mix.options({
  extractVueStyles: false,
  processCssUrls: true,
  purifyCss: false,
  uglify: {
    uglifyOptions: {
      // fixes error on sweetalert2
      compress: {
        unused: false
      }
    }
  },
  postCss: []
});
mix.js("resources/js/app.js", "public/js");
mix.sass("resources/sass/app.scss", "public/css");
mix.sourceMaps();

if (mix.inProduction()) {
  /* extract all vendor */
  //! This Will Cause Error if You Are running 'npm run test'
  //! Only Use This For Production
  mix.extract(["axios", "vue", "vuetify"]);
  mix.version();
  mix.disableNotifications();
}
