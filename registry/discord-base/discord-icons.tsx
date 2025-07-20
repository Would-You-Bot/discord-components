import type React from "react";
import { cn } from "@/lib/utils";

const ICON_CLASS =
	"fill-discord-mention-foreground size-[1em] mr-1 mb-[.1rem] inline";

function DiscordChannelIcon({
	className,
	...props
}: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden="false"
			aria-label="Channel"
			className={cn(ICON_CLASS, className)}
			fill="none"
			height="24"
			role="img"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				clipRule="evenodd"
				d="M10.99 3.16A1 1 0 1 0 9 2.84L8.15 8H4a1 1 0 0 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82l-.8 4.84a1 1 0 0 0 1.97.32L8.85 16h4.97l-.8 4.84a1 1 0 0 0 1.97.32l.86-5.16H20a1 1 0 1 0 0-2h-3.82l.67-4H21a1 1 0 1 0 0-2h-3.82l.8-4.84a1 1 0 1 0-1.97-.32L15.15 8h-4.97l.8-4.84ZM14.15 14l.67-4H9.85l-.67 4h4.97Z"
				fill="currentColor"
				fillRule="evenodd"
			/>
		</svg>
	);
}

function DiscordVoiceIcon({
	className,
	...props
}: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden="false"
			aria-label="Voice Channel"
			className={cn(ICON_CLASS, className)}
			fill="none"
			height="24"
			role="img"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z"
				fill="currentColor"
			/>
			<path
				d="M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function DiscordStageIcon({
	className,
	...props
}: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden="false"
			aria-label="Stage Channel"
			className={cn(ICON_CLASS, className)}
			fill="none"
			height="32"
			role="img"
			viewBox="0 0 24 24"
			width="32"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z"
				fill="currentColor"
			/>
			<path
				d="M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z"
				fill="currentColor"
			/>
			<path
				d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.33 20.03c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 9.73 0 1.52 1.52 0 0 0 .8-1.84 6 6 0 0 0-11.33 0Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function DiscordThreadIcon({
	className,
	...props
}: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden="false"
			aria-label="Thread"
			className={cn(ICON_CLASS, className)}
			fill="none"
			height="24"
			role="img"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function DiscordForumIcon({
	className,
	...props
}: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden="false"
			aria-label="Forum Channel"
			className={cn(ICON_CLASS, className)}
			fill="none"
			height="24"
			role="img"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M18.91 12.98a5.45 5.45 0 0 1 2.18 6.2c-.1.33-.09.68.1.96l.83 1.32a1 1 0 0 1-.84 1.54h-5.5A5.6 5.6 0 0 1 10 17.5a5.6 5.6 0 0 1 5.68-5.5c1.2 0 2.32.36 3.23.98Z"
				fill="currentColor"
			/>
			<path
				d="M19.24 10.86c.32.16.72-.02.74-.38L20 10c0-4.42-4.03-8-9-8s-9 3.58-9 8c0 1.5.47 2.91 1.28 4.11.14.21.12.49-.06.67l-1.51 1.51A1 1 0 0 0 2.4 18h5.1a.5.5 0 0 0 .49-.5c0-4.2 3.5-7.5 7.68-7.5 1.28 0 2.5.3 3.56.86Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function DiscordMediaIcon({
	className,
	...props
}: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden="false"
			aria-label="Media Channel"
			className={cn(ICON_CLASS, className)}
			fill="none"
			height="24"
			role="img"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				clipRule="evenodd"
				d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm13.35 8.13 3.5 4.67c.37.5.02 1.2-.6 1.2H5.81a.75.75 0 0 1-.59-1.22l1.86-2.32a1.5 1.5 0 0 1 2.34 0l.5.64 2.23-2.97a2 2 0 0 1 3.2 0ZM10.2 5.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z"
				fill="currentColor"
				fillRule="evenodd"
			/>
		</svg>
	);
}

