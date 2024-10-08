import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  define: {
    'process.env': {},
  },
  resolve: {
    alias: {
      '*': path.resolve(__dirname, 'src/*'),
    },
  },
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
