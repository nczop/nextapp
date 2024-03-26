const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "tailwindui.com",
			},
			{
				protocol: "https",
				hostname: "naszsklep-api.vercel.app",
			},
		],
	},
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
};

module.exports = nextConfig;
module.exports = withMDX(nextConfig);
