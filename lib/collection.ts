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
  alt: "Modelo veste camiseta creme da Anzu em um campo dourado.",
  position: "50% 35%",
};

// Aqui eu centralizo a foto da dupla de modelos para reutilizar o mesmo arquivo e sua descrição.
export const dupla = {
  src: "/images/dupla-anzu.webp",
  alt: "Dois modelos vestem peças azuis e creme sob o céu aberto.",
  position: "50% 34%",
};

// Aqui eu centralizo a foto da jaqueta com grafismos para reutilizar o mesmo arquivo e sua descrição.
export const jaquetaEditorial = {
  src: "/images/jaqueta-editorial.webp",
  alt: "Modelo de costas com jaqueta azul, cercado de rabiscos coloridos.",
};

// Aqui eu centralizo a foto da colagem editorial para reutilizar o mesmo arquivo e sua descrição.
export const colagem = {
  src: "/images/colagem-anzu.webp",
  alt: "Modelo veste jaqueta de alfaiataria azul entre estrelas, laços e rabiscos.",
  position: "50% 30%",
};

// Aqui eu centralizo a foto do recorte editorial para reutilizar o mesmo arquivo e sua descrição.
export const recorte = {
  src: "/images/retrato-recorte.webp",
  alt: "Modelo de óculos coloridos veste camiseta creme sob um casaco azul, cercada de estrelas.",
};

// Aqui eu centralizo a foto da camiseta azul-marinho para reutilizar o mesmo arquivo e sua descrição.
export const retratoVibrante = {
  src: "/images/camiseta-traco.webp",
  alt: "Modelo sentada veste camiseta azul-marinho entre grafismos amarelos e azuis.",
  position: "50% 30%",
};

// Aqui eu centralizo a foto da sacola estampada para reutilizar o mesmo arquivo e sua descrição.
export const sacola = {
  src: "/images/sacola-portal.webp",
  alt: "Sacola creme com base e alças azuis, estampada com grafismos da Anzu.",
};

// TODO: Confirmar nomes, preços, descrições e grade de tamanhos.
// Aqui eu reúno o catálogo estático compartilhado pela página inicial, loja e detalhes das peças.
export const products: readonly Product[] = [
  {
    slug: "camiseta-intervalo",
    name: "Camiseta Intervalo",
    price: 149,
    description: "Camiseta creme de corte amplo com a assinatura azul da Anzu no peito.",
    sizes: ["P", "M", "G", "GG"],
    photos: [
      {
        src: "/images/camiseta-studio.webp",
        alt: "Modelo estica a frente da camiseta creme para mostrar a assinatura azul.",
      },
      campo,
      {
        src: "/images/camiseta-estudio-mockup.webp",
        alt: "Mockup com frente e costas de camisetas creme da Anzu Studio.",
        fit: "contain",
      },
      recorte,
    ],
  },
  {
    slug: "jaqueta-orbita",
    name: "Jaqueta Órbita",
    price: 329,
    description: "Jaqueta azul com mangas claras e grafismos nas costas. O desenho segue o movimento do corpo.",
    sizes: ["P", "M", "G"],
    photos: [
      {
        src: "/images/jaqueta-orbita.webp",
        alt: "Modelo de costas destaca os grafismos da jaqueta azul em estúdio.",
        position: "50% 42%",
      },
      jaquetaEditorial,
    ],
  },
  {
    slug: "camiseta-arcano",
    name: "Camiseta Arcano",
    price: 159,
    description: "Camiseta preta com uma estampa ilustrada em formato de carta.",
    sizes: ["P", "M", "G", "GG"],
    photos: [{ src: "/images/camiseta-arcano.webp", alt: "Camiseta preta com uma carta de tarô ilustrada na frente." }],
  },
  {
    slug: "camiseta-registro",
    name: "Camiseta Registro",
    price: 159,
    description: "Camiseta creme com dois quadros estampados em vermelho e azul.",
    sizes: ["P", "M", "G", "GG"],
    photos: [{ src: "/images/camiseta-registro.webp", alt: "Camiseta creme com duas ilustrações retangulares, uma vermelha e outra azul." }],
  },
  {
    slug: "camiseta-traco",
    name: "Camiseta Traço",
    price: 149,
    description: "Camiseta azul-marinho com a assinatura da Anzu no peito.",
    sizes: ["P", "M", "G", "GG"],
    photos: [retratoVibrante],
  },
  {
    slug: "sacola-portal",
    name: "Sacola Portal",
    price: 89,
    description: "Sacola de alças azuis com rabiscos e grafismos da Anzu.",
    sizes: ["Único"],
    photos: [
      sacola,
      {
        src: "/images/sacola-portal-ambiente.webp",
        alt: "Sacola estampada da Anzu pendurada pelas alças azuis em uma porta clara.",
      },
    ],
  },
  {
    slug: "jaqueta-linha",
    name: "Jaqueta Linha",
    price: 319,
    description: "Jaqueta cobalto de corte curto e lapelas marcadas.",
    sizes: ["P", "M", "G"],
    photos: [colagem],
  },
];

// Aqui eu preparo um formatador reutilizável para mostrar valores em reais no padrão brasileiro.
const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

// Aqui eu converto o valor numérico em um preço com símbolo e separadores locais.
export function formatPrice(price: number) {
  return currency.format(price);
}
