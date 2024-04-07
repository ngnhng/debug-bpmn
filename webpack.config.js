const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        bundle: ["./src/app.js"],
    },
    output: {
        path: __dirname + "/public",
        filename: "app.js",
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.bpmn$/,
                use: "raw-loader",
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{ from: "src/index.html", to: "." }],
        }),
    ],
    mode: "development",
    devtool: "source-map",
};
