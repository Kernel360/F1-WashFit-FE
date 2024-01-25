/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`,
  //     },
  //   ];
  // },
  webpack: (config, context) => {
    if (context?.isServer) {
      if (Array.isArray(config.resolve.alias)) {
        config.resolve.alias.push({ name: "msw/browser", alias: false })
      } else {
        config.resolve.alias["msw/browser"] = false
      }
    } else {
      if (Array.isArray(config.resolve.alias)) {
        config.resolve.alias.push({ name: "msw/node", alias: false })
      } else {
        config.resolve.alias["msw/node"] = false
      }
    }
    return config
  },
}