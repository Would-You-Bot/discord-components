import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"]
});

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
	themeSwitch: {
		enabled: false, // TODO: Add better theme colors
		mode: "light-dark"
	},
	nav: {
		title: (
			<>
				<div className={`${inter.className} font-bold text-2xl`}>
					Discord Components
				</div>
			</>
		)
	},
	// see https://fumadocs.dev/docs/ui/navigation/links
	links: [],
	githubUrl: "https://github.com/Would-You-Bot/discord-components"
};
