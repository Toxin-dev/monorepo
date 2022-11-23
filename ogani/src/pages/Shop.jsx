import { useEffect, useState } from "react";
import { Products } from "../components/Products";
import { fetchProduct } from "../db/product";
let initial = true;
export function Shop(props) {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    if (initial) {
      initial = false;
      fetchProduct().then((res) => setProducts(res));
    }
  }, []);
  return (
    <section className="page-shope">
      <Products product={products} />
    </section>
  );
}
