import { Product } from "./product";

export default function ProductContainer() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full mb-20">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}
