// Aqui eu importo os recursos e componentes usados nesta parte do site.
import Image from "next/image";
import { OrganicRing } from "./graphics/organic-ring";
import styles from "./home-hero.module.css";

// Aqui eu monto a abertura da página inicial com foto, título e acesso à coleção.
export function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      {/* Aqui eu priorizo a foto de abertura e informo o espaço que ela ocupa em cada tamanho de tela. */}
      <div className={styles.photo}>
        <Image
          src="/images/retrato-anzu-sol.png"
          alt="Model in colorful glasses and a blue jacket, surrounded by doodles against the sky."
          fill
          priority
          sizes="(min-width: 1440px) 720px, (min-width: 900px) 50vw, 100vw"
        />
      </div>

      {/* Aqui eu combino o grafismo decorativo com o título e o texto de apresentação. */}
      <div className={styles.editorial}>
        <Image
          src="/graphics/brilhos-offwhite.svg"
          alt=""
          width={120}
          height={120}
          className={styles.sticker}
        />
        {/* TODO: Validar o título e o texto de abertura com a marca. */}
        <p className={styles.kicker}>Our curation</p>
        <h1 id="hero-title" className={styles.title}>
          <span>Many </span>
          <span>hands<span className={styles.period}>.</span></span>
        </h1>
        <p className={styles.copy}>An artist behind every collection.</p>
      </div>

      {/* Aqui eu levo a pessoa até a coleção e destaco o botão com um contorno desenhado em SVG. */}
      <div className={styles.action}>
        <a href="#colecao" className={styles.collection}>
          <span>View<br />collection</span>
          <span aria-hidden="true" className={styles.arrow}>↘</span>
        </a>
        <OrganicRing />
      </div>
    </section>
  );
}
