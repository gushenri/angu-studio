// Aqui eu importo os recursos e componentes usados nesta parte do site.
import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { FavoritesProvider } from "../components/favorites-provider";
import { WhatsAppButton } from "../components/whatsapp-button";
import "./globals.css";

// Aqui eu carrego a fonte local de leitura e disponibilizo seu nome em uma variável CSS.
const outfit = localFont({
  src: "./fonts/outfit.woff2",
  weight: "100 900",
  variable: "--font-outfit",
  display: "swap",
});

// Aqui eu carrego a fonte manuscrita usada na assinatura e nos detalhes da marca.
const kaushan = localFont({
  src: "./fonts/kaushan-script.woff2",
  weight: "400",
  variable: "--font-kaushan",
  display: "swap",
});

// Aqui eu defino o título e a descrição padrão usados pelo navegador e pelos buscadores.
export const metadata: Metadata = {
  title: "ANZU STUDIO",
  // TODO: Revisar a descrição com o texto final da marca.
  description: "Anzu studio. Cada coleção nasce de um artista da nossa curadoria. Uma galeria em movimento.",
};

// Aqui eu monto a estrutura comum de todas as páginas, com fontes, cabeçalho e área principal.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${kaushan.variable}`}>
      <body>
        {/* Aqui eu ofereço um atalho para quem navega pelo teclado chegar direto ao conteúdo. */}
        <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
        {/* Aqui eu compartilho os favoritos sem perder a seleção ao navegar entre páginas. */}
        <FavoritesProvider>
          <SiteHeader />
          {/* Aqui eu recebo o conteúdo da rota atual dentro da estrutura compartilhada. */}
          <main id="conteudo" tabIndex={-1}>{children}</main>
          <SiteFooter />
        </FavoritesProvider>
        {/* Aqui eu mantenho o acesso ao WhatsApp disponível em todas as páginas do studio. */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
