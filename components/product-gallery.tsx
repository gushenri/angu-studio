// Aqui eu habilito os recursos que dependem do navegador, como estado e eventos.
"use client";

// Aqui eu importo os recursos e componentes usados nesta parte do site.
import { useState } from "react";
import type { EditorialImage as Photo } from "../lib/collection";
import { EditorialImage } from "./editorial-image";

// Aqui eu permito trocar a foto principal da peça pelas miniaturas disponíveis.
export function ProductGallery({ photos }: { photos: readonly Photo[] }) {
  // Aqui eu guardo o índice da foto selecionada; o índice zero mostra a primeira foto.
  const [current, setCurrent] = useState(0);

  return (
    <div className="product-gallery" aria-label="Galeria da peça" role="group">
      {/* Aqui eu mostro a foto escolhida e priorizo o carregamento da primeira imagem. */}
      <div className="gallery-main photo-frame" id="product-photo">
        <EditorialImage photo={photos[current]} sizes="(min-width: 1200px) 620px, (min-width: 760px) 55vw, 92vw" priority={current === 0} />
      </div>
      {/* Aqui eu só exibo miniaturas quando a peça tem mais de uma foto. */}
      {photos.length > 1 && (
        <div className="gallery-thumbs">
          {photos.map((photo, index) => (
            <button
              type="button"
              key={photo.src}
              className="gallery-thumb"
              aria-label={`Ver foto ${index + 1}: ${photo.alt}`}
              aria-pressed={index === current}
              aria-controls="product-photo"
              onClick={() => setCurrent(index)}
            >
              {/* Aqui eu deixo a miniatura sem descrição porque o botão já identifica a foto. */}
              <EditorialImage photo={{ ...photo, alt: "" }} sizes="76px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
