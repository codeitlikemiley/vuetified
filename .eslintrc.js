module.exports = {
  plugins: ["vue"], // enable vue plugin
  extends: ["plugin:vue/recommended", "prettier"], // activate vue related rules
  parserOptions: {
    "parser": "babel-eslint",
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "globalReturn": false,
      "impliedStrict": false,
      "jsx": false,
      "experimentalObjectRestSpread": false,
      "allowImportExportEverywhere": false
    }
  }
};