/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },

}

module.exports = nextConfig


// loader: 'imgix',
// path: 'https:/cdn.sanity.io/images/',