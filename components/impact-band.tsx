// Aqui eu habilito os recursos que dependem do navegador, como estado e eventos.
"use client";

// Aqui eu importo os recursos e componentes usados nesta parte do site.
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Aqui eu desloco a frase de destaque de acordo com a rolagem da página.
export function ImpactBand() {
  // Aqui eu identifico a faixa para medir sua passagem pela área visível da tela.
  const band = useRef<HTMLDivElement>(null);
  const phrase = useRef<HTMLParagraphElement>(null);
  const [distance, setDistance] = useState(0);

  // Aqui eu meço o texto para limitar o movimento ao espaço que realmente existe fora da faixa.
  useEffect(() => {
    const container = band.current;
    const text = phrase.current;
    if (!container || !text) return;

    function measure() {
      if (!container || !text) return;
      const overflow = Math.max(0, text.offsetWidth - container.clientWidth);
      setDistance(Math.min(text.offsetWidth * 0.05, overflow));
    }

    measure();
    // Aqui eu recalculo o limite quando a tela muda ou a fonte altera a largura da frase.
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    observer.observe(text);
    return () => observer.disconnect();
  }, []);

  // Aqui eu acompanho a faixa desde sua entrada pela parte inferior até sua saída pelo topo.
  const { scrollYProgress } = useScroll({ target: band, offset: ["start end", "end start"] });
  // Aqui eu mantenho o sentido para a direita e paro no início do texto, sem ultrapassá-lo ao continuar rolando.
  const x = useTransform(scrollYProgress, [0, 0.5], [-distance, 0], { clamp: true });
  // Aqui eu mantenho a faixa parada quando a pessoa prefere menos movimento.
  const reduceMotion = useReducedMotion();

  return (
    <div ref={band} className="impact-band">
      <motion.p ref={phrase} style={{ x: reduceMotion ? 0 : x }}>
        <span>Art on your body.</span>
        {/* Aqui eu repito a frase para sustentar o deslocamento sem duplicar sua leitura por tecnologias assistivas. */}
        <span aria-hidden="true"> Art on your body.</span>
        <span aria-hidden="true"> Art on your body.</span>
        <span aria-hidden="true"> Art on your body.</span>
      </motion.p>
    </div>
  );
}
