import type { Ingredient } from "@/types/ingredient";

export const water: Ingredient = {
  id: "ingredient-water",
  slug: "water",
  names: {
    japanese: "水",
    inci: "Water",
    english: "Water",
    aliases: ["精製水", "Aqua"],
  },
  identifiers: {
    casNumber: "7732-18-5",
    molecularFormula: "H₂O",
    molecularWeight: 18.015,
    smiles: "O",
    inchi: "InChI=1S/H2O/h1H2",
  },
  classification: {
    origins: ["天然由来"],
    chemicalClasses: ["無機化合物", "溶媒"],
    cosmeticFunctions: ["溶剤", "基剤"],
  },
  properties: {
    state: "液体",
    polarity: "極性",
    solubilityInWater: "任意の割合で混和する",
    solubilityInOil: "一般的な油には溶けにくい",
    meltingPoint: "0 ℃",
    boilingPoint: "100 ℃（1気圧）",
    pH: "純水ではおよそ7。ただし空気中の二酸化炭素などの影響を受ける",
    notes: [
      "化粧品では通常、品質管理された精製水が用いられる。",
      "水素結合を形成し、多くの極性物質やイオン性物質を溶解する。",
    ],
  },
  learning: {
    summary:
      "水は多くの化粧品で基剤や溶媒として用いられる。分子は折れ線形で極性を持ち、水素結合を形成する。",
    chemistryPoints: [
      "酸素原子と水素原子の電気陰性度差により極性を持つ。",
      "分子間で水素結合を形成する。",
      "イオン性物質や極性物質を溶かしやすい。",
      "油と分離する性質は乳化を学ぶ基礎になる。",
    ],
    cosmeticRole:
      "化粧水、乳液、クリームなどで、他の水溶性成分を溶かす溶媒として使われる。",
    formulationRole:
      "製剤の連続相、濃度調整、使用感の調整などに関与する。",
    cautions: [
      "水そのものが保湿効果を長時間持続させるとは限らず、保湿剤や油性成分との組み合わせが重要である。",
    ],
  },
  relations: {
    relatedIngredientSlugs: ["glycerin", "ascorbic-acid"],
    relatedTopicSlugs: ["polarity", "hydrogen-bond", "emulsion"],
    productTypes: ["化粧水", "乳液", "美容液", "クリーム", "洗浄料"],
  },
  media: {
    structureImage: "/structures/water.svg",
    structureImageAlt: "水分子の化学構造式",
  },
  references: [
    {
      title: "化粧品原料および基礎化学に関する標準的資料",
      note: "初期デモ用の基礎情報。正式公開前に出典を精査する。",
    },
  ],
};
