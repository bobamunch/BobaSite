import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";
import { remixDevTools } from "remix-development-tools";
import { envOnlyMacros } from "vite-env-only";

export default defineConfig({
  plugins: [
    envOnlyMacros(),
    remixDevTools(),
    remix(),
    netlifyPlugin(),
    tsconfigPaths(),
  ],
});
