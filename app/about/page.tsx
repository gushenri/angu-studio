// Aqui eu importo os recursos e componentes usados nesta parte do site.
import type { Metadata } from "next";
import Image from "next/image";
import { EditorialImage } from "../../components/editorial-image";
import { colagem, recorte } from "../../lib/collection";

// Aqui eu defino o título específico desta página para a aba do navegador e os buscadores.
export const metadata: Metadata = { title: "About | ANZU STUDIO" };

// Aqui eu apresento o manifesto do studio com texto, foto principal e um recorte editorial.
export default function AboutPage() {
  return (
    <article className="manifesto">
      {/* Aqui eu apresento o título do manifesto junto de um grafismo decorativo. */}
      <header className="wide manifesto-head">
        <p className="eyebrow">Our home</p>
        <h1 className="display-title">A N Z U</h1>
        <Image className="sticker-turn" src="/graphics/brilhos-offwhite.svg" alt="" width={140} height={140} />
      </header>
      <div className="wide manifesto-grid">
        {/* Aqui eu destaco a foto principal e priorizo seu carregamento. */}
        <div className="manifesto-photo photo-frame">
          <EditorialImage
            photo={colagem}
            sizes="(min-width: 800px) 53vw, 92vw"
            priority
          />
        </div>
        <div className="manifesto-copy">
          {/* Aqui eu preservo todas as palavras da apresentação original nos parágrafos existentes. */}
          <p>Anzu is a home shaped by many hands. Each collection begins with an artist we curate, bringing their own lines, colors and way of seeing. We make room for that to become clothing. No two collections look alike, because each has a different artist behind it. Curiosity is what connects them.</p>
          <p>We choose artists the way we choose who to talk to: for their work, their story and what is still to come. Here, art leaves the wall and finds a body. It walks the streets, gets creased on the bus, soaks up the sun and stays out late. Each piece carries its creator’s signature and takes on the wearer’s too. There are no rules.</p>
          <p className="manifesto-signature">We’re happy to have you in this gallery in motion.</p>
          {/* Aqui eu complemento o manifesto com uma imagem de recorte. */}
          <div className="manifesto-cutout">
            <EditorialImage
              photo={recorte}
              sizes="(min-width: 800px) 28vw, 62vw"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
