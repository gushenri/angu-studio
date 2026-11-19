import Link from "next/link";
import { HandArrow } from "./graphics/hand-arrow";

// Aqui eu encerro as páginas com a assinatura do studio, navegação e acesso ao contato existente.
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wide footer-grid">
        <div className="footer-brand">
          <Link href="/" className="wordmark" aria-label="Anzu studio, início"><span className="wordmark-script">anzu</span><span className="wordmark-studio">studio</span></Link>
          <p>Anzu.<br />Uma galeria em movimento.</p>
        </div>
        <nav aria-label="Navegação do rodapé">
          <p className="eyebrow">Por aqui</p>
          <ul><li><Link href="/shop">As coleções</Link></li><li><Link href="/about">O studio</Link></li><li><Link href="/contact">Contato</Link></li></ul>
        </nav>
        <div className="footer-contact">
          <p className="eyebrow">Vamos conversar?</p>
          <Link href="/contact" className="text-link">Puxar conversa <HandArrow /></Link>
          {/* TODO: Incluir e-mail e redes sociais após confirmar os canais oficiais da marca. */}
          <p>[e-mail e redes sociais]</p>
        </div>
      </div>
      <div className="wide footer-bottom">
        <span>Anzu studio</span>
        <span>Uma casa de muitas mãos.</span>
        {/* Aqui eu incluo meu crédito com acesso ao GitHub em uma nova aba. */}
        <a className="footer-developer" href="https://github.com/gushenri" target="_blank" rel="noopener noreferrer">
          Desenvolvido por Gustavo Henrique <span aria-hidden="true">↗</span>
          <span className="sr-only"> (GitHub, abre em nova aba)</span>
        </a>
      </div>
    </footer>
  );
}
