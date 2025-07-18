/*
MIT License

Copyright (c) 2023 shadcn

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import Image from "next/image";

import { ComponentPreviewTabs } from "@/components/component-preview-tabs";
import { ComponentSource } from "@/components/component-source";
import { Index } from "@/registry/__index__";

export function ComponentPreview({
	name,
	type,
	className,
	align = "center",
	hideCode = false,
	...props
}: React.ComponentProps<"div"> & {
	name: string;
	align?: "center" | "start" | "end";
	description?: string;
	hideCode?: boolean;
	type?: "block" | "component" | "example";
}) {
	const Component = Index[name]?.component;

	if (!Component) {
		return (
			<p className="text-muted-foreground text-sm">
				Component{" "}
				<code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
					{name}
				</code>{" "}
				not found in registry.
			</p>
		);
	}

	if (type === "block") {
		return (
			<div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-md border md:-mx-1">
				<Image
					src={`/r/styles/new-york-v4/${name}-light.png`}
					alt={name}
					width={1440}
					height={900}
					className="bg-background absolute top-0 left-0 z-20 w-[970px] max-w-none sm:w-[1280px] md:hidden dark:hidden md:dark:hidden"
				/>
				<Image
					src={`/r/styles/new-york-v4/${name}-dark.png`}
					alt={name}
					width={1440}
					height={900}
					className="bg-background absolute top-0 left-0 z-20 hidden w-[970px] max-w-none sm:w-[1280px] md:hidden dark:block md:dark:hidden"
				/>
				<div className="bg-background absolute inset-0 hidden w-[1600px] md:block">
					<iframe
						src={`/view/${name}`}
						className="size-full"
					/>
				</div>
			</div>
		);
	}

	return (
		<ComponentPreviewTabs
			className={className}
			align={align}
			hideCode={hideCode}
			component={<Component />}
			source={
				<ComponentSource
					name={name}
					collapsible={false}
				/>
			}
			{...props}
		/>
	);
}
