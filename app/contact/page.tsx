// Aqui eu importo os recursos e componentes usados nesta parte do site.
import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "../../components/contact-form";

// Aqui eu defino o título específico desta página para a aba do navegador e os buscadores.
export const metadata: Metadata = { title: "Contato | ANZU STUDIO" };

// Aqui eu reúno a apresentação da página de contato e o formulário demonstrativo.
export default function ContactPage() {
  return (
    <section className="wide page-section contact-page">
      <header className="page-heading">
        <p className="eyebrow">Contato</p>
        <h1 className="display-title">Vamos conversar.</h1>
        {/* TODO: Confirmar os canais oficiais de contato com a marca. */}
        <p>Queremos ouvir suas ideias, perguntas e histórias.</p>
        <Image className="sticker-turn" src="/graphics/espiral.svg" alt="" width={152} height={152} />
      </header>
      {/* Aqui eu reutilizo o formulário que simula o envio no navegador. */}
      <ContactForm />
    </section>
  );
}
