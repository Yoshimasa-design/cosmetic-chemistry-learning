import Link from "next/link";

import type { Ingredient } from "@/types/ingredient";

interface IngredientCardProps {
  ingredient: Ingredient;
}

export function IngredientCard({
  ingredient,
}: IngredientCardProps) {
  return (
    <article className="ingredient-card">
      <div className="ingredient-card__header">
        <p className="ingredient-card__inci">
          {ingredient.names.inci}
        </p>
        <h2 className="ingredient-card__title">
          {ingredient.names.japanese}
        </h2>
      </div>

      <p className="ingredient-card__summary">
        {ingredient.learning.summary}
      </p>

      <div className="ingredient-card__group">
        <h3>化学分類</h3>
        <ul className="tag-list">
          {ingredient.classification.chemicalClasses.map(
            (chemicalClass) => (
              <li key={chemicalClass}>{chemicalClass}</li>
            ),
          )}
        </ul>
      </div>

      <div className="ingredient-card__group">
        <h3>化粧品中での機能</h3>
        <ul className="tag-list">
          {ingredient.classification.cosmeticFunctions.map(
            (cosmeticFunction) => (
              <li key={cosmeticFunction}>
                {cosmeticFunction}
              </li>
            ),
          )}
        </ul>
      </div>

      <Link
        className="ingredient-card__link"
        href={`/ingredients/${ingredient.slug}`}
      >
        この素材を詳しく見る
      </Link>
    </article>
  );
}
