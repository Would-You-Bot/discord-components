import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type React from "react";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"]
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "Discord Components",
	description:
		"A collection of discord components for integrating discord UIs into your project."
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className="dark"
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
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
