module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      modules: true
    }
  },
  env: {
    browser: true,
    node: true
  },
  extends: ["airbnb-base", "prettier"],
  globals: {
    __static: true
  },
  plugins: ["import"],
  rules: {
    camelcase: 2,
    "global-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "no-bitwise": 0,
    "no-console": 1,
    "no-shadow": 0,
    "no-underscore-dangle": 0,
    "no-unused-vars": 1,
    "import/extensions": 0,
    "import/newline-after-import": 0,
    "no-continue": 0,
    "no-multi-assign": 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
  }
};
