import Link from "next/link";

import PageContainer from "@/components/layout/PageContainer";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <PageContainer className="py-8">
        <div className="flex flex-col gap-5 text-sm text-slate-600 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-semibold text-slate-800">
              化粧品素材から化学を学ぼう
            </p>
            <p className="mt-2 max-w-2xl leading-6">
              化粧品素材を入口として、化学構造、性質、機能、製剤中での役割を学ぶ教育用Web教材です。
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <nav aria-label="補助ナビゲーション">
              <ul className="flex flex-wrap gap-4">
                <li>
                  <Link
                    href="/glossary"
                    className="hover:text-indigo-700 hover:underline"
                  >
                    用語集
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-indigo-700 hover:underline"
                  >
                    この教材について
                  </Link>
                </li>
              </ul>
            </nav>

            <p>© 2026 Cosmetic Chemistry Learning Project</p>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
