import type React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type DiscordEmbedLinkItemBaseProps = {
	className?: string;
	children: React.ReactNode;
};

type DiscordEmbedItemWithoutLink = DiscordEmbedLinkItemBaseProps &
	React.ComponentPropsWithoutRef<"p"> & { isLink?: false; href?: never };
type DiscordEmbedItemWithLink = DiscordEmbedLinkItemBaseProps &
	React.ComponentPropsWithoutRef<"a"> & { isLink: true; href: string };
type DiscordEmbedLinkItemProps =
	| DiscordEmbedItemWithoutLink
	| DiscordEmbedItemWithLink;

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

function DiscordEmbedAuthorName({
	className,
	children,
	isLink = false,
	href,
	...props
}: DiscordEmbedLinkItemProps) {
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

function DiscordEmbedTitle({
	className,
	children,
	isLink = false,
	href,
	...props
}: DiscordEmbedLinkItemProps) {
	return (
		<div
			className="col-[1/1] mt-[8px] font-semibold text-[1rem] text-foreground"
			data-slot="discord-embed-title-wrapper"
		>
			{isLink ? (
				<a
					className={cn(
						"cursor-pointer text-discord-link hover:underline",
						className
					)}
					data-slot="discord-embed-title"
					href={href}
					style={{ wordBreak: "break-word" }}
					{...(props as React.ComponentPropsWithoutRef<"a">)}
				>
					{children}
				</a>
			) : (
				<p
					className={cn("", className)}
					data-slot="discord-embed-title"
					style={{ wordBreak: "break-word" }}
					{...(props as React.ComponentPropsWithoutRef<"p">)}
				>
					{children}
				</p>
			)}
		</div>
	);
}

function DiscordEmbedDescription({
	className,
	children,
	...props
}: React.ComponentProps<"p">) {
	return (
		<p
			className={cn(
				"col-[1/1] mt-[8px] text-[.875rem]/[1.125rem] text-foreground/95",
				className
			)}
			data-slot="discord-embed-description"
			{...props}
		>
			{children}
		</p>
	);
}

export {
	DiscordEmbed,
	DiscordEmbedAuthor,
	DiscordEmbedAuthorName,
	DiscordEmbedAuthorImage,
	DiscordEmbedTitle,
	DiscordEmbedDescription
};
