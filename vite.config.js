import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const prod=true

const local = {
  layoutMfe: "http://localhost:5001/assets/remoteEntry.js",
  authMfe: "http://localhost:5002/assets/remoteEntry.js",
  dashboardMfe: "http://localhost:5003/assets/remoteEntry.js",
  formbuilderMfe: "http://localhost:5004/assets/remoteEntry.js",
};
const production = {
  layoutMfe: "https://github.com/micro-frontend-and-micro-services/layout-mfe/assets/remoteEntry.js",
  authMfe: "https://github.com/micro-frontend-and-micro-services/auth-mfe/assets/remoteEntry.js",
  dashboardMfe: "https://github.com/micro-frontend-and-micro-services/dashboard-mfe/assets/remoteEntry.js",
  formbuilderMfe: "https://github.com/micro-frontend-and-micro-services/formbuilder-mfe/assets/remoteEntry.js",
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
