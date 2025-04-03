// eslint.config.ts
import type { Linter } from "eslint";

const config: Linter.FlatConfig[] = [
  {
    files: ["**/*.{js,ts,tsx}"],
    ignores: ["**/*.config.{js,ts}"],
    plugins: {
      react: require("eslint-plugin-react"),
      "react-hooks": require("eslint-plugin-react-hooks"),
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
    },
    languageOptions: {
      parser: require("@typescript-eslint/parser"),
      parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];

export default config;
