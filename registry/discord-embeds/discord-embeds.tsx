import type React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

function DiscordEmbed({
	className,
	children,
	color,
	...props
}: React.ComponentProps<"article"> & {
	color?: string;
}) {
	return (
		<article
			className={cn(
				"grid-rows[auto] grid grid-cols-[auto] flex-col rounded-md border border-l-4 bg-discord-embed-background pt-[.125rem] pr-[1rem] pb-[1rem] pl-[.75rem]",
				className
			)}
			data-slot="discord-embed"
			style={{ borderLeftColor: color ?? "#5863e4" }}
			{...props}
		>
			{children}
		</article>
	);
}

function DiscordEmbedAuthor({
	className,
	children,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			className={cn("col-[1/1] mt-2 flex items-center", className)}
			data-slot="discord-embed-author"
			{...props}
		>
			{children}
		</div>
	);
}

type DiscordEmbedAuthorNameBaseProps = {
	className?: string;
	children: React.ReactNode;
};

type DiscordEmbedAuthorNameWithoutLink = DiscordEmbedAuthorNameBaseProps &
	React.ComponentPropsWithoutRef<"p"> & { isLink?: false; href?: never };
type DiscordEmbedAuthorNameWithLink = DiscordEmbedAuthorNameBaseProps &
	React.ComponentPropsWithoutRef<"a"> & { isLink: true; href: string };
type DiscordEmbedAuthorNameProps =
	| DiscordEmbedAuthorNameWithoutLink
	| DiscordEmbedAuthorNameWithLink;

function DiscordEmbedAuthorName({
	className,
	children,
	isLink = false,
	href,
	...props
}: DiscordEmbedAuthorNameProps) {
	if (isLink) {
		return (
			<a
				className={cn(
					"font-semibold text-[.875rem] text-foreground hover:underline",
					className
				)}
				data-slot="discord-embed-author-name"
				href={href}
				{...(props as React.ComponentPropsWithoutRef<"a">)}
			>
				{children}
			</a>
		);
	}

	return (
		<p
			className={cn("font-semibold text-[.875rem] text-foreground", className)}
			data-slot="discord-embed-author-name"
			{...(props as React.ComponentPropsWithoutRef<"p">)}
		>
			{children}
		</p>
	);
}

function DiscordEmbedAuthorImage({
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
			className="mr-2 h-[24px] w-[24px]"
			data-slot="discord-embed-author-avatar"
			{...props}
		>
			<AvatarImage
				alt={alt}
				className={cn("rounded-full", className)}
				data-slot="discord-embed-author-image"
				src={src}
			/>
			<AvatarFallback data-slot="discord-embed-author-fallback">
				{fallback}
			</AvatarFallback>
		</Avatar>
	);
}

export {
	DiscordEmbed,
	DiscordEmbedAuthor,
	DiscordEmbedAuthorName,
	DiscordEmbedAuthorImage
};
