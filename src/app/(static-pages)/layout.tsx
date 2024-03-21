import { type ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";

export default function StaticLayout({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system">
			<div className="flex min-h-screen flex-col bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
				{children}
			</div>
		</ThemeProvider>
	);
}
