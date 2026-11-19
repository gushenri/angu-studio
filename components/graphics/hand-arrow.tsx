// Aqui eu desenho uma seta reutilizável com traço de rabisco e a cor herdada do texto.
export function HandArrow() {
  return (
    // Aqui eu oculto o desenho dos leitores de tela porque o link ou botão já explica a ação.
    <svg aria-hidden="true" width="28" height="18" viewBox="0 0 28 18" fill="none">
      <path d="M2 10c6-2 14-1 23-2m-7-6c2 2 5 4 8 6-3 2-6 5-8 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
