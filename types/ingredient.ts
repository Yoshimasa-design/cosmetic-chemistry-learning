export type IngredientOrigin =
  | "天然由来"
  | "植物由来"
  | "動物由来"
  | "鉱物由来"
  | "微生物由来"
  | "合成"
  | "半合成"
  | "混合物";

export type IngredientState =
  | "固体"
  | "液体"
  | "気体"
  | "半固体"
  | "粉末"
  | "油状"
  | "不定";

export type Polarity =
  | "極性"
  | "弱極性"
  | "非極性"
  | "両親媒性"
  | "素材により異なる";

export interface IngredientNames {
  japanese: string;
  inci: string;
  english?: string;
  aliases?: string[];
}

export interface IngredientIdentifiers {
  casNumber?: string;
  molecularFormula?: string;
  molecularWeight?: number;
  smiles?: string;
  inchi?: string;
}

export interface IngredientClassification {
  origins: IngredientOrigin[];
  chemicalClasses: string[];
  cosmeticFunctions: string[];
}

export interface IngredientProperties {
  state?: IngredientState;
  polarity?: Polarity;
  solubilityInWater?: string;
  solubilityInOil?: string;
  meltingPoint?: string;
  boilingPoint?: string;
  pH?: string;
  notes?: string[];
}

export interface IngredientLearning {
  summary: string;
  chemistryPoints: string[];
  cosmeticRole: string;
  formulationRole?: string;
  cautions?: string[];
}

export interface IngredientRelations {
  relatedIngredientSlugs?: string[];
  relatedTopicSlugs?: string[];
  productTypes?: string[];
}

export interface IngredientMedia {
  structureImage?: string;
  structureImageAlt?: string;
  thumbnail?: string;
  alt?: string;
}

export interface IngredientReference {
  title: string;
  url?: string;
  note?: string;
  accessedAt?: string;
}

export interface Ingredient {
  id: string;
  slug: string;
  names: IngredientNames;
  identifiers?: IngredientIdentifiers;
  classification: IngredientClassification;
  properties?: IngredientProperties;
  learning: IngredientLearning;
  relations?: IngredientRelations;
  media?: IngredientMedia;
  references?: IngredientReference[];
}
