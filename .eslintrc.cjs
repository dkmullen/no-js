module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
  },
  extends: ["eslint:recommended"],
  plugins: ["html"],
  overrides: [
    {
      files: ["*.html"],
      parserOptions: {
        sourceType: "module",
      },
    },
  ],
  rules: {
    // real problems
    "no-undef": "error",
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "no-redeclare": "error",
    "no-unreachable": "error",

    // sanity, not pedantry
    "no-console": "off",

    // style (since you said semis)
    semi: ["error", "always"],
  },
};
