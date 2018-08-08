const path = require("path");
const resources = [
  '_bootstrap.sass'
]

module.exports = resources.map(file => path.resolve(__dirname, file))
