// Aqui eu reúno a apresentação da peça para reutilizar o mesmo cartão na grade e no carrossel.
import Link from "next/link";
import { formatPrice, type Product } from "../lib/collection";
import { EditorialImage } from "./editorial-image";
import { HandArrow } from "./graphics/hand-arrow";
import { FavoriteButton } from "./favorite-button";

export function ProductCard({ product, carousel = false }: { product: Product; carousel?: boolean }) {
  return (
    <>
      {/* Aqui eu mantenho o coração fora do link para guardar a peça sem abrir outra página. */}
      <FavoriteButton slug={product.slug} name={product.name} compact />
      <Link href={`/shop/${product.slug}`} className="product-link">
        {/* Aqui eu adapto a proporção e o tamanho esperado da foto ao lugar em que o cartão aparece. */}
        <div className={`${carousel ? "carousel-product-photo" : "product-photo"} photo-frame`}>
          <EditorialImage photo={product.photos[0]} sizes={carousel ? "(min-width: 493px) 384px, 78vw" : "(min-width: 1200px) 600px, (min-width: 700px) 50vw, 92vw"} />
        </div>
        <div className="product-caption">
          <div><h3>{product.name}</h3><p>{formatPrice(product.price)}</p></div>
          <span className="round-arrow" aria-hidden="true"><HandArrow /></span>
        </div>
      </Link>
    </>
  );
}
