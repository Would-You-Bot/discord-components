import { readFileSync } from "node:fs";
import { notFound } from "next/navigation";
import { generateOGImage } from "@/app/og/[...slug]/og";
import { source } from "@/lib/source";

const font = readFileSync("./app/og/[...slug]/Inter-Regular.ttf");
const fontBold = readFileSync("./app/og/[...slug]/Inter-Bold.ttf");

export async function GET(
	_req: Request,
	{ params }: { params: Promise<{ slug: string[] }> }
) {
	const { slug } = await params;
	const page = source.getPage(slug.slice(0, -1));
	if (!page) {
		notFound();
	}

	return generateOGImage({
		primaryTextColor: "rgb(240,240,240)",
		title: page.data.title,
		description: page.data.description,
		fonts: [
			{
				name: "Inter",
				data: font,
				weight: 400
			},
			{
				name: "Inter",
				data: fontBold,
				weight: 600
			}
		]
	});
}

export function generateStaticParams(): {
	slug: string[];
}[] {
	return source.generateParams().map((page) => ({
		...page,
		slug: [...page.slug, "image.png"]
	}));
}
