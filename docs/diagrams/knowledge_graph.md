# 知識グラフ図

## 文書情報

* 文書バージョン：Ver.0.1
* 更新日：2026-07-21
* 対象プロジェクト：化粧品素材から化学を学ぼう
* 対応文書：`docs/04_知識グラフ.md`

---

# 1. 目的

本書は、化粧品素材、化学構造、物理化学的性質、機能、製剤中での役割、製品、学習テーマなどの関係を図として可視化するための文書である。

図は設計内容の確認、データモデルの検討、画面遷移の設計、および実装時の参照に使用する。

---

# 2. 基本知識グラフ

```mermaid
flowchart LR
    ING[化粧品素材<br>Ingredient]
    STR[化学構造<br>ChemicalStructure]
    FG[官能基<br>FunctionalGroup]
    PROP[物理化学的性質<br>Property]
    FUNC[化粧品中での機能<br>Function]
    ROLE[製剤中での役割<br>FormulationRole]
    PROD[製品<br>Product]
    CLASS[化学分類<br>ChemicalClass]
    ORIGIN[由来<br>Origin]
    TOPIC[学習テーマ<br>LearningTopic]
    REF[参考文献<br>Reference]

    ING -->|HAS_STRUCTURE| STR
    STR -->|HAS_FUNCTIONAL_GROUP| FG
    STR -->|DETERMINES| PROP
    ING -->|HAS_PROPERTY| PROP
    PROP -->|CONTRIBUTES_TO| FUNC
    ING -->|HAS_FUNCTION| FUNC
    FUNC -->|EXPRESSED_AS| ROLE
    ING -->|HAS_ROLE| ROLE
    ROLE -->|USED_IN| PROD

    ING -->|BELONGS_TO| CLASS
    ING -->|HAS_ORIGIN| ORIGIN
    ING -->|LEARNED_IN| TOPIC
    ING -->|SUPPORTED_BY| REF

    TOPIC -->|EXPLAINS| STR
    TOPIC -->|EXPLAINS| PROP
    TOPIC -->|EXPLAINS| FUNC
    TOPIC -->|EXPLAINS| ROLE
```

---

# 3. 基本学習経路

化学構造から製品までをたどる順方向の学習経路を示す。

```mermaid
flowchart LR
    A[化学構造]
    B[物理化学的性質]
    C[化粧品中での機能]
    D[製剤中での役割]
    E[製品]

    A -->|構造が性質に影響する| B
    B -->|性質が機能に関係する| C
    C -->|機能が製剤で利用される| D
    D -->|複数の役割が製品を構成する| E
```

学習者は、次の問いを順に考える。

```text
どのような構造を持つか
↓
その構造から、どのような性質が生じるか
↓
その性質が、化粧品中でどのような機能につながるか
↓
製剤中で、どのような役割を果たすか
↓
どのような製品に利用されるか
```

---

# 4. 逆方向学習経路

製品から化学構造へ遡る学習経路を示す。

```mermaid
flowchart RL
    A[化学構造]
    B[物理化学的性質]
    C[化粧品素材]
    D[製剤中での役割]
    E[製品]

    E -->|何が必要か| D
    D -->|どの素材が担うか| C
    C -->|どの性質を利用するか| B
    B -->|なぜその性質を持つか| A
```

学習者は、次の問いを逆方向に考える。

```text
この製品には何が必要か
↓
その役割を担う素材は何か
↓
その素材はどのような性質を持つか
↓
なぜその性質を持つのか
```

---

# 5. 素材詳細画面の知識構造

素材詳細画面で表示する情報の関係を示す。

```mermaid
flowchart TB
    ING[素材名]

    BASIC[基本情報]
    STRUCT[化学構造]
    PROPERTY[物理化学的性質]
    FUNCTION[化粧品中での機能]
    ROLE[製剤中での役割]
    PRODUCT[使用される製品]
    RELATED[関連素材]
    TOPIC[関連学習テーマ]
    REFERENCE[参考文献]

    ING --> BASIC
    ING --> STRUCT
    ING --> PROPERTY
    ING --> FUNCTION
    ING --> ROLE
    ING --> PRODUCT
    ING --> RELATED
    ING --> TOPIC
    ING --> REFERENCE
```

---

# 6. グリセリンの知識グラフ例

