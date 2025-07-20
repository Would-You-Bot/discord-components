import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
	output: "standalone",
	outputFileTracingIncludes: {
		registry: ["./registry/**/*"]
	}
};

export default withMDX(nextConfig);
