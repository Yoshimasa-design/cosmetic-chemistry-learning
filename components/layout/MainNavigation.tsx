import Link from "next/link";

const navigationItems = [
  { href: "/", label: "ホーム" },
  { href: "/ingredients", label: "素材を探す" },
  { href: "/products", label: "製品から学ぶ" },
  { href: "/topics", label: "テーマから学ぶ" },
  { href: "/compare", label: "比較する" },
];

export default function MainNavigation() {
  return (
    <nav aria-label="メインナビゲーション">
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="rounded-sm text-slate-700 transition hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
