import type { Ingredient } from "@/types/ingredient";

export const glycerin: Ingredient = {
  id: "ingredient-glycerin",
  slug: "glycerin",
  names: {
    japanese: "グリセリン",
    inci: "Glycerin",
    english: "Glycerol",
    aliases: ["グリセロール"],
  },
  identifiers: {
    casNumber: "56-81-5",
    molecularFormula: "C₃H₈O₃",
    molecularWeight: 92.094,
    smiles: "C(C(CO)O)O",
    inchi: "InChI=1S/C3H8O3/c4-1-3(6)2-5/h3-6H,1-2H2",
  },
  classification: {
    origins: ["植物由来", "合成"],
    chemicalClasses: ["多価アルコール", "保湿剤"],
    cosmeticFunctions: ["保湿", "溶剤"],
  },
  properties: {
    state: "液体",
    polarity: "極性",
    solubilityInWater: "水と任意の割合で混和する",
    solubilityInOil: "一般的な油には溶けにくい",
    meltingPoint: "約18 ℃",
    boilingPoint: "約290 ℃（分解を伴うことがある）",
    notes: [
      "3個のヒドロキシ基を持つ。",
      "吸湿性が高く、水分を保持しやすい。",
      "粘性のある無色透明の液体である。",
    ],
  },
  learning: {
    summary:
      "グリセリンは3個のヒドロキシ基を持つ多価アルコールで、化粧品では代表的な保湿剤として使われる。",
    chemistryPoints: [
      "3個のヒドロキシ基を持つため、水素結合を形成しやすい。",
      "親水性が高く、水に容易に溶ける。",
      "分子間相互作用が強いため粘性が高い。",
      "分子構造と吸湿性の関係を学べる。",
    ],
    cosmeticRole:
      "角層中の水分を保持する目的で、化粧水、乳液、クリームなどに配合される。",
    formulationRole:
      "保湿性、粘度、使用感の調整に寄与し、水溶性成分の溶媒としても働く。",
    cautions: [
      "配合濃度や他成分との組み合わせにより、べたつきなどの使用感が変化する。",
    ],
  },
  relations: {
    relatedIngredientSlugs: ["water", "ascorbic-acid"],
    relatedTopicSlugs: ["hydrogen-bond", "humectant", "polyol"],
    productTypes: ["化粧水", "乳液", "美容液", "クリーム", "洗浄料"],
  },
  media: {
    structureImage: "/structures/glycerin.svg",
    structureImageAlt: "グリセリンの化学構造式",
  },
  references: [
    {
      title: "化粧品原料および基礎化学に関する標準的資料",
      note: "初期デモ用の基礎情報。正式公開前に出典を精査する。",
    },
  ],
};
