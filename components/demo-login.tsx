// Aqui eu preparo uma tela de entrada demonstrativa sem autenticação ou envio de credenciais.
"use client";

import { useState } from "react";
import { HandArrow } from "./graphics/hand-arrow";

export function DemoLogin() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form className="demo-login" aria-describedby="login-demo-note" onChange={() => setSubmitted(false)}
      onSubmit={(event) => {
        // Aqui eu interrompo o envio, apago os campos e mostro somente uma confirmação de simulação.
        event.preventDefault();
        event.currentTarget.reset();
        setSubmitted(true);
      }}>
      <h3>Vamos entrar na galeria.</h3>
      {/* TODO: Integrar a autenticação quando essa etapa for solicitada. */}
      <p id="login-demo-note">Estamos em prévia. Use dados fictícios: não enviamos nem salvamos seus dados.</p>
      {/* Aqui eu uso rótulos e validação nativa; os campos não têm nome para não compor um envio padrão. */}
      <label htmlFor="login-demo-email">E-mail de demonstração</label>
      <input id="login-demo-email" type="email" placeholder="voce@exemplo.com" autoComplete="off" required />
      <label htmlFor="login-demo-password">Senha de demonstração</label>
      <input id="login-demo-password" type="password" placeholder="Use uma senha fictícia" autoComplete="off" required minLength={6} aria-describedby="login-password-note" />
      <small id="login-password-note">Pelo menos 6 caracteres.</small>
      <button type="submit" className="action-button">Simular entrada <HandArrow /></button>
      <p className="login-demo-status" role="status">{submitted ? "Concluímos a simulação. Nenhuma conta foi acessada." : ""}</p>
    </form>
  );
}
