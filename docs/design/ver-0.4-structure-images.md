# Ver.0.4 設計書

## 1. バージョン名

Ver.0.4 化学構造式表示機能

---

## 2. 目的

化粧品素材の詳細ページに化学構造式を表示し、素材の名称、物性、化粧品での役割と化学構造との関係を視覚的に学べるようにする。

現在の詳細ページは文章と表を中心としているため、化学教材として重要な構造情報が不足している。

Ver.0.4では、各素材に対応するSVG形式の構造式画像を登録し、詳細ページに表示する仕組みを実装する。

---

## 3. 対象範囲

Ver.0.4では、以下を実装対象とする。

1. 化学構造式画像の保存場所を作成する
2. 素材データ型に構造式画像の情報を追加する
3. 素材ごとに構造式画像を設定する
4. 詳細ページに構造式を表示する
5. 構造式が未登録の場合の代替表示を実装する
6. 構造式と基本情報を見やすく配置する
7. スマートフォン表示に対応する

---

## 4. 対象外

Ver.0.4では、以下は実装しない。

- ブラウザ上での分子構造の編集
- 3D分子モデル
- 構造式の回転や拡大操作
- PubChemなど外部データベースとの自動連携
- SMILESからの構造式自動生成
- 構造式を利用したクイズ
- 類似構造検索
- 構造式画像の管理画面

これらは将来バージョンで検討する。

---

## 5. 基本方針

### 5.1 画像形式

構造式画像にはSVG形式を使用する。

理由：

- 拡大しても画質が劣化しない
- 分子式や結合線を明瞭に表示できる
- ファイルサイズを小さくできる
- 印刷用教材にも利用しやすい
- Webブラウザで直接表示できる

### 5.2 保存場所

構造式画像は以下に保存する。

    public/structures/

ファイル名には素材のslugを使用する。

    public/structures/water.svg
    public/structures/glycerin.svg
    public/structures/ascorbic-acid.svg

素材データと画像ファイルの対応を分かりやすくするため、素材slugと画像名を原則として一致させる。

---

## 6. データモデル

素材データ型に表示用メディア情報を追加する。

    media?: {
      structureImage?: string;
      structureImageAlt?: string;
    };

登録例：

    media: {
      structureImage: "/structures/glycerin.svg",
      structureImageAlt: "グリセリンの化学構造式",
    },

mediaおよびstructureImageは省略可能とする。

理由：

- 構造式画像をすぐに用意できない素材がある
- 混合物や高分子など、単一の構造式で表しにくい素材がある
- 素材データを先に登録し、画像を後から追加できる
- 素材追加時に構造式画像を必須にしないため

---

## 7. 未登録時の表示

構造式画像が登録されていない場合は、壊れた画像を表示せず、次のメッセージを表示する。

    構造式は準備中です

必要に応じて補足として、次を表示する。

    この素材の構造情報は今後追加される予定です。

---

## 8. コンポーネント設計

新しいコンポーネントを作成する。

    components/ingredient-detail/StructureCard.tsx

役割：

- 構造式画像を表示する
- 画像の代替テキストを設定する
- 構造式未登録時にプレースホルダーを表示する
- 構造式表示部分の見た目を統一する

想定するProps：

    interface StructureCardProps {
      imageSrc?: string;
      imageAlt?: string;
      ingredientName: string;
    }

---

## 9. 詳細ページのレイアウト

デスクトップ表示では、構造式と基本情報を2カラムで配置する。

    素材名・INCI名

    ┌──────────────┬───────────────┐
    │ 構造式        │ 分子式         │
    │              │ 分子量         │
    │              │ CAS番号        │
    │              │ 状態           │
    │              │ 極性           │
    └──────────────┴───────────────┘

    概要
    化学的特徴
    化粧品での役割

スマートフォン表示では1カラムに切り替える。

    素材名・INCI名
    構造式
    基本情報
    概要
    化学的特徴
    化粧品での役割

---

## 10. 画像表示

SVG画像はpublic/structures/に保存し、通常のimg要素で表示する。

例：

    <img
      src={imageSrc}
      alt={imageAlt}
      className="structure-card__image"
    />

CSSの基本方針：

    max-width: 100%;
    max-height: 260px;
    object-fit: contain;

---

## 11. アクセシビリティ

構造式画像には必ず代替テキストを設定する。

例：

- 水の化学構造式
- グリセリンの化学構造式
- アスコルビン酸の化学構造式

代替テキストが登録されていない場合は、素材名から自動生成する。

    `${ingredientName}の化学構造式`

---

## 12. 初期対象素材

Ver.0.4の初期対象は、現在登録済みの以下の3素材とする。

1. 水
2. グリセリン
3. アスコルビン酸

対応するSVG画像：

    water.svg
    glycerin.svg
    ascorbic-acid.svg

---

## 13. ファイル構成

Ver.0.4完了時の想定構成：

    app/
    └── ingredients/
        └── [slug]/
            └── page.tsx

    components/
    └── ingredient-detail/
        ├── IngredientDetail.tsx
        └── StructureCard.tsx

    data/
    └── ingredients/
        ├── water.ts
        ├── glycerin.ts
        └── ascorbic-acid.ts

    public/
    └── structures/
        ├── water.svg
        ├── glycerin.svg
        └── ascorbic-acid.svg

    types/
    └── ingredient.ts

---

## 14. 実装順序

### Milestone 1

設計書を作成する。

成果物：

    docs/design/ver-0.4-structure-images.md

### Milestone 2

素材データ型にmediaを追加する。

対象：

    types/ingredient.ts

### Milestone 3

SVG構造式画像を保存する場所を作成する。

対象：

    public/structures/

### Milestone 4

現在登録済みの3素材に構造式画像パスを追加する。

対象：

    data/ingredients/water.ts
    data/ingredients/glycerin.ts
    data/ingredients/ascorbic-acid.ts

### Milestone 5

構造式表示コンポーネントを作成する。

対象：

    components/ingredient-detail/StructureCard.tsx

### Milestone 6

詳細ページに構造式を組み込む。

対象：

    components/ingredient-detail/IngredientDetail.tsx

### Milestone 7

構造式と基本情報を2カラムで表示する。

対象：

    app/globals.css

### Milestone 8

品質確認を行う。

    npm run typecheck
    npm run lint
    npm run build

### Milestone 9

ブラウザで以下を確認する。

    /ingredients/water
    /ingredients/glycerin
    /ingredients/ascorbic-acid

### Milestone 10

コミット、プッシュ、タグ付けを行う。

---

## 15. 完了条件

以下をすべて満たした場合、Ver.0.4を完了とする。

- 3素材の詳細ページに構造式が表示される
- 構造式画像に代替テキストが設定されている
- 構造式が未登録でもページがエラーにならない
- 未登録時にプレースホルダーが表示される
- デスクトップでは構造式と基本情報が横並びになる
- スマートフォンでは縦並びになる
- TypeScriptの型チェックが通る
- lintが通る
- production buildが成功する
- GitHubへ変更がpushされる
- v0.4.0タグが作成される

---

## 16. 将来拡張

Ver.0.4以降に、以下を検討する。

- SMILESの登録
- InChIおよびInChIKeyの登録
- PubChem CIDの登録
- PubChemへの外部リンク
- 3D分子表示
- 構造式の拡大表示
- 官能基の強調表示
- 構造式と物性の関係を説明する教材
- 類似構造を持つ素材の比較
- 構造式を使った学習クイズ
