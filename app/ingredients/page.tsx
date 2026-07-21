import type { Metadata } from "next";

import { IngredientList } from "@/components/ingredients/IngredientList";
import PageContainer from "@/components/layout/PageContainer";
import { getAllIngredients } from "@/lib/ingredients";

export const metadata: Metadata = {
  title: "化粧品素材から学ぶ",
  description:
    "化粧品素材の化学構造、性質、機能、製剤中での役割を学ぶ教材です。",
};

export default function IngredientsPage() {
  const ingredients = getAllIngredients();

  return (
    <PageContainer>
      <section className="page-hero">
        <p className="page-hero__eyebrow">
          Ingredients
        </p>
        <h1>化粧品素材から学ぶ</h1>
        <p>
          化粧品に使われる素材を、名称だけでなく、
          化学構造、物理化学的性質、製剤中での役割から学びます。
        </p>
      </section>

      <section
        aria-labelledby="ingredient-list-heading"
        className="content-section"
      >
        <div className="section-heading">
          <div>
            <p className="section-heading__eyebrow">
              Material Library
            </p>
            <h2 id="ingredient-list-heading">
              掲載素材
            </h2>
          </div>

          <p className="ingredient-count">
            {ingredients.length}種類
          </p>
        </div>

        <IngredientList ingredients={ingredients} />
      </section>
    </PageContainer>
  );
}
