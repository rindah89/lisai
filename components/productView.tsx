import { Category, Product } from "@/sanity.types";
import ProductGrid from "./productGrid";

interface ProductViewProps {
  products: Product[];
  categories: Category[];
}
const ProductView = ({ products, categories }: ProductViewProps) => {
  return <div className="flex flex-col sm:flex-row">
   
 {/* <div className="w-full sm:w-[200px]">
  <CategoriesSelectorComponent categories={categories} />
 </div> */}
    
    <div className="flex-1">
        <div>
            <ProductGrid products={products} />
            <hr className="w-1/2 sm:w-3/4"/>
        </div>
    </div>
    
     </div>;
};

export default ProductView;
