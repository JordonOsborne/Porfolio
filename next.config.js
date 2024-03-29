/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'firebasestorage.googleapis.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'media.licdn.com',
				pathname: '/**',
			},
		],
	},
}

module.exports = nextConfig
