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

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function CodeCollapsibleWrapper({
	className,
	children,
	...props
}: React.ComponentProps<typeof Collapsible>) {
	const [isOpened, setIsOpened] = React.useState(false);

	return (
		<Collapsible
			open={isOpened}
			onOpenChange={setIsOpened}
			className={cn("group/collapsible relative md:-mx-1", className)}
			{...props}
		>
			<CollapsibleTrigger asChild>
				<div className="absolute top-1.5 right-9 z-10 flex items-center">
					<Button
						variant="ghost"
						size="sm"
						className="text-muted-foreground h-7 rounded-md px-2"
					>
						{isOpened ? "Collapse" : "Expand"}
					</Button>
					<Separator
						orientation="vertical"
						className="mx-1.5 !h-4"
					/>
				</div>
			</CollapsibleTrigger>
			<CollapsibleContent
				forceMount
				className="relative mt-6 overflow-hidden data-[state=closed]:max-h-64 [&>figure]:mt-0 [&>figure]:md:!mx-0"
			>
				{children}
			</CollapsibleContent>
			<CollapsibleTrigger className="from-code/70 to-code text-muted-foreground absolute inset-x-0 -bottom-2 flex h-20 items-center justify-center rounded-b-lg bg-gradient-to-b text-sm group-data-[state=open]/collapsible:hidden">
				{isOpened ? "Collapse" : "Expand"}
			</CollapsibleTrigger>
		</Collapsible>
	);
}
