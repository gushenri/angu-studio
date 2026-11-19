// Aqui eu reúno os três ícones do cabeçalho com o mesmo tamanho e espessura de traço.
export function HeaderIcon({ name }: { name: "login" | "search" | "favorites" }) {
  return (
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {name === "login" && <><circle cx="12" cy="8" r="3.5" /><path d="M4.5 21v-2a7.5 7.5 0 0 1 15 0v2" /></>}
      {name === "search" && <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>}
      {name === "favorites" && <path d="M20.8 5.6a5.3 5.3 0 0 0-7.5 0L12 6.9l-1.3-1.3a5.3 5.3 0 0 0-7.5 7.5L12 22l8.8-8.9a5.3 5.3 0 0 0 0-7.5Z" />}
    </svg>
  );
}
