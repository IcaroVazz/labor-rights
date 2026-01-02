import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; 
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simulador de Rescisão CLT | Cálculo Exato e Atualizado 2025",
  description: "Calcule agora quanto você vai receber na sua rescisão de contrato. Simulador gratuito de férias, 13º salário, aviso prévio e multa do FGTS.",
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
        {/* Validação da conta AdSense (Opcional mas recomendado) */}
        <meta name="google-adsense-account" content="ca-pub-6624327415321086" />
      </head>
      <body 
        className={`${inter.className} bg-slate-50 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white overflow-x-hidden`}
      >
        {children}

        {/* O Script do AdSense entra aqui, antes de fechar o body */}
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