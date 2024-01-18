import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const prod=false

const local = {
  layoutMfe: "http://localhost:5001/assets/remoteEntry.js",
  authMfe: "http://localhost:5002/assets/remoteEntry.js",
  dashboardMfe: "http://localhost:5003/assets/remoteEntry.js",
  formbuilderMfe: "http://localhost:5004/assets/remoteEntry.js",
};
const production = {
  layoutMfe: "https://layout-mfe.vercel.app/assets/remoteEntry.js",
  authMfe: "https://dashboard-mfe-neon.vercel.app/assets/remoteEntry.js",
  dashboardMfe: "https://dashboard-mfe-neon.vercel.app/assets/remoteEntry.js",
  formbuilderMfe: "https://formbuilder-mfe.vercel.app/assets/remoteEntry.js",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container",
      remotes: prod?production:local,
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
