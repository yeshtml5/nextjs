// next.config.js

module.exports = {
  crossOrigin: "anonymous"
};



const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
module.exports = withTypescript(withSass())