import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfUse() {
    return (
        <main className="max-w-3xl mx-auto py-12 px-6">
            <Link href="/" className="inline-flex items-center text-indigo-600 hover:underline mb-8 font-medium">
                <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para a Calculadora
            </Link>

            <article className="prose prose-slate max-w-none">
                <h1 className="text-3xl font-bold mb-6">Termos de Uso</h1>
                <p>Ao acessar ao site Simulador Rescisão CLT, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>

                <h3>1. Isenção de Responsabilidade</h3>
                <p>Os materiais no site da Simulador Rescisão CLT são fornecidos "como estão". Esta ferramenta é um <strong>simulador</strong> destinado apenas para fins informativos e de estimativa.</p>
                <p>Os cálculos realizados aqui baseiam-se nas regras gerais da CLT e podem não contemplar convenções coletivas específicas, descontos variáveis ou situações jurídicas complexas. <strong>Os resultados não têm valor legal</strong> e não devem substituir o cálculo oficial feito pelo departamento de RH da sua empresa ou por um contador profissional.</p>

                <h3>2. Precisão dos materiais</h3>
                <p>Os materiais exibidos no site da Simulador Rescisão CLT podem incluir erros técnicos, tipográficos ou fotográficos. Não garantimos que qualquer material em seu site seja preciso, completo ou atual.</p>

                <h3>3. Links</h3>
                <p>O Simulador Rescisão CLT não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. O uso de qualquer site vinculado é por conta e risco do usuário.</p>

                <h3>4. Modificações</h3>
                <p>O Simulador Rescisão CLT pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>
            </article>
        </main>
    );
}