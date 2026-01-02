import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simulador de Rescisão CLT | Cálculo Exato e Atualizado 2025",
  description: "Calcule agora quanto você vai receber na sua rescisão de contrato. Simulador gratuito de férias, 13º salário, aviso prévio e multa do FGTS.",
  keywords: "calculadora rescisão, calculo clt, simulador trabalhista, aviso previo, multa fgts, direitos trabalhistas",
  authors: [{ name: "Simulador CLT" }],
  openGraph: {
    title: "Calculadora de Rescisão CLT Online",
    description: "Faça o cálculo da sua rescisão trabalhista em segundos com a lei atualizada.",
    type: "website",
    locale: "pt_BR",
  },
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
      </head>
      {/* AQUI ESTÁ A CORREÇÃO: 
        As classes bg-slate-50, text-slate-800, etc., estão aqui diretamente.
        Isso evita o erro de @apply no arquivo CSS.
      */}
      <body 
        className={`${inter.className} bg-slate-50 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}