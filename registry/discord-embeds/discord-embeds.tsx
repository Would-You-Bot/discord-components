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
			data-slot="discord-embed"
			className={cn(
				"grid-rows[auto] grid grid-cols-[auto] flex-col rounded-md border border-l-4 pt-[.125rem] bg-discord-embed-background pr-[1rem] pb-[1rem] pl-[.75rem]",
				className,
			)}
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
			data-slot="discord-embed-author"
			className={cn("col-[1/1] mt-2 flex items-center", className)}
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
				data-slot="discord-embed-author-name"
				className={cn(
					"font-semibold text-[.875rem] text-foreground hover:underline",
					className,
				)}
				href={href}
				{...(props as React.ComponentPropsWithoutRef<"a">)}
			>
				{children}
			</a>
		);
	}

	return (
		<p
			data-slot="discord-embed-author-name"
			className={cn("font-semibold text-[.875rem] text-foreground", className)}
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
			data-slot="discord-embed-author-avatar"
			className="mr-2 h-[24px] w-[24px]"
			{...props}
		>
			<AvatarImage
				data-slot="discord-embed-author-image"
				className={cn("rounded-full", className)}
				src={src}
				alt={alt}
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
	DiscordEmbedAuthorImage,
};
