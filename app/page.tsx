// Aqui eu importo os recursos e componentes usados nesta parte do site.
import Image from "next/image";
import Link from "next/link";
import { EditorialCarousel } from "../components/editorial-carousel";
import { HandArrow } from "../components/graphics/hand-arrow";
import { HomeHero } from "../components/home-hero";
import { ImpactBand } from "../components/impact-band";
import { ProductGrid } from "../components/product-grid";
import { products } from "../lib/collection";

// Aqui eu organizo a página inicial: abertura, coleção, editorial e convite para visitar a loja.
export default function Home() {
  return (
    <>
      {/* Aqui eu começo pela apresentação visual do studio. */}
      <HomeHero />
      {/* TODO: Validar os textos editoriais e de coleção com a marca. */}
      <ImpactBand />
      <section className="wide collection-section" id="colecao" aria-labelledby="collection-title">
        <div className="section-heading">
          <h2 className="display-title" id="collection-title">Uma coleção, uma assinatura.</h2>
          <Link href="/shop" className="text-link">Conhecer a coleção <HandArrow /></Link>
        </div>
        {/* Aqui eu destaco apenas as duas primeiras peças; a loja apresenta a lista completa. */}
        <ProductGrid products={products.slice(0, 2)} />
      </section>
      {/* Aqui eu mostro o editorial em uma faixa de fotos navegável. */}
      <EditorialCarousel />
      {/* Aqui eu encerro a página com outro acesso à coleção e um adesivo decorativo. */}
      <section className="collection-cta">
        <div className="wide">
          <div>
            <h2 className="display-title">A arte vai com você.</h2>
            <Link href="/shop" className="action-button">Entrar na galeria <HandArrow /></Link>
          </div>
          <Image className="sticker-turn" src="/graphics/laco.svg" width={210} height={210} alt="" />
        </div>
      </section>
    </>
  );
}