function DiscordLinkedRolesIcon({
	className,
	...props
}: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden="false"
			aria-label="Linked Roles"
			className={cn(ICON_CLASS, className)}
			fill="none"
			height="24"
			role="img"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M16.32 14.72a1 1 0 0 1 0-1.41l2.51-2.51a3.98 3.98 0 0 0-5.62-5.63l-2.52 2.51a1 1 0 0 1-1.41-1.41l2.52-2.52a5.98 5.98 0 0 1 8.45 8.46l-2.52 2.51a1 1 0 0 1-1.41 0ZM7.68 9.29a1 1 0 0 1 0 1.41l-2.52 2.51a3.98 3.98 0 1 0 5.63 5.63l2.51-2.52a1 1 0 0 1 1.42 1.42l-2.52 2.51a5.98 5.98 0 0 1-8.45-8.45l2.51-2.51a1 1 0 0 1 1.42 0Z"
				fill="currentColor"
			/>
			<path
				d="M14.7 10.7a1 1 0 0 0-1.4-1.4l-4 4a1 1 0 1 0 1.4 1.4l4-4Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function DiscordBrowseIcon({
	className,
	...props
}: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden="false"
			aria-label="Browse Channels"
			className={cn(ICON_CLASS, className)}
			fill="none"
			height="24"
			role="img"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				clipRule="evenodd"
				d="M18.5 23c.88 0 1.7-.25 2.4-.69l1.4 1.4a1 1 0 0 0 1.4-1.42l-1.39-1.4A4.5 4.5 0 1 0 18.5 23Zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
				fill="currentColor"
				fillRule="evenodd"
			/>
			<path
				d="M3 3a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H3ZM2 8a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H3ZM2 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H3Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function DiscordGuideIcon({
	className,
	...props
}: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden="false"
			aria-label="Server Guide"
			className={cn(ICON_CLASS, className)}
			fill="none"
			height="24"
			role="img"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M11 3a1 1 0 1 1 2 0v2h5.75c.16 0 .3.07.4.2l2.63 3.5a.5.5 0 0 1 0 .6l-2.63 3.5a.5.5 0 0 1-.4.2H13v5h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1c0-1.1.9-2 2-2h2v-5H2.8a.5.5 0 0 1-.44-.72L3.9 9.22a.5.5 0 0 0 0-.44L2.36 5.72A.5.5 0 0 1 2.81 5H11V3Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function DiscordImageLinkIcon({
	className,
	...props
}: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden="true"
			className={cn(ICON_CLASS, className)}
			fill="none"
			height="16"
			role="img"
			viewBox="0 0 24 24"
			width="16"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M10.57 4.01a6.97 6.97 0 0 1 9.86 0l.54.55a6.99 6.99 0 0 1 0 9.88l-7.26 7.27a1 1 0 0 1-1.42-1.42l7.27-7.26a4.99 4.99 0 0 0 0-7.06L19 5.43a4.97 4.97 0 0 0-7.02 0l-8.02 8.02a3.24 3.24 0 1 0 4.58 4.58l6.24-6.24a1.12 1.12 0 0 0-1.58-1.58l-3.5 3.5a1 1 0 0 1-1.42-1.42l3.5-3.5a3.12 3.12 0 1 1 4.42 4.42l-6.24 6.24a5.24 5.24 0 0 1-7.42-7.42l8.02-8.02Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function DiscordMessageBubbleIcon({
	className,
	...props
}: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden="false"
			aria-label="Forum Post"
			className={cn(ICON_CLASS, className)}
			fill="none"
			height="24"
			role="img"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function DiscordArrowRightIcon({
	className,
	...props
}: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden="true"
			className={cn(ICON_CLASS, "size-[.5em]", className)}
			fill="none"
			height="24"
			role="img"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M9.3 5.3a1 1 0 0 0 0 1.4l5.29 5.3-5.3 5.3a1 1 0 1 0 1.42 1.4l6-6a1 1 0 0 0 0-1.4l-6-6a1 1 0 0 0-1.42 0Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function DiscordShopIcon({
	className,
	...props
}: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden="true"
			className={cn(ICON_CLASS, className)}
			fill="none"
			height="18"
			role="img"
			viewBox="0 0 24 24"
			width="18"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M2.63 4.19A3 3 0 0 1 5.53 2H7a1 1 0 0 1 1 1v3.98a3.07 3.07 0 0 1-.3 1.35A2.97 2.97 0 0 1 4.98 10c-2 0-3.44-1.9-2.9-3.83l.55-1.98ZM10 2a1 1 0 0 0-1 1v4a3 3 0 0 0 3 3 3 3 0 0 0 3-2.97V3a1 1 0 0 0-1-1h-4ZM17 2a1 1 0 0 0-1 1v3.98a2.43 2.43 0 0 0 0 .05A2.95 2.95 0 0 0 19.02 10c2 0 3.44-1.9 2.9-3.83l-.55-1.98A3 3 0 0 0 18.47 2H17Z"
				fill="currentColor"
			/>
			<path
				d="M21 11.42V19a3 3 0 0 1-3 3h-2.75a.25.25 0 0 1-.25-.25V16a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v5.75c0 .14-.11.25-.25.25H6a3 3 0 0 1-3-3v-7.58c0-.18.2-.3.37-.24a4.46 4.46 0 0 0 4.94-1.1c.1-.12.3-.12.4 0a4.49 4.49 0 0 0 6.58 0c.1-.12.3-.12.4 0a4.45 4.45 0 0 0 4.94 1.1c.17-.07.37.06.37.24Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function DiscordLockedIcon({
	className,
	...props
}: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-hidden="false"
			aria-label="Stage Channel (Locked)"
			className={cn(ICON_CLASS, className)}
			fill="none"
			height="24"
			role="img"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				clipRule="evenodd"
				d="M6 9h1V6a5 5 0 0 1 10 0v3h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3Zm9-3v3H9V6a3 3 0 1 1 6 0Zm-1 8a2 2 0 0 1-1 1.73V18a1 1 0 1 1-2 0v-2.27A2 2 0 1 1 14 14Z"
				fill="currentColor"
				fillRule="evenodd"
			/>
		</svg>
	);
}

export {
	DiscordChannelIcon,
	DiscordVoiceIcon,
	DiscordStageIcon,
	DiscordThreadIcon,
	DiscordForumIcon,
	DiscordMediaIcon,
	DiscordLinkedRolesIcon,
	DiscordBrowseIcon,
	DiscordGuideIcon,
	DiscordImageLinkIcon,
	DiscordMessageBubbleIcon,
	DiscordArrowRightIcon,
	DiscordShopIcon,
	DiscordLockedIcon
};
export default {
	DiscordChannelIcon,
	DiscordVoiceIcon,
	DiscordStageIcon,
	DiscordThreadIcon,
	DiscordForumIcon,
	DiscordMediaIcon,
	DiscordLinkedRolesIcon,
	DiscordBrowseIcon,
	DiscordGuideIcon,
	DiscordImageLinkIcon,
	DiscordMessageBubbleIcon,
	DiscordArrowRightIcon,
	DiscordShopIcon,
	DiscordLockedIcon
};
