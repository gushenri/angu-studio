// Aqui eu habilito os recursos que dependem do navegador, como estado e eventos.
"use client";

// Aqui eu importo os recursos e componentes usados nesta parte do site.
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { MenuIcon } from "./graphics/menu-icon";

// Aqui eu centralizo os nomes e endereços que aparecem no menu.
const sections = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// Aqui eu controlo o menu lateral, os links de navegação e o foco ao abrir e fechar o painel.
export function SiteMenu() {
  // Aqui eu consulto a rota atual para identificar o link correspondente no menu.
  const pathname = usePathname();
  // Aqui eu guardo referências ao painel e ao botão para controlar abertura e foco.
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  // Aqui eu acompanho a abertura do menu para atualizar a animação e os atributos de acessibilidade.
  const [isOpen, setIsOpen] = useState(false);
  // Aqui eu consulto a preferência de movimento para remover a duração da animação quando necessário.
  const reduceMotion = useReducedMotion();

  // Aqui eu abro o diálogo nativo, que concentra a navegação por teclado no menu.
  function openMenu() {
    dialog.current?.showModal();
    setIsOpen(true);
  }

  // Aqui eu fecho o diálogo e atualizo o estado visual do botão e do painel.
  function closeMenu() {
    dialog.current?.close();
    setIsOpen(false);
  }

  return (
    <>
      {/* Aqui eu conecto o botão ao diálogo e informo se o menu está aberto. */}
      <button
        ref={trigger}
        type="button"
        aria-haspopup="dialog"
        aria-controls="site-menu"
        aria-expanded={isOpen}
        className="menu-toggle"
        onClick={openMenu}
      >
        <span>Menu</span>
        <MenuIcon />
      </button>

      {/* Aqui eu uso um diálogo nativo para exibir o menu sobre o conteúdo. */}
      <dialog
        ref={dialog}
        id="site-menu"
        aria-labelledby="menu-heading"
        className="site-menu"
        onClose={() => {
          // Aqui eu sincronizo o estado ao fechar, inclusive pela tecla Escape, e devolvo o foco ao botão.
          setIsOpen(false);
          trigger.current?.focus();
        }}
        onClick={(event) => {
          // Aqui eu fecho o menu somente quando o clique acontece fora do painel.
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        {/* Aqui eu deslizo o painel pela lateral respeitando a preferência de movimento. */}
        <motion.div
          className="menu-panel"
          initial={false}
          animate={{ x: isOpen ? "0%" : "100%" }}
          transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-between gap-4">
            <h2 id="menu-heading" className="menu-label">Menu</h2>
            <button type="button" autoFocus className="menu-toggle menu-close" onClick={closeMenu}>
              Close
              <span aria-hidden="true" className="text-xl leading-none">×</span>
            </button>
          </div>

          <nav aria-label="Main navigation" className="menu-nav">
            <ul>
              {sections.map(({ name, href }) => {
                // Aqui eu diferencio a página exata de uma subpágina, como o detalhe de uma peça.
                const current = pathname === href;
                const active = current || pathname.startsWith(`${href}/`);
                return (
                  <li key={href}>
                    <Link href={href} aria-current={current ? "page" : active ? "location" : undefined} onClick={closeMenu}>
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Aqui eu incluo um grafismo decorativo sem descrição para leitores de tela. */}
          <Image
            src="/graphics/brilhos-offwhite.svg"
            alt=""
            width={104}
            height={104}
            className="menu-sticker"
          />
        </motion.div>
      </dialog>
    </>
  );
}
