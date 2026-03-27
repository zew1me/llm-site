import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "llm-site",
  description: "A Next.js site scaffold.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
