import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"]
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
});

export const viewport: Viewport = {
	themeColor: "#b52ba5",
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
			lang="en"
			className="dark"
			suppressHydrationWarning
		>
			<script
				src="https://app.databuddy.cc/databuddy.js"
				data-client-id="L0XUtcivbZecupTbFpPVn"
				data-track-hash-changes="true"
				data-track-web-vitals="true"
				data-track-errors="true"
				data-enable-batching="true"
				crossOrigin="anonymous"
				async
			/>
			<body
				className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
			>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
