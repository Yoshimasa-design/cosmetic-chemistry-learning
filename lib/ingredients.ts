import { ingredients } from "@/data/ingredients/ingredients";
import type { Ingredient } from "@/types/ingredient";

export function getAllIngredients(): Ingredient[] {
  return ingredients;
}

export function getIngredientBySlug(
  slug: string,
): Ingredient | undefined {
  return ingredients.find((ingredient) => ingredient.slug === slug);
}

export function getIngredientsBySlugs(
  slugs: string[],
): Ingredient[] {
  return slugs
    .map((slug) => getIngredientBySlug(slug))
    .filter((ingredient): ingredient is Ingredient => ingredient !== undefined);
}

export function getIngredientSlugs(): string[] {
  return ingredients.map((ingredient) => ingredient.slug);
}
