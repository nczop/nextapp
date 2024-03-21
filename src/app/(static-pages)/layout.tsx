import { type ReactNode } from "react";

export default function StaticLayout({ children }: { children: ReactNode }) {
	return (
		<div className="flex min-h-screen flex-col bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
			{children}
		</div>
	);
}
