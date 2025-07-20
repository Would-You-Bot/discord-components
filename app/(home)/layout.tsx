import { HomeLayout } from "fumadocs-ui/layouts/home";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<HomeLayout {...baseOptions}>
			<div className="bg-background pt-8 md:pt-16">{children}</div>
		</HomeLayout>
	);
}
