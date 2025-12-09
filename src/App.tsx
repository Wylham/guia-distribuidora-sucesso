import { Button } from "./components/ui/button";
import {
  ArrowDown,
  BookOpen,
  BarChart3,
  Shield,
  Check,
  Lightbulb,
  PieChart,
  Calendar,
  MessageSquare,
  Sparkles,
  Lock,
  TrendingUp,
  Users,
  Target,
  Gift,
  AlertCircle,
} from "lucide-react";

export default function App() {
  const CHECKOUT_URL = "https://pay.abacatepay.com/link/SEU_LINK_AQUI";

  const handleCheckout = () => {
    window.location.href = CHECKOUT_URL;
  };

  const logoSrc = "./GDS-GRADIENT-S.svg";
  return (
    <div className="w-full bg-black">
      {/* HEADER COM LOGO DO GUIA */}
      <header className="border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* TODO: trocar o src pela logo definitiva */}
            <img
              src={logoSrc}
              alt="Guia da distribuidora de sucesso"
              className="h-7 sm:h-8 w-auto"
            />
          </div>

          {/* Espaço reservado para futuro (ex: link WhatsApp, mini menu, etc.) */}
          <div className="hidden sm:block text-[11px] text-gray-400">
            Conteúdo 100% digital
          </div>
        </div>
      </header>
      <section className="relative overflow-hidden animated-gradient-hero">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-block">
                <span className="px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-semibold text-amber-200 flex items-center gap-2 w-fit">
                  <BookOpen className="w-4 h-4" />
                  Guia + Planilhas Profissionais
                </span>
              </div>

              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white mb-3 sm:mb-4">
                  Guia da distribuidora de
                  <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                    {" "}
                    Sucesso
                  </span>
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-xl">
                  Um guia passo a passo com planilhas prontas para você
                  organizar sua distribuidora, controlar estoque, vendas,
                  entregas e parar de perder dinheiro com desorganização.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    onClick={handleCheckout}
                    className="
                   inline-flex items-center justify-center gap-2
                   w-full sm:w-auto
                   group relative overflow-hidden
                   bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500
                   hover:from-amber-300 hover:via-amber-400 hover:to-orange-400
                   text-black font-semibold
                   text-sm sm:text-base
                   px-8 sm:px-10
                   py-3.5 sm:py-4
                   rounded-full
                   shadow-[0_0_40px_rgba(251,191,36,0.5)]
                   hover:shadow-[0_0_60px_rgba(251,191,36,0.7)]
                   transition-all duration-300
                   transform hover:-translate-y-1
                   "
                  >
                    {/* texto centralizado */}
                    <span className="relative z-10">Quero começar agora</span>

                    {/* setinha animada ao lado, aparecendo de verdade */}
                    <ArrowDown className="relative z-10 w-4 h-4 animate-bounce" />

                    {/* brilho no hover */}
                    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>

                  <div className="text-xs sm:text-sm text-gray-400 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    <span>Pagamento 100% seguro e acesso imediato</span>
                  </div>
                </div>
                <br />
                <p className="text-xs sm:text-sm text-gray-400 mt-4 flex flex-col sm:flex-row sm:gap-3 gap-1">
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3" /> Ideal para pequenas e médias
                    distribuidoras
                  </span>

                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3" /> Conteúdo direto ao ponto
                  </span>

                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3" /> Planilhas prontas para uso
                  </span>
                </p>
              </div>
            </div>

            <div className="relative h-64 sm:h-80 lg:h-96 w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-400/10 rounded-2xl blur-xl" />
              <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-black border border-white/10 rounded-2xl h-full w-full p-4 sm:p-6 flex flex-col justify-between shadow-[0_25px_80px_rgba(0,0,0,0.7)]">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-gray-400">Guia Digital</p>
                    <p className="text-sm sm:text-base font-semibold text-white">
                      Guia da distribuidora de sucesso
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/40 text-[10px] sm:text-xs text-emerald-300 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Conteúdo prático
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] text-gray-400">
                        Estoque & Produtos
                      </span>
                      <BarChart3 className="w-4 h-4 text-amber-300" />
                    </div>
                    <p className="text-xs text-gray-300 mb-3">
                      Tenha controle total do que entra, sai e o que está parado
                      no seu estoque.
                    </p>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[11px] text-gray-400 mb-1">
                          Giro do estoque
                        </p>
                        <p className="text-sm font-semibold text-emerald-300">
                          +32%
                        </p>
                      </div>
                      <div className="h-10 flex items-end gap-1">
                        <span className="w-1.5 rounded-t bg-emerald-500 h-3" />
                        <span className="w-1.5 rounded-t bg-emerald-500/80 h-5" />
                        <span className="w-1.5 rounded-t bg-emerald-400 h-7" />
                        <span className="w-1.5 rounded-t bg-emerald-300 h-9" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] text-gray-400">
                        Faturamento & Metas
                      </span>
                      <TrendingUp className="w-4 h-4 text-emerald-300" />
                    </div>
                    <p className="text-xs text-gray-300 mb-3">
                      Monitore suas vendas, acompanhe metas e projete seu
                      crescimento.
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] text-gray-400 mb-1">
                          Faturamento 30 dias
                        </p>
                        <p className="text-sm font-semibold text-amber-300">
                          R$ 124.500
                        </p>
                      </div>
                      <PieChart className="w-10 h-10 text-amber-300" />
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] text-gray-400">
                        Entregas & Logística
                      </span>
                      <Calendar className="w-4 h-4 text-sky-300" />
                    </div>
                    <p className="text-xs text-gray-300 mb-3">
                      Acompanhe pedidos, rotas e entregas sem se perder nos
                      papéis.
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] text-gray-400 mb-1">
                          Pedidos no prazo
                        </p>
                        <p className="text-sm font-semibold text-emerald-300">
                          92%
                        </p>
                      </div>
                      <div className="flex -space-x-1">
                        <span className="w-6 h-6 rounded-full bg-emerald-500/40 border border-emerald-300/50" />
                        <span className="w-6 h-6 rounded-full bg-sky-500/40 border border-sky-300/50" />
                        <span className="w-6 h-6 rounded-full bg-amber-500/40 border border-amber-300/50" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] text-gray-400">
                        Clientes & Relacionamento
                      </span>
                      <Users className="w-4 h-4 text-purple-300" />
                    </div>
                    <p className="text-xs text-gray-300 mb-3">
                      Tenha um cadastro organizado e acompanhe quem realmente
                      compra de você.
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] text-gray-400 mb-1">
                          Clientes ativos
                        </p>
                        <p className="text-sm font-semibold text-purple-200">
                          87
                        </p>
                      </div>
                      <MessageSquare className="w-5 h-5 text-purple-300" />
                    </div>
                  </div>
                </div>

                <div className="mt-2 sm:mt-0">
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border border-emerald-400/40 rounded-xl px-3 py-2 flex items-center justify-between">
                      <div>
                        <p className="text-[11px] text-emerald-200">
                          Margem de lucro
                        </p>
                        <p className="text-sm font-semibold text-emerald-100">
                          +18% em 30 dias
                        </p>
                      </div>
                      <Shield className="w-5 h-5 text-emerald-300" />
                    </div>
                    <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/5 border border-amber-400/40 rounded-xl px-3 py-2 flex items-center justify-between">
                      <div>
                        <p className="text-[11px] text-amber-200">
                          Perdas no estoque
                        </p>
                        <p className="text-sm font-semibold text-amber-100">
                          -27% em 60 dias
                        </p>
                      </div>
                      <AlertCircle className="w-5 h-5 text-amber-300" />
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-500 mt-2 text-right">
                    *Resultados ilustrativos baseados em boas práticas de
                    gestão.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-10 w-40 h-40 rounded-full bg-amber-500/10 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 lg:py-16 border-t border-gray-900 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] gap-10 lg:gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                Para quem é o{" "}
                <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                  Guia da distribuidora de sucesso
                </span>
                ?
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-5 sm:mb-6">
                Este guia foi criado especialmente para donos e gestores de
                pequenas e médias distribuidoras que sentem que estão{" "}
                <span className="font-semibold text-gray-100">
                  apagando incêndio o dia inteiro
                </span>{" "}
                e não conseguem ter uma visão clara do negócio.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Target className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-200 font-medium">
                      Distribuidoras que ainda controlam tudo em caderno ou
                      planilhas soltas.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Você sabe que precisa se organizar, mas ainda não tinha um
                      passo a passo claro para isso.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <BarChart3 className="w-4 h-4 text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-200 font-medium">
                      Negócios que querem crescer de forma profissional.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Se você quer ter números na mão para tomar decisões e não
                      só “sentir” que está indo bem, este material é para você.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Lock className="w-4 h-4 text-sky-300" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-200 font-medium">
                      Quem quer parar de perder dinheiro com desorganização.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Falta de controle gera perda de produtos, atrasos,
                      retrabalho e clientes insatisfeitos. O guia te ajuda a
                      fechar essas torneiras.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-black border border-white/10 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-400/40 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Você vai aprender a</p>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    Organizar sua distribuidora como uma empresa profissional.
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-4 sm:mb-5">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-emerald-400" />
                  <p className="text-xs sm:text-sm text-gray-200">
                    Criar uma visão clara do seu estoque, evitando rupturas e
                    excesso de produtos parados.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-emerald-400" />
                  <p className="text-xs sm:text-sm text-gray-200">
                    Entender o que realmente dá lucro e onde você está perdendo
                    dinheiro.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 text-emerald-400" />
                  <p className="text-xs sm:text-sm text-gray-200">
                    Ter rotinas simples de acompanhamento diário, semanal e
                    mensal.
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 mt-2">
                <p className="text-xs sm:text-sm text-gray-300 mb-2">
                  Em vez de jogar um monte de teoria, o{" "}
                  <span className="font-semibold">
                    Guia da distribuidora de sucesso
                  </span>{" "}
                  foi pensado para ser{" "}
                  <span className="font-semibold text-amber-200">
                    direto, aplicado e simples de colocar em prática
                  </span>{" "}
                  mesmo na correria do dia a dia.
                </p>
                <p className="text-[11px] text-gray-500">
                  Você não precisa ser expert em Excel ou gestão para
                  aproveitar. O guia mostra o que fazer e as planilhas já estão
                  prontas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 lg:py-16 border-t border-gray-900 bg-gradient-to-b from-black via-slate-950 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs text-amber-200 mb-3">
              <Sparkles className="w-3 h-3" />
              Conteúdo direto ao ponto
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              O que você vai encontrar no{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Guia da distribuidora de sucesso
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Um material pensado para ser aplicado em 30 dias, com ações
              práticas, exemplos claros e planilhas prontas para você adaptar à
              sua realidade.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr,1fr] gap-8 lg:gap-10 items-start">
            {/* COLUNA ESQUERDA – 3 CARDS */}
            <div className="space-y-4 sm:space-y-5">
              {/* CARD 1 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 lg:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-400/40 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-amber-300" />
                  </div>

                  <div>
                    <p className="text-sm sm:text-base font-semibold text-white">
                      Guia prático em linguagem simples
                    </p>
                    <p className="text-xs sm:text-sm text-gray-300">
                      Nada de teoria complicada. Você vai receber um guia
                      escrito em linguagem direta, mostrando o que fazer, como
                      fazer e em qual momento aplicar cada ajuste.
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-3 h-3 mt-0.5 text-emerald-400" />
                    <span>
                      Entenda como estruturar seu estoque, cadastro de clientes
                      e rotina de pedidos.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3 h-3 mt-0.5 text-emerald-400" />
                    <span>
                      Veja exemplos concretos de situações do dia a dia de
                      distribuidoras.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3 h-3 mt-0.5 text-emerald-400" />
                    <span>
                      Tenha um plano de 30 dias para sair do caos e ir para a
                      organização.
                    </span>
                  </li>
                </ul>
              </div>

              {/* CARD 2 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 lg:p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-white">
                      Planilhas prontas para uso imediato
                    </p>
                    <p className="text-xs sm:text-sm text-gray-300">
                      Em vez de começar do zero, você recebe planilhas já
                      pensadas para a rotina de distribuidoras.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-3 h-3 mt-0.5 text-emerald-400" />
                    <span>
                      Controle de estoque com entradas, saídas e saldos.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3 h-3 mt-0.5 text-emerald-400" />
                    <span>
                      Planilha de vendas por cliente, produto e período.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3 h-3 mt-0.5 text-emerald-400" />
                    <span>Visão de metas e resultados ao longo do mês.</span>
                  </li>
                </ul>
              </div>

              {/* CARD 3 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 lg:p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-sky-500/10 border border-sky-400/40 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-sky-300" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-white">
                      Roteiro de 30 dias para aplicar tudo
                    </p>
                    <p className="text-xs sm:text-sm text-gray-300">
                      Você não vai ficar perdido sem saber por onde começar.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-3 h-3 mt-0.5 text-emerald-400" />
                    <span>
                      O que fazer na primeira semana para organizar o básico.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3 h-3 mt-0.5 text-emerald-400" />
                    <span>
                      Quais ajustes implementar conforme você for ganhando
                      controle.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3 h-3 mt-0.5 text-emerald-400" />
                    <span>
                      Como manter a rotina funcionando depois dos 30 dias.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* COLUNA DIREITA – CARD LATERAL */}
            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-black border border-white/10 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
              <p className="text-xs sm:text-sm text-gray-300 mb-3">
                Ao adquirir o{" "}
                <span className="font-semibold">
                  Guia da distribuidora de sucesso
                </span>
                , você recebe:
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="inline-flex h-9 aspect-square rounded-full bg-amber-500/10 border border-amber-400/40 items-center justify-center">
                      <BookOpen className="w-4 h-4 text-amber-300" />
                    </div>

                    <p className="text-xs font-semibold text-white">
                      Guia Digital
                    </p>
                  </div>
                  <p className="text-[11px] text-gray-300">
                    PDF completo com o passo a passo para organizar sua
                    distribuidora.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center">
                      <PieChart className="w-4 h-4 text-emerald-300" />
                    </div>
                    <p className="text-xs font-semibold text-white">
                      Planilhas de Gestão
                    </p>
                  </div>
                  <p className="text-[11px] text-gray-300">
                    Arquivos editáveis para você adaptar à sua realidade e usar
                    no dia a dia.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full bg-sky-500/10 border border-sky-400/40 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-sky-300" />
                    </div>
                    <p className="text-xs font-semibold text-white">
                      Roteiro de 30 dias
                    </p>
                  </div>
                  <p className="text-[11px] text-gray-300">
                    Sugestão de cronograma para aplicar os ajustes de forma
                    organizada.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full bg-purple-500/10 border border-purple-400/40 flex items-center justify-center">
                      <Gift className="w-4 h-4 text-purple-300" />
                    </div>
                    <p className="text-xs font-semibold text-white">
                      Bônus exclusivo
                    </p>
                  </div>
                  <p className="text-[11px] text-gray-300">
                    Material extra com ideias de ações para melhorar
                    relacionamento com clientes.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-200 mb-2 font-medium">
                  Importante:
                </p>
                <p className="text-[11px] sm:text-xs text-gray-300">
                  Este material foi pensado para donos e gestores que querem
                  organizar o negócio de forma prática. Você não precisa saber
                  tudo de gestão ou de planilhas para aproveitar o conteúdo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 lg:py-16 border-t border-gray-900 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.1fr] gap-8 lg:gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                Quais resultados você pode alcançar ao aplicar o conteúdo?
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-5 sm:mb-6">
                Mesmo que cada distribuidora tenha sua realidade, ao aplicar o
                passo a passo do guia, é comum ver:
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <BarChart3 className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-200 font-medium">
                      Mais clareza sobre o que entra e sai do estoque.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Você sabe exatamente o que está parado, o que vende
                      rápido, o que precisa comprar e o que pode segurar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <PieChart className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-200 font-medium">
                      Decisões mais seguras com base em números.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Você para de decidir “no escuro” e passa a ter uma visão
                      mais profissional sobre o negócio.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Users className="w-5 h-5 text-sky-300" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-200 font-medium">
                      Melhora no relacionamento com clientes.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Com mais organização, é mais fácil cumprir prazos, evitar
                      erros de pedido e manter clientes satisfeitos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Lock className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-200 font-medium">
                      Menos perdas e desperdícios.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Ao ter controle do estoque e das compras, você reduz
                      perdas, vencimentos e produtos parados.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-400/40 rounded-2xl p-4 sm:p-5 flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/15 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-emerald-200" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-100">Organização</p>
                    <p className="text-sm sm:text-base font-semibold text-white">
                      Rotina mais leve e previsível
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-emerald-50/90 mb-4">
                  Ao colocar as rotinas de acompanhamento em prática, você para
                  de viver apagando incêndio e passa a ter uma visão mais clara
                  do negócio.
                </p>
                <p className="text-[11px] text-emerald-100/80">
                  *Resultado natural de quem passa a acompanhar o negócio com
                  regularidade.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-400/40 rounded-2xl p-4 sm:p-5 flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-amber-500/15 flex items-center justify-center">
                    <Gift className="w-4 h-4 text-amber-200" />
                  </div>
                  <div>
                    <p className="text-xs text-amber-100">Crescimento</p>
                    <p className="text-sm sm:text-base font-semibold text-white">
                      Negócio preparado para escalar
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-amber-50/90 mb-4">
                  Com mais controle, é mais fácil avaliar quando contratar,
                  quando investir e como expandir com segurança.
                </p>
                <p className="text-[11px] text-amber-100/80">
                  *Material pensado para ajudar na base da gestão, não é
                  promessa de ganhos específicos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="checkout"
        className="py-12 sm:py-16 lg:py-10 border-t border-gray-900 animated-gradient-hero"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* LOGO REPETIDA NO CHECKOUT PARA REFORÇAR A MARCA */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <img
              src="/GDS-GRADIENT-S.svg"
              alt="Guia da distribuidora de sucesso"
              className="
              h-20 
              sm:h-28 
              lg:h-32 
              w-auto 
              drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]
              transition-all
              "
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Está pronto para organizar sua distribuidora e lucrar de forma
            profissional?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Clique no botão abaixo, garanta seu acesso ao{" "}
            <span className="font-semibold">
              Guia da distribuidora de sucesso
            </span>{" "}
            e comece hoje mesmo a aplicar o método no seu negócio.
          </p>

          <div className="mb-6 sm:mb-8">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Investimento único: R$ 57,00
            </div>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">
              Pagamento único, acesso vitalício ao material.
            </p>
          </div>

          <div className="w-full flex justify-center mb-6">
            <Button
              onClick={handleCheckout}
              className="group relative overflow-hidden w-full sm:w-auto bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:via-amber-400 hover:to-orange-400 text-black font-semibold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-[0_0_40px_rgba(251,191,36,0.5)] hover:shadow-[0_0_60px_rgba(251,191,36,0.7)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="relative z-10">Quero começar agora</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>

          <p className="text-xs sm:text-sm text-gray-400 flex flex-col sm:flex-row sm:gap-3 gap-1 justify-center">
            <span className="flex items-center gap-1">
              <Check className="w-3 h-3" /> Pagamento 100% seguro
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-3 h-3" /> Acesso imediato
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-3 h-3" /> Conteúdo digital
            </span>
          </p>
          {/* Formas de pagamento */}
          <div className="mt-6 flex flex-col items-center gap-3 text-gray-300">
            <p className="text-sm opacity-80">Formas de pagamento aceitas:</p>

            <div className="flex items-center gap-8">
              {/* PIX */}
              <div className="flex flex-col items-center gap-1">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path fill="#4BB543" d="M12 2 2 12l10 10 10-10L12 2Z" />
                    <path fill="#fff" d="M12 7 7 12l5 5 5-5-5-5Z" />
                  </svg>
                </div>
                <span className="text-xs opacity-70">PIX</span>
              </div>

              {/* Cartão */}
              <div className="flex flex-col items-center gap-1">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3B82F6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                </div>
                <span className="text-xs opacity-70">Cartão</span>
              </div>

              {/* Boleto */}
              <div className="flex flex-col items-center gap-1">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FBBF24"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
                    <line x1="7" y1="4" x2="7" y2="20" />
                    <line x1="11" y1="4" x2="11" y2="20" />
                    <line x1="15" y1="4" x2="15" y2="20" />
                    <line x1="19" y1="4" x2="19" y2="20" />
                  </svg>
                </div>
                <span className="text-xs opacity-70">Boleto</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
