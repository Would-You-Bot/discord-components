import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "standalone",
	outputFileTracingIncludes: {
		registry: ["./registry/**/*"]
	}
};

export default nextConfig;
