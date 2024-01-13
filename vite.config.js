import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      federation({
        name: 'container',
        remotes: {
          layoutMfe: "http://localhost:5001/assets/remoteEntry.js",
          authMfe: "http://localhost:5002/assets/remoteEntry.js",
          formbuilderMfe: "http://localhost:5003/assets/remoteEntry.js",
          // formbuilderMfe: "https://ecom-layout-mfe.vercel.app/assets/remoteEntry.js",
          // authMfe: "https://ecom-auth-mfe.vercel.app/assets/remoteEntry.js",
        },
        shared: ['react','react-dom']
      })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
