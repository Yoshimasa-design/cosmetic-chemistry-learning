# 画面遷移図

## 文書情報

* 文書バージョン：Ver.0.1
* 更新日：2026-07-21
* 対象プロジェクト：化粧品素材から化学を学ぼう
* 対応文書：`docs/05_画面設計.md`

---

# 1. 目的

本書は、本システムにおける主要画面と画面間の遷移を可視化するための文書である。

利用者がどの入口から学習を開始し、どのように素材、製品、学習テーマ、比較画面を移動するかを整理する。

また、実装時のルーティング設計、ナビゲーション設計、パンくずリスト設計の基礎資料として使用する。

---

# 2. 全体画面遷移

```mermaid
flowchart TB
    HOME[ホーム]

    ING_LIST[素材一覧]
    ING_DETAIL[素材詳細]
    PRODUCT_LIST[製品一覧]
    PRODUCT_DETAIL[製品詳細]
    TOPIC_LIST[学習テーマ一覧]
    TOPIC_DETAIL[学習テーマ詳細]
    COMPARE[素材比較]
    SEARCH[検索結果]
    ABOUT[この教材について]
    GLOSSARY[用語集]

    HOME --> ING_LIST
    HOME --> PRODUCT_LIST
    HOME --> TOPIC_LIST
    HOME --> COMPARE
    HOME --> SEARCH
    HOME --> ABOUT
    HOME --> GLOSSARY

    ING_LIST --> ING_DETAIL
    ING_LIST --> SEARCH
    ING_LIST --> COMPARE

    ING_DETAIL --> ING_DETAIL
    ING_DETAIL --> PRODUCT_DETAIL
    ING_DETAIL --> TOPIC_DETAIL
    ING_DETAIL --> COMPARE
    ING_DETAIL --> GLOSSARY

    PRODUCT_LIST --> PRODUCT_DETAIL
    PRODUCT_DETAIL --> ING_DETAIL
    PRODUCT_DETAIL --> TOPIC_DETAIL

    TOPIC_LIST --> TOPIC_DETAIL
    TOPIC_DETAIL --> ING_DETAIL
    TOPIC_DETAIL --> TOPIC_DETAIL
    TOPIC_DETAIL --> COMPARE

    SEARCH --> ING_DETAIL
    SEARCH --> PRODUCT_DETAIL
    SEARCH --> TOPIC_DETAIL

    COMPARE --> ING_DETAIL
    COMPARE --> TOPIC_DETAIL
```

---

# 3. グローバルナビゲーション

すべての主要画面から、次の画面へ移動できるようにする。

```mermaid
flowchart LR
    NAV[グローバルナビゲーション]

    HOME[ホーム]
    ING[素材を探す]
    PRODUCT[製品から学ぶ]
    TOPIC[テーマから学ぶ]
    COMPARE[比較する]
    GLOSSARY[用語集]

    NAV --> HOME
    NAV --> ING
    NAV --> PRODUCT
    NAV --> TOPIC
    NAV --> COMPARE
    NAV --> GLOSSARY
```

初期公開版では、グローバルナビゲーションの項目を増やしすぎない。

推奨表示：

```text
ホーム
素材を探す
製品から学ぶ
テーマから学ぶ
比較する
```

「用語集」と「この教材について」は、フッターまたは補助メニューへ配置してもよい。

---

# 4. ホーム画面からの学習開始

ホーム画面では、利用者が学習方法を選択できるようにする。

```mermaid
flowchart TB
    HOME[ホーム]

    A[素材名から探す]
    B[製品から学ぶ]
    C[化学テーマから学ぶ]
    D[素材を比較する]
    E[キーワードで検索する]

    HOME --> A
    HOME --> B
    HOME --> C
    HOME --> D
    HOME --> E

    A --> ING_LIST[素材一覧]
    B --> PRODUCT_LIST[製品一覧]
    C --> TOPIC_LIST[学習テーマ一覧]
    D --> COMPARE[比較画面]
    E --> SEARCH[検索結果]
```

ホーム画面では、利用者が「どこから始めればよいか」を迷わないことを優先する。

---

# 5. 素材から学ぶ経路

```mermaid
flowchart LR
    HOME[ホーム]
    LIST[素材一覧]
    FILTER[検索・絞り込み]
    DETAIL[素材詳細]
    RELATED[関連素材]
    PRODUCT[関連製品]
    TOPIC[関連テーマ]
    COMPARE[比較]

    HOME --> LIST
    LIST --> FILTER
    FILTER --> LIST
    LIST --> DETAIL

    DETAIL --> RELATED
    RELATED --> DETAIL

    DETAIL --> PRODUCT
    DETAIL --> TOPIC
    DETAIL --> COMPARE

    COMPARE --> DETAIL
```

