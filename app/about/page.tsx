// Aqui eu importo os recursos e componentes usados nesta parte do site.
import type { Metadata } from "next";
import Image from "next/image";
import { EditorialImage } from "../../components/editorial-image";
import { colagem, recorte } from "../../lib/collection";

// Aqui eu defino o título específico desta página para a aba do navegador e os buscadores.
export const metadata: Metadata = { title: "Sobre | ANZU STUDIO" };

// Aqui eu apresento o manifesto do studio com texto, foto principal e um recorte editorial.
export default function AboutPage() {
  return (
    <article className="manifesto">
      {/* Aqui eu apresento o título do manifesto junto de um grafismo decorativo. */}
      <header className="wide manifesto-head">
        <p className="eyebrow">Nossa casa</p>
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
          <p>Anzu é uma casa de muitas mãos. Cada coleção nasce de um artista da nossa curadoria, que chega com o seu traço, a sua cor e o seu jeito de olhar, e nós abrimos espaço para isso virar roupa. Uma coleção nunca se parece com a outra, porque quem assina é sempre outra pessoa. O que fica entre elas é a curiosidade.</p>
          <p>Escolhemos artistas como quem escolhe com quem conversar: pela obra, pela história, pelo que ainda está por acontecer. Aqui a arte sai da parede e vai para o corpo. Anda na rua, amassa no ônibus, toma sol e fica até tarde. Cada peça chega com a autoria de quem criou e ganha a de quem veste. Não há regras.</p>
          <p className="manifesto-signature">É uma alegria que você faça parte dessa galeria em movimento.</p>
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
