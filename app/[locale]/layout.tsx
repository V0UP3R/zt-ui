import type { Metadata } from "next";
import localFont from "next/font/local";
import "../../app/globals.css";
import { i18n } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({locale}));
}

export default function RootLayout({
  children, params
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  return (
    <html lang={params.locale} data-theme="dark">
      <body
        className={`antialiased bg-primary`}
      >
        {children}
      </body>
    </html>
  );
}
