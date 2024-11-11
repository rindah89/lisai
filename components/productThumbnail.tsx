import { Product } from "@/sanity.types";
import Link from "next/link";
import Image from "next/image";
import { imageUrl } from "@/lib/imageUrl";

export default function ProductThumbnail({product}: {product: Product}) {
    const isOutOfStock = product.stock != null && product.stock <= 0;

    return (
        <Link 
            href={`/products/${product.slug?.current}`}
            className={`group flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 ${isOutOfStock ? "opacity-50 pointer-events-none" : ""}`}
        >
            <div className="relative aspect-square w-full h-full overflow-hidden">
                {product.image && (
                    <Image
                        src={imageUrl(product.image).url()} 
                        alt={product.name || 'Product Image'} 
                        fill 
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                    />
                )}

                {isOutOfStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <span className="text-white text-lg font-bold">Out of Stock</span>
                    </div>
                )}
            </div>    

            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                    {product.description?.map((block) => (
                        block._type === 'block' 
                            ? block.children?.map(child => child.text).join(' ') 
                            : null
                    )).join(' ') || 'No description available'}
                </p>
                <p className="mt-2 text-lg font-semibold text-gray-800">
                   ${product.price?.toFixed(2)}
                </p>
            </div>  
        </Link>
    );
}