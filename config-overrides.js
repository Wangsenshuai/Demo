const {
  override,
  fixBabelImports,
  addDecoratorsLegacy,
} = require("customize-cra");
// const { injectBabelPlugin } = require("react-app-rewired");

// module.exports = function override(config, env) {
//   // do stuff with the webpack config...
//   //antd配置
//   config = injectBabelPlugin(
//     ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }],
//     config
//   );

//   //配置装饰器
//   config = injectBabelPlugin(
//     ["@babel/plugin-proposal-decorators", { legacy: true }],
//     config
//   );

//   return config;
// };

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  }),
  addDecoratorsLegacy()
);
