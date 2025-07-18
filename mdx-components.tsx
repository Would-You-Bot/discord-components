import {
	ImageZoom,
	type ImageZoomProps
} from "fumadocs-ui/components/image-zoom";
import defaultMdxComponents from "fumadocs-ui/mdx";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import type { MDXComponents } from "mdx/types";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { ComponentPreview } from "@/components/component-preview";
import { ComponentSource } from "@/components/component-source";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
	return {
		...defaultMdxComponents,
		...TabsComponents,
		ComponentPreview,
		ComponentSource,
		img: (props) => <ImageZoom {...(props as ImageZoomProps)} />,
		pre: ({ ref: _ref, ...props }) => (
			<CodeBlock {...props}>
				<Pre>{props.children}</Pre>
			</CodeBlock>
		),
		...components
	};
}
