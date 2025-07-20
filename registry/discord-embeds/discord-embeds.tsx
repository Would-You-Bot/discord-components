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
	thumbnail,
	thumbnailAlt,
	...props
}: React.ComponentProps<"article"> & {
	color?: string;
	thumbnail?: string;
	thumbnailAlt?: string;
}) {
	return (
		<article
			className={cn(
				"group grid max-w-[520px] grid-rows-[auto] flex-col rounded-md border border-discord-foreground/5 border-l-4 bg-discord-embed-background pt-[.125rem] pr-[1rem] pb-[1rem] pl-[.75rem]",
				className
			)}
			data-has-thumbnail={!!thumbnail}
			data-slot="discord-embed"
			style={{
				borderLeftColor: color ?? "#5863e4",
				gridTemplateColumns: thumbnail ? "minmax(0, 1fr)" : "auto"
			}}
			{...props}
		>
			{thumbnail && (
				<div className="col-[2/2] row-[1/8] mt-[8px] ml-[16px] justify-self-end object-fill">
					<div className="flex h-full w-full flex-row flex-nowrap">
						<div className="relative block rounded-[3px]">
							{/** biome-ignore lint/performance/noImgElement: Keeping it basic */}
							<img
								alt={thumbnailAlt}
								className="h-[80px] w-[80px] rounded-[4px]"
								src={thumbnail ?? "Embed thumbnail image"}
							/>
						</div>
					</div>
				</div>
			)}
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
					"font-semibold text-[.875rem] text-discord-header hover:underline",
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
			className={cn(
				"font-semibold text-[.875rem] text-discord-header",
				className
			)}
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
			className="col-[1/1] mt-[8px] font-semibold text-[1rem] text-discord-header"
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
				"col-[1/1] mt-[8px] text-[.875rem]/[1.125rem] text-discord-foreground",
				className
			)}
			data-slot="discord-embed-description"
			{...props}
		>
			{children}
		</p>
	);
}

function DiscordEmbedFieldWrapper({
	className,
	children,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			className={cn("cols-[1/1] mt-[8px] grid gap-[8px]", className)}
			data-slot="discord-embed-field-wrapper"
			{...props}
		>
			{children}
		</div>
	);
}

type DiscordEmbedFieldProps = {
	name: string | React.ReactNode;
	value: string | React.ReactNode;
	inline?: boolean;
	wrapperCustomClass?: string;
	nameCustomClass?: string;
	valueCustomClass?: string;
};

type DiscordEmbedFieldsProps = {
	fields: DiscordEmbedFieldProps[];
	wrapperCustomClass?: string;
	nameCustomClass?: string;
	valueCustomClass?: string;
};

function DiscordEmbedFields({
	fields,
	wrapperCustomClass,
	nameCustomClass,
	valueCustomClass
}: DiscordEmbedFieldsProps) {
	const splits: string[] = [];
	let inlineCount = 0;

	for (const item of fields) {
		if (item.inline) {
			inlineCount++;

			switch (inlineCount) {
				case 1:
					splits.push("1/13");
					break;
				case 2:
					splits[splits.length - 1] = "1/7";
					splits.push("7/13");
					break;
				case 3:
					splits[splits.length - 2] = "1/5";
					splits[splits.length - 1] = "5/9";
					splits.push("9/13");
					inlineCount = 0;
					break;
				default:
					break;
			}
		} else {
			inlineCount = 0;
			splits.push("1/13");
		}
	}

	return (
		<>
			{fields.map((item, index) => (
				<div
					className={cn(
						"text-[.875rem]/[1.125rem]",
						wrapperCustomClass,
						item.wrapperCustomClass
					)}
					key={`field-${item.name}-${index}`}
					style={{ gridColumn: splits[index] }}
				>
					{typeof item.name === "string" ? (
						<p
							className={cn(
								"mb-[2px] font-semibold text-discord-header",
								nameCustomClass,
								item.nameCustomClass
							)}
						>
							{item.name}
						</p>
					) : (
						item.name
					)}

					{typeof item.value === "string" ? (
						<p
							className={cn(
								"text-discord-foreground",
								valueCustomClass,
								item.valueCustomClass
							)}
						>
							{item.value}
						</p>
					) : (
						item.value
					)}
				</div>
			))}
		</>
	);
}

function DiscordEmbedImageWrapper({
	className,
	children,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"col-[1/2] mt-[16px] grid grid-cols-2 gap-[4px] overflow-hidden rounded-[4px]",
				className
			)}
			data-slot="discord-embed-image-wrapper"
			{...props}
		>
			{children}
		</div>
	);
}

type DiscordEmbedImage = {
	src: string;
	alt: string;
} & React.ComponentProps<"img">;
type DiscordEmbedImagesProps = React.ComponentProps<"div"> & {
	images: readonly [
		DiscordEmbedImage,
		DiscordEmbedImage?,
		DiscordEmbedImage?,
		DiscordEmbedImage?
	];
};

