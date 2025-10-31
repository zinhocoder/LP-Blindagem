"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Sparkles, Brain, Zap, Crown, Moon, CheckCircle, ChevronDown, Gift, MessageCircle, Star, Shield, Flame, ArrowRight, Users, TrendingUp, Award, Target } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function ApegoMagnetico() {
 const handleCTA = () => {
    console.log("CTA clicado - redirecionar para WhatsApp");
    window.open("https://wa.me/5521981530868?text=Olá! Tenho interesse no Apego Magnético", "_blank");
  }

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "Este guia é para todas as mulheres?",
      answer:
        "Não. Este guia é para mulheres que decidiram sair do ciclo da dor, da espera e da autossabotagem. É para quem quer entrar no jogo com consciência, propósito e poder. É para as que estão exaustas de relações mornas e vínculos líquidos.",
    },
    {
      question: "Como funciona a parte científica do apego?",
      answer:
        "O guia aborda os códigos neurológicos, hormonais e emocionais que determinam como você se conecta. Você aprenderá sobre a vasopressina (hormônio do vínculo), gatilhos neurobiológicos e como ativar conexões duradouras de forma natural e respeitosa.",
    },
    {
      question: "Isso não é manipulação?",
      answer:
        "Absolutamente não. É sabedoria emocional, comunicação estratégica e reconexão energética com seu valor. Você aprenderá a ser você mesma com alma, intenção e presença - sem jogos ou artifícios.",
    },
    {
      question: "Preciso estar em um relacionamento para usar?",
      answer:
        "Não. Este é um guia de retorno ao seu trono interior. Você aprenderá a reconquistar a si mesma antes de qualquer validação externa. É sobre despertar sua energia feminina consciente e estratégica.",
    },
    {
      question: "Quanto tempo leva para ver transformações?",
      answer:
        "A transformação começa imediatamente na sua consciência. Você terá ferramentas reais para atrair relações seguras e intensas sem se diminuir. Os resultados externos aparecem conforme você incorpora sua nova presença magnética.",
    },
    {
      question: "O que torna este guia diferente?",
      answer:
        "É resultado da fusão entre neurociência afetiva, psicologia relacional e conexão espiritual. Não são frases prontas ou conceitos vazios - são protocolos energéticos e ferramentas reais para mulheres que querem viver relações verdadeiras e transformadoras.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black font-roboto">
      {/* CTA Fixo Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 via-red-700 to-red-800 p-4 shadow-2xl md:hidden">
        <Button
          onClick={handleCTA}
          className="w-full bg-white text-red-700 hover:bg-gray-50 font-bold py-4 text-lg border-2 border-white shadow-lg transform hover:scale-105 transition-all"
        >
          🔥 Despertar Meu Magnetismo Agora
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-red-950 to-black text-white py-12 md:py-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-red-900/20 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkYwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjMiLz48L2c+PC9zdmc+')]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-red-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-red-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              {/* Badge */}
              <div className="flex flex-col items-center lg:items-start gap-3 mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                  <Crown className="w-5 h-5" />
                  Portal de Acesso Exclusivo
                </div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-red-600 text-black px-5 py-2 rounded-full text-xs font-extrabold shadow-xl border border-yellow-300/40">
                  <span className="line-through text-black/70">de R$ 97</span>
                  <span className="text-black">por R$ 67</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
                <span className="text-white">APEGO</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 animate-pulse">
                  MAGNÉTICO
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl lg:text-4xl mb-8 leading-relaxed font-light text-red-100">
                O Portal de Acesso à Nova Frequência de 
                <span className="text-red-300 font-semibold"> Consciência Feminina</span>
              </p>
              
              <div className="bg-gradient-to-r from-red-900/40 via-red-800/30 to-red-900/40 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-red-500/30 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-8 h-8 text-red-400" />
                  <span className="text-red-300 font-semibold text-lg">Revelação Exclusiva</span>
                </div>
                <p className="text-xl md:text-2xl font-medium italic text-white leading-relaxed">
                  "Prepare-se para uma experiência incrível de ativação afetiva, energética e neurológica que vai expandir profundamente sua consciência sobre amor, conexão e autovalor."
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={handleCTA}
                  className="flex-1 bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white hover:from-red-500 hover:to-red-700 font-bold py-6 px-8 text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all border-2 border-red-400/50"
                >
                  🔥 Despertar Meu Magnetismo por R$ 67
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-2 border-red-500/50 text-red-400 hover:bg-red-500/10 font-bold py-6 px-8 text-lg rounded-2xl backdrop-blur-sm"
                >
                  <Users className="w-6 h-6 mr-3" />
                  Ver Depoimentos
              </Button>
              </div>
              
              {/* Social Proof */}
              <div className="flex items-center justify-center lg:justify-start gap-6 text-red-200">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-red-400" />
                  <span className="text-sm">+2.500 mulheres</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-red-400" />
                  <span className="text-sm">98% de satisfação</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-red-400" />
                  <span className="text-sm">Resultados em 7 dias</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative">
              <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/womanhero.png"
                  alt="Mulher confiante e magnética"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  className="rounded-3xl"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-red-900/40 opacity-70"></div>
                
                {/* Floating Cards */}
                <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-semibold text-sm">Transformação Ativa</span>
                  </div>
                </div>
                
                <div className="absolute bottom-6 right-6 bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-4 shadow-lg">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm opacity-90">Taxa de Sucesso</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta de Lançamento Section */}
      <section className="relative py-14 md:py-20 px-4 bg-gradient-to-br from-black via-red-950 to-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[110%] h-0.5 bg-gradient-to-r from-transparent via-red-700/30 to-transparent"></div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <Card className="border-2 border-red-500/40 bg-gradient-to-br from-red-950/70 via-black to-red-950/70 backdrop-blur-sm shadow-2xl text-white">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-red-600 text-black px-4 py-2 rounded-full text-xs font-extrabold shadow-xl border border-yellow-300/40 mb-4">
                    Oferta de Lançamento
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black leading-tight mb-3">
                    Entre agora por <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">R$ 67</span>
                  </h3>
                  <p className="text-red-100 text-lg mb-6">
                    Condição especial de lançamento. Vagas limitadas. Sem mensalidade. Acesso imediato.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-red-100">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      Acesso vitalício + atualizações
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center">
                        <Star className="w-4 h-4 text-black" />
                      </div>
                      Protocolos práticos e aplicáveis
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      Garantia de satisfação
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center">
                        <Users className="w-4 h-4 text-black" />
                      </div>
                      Comunidade de alunas
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-1">
                  <div className="bg-black/40 rounded-2xl p-6 border border-red-500/30 text-center">
                    <div className="text-sm text-red-200 mb-2">de</div>
                    <div className="text-3xl font-extrabold line-through text-red-300">R$ 97</div>
                    <div className="h-px my-3 bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
                    <div className="text-sm text-red-200 mb-1">por</div>
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">R$ 67</div>
                    <div className="text-xs text-red-300 mt-2">à vista no WhatsApp</div>
                    <Button
                      onClick={handleCTA}
                      className="mt-6 w-full bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white hover:from-red-500 hover:to-red-700 font-black py-4 px-6 text-lg rounded-xl shadow-2xl transform hover:scale-105 transition-all border-2 border-red-400/50"
                    >
                      Garantir por R$ 67
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Portal de Acesso Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-black to-red-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-red-900/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 text-lg font-bold mb-8 shadow-lg">
              ✨ Portal de Acesso Exclusivo
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Este não é apenas um manual.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
                É um portal de acesso.
              </span>
          </h2>
          </div>
          
          <Card className="border-2 border-red-500/30 shadow-2xl bg-gradient-to-br from-red-950/50 via-black to-red-950/50 backdrop-blur-sm text-white mb-12">
            <CardContent className="p-12">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <Star className="w-10 h-10 text-white" />
                </div>
            </div>
              <p className="text-2xl md:text-3xl text-center leading-relaxed mb-8 text-red-100 italic font-light">
                "A uma nova frequência de consciência feminina, onde você finalmente compreende por que se apega tão rápido, por que alguns vínculos nunca se aprofundam..."
              </p>
              <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-white">
                <p className="text-center">
                  E o mais importante: como <span className="text-red-400 font-bold">quebrar os ciclos de dependência emocional</span> sem perder sua essência e sua sensibilidade.
                </p>
                <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 rounded-2xl p-8 border border-red-500/30">
                  <p className="text-2xl md:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-500">
                    Este conteúdo não é ensinado por aí, e isso não é por acaso.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Códigos Biológicos Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-red-950 to-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Brain className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 mb-8 leading-tight">
              O Apego É Biológico, Adaptável e Programável
            </h2>
            <p className="text-xl md:text-2xl text-red-200 leading-relaxed max-w-4xl mx-auto">
              Poucos abordam que existem <span className="text-red-400 font-bold">códigos neurológicos, hormonais e emocionais</span> que, ao serem compreendidos, ativam de forma natural a presença, o vínculo e o comprometimento masculino.
            </p>
          </div>
        </div>
      </section>

      {/* Material Autoral Section */}
      <section className="py-16 md:py-24 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-transparent to-red-900/5"></div>
        <div className="absolute inset-0 pointer-events-none">
          <Image src="/images/woman.png" alt="Fundo mulher" fill className="object-cover opacity-10 mix-blend-lighten" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-red-800 to-red-900 text-white px-8 py-4 text-lg font-bold mb-8 shadow-lg">
              🧠 Material Autoral, Inédito e Cientificamente Fundamentado
            </Badge>
          </div>
          
          <Card className="relative border-2 border-red-500/30 shadow-2xl bg-gradient-to-br from-red-950/50 via-black to-red-950/50 backdrop-blur-sm text-white mb-12">
            <div className="pointer-events-none absolute -inset-px rounded-[0.75rem] bg-gradient-to-r from-yellow-500/20 to-red-600/20"></div>
            <CardContent className="relative p-12">
              <div className="h-1.5 w-28 rounded-full bg-gradient-to-r from-yellow-500 to-red-600 mb-8"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-xl md:text-2xl leading-relaxed text-red-100 mb-8">
                    Baseado em <span className="text-red-400 font-bold">neurociência afetiva</span>, psique relacional feminina e masculina e análises clínicas reais de mulheres que atravessaram o labirinto da carência, da rejeição e do abandono —
                  </p>
                  <p className="text-xl md:text-2xl leading-relaxed text-red-100 mb-8">
                    E <span className="text-red-400 font-bold">transformaram sua dor em uma presença magnética</span>.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-red-900/30 to-red-800/30 rounded-2xl p-8 border border-red-500/30">
                  <p className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Este guia não é apenas um conteúdo terapêutico.
                  </p>
                  <p className="text-lg md:text-xl text-red-100 leading-relaxed">
                    É o resultado da fusão entre saberes profundos da ciência da mente, da psicologia afetiva, da linguagem emocional e da conexão espiritual que habita em cada mulher.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Ritual de Ativação Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-black to-red-950 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Flame className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Um Ritual de <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">Ativação do Seu Poder</span>
          </h2>
          </div>

          <Card className="border-2 border-red-500/30 shadow-2xl bg-gradient-to-br from-red-950/50 via-black to-red-950/50 backdrop-blur-sm text-white mb-12">
            <CardContent className="p-12">
              <p className="text-2xl md:text-3xl text-center text-white font-bold mb-8">
                Foi escrito como um ritual de ativação do seu poder magnético, neuroemocional e intuitivo.
              </p>
              <p className="text-2xl md:text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-500 font-bold mb-12">
                Para que você pare de repetir padrões e comece a viver relações verdadeiras, marcantes e transformadoras.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-6 bg-gradient-to-r from-red-900/20 to-red-800/20 p-6 rounded-2xl border border-red-500/30">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-lg text-white leading-relaxed">
                    Você não está aqui para <span className="text-red-400 font-bold">implorar por migalhas</span> de atenção.
                  </p>
                </div>
                <div className="flex items-start gap-6 bg-gradient-to-r from-red-900/20 to-red-800/20 p-6 rounded-2xl border border-red-500/30">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-lg text-white leading-relaxed">
                    Você está aqui para <span className="text-red-400 font-bold">despertar a mulher que ativa o amor</span> — sem esforço, sem jogos, sem medo de ser intensa.
            </p>
          </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Para Mulheres Exaustas Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-red-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-red-900/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white text-center mb-16 leading-tight">
            Para Mulheres <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">Exaustas de Relações Mornas</span>
          </h2>

          <Card className="border-2 border-red-500/30 shadow-2xl bg-gradient-to-br from-red-950/50 via-black to-red-950/50 backdrop-blur-sm text-white mb-12">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-xl md:text-2xl leading-relaxed text-red-100 mb-8">
                    O Apego Magnético é um convite para mulheres que estão exaustas de relações mornas, de silêncios que ferem, de sumiços inexplicáveis, de vínculos que começam com fogo e terminam com vazio.
                  </p>
                  <p className="text-xl md:text-2xl leading-relaxed text-red-100 mb-8">
                    É um caminho para criar <span className="text-red-400 font-bold">laços conscientes, profundos e inesquecíveis</span>, que deixam marca na memória emocional de um homem —
                  </p>
                </div>
                <div className="bg-gradient-to-br from-red-900/30 to-red-800/30 rounded-2xl p-8 border border-red-500/30">
                  <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-500 leading-relaxed">
                    Não por artifícios de sedução, mas pela presença de uma mulher que conhece seu valor, sua energia e sua linguagem emocional.
            </p>
          </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Ser Lembrada Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-black to-red-950 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Heart className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Aprenda a Ser <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">Lembrada pela Frequência</span>
          </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-red-500/40 shadow-2xl bg-gradient-to-br from-red-950/70 via-black to-red-950/70 backdrop-blur-sm text-white hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex gap-2 mb-6">
                  <Star className="w-6 h-6 text-red-400" />
                  <Star className="w-6 h-6 text-red-400" />
                  <Star className="w-6 h-6 text-red-400" />
                </div>
                <p className="text-lg md:text-xl italic text-red-100 leading-relaxed">
                  "Aqui, você vai aprender como ser lembrada <span className="text-red-400 font-bold">não pelas palavras que disse</span>, mas pela frequência que emanou."
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500/40 shadow-2xl bg-gradient-to-br from-red-950/70 via-black to-red-950/70 backdrop-blur-sm text-white hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex gap-2 mb-6">
                  <Brain className="w-6 h-6 text-red-400" />
                  <Brain className="w-6 h-6 text-red-400" />
                  <Brain className="w-6 h-6 text-red-400" />
                </div>
                <p className="text-lg md:text-xl italic text-red-100 leading-relaxed">
                  "Você vai compreender os <span className="text-red-400 font-bold">códigos neurobiológicos</span> que ativam o vínculo afetivo de forma duradoura, respeitosa e autêntica."
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500/40 shadow-2xl bg-gradient-to-br from-red-950/70 via-black to-red-950/70 backdrop-blur-sm text-white hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex gap-2 mb-6">
                  <Crown className="w-6 h-6 text-red-400" />
                  <Crown className="w-6 h-6 text-red-400" />
                  <Crown className="w-6 h-6 text-red-400" />
                </div>
                <p className="text-lg md:text-xl italic text-red-100 leading-relaxed">
                  "Sem se perder em tentativas desesperadas de ser amada. <span className="text-red-400 font-bold">Você será amada por ser quem é</span>."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* O Que Você Deseja Section */}
      <section className="py-16 md:py-24 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-transparent to-red-900/5"></div>
        <div className="absolute inset-0 pointer-events-none">
          <Image src="/images/desejahero.png" alt="Fundo Deseja" fill className="object-cover opacity-10 mix-blend-lighten" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white text-center mb-16 leading-tight">
            Este é um guia para você que <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">deseja:</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="relative border-2 border-red-500/30 shadow-2xl bg-gradient-to-br from-red-900/60 via-black/70 to-red-950/60 backdrop-blur-sm text-white hover:scale-105 transition-all duration-300">
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-yellow-500/15 to-red-600/15"></div>
              <CardContent className="relative p-8">
                <div className="h-1 w-24 rounded-full bg-gradient-to-r from-yellow-500 to-red-600 mb-6"></div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-400 mb-4">Parar de viver ciclos de abandono</h3>
                    <p className="text-lg text-red-100 leading-relaxed">
                      Apego ansioso e relações unilaterais que te esgotam emocionalmente.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-red-500/30 shadow-2xl bg-gradient-to-br from-red-900/60 via-black/70 to-red-950/60 backdrop-blur-sm text-white hover:scale-105 transition-all duration-300">
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-yellow-500/15 to-red-600/15"></div>
              <CardContent className="relative p-8">
                <div className="h-1 w-24 rounded-full bg-gradient-to-r from-yellow-500 to-red-600 mb-6"></div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-400 mb-4">Compreender a diferença entre atrair e manter</h3>
                    <p className="text-lg text-red-100 leading-relaxed">
                      Um vínculo real que se aprofunda com o tempo, não se esgota.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-red-500/30 shadow-2xl bg-gradient-to-br from-red-900/60 via-black/70 to-red-950/60 backdrop-blur-sm text-white hover:scale-105 transition-all duration-300">
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-yellow-500/15 to-red-600/15"></div>
              <CardContent className="relative p-8">
                <div className="h-1 w-24 rounded-full bg-gradient-to-r from-yellow-500 to-red-600 mb-6"></div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-400 mb-4">Despertar sua energia feminina consciente</h3>
                    <p className="text-lg text-red-100 leading-relaxed">
                      Estratégica e sutil, sem perder sua essência natural.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-red-500/30 shadow-2xl bg-gradient-to-br from-red-900/60 via-black/70 to-red-950/60 backdrop-blur-sm text-white hover:scale-105 transition-all duration-300">
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-yellow-500/15 to-red-600/15"></div>
              <CardContent className="relative p-8">
                <div className="h-1 w-24 rounded-full bg-gradient-to-r from-yellow-500 to-red-600 mb-6"></div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-400 mb-4">Reconquistar a si mesma primeiro</h3>
                    <p className="text-lg text-red-100 leading-relaxed">
                      Antes de querer qualquer validação externa.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              onClick={handleCTA}
              className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white hover:from-red-500 hover:to-red-700 font-bold py-6 px-12 text-xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all border-2 border-red-400/50"
            >
              🔥 Despertar Meu Magnetismo Agora por R$ 67
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Força Invisível Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-red-950 to-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-16">
            <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Zap className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Existe uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">Força Invisível</span> que Une os Corações
            </h2>
          </div>

          <Card className="border-2 border-red-500/30 shadow-2xl bg-gradient-to-br from-red-950/50 via-black to-red-950/50 backdrop-blur-sm text-white mb-12">
            <CardContent className="p-12">
              <p className="text-2xl md:text-3xl text-red-100 leading-relaxed mb-8">
                Uma linguagem energética que transcende o físico, o racional e o visível.
              </p>
              <p className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-500 font-bold mb-8">
                Este guia surge da necessidade de despertar essa força nas mulheres.
              </p>
              <p className="text-xl md:text-2xl text-red-100 leading-relaxed mb-8">
                O poder de magnetizar, de ser lembrada e de ocupar um espaço especial no coração de um homem pela essência que representa emocionalmente.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-red-500/50 shadow-2xl bg-gradient-to-br from-red-950/70 via-black to-red-950/70 backdrop-blur-sm text-white mb-12">
            <CardContent className="p-12">
              <h3 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-8">
                💎 Não é feitiço. É ciência emocional + presença energética + poder feminino restaurado.
              </h3>
              <div className="space-y-6 text-xl md:text-2xl text-red-100">
                <p className="flex items-center justify-center gap-4">
                  <CheckCircle className="w-8 h-8 text-red-400" />
                  <span>É a cura da mulher que já cansou de mendigar amor.</span>
                </p>
                <p className="flex items-center justify-center gap-4">
                  <CheckCircle className="w-8 h-8 text-red-400" />
                  <span>E agora escolhe ser canal de vínculo, magnetismo e amor-próprio em alta potência.</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-16">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-8">
              🔮 Este é o início da sua virada. Uma jornada de reconexão com sua força mais magnética:
            </h3>
            <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-500 font-bold mb-12">
              Ser você mesma, com alma, intenção e presença.
            </p>
          <Button
            onClick={handleCTA}
              className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white hover:from-red-500 hover:to-red-700 font-black py-8 px-16 text-2xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all border-2 border-red-400/50"
          >
              👉 Despertar Meu Magnetismo por R$ 67
              <ArrowRight className="w-8 h-8 ml-4" />
          </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-transparent to-red-900/5"></div>
        <div className="absolute inset-0 pointer-events-none">
          <Image src="/images/faqhero.png" alt="Fundo FAQ" fill className="object-cover opacity-10 mix-blend-lighten" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white text-center mb-16 leading-tight">
            Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-red-600">Frequentes</span>
          </h2>
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <Card key={index} className="relative bg-gradient-to-r from-red-950/50 to-black border border-red-500/30 shadow-xl backdrop-blur-sm">
                <div className="pointer-events-none absolute -inset-px rounded-[0.75rem] bg-gradient-to-r from-yellow-500/15 to-red-600/15"></div>
                <CardContent className="relative p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-8 text-left flex justify-between items-center hover:bg-red-900/10 transition-colors"
                  >
                    <h3 className="text-xl font-bold text-white pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={`w-6 h-6 text-red-400 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-8 pb-8">
                      <div className="h-1 w-20 rounded-full bg-gradient-to-r from-yellow-500 to-red-600 mb-4"></div>
                      <p className="text-red-100 leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button
              onClick={handleCTA}
              className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white hover:from-red-500 hover:to-red-700 font-bold py-6 px-12 text-xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all border-2 border-red-400/50"
            >
              🔥 Despertar Meu Magnetismo Agora por R$ 67
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-20 md:bottom-6 right-6 z-50">
        <a
          href="https://wa.me/5521981530868?text=Olá! Tenho interesse no Apego Magnético"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all flex items-center justify-center group"
        >
          <div className="w-10 h-10 relative">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106"
                fill="white"
              />
            </svg>
          </div>
          <span className="absolute right-full mr-4 bg-black text-white px-4 py-3 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
            Fale conosco no WhatsApp
          </span>
        </a>
      </div>

      {/* Espaçamento para CTA fixo mobile */}
      <div className="h-24 md:h-0"></div>

      {/* Copyright Section */}
      <footer className="py-8 px-4 bg-black border-t border-red-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-red-200 text-sm">
            © 2024 Apego Magnético. Desenvolvido por{" "}
            <a 
              href="https://www.devpro.fun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-400 font-semibold hover:text-red-300 transition-colors"
            >
              DevPro
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}