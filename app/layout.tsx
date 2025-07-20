import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"]
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
});

export const viewport: Viewport = {
	themeColor: "#059af6",
	maximumScale: 5,
	minimumScale: 1,
	initialScale: 1
};

export const metadata: Metadata = {
	metadataBase: new URL("https://discord-components.com"),
	title: "Discord Components",
	description:
		"A collection of discord components for integrating discord UIs into your project.",
	robots: "index, follow",
	publisher: "Would You",
	openGraph: {
		title: "Discord Components",
		description:
			"A collection of discord components for integrating discord UIs into your project.",
		type: "website",
		url: "https://discord-components.com",
		locale: "en_US"
	},
	twitter: {
		title: "Discord Components",
		description:
			"A collection of discord components for integrating discord UIs into your project."
	},
	pinterest: { richPin: true }
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html
			className="dark"
			lang="en"
			suppressHydrationWarning
		>
			<script
				async
				crossOrigin="anonymous"
				data-client-id="L0XUtcivbZecupTbFpPVn"
				data-enable-batching="true"
				data-track-errors="true"
				data-track-hash-changes="true"
				data-track-web-vitals="true"
				src="https://app.databuddy.cc/databuddy.js"
			/>
			<body
				className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
			>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
