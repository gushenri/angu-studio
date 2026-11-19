// Aqui eu habilito o controle de salvar e remover uma peça no navegador.
"use client";

import { HeaderIcon } from "./graphics/header-icon";
import { useFavorites } from "./favorites-provider";

// Aqui eu reutilizo o mesmo botão nos cartões, no detalhe e no painel de favoritos, sempre fora de links.
export function FavoriteButton({ slug, name, compact = false, onToggle }: {
  slug: string;
  name: string;
  compact?: boolean;
  onToggle?: () => void;
}) {
  const { favorites, ready, toggle } = useFavorites();
  const selected = favorites.includes(slug);

  return (
    <button type="button" className={`favorite-button${compact ? " favorite-button-compact" : ""}`}
      disabled={!ready} aria-pressed={selected}
      aria-label={selected ? `Remover ${name} dos favoritos` : `Guardar ${name} nos favoritos`}
      onClick={() => { toggle(slug); onToggle?.(); }}>
      <HeaderIcon name="favorites" />
      {!compact && <span>{selected ? "Guardamos esta peça" : "Guardar esta peça"}</span>}
    </button>
  );
}
