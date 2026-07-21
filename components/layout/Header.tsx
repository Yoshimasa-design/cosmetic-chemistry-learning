import Link from "next/link";

import MainNavigation from "@/components/layout/MainNavigation";
import PageContainer from "@/components/layout/PageContainer";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <PageContainer className="py-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Link
            href="/"
            className="w-fit rounded-sm text-xl font-bold tracking-tight text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"
          >
            化粧品素材から化学を学ぼう
          </Link>

          <MainNavigation />
        </div>
      </PageContainer>
    </header>
  );
}
