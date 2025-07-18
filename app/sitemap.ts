import type { MetadataRoute } from "next";
import { source } from "@/lib/source";

export const revalidate = false;

export const baseUrl =
	process.env.NODE_ENV === "development"
		? new URL("http://localhost:3000")
		: new URL("https://discord-components.com");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const url = (path: string): string => new URL(path, baseUrl).toString();

	return [
		{
			url: url("/"),
			changeFrequency: "monthly",
			priority: 1
		},

		{
			url: url("/docs"),
			changeFrequency: "monthly",
			priority: 0.8
		},
		...(await Promise.all(
			source.getPages().map((page) => {
				const lastModified = page.data.lastModified;

				return {
					url: url(page.url),
					lastModified: lastModified ? new Date(lastModified) : undefined,
					changeFrequency: "weekly",
					priority: 0.5
				} as MetadataRoute.Sitemap[number];
			})
		))
	];
}
