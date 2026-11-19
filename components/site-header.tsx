// Aqui eu importo os recursos e componentes usados nesta parte do site.
import Link from "next/link";
import { HeaderActions } from "./header-actions";
import { SiteMenu } from "./site-menu";

// Aqui eu monto o cabeçalho compartilhado, com a assinatura, os atalhos da loja e o menu.
export function SiteHeader() {
  return (
    <header className="site-header">
      {/* Aqui eu faço a assinatura funcionar como um atalho para a página inicial. */}
      <Link href="/" aria-label="Anzu Studio, início" className="wordmark">
        <span className="wordmark-script">anzu</span>
        <span className="wordmark-studio">studio</span>
      </Link>
      {/* Aqui eu agrupo login, busca e favoritos ao lado do menu principal. */}
      <div className="header-actions">
        <HeaderActions />
        <SiteMenu />
      </div>
    </header>
  );
}
