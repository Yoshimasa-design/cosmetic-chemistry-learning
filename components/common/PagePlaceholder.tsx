import PageContainer from "@/components/layout/PageContainer";

interface PagePlaceholderProps {
  title: string;
  description: string;
  plannedVersion?: string;
}

export default function PagePlaceholder({
  title,
  description,
  plannedVersion,
}: PagePlaceholderProps) {
  return (
    <PageContainer>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold text-indigo-700">準備中</p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          {title}
        </h1>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">{description}</p>

        <p className="mt-6 rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-600">
          このページは現在準備中です。
          {plannedVersion && ` ${plannedVersion}で実装する予定です。`}
        </p>
      </section>
    </PageContainer>
  );
}
