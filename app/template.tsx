// Aqui eu importo os recursos e componentes usados nesta parte do site.
import type { ReactNode } from "react";

// Aqui eu envolvo cada página em uma camada que permite aplicar a transição definida no CSS.
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-transition">{children}</div>;
}
