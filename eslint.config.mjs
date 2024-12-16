import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/*.json",
        "**/*.css",
        "**/*.md",
        "**/*.spec.js",
        "**/*.spec.jsx",
        "**/webpack.*.js",
        "**/*.svg",
        "**/esm",
        "**/cjs",
        "**/*.d.ts",
        "**/*.snap",
        "**/*.mjs"
    ],
}, ...compat.extends("@argodevops/eslint-config/node")];