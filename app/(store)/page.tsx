import ProductView from "@/components/productView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {

  const products = await getAllProducts();
  const categories = await getAllCategories();

  return (
    <div>
      <h1>Hello World 123</h1>
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
  <ProductView products={products} categories={categories} />
</div>
    </div>
  );
}
