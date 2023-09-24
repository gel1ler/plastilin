/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // assetPrefix: 'https://plastilin-deti.ru/',
    trailingSlash: true,
    images: {
        unoptimized: true,
    }
}



module.exports = nextConfig
