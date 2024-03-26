import { type Metadata } from "next";
import { getProductById, getProductsList } from "@/api/products";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `Product ${product.name}`,
		description: `description`,
	};
};

export const generateStaticParams = async () => {
	const products = await getProductsList();
	return products
		.map((product) => ({
			productId: product.id,
		}))
		.slice(0, 2);
};

export default async function SingleProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);
	return (
		<div className="max-w-xs">
			<ProductListItem key={product.id} product={product}></ProductListItem>
		</div>
	);
}
