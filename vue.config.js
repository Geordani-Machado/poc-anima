const fs = require('fs');
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: true,
    css: {
        extract: true,
        sourceMap: false,
    },
    productionSourceMap: false,
    filenameHashing: false,
    configureWebpack: {
        output: {
            filename: "app.js",
        },
        optimization: {
            splitChunks: false,
        },
    },
});