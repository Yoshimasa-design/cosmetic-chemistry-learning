import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "化粧品素材から化学を学ぼう",
    template: "%s | 化粧品素材から化学を学ぼう",
  },
  description:
    "化粧品素材を入口として、化学構造、物理化学的性質、機能、製剤中での役割を学ぶ教育用Web教材です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
