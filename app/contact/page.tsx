// Aqui eu importo os recursos e componentes usados nesta parte do site.
import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "../../components/contact-form";

// Aqui eu defino o título específico desta página para a aba do navegador e os buscadores.
export const metadata: Metadata = { title: "Contact | ANZU STUDIO" };

// Aqui eu reúno a apresentação da página de contato e o formulário demonstrativo.
export default function ContactPage() {
  return (
    <section className="wide page-section contact-page">
      <header className="page-heading">
        <p className="eyebrow">Contact</p>
        <h1 className="display-title">Let’s talk.</h1>
        {/* TODO: Confirmar os canais oficiais de contato com a marca. */}
        <p>We’d love to hear your ideas, questions and stories.</p>
        <Image className="sticker-turn" src="/graphics/espiral.svg" alt="" width={152} height={152} />
      </header>
      {/* Aqui eu reutilizo o formulário que simula o envio no navegador. */}
      <ContactForm />
    </section>
  );
}
