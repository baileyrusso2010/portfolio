const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        // proxy: "http://10.8.62.127",
    },

    pluginOptions: {
        vuetify: {
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
        },
    },
    chainWebpack: (config) => {
        config.module.rule("markdown").test(/\.md$/).use("raw-loader").loader("raw-loader").end()
    },
})