```mermaid
flowchart LR
    GLY[グリセリン]

    TRIOL[トリオール]
    OH[3つのヒドロキシ基]
    HB[水素結合]
    HYDRO[親水性]
    HYGRO[吸湿性]
    HUM[保湿]
    SOLV[溶剤]
    LOTION[化粧水]
    CREAM[クリーム]
    UREA[尿素]
    HA[ヒアルロン酸]
    TOPIC1[ヒドロキシ基]
    TOPIC2[水素結合]
    TOPIC3[保湿]

    GLY -->|BELONGS_TO| TRIOL
    GLY -->|HAS_FUNCTIONAL_GROUP| OH
    OH -->|ENABLES| HB
    HB -->|CONTRIBUTES_TO| HYDRO
    HB -->|CONTRIBUTES_TO| HYGRO
    HYGRO -->|CONTRIBUTES_TO| HUM

    GLY -->|HAS_FUNCTION| HUM
    GLY -->|HAS_ROLE| SOLV
    GLY -->|USED_IN| LOTION
    GLY -->|USED_IN| CREAM

    GLY -->|RELATED_TO| UREA
    GLY -->|RELATED_TO| HA

    GLY -->|LEARNED_IN| TOPIC1
    GLY -->|LEARNED_IN| TOPIC2
    GLY -->|LEARNED_IN| TOPIC3
```

---

# 7. 保湿を中心とした知識グラフ

```mermaid
flowchart TB
    MOIST[保湿]

    HUMECTANT[水分を引き付ける]
    RETENTION[水分を保持する]
    FILM[皮膜を形成する]
    OCCLUSION[水分蒸散を抑える]
    CORNEUM[角質層を整える]

    GLY[グリセリン]
    UREA[尿素]
    HA[ヒアルロン酸]
    SQUALANE[スクワラン]

    MOIST --> HUMECTANT
    MOIST --> RETENTION
    MOIST --> FILM
    MOIST --> OCCLUSION
    MOIST --> CORNEUM

    GLY -->|主に寄与| HUMECTANT
    UREA -->|寄与| HUMECTANT
    UREA -->|寄与| CORNEUM
    HA -->|主に寄与| RETENTION
    HA -->|寄与| FILM
    SQUALANE -->|間接的に寄与| OCCLUSION
```

この図では、保湿を単一の作用として扱わず、複数の機構に分けて表現する。

---

# 8. 親水性と疎水性の比較グラフ

```mermaid
flowchart LR
    HYDROPHILIC[親水性素材]
    HYDROPHOBIC[疎水性素材]

    GLY[グリセリン]
    UREA[尿素]
    NIACIN[ナイアシンアミド]
    ASC[アスコルビン酸]

    SQUALANE[スクワラン]
    JOJOBA[ホホバ油]

    WATER[水相]
    OIL[油相]

    HYDROPHILIC --> GLY
    HYDROPHILIC --> UREA
    HYDROPHILIC --> NIACIN
    HYDROPHILIC --> ASC

    HYDROPHOBIC --> SQUALANE
    HYDROPHOBIC --> JOJOBA

    GLY --> WATER
    UREA --> WATER
    NIACIN --> WATER
    ASC --> WATER

    SQUALANE --> OIL
    JOJOBA --> OIL
```

---

# 9. 高分子素材の比較グラフ

```mermaid
flowchart TB
    POLYMER[高分子素材]

    HA[ヒアルロン酸]
    CARB[カルボマー]

    NATURAL[生体由来・多糖]
    SYNTHETIC[合成高分子]
    REPEAT[繰返し単位]
    MW[分子量分布]
    VISC[粘度]
    WATER[保水]
    THICK[増粘]
    GEL[ゲル形成]
    NEUTRAL[中和]
    SWELL[膨潤]

    POLYMER --> HA
    POLYMER --> CARB

    HA --> NATURAL
    CARB --> SYNTHETIC

    HA --> REPEAT
    CARB --> REPEAT

    HA --> MW
    CARB --> MW

    HA --> VISC
    HA --> WATER

    CARB --> NEUTRAL
    NEUTRAL --> SWELL
    SWELL --> THICK
    THICK --> GEL
```

---

# 10. 製品カテゴリーとの関係

