const postcss_import = require("postcss-import");
const postcss_nested = require("postcss-nested");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const dev = process.env.NODE_ENV === "development";

const config = {
    syntax: "postcss-scss",
    plugins: [
        postcss_import(),
        postcss_nested(),
        tailwindcss(),
        autoprefixer({
            cascade: true,
        }),
        !dev && cssnano({ preset: "advanced" }),
    ],
};

module.exports = config;
