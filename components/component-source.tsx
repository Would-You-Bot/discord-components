/*
MIT License

Copyright (c) 2023 shadcn

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import fs from "node:fs/promises";
import path from "node:path";
import * as React from "react";

import { highlightCode } from "@/lib/highlight-code";
import { getRegistryItem } from "@/lib/registry";
import { cn } from "@/lib/utils";
import { CodeCollapsibleWrapper } from "@/components/code-collapsible-wrapper";
import { CopyButton } from "@/components/copy-button";

export async function ComponentSource({
	name,
	src,
	title,
	language,
	collapsible = true,
	className
}: React.ComponentProps<"div"> & {
	name?: string;
	src?: string;
	title?: string;
	language?: string;
	collapsible?: boolean;
}) {
	if (!name && !src) {
		return null;
	}

	let code: string | undefined;

	if (name) {
		const item = await getRegistryItem(name);
		code = item?.files?.[0]?.content;
	}

	if (src) {
		const file = await fs.readFile(path.join(process.cwd(), src), "utf-8");
		code = file;
	}

	if (!code) {
		return null;
	}

	const lang = language ?? title?.split(".").pop() ?? "tsx";
	const highlightedCode = await highlightCode(code, lang);

	if (!collapsible) {
		return (
			<div className={cn("relative", className)}>
				<ComponentCode
					code={code}
					highlightedCode={highlightedCode}
					language={lang}
					title={title}
				/>
			</div>
		);
	}

	return (
		<CodeCollapsibleWrapper className={className}>
			<ComponentCode
				code={code}
				highlightedCode={highlightedCode}
				language={lang}
				title={title}
			/>
		</CodeCollapsibleWrapper>
	);
}

function ComponentCode({
	code,
	highlightedCode,
	language,
	title
}: {
	code: string;
	highlightedCode: string;
	language: string;
	title: string | undefined;
}) {
	return (
		<figure
			data-rehype-pretty-code-figure=""
			className="[&>pre]:max-h-96"
		>
			{title && (
				<figcaption
					data-rehype-pretty-code-title=""
					className="text-code-foreground [&_svg]:text-code-foreground flex items-center gap-2 [&_svg]:size-4 [&_svg]:opacity-70"
					data-language={language}
				>
					{title}
				</figcaption>
			)}
			<CopyButton value={code} />
			<div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
		</figure>
	);
}
