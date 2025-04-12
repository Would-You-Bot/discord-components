import { cn } from "@/lib/utils";
import type * as React from "react";

function DiscordMessages({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="discord-messages"
			className={cn("flex flex-col gap-4 rounded-md bg-[#333] p-4", className)}
			{...props}
		/>
	);
}

export { DiscordMessages };
