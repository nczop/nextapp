import { ModeToggle } from "@/components/ui/toggle-mode";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Navigation = () => {
	return (
		<nav>
			<ul className="mt-5 flex justify-center space-x-4">
				<li>
					<ActiveLink href="/">Homepage</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/products">Products</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/status">Status</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/privacy-policy">Privacy policy</ActiveLink>
				</li>
				<li>
					<ModeToggle />
				</li>
			</ul>
		</nav>
	);
};
