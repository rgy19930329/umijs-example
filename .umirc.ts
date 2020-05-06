import { defineConfig } from 'umi';

import routes from './src/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'anice-ui',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
});
