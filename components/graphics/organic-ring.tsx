// Aqui eu desenho o contorno orgânico que destaca o acesso à coleção na abertura.
export function OrganicRing() {
  return (
    // Aqui eu defino a área do desenho sem acrescentar conteúdo à leitura acessível.
    <svg
      aria-hidden="true"
      className="hero-ring"
      viewBox="105 140 605 565"
      fill="none"
    >
      {/* Aqui eu normalizo o comprimento do traço em 1 para o CSS animar seu desenho. */}
      <path
        d="M662 297 C594 175 377 117 240 203 C106 290 114 536 253 626 C402 736 645 624 679 460 C695 382 669 314 652 286"
        pathLength="1"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}
