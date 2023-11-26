/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
    },
    css: {
        preprocessorOptions: {
            scss: {
                // additionalData: `@import "./src/assets/styles/global.scss";`,
                additionalData: `@import "${resolve(
                    __dirname,
                    "src/assets/styles/global.scss"
                )}";`,
            },
        },
    },
});
