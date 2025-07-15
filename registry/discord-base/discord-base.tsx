import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { formatDate } from "./lib/date-fns";
import Icons from "./discord-icons";

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
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="discord-message"
			className={cn("text-sm", className)}
			{...props}
		>
			{children}
		</div>
	);
}

type DiscordMentionType =
	| "user"
	| "role"
	| "channel"
	| "thread"
	| "voice"
	| "stage"
	| "forum"
	| "media"
	| "command"
	| "linked-roles"
	| "browse"
	| "guide"
	| "image-link"
	| "forum-post"
	| "message-link"
	| "shop-link"
	| "external-server-link";

type Modifier =
	| "channel"
	| "thread"
	| "forum"
	| "media"
	| "voice"
	| "stage"
	| "locked"
	| "message"
	| "forum-message";

interface BaseProps extends React.ComponentProps<"span"> {
	type: Exclude<
		DiscordMentionType,
		| "message-link"
		| "shop-link"
		| "linked-roles"
		| "browse"
		| "guide"
		| "external-server-link"
		| "role"
	>;
	modifier?: never;
	modifierText?: never;
	serverSrc?: never;
	serverAlt?: never;
	serverFallback?: never;
	roleColor?: never;
	children: React.ReactNode;
}

interface RoleMentionProps extends React.ComponentProps<"span"> {
	type: "role";
	modifier?: never;
	modifierText?: never;
	serverSrc?: never;
	serverAlt?: never;
	serverFallback?: never;
	roleColor?: string;
	children: React.ReactNode;
}

interface ServerChannelProps extends React.ComponentProps<"span"> {
	type: "linked-roles" | "browse" | "guide";
	modifier?: never;
	modifierText?: never;
	serverSrc?: never;
	serverAlt?: never;
	serverFallback?: never;
	roleColor?: never;
	children?: never;
}

interface MessageLinkProps extends React.ComponentProps<"span"> {
	type: "message-link";
	modifier: Exclude<Modifier, "stage" | "locked" | "message" | "forum-message">;
	modifierText: string;
	serverSrc?: never;
	serverAlt?: never;
	serverFallback?: never;
	roleColor?: never;
	children?: never;
}

interface ShopLinkProps extends React.ComponentProps<"span"> {
	type: "shop-link";
	modifier?: never;
	modifierText: string;
	serverSrc?: never;
	serverAlt?: never;
	serverFallback?: never;
	roleColor?: never;
	children?: never;
}

interface ExternalServerLinkProps extends React.ComponentProps<"span"> {
	type: "external-server-link";
	modifier: Exclude<Modifier, "thread" | "message">;
	modifierText: string;
	serverSrc: string;
	serverAlt: string;
	serverFallback: string;
	roleColor?: never;
	children: React.ReactNode;
}

interface ExternalServerLinkMessageProps extends React.ComponentProps<"span"> {
	type: "external-server-link";
	modifier: "message";
	modifierText: string;
	serverSrc: string;
	serverAlt: string;
	serverFallback: string;
	roleColor?: never;
	children?: never;
}

type DiscordMentionProps =
	| BaseProps
	| RoleMentionProps
	| ServerChannelProps
	| MessageLinkProps
	| ShopLinkProps
	| ExternalServerLinkProps
	| ExternalServerLinkMessageProps;

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: <explanation>
function DiscordMention({
	type,
	modifier,
	modifierText,
	serverSrc,
	serverAlt,
	serverFallback,
	roleColor,
	className,
	children,
	...props
}: DiscordMentionProps) {
	return (
		<span
			data-slot="discord-mention"
			className={cn(
				"my-[2px] inline-block cursor-pointer rounded-[3px] bg-discord-mention px-[2px] align-baseline font-medium text-discord-mention-foreground hover:bg-discord-mention-hover hover:text-discord-mention-foreground-hover",
				roleColor && "discord-mention",
				className
			)}
			style={
				{
					"--role-color": roleColor ? roleColor : undefined,
					color: roleColor ? roleColor : undefined
				} as React.CSSProperties
			}
			{...props}
		>
			{(type === "user" || type === "role") && "@"}
			{type === "channel" && <Icons.DiscordChannelIcon />}
			{type === "thread" && <Icons.DiscordThreadIcon />}
			{type === "voice" && <Icons.DiscordVoiceIcon />}
			{type === "stage" && <Icons.DiscordStageIcon />}
			{type === "forum" && <Icons.DiscordForumIcon />}
			{type === "media" && <Icons.DiscordMediaIcon />}
			{type === "command" && "/"}
			{type === "linked-roles" && (
				<>
					<Icons.DiscordLinkedRolesIcon />
					Linked Roles
				</>
			)}
			{type === "browse" && (
				<>
					<Icons.DiscordBrowseIcon />
					Browse Channels
				</>
			)}
			{type === "guide" && (
				<>
					<Icons.DiscordGuideIcon />
					Server Guide
				</>
			)}
			{type === "image-link" && <Icons.DiscordImageLinkIcon />}
			{type === "forum-post" && <Icons.DiscordMessageBubbleIcon />}
			{type === "message-link" && (
				<>
					{modifier === "channel" && <Icons.DiscordChannelIcon />}
					{modifier === "thread" && <Icons.DiscordThreadIcon />}
					{modifier === "forum" && <Icons.DiscordForumIcon />}
					{modifier === "media" && <Icons.DiscordMediaIcon />}
					{modifier === "voice" && <Icons.DiscordVoiceIcon />}
					{modifierText}
					<Icons.DiscordArrowRightIcon />
					<Icons.DiscordMessageBubbleIcon />
				</>
			)}
			{type === "shop-link" && (
				<>
					<Icons.DiscordShopIcon />
					{modifierText}
					<Icons.DiscordArrowRightIcon />
				</>
			)}
			{type === "external-server-link" && (
				<>
					<Avatar className="mr-[3px] mb-[.2rem] inline-block size-[1em] bg-discord-background align-middle">
						<AvatarImage
							src={serverSrc}
							alt={serverAlt}
						/>
						<AvatarFallback>{serverFallback}</AvatarFallback>
					</Avatar>
					{modifierText} <Icons.DiscordArrowRightIcon />
					{modifier === "channel" && <Icons.DiscordChannelIcon />}
					{modifier === "forum" && <Icons.DiscordForumIcon />}
					{modifier === "media" && <Icons.DiscordMediaIcon />}
					{modifier === "voice" && <Icons.DiscordVoiceIcon />}
					{modifier === "stage" && <Icons.DiscordStageIcon />}
					{modifier === "locked" && <Icons.DiscordLockedIcon />}
					{(modifier === "message" || modifier === "forum-message") && (
						<Icons.DiscordMessageBubbleIcon />
					)}
				</>
			)}
			{children}
		</span>
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
	DiscordMessage,
	DiscordMention
};
