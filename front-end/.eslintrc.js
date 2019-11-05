module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    rules: {
      "no-console": 0,
    },
    parserOptions: {
      "parser": "babel-eslint"
    }
}