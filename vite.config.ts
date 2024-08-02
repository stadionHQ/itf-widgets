import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/init.tsx',
      name: 'ITFWidgetSDK',
      fileName: (format) => `itf-widget-sdk.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Exclude react and react-dom from the bundle
      output: {
        globals: {
          react: 'React', // Map react to the global React variable
          'react-dom': 'ReactDOM', // Map react-dom to the global ReactDOM variable
        },
      },
    },
  },
})
