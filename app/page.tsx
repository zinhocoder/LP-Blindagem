"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Sparkles, Brain, Zap, Crown, Moon, CheckCircle, ChevronDown, Gift, MessageCircle } from "lucide-react"
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
      question: "Para quem é o Apego Magnético?",
      answer:
        "Para mulheres que decidiram abandonar a dor do apego ansioso e ativar seu poder de presença. Se você se cansou de correr atrás, de tentar ser 'menos intensa' para ser aceita, este guia é para você.",
    },
    {
      question: "Isso é manipulação?",
      answer:
        "Não. É consciência. O Apego Magnético te ensina a retornar à sua essência, não a fingir ser quem você não é. É sobre presença autêntica, não jogos ou máscaras.",
    },
    {
      question: "Preciso estar em um relacionamento para usar?",
      answer:
        "Não necessariamente. O guia trabalha sua reprogramação emocional e energética. Você pode estar solteira, em um relacionamento ou se recuperando de um — o magnetismo começa em você.",
    },
    {
      question: "Como funciona a parte científica?",
      answer:
        "O guia une neurociência afetiva (como o cérebro processa vínculos), psicologia relacional e energia feminina. Você entenderá os hormônios do apego como vasopressina e ocitocina, e como ativar conexões genuínas.",
    },
    {
      question: "Quanto tempo leva para ver mudanças?",
      answer:
        "A transformação é interna primeiro. Muitas mulheres relatam mudanças na própria percepção em dias. Mudanças externas (como pessoas reagindo diferente a você) podem acontecer em semanas, conforme você incorpora a presença magnética.",
    },
    {
      question: "Tenho garantia?",
      answer:
        "Sim! Se você aplicar o guia e sentir que não foi o que esperava, devolvemos seu investimento. Nossa garantia é total porque acreditamos na transformação que esse conteúdo proporciona.",
    },
  ]

  return (
    <div className="min-h-screen bg-black font-roboto">
      {/* CTA Fixo Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 to-pink-600 p-4 shadow-lg md:hidden">
        <Button
          onClick={handleCTA}
          className="w-full bg-black text-white hover:bg-gray-900 font-bold py-3 text-lg border-2 border-white/20"
        >
          Despertar Meu Magnetismo
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative bg-black text-white py-8 md:py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-pink-900/20 to-black z-0"></div>
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkY2RkI3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiLz48L2c+PC9zdmc+')]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="mb-6">
                <Crown className="w-16 h-16 text-pink-500 mb-4 mx-auto md:mx-0" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                APEGO MAGNÉTICO
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl mb-6 leading-relaxed text-pink-100">
                O Guia Que Desperta Sua Presença Feminina, Reativa Seu Poder e Cria Conexões Impossíveis de Esquecer
              </p>
              <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-lg p-6 mb-8 border-l-4 border-pink-500">
                <p className="text-lg md:text-xl font-semibold italic">
                  "Você não precisa correr atrás. Você precisa lembrar quem é."
                </p>
              </div>
              <Button
                onClick={handleCTA}
                className="w-full max-w-md mx-auto md:mx-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 font-bold py-4 px-8 text-base md:text-lg rounded-full shadow-[0_0_20px_rgba(236,72,153,0.6)] transform hover:scale-105 transition-all"
              >
                Despertar Meu Magnetismo
              </Button>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-[0_0_40px_rgba(236,72,153,0.4)]">
                <Image
                  src="/images/hero-woman.jpg"
                  alt="Mulher confiante e magnética"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  className="rounded-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-purple-900/30 opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 opacity-50 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Momento de Despertar Section */}
      <section className="py-8 md:py-16 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-black"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-12 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
            Existe um momento na vida de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">toda mulher</span>
          </h2>
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-8 mb-8 border border-pink-500/30 shadow-[0_0_30px_rgba(236,72,153,0.2)]">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-12 h-12 text-pink-400" />
            </div>
            <p className="text-xl md:text-2xl text-center leading-relaxed mb-6 text-pink-100 italic">
              "Não é sobre quem eu quero conquistar. É sobre quem eu sou quando amo."
            </p>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed text-white/90">
              <p>
                Se você já se cansou de vínculos que começam com fogo e terminam em silêncio, de correr atrás de respostas, de tentar ser <span className="text-pink-400 font-semibold">"menos intensa"</span> para ser aceita —
              </p>
              <p className="text-center text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                então este é o seu chamado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O Que É Section */}
      <section className="py-8 md:py-16 px-4 bg-gradient-to-b from-black to-purple-950/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              O Apego Magnético é mais do que um guia.
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mb-6">
              É uma reprogramação emocional e energética
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Para mulheres que decidiram abandonar a dor e ativar o seu poder de <span className="text-pink-400 font-semibold">presença, conexão e magnetismo</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Revolução da Consciência */}
      <section className="py-8 md:py-16 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-900/5"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 text-base font-bold">
                💠 A Revolução da Consciência Feminina Começa Aqui
              </Badge>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg p-8 md:p-10 border border-pink-500/30 shadow-[0_0_30px_rgba(236,72,153,0.3)] mb-8">
            <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-6">
              Por trás do amor, existem <span className="text-pink-400 font-semibold">códigos neurológicos e hormonais</span> que determinam como você se conecta, se apaixona e se apega.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-6">
              Quando você entende esses códigos, você reprograma o seu sistema afetivo — e deixa de <span className="text-pink-400 font-semibold">reagir</span>, para começar a <span className="text-pink-400 font-semibold">atrair</span>.
            </p>
            <div className="bg-black/40 rounded-lg p-6 border-l-4 border-pink-500">
              <p className="text-xl md:text-2xl font-bold text-white">
                Este não é mais um conteúdo de "autoajuda".
              </p>
              <p className="text-lg md:text-xl text-white/90 mt-4">
                É uma fusão entre neurociência afetiva, psicologia relacional e energia feminina — escrita para mulheres que querem viver o <span className="text-pink-400 font-semibold">amor consciente</span>, e não o amor condicionado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ciência do Magnetismo */}
      <section className="py-8 md:py-16 px-4 bg-gradient-to-b from-purple-950/20 to-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Brain className="w-16 h-16 text-pink-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
              🧠 A Ciência do <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Magnetismo Feminino</span>
            </h2>
            <p className="text-xl text-white/80 mb-8">Você vai descobrir:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-2 border-pink-500/30 shadow-[0_0_20px_rgba(236,72,153,0.3)] bg-gradient-to-br from-purple-950/50 to-black text-white">
              <CardContent className="p-6">
                <Zap className="w-10 h-10 text-pink-400 mb-4" />
                <p className="text-white text-lg leading-relaxed">
                  Os <span className="text-pink-400 font-bold">gatilhos neurológicos</span> que ativam o vínculo emocional masculino.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-500/30 shadow-[0_0_20px_rgba(236,72,153,0.3)] bg-gradient-to-br from-purple-950/50 to-black text-white">
              <CardContent className="p-6">
                <Heart className="w-10 h-10 text-pink-400 mb-4" />
                <p className="text-white text-lg leading-relaxed">
                  Como <span className="text-pink-400 font-bold">desprogramar o padrão de apego ansioso</span> e reconectar-se à sua essência.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-500/30 shadow-[0_0_20px_rgba(236,72,153,0.3)] bg-gradient-to-br from-purple-950/50 to-black text-white">
              <CardContent className="p-6">
                <Brain className="w-10 h-10 text-pink-400 mb-4" />
                <p className="text-white text-lg leading-relaxed">
                  O segredo da <span className="text-pink-400 font-bold">vasopressina</span>, o hormônio do vínculo — e como despertar sua liberação natural.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-500/30 shadow-[0_0_20px_rgba(236,72,153,0.3)] bg-gradient-to-br from-purple-950/50 to-black text-white">
              <CardContent className="p-6">
                <Sparkles className="w-10 h-10 text-pink-400 mb-4" />
                <p className="text-white text-lg leading-relaxed">
                  Os <span className="text-pink-400 font-bold">comandos energéticos e linguísticos</span> que reposicionam sua presença, sem jogos ou manipulação.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transformação Section */}
      <section className="py-8 md:py-16 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-12 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
            💋 Transforme Sua Dor em <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Presença Magnética</span>
          </h2>

          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-lg p-8 md:p-10 border border-pink-500/30 shadow-[0_0_30px_rgba(236,72,153,0.3)] mb-8">
            <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-6">
              Toda mulher carrega uma história de amor mal resolvido.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-6">
              Mas poucas transformam essa história em <span className="text-pink-400 font-bold">presença magnética</span> — o tipo de energia que é sentida, lembrada e desejada, <span className="text-pink-400 font-semibold">mesmo no silêncio</span>.
            </p>
            <div className="bg-black/50 rounded-lg p-6 border-l-4 border-pink-500 mt-8">
              <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-4">
                O Apego Magnético é o seu ritual de retorno.
              </p>
              <p className="text-lg md:text-xl text-white/90">
                Um mergulho profundo onde ciência, emoção e espiritualidade se unem para reconstruir a mulher que não mendiga amor — <span className="text-pink-400 font-bold">ela o ativa</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Para Mulheres Que Decidiram */}
      <section className="py-8 md:py-16 px-4 bg-gradient-to-b from-black to-purple-950/30 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <Crown className="w-16 h-16 text-pink-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
              👑 Para Mulheres Que Decidiram <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Retomar o Trono</span>
            </h2>
          </div>

          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-8 mb-8 border border-pink-500/30 shadow-[0_0_20px_rgba(236,72,153,0.2)]">
            <p className="text-xl md:text-2xl text-center text-white font-semibold mb-8">
              Você não foi feita para disputar atenção.
            </p>
            <p className="text-xl md:text-2xl text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 font-bold mb-12">
              Você foi feita para ser lembrada, respeitada e escolhida pela energia que emana.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-black/40 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-white/90">
                  A <span className="text-pink-400 font-semibold">linguagem energética</span> que desperta o instinto de compromisso.
                </p>
              </div>
              <div className="flex items-start gap-4 bg-black/40 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-white/90">
                  <span className="text-pink-400 font-semibold">Protocolos de presença</span> que criam conexões autênticas e duradouras.
                </p>
              </div>
              <div className="flex items-start gap-4 bg-black/40 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-white/90">
                  A arte de atrair <span className="text-pink-400 font-semibold">vínculos seguros</span>, sem se diminuir para caber.
                </p>
              </div>
              <div className="flex items-start gap-4 bg-black/40 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-white/90">
                  O equilíbrio entre <span className="text-pink-400 font-semibold">vulnerabilidade e poder</span> — a alquimia do magnetismo feminino.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Reais */}
      <section className="py-8 md:py-16 px-4 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-12 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
            💫 Resultados Reais. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Transformações Profundas.</span>
          </h2>

          <div className="space-y-6 mb-12">
            <Card className="border-2 border-pink-500/40 shadow-[0_0_25px_rgba(236,72,153,0.4)] bg-gradient-to-br from-purple-950/70 to-black text-white">
              <CardContent className="p-8">
                <div className="flex gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-pink-400" />
                  <Sparkles className="w-5 h-5 text-pink-400" />
                  <Sparkles className="w-5 h-5 text-pink-400" />
                </div>
                <p className="text-lg md:text-xl italic text-white/90 leading-relaxed">
                  "Depois do guia, ele não mudou — <span className="text-pink-400 font-bold">eu mudei</span>. E quando eu mudei, tudo à minha volta se reorganizou."
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-500/40 shadow-[0_0_25px_rgba(236,72,153,0.4)] bg-gradient-to-br from-purple-950/70 to-black text-white">
              <CardContent className="p-8">
                <div className="flex gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-pink-400" />
                  <Sparkles className="w-5 h-5 text-pink-400" />
                  <Sparkles className="w-5 h-5 text-pink-400" />
                </div>
                <p className="text-lg md:text-xl italic text-white/90 leading-relaxed">
                  "Aprendi a ser <span className="text-pink-400 font-bold">presença</span>, não ausência disfarçada de amor."
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-500/40 shadow-[0_0_25px_rgba(236,72,153,0.4)] bg-gradient-to-br from-purple-950/70 to-black text-white">
              <CardContent className="p-8">
                <div className="flex gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-pink-400" />
                  <Sparkles className="w-5 h-5 text-pink-400" />
                  <Sparkles className="w-5 h-5 text-pink-400" />
                </div>
                <p className="text-lg md:text-xl italic text-white/90 leading-relaxed">
                  "Hoje, eu não espero ser escolhida. Eu me torno <span className="text-pink-400 font-bold">impossível de esquecer</span>."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* O Que Você Vai Receber */}
      <section className="py-8 md:py-16 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-950/10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-12 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
            🔥 O Que Você Vai Receber <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Dentro do Guia</span>
          </h2>

          <div className="space-y-6 mb-12">
            <Card className="border-2 border-pink-500/30 shadow-[0_0_20px_rgba(236,72,153,0.3)] bg-gradient-to-br from-purple-950/50 to-black text-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-3">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pink-400 mb-2">🧩 Neurociência Afetiva Feminina</h3>
                    <p className="text-white/90 leading-relaxed">
                      Entenda o funcionamento do cérebro durante o apego, o desejo e a conexão.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-500/30 shadow-[0_0_20px_rgba(236,72,153,0.3)] bg-gradient-to-br from-purple-950/50 to-black text-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-3">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pink-400 mb-2">💞 Psicologia do Vínculo</h3>
                    <p className="text-white/90 leading-relaxed">
                      Como transformar carência em magnetismo e empatia em presença.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-500/30 shadow-[0_0_20px_rgba(236,72,153,0.3)] bg-gradient-to-br from-purple-950/50 to-black text-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-3">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pink-400 mb-2">⚡ Rituais de Ativação Emocional</h3>
                    <p className="text-white/90 leading-relaxed">
                      Ferramentas práticas para elevar sua frequência e expandir sua presença energética.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-500/30 shadow-[0_0_20px_rgba(236,72,153,0.3)] bg-gradient-to-br from-purple-950/50 to-black text-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-3">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pink-400 mb-2">🎯 Comandos e Frases de Ativação</h3>
                    <p className="text-white/90 leading-relaxed">
                      Linguagem estratégica para comunicar o seu valor de forma irresistível.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-500/30 shadow-[0_0_20px_rgba(236,72,153,0.3)] bg-gradient-to-br from-purple-950/50 to-black text-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-3">
                    <Moon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pink-400 mb-2">🌕 Reconexão Espiritual Feminina</h3>
                    <p className="text-white/90 leading-relaxed">
                      O retorno à energia da mulher que lidera com alma e atrai com verdade.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              onClick={handleCTA}
              className="w-full max-w-md mx-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 font-bold py-4 px-8 text-base md:text-lg rounded-full shadow-[0_0_20px_rgba(236,72,153,0.6)] transform hover:scale-105 transition-all"
            >
              Despertar Meu Magnetismo
            </Button>
          </div>
        </div>
      </section>

      {/* Retorne ao Seu Poder */}
      <section className="py-8 md:py-16 px-4 bg-gradient-to-b from-purple-950/30 to-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-12">
            <Sparkles className="w-16 h-16 text-pink-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
              ✨ Retorne ao Seu Poder. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Retorne ao Seu Trono.</span>
            </h2>
          </div>

          <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-lg p-8 md:p-10 border border-pink-500/30 shadow-[0_0_30px_rgba(236,72,153,0.3)] mb-8">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
              Não é sobre conquistar ninguém.
            </p>
            <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 font-bold mb-8">
              É sobre relembrar quem você é quando está inteira.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              Este guia é para as mulheres que decidiram sair do ciclo da dor, da espera e da autossabotagem —
            </p>
            <p className="text-lg md:text-xl text-pink-300 font-semibold leading-relaxed">
              e entrar na era da presença magnética e do amor consciente.
            </p>
          </div>

          <div className="bg-black/50 rounded-lg p-8 mb-8 border-2 border-pink-500/50 shadow-[0_0_25px_rgba(236,72,153,0.4)]">
            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
              💎 Apego Magnético: O Início da Sua Virada
            </h3>
            <div className="space-y-4 text-lg md:text-xl text-white/90">
              <p className="flex items-center justify-center gap-3">
                <CheckCircle className="w-6 h-6 text-pink-400" />
                <span>Liberte-se da busca.</span>
              </p>
              <p className="flex items-center justify-center gap-3">
                <CheckCircle className="w-6 h-6 text-pink-400" />
                <span>Ative sua presença.</span>
              </p>
              <p className="flex items-center justify-center gap-3">
                <CheckCircle className="w-6 h-6 text-pink-400" />
                <span>E torne-se a mulher que deixa marcas — não por necessidade, mas por verdade.</span>
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              🔮 Escolha o Seu Caminho:
            </h3>
            <Button
              onClick={handleCTA}
              className="w-full max-w-md mx-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 font-bold py-6 px-8 text-lg md:text-xl rounded-full shadow-[0_0_30px_rgba(236,72,153,0.7)] transform hover:scale-105 transition-all"
            >
              👉 Despertar Meu Magnetismo
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-16 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-950/10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-12 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
            Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Frequentes</span>
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} className="bg-black border border-pink-500/30 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-purple-900/10 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-pink-400 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-white/90 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              onClick={handleCTA}
              className="w-full max-w-md mx-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 font-bold py-4 px-8 text-base md:text-lg rounded-full shadow-[0_0_20px_rgba(236,72,153,0.6)] transform hover:scale-105 transition-all"
            >
              Despertar Meu Magnetismo
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
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-3 rounded-full shadow-[0_0_25px_rgba(236,72,153,0.6)] transform hover:scale-110 transition-all flex items-center justify-center group"
        >
          <div className="w-8 h-8 relative">
            <svg
              width="32"
              height="32"
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
          <span className="absolute right-full mr-3 bg-black text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Fale conosco no WhatsApp
          </span>
        </a>
      </div>

      {/* Espaçamento para CTA fixo mobile */}
      <div className="h-20 md:h-0"></div>

      {/* Copyright Section */}
      <footer className="py-6 px-4 bg-black border-t border-pink-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/70 text-sm">
            © 2024 Apego Magnético. Desenvolvido por{" "}
            <a 
              href="https://www.devpro.fun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-400 font-semibold hover:text-pink-300 transition-colors"
            >
              DevPro
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