```mermaid
flowchart TB
    LOTION[化粧水]
    CREAM[クリーム]
    SUNSCREEN[日焼け止め]

    WATER_SOLUBLE[水溶性素材]
    OIL_SOLUBLE[油性素材]
    THICKENER[増粘素材]
    UV_MATERIAL[紫外線防御素材]
    EXTRACT[植物抽出物]

    GLY[グリセリン]
    UREA[尿素]
    NIACIN[ナイアシンアミド]
    ASC[アスコルビン酸]
    HA[ヒアルロン酸]
    CARB[カルボマー]
    SQUALANE[スクワラン]
    JOJOBA[ホホバ油]
    LICORICE[カンゾウ根エキス]
    TIO2[酸化チタン]

    WATER_SOLUBLE --> GLY
    WATER_SOLUBLE --> UREA
    WATER_SOLUBLE --> NIACIN
    WATER_SOLUBLE --> ASC
    WATER_SOLUBLE --> HA

    OIL_SOLUBLE --> SQUALANE
    OIL_SOLUBLE --> JOJOBA

    THICKENER --> CARB
    UV_MATERIAL --> TIO2
    EXTRACT --> LICORICE

    GLY --> LOTION
    UREA --> LOTION
    NIACIN --> LOTION
    ASC --> LOTION
    HA --> LOTION
    CARB --> LOTION
    LICORICE --> LOTION

    GLY --> CREAM
    UREA --> CREAM
    NIACIN --> CREAM
    HA --> CREAM
    CARB --> CREAM
    SQUALANE --> CREAM
    JOJOBA --> CREAM
    LICORICE --> CREAM

    TIO2 --> SUNSCREEN
    CARB --> SUNSCREEN
    SQUALANE --> SUNSCREEN
```

---

# 11. 素材比較の関係

```mermaid
flowchart LR
    COMPARE[比較学習]

    C1[グリセリン<br>VS<br>尿素]
    C2[グリセリン<br>VS<br>ヒアルロン酸]
    C3[スクワラン<br>VS<br>ホホバ油]
    C4[アスコルビン酸<br>VS<br>ナイアシンアミド]
    C5[ヒアルロン酸<br>VS<br>カルボマー]
    C6[酸化チタン<br>VS<br>有機系紫外線吸収剤]

    COMPARE --> C1
    COMPARE --> C2
    COMPARE --> C3
    COMPARE --> C4
    COMPARE --> C5
    COMPARE --> C6
```

比較画面では、関係を次の3種類に分けて表示する。

```text
共通点
相違点
使い分け
```

---

# 12. リレーション種別

知識グラフで使用するリレーションを整理する。

## 12.1 構造に関するリレーション

| リレーション               | 意味       |
| -------------------- | -------- |
| HAS_STRUCTURE        | 化学構造を持つ  |
| HAS_FUNCTIONAL_GROUP | 官能基を持つ   |
| HAS_REPEAT_UNIT      | 繰返し単位を持つ |
| HAS_CRYSTAL_FORM     | 結晶型を持つ   |
| HAS_COMPONENT        | 構成成分を含む  |

---

## 12.2 分類に関するリレーション

| リレーション       | 意味            |
| ------------ | ------------- |
| BELONGS_TO   | 分類に属する        |
| HAS_ORIGIN   | 由来を持つ         |
| IS_TYPE_OF   | 上位概念の一種である    |
| DERIVED_FROM | 原料または物質から得られる |

---

## 12.3 性質に関するリレーション

| リレーション         | 意味           |
| -------------- | ------------ |
| HAS_PROPERTY   | 性質を持つ        |
| DETERMINES     | 構造などが性質を決める  |
| CONTRIBUTES_TO | ある性質や作用に寄与する |
| AFFECTED_BY    | 条件の影響を受ける    |

---

## 12.4 機能・製剤に関するリレーション

| リレーション       | 意味          |
| ------------ | ----------- |
| HAS_FUNCTION | 化粧品中での機能を持つ |
| HAS_ROLE     | 製剤中での役割を持つ  |
| USED_IN      | 製品に使用される    |
| STABILIZES   | 製剤などを安定化する  |
| THICKENS     | 粘度を高める      |
| FORMS_FILM   | 皮膜を形成する     |
| DISPERSES    | 粒子などを分散させる  |

---

## 12.5 学習に関するリレーション

| リレーション         | 意味         |
| -------------- | ---------- |
| LEARNED_IN     | 学習テーマに含まれる |
| EXPLAINS       | 概念や現象を説明する |
| RELATED_TO     | 一般的な関連がある  |
| SIMILAR_TO     | 類似している     |
| CONTRASTS_WITH | 対比して学べる    |
| COMPARED_WITH  | 比較対象である    |

---

