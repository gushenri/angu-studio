// Aqui eu importo a fotografia, os grafismos e os estilos exclusivos desta abertura.
import Image from "next/image";
import { OrganicRing } from "./graphics/organic-ring";
import styles from "./home-hero.module.css";

// Aqui eu componho uma capa editorial em camadas, sem alterar o restante da página.
export function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      {/* Aqui eu uso pequenas marcações editoriais sem inventar datas ou informações da marca. */}
      <div className={styles.meta}>
        <p><span aria-hidden="true">01 / </span>Nossa curadoria</p>
        <span>anzu studio</span>
      </div>

      {/* Aqui eu mantenho o título como texto acessível, mesmo quando ele se sobrepõe à fotografia. */}
      <h1 id="hero-title" className={styles.title} aria-label="Muitas mãos.">
        <span>Muitas </span>
        <span className={styles.titleSecond}>mãos<span className={styles.period}>.</span></span>
      </h1>

      {/* Aqui eu reutilizo o recorte transparente já existente para integrar a modelo à composição. */}
      <div className={styles.photo}>
        <Image
          src="/images/retrato-recorte.webp"
          alt="Modelo de óculos coloridos veste camiseta creme e jaqueta azul, entre estrelas e rabiscos da Anzu studio."
          fill
          priority
          sizes="(min-width: 1600px) 992px, (min-width: 760px) 62vw, 100vw"
        />
      </div>

      {/* Aqui eu conecto a foto e a etiqueta com um traço orgânico, sem acrescentar conteúdo à leitura. */}
      <div className={styles.orbit} aria-hidden="true"><OrganicRing /></div>
      <Image className={styles.spiral} src="/graphics/espiral.svg" alt="" width={112} height={112} />
      <Image className={styles.spark} src="/graphics/brilhos-offwhite.svg" alt="" width={112} height={112} />

      {/* Aqui eu deixo a frase de apoio em uma área de respiro, separada das letras grandes. */}
      <div className={styles.caption}>
        <span className={styles.captionMark} aria-hidden="true">↳</span>
        <p>Cada coleção tem um artista por trás.</p>
      </div>

      {/* Aqui eu transformo o acesso à coleção em uma etiqueta irregular, preservando a âncora existente. */}
      <a href="#colecao" className={styles.collection}>
        <span>Ver<br />coleção</span>
        <span className={styles.arrow} aria-hidden="true">↗</span>
      </a>

      <div className={styles.footer}>
        <span>Feito por muitas mãos</span>
        <span className={styles.signature}>Fora da moldura.</span>
      </div>
    </section>
  );
}
