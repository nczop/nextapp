import React from "react";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/api/products";

// const products = [
// 	{
// 		id: 1,
// 		name: "Earthen Bottle",
// 		href: "#",
// 		price: 48,
// 		coverImage: {
// 			alt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
// 			src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
// 		},
// 	},
// 	{
// 		id: 2,
// 		name: "Nomad Tumbler",
// 		href: "#",
// 		price: 35,
// 		coverImage: {
// 			alt: "Olive drab green insulated bottle with flared screw lid and flat top.",
// 			src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
// 		},
// 	},
// 	{
// 		id: 3,
// 		name: "Focus Paper Refill",
// 		href: "#",
// 		price: 89,
// 		coverImage: {
// 			alt: "Person using a pen to cross a task off a productivity paper card.",
// 			src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
// 		},
// 	},
// 	{
// 		id: 4,
// 		name: "Machined Mechanical Pencil",
// 		href: "#",
// 		price: 35,
// 		coverImage: {
// 			alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
// 			src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
// 		},
// 	},
// 	{
// 		id: 5,
// 		name: "Earthen Bottle",
// 		href: "#",
// 		price: 48,
// 		coverImage: {
// 			alt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
// 			src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
// 		},
// 	},
// 	{
// 		id: 6,
// 		name: "Nomad Tumbler",
// 		href: "#",
// 		price: 35,
// 		coverImage: {
// 			alt: "Olive drab green insulated bottle with flared screw lid and flat top.",
// 			src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
// 		},
// 	},
// 	{
// 		id: 7,
// 		name: "Focus Paper Refill",
// 		href: "#",
// 		price: 89,
// 		coverImage: {
// 			alt: "Person using a pen to cross a task off a productivity paper card.",
// 			src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
// 		},
// 	},
// 	{
// 		id: 8,
// 		name: "Machined Mechanical Pencil",
// 		href: "#",
// 		price: 35,
// 		coverImage: {
// 			alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
// 			src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
// 		},
// 	},
// ];

export default async function ProductPage() {
	const products = await getProductsList();

	return <ProductList products={products} />;
}
