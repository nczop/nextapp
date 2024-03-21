import Image from "next/image";

export const ProductCoverImage = ({
	alt,
	src,
}: {
	alt: string;
	src: string;
}) => {
	return (
		<div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg bg-gray-200">
			<Image
				alt={alt}
				src={src}
				width={320}
				height={320}
				className="h-full w-full object-cover object-center group-hover:opacity-75"
			/>
		</div>
	);
};
