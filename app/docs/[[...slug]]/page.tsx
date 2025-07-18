import { source } from "@/lib/source";
import {
	DocsPage,
	DocsBody,
	DocsDescription,
	DocsTitle
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getMDXComponents } from "@/mdx-components";
import { getGithubLastEdit, getPageTreePeers } from "fumadocs-core/server";
import type { Metadata } from "next";
import { Card, Cards } from "fumadocs-ui/components/card";

export default async function Page(props: {
	params: Promise<{ slug?: string[] }>;
}) {
	const params = await props.params;
	const page = source.getPage(params.slug);
	if (!page) {
		notFound();
	}

	const MDXContent = page.data.body;

	const time = await getGithubLastEdit({
		owner: "Would-You-Bot",
		repo: "discord-components",
		path: `content/docs/${page.path}`
	});

	return (
		<DocsPage
			toc={page.data.toc}
			full={page.data.full}
			tableOfContent={{
				style: "clerk"
			}}
			lastUpdate={time ? new Date(time) : undefined}
		>
			<DocsTitle>{page.data.title}</DocsTitle>
			<DocsDescription>{page.data.description}</DocsDescription>
			<DocsBody>
				<MDXContent
					components={getMDXComponents({
						// this allows you to link to other pages with relative file paths
						a: createRelativeLink(source, page),
						DocsCategory: ({ url }) => {
							return <DocsCategory url={url ?? page.url} />;
						}
					})}
				/>
			</DocsBody>
		</DocsPage>
	);
}

function DocsCategory({ url }: { url: string }) {
	return (
		<Cards>
			{getPageTreePeers(source.pageTree, url).map((peer) => (
				<Card
					key={peer.url}
					title={peer.name}
					href={peer.url}
				>
					{peer.description}
				</Card>
			))}
		</Cards>
	);
}

export function generateStaticParams() {
	return source.generateParams();
}

export async function generateMetadata(props: {
	params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
	const { slug = [] } = await props.params;
	const page = source.getPage(slug);
	if (!page) {
		notFound();
	}

	const description =
		page.data.description ||
		"A collection of discord components for integrating discord UIs into your project.";

	const image = {
		url: ["/og", ...slug, "image.png"].join("/"),
		width: 1200,
		height: 630
	};

	return {
		title: `${page.data.title} | Discord Components`,
		description,
		openGraph: {
			images: [image]
		},
		twitter: {
			card: "summary_large_image",
			images: [image]
		}
	};
}
