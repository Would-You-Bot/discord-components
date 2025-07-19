import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
	output: "standalone",
	outputFileTracingIncludes: {
		registry: ["./registry/**/*"]
	}
};

export default withMDX(nextConfig);