代表的な利用例：

```text
ホーム
↓
素材を探す
↓
保湿で絞り込む
↓
グリセリンを選ぶ
↓
構造と保湿機能を学ぶ
↓
尿素と比較する
```

---

# 6. 製品から学ぶ経路

```mermaid
flowchart LR
    HOME[ホーム]
    PRODUCT_LIST[製品一覧]
    PRODUCT_DETAIL[製品詳細]
    ROLE[製剤中での役割]
    INGREDIENT[関連素材]
    ING_DETAIL[素材詳細]
    TOPIC[学習テーマ]

    HOME --> PRODUCT_LIST
    PRODUCT_LIST --> PRODUCT_DETAIL
    PRODUCT_DETAIL --> ROLE
    ROLE --> INGREDIENT
    INGREDIENT --> ING_DETAIL
    ING_DETAIL --> TOPIC
```

代表的な利用例：

```text
ホーム
↓
製品から学ぶ
↓
クリームを選ぶ
↓
水相・油相・増粘の役割を確認する
↓
スクワランを選ぶ
↓
疎水性とエモリエントを学ぶ
```

---

# 7. 学習テーマから学ぶ経路

```mermaid
flowchart LR
    HOME[ホーム]
    TOPIC_LIST[学習テーマ一覧]
    TOPIC_DETAIL[学習テーマ詳細]
    CONCEPT[概念説明]
    RELATED_ING[関連素材]
    ING_DETAIL[素材詳細]
    RELATED_TOPIC[関連テーマ]
    COMPARE[比較]

    HOME --> TOPIC_LIST
    TOPIC_LIST --> TOPIC_DETAIL
    TOPIC_DETAIL --> CONCEPT
    TOPIC_DETAIL --> RELATED_ING
    RELATED_ING --> ING_DETAIL
    TOPIC_DETAIL --> RELATED_TOPIC
    RELATED_TOPIC --> TOPIC_DETAIL
    TOPIC_DETAIL --> COMPARE
```

代表的な利用例：

```text
ホーム
↓
テーマから学ぶ
↓
水素結合を選ぶ
↓
水との相互作用を学ぶ
↓
グリセリンと尿素を見る
↓
両者を比較する
```

---

# 8. 比較学習の経路

```mermaid
flowchart TB
    START[比較画面を開く]

    SELECT1[素材1を選択]
    SELECT2[素材2を選択]
    SELECT3[必要に応じて素材3を選択]

    RESULT[比較結果]
    COMMON[共通点]
    DIFFERENCE[相違点]
    USE[使い分け]
    DETAIL[素材詳細]
    TOPIC[関連テーマ]

    START --> SELECT1
    SELECT1 --> SELECT2
    SELECT2 --> SELECT3
    SELECT2 --> RESULT
    SELECT3 --> RESULT

    RESULT --> COMMON
    RESULT --> DIFFERENCE
    RESULT --> USE
    RESULT --> DETAIL
    RESULT --> TOPIC
```

比較画面では、利用者が最低2素材を選択した時点で比較結果を表示できるようにする。

比較対象は最大3素材を基本とする。

---

# 9. 検索経路

```mermaid
flowchart TB
    SEARCH_BOX[検索ボックス]
    QUERY[キーワード入力]
    RESULT[検索結果]

    ING_RESULT[素材]
    PRODUCT_RESULT[製品]
    TOPIC_RESULT[学習テーマ]
    EMPTY[該当なし]

    SEARCH_BOX --> QUERY
    QUERY --> RESULT

    RESULT --> ING_RESULT
    RESULT --> PRODUCT_RESULT
    RESULT --> TOPIC_RESULT
    RESULT --> EMPTY

    ING_RESULT --> ING_DETAIL[素材詳細]
    PRODUCT_RESULT --> PRODUCT_DETAIL[製品詳細]
    TOPIC_RESULT --> TOPIC_DETAIL[テーマ詳細]

    EMPTY --> SUGGEST[検索候補・条件解除]
```

初期実装では、検索対象を次の順に拡張する。

1. 素材名
2. 英語名
3. INCI名
4. 別名
5. 機能
6. 化学分類
7. 学習テーマ
8. 製品カテゴリー

---

# 10. 素材一覧画面の内部遷移

