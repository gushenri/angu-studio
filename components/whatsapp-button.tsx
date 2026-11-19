import { WhatsAppIcon } from "./graphics/whatsapp-icon";

// Aqui eu abro diretamente a conversa com o número informado, usando 55 como código do Brasil e 41 como DDD.
export function WhatsAppButton() {
  return (
    <a className="whatsapp-float" href="https://wa.me/5541999938312" target="_blank" rel="noopener noreferrer"
      aria-label="Conversar com a Anzu studio pelo WhatsApp (abre em nova aba)" title="Vamos conversar pelo WhatsApp">
      <WhatsAppIcon />
    </a>
  );
}
