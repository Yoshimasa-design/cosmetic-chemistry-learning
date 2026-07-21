import type { Metadata } from "next";
import { notFound } from "next/navigation";

import IngredientDetail from "@/components/ingredient-detail/IngredientDetail";
import PageContainer from "@/components/layout/PageContainer";
import {
  getIngredientBySlug,
  getIngredientSlugs,
} from "@/lib/ingredients";

interface IngredientPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getIngredientSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: IngredientPageProps): Promise<Metadata> {
  const { slug } = await params;
  const ingredient = getIngredientBySlug(slug);

  if (!ingredient) {
    return {
      title: "素材が見つかりません",
    };
  }

  return {
    title: `${ingredient.names.japanese}｜化粧品素材から学ぶ`,
    description: ingredient.learning.summary,
  };
}

export default async function IngredientPage({
  params,
}: IngredientPageProps) {
  const { slug } = await params;
  const ingredient = getIngredientBySlug(slug);

  if (!ingredient) {
    notFound();
  }

  return (
    <PageContainer>
      <IngredientDetail ingredient={ingredient} />
    </PageContainer>
  );
}
