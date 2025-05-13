import { AccordionDemo } from "@/components/accordion";
import { Category } from "@/components/category";
import Header from "@/components/header";
import { MyMenu } from "@/components/my-menu";
import ProductContainer from "@/components/product-container";
import { SearchBar } from "@/components/search-bar";

export default function Page() {
  return (
    <div className="w-full">
      <Header />
      <div className="my-5 mx-2">
        <SearchBar />
        <Category />
      </div>
      <div className="mx-2.5">
        <ProductContainer />
      </div>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 py-2">
        <MyMenu />
      </div>
    </div>
  );
}
