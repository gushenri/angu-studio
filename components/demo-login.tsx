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
      <h3>Let’s enter the gallery.</h3>
      {/* TODO: Integrar a autenticação quando essa etapa for solicitada. */}
      <p id="login-demo-note">This is a preview. Use made-up details: we do not send or save your data.</p>
      {/* Aqui eu uso rótulos e validação nativa; os campos não têm nome para não compor um envio padrão. */}
      <label htmlFor="login-demo-email">Demo email</label>
      <input id="login-demo-email" type="email" placeholder="you@example.com" autoComplete="off" required />
      <label htmlFor="login-demo-password">Demo password</label>
      <input id="login-demo-password" type="password" placeholder="Use a made-up password" autoComplete="off" required minLength={6} aria-describedby="login-password-note" />
      <small id="login-password-note">At least 6 characters.</small>
      <button type="submit" className="action-button">Try a demo login <HandArrow /></button>
      <p className="login-demo-status" role="status">{submitted ? "Demo complete. No account was accessed." : ""}</p>
    </form>
  );
}
