// Aqui eu habilito os estados, a busca local e os eventos dos atalhos do cabeçalho.
"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { formatPrice, products } from "../lib/collection";
import { HeaderIcon } from "./graphics/header-icon";
import { HandArrow } from "./graphics/hand-arrow";
import { EditorialImage } from "./editorial-image";
import { FavoriteButton } from "./favorite-button";
import { useFavorites } from "./favorites-provider";
import { DemoLogin } from "./demo-login";

// Aqui eu centralizo os nomes e os ícones dos três atalhos.
const actions = [
  { name: "login", label: "Login" },
  { name: "search", label: "Busca" },
  { name: "favorites", label: "Favoritos" },
] as const;
type Action = (typeof actions)[number]["name"];

// Aqui eu ignoro acentos e diferenças de caixa para facilitar a busca por nomes de peças.
function normalize(text: string) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR");
}

// Aqui eu abro um painel acessível para cada atalho, mantendo toda a experiência no navegador.
export function HeaderActions() {
  const [active, setActive] = useState<Action | null>(null);
  const [query, setQuery] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const search = useRef<HTMLInputElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const { favorites, ready, persistent } = useFavorites();
  // Aqui eu mantenho a ordem em que as peças foram salvas e ignoro itens que não existem mais.
  const savedProducts = favorites.flatMap((slug) => products.filter((product) => product.slug === slug));
  const title = actions.find((action) => action.name === active)?.label ?? "Atalhos";
  const term = normalize(query.trim());
  const results = products.filter((product) => normalize(`${product.name} ${product.description}`).includes(term));

  // Aqui eu aguardo a montagem do conteúdo antes de abrir o diálogo e direcionar o foco à busca.
  useEffect(() => {
    if (active) {
      dialog.current?.showModal();
      if (active === "search") search.current?.focus();
    }
  }, [active]);

  // Aqui eu guardo o botão acionado para devolver o foco a ele quando o painel fechar.
  function open(action: Action, event: MouseEvent<HTMLButtonElement>) {
    trigger.current = event.currentTarget;
    setQuery("");
    setActive(action);
  }

  function close() {
    dialog.current?.close();
  }

  return (
    <>
      {/* Aqui eu mostro os nomes em telas maiores e mantenho os nomes acessíveis nos ícones do celular. */}
      <div className="header-shortcuts" role="group" aria-label="Atalhos da galeria">
        {actions.map((action) => (
          <button key={action.name} type="button" className="header-shortcut" aria-label={action.name === "favorites" ? `Favoritos (${favorites.length})` : action.label} title={action.label}
            aria-haspopup="dialog" aria-controls="header-action-dialog" aria-expanded={active === action.name}
            onClick={(event) => open(action.name, event)}>
            <HeaderIcon name={action.name} />
            <span>{action.label}</span>
            {action.name === "favorites" && favorites.length > 0 && <small className="favorites-count" aria-hidden="true">{favorites.length}</small>}
          </button>
        ))}
      </div>

      {/* Aqui eu uso um diálogo nativo com fechamento por Escape, botão e clique fora do painel. */}
      <dialog ref={dialog} id="header-action-dialog" className="header-dialog" aria-labelledby="header-action-title"
        onClick={(event) => { if (event.target === event.currentTarget) close(); }}
        onClose={() => { setActive(null); trigger.current?.focus(); }}>
        <div className="header-dialog-panel">
          <div className="header-dialog-heading">
            <p className="eyebrow">Anzu studio</p>
            <button type="button" className="menu-toggle" onClick={close} aria-label={`Fechar ${title.toLocaleLowerCase("pt-BR")}`}>Fechar <span aria-hidden="true">×</span></button>
          </div>
          <h2 ref={heading} tabIndex={-1} id="header-action-title" className="header-dialog-title">{title}.</h2>

          {active === "search" && (
            <>
              {/* Aqui eu filtro o catálogo enquanto a pessoa digita, sem enviar dados para um servidor. */}
              <label className="eyebrow" htmlFor="header-search">O que vamos encontrar?</label>
              <input ref={search} id="header-search" className="header-search-input" type="search" placeholder="Camiseta, jaqueta, sacola…"
                value={query} onChange={(event) => setQuery(event.target.value)} aria-controls="header-search-results" />
              <p className="header-dialog-note" role="status">{term ? `Encontramos ${results.length} ${results.length === 1 ? "peça" : "peças"}.` : "Vamos conhecer as peças do studio."}</p>
              <ul id="header-search-results" className="header-search-results">
                {results.map((product) => (
                  <li key={product.slug}><Link href={`/shop/${product.slug}`} onClick={close}>
                    {/* Aqui eu uso uma miniatura decorativa porque o nome da peça já descreve o destino. */}
                    <span className="header-result-photo photo-frame"><EditorialImage photo={{ ...product.photos[0], alt: "" }} sizes="64px" /></span>
                    <span className="header-result-caption">{product.name}<small>{formatPrice(product.price)}</small></span><HandArrow />
                  </Link></li>
                ))}
              </ul>
              {results.length === 0 && <p className="header-dialog-note">Ainda não encontramos essa peça. Vamos tentar outro nome ou <Link href="/shop" onClick={close} className="text-link">voltar à galeria</Link>.</p>}
            </>
          )}

          {active === "login" && <DemoLogin />}

          {/* Aqui eu mostro as peças salvas ou um convite à coleção quando a lista está vazia. */}
          {active === "favorites" && !ready && <p role="status">Estamos reunindo suas escolhas…</p>}
          {active === "favorites" && ready && savedProducts.length > 0 && (
            <>
              <p className="header-dialog-note" role="status">{savedProducts.length} {savedProducts.length === 1 ? "peça salva" : "peças salvas"}. {persistent ? "Guardamos suas escolhas neste navegador." : "Guardamos suas escolhas só nesta visita. O navegador bloqueou o salvamento."}</p>
              <ul className="saved-products">
                {savedProducts.map((product) => (
                  <li key={product.slug}>
                    <Link href={`/shop/${product.slug}`} onClick={close}>
                      <span className="header-result-photo photo-frame"><EditorialImage photo={{ ...product.photos[0], alt: "" }} sizes="64px" /></span>
                      <span className="header-result-caption">{product.name}<small>{formatPrice(product.price)}</small></span>
                    </Link>
                    {/* Aqui eu devolvo o foco ao título após remover um item para evitar que ele se perca. */}
                    <FavoriteButton slug={product.slug} name={product.name} compact onToggle={() => heading.current?.focus()} />
                  </li>
                ))}
              </ul>
            </>
          )}
          {active === "favorites" && ready && savedProducts.length === 0 && (
            <div className="header-dialog-empty">
              <HeaderIcon name="favorites" />
              <h3>Peças que ficam na cabeça.</h3>
              <p>Vamos guardar suas escolhas? Toque no coração de uma peça.</p>
              <Link href="/shop" className="action-button" onClick={close}>Conhecer as peças <HandArrow /></Link>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
