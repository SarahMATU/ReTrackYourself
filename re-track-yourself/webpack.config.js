module.exports = {
    target: "node",
    resolve: {
        fallback : {
            "path": require.resolve("path-browserify"),
            "fs": false
        }
    }
};