```mermaid
flowchart TB
    LIST[素材一覧]

    KEYWORD[キーワード検索]
    CATEGORY[主分類]
    CLASS[化学分類]
    FUNCTION[機能]
    ORIGIN[由来]
    PRODUCT[製品カテゴリー]
    RESET[条件リセット]
    CARD[素材カード]
    COMPARE_SELECT[比較対象に追加]

    LIST --> KEYWORD
    LIST --> CATEGORY
    LIST --> CLASS
    LIST --> FUNCTION
    LIST --> ORIGIN
    LIST --> PRODUCT
    LIST --> RESET

    KEYWORD --> LIST
    CATEGORY --> LIST
    CLASS --> LIST
    FUNCTION --> LIST
    ORIGIN --> LIST
    PRODUCT --> LIST
    RESET --> LIST

    LIST --> CARD
    CARD --> DETAIL[素材詳細]

    CARD --> COMPARE_SELECT
    COMPARE_SELECT --> COMPARE[比較画面]
```

---

# 11. 素材詳細画面の内部遷移

```mermaid
flowchart TB
    DETAIL[素材詳細]

    SUMMARY[概要]
    STRUCTURE[化学構造]
    PROPERTY[物理化学的性質]
    FUNCTION[化粧品中での機能]
    ROLE[製剤中での役割]
    PRODUCT[使用製品]
    RELATED[関連素材]
    TOPIC[関連学習テーマ]
    REFERENCE[参考文献]
    COMPARE[比較へ追加]

    DETAIL --> SUMMARY
    DETAIL --> STRUCTURE
    DETAIL --> PROPERTY
    DETAIL --> FUNCTION
    DETAIL --> ROLE
    DETAIL --> PRODUCT
    DETAIL --> RELATED
    DETAIL --> TOPIC
    DETAIL --> REFERENCE
    DETAIL --> COMPARE

    PRODUCT --> PRODUCT_DETAIL[製品詳細]
    RELATED --> RELATED_DETAIL[別の素材詳細]
    TOPIC --> TOPIC_DETAIL[テーマ詳細]
    COMPARE --> COMPARE_PAGE[比較画面]
```

素材詳細画面は、一つの縦長ページを基本とする。

ページ内リンクまたはセクションナビゲーションを設置し、目的の情報へ移動しやすくする。

---

# 12. 製品詳細画面の内部遷移

```mermaid
flowchart TB
    PRODUCT_DETAIL[製品詳細]

    OVERVIEW[製品概要]
    FORMULATION[基本製剤構成]
    WATER_PHASE[水相]
    OIL_PHASE[油相]
    OTHER_PHASE[粉体・その他]
    ROLE[必要な役割]
    INGREDIENTS[関連素材]
    TOPICS[関連テーマ]

    PRODUCT_DETAIL --> OVERVIEW
    PRODUCT_DETAIL --> FORMULATION

    FORMULATION --> WATER_PHASE
    FORMULATION --> OIL_PHASE
    FORMULATION --> OTHER_PHASE

    PRODUCT_DETAIL --> ROLE
    ROLE --> INGREDIENTS
    PRODUCT_DETAIL --> TOPICS

    INGREDIENTS --> ING_DETAIL[素材詳細]
    TOPICS --> TOPIC_DETAIL[テーマ詳細]
```

製品画面では、実際の商品処方を断定的に示すのではなく、製品カテゴリーの基本的な構成を学習用に示す。

---

# 13. 学習テーマ詳細画面の内部遷移

```mermaid
flowchart TB
    TOPIC_DETAIL[学習テーマ詳細]

    INTRO[一言説明]
    BASIC[基本説明]
    DIAGRAM[模式図]
    CHEMISTRY[化学的説明]
    EXAMPLE[素材例]
    COMPARE[比較例]
    RELATED[関連テーマ]
    GLOSSARY[関連用語]
    REFERENCE[参考文献]

    TOPIC_DETAIL --> INTRO
    TOPIC_DETAIL --> BASIC
    TOPIC_DETAIL --> DIAGRAM
    TOPIC_DETAIL --> CHEMISTRY
    TOPIC_DETAIL --> EXAMPLE
    TOPIC_DETAIL --> COMPARE
    TOPIC_DETAIL --> RELATED
    TOPIC_DETAIL --> GLOSSARY
    TOPIC_DETAIL --> REFERENCE

    EXAMPLE --> ING_DETAIL[素材詳細]
    COMPARE --> COMPARE_PAGE[比較画面]
    RELATED --> RELATED_TOPIC[別のテーマ詳細]
```

---

# 14. パンくずリスト

