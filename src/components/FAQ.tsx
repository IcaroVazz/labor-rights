export default function FAQ() {
    const faqs = [
        { q: "Quem tem direito ao aviso prévio proporcional?", a: "Trabalhadores demitidos sem justa causa com mais de 1 ano de empresa..." },
        { q: "Como é calculado o 13º na rescisão?", a: "Divide-se o salário bruto por 12 e multiplica-se pelos meses em que trabalhou 15 dias ou mais." },
        { q: "O que se perde na demissão por justa causa?", a: "O trabalhador perde aviso prévio, 13º proporcional, multa de 40% e direito ao seguro-desemprego." }
    ];

    return (
        <div className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold">Dúvidas frequentes sobre Rescisão</h2>
            {faqs.map((item, i) => (
                <details key={i} className="group bg-white border border-slate-200 rounded-xl p-4 cursor-pointer">
                    <summary className="font-semibold text-slate-800 list-none flex justify-between">
                        {item.q} <span className="group-open:rotate-180 transition-transform">↓</span>
                    </summary>
                    <p className="mt-3 text-slate-600 text-sm leading-relaxed">{item.a}</p>
                </details>
            ))}
        </div>
    );
}