/*
MIT License

Copyright (c) 2023 shadcn

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ComponentPreviewTabs({
	className,
	align = "center",
	hideCode = false,
	component,
	source,
	...props
}: React.ComponentProps<"div"> & {
	align?: "center" | "start" | "end";
	hideCode?: boolean;
	component: React.ReactNode;
	source: React.ReactNode;
}) {
	const [tab, setTab] = React.useState("preview");

	return (
		<div
			className={cn("group relative mt-4 mb-12 flex flex-col gap-2", className)}
			{...props}
		>
			<Tabs
				className="relative mr-auto w-full"
				value={tab}
				onValueChange={setTab}
			>
				<div className="flex items-center justify-between">
					{!hideCode && (
						<TabsList className="justify-start gap-4 rounded-none bg-transparent px-2 md:px-0">
							<TabsTrigger
								value="preview"
								className="text-muted-foreground data-[state=active]:text-foreground px-0 text-base data-[state=active]:shadow-none dark:data-[state=active]:border-transparent dark:data-[state=active]:bg-transparent"
							>
								Preview
							</TabsTrigger>
							<TabsTrigger
								value="code"
								className="text-muted-foreground data-[state=active]:text-foreground px-0 text-base data-[state=active]:shadow-none dark:data-[state=active]:border-transparent dark:data-[state=active]:bg-transparent"
							>
								Code
							</TabsTrigger>
						</TabsList>
					)}
				</div>
			</Tabs>
			<div
				data-tab={tab}
				className="data-[tab=code]:border-code relative rounded-lg border md:-mx-1"
			>
				<div
					data-slot="preview"
					data-active={tab === "preview"}
					className="invisible data-[active=true]:visible"
				>
					<div
						data-align={align}
						className={cn(
							"preview flex h-[450px] w-full justify-center p-10 data-[align=center]:items-center data-[align=end]:items-end data-[align=start]:items-start"
						)}
					>
						{component}
					</div>
				</div>
				<div
					data-slot="code"
					data-active={tab === "code"}
					className="absolute inset-0 hidden overflow-hidden data-[active=true]:block **:[figure]:!m-0 **:[pre]:h-[450px]"
				>
					{source}
				</div>
			</div>
		</div>
	);
}
