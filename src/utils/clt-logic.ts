import { differenceInMonths, differenceInYears } from 'date-fns';

export type CalculationResult = {
  saldoSalario: number;
  avisoPrevio: number;
  feriasVencidas: number;
  feriasProporcionais: number;
  tercoFerias: number;
  decimoTerceiro: number;
  multaFGTS: number;
  totalEstimado: number;
};

export function calculateRescisao(
  salary: number,
  startDate: Date,
  endDate: Date,
  reason: string
): CalculationResult {
  const monthsWorked = differenceInMonths(endDate, startDate);
  const yearsWorked = differenceInYears(endDate, startDate);
  
  const daysInLastMonth = endDate.getDate();
  const saldoSalario = (salary / 30) * daysInLastMonth;

  let diasAviso = 30;
  if (reason === 'sem_justa_causa') {
    diasAviso += Math.min(yearsWorked * 3, 60); 
  } else if (reason === 'pedido_demissao') {
    diasAviso = 0; 
  }
  const avisoPrevio = (reason === 'pedido_demissao' || reason === 'justa_causa') ? 0 : (salary / 30) * diasAviso;

  const mesesFeriasProp = (monthsWorked % 12) || 12; 
  const feriasVencidas = yearsWorked >= 1 && reason !== 'justa_causa' ? salary : 0;
  const feriasProporcionais = reason !== 'justa_causa' ? (salary / 12) * mesesFeriasProp : 0;
  const tercoFerias = (feriasVencidas + feriasProporcionais) / 3;

  const currentMonth = endDate.getMonth() + 1;
  const diasMesFim = endDate.getDate();
  const mesesDecimo = diasMesFim >= 15 ? currentMonth : currentMonth - 1;
  const decimoTerceiro = reason !== 'justa_causa' ? (salary / 12) * mesesDecimo : 0;

  const totalEstimadoDepositado = (salary * 0.08) * monthsWorked;
  const multaFGTS = reason === 'sem_justa_causa' ? totalEstimadoDepositado * 0.40 : 0;

  const totalEstimado = 
    saldoSalario + 
    avisoPrevio + 
    feriasVencidas + 
    feriasProporcionais + 
    tercoFerias + 
    decimoTerceiro + 
    multaFGTS;

  return {
    saldoSalario,
    avisoPrevio,
    feriasVencidas,
    feriasProporcionais,
    tercoFerias,
    decimoTerceiro,
    multaFGTS,
    totalEstimado
  };
}