主要画面では、現在位置を示すパンくずリストを表示する。

例：

## 素材詳細

```text
ホーム
＞
素材を探す
＞
グリセリン
```

## 製品詳細

```text
ホーム
＞
製品から学ぶ
＞
クリーム
```

## 学習テーマ詳細

```text
ホーム
＞
テーマから学ぶ
＞
水素結合
```

## 比較画面

```text
ホーム
＞
比較する
＞
グリセリンと尿素
```

パンくずリストの各項目は、原則として上位画面へのリンクとする。

---

# 15. URL設計

画面遷移とURLを対応させる。

| 画面      | URL例                       |
| ------- | -------------------------- |
| ホーム     | `/`                        |
| 素材一覧    | `/ingredients`             |
| 素材詳細    | `/ingredients/glycerin`    |
| 製品一覧    | `/products`                |
| 製品詳細    | `/products/cream`          |
| 学習テーマ一覧 | `/topics`                  |
| 学習テーマ詳細 | `/topics/hydrogen-bonding` |
| 比較      | `/compare`                 |
| 検索      | `/search?q=glycerin`       |
| 用語集     | `/glossary`                |
| 教材について  | `/about`                   |

URLでは、原則として英小文字とハイフンを使用する。

---

# 16. 直接アクセス

利用者は、ホーム画面を経由せず、URLから素材詳細や学習テーマ詳細へ直接アクセスできるものとする。

```mermaid
flowchart LR
    URL[外部リンク・検索結果]
    DETAIL[詳細画面]
    NAV[関連画面への移動]

    URL --> DETAIL
    DETAIL --> NAV
```

直接アクセス時にも、次の情報を表示する。

* ページタイトル
* パンくずリスト
* グローバルナビゲーション
* 関連素材
* 関連テーマ
* ホームへのリンク

---

# 17. 戻る操作

利用者が画面遷移後に元の条件へ戻れるようにする。

例：

```text
素材一覧
↓
「保湿」で絞り込み
↓
グリセリン詳細
↓
一覧へ戻る
```

この場合、可能な限り次の状態を維持する。

* 検索キーワード
* 絞り込み条件
* 並び順
* スクロール位置
* 比較対象への選択状態

初期版では実装難易度を考慮し、少なくともURLクエリによって検索条件を保持する。

例：

```text
/ingredients?function=moisturizing
```

---

# 18. スマートフォンでの画面遷移

スマートフォンでは、グローバルナビゲーションを折りたたみ式にできる。

```mermaid
flowchart TB
    HEADER[ヘッダー]
    MENU[メニューボタン]
    DRAWER[ナビゲーションメニュー]

    HOME[ホーム]
    ING[素材を探す]
    PRODUCT[製品から学ぶ]
    TOPIC[テーマから学ぶ]
    COMPARE[比較する]

    HEADER --> MENU
    MENU --> DRAWER

    DRAWER --> HOME
    DRAWER --> ING
    DRAWER --> PRODUCT
    DRAWER --> TOPIC
    DRAWER --> COMPARE
```

スマートフォンでは、画面下部の固定ナビゲーションも将来候補とするが、Ver.1.0では必須としない。

---

# 19. エラー時の遷移

## 19.1 存在しないURL

```mermaid
flowchart LR
    INVALID[存在しないURL]
    NOT_FOUND[404画面]
    HOME[ホーム]
    SEARCH[検索]
    ING_LIST[素材一覧]

    INVALID --> NOT_FOUND
    NOT_FOUND --> HOME
    NOT_FOUND --> SEARCH
    NOT_FOUND --> ING_LIST
```

404画面では、エラーコードだけでなく、利用者が次に進めるリンクを表示する。

---

## 19.2 素材データが見つからない場合

```mermaid
flowchart LR
    REQUEST[素材詳細を要求]
    CHECK{データが存在するか}
    DETAIL[素材詳細]
    ERROR[素材が見つからない]
    LIST[素材一覧]

    REQUEST --> CHECK
    CHECK -->|存在する| DETAIL
    CHECK -->|存在しない| ERROR
    ERROR --> LIST
```

---

## 19.3 検索結果が0件の場合

```mermaid
flowchart TB
    ZERO[検索結果 0件]
    REMOVE[条件を減らす]
    RESET[すべて解除]
    SUGGEST[候補語を見る]
    LIST[全素材を見る]

    ZERO --> REMOVE
    ZERO --> RESET
    ZERO --> SUGGEST
    ZERO --> LIST
```

---

# 20. 初回利用者の推奨経路

