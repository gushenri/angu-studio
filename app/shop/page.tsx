// Aqui eu importo os recursos e componentes usados nesta parte do site.
import type { Metadata } from "next";
import { ProductGrid } from "../../components/product-grid";
import { products } from "../../lib/collection";

// Aqui eu defino o título específico desta página para a aba do navegador e os buscadores.
export const metadata: Metadata = { title: "Coleções | ANZU STUDIO" };

// Aqui eu apresento a coleção completa usando a mesma grade de produtos da página inicial.
export default function ShopPage() {
  return (
    <section className="wide page-section">
      {/* TODO: Confirmar a apresentação da coleção. */}
      <header className="page-heading">
        <p className="eyebrow">Coleções</p>
        <h1 className="display-title">Nossa galeria.</h1>
        <p>Cada coleção tem um artista por trás.</p>
      </header>
      {/* Aqui eu identifico a lista para leitores de tela sem acrescentar um título visível. */}
      <h2 className="sr-only">Peças da coleção</h2>
      <ProductGrid products={products} />
    </section>
  );
}
