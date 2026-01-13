import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calculadora de Rescisão de Contrato CLT 2026 | Simulador Gratuito",
  description: "Calcule rescisão de contrato de trabalho com exatidão. Descubra valor de férias, 13º salário, aviso prévio e multa FGTS. Atualizado 2026.",
  keywords: ["calculadora rescisão", "calculo rescisão", "clt", "direitos trabalhistas", "aviso prévio", "multa fgts"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#4f46e5" />
        <meta name="google-adsense-account" content="ca-pub-6624327415321086" />
      </head>
      <body
        className={`${inter.className} bg-slate-50 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white overflow-x-hidden`}
      >
        {children}

        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6624327415321086"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}