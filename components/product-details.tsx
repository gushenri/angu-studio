import type { Product } from "../lib/collection";

// Aqui eu apresento informações da peça em seções expansíveis, sem inventar dados técnicos da marca.
export function ProductDetails({ product }: { product: Product }) {
  const details = product.details;

  return (
    <div className="product-specs">
      <h2 className="eyebrow">Vamos olhar de perto</h2>
      <details open>
        <summary>Medidas <span aria-hidden="true">+</span></summary>
        {/* TODO: Preencher as medidas reais de cada tamanho após validação das peças. */}
        <div className="product-specs-content">
          <p>Vamos comparar com uma peça sua, apoiada em uma superfície plana.</p>
          <div className="measurements-scroll" role="region" aria-label="Tabela de medidas" tabIndex={0}>
            <table>
              <caption>Medidas da peça em centímetros.</caption>
              <thead><tr><th scope="col">Tamanho</th><th scope="col">Largura</th><th scope="col">{product.slug === "sacola-portal" ? "Altura" : "Comprimento"}</th></tr></thead>
              <tbody>{product.sizes.map((size) => {
                const measurements = details?.measurements?.find((item) => item.size === size);
                return <tr key={size}><th scope="row">{size}</th><td>{measurements?.widthCm ?? "[medida em cm]"}</td><td>{measurements?.lengthCm ?? "[medida em cm]"}</td></tr>;
              })}</tbody>
            </table>
          </div>
        </div>
      </details>
      <details>
        <summary>Composição <span aria-hidden="true">+</span></summary>
        {/* TODO: Confirmar tecidos e percentuais; não deduzir a composição pela fotografia. */}
        <div className="product-specs-content"><p>{details?.composition ?? "[composição da peça]"}</p></div>
      </details>
      <details>
        <summary>Artista <span aria-hidden="true">+</span></summary>
        {/* Aqui eu apresento a autoria da coleção sem inventar nomes ou histórias. */}
        {/* TODO: Preencher o artista responsável por cada coleção no cadastro das peças. */}
        <div className="product-specs-content">
          <p><strong>{product.artist?.name ?? "[nome do artista]"}</strong></p>
          <p>Convidado da nossa curadoria.</p>
          <p>{product.artist?.bio ?? "[apresentação do artista]"}</p>
        </div>
      </details>
      <details>
        <summary>Cuidados <span aria-hidden="true">+</span></summary>
        {/* TODO: Preencher as instruções de conservação específicas e aprovadas para cada peça. */}
        <div className="product-specs-content">
          {details?.care?.length ? <ul>{details.care.map((care) => <li key={care}>{care}</li>)}</ul> : <p>[cuidados com a peça]</p>}
        </div>
      </details>
    </div>
  );
}
