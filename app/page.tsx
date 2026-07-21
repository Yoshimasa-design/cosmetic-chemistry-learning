import Link from "next/link";

import PageContainer from "@/components/layout/PageContainer";

const learningPaths = [
  {
    href: "/ingredients",
    title: "素材から学ぶ",
    description:
      "化粧品素材の構造、性質、機能、製剤中での役割を順に学びます。",
  },
  {
    href: "/products",
    title: "製品から学ぶ",
    description:
      "化粧水、乳液、クリームなどの製品から、配合素材の役割を考えます。",
  },
  {
    href: "/topics",
    title: "化学テーマから学ぶ",
    description:
      "乳化、界面活性、抗酸化、紫外線防御などのテーマから学びます。",
  },
  {
    href: "/compare",
    title: "素材を比較する",
    description:
      "複数の素材について、構造、性質、機能の共通点と相違点を比較します。",
  },
];

const learningSteps = [
  "化学構造",
  "物理化学的性質",
  "素材の機能",
  "製剤中での役割",
  "化粧品製品",
];

export default function Home() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <PageContainer className="py-16 sm:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold tracking-wide text-indigo-700">
              COSMETIC CHEMISTRY LEARNING
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              化粧品素材から
              <br className="hidden sm:block" />
              化学を学ぼう
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              化粧品に使われる素材を入口として、化学構造、物理化学的性質、
              機能、製剤中での役割を学ぶ教育用Web教材です。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/ingredients"
                className="rounded-lg bg-indigo-700 px-5 py-3 font-semibold text-white transition hover:bg-indigo-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700"
              >
                素材から学ぶ
              </Link>

              <Link
                href="/about"
                className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700"
              >
                この教材について
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>

      <PageContainer className="space-y-16 py-14 sm:py-16">
        <section aria-labelledby="learning-flow-heading">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-indigo-700">学習の流れ</p>
            <h2
              id="learning-flow-heading"
              className="mt-2 text-3xl font-bold tracking-tight text-slate-900"
            >
              素材と化学を段階的につなげる
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              素材名や効能を覚えるだけではなく、構造から性質、機能、製品までの
              つながりを理解することを目指します。
            </p>
          </div>

          <ol className="mt-8 grid gap-4 md:grid-cols-5">
            {learningSteps.map((step, index) => (
              <li
                key={step}
                className="relative rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="text-sm font-bold text-indigo-700">
                  STEP {index + 1}
                </span>
                <p className="mt-2 font-semibold text-slate-900">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="learning-paths-heading">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-indigo-700">学び方を選ぶ</p>
            <h2
              id="learning-paths-heading"
              className="mt-2 text-3xl font-bold tracking-tight text-slate-900"
            >
              4つの入口から学習する
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {learningPaths.map((path) => (
              <Link
                key={path.href}
                href={path.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700"
              >
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-700">
                  {path.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {path.description}
                </p>
                <p className="mt-5 text-sm font-semibold text-indigo-700">
                  ページを見る →
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="development-status-heading"
          className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8"
        >
          <p className="text-sm font-semibold text-amber-800">Ver.0.2</p>
          <h2
            id="development-status-heading"
            className="mt-2 text-2xl font-bold text-slate-900"
          >
            現在、教材の基本環境を構築しています
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            このバージョンでは、画面構成と共通レイアウトを整備しています。
            化粧品素材のデータと本格的な学習機能は、今後のバージョンで順次追加します。
          </p>
        </section>
      </PageContainer>
    </>
  );
}
