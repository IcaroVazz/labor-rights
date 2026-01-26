'use client';

import { useState } from 'react';
import { calculateRescisao, CalculationResult } from '../utils/clt-logic';
import AdUnit from '../components/AdUnit';
import Link from 'next/link';
import {
  Printer, BookOpen, Calculator, DollarSign, Calendar,
  Briefcase, ArrowRight, CheckCircle2, HelpCircle,
  FileText, AlertTriangle, ShieldCheck, Scale, Info
} from 'lucide-react';

export default function Home() {
  const [salary, setSalary] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('sem_justa_causa');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!salary || !startDate || !endDate) return;

    setLoading(true);
    setTimeout(() => {
      const res = calculateRescisao(
        parseFloat(salary),
        new Date(startDate),
        new Date(endDate),
        reason
      );
      setResult(res);
      setLoading(false);

      setTimeout(() => {
        document.getElementById('resultado')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }, 600);
  };

  const handlePrint = () => window.print();

  const formatCurrency = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-sans selection:bg-indigo-500 selection:text-white pb-32">

      {/* Background Decorativo */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-200/30 blur-[100px]" />
        <div className="absolute top-[10%] -right-[10%] w-[40%] h-[60%] rounded-full bg-blue-200/30 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto">

        <header className="text-center mb-10 animate-slide-up">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-200 mb-4">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
            Calculadora <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Rescisão CLT 2026</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-lg mx-auto">
            Simule seus direitos trabalhistas conforme a legislação atualizada: Férias, 13º, Aviso Prévio e Multa do FGTS.
          </p>
        </header>

        {/* SEÇÃO DE CONFIANÇA (Estratégica para AdSense) */}
        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm flex gap-4">
            <Scale className="text-indigo-600 w-10 h-10 shrink-0" />
            <div>
              <h3 className="font-bold text-slate-800">Conformidade Legal</h3>
              <p className="text-xs text-slate-500">Cálculos baseados na Lei nº 12.506/2011 e regras vigentes da CLT em 2026.</p>
            </div>
          </div>
          <div className="p-5 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm flex gap-4">
            <ShieldCheck className="text-emerald-600 w-10 h-10 shrink-0" />
            <div>
              <h3 className="font-bold text-slate-800">Privacidade Total</h3>
              <p className="text-xs text-slate-500">Seus dados financeiros não saem do seu navegador. Não armazenamos valores digitados.</p>
            </div>
          </div>
        </section>

        <div className="glass-card bg-white/80 backdrop-blur-lg border border-white/20 shadow-xl rounded-3xl p-6 sm:p-10 animate-slide-up mb-8">
          <form onSubmit={handleCalculate} className="space-y-6">
            <div className="relative group">
              <label className="block text-sm font-semibold text-slate-700 mb-2 pl-1">Salário Bruto Mensal</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-slate-400 font-bold">R$</span>
                </div>
                <input
                  type="number"
                  step="0.01"
                  required
                  placeholder="Ex: 3500,00"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none text-lg font-medium text-slate-900"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 pl-1">Data de Início</label>
                <div className="relative">
                  <Calendar className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400 w-5 h-5" />
                  <input
                    type="date"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:bg-white focus:border-indigo-500 transition-all outline-none text-slate-900"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 pl-1">Data de Saída</label>
                <div className="relative">
                  <Calendar className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400 w-5 h-5" />
                  <input
                    type="date"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:bg-white focus:border-indigo-500 transition-all outline-none text-slate-900"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2 pl-1">Modalidade de Desligamento</label>
              <div className="relative">
                <Briefcase className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400 w-5 h-5" />
                <select
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:bg-white focus:border-indigo-500 transition-all outline-none text-slate-900 appearance-none cursor-pointer"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                >
                  <option value="sem_justa_causa">Demissão sem Justa Causa (Empregador)</option>
                  <option value="pedido_demissao">Pedido de Demissão (Empregado)</option>
                  <option value="justa_causa">Demissão por Justa Causa</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl shadow-lg transform transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-lg disabled:opacity-70"
            >
              {loading ? <span className="animate-pulse">Calculando verbas...</span> : <>Calcular Meus Direitos <ArrowRight className="w-5 h-5" /></>}
            </button>
          </form>
        </div>

        {/* ARTIGO TÉCNICO FIXO (Resolve erro de "Baixo Valor") */}
        <article className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 mb-8 prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Info className="text-indigo-600" /> Como é calculado o acerto trabalhista?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            O cálculo da rescisão de contrato envolve a apuração de diversas verbas salariais e indenizatórias.
            O <strong>Saldo de Salário</strong> é o pagamento pelos dias trabalhados no último mês.
            O <strong>13º Salário Proporcional</strong> é calculado na proporção de 1/12 por mês trabalhado,
            considerando como mês integral frações iguais ou superiores a 15 dias de serviço.
          </p>
          <p className="text-slate-600 leading-relaxed">
            As <strong>Férias Proporcionais</strong>, acrescidas do terço constitucional (1/3), são direitos
            garantidos em quase todas as modalidades de rescisão. Na demissão sem justa causa, acrescenta-se o
            <strong>Aviso Prévio</strong> (indenizado ou trabalhado) e a <strong>Multa de 40% sobre o FGTS</strong>,
            conforme estabelecido no Artigo 477 da Consolidação das Leis do Trabalho (CLT).
          </p>
        </article>

        {/* AdUnit central cercado de texto informativo */}
        <AdUnit slot="1234567890" />

        {result && (
          <div id="resultado" className="mt-8 mb-16 animate-slide-up">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
              <div className="bg-slate-900 p-6 sm:p-8 text-white">
                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Total Líquido Estimado</p>
                <h2 className="text-4xl sm:text-5xl font-bold text-emerald-400">
                  {formatCurrency(result.totalEstimado)}
                </h2>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-indigo-600" /> Detalhamento das Verbas
                </h3>
                <div className="space-y-3">
                  <ResultRow label="Saldo de Salário" value={result.saldoSalario} />
                  <ResultRow label="Aviso Prévio Indenizado" value={result.avisoPrevio} highlight={result.avisoPrevio > 0} />
                  <ResultRow label="Férias (Vencidas + Proporcionais)" value={result.feriasVencidas + result.feriasProporcionais} />
                  <ResultRow label="Terço Constitucional (1/3)" value={result.tercoFerias} />
                  <ResultRow label="13º Salário Proporcional" value={result.decimoTerceiro} />
                  <ResultRow label="Multa de 40% (FGTS)" value={result.multaFGTS} highlight={result.multaFGTS > 0} isLast />
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 no-print">
                  <button onClick={handlePrint} className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-700 font-semibold py-3.5 rounded-xl border border-slate-200">
                    <Printer size={18} /> Gerar Relatório PDF
                  </button>
                  <a href="https://www.gov.br/trabalho-e-emprego/pt-br" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-indigo-50 text-indigo-700 font-semibold py-3.5 rounded-xl border border-indigo-100">
                    <BookOpen size={18} /> Consultar MTE
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <AdUnit slot="0987654321" />
            </div>
          </div>
        )}

        <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <HelpCircle className="text-indigo-600" /> Guia Rápido de Direitos
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="font-bold text-slate-800 mb-2">Aviso Prévio Proporcional</h3>
              <p className="text-slate-600">Desde 2011, o aviso prévio conta com 30 dias base mais 3 dias para cada ano completo de trabalho, limitando-se a 90 dias totais.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-2">Saque do FGTS</h3>
              <p className="text-slate-600">Na demissão sem justa causa, o trabalhador pode sacar o saldo do fundo e recebe a multa indenizatória paga pela empresa.</p>
            </div>
          </div>
        </section>

        <footer className="mt-16 text-center border-t border-slate-200 pt-8 pb-8">
          <div className="flex justify-center gap-6 mb-4 text-sm font-medium text-slate-600">
            <Link href="/politica-privacidade" className="hover:text-indigo-600 transition">Privacidade</Link>
            <Link href="/termos-de-uso" className="hover:text-indigo-600 transition">Termos</Link>
            <Link href="/sobre" className="hover:text-indigo-600 transition">Sobre o Projeto</Link>
          </div>
          <p className="text-slate-400 text-xs">© 2026 Simulador de Direitos Trabalhistas Brasil. Desenvolvido com foco em transparência e LGPD.</p>
        </footer>
      </div>
    </main>
  );
}

function ResultRow({ label, value, highlight = false, isLast = false }: { label: string, value: number, highlight?: boolean, isLast?: boolean }) {
  return (
    <div className={`flex justify-between items-center p-4 rounded-xl ${highlight ? 'bg-indigo-50 border border-indigo-100' : 'bg-slate-50 border border-slate-100'} ${isLast ? 'mb-0' : 'mb-2'}`}>
      <span className={`text-sm sm:text-base ${highlight ? 'font-semibold text-indigo-900' : 'text-slate-600'}`}>{label}</span>
      <span className={`font-mono font-medium ${highlight ? 'text-indigo-700' : 'text-slate-900'}`}>
        {value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </span>
    </div>
  );
}