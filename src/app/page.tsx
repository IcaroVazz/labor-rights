'use client';

import { useState } from 'react';
import { calculateRescisao, CalculationResult } from '../utils/clt-logic';
import AdUnit from '../components/AdUnit';
import { Printer, BookOpen, Calculator, DollarSign, Calendar, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';

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
    <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-sans selection:bg-indigo-500 selection:text-white">
      
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-200/30 blur-[100px]" />
        <div className="absolute top-[10%] -right-[10%] w-[40%] h-[60%] rounded-full bg-blue-200/30 blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto">
        
        <header className="text-center mb-10 animate-slide-up">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-200 mb-4">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
            Calculadora <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Rescisão CLT</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-lg mx-auto">
            Simule seus direitos trabalhistas de forma rápida, segura e atualizada de acordo com as leis.
          </p>
        </header>

        <div className="glass-card rounded-3xl p-6 sm:p-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          
          <form onSubmit={handleCalculate} className="space-y-6">
            
            <div className="relative group">
              <label className="block text-sm font-semibold text-slate-700 mb-2 pl-1">Salário Bruto</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-slate-400 font-bold">R$</span>
                </div>
                <input
                  type="number"
                  step="0.01"
                  required
                  placeholder="0,00"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none text-lg font-medium text-slate-900 placeholder:text-slate-300"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 pl-1">Admissão</label>
                <div className="relative">
                  <Calendar className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400 w-5 h-5" />
                  <input
                    type="date"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none text-slate-900"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 pl-1">Afastamento</label>
                <div className="relative">
                  <Calendar className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400 w-5 h-5" />
                  <input
                    type="date"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none text-slate-900"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2 pl-1">Motivo da Rescisão</label>
              <div className="relative">
                <Briefcase className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400 w-5 h-5" />
                <select
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none text-slate-900 appearance-none"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                >
                  <option value="sem_justa_causa">Demissão sem Justa Causa</option>
                  <option value="pedido_demissao">Pedido de Demissão</option>
                  <option value="justa_causa">Demissão por Justa Causa</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-200 transform transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="animate-pulse">Calculando...</span>
              ) : (
                <>Calcular Meus Direitos <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>

          <div className="mt-8">
            <AdUnit slot="1234567890" />
          </div>
        </div>

        {result && (
          <div id="resultado" className="mt-8 animate-slide-up">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
              
              <div className="bg-slate-900 p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Total Estimado a Receber</p>
                    <h2 className="text-4xl sm:text-5xl font-bold text-emerald-400 tracking-tight">
                      {formatCurrency(result.totalEstimado)}
                    </h2>
                  </div>
                  <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                </div>
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl"></div>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-indigo-600" /> Detalhamento das Verbas
                </h3>
                
                <div className="space-y-3">
                  <ResultRow label="Saldo de Salário" value={result.saldoSalario} />
                  <ResultRow label="Aviso Prévio Indenizado" value={result.avisoPrevio} highlight={result.avisoPrevio > 0} />
                  <ResultRow label="Férias Vencidas + Proporcionais" value={result.feriasVencidas + result.feriasProporcionais} />
                  <ResultRow label="1/3 de Férias" value={result.tercoFerias} />
                  <ResultRow label="13º Salário Proporcional" value={result.decimoTerceiro} />
                  <ResultRow label="Multa FGTS (40%)" value={result.multaFGTS} highlight={result.multaFGTS > 0} isLast />
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 no-print">
                  <button 
                    onClick={handlePrint}
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-700 font-semibold py-3.5 rounded-xl hover:bg-slate-200 transition border border-slate-200"
                  >
                    <Printer size={18} /> Imprimir / Salvar PDF
                  </button>
                  <a 
                    href="https://www.gov.br/trabalho-e-emprego/pt-br" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-indigo-50 text-indigo-700 font-semibold py-3.5 rounded-xl hover:bg-indigo-100 transition border border-indigo-100"
                  >
                    <BookOpen size={18} /> Lei na Íntegra
                  </a>
                </div>
              </div>
            </div>

             <div className="mt-8">
                <AdUnit slot="0987654321" />
            </div>
          </div>
        )}

        <footer className="mt-12 text-center text-slate-400 text-sm pb-8">
          <p>© 2026 Simulador CLT. Feito para ajudar trabalhadores.</p>
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