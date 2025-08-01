"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
	const { setTheme, resolvedTheme } = useTheme();
	const [, startTransition] = useTransition();

	return (
		<Button
			className="h-7 w-7"
			onClick={() => {
				startTransition(() => {
					setTheme(resolvedTheme === "dark" ? "light" : "dark");
				});
			}}
			size="icon"
			variant="ghost"
		>
			<Moon className="dark:hidden" />
			<Sun className="hidden dark:block" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
