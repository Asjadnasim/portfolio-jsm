/** @type {import('next').NextConfig} */
const nextConfig = {
	// Customize webpack configuration
	webpack: (config, { isServer }) => {
		// Modify webpack config
		return config;
	},

	// Define custom routes
	exportPathMap: async function () {
		return {
			'/': { page: '/' },
		};
	},
};

export default nextConfig;
