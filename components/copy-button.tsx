/*
MIT License

Copyright (c) 2023 shadcn

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

"use client";

import * as React from "react";
import { CheckIcon, ClipboardIcon } from "lucide-react";

import { Event, trackEvent } from "@/lib/events";
import { cn } from "@/lib/utils";

import {
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export function copyToClipboardWithMeta(value: string, event?: Event) {
	navigator.clipboard.writeText(value);
	if (event) {
		// TODO: Use databuddy event tracking
		//trackEvent(event)
	}
}

export function CopyButton({
	value,
	className,
	variant = "ghost",
	event,
	...props
}: React.ComponentProps<typeof Button> & {
	value: string;
	src?: string;
	event?: Event["name"];
}) {
	const [hasCopied, setHasCopied] = React.useState(false);

	React.useEffect(() => {
		setTimeout(() => {
			setHasCopied(false);
		}, 2000);
	}, []);

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button
					data-slot="copy-button"
					size="icon"
					variant={variant}
					className={cn(
						"bg-code absolute top-3 right-2 z-10 size-7 hover:opacity-100 focus-visible:opacity-100",
						className
					)}
					onClick={() => {
						copyToClipboardWithMeta(
							value,
							event
								? {
										name: event,
										properties: {
											code: value
										}
									}
								: undefined
						);
						setHasCopied(true);
					}}
					{...props}
				>
					<span className="sr-only">Copy</span>
					{hasCopied ? <CheckIcon /> : <ClipboardIcon />}
				</Button>
			</TooltipTrigger>
			<TooltipContent>
				{hasCopied ? "Copied" : "Copy to Clipboard"}
			</TooltipContent>
		</Tooltip>
	);
}
