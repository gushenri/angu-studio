// Aqui eu importo os recursos e componentes usados nesta parte do site.
import Image from "next/image";
import type { EditorialImage as Photo } from "../lib/collection";

// Aqui eu padronizo as fotos para reutilizar descrição, enquadramento e otimização do Next.js.
export function EditorialImage({ photo, sizes, priority }: {
  // Aqui eu recebo a foto, a largura esperada na tela e a opção de priorizar seu carregamento.
  photo: Photo;
  sizes: string;
  priority?: boolean;
}) {
  // Aqui eu preencho o contêiner da foto e aplico o enquadramento definido nos dados da coleção.
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover"
      style={{ objectPosition: photo.position, objectFit: photo.fit }}
    />
  );
}