## 12.6 根拠に関するリレーション

| リレーション       | 意味            |
| ------------ | ------------- |
| SUPPORTED_BY | 文献などによって支持される |
| DESCRIBED_IN | 資料に記載されている    |
| VERIFIED_BY  | 確認資料がある       |

---

# 13. グラフ実装時の原則

知識グラフをデータとして実装する際は、次の原則に従う。

1. ノードは一意のIDを持つ。
2. 表示名称をリレーションの識別子に使用しない。
3. リレーションの向きを明確にする。
4. 曖昧な関係には、無理に強い意味を付けない。
5. `RELATED_TO` の使用を最小限にする。
6. 可能な場合は、より具体的なリレーションを使用する。
7. 比較関係と因果関係を区別する。
8. 素材の機能と製剤中での役割を区別する。
9. すべての主張に文献を直接付ける必要はないが、重要な科学的説明は参考文献へたどれるようにする。
10. 将来のグラフデータベース移行を考慮する。

---

# 14. JSONでの表現例

Ver.0.1では、知識グラフ専用データベースを使用せず、JSON内のID参照によって関係を表現する。

```json
{
  "id": "ING0001",
  "slug": "glycerin",
  "nameJa": "グリセリン",
  "structureId": "STR0001",
  "chemicalClassIds": [
    "CLASS0001",
    "CLASS0002"
  ],
  "propertyIds": [
    "PROP0001",
    "PROP0002",
    "PROP0003"
  ],
  "functionIds": [
    "FUNC0001"
  ],
  "formulationRoleIds": [
    "ROLE0001"
  ],
  "productIds": [
    "PROD0001",
    "PROD0002"
  ],
  "relatedIngredientIds": [
    "ING0002",
    "ING0006"
  ],
  "learningTopicIds": [
    "TOP0001",
    "TOP0002",
    "TOP0003"
  ],
  "referenceIds": [
    "REF0001",
    "REF0002"
  ]
}
```

---

# 15. エッジ形式での表現例

将来は、関係を独立したエッジデータとして管理できる。

```json
{
  "id": "EDGE0001",
  "sourceId": "ING0001",
  "relation": "HAS_PROPERTY",
  "targetId": "PROP0001",
  "description": "グリセリンは水と相互作用しやすい",
  "referenceIds": [
    "REF0001"
  ]
}
```

複数の関係を配列として管理する場合の例：

```json
[
  {
    "sourceId": "ING0001",
    "relation": "HAS_FUNCTIONAL_GROUP",
    "targetId": "FG0001"
  },
  {
    "sourceId": "FG0001",
    "relation": "CONTRIBUTES_TO",
    "targetId": "PROP0001"
  },
  {
    "sourceId": "PROP0001",
    "relation": "CONTRIBUTES_TO",
    "targetId": "FUNC0001"
  }
]
```

---

# 16. 将来のグラフデータベース表現

将来、Neo4jなどを採用した場合は、次のようなノードとエッジで表現できる。

```text
(:Ingredient)-[:HAS_STRUCTURE]->(:ChemicalStructure)

(:ChemicalStructure)-[:HAS_FUNCTIONAL_GROUP]->(:FunctionalGroup)

(:FunctionalGroup)-[:CONTRIBUTES_TO]->(:Property)

(:Ingredient)-[:HAS_FUNCTION]->(:Function)

(:Ingredient)-[:HAS_ROLE]->(:FormulationRole)

(:Ingredient)-[:USED_IN]->(:Product)

(:Ingredient)-[:LEARNED_IN]->(:LearningTopic)

(:Ingredient)-[:SUPPORTED_BY]->(:Reference)
```

ただし、Ver.1.0まではJSONとTypeScriptによる管理を基本とする。

---

# 17. Mermaid図の表示について

Mermaidに対応しているMarkdownビューアでは、コードブロックが図として表示される。

GitHub上では、対応するMermaid構文であれば図として表示できる。

表示できない環境では、コードブロック内の関係をテキストとして確認する。

---

# 18. 更新方針

次の場合に本書を更新する。

* 新しいノード種別を追加したとき
* 新しいリレーションを追加したとき
* データモデルを変更したとき
* 学習経路を変更したとき
* 初期素材を追加または削除したとき
* 製品カテゴリーを追加したとき
* グラフデータベースへ移行したとき
* 画面上の知識グラフ表示方法を変更したとき

重要な変更は、`docs/08_変更履歴.md` にも記録する。
