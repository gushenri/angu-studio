// Aqui eu habilito os recursos que dependem do navegador, como estado e eventos.
"use client";

// Aqui eu importo os recursos e componentes usados nesta parte do site.
import { useState } from "react";
import { HandArrow } from "./graphics/hand-arrow";

// Aqui eu simulo a escolha de tamanho e mostro a confirmação sem criar uma compra.
export function ProductOptions({ sizes }: { sizes: readonly string[] }) {
  // Aqui eu guardo a mensagem que confirma a seleção de tamanho.
  const [confirmation, setConfirmation] = useState("");

  return (
    <form
      className="product-options"
      onSubmit={(event) => {
        // Aqui eu impeço o recarregamento da página e leio o tamanho marcado no formulário.
        event.preventDefault();
        const size = new FormData(event.currentTarget).get("tamanho");
        if (typeof size === "string") setConfirmation(`Tamanho ${size} escolhido. Estamos em prévia: nenhuma compra foi feita.`);
      }}
    >
      {/* Aqui eu agrupo os tamanhos; os botões de opção permitem escolher apenas um. */}
      <fieldset>
        <legend className="eyebrow">Tamanho</legend>
        <div className="size-options">
          {sizes.map((size) => (
            <label key={size}>
              {/* Aqui eu exijo uma escolha e limpo a confirmação anterior quando o tamanho muda. */}
              <input className="sr-only" type="radio" name="tamanho" value={size} required onChange={() => setConfirmation("")} />
              <span>{size}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <button type="submit" className="action-button">Vestir esta peça <HandArrow /></button>
      {/* Aqui eu anuncio a confirmação também para quem usa leitor de tela. */}
      <p role="status">{confirmation}</p>
    </form>
  );
}
