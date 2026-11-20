// Aqui eu defino os dados de cada foto: arquivo, descrição acessível e opções de enquadramento.
export type EditorialImage = {
  src: string;
  alt: string;
  position?: string;
  fit?: "contain";
};

// Aqui eu defino os dados de cada peça: identificador da URL, nome, preço, descrição, tamanhos e fotos.
export type Product = {
  // Aqui eu uso um identificador único para ligar o cartão à página da peça.
  slug: string;
  name: string;
  price: number;
  description: string;
  // Aqui eu descrevo listas somente para leitura no TypeScript, evitando alterações acidentais no uso tipado.
  sizes: readonly string[];
  photos: readonly EditorialImage[];
  // Aqui eu preparo a autoria de cada peça para apresentar o artista da coleção nos detalhes.
  // TODO: Preencher o nome e a apresentação reais do artista após confirmação da curadoria.
  artist?: {
    name: string;
    bio: string;
  };
  // Aqui eu preparo os campos técnicos para receber apenas informações confirmadas pela marca.
  // TODO: Preencher composição, cuidados e medidas reais no cadastro de cada peça.
  details?: {
    composition?: string;
    care?: readonly string[];
    measurements?: readonly { size: string; widthCm: number; lengthCm: number }[];
  };
};

// Aqui eu centralizo a foto no campo para reutilizar o mesmo arquivo e sua descrição.
export const campo = {
  src: "/images/camiseta-campo.webp",
  alt: "Model wearing a cream Anzu T-shirt in a golden field.",
  position: "50% 35%",
};

// Aqui eu centralizo a foto da dupla de modelos para reutilizar o mesmo arquivo e sua descrição.
export const dupla = {
  src: "/images/dupla-anzu.webp",
  alt: "Two models wearing blue and cream pieces under an open sky.",
  position: "50% 34%",
};

// Aqui eu centralizo a foto da jaqueta com grafismos para reutilizar o mesmo arquivo e sua descrição.
export const jaquetaEditorial = {
  src: "/images/jaqueta-editorial.webp",
  alt: "Model seen from behind in a blue jacket, surrounded by colorful doodles.",
};

// Aqui eu centralizo a foto da colagem editorial para reutilizar o mesmo arquivo e sua descrição.
export const colagem = {
  src: "/images/colagem-anzu.webp",
  alt: "Model wearing a tailored blue jacket among stars, bows and doodles.",
  position: "50% 30%",
};

// Aqui eu centralizo a foto do recorte editorial para reutilizar o mesmo arquivo e sua descrição.
export const recorte = {
  src: "/images/retrato-recorte.webp",
  alt: "Model in colorful glasses wearing a cream T-shirt under a blue coat, surrounded by stars.",
};

// Aqui eu centralizo a foto da camiseta azul-marinho para reutilizar o mesmo arquivo e sua descrição.
export const retratoVibrante = {
  src: "/images/camiseta-traco.webp",
  alt: "Seated model wearing a navy T-shirt among yellow and blue graphics.",
  position: "50% 30%",
};

// Aqui eu centralizo a foto da sacola estampada para reutilizar o mesmo arquivo e sua descrição.
export const sacola = {
  src: "/images/sacola-portal.webp",
  alt: "Cream tote bag with a blue base and handles, printed with Anzu graphics.",
};

// TODO: Confirmar nomes, preços, descrições e grade de tamanhos.
// Aqui eu reúno o catálogo estático compartilhado pela página inicial, loja e detalhes das peças.
export const products: readonly Product[] = [
  {
    slug: "camiseta-intervalo",
    name: "Interval T-shirt",
    price: 149,
    description: "Relaxed-fit cream T-shirt with Anzu’s blue signature on the chest.",
    sizes: ["S", "M", "L", "XL"],
    photos: [
      {
        src: "/images/camiseta-studio.webp",
        alt: "Model stretching the front of a cream T-shirt to show the blue signature.",
      },
      campo,
      {
        src: "/images/camiseta-estudio-mockup.webp",
        alt: "Mockup showing the front and back of cream Anzu studio T-shirts.",
        fit: "contain",
      },
      recorte,
    ],
  },
  {
    slug: "jaqueta-orbita",
    name: "Orbit Jacket",
    price: 329,
    description: "Blue jacket with light sleeves and graphics on the back. The design follows the body’s movement.",
    sizes: ["S", "M", "L"],
    photos: [
      {
        src: "/images/jaqueta-orbita.webp",
        alt: "Model seen from behind in a studio, showing the graphics on a blue jacket.",
        position: "50% 42%",
      },
      jaquetaEditorial,
    ],
  },
  {
    slug: "camiseta-arcano",
    name: "Arcana T-shirt",
    price: 159,
    description: "Black T-shirt with an illustrated card print.",
    sizes: ["S", "M", "L", "XL"],
    photos: [{ src: "/images/camiseta-arcano.webp", alt: "Black T-shirt with an illustrated tarot card on the front." }],
  },
  {
    slug: "camiseta-registro",
    name: "Record T-shirt",
    price: 159,
    description: "Cream T-shirt with two framed prints in red and blue.",
    sizes: ["S", "M", "L", "XL"],
    photos: [{ src: "/images/camiseta-registro.webp", alt: "Cream T-shirt with two rectangular illustrations, one red and one blue." }],
  },
  {
    slug: "camiseta-traco",
    name: "Line T-shirt",
    price: 149,
    description: "Navy T-shirt with Anzu’s signature on the chest.",
    sizes: ["S", "M", "L", "XL"],
    photos: [retratoVibrante],
  },
  {
    slug: "sacola-portal",
    name: "Portal Tote Bag",
    price: 89,
    description: "Tote bag with blue handles, Anzu doodles and graphics.",
    sizes: ["One size"],
    photos: [
      sacola,
      {
        src: "/images/sacola-portal-ambiente.webp",
        alt: "Printed Anzu tote bag hanging by its blue handles on a light-colored door.",
      },
    ],
  },
  {
    slug: "jaqueta-linha",
    name: "Line Jacket",
    price: 319,
    description: "Cropped cobalt jacket with defined lapels.",
    sizes: ["S", "M", "L"],
    photos: [colagem],
  },
];

// Aqui eu preparo um formatador reutilizável para mostrar valores em reais no padrão brasileiro.
const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "BRL" });

// Aqui eu converto o valor numérico em um preço com símbolo e separadores locais.
export function formatPrice(price: number) {
  return currency.format(price);
}
