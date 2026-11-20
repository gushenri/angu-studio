import type { Product } from "../lib/collection";

// Aqui eu apresento informações da peça em seções expansíveis, sem inventar dados técnicos da marca.
export function ProductDetails({ product }: { product: Product }) {
  const details = product.details;

  return (
    <div className="product-specs">
      <h2 className="eyebrow">Let’s take a closer look</h2>
      <details open>
        <summary>Measurements <span aria-hidden="true">+</span></summary>
        {/* TODO: Preencher as medidas reais de cada tamanho após validação das peças. */}
        <div className="product-specs-content">
          <p>Compare with a piece you own, laid on a flat surface.</p>
          <div className="measurements-scroll" role="region" aria-label="Size chart" tabIndex={0}>
            <table>
              <caption>Garment measurements in centimeters.</caption>
              <thead><tr><th scope="col">Size</th><th scope="col">Width</th><th scope="col">{product.slug === "sacola-portal" ? "Height" : "Length"}</th></tr></thead>
              <tbody>{product.sizes.map((size) => {
                const measurements = details?.measurements?.find((item) => item.size === size);
                return <tr key={size}><th scope="row">{size}</th><td>{measurements?.widthCm ?? "[measurement in cm]"}</td><td>{measurements?.lengthCm ?? "[measurement in cm]"}</td></tr>;
              })}</tbody>
            </table>
          </div>
        </div>
      </details>
      <details>
        <summary>Composition <span aria-hidden="true">+</span></summary>
        {/* TODO: Confirmar tecidos e percentuais; não deduzir a composição pela fotografia. */}
        <div className="product-specs-content"><p>{details?.composition ?? "[fabric composition]"}</p></div>
      </details>
      <details>
        <summary>Artist <span aria-hidden="true">+</span></summary>
        {/* Aqui eu apresento a autoria da coleção sem inventar nomes ou histórias. */}
        {/* TODO: Preencher o artista responsável por cada coleção no cadastro das peças. */}
        <div className="product-specs-content">
          <p><strong>{product.artist?.name ?? "[artist name]"}</strong></p>
          <p>A guest artist selected by our studio.</p>
          <p>{product.artist?.bio ?? "[artist bio]"}</p>
        </div>
      </details>
      <details>
        <summary>Care <span aria-hidden="true">+</span></summary>
        {/* TODO: Preencher as instruções de conservação específicas e aprovadas para cada peça. */}
        <div className="product-specs-content">
          {details?.care?.length ? <ul>{details.care.map((care) => <li key={care}>{care}</li>)}</ul> : <p>[care instructions]</p>}
        </div>
      </details>
    </div>
  );
}
