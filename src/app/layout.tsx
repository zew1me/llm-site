import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Large Language Music",
  description:
    "Large Language Music is a minimal label for synthetic voices, uncanny hooks, and machine-born sound.",
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
