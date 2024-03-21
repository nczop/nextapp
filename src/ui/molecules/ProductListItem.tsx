import Link from "next/link";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductItemType } from "@/ui/molecules/typse";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<Link href="/status">
			<ProductCoverImage alt={product.imageAlt} src={product.imageSrc} />
			<ProductListItemDescription product={product} />
		</Link>
	);
};
