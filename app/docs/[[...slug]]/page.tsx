import { getGithubLastEdit, getPageTreePeers } from "fumadocs-core/server";
import { Card, Cards } from "fumadocs-ui/components/card";
import { createRelativeLink } from "fumadocs-ui/mdx";
import {
	DocsBody,
	DocsDescription,
	DocsPage,
	DocsTitle
} from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";

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
			full={page.data.full}
			lastUpdate={time ? new Date(time) : undefined}
			tableOfContent={{
				style: "clerk"
			}}
			toc={page.data.toc}
		>
			<DocsTitle>{page.data.title}</DocsTitle>
			<DocsDescription>{page.data.description}</DocsDescription>
			<DocsBody>
				<MDXContent
					components={getMDXComponents({
						// this allows you to link to other pages with relative file paths
						a: createRelativeLink(source, page),
						// biome-ignore lint/nursery/noNestedComponentDefinitions: needed for docs to work
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
					href={peer.url}
					key={peer.url}
					title={peer.name}
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
