import type { Ingredient } from "@/types/ingredient";

export const ascorbicAcid: Ingredient = {
  id: "ingredient-ascorbic-acid",
  slug: "ascorbic-acid",
  names: {
    japanese: "アスコルビン酸",
    inci: "Ascorbic Acid",
    english: "Ascorbic Acid",
    aliases: ["ビタミンC", "L-アスコルビン酸"],
  },
  identifiers: {
    casNumber: "50-81-7",
    molecularFormula: "C₆H₈O₆",
    molecularWeight: 176.124,
    smiles: "C(C1C(C(C(=O)O1)O)O)O",
    inchi: "InChI=1S/C6H8O6/c7-1-2-3(8)4(9)5(10)6(11)12-2/h2-5,7-10H,1H2",
  },
  classification: {
    origins: ["天然由来", "合成"],
    chemicalClasses: ["有機酸", "ビタミン", "還元剤"],
    cosmeticFunctions: ["酸化防止", "整肌"],
  },
  properties: {
    state: "粉末",
    polarity: "極性",
    solubilityInWater: "水に溶ける",
    solubilityInOil: "油には溶けにくい",
    meltingPoint: "約190 ℃付近で分解",
    pH: "水溶液は酸性を示す",
    notes: [
      "還元性を持ち、酸化されやすい。",
      "光、酸素、熱、金属イオンなどの影響で不安定になりやすい。",
      "安定性や溶解性を改善した各種誘導体が利用される。",
    ],
  },
  learning: {
    summary:
      "アスコルビン酸は還元性を持つ水溶性化合物で、化粧品では酸化防止や整肌を目的として用いられる。",
    chemistryPoints: [
      "電子を供与しやすく、還元剤として働く。",
      "酸化還元反応と抗酸化の関係を学べる。",
      "分子内のエンジオール構造が反応性に関与する。",
      "安定性を改善するために誘導体化が行われる。",
    ],
    cosmeticRole:
      "酸化防止や整肌を目的として配合される。製品では安定性や処方条件が重要となる。",
    formulationRole:
      "水相への配合、pH調整、酸化対策、遮光や容器設計などを考慮する必要がある。",
    cautions: [
      "素材単体の性質と、最終製品として示される効果は区別して説明する。",
      "化粧品表示や効能表現は関連法規に従う必要がある。",
    ],
  },
  relations: {
    relatedIngredientSlugs: ["water", "glycerin"],
    relatedTopicSlugs: ["oxidation-reduction", "antioxidant", "vitamin-c-derivatives"],
    productTypes: ["化粧水", "美容液", "クリーム"],
  },
  media: {
    alt: "アスコルビン酸の構造式",
  },
  references: [
    {
      title: "化粧品原料および基礎化学に関する標準的資料",
      note: "初期デモ用の基礎情報。正式公開前に出典を精査する。",
    },
  ],
};
