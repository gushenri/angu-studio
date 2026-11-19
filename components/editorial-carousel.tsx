// Aqui eu habilito os recursos que dependem do navegador, como estado e eventos.
"use client";

// Aqui eu importo os recursos e componentes usados nesta parte do site.
import { useCallback, useEffect, useRef, useState } from "react";
import { products } from "../lib/collection";
import { ProductCard } from "./product-card";
import { HandArrow } from "./graphics/hand-arrow";

// Aqui eu apresento todas as peças do catálogo em cartões que podem ser percorridos horizontalmente.
export function EditorialCarousel() {
  // Aqui eu guardo a referência à faixa para consultar e alterar sua rolagem.
  const track = useRef<HTMLUListElement>(null);
  // Aqui eu acompanho as extremidades da faixa para desabilitar as setas sem destino.
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Aqui eu comparo a posição e a largura da faixa, com tolerância de dois pixels para arredondamentos.
  const updateControls = useCallback(() => {
    const list = track.current;
    if (!list) return;
    setAtStart(list.scrollLeft <= 2);
    setAtEnd(list.scrollLeft + list.clientWidth >= list.scrollWidth - 2);
  }, []);

  // Aqui eu atualizo as setas na abertura e quando a largura da faixa ou dos cartões muda.
  useEffect(() => {
    const list = track.current;
    if (!list) return;
    updateControls();
    const observer = new ResizeObserver(updateControls);
    observer.observe(list);
    Array.from(list.children).forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [updateControls]);

  // Aqui eu recebo -1 para voltar ou 1 para avançar até a próxima peça fora da posição atual.
  function step(direction: -1 | 1) {
    const list = track.current;
    const first = list?.firstElementChild;
    if (!list || !first) return;
    // Aqui eu calculo a distância de cada cartão até a posição atual da rolagem.
    const start = first.getBoundingClientRect().left + list.scrollLeft;
    const offsets = Array.from(list.children, (slide) => slide.getBoundingClientRect().left - start);
    // Aqui eu procuro a peça seguinte ou anterior usando a direção escolhida.
    const distance = direction === 1
      ? offsets.find((offset) => offset > 2)
      : offsets.findLast((offset) => offset < -2);
    // Aqui eu desloco a faixa e evito a rolagem suave quando a pessoa prefere menos movimento.
    list.scrollBy({
      left: distance ?? direction * list.clientWidth,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }

  return (
    <section className="lookbook" aria-labelledby="lookbook-title">
      <div className="wide section-heading">
        <h2 className="display-title" id="lookbook-title">Em movimento.</h2>
        {/* Aqui eu ofereço botões com nomes acessíveis para percorrer as peças. */}
        <div className="carousel-controls">
          <button type="button" className="round-arrow previous" aria-label="Peça anterior" aria-controls="lookbook-track" disabled={atStart} onClick={() => step(-1)}>
            <HandArrow />
          </button>
          <button type="button" className="round-arrow" aria-label="Próxima peça" aria-controls="lookbook-track" disabled={atEnd} onClick={() => step(1)}>
            <HandArrow />
          </button>
        </div>
      </div>
      {/* Aqui eu também permito percorrer a faixa por toque, rolagem ou teclado. */}
      <ul ref={track} id="lookbook-track" className="carousel-track" tabIndex={0} aria-label="Peças da coleção" onScroll={updateControls}>
        {products.map((product) => (
          <li key={product.slug} className="product-card">
            {/* Aqui eu reutilizo o cartão da loja com foto, nome, preço e favoritos. */}
            <ProductCard product={product} carousel />
          </li>
        ))}
      </ul>
    </section>
  );
}
