// Aqui eu importo os recursos e componentes usados nesta parte do site.
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGallery } from "../../../components/product-gallery";
import { ProductOptions } from "../../../components/product-options";
import { ProductDetails } from "../../../components/product-details";
import { FavoriteButton } from "../../../components/favorite-button";
import { formatPrice, products } from "../../../lib/collection";

// Aqui eu descrevo o parâmetro assíncrono de rota usado pelo App Router do Next.js 15.
type Props = { params: Promise<{ slug: string }> };

// Aqui eu listo os identificadores das peças para gerar suas páginas durante a compilação.
export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

// Aqui eu busco a peça pelo endereço e monto seu título e descrição; se ela não existir, retorno a página 404.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Aqui eu aguardo o identificador da URL antes de procurar a peça na coleção.
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  return { title: `${product.name} | ANZU STUDIO`, description: product.description };
}

// Aqui eu monto a página de cada peça a partir do identificador que aparece na URL.
export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <section className="wide page-section">
      {/* Aqui eu ofereço um caminho de volta para a coleção completa. */}
      <Link href="/shop" className="text-link back-link"><span aria-hidden="true">←</span> Voltar à galeria</Link>
      <div className="product-detail">
        {/* Aqui eu mostro as fotos disponíveis para a peça encontrada. */}
        <ProductGallery photos={product.photos} />
        {/* Aqui eu apresento os dados da peça e a simulação de escolha do tamanho. */}
        <div className="product-info">
          <h1 className="display-title">{product.name}</h1>
          <p className="product-price">{formatPrice(product.price)}</p>
          <p className="product-description">{product.description}</p>
          <ProductOptions sizes={product.sizes} />
          {/* Aqui eu permito salvar a peça e consultar suas informações sem sair da página. */}
          <FavoriteButton slug={product.slug} name={product.name} />
          <ProductDetails product={product} />
        </div>
      </div>
    </section>
  );
}
