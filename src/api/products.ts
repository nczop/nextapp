import { TypedDocumentString } from "@/gql/graphql";
import { type ProductItemType } from "@/ui/molecules/typse";

export type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

export const productResponseItemToProductItemType = (
	product: ProductResponseItem,
): ProductItemType => {
	return {
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		coverImage: {
			alt: product.title,
			src: product.image,
		},
	};
};

// export const getProductsList = async () => {
// 	const res = await fetch("https://naszsklep-api.vercel.app/api/products");
// 	const productsResponse = (await res.json()) as ProductResponseItem[];

// 	const products = productsResponse.map((product) =>
// 		productResponseItemToProductItemType(product),
// 	);

// 	return products;
// };

export const getProductsList = async () => {
	const res = await fetch("", {
		method: "POST",
		body: JSON.stringify({
			query: /* GraphQL */ `
				query getProductsList {
					products(first: 10) {
						id
						name
						description
						image {
							url
						}
						price
					}
				}
			`,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const productsResponse = (await res.json()) as ProductResponseItem[];
	const products = productsResponse.map((product) =>
		productResponseItemToProductItemType(product),
	);

	return products;
};

export const getProductById = async (id: ProductResponseItem["id"]) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	);
	const productsResponse = (await res.json()) as ProductResponseItem;
	return productResponseItemToProductItemType(productsResponse);
};

const executeGraphQl = async <TypedDocumentString, TVariables>(
	query: TypedDocumentString,
	variables: TVariables,
) : Promise<TResult>=> {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("No GRAPHQL_URL provided");
	}

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query: /* GraphQL */ `
				query getProductsList {
					products(first: 10) {
						id
						name
						description
						image {
							url
						}
						price
					}
				}
			`,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	type GraphQLResponse<T> = 
		| {data?: undefined; error: {message: string}[]}
		| {data: T; error?: undefined};	
	}

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if ( graphqlResponse.error ) {
		throw TypeError(graphqlResponse.error[0].message)
	}

	// const productsResponse = (await res.json()) as ProductResponseItem[];
	// const products = productsResponse.map((product) =>
	// 	productResponseItemToProductItemType(product),
	// );

	return graphqlResponse.data;
};
