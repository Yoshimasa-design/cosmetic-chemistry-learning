import type { Ingredient } from "@/types/ingredient";

import { IngredientCard } from "./IngredientCard";

interface IngredientListProps {
  ingredients: Ingredient[];
}

export function IngredientList({
  ingredients,
}: IngredientListProps) {
  return (
    <div className="ingredient-grid">
      {ingredients.map((ingredient) => (
        <IngredientCard
          ingredient={ingredient}
          key={ingredient.id}
        />
      ))}
    </div>
  );
}
