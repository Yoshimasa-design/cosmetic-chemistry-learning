import Link from "next/link";

import type { Ingredient } from "@/types/ingredient";

interface IngredientDetailProps {
  ingredient: Ingredient;
}

function displayValue(
  value: string | number | undefined,
): string {
  if (value === undefined || value === "") {
    return "未登録";
  }

  return String(value);
}

export default function IngredientDetail({
  ingredient,
}: IngredientDetailProps) {
  const identifiers = ingredient.identifiers;
  const properties = ingredient.properties;

  return (
    <article className="ingredient-detail">
      <Link href="/ingredients">
        ← 素材一覧へ戻る
      </Link>

      <header>
        <p>{ingredient.names.inci}</p>
        <h1>{ingredient.names.japanese}</h1>
      </header>

      <section>
        <h2>概要</h2>
        <p>{ingredient.learning.summary}</p>
      </section>

      <section>
        <h2>基本情報</h2>

        <table>
          <tbody>
            <tr>
              <th scope="row">分子式</th>
              <td>
                {displayValue(
                  identifiers?.molecularFormula,
                )}
              </td>
            </tr>

            <tr>
              <th scope="row">分子量</th>
              <td>
                {displayValue(
                  identifiers?.molecularWeight,
                )}
              </td>
            </tr>

            <tr>
              <th scope="row">CAS番号</th>
              <td>
                {displayValue(
                  identifiers?.casNumber,
                )}
              </td>
            </tr>

            <tr>
              <th scope="row">状態</th>
              <td>
                {displayValue(properties?.state)}
              </td>
            </tr>

            <tr>
              <th scope="row">極性</th>
              <td>
                {displayValue(properties?.polarity)}
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>化学的特徴</h2>

        <ul>
          {ingredient.learning.chemistryPoints.map(
            (point) => (
              <li key={point}>{point}</li>
            ),
          )}
        </ul>
      </section>

      <section>
        <h2>化粧品での役割</h2>
        <p>{ingredient.learning.cosmeticRole}</p>
      </section>
    </article>
  );
}
