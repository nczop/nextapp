import Link from "next/link";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductItemType } from "@/ui/molecules/typse";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<Link href={`/product/${product.id}`}>
			<ProductCoverImage
				alt={product.coverImage.alt}
				src={product.coverImage.src}
			/>
			<ProductListItemDescription name={product.name} price={product.price} />
		</Link>
	);
};
