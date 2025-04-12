import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

const chatVariants = cva("flex flex-col gap-4 rounded-md bg-discord-background p-4", {
	variants: {
		theme: {
			light: "discord-light",
			classic: "discord-classic",
			ash: "discord-ash",
			dark: "discord-dark",
			onyx: "discord-onyx",
		},
		scale: {
			12: "text-[12px]",
			14: "text-[14px]",
			15: "text-[15px]",
			16: "text-[16px]",
			18: "text-[18px]",
			20: "text-[20px]",
			24: "text-[24px]",
		},
	},
	defaultVariants: {
		theme: "ash",
		scale: 16,
	},
});

function DiscordChat({
	theme,
	scale,
	className,
	children,
	...props
}: React.ComponentProps<"div"> & VariantProps<typeof chatVariants>) {
	return (
		<div data-slot="discord-messages" className={cn(chatVariants({ theme, className }))} {...props}>
			{children}
		</div>
	);
}

export { DiscordChat, chatVariants };

