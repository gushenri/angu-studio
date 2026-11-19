// Aqui eu compartilho os favoritos entre o cabeçalho, os cartões e a página de cada peça.
"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { products } from "../lib/collection";

const storageKey = "anzu-studio:favorites";
const validSlugs = new Set(products.map((product) => product.slug));
type FavoritesContextValue = {
  favorites: string[];
  ready: boolean;
  persistent: boolean;
  toggle: (slug: string) => void;
};
const FavoritesContext = createContext<FavoritesContextValue | null>(null);

// Aqui eu valido os dados salvos e descarto peças removidas do catálogo ou identificadores repetidos.
function readFavorites(value: string | null): string[] {
  try {
    const parsed: unknown = JSON.parse(value ?? "[]");
    return Array.isArray(parsed)
      ? [...new Set(parsed.filter((slug): slug is string => typeof slug === "string" && validSlugs.has(slug)))]
      : [];
  } catch {
    return [];
  }
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [ready, setReady] = useState(false);
  const [persistent, setPersistent] = useState(true);

  // Aqui eu leio o armazenamento após a montagem para preservar a renderização estática do Next.js.
  useEffect(() => {
    try {
      setFavorites(readFavorites(window.localStorage.getItem(storageKey)));
    } catch {
      // Aqui eu mantenho os favoritos utilizáveis nesta visita se o navegador bloquear o armazenamento.
      setPersistent(false);
    }
    setReady(true);

    // Aqui eu sincronizo mudanças feitas em outras abas e também acompanho a limpeza do armazenamento.
    function sync(event: StorageEvent) {
      if (event.key === storageKey || event.key === null) {
        setFavorites(readFavorites(event.newValue));
      }
    }
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  // Aqui eu salvo apenas identificadores das peças; login e dados pessoais não entram no armazenamento.
  function toggle(slug: string) {
    if (!ready || !validSlugs.has(slug)) return;
    const next = favorites.includes(slug) ? favorites.filter((item) => item !== slug) : [...favorites, slug];
    setFavorites(next);
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(next));
      setPersistent(true);
    } catch {
      setPersistent(false);
    }
  }

  return <FavoritesContext.Provider value={{ favorites, ready, persistent, toggle }}>{children}</FavoritesContext.Provider>;
}

// Aqui eu centralizo o acesso ao estado para todos os controles usarem a mesma lista de favoritos.
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("Use os favoritos dentro de FavoritesProvider.");
  return context;
}
