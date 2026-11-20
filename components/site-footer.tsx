import Link from "next/link";
import { HandArrow } from "./graphics/hand-arrow";

// Aqui eu encerro as páginas com a assinatura do studio, navegação e acesso ao contato existente.
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wide footer-grid">
        <div className="footer-brand">
          <Link href="/" className="wordmark" aria-label="Anzu studio, home"><span className="wordmark-script">anzu</span><span className="wordmark-studio">studio</span></Link>
          <p>Anzu.<br />A gallery in motion.</p>
        </div>
        <nav aria-label="Footer navigation">
          <p className="eyebrow">Around here</p>
          <ul><li><Link href="/shop">The collections</Link></li><li><Link href="/about">The studio</Link></li><li><Link href="/contact">Contact</Link></li></ul>
        </nav>
        <div className="footer-contact">
          <p className="eyebrow">Let’s talk?</p>
          <Link href="/contact" className="text-link">Start a conversation <HandArrow /></Link>
          {/* TODO: Incluir e-mail e redes sociais após confirmar os canais oficiais da marca. */}
          <p>[email and social links]</p>
        </div>
      </div>
      <div className="wide footer-bottom">
        <span>Anzu studio</span>
        <span>A home shaped by many hands.</span>
        {/* Aqui eu incluo meu crédito com acesso ao GitHub em uma nova aba. */}
        <a className="footer-developer" href="https://github.com/gushenri" target="_blank" rel="noopener noreferrer">
          Developed by Gustavo Henrique <span aria-hidden="true">↗</span>
          <span className="sr-only"> (GitHub, opens in a new tab)</span>
        </a>
      </div>
    </footer>
  );
}