初めて利用する人には、次の経路を推奨する。

```mermaid
flowchart LR
    HOME[ホーム]
    GLYCERIN[グリセリン]
    STRUCTURE[ヒドロキシ基]
    PROPERTY[水素結合・親水性]
    FUNCTION[保湿]
    COMPARE[尿素と比較]
    PRODUCT[化粧水での役割]

    HOME --> GLYCERIN
    GLYCERIN --> STRUCTURE
    STRUCTURE --> PROPERTY
    PROPERTY --> FUNCTION
    FUNCTION --> COMPARE
    COMPARE --> PRODUCT
```

この経路により、システムの基本概念である次の流れを体験できる。

```text
構造
↓
性質
↓
機能
↓
比較
↓
製品
```

---

# 21. 授業での利用経路

教員が授業で利用する場合の例を示す。

```mermaid
flowchart TB
    TOPIC[学習テーマを提示]
    EXPLAIN[化学概念を説明]
    MATERIAL[素材例を見る]
    COMPARE[複数素材を比較]
    PRODUCT[製品へ応用]
    QUESTION[問いを提示]

    TOPIC --> EXPLAIN
    EXPLAIN --> MATERIAL
    MATERIAL --> COMPARE
    COMPARE --> PRODUCT
    PRODUCT --> QUESTION
```

例：

```text
水素結合
↓
グリセリンと尿素
↓
構造の違いを比較
↓
保湿機構を比較
↓
化粧水やクリームでの役割を考える
```

---

# 22. 自主学習での利用経路

```mermaid
flowchart TB
    INTEREST[気になる素材・製品]
    DETAIL[詳細を見る]
    TERM[分からない用語]
    GLOSSARY[用語集]
    RELATED[関連素材・テーマ]
    COMPARE[比較]
    RETURN[元の内容へ戻る]

    INTEREST --> DETAIL
    DETAIL --> TERM
    TERM --> GLOSSARY
    GLOSSARY --> RETURN
    DETAIL --> RELATED
    RELATED --> COMPARE
```

---

# 23. Ver.1.0で実装する遷移

Ver.1.0では、少なくとも次の遷移を実装する。

* ホームから素材一覧
* ホームから製品一覧
* ホームから学習テーマ一覧
* ホームから比較画面
* 素材一覧から素材詳細
* 素材詳細から関連素材
* 素材詳細から製品詳細
* 素材詳細から学習テーマ詳細
* 素材詳細から比較画面
* 製品一覧から製品詳細
* 製品詳細から素材詳細
* 学習テーマ一覧からテーマ詳細
* テーマ詳細から素材詳細
* テーマ詳細から比較画面
* 検索結果から各詳細画面
* 主要画面からホーム

---

# 24. Ver.1.1以降の追加候補

将来、次の画面と遷移を追加候補とする。

* クイズ一覧
* クイズ詳細
* 学習履歴
* お気に入り
* 理解度確認
* ログイン
* マイページ
* 教員用画面
* 授業用コース
* 学習順序の推奨
* AI質問画面
* 処方シミュレーション
* 構造式から素材を考える問題
* 素材から製品構成を考える問題

将来の例：

```mermaid
flowchart LR
    DETAIL[素材詳細]
    QUIZ[関連クイズ]
    RESULT[回答結果]
    HISTORY[学習履歴]
    RECOMMEND[次の学習候補]

    DETAIL --> QUIZ
    QUIZ --> RESULT
    RESULT --> HISTORY
    RESULT --> RECOMMEND
```

---

# 25. 画面遷移設計の原則

1. 主要画面へ3操作以内で到達できるようにする。
2. 行き止まりの画面を作らない。
3. すべての詳細画面に関連リンクを設ける。
4. 検索と一覧の役割を重複させすぎない。
5. URLから直接アクセスできるようにする。
6. 戻る操作で利用者の条件を失わせない。
7. 現在位置をパンくずリストで示す。
8. スマートフォンでも主要遷移を維持する。
9. エラー時に次の行動を提示する。
10. 学習経路と単なるサイト閲覧を一致させる。

---

# 26. 更新方針

次の場合に本書を更新する。

* 新しい画面を追加したとき
* URL構造を変更したとき
* グローバルナビゲーションを変更したとき
* 検索対象を追加したとき
* 比較機能の仕様を変更したとき
* ログインや学習履歴を導入したとき
* スマートフォンのナビゲーションを変更したとき
* 教員用機能を追加したとき

重要な変更は、`docs/08_変更履歴.md` にも記録する。
