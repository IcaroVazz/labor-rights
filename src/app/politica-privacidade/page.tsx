import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <main className="max-w-3xl mx-auto py-12 px-6">
            <Link href="/" className="inline-flex items-center text-indigo-600 hover:underline mb-8 font-medium">
                <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para a Calculadora
            </Link>

            <article className="prose prose-slate max-w-none">
                <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>
                <p>Última atualização: Janeiro de 2026</p>

                <p>A sua privacidade é importante para nós. É política do Simulador Rescisão CLT respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Simulador Rescisão CLT, e outros sites que possuímos e operamos.</p>

                <h3>1. Informações que coletamos</h3>
                <p>Não coletamos informações pessoais identificáveis (como nome, email ou telefone) através dos formulários de cálculo. Todos os dados inseridos na calculadora (salário, datas) são processados localmente no seu navegador ou temporariamente para fins de cálculo e não são armazenados em nossos servidores.</p>

                <h3>2. Cookies e DoubleClick DART Cookie</h3>
                <p>O Google, como fornecedor de terceiros, utiliza cookies para exibir anúncios no nosso site. Com o cookie DART, o Google pode exibir anúncios para seus usuários com base nas visitas feitas aos nossos sites e a outros sites na Internet.</p>
                <p>Os usuários podem desativar o uso do cookie DART visitando a Política de privacidade da rede de conteúdo e dos anúncios do Google.</p>

                <h3>3. Anúncios do Google AdSense</h3>
                <p>Este site usa o Google AdSense para exibir anúncios. O Google pode usar cookies para veicular anúncios com base em suas visitas anteriores a este ou a outros sites.</p>

                <h3>4. Consentimento</h3>
                <p>Ao utilizar nosso site, você concorda com nossa política de privacidade.</p>
            </article>
        </main>
    );
}