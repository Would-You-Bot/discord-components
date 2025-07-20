import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import {
	ImageZoom,
	type ImageZoomProps
} from "fumadocs-ui/components/image-zoom";
// biome-ignore lint/performance/noNamespaceImport: Required for docs
import * as TabsComponents from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
	return {
		...defaultMdxComponents,
		...TabsComponents,
		img: (props) => <ImageZoom {...(props as ImageZoomProps)} />,
		pre: ({ ref: _ref, ...props }) => (
			<CodeBlock {...props}>
				<Pre>{props.children}</Pre>
			</CodeBlock>
		),
		...components
	};
}