function DiscordEmbedImages({
	className,
	children,
	images,
	...props
}: DiscordEmbedImagesProps) {
	switch (images.length) {
		case 1:
			return (
				<div
					className={cn("flex h-full w-full flex-row flex-nowrap", className)}
					{...props}
				>
					<DiscordEmbedImage {...images[0]} />
				</div>
			);
		case 2:
			return (
				<>
					<div className="flex flex-col overflow-hidden">
						<DiscordEmbedImage {...images[0]} />
					</div>
					<div className="flex flex-col overflow-hidden">
						{/** biome-ignore lint/style/noNonNullAssertion: Images [1] exists here via the switch case */}
						<DiscordEmbedImage {...images[1]!} />
					</div>
				</>
			);
		case 3:
			return (
				<>
					<div className="flex flex-col overflow-hidden">
						<DiscordEmbedImage {...images[0]} />
					</div>
					<div className="flex flex-col overflow-hidden">
						{/** biome-ignore lint/style/noNonNullAssertion: Images [1] exists here via the switch case */}
						<DiscordEmbedImage {...images[1]!} />
						<DiscordEmbedImage
							// biome-ignore lint/style/noNonNullAssertion: Images [2] exists here via the switch case
							{...images[2]!}
							className={cn("mt-[4px]", images[2]?.className)}
						/>
					</div>
				</>
			);
		case 4:
			return (
				<>
					<div className="flex flex-col overflow-hidden">
						<DiscordEmbedImage {...images[0]} />
						<DiscordEmbedImage
							// biome-ignore lint/style/noNonNullAssertion: Images [2] exists here via the switch case
							{...images[2]!}
							className={cn("mt-[4px]", images[2]?.className)}
						/>
					</div>
					<div className="flex flex-col overflow-hidden">
						{/** biome-ignore lint/style/noNonNullAssertion: Images [1] exists here via the switch case */}
						<DiscordEmbedImage {...images[1]!} />
						<DiscordEmbedImage
							// biome-ignore lint/style/noNonNullAssertion: Images [3] exists here via the switch case
							{...images[3]!}
							className={cn("mt-[4px]", images[3]?.className)}
						/>
					</div>
				</>
			);
		default:
			return null;
	}
}

function DiscordEmbedImage({
	className,
	children,
	src,
	alt,
	...props
}: DiscordEmbedImage) {
	return (
		// biome-ignore lint/performance/noImgElement: Keeping it basic
		<img
			alt={alt ?? "Embed Image"}
			className={cn("h-full w-full object-cover rounded-[4px]", className)}
			data-slot="discord-embed-image"
			src={src}
			{...props}
		/>
	);
}

function DiscordEmbedFooter({
	className,
	children,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"col-[1/1] mt-[8px] flex items-center group-data-[has-thumbnail=true]:col-[1/3]",
				className
			)}
			data-slot="discord-embed-footer"
			{...props}
		>
			{children}
		</div>
	);
}

function DiscordEmbedFooterImage({
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
			className="mr-[8px] h-[20px] w-[20px]"
			data-slot="discord-embed-footer-avatar"
			{...props}
		>
			<AvatarImage
				alt={alt}
				className={cn("rounded-full", className)}
				data-slot="discord-embed-footer-image"
				src={src}
			/>
			<AvatarFallback data-slot="discord-embed-footer-fallback">
				{fallback}
			</AvatarFallback>
		</Avatar>
	);
}

function DiscordEmbedFooterText({
	className,
	children,
	date,
	...props
}: React.ComponentProps<"span"> & { date?: Date }) {
	return (
		<span
			className={cn(
				"font-medium text-[.75rem]/[1rem] text-discord-foreground",
				className
			)}
			data-slot="discord-embed-footer-text"
			{...props}
		>
			{children}
			{date && (
				<>
					<span className="mx-[4px]"> • </span>{" "}
					{date
						.toLocaleString()
						.replace(",", "")
						.split(":")
						.map((item, index) =>
							index === 2
								? item.split(" ")[1]
								: `${item}${index === 0 ? ":" : " "}`
						)
						.join("")}
				</>
			)}
		</span>
	);
}

export {
	DiscordEmbed,
	DiscordEmbedAuthor,
	DiscordEmbedAuthorName,
	DiscordEmbedAuthorImage,
	DiscordEmbedTitle,
	DiscordEmbedDescription,
	DiscordEmbedFieldWrapper,
	DiscordEmbedFields,
	DiscordEmbedImageWrapper,
	DiscordEmbedImages,
	DiscordEmbedFooter,
	DiscordEmbedFooterImage,
	DiscordEmbedFooterText
};
