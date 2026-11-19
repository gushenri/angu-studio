// Aqui eu habilito os recursos que dependem do navegador, como estado e eventos.
"use client";

// Aqui eu importo os recursos e componentes usados nesta parte do site.
import { useState } from "react";
import { HandArrow } from "./graphics/hand-arrow";

// Aqui eu simulo o envio do formulário no navegador, sem transmitir ou salvar os dados.
export function ContactForm() {
  // Aqui eu guardo se a simulação foi concluída; editar os campos apaga a confirmação.
  const [submitted, setSubmitted] = useState(false);

  return (
    <form className="contact-form" aria-describedby="contact-note" onChange={() => setSubmitted(false)} onSubmit={(event) => {
      // Aqui eu impeço o envio real e atualizo somente a mensagem de confirmação.
      event.preventDefault();
      setSubmitted(true);
    }}>
      {/* Aqui eu associo cada rótulo ao campo e uso a validação nativa dos dados obrigatórios. */}
      <label htmlFor="contact-name">Nome</label>
      <input id="contact-name" name="nome" autoComplete="name" required />
      <label htmlFor="contact-email">E-mail</label>
      <input id="contact-email" name="email" type="email" autoComplete="email" required />
      <label htmlFor="contact-message">Mensagem</label>
      <textarea id="contact-message" name="mensagem" rows={5} required />
      {/* Aqui eu aviso que o formulário é demonstrativo antes da ação de envio. */}
      <p id="contact-note">Estamos ensaiando esta conversa. O envio é demonstrativo.</p>
      <button type="submit" className="action-button">Simular conversa <HandArrow /></button>
      {/* Aqui eu anuncio o resultado da simulação de forma acessível. */}
      <p role="status">{submitted ? "Concluímos a simulação. Sua mensagem não foi enviada." : ""}</p>
    </form>
  );
}
