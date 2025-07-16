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
			className="dark"
			lang="en"
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
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
