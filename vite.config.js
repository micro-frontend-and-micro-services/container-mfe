import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const localUrl = (port) => `http://localhost:${port}/assets/remoteEntry.js`;

const prod = false;

const local = {
  layoutMfe: localUrl(5001),
  authMfe: localUrl(5002),
  dashboardMfe: localUrl(5003),
  formbuilderMfe: localUrl(5004),
  userMfe: localUrl(5005),
};

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container",
      remotes: prod ? production : local,
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});

const production = {
  layoutMfe: "https://layout-mfe.vercel.app/assets/remoteEntry.js",
  authMfe: "https://dashboard-mfe-neon.vercel.app/assets/remoteEntry.js",
  dashboardMfe: "https://dashboard-mfe-neon.vercel.app/assets/remoteEntry.js",
  formbuilderMfe: "https://formbuilder-mfe.vercel.app/assets/remoteEntry.js",
};
