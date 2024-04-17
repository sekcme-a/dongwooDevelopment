// /** @type {import('next').NextConfig} */
// const path = require('path')
// const nextConfig = {
//   reactStrictMode: true,
//   trailingSlash: true,
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   optimizeFonts: false,
//   eslint: {
//     ignoreDuringBuilds: true,
//   }
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = { 
  images:{
  domains:[
    "firebasestorage.googleapis.com"
  ]
}}

module.exports = nextConfig
