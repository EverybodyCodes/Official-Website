const tailwindcss = require('tailwindcss')
module.exports = {
    plugin: [
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer')
    ]
}