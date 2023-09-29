const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
} = require('customize-cra');

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = override(
  // handle antd
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: false,
  }),

  // less-loader
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
    /* 
    // lessOptions: {
    //   javascriptEnabled: true,
    //   modifyVars: { '@primary-color': '#1DA57A' },
    // },
    */
  }),

  // alias
  addWebpackAlias({
    '@': resolve('src'),
  })
);
