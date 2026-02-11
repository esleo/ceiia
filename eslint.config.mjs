import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    files: ["cypress/**/*.js"],
    languageOptions: {
      globals: {
        cy: "readonly",
        Cypress: "readonly",
        describe: "readonly",
        it: "readonly",
        before: "readonly",
        beforeEach: "readonly",
        after: "readonly",
        afterEach: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error"
    }
  },

  {
    ignores: [
      "node_modules/**",
      "cypress/videos/**",
      "cypress/screenshots/**"
    ]
  }
];
