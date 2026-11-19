// Aqui eu importo os recursos e componentes usados nesta parte do site.
import type { Product } from "../lib/collection";
import { ProductCard } from "./product-card";

// Aqui eu transformo a lista de peças em cartões com foto, nome, preço e link para os detalhes.
export function ProductGrid({ products }: { products: readonly Product[] }) {
  return (
    <ul className="product-grid">
      {/* Aqui eu crio um cartão por peça e uso seu identificador como chave estável da lista. */}
      {products.map((product) => (
        <li key={product.slug} className="product-card">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
