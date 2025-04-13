import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { AvatarImage } from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { formatDate } from "./lib/utils";

const chatVariants = cva(
	"flex flex-col rounded-md bg-discord-background py-4",
	{
		variants: {
			theme: {
				light: "discord-light",
				classic: "discord-classic",
				ash: "discord-ash",
				dark: "discord-dark",
				onyx: "discord-onyx"
			}
		},
		defaultVariants: {
			theme: "ash"
		}
	}
);

function DiscordChat({
	theme,
	className,
	children,
	...props
}: React.ComponentProps<"div"> & VariantProps<typeof chatVariants>) {
	return (
		<div
			data-slot="discord-messages"
			className={cn(chatVariants({ theme, className }))}
			{...props}
		>
			{children}
		</div>
	);
}

function DiscordMessageGroup({
	className,
	children,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="discord-message-group"
			className={cn("mt-4 flex flex-col", className)}
			{...props}
		>
			{children}
		</div>
	);
}

function DiscordMessageContent({
	className,
	children,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="discord-message-content"
			className={cn("relative px-4 pb-1 pl-14 hover:bg-black/10", className)}
			{...props}
		>
			{children}
		</div>
	);
}

function DiscordMessageAuthor({
	children,
	...props
}: React.ComponentProps<"div">) {
	return <div {...props}>{children}</div>;
}

function DiscordMessageAuthorImage({
	src,
	alt,
	fallback,
	className,
	...props
}: React.ComponentProps<typeof Avatar> & {
	src: string;
	alt: string;
	fallback: string;
}) {
	return (
		<Avatar
			data-slot="discord-message-author"
			className="absolute top-1 left-2 size-10"
			{...props}
		>
			<AvatarImage
				data-slot="discord-message-author-image"
				className={cn("rounded-full", className)}
				src={src}
				alt={alt}
			/>
			<AvatarFallback data-slot="discord-message-author-fallback">
				{fallback}
			</AvatarFallback>
		</Avatar>
	);
}

function DiscordMessageAuthorName({
	timestamp,
	hr24 = false,
	className,
	children,
	...props
}: React.ComponentProps<"p"> & { timestamp: Date; hr24?: boolean }) {
	return (
		<div className="flex flex-wrap items-center sm:flex-nowrap">
			<p
				data-slot="discord-message-author-name"
				className={cn("mr-1 font-medium text-[1rem]", className)}
				{...props}
			>
				{children}
			</p>
			<p
				data-slot="discord-message-timestamp"
				className="text-[0.75rem] text-muted-foreground"
			>
				{formatDate(timestamp, hr24)}
			</p>
		</div>
	);
}

function DiscordMessage({
	className,
	children,
	...props
}: React.ComponentProps<"p">) {
	return (
		<p
			data-slot="discord-message"
			className={cn("text-sm", className)}
			{...props}
		>
			{children}
		</p>
	);
}

export {
	DiscordChat,
	chatVariants,
	DiscordMessageGroup,
	DiscordMessageContent,
	DiscordMessageAuthor,
	DiscordMessageAuthorImage,
	DiscordMessageAuthorName,
	DiscordMessage
};
