/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['a.ourhtmldemo.com', 'architect.paulmbatia.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'a.ourhtmldemo.com',
                port: '',
                pathname: '/decorators/wp-content/uploads/**'
            },
            {
                protocol: 'https',
                hostname: 'architect.paulmbatia.com',
                port: '',
                pathname: '/wp-content/uploads/**'
            }
        ]
        
    }
}

module.exports = nextConfig

