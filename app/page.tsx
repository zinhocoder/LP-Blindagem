"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Gift, Clock, CheckCircle, Sparkles, Lock, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function BlindagemLanding() {
 const handleCTA = () => {
  console.log("CTA clicado - redirecionar para checkout");
  window.open("https://pay.kiwify.com.br/2467E0g", "_blank");
  }

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "O método Blindagem Contra Amantes realmente funciona?",
      answer:
        "Sim! O método já ajudou centenas de mulheres a recuperar seus casamentos, mesmo em situações extremas. É baseado em técnicas psicológicas comprovadas e abordagem emocional estratégica.",
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer:
        "Os primeiros sinais de mudança podem aparecer em poucos dias, mas recomendamos seguir o protocolo completo por pelo menos 30 dias para resultados duradouros e transformação profunda do relacionamento.",
    },
    {
      question: "E se meu marido já está envolvido com outra pessoa?",
      answer:
        "O método foi desenvolvido justamente para situações críticas como essa. Mesmo em casos de traição confirmada, as técnicas de blindagem emocional podem reconectar vocês e afastar influências externas.",
    },
    {
      question: "Preciso contar para meu marido que estou fazendo o método?",
      answer:
        "Não é necessário. O Blindagem Contra Amantes trabalha com mudanças comportamentais e emocionais suas que naturalmente impactam a dinâmica do relacionamento, sem precisar revelar que está seguindo um método específico.",
    },
    {
      question: "O método inclui abordagem espiritual?",
      answer:
        "Sim, para quem desejar. O programa oferece tanto técnicas psicológicas quanto espirituais, permitindo que você escolha a abordagem que mais se alinha com suas crenças pessoais.",
    },
    {
      question: "Tenho garantia se não funcionar?",
      answer:
        "Sim! Oferecemos garantia total. Se você seguir o método conforme orientado e não ver resultados, devolvemos 100% do seu investimento sem questionamentos.",
    },
  ]

  return (
    <div className="min-h-screen bg-black font-roboto">
      {/* CTA Fixo */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#FF0000] p-4 shadow-lg md:hidden">
        <Button
          onClick={handleCTA}
          className="w-full bg-black text-[#FF0000] hover:bg-gray-900 font-bold py-3 text-lg border-2 border-[#FF0000]"
        >
          Quero blindar meu relacionamento
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative bg-black text-white py-8 md:py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF0000]/30 to-black z-0"></div>
        <div className="absolute top-0 right-0 w-full h-full opacity-20">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkYwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMS4zNiAwLTIuNTEuOTUtMi44MyAyLjI0LS4xNS42MS0uNzYgMS0xLjM4Ljg1LS42MS0uMTUtMS0uNzYtLjg1LTEuMzguNTMtMi4xNSAyLjQ1LTMuNzEgNC43MS0zLjcxIDIuNyAwIDQuOSAyLjE5IDQuOSA0Ljl2NC45SDM2di00LjljMC0uNTQtLjQ2LTEtMS0xeiIvPjxwYXRoIGQ9Ik0zMCAzMGMwLTMuMzEgMi42OS02IDYtNnM2IDIuNjkgNiA2LTIuNjkgNi02IDYtNi0yLjY5LTYtNnptNiA0YzIuMjEgMCA0LTEuNzkgNC00cy0xLjc5LTQtNC00LTQgMS43OS00IDQgMS43OSA0IDQgNHoiLz48L2c+PC9zdmc+')]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="mb-8">
                <Shield className="w-16 h-16 text-[#FF0000] mb-4" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]">
                Proteja Seu Casamento <span className="text-[#FF0000]">Antes Que Seja Tarde Demais</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 leading-relaxed">
                Se você sente que seu marido está mais frio, distante ou até mesmo já começou a agir de forma estranha…
              </p>
              <div className="bg-[#FF0000]/20 backdrop-blur-sm rounded-lg p-6 mb-8 border-l-4 border-[#FF0000]">
                <p className="text-lg md:text-xl font-semibold">
                  Essa pode ser a <span className="text-[#FF0000] font-bold">única chance</span> que você tem de evitar
                  que outra mulher destrua o seu casamento.
                </p>
              </div>
              <Button
                onClick={handleCTA}
                className="w-full max-w-md mx-auto bg-[#FF0000] text-white hover:bg-[#FF0000]/90 font-bold py-4 px-6 md:px-8 text-base md:text-lg rounded-full shadow-[0_0_15px_rgba(255,0,0,0.7)] transform hover:scale-105 transition-all border-2 border-[#FF0000]/50"
              >
                Quero blindar meu relacionamento
              </Button>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-[0_0_30px_rgba(255,0,0,0.4)]">
                <Image
                  src="/images/hero-woman.jpg"
                  alt="Mulher elegante em vermelho"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  className="rounded-lg"
                  onError={(e) => {
                    console.log("Erro ao carregar imagem:", e)
                    // Fallback para uma cor de fundo se a imagem não carregar
                    e.currentTarget.style.display = "none"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
                {/* Fallback background se a imagem não carregar */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000] to-[#990000] opacity-50 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VSL Section */}
      <section className="py-8 md:py-16 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FF0000]/5"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-12 drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]">
            Assista ao <span className="text-[#FF0000]">Vídeo Completo</span>
          </h2>
          <div className="bg-[#FF0000]/10 rounded-lg p-6 md:p-8 border border-[#FF0000]/30 shadow-[0_0_20px_rgba(255,0,0,0.2)]">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/q2I9bdPCr5w"
                title="Blindagem Contra Amantes - VSL Completo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-6 text-center">
              <p className="text-white text-lg md:text-xl leading-relaxed mb-4">
                <span className="text-[#FF0000] font-bold">Não perca tempo!</span> Assista ao vídeo completo e descubra como o método Blindagem Contra Amantes pode salvar seu relacionamento.
              </p>
              <Button
                onClick={handleCTA}
                className="w-full max-w-md mx-auto bg-[#FF0000] text-white hover:bg-[#FF0000]/90 font-bold py-4 px-6 md:px-8 text-base md:text-lg rounded-full shadow-[0_0_15px_rgba(255,0,0,0.7)] transform hover:scale-105 transition-all border-2 border-[#FF0000]/50"
              >
                Quero blindar meu relacionamento
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sinais Section */}
      <section className="py-8 md:py-16 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FF0000]/5"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-12 drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]">
            Você Está <span className="text-[#FF0000]">Percebendo</span> Estes Sinais?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <Card className="border-l-4 border-[#FF0000] shadow-[0_0_15px_rgba(255,0,0,0.3)] bg-black text-white">
              <CardContent className="p-6">
                <Heart className="w-8 h-8 text-[#FF0000] mb-4" />
                <p className="text-white text-lg">
                  Talvez você esteja percebendo que ele{" "}
                  <span className="text-[#FF0000] font-bold">não te elogia mais</span> como antes…
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#FF0000] shadow-[0_0_15px_rgba(255,0,0,0.3)] bg-black text-white">
              <CardContent className="p-6">
                <div className="w-8 h-8 bg-[#FF0000] rounded-full mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">!</span>
                </div>
                <p className="text-white text-lg">
                  Talvez ele fique <span className="text-[#FF0000] font-bold">irritado com tudo</span>, esconda o
                  celular…
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#FF0000] shadow-[0_0_15px_rgba(255,0,0,0.3)] bg-black text-white">
              <CardContent className="p-6">
                <div className="w-8 h-8 bg-[#FF0000] rounded-full mb-4 flex items-center justify-center">
                  <span className="text-white">👤</span>
                </div>
                <p className="text-white text-lg">
                  Ou simplesmente esteja mais presente fisicamente… Mas{" "}
                  <span className="text-[#FF0000] font-bold">completamente ausente</span> emocionalmente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ameaça Section */}
      <section className="py-8 md:py-16 px-4 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF0000]/20 to-black"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-12 drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]">
            A <span className="text-[#FF0000]">Verdade</span> Que Ninguém Te Conta
          </h2>
          <div className="bg-[#FF0000]/10 rounded-lg p-8 mb-8 border border-[#FF0000]/30 shadow-[0_0_20px_rgba(255,0,0,0.2)]">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              A verdade é que hoje existem mulheres{" "}
              <span className="text-[#FF0000] font-bold">treinadas, frias, manipuladoras</span>…
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Elas sabem <span className="text-[#FF0000] font-bold">exatamente</span> como seduzir um homem casado.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Usam táticas psicológicas para fazer ele se sentir desejado e valorizado…
            </p>
            <p className="text-lg md:text-xl leading-relaxed font-semibold">
              E pouco a pouco, <span className="text-[#FF0000] font-bold">tiram ele de dentro da sua casa</span>, mesmo
              que o corpo dele continue aí.
            </p>
          </div>
        </div>
      </section>

      {/* Solução Section */}
      <section className="py-8 md:py-16 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkYwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMS4zNiAwLTIuNTEuOTUtMi44MyAyLjI0LS4xNS42MS0uNzYgMS0xLjM4Ljg1LS42MS0uMTUtMS0uNzYtLjg1LTEuMzguNTMtMi4xNSAyLjQ1LTMuNzEgNC43MS0zLjcxIDIuNyAwIDQuOSAyLjE5IDQuOSA0Ljl2NC45SDM2di00LjljMC0uNTQtLjQ2LTEtMS0xeiIvPjxwYXRoIGQ9Ik0zMCAzMGMwLTMuMzEgMi42OS02IDYtNnM2IDIuNjkgNiA2LTIuNjkgNi02IDYtNi0yLjY5LTYtNnptNiA0YzIuMjEgMCA0LTEuNzkgNC00cy0xLjc5LTQtNC00LTQgMS43OS00IDQgMS43OSA0IDQgNHoiLz48L2c+PC9zdmc+')] opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-12 drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]">
            A <span className="text-[#FF0000]">Solução</span> Que Você Precisa
          </h2>
          <div className="bg-gradient-to-r from-[#FF0000] to-[#990000] text-white rounded-lg p-8 mb-12 shadow-[0_0_30px_rgba(255,0,0,0.4)]">
            <Shield className="w-16 h-16 mx-auto mb-6 text-white" />
            <h3 className="text-2xl md:text-4xl font-bold mb-6 drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]">
              Blindagem Contra Amantes
            </h3>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Foi por isso que eu desenvolvi o protocolo completo do{" "}
              <span className="font-bold">Blindagem Contra Amantes</span>.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Um método <span className="font-bold">estratégico, emocional e comportamental</span>.
            </p>
            <p className="text-lg md:text-xl leading-relaxed font-semibold">
              Ele <span className="font-bold">protege seu relacionamento</span> contra influências externas… E{" "}
              <span className="font-bold">reconecta vocês dois</span> como casal, mesmo que você já esteja sentindo que
              perdeu o controle.
            </p>
          </div>
          <Button
            onClick={handleCTA}
            className="w-full max-w-md mx-auto bg-[#FF0000] text-white hover:bg-[#FF0000]/90 font-bold py-4 px-6 md:px-8 text-base md:text-lg rounded-full shadow-[0_0_15px_rgba(255,0,0,0.7)] transform hover:scale-105 transition-all border-2 border-[#FF0000]/50"
          >
            Quero blindar meu relacionamento
          </Button>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-8 md:py-16 px-4 bg-black relative">
        <div className="absolute inset-0 bg-[#FF0000]/5"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-12 drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]">
            O Que Você Vai <span className="text-[#FF0000]">Descobrir</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <Card className="shadow-[0_0_15px_rgba(255,0,0,0.3)] bg-black text-white border border-[#FF0000]/30">
              <CardContent className="p-6">
                <CheckCircle className="w-8 h-8 text-[#FF0000] mb-4" />
                <p className="text-white text-lg leading-relaxed">
                  Dentro do método Blindagem Contra Amantes, você vai descobrir como{" "}
                  <span className="text-[#FF0000] font-bold">identificar os sinais invisíveis</span> de aproximação de
                  uma amante… Antes que ela se torne uma ameaça real.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-[0_0_15px_rgba(255,0,0,0.3)] bg-black text-white border border-[#FF0000]/30">
              <CardContent className="p-6">
                <Heart className="w-8 h-8 text-[#FF0000] mb-4" />
                <p className="text-white text-lg leading-relaxed">
                  Vai aprender o <span className="text-[#FF0000] font-bold">"Código da Presença Emocional"</span>… Que
                  faz seu marido voltar a sentir o mesmo desejo e admiração do início.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-[0_0_15px_rgba(255,0,0,0.3)] bg-black text-white border border-[#FF0000]/30">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-[#FF0000] mb-4" />
                <p className="text-white text-lg leading-relaxed">
                  Vai dominar <span className="text-[#FF0000] font-bold">técnicas de blindagem</span> emocional e
                  espiritual para proteger a união…
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-[0_0_15px_rgba(255,0,0,0.3)] bg-black text-white border border-[#FF0000]/30">
              <CardContent className="p-6">
                <CheckCircle className="w-8 h-8 text-[#FF0000] mb-4" />
                <p className="text-white text-lg leading-relaxed">
                  E <span className="text-[#FF0000] font-bold">restaurar o respeito e a admiração</span> sem brigar,
                  vigiar ou implorar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prova Social Section */}
      <section className="py-8 md:py-16 px-4 bg-[#FF0000] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMS4zNiAwLTIuNTEuOTUtMi44MyAyLjI0LS4xNS42MS0uNzYgMS0xLjM4Ljg1LS42MS0uMTUtMS0uNzYtLjg1LTEuMzguNTMtMi4xNSAyLjQ1LTMuNzEgNC43MS0zLjcxIDIuNyAwIDQuOSAyLjE5IDQuOSA0Ljl2NC45SDM2di00LjljMC0uNTQtLjQ2LTEtMS0xeiIvPjxwYXRoIGQ9Ik0zMCAzMGMwLTMuMzEgMi42OS02IDYtNnM2IDIuNjkgNiA2LTIuNjkgNi02IDYtNi0yLjY5LTYtNnptNiA0YzIuMjEgMCA0LTEuNzkgNC00cy0xLjc5LTQtNC00LTQgMS43OS00IDQgMS43OSA0IDQgNHoiLz48L2c+PC9zdmc+')] opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-12 drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]">
            Resultados <span className="text-black">Comprovados</span>
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8 border border-white/20">
            <Sparkles className="w-12 h-12 text-white mx-auto mb-6" />
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              O Blindagem Contra Amantes já ajudou <span className="font-bold">centenas de mulheres</span> a recuperar
              seus casamentos… Mesmo em situações extremas de traição confirmada.
            </p>
            <p className="text-lg md:text-xl leading-relaxed font-semibold">
              E é o <span className="font-bold">único do mercado</span> com abordagem psicológica, emocional… E, para
              quem desejar, também espiritual.
            </p>
          </div>
        </div>
      </section>

      {/* Urgência Section */}
      <section className="py-8 md:py-16 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#FF0000]/20 to-black"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-black text-white rounded-lg p-8 mb-12 border border-[#FF0000] shadow-[0_0_20px_rgba(255,0,0,0.3)]">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#FF0000]">"Mas será que não é tarde demais?"</h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              <span className="text-[#FF0000] font-bold">Não.</span> Enquanto houver vínculo emocional, há chance.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              O problema é que a maioria das mulheres <span className="text-[#FF0000] font-bold">espera demais</span>…
            </p>
            <p className="text-lg md:text-xl leading-relaxed font-semibold">
              E quando percebe, a amante já entrou, instalou-se emocionalmente e{" "}
              <span className="text-[#FF0000] font-bold">virou um problema sério</span>.
            </p>
          </div>
          <Button
            onClick={handleCTA}
            className="w-full max-w-md mx-auto bg-[#FF0000] text-white hover:bg-[#FF0000]/90 font-bold py-4 px-6 md:px-8 text-base md:text-lg rounded-full shadow-[0_0_15px_rgba(255,0,0,0.7)] transform hover:scale-105 transition-all border-2 border-[#FF0000]/50"
          >
            Quero blindar meu relacionamento
          </Button>
          <p className="text-white text-lg leading-relaxed mt-8 mb-4">
            <span className="text-[#FF0000] font-bold">Proteja</span> o que é seu.{" "}
            <span className="text-[#FF0000] font-bold">Restaure</span> o que ainda pode ser salvo.
          </p>
          <p className="text-white text-lg leading-relaxed font-semibold">
            Transforme sua posição dentro do seu relacionamento – de insegura para{" "}
            <span className="text-[#FF0000] font-bold">respeitada</span>. De esquecida para
            <span className="text-[#FF0000] font-bold"> indispensável</span>.
          </p>
        </div>
      </section>

      {/* Bônus Section */}
      <section className="py-8 md:py-16 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FF0000]/5"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-12 drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]">
            Bônus <span className="text-[#FF0000]">Exclusivos</span> Por Tempo Limitado
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <Card className="border-2 border-[#FF0000] shadow-[0_0_20px_rgba(255,0,0,0.4)] relative bg-black text-white">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#FF0000] text-white px-4 py-2 text-sm font-bold">BÔNUS #1</Badge>
              </div>
              <CardContent className="p-8 text-center">
                <Gift className="w-12 h-12 text-[#FF0000] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">"O Amor como Reforma"</h3>
                <p className="text-white leading-relaxed">
                  O guia extra "O Amor como Reforma" – para{" "}
                  <span className="text-[#FF0000] font-bold">restaurar os fundamentos</span> do seu casamento com
                  maturidade e sabedoria
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#FF0000] shadow-[0_0_20px_rgba(255,0,0,0.4)] relative bg-black text-white">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#FF0000] text-white px-4 py-2 text-sm font-bold">BÔNUS #2</Badge>
              </div>
              <CardContent className="p-8 text-center">
                <Clock className="w-12 h-12 text-[#FF0000] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Acesso Vitalício</h3>
                <p className="text-white leading-relaxed">
                  Acesso <span className="text-[#FF0000] font-bold">vitalício</span> ao conteúdo completo do programa
                  Blindagem Contra Amantes – para que você possa revisitar sempre que precisar fortalecer seu
                  relacionamento
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <div className="bg-[#FF0000] text-white rounded-lg p-6 mb-8 inline-block shadow-[0_0_15px_rgba(255,0,0,0.5)]">
              <p className="text-lg font-semibold flex items-center justify-center">
                <Clock className="w-5 h-5 mr-2" /> Mas atenção: esse combo de bônus será retirado em breve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Escassez Final Section */}
      <section className="py-8 md:py-16 px-4 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF0000]/30 to-black"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-[#FF0000]/10 rounded-lg p-8 mb-8 border border-[#FF0000]/30 shadow-[0_0_20px_rgba(255,0,0,0.2)]">
            <Lock className="w-12 h-12 text-[#FF0000] mx-auto mb-6" />
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Se você sair dessa página, <span className="text-[#FF0000] font-bold">não sei se conseguirá voltar</span>{" "}
              com o mesmo acesso.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Você pode continuar como está… com dúvidas, inseguranças e medo do que pode acontecer…
            </p>
            <p className="text-lg md:text-xl leading-relaxed font-semibold">
              Ou pode dar o passo que <span className="text-[#FF0000] font-bold">milhares de mulheres</span> estão
              dando, antes que seja tarde.
            </p>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]">
            A escolha é sua. <span className="text-[#FF0000]">Eu só te mostrei o caminho.</span>
          </h2>
          <Button
            onClick={handleCTA}
            className="w-full max-w-md mx-auto bg-[#FF0000] text-white hover:bg-[#FF0000]/90 font-bold py-4 px-6 md:px-8 text-base md:text-lg rounded-full shadow-[0_0_15px_rgba(255,0,0,0.7)] transform hover:scale-105 transition-all border-2 border-[#FF0000]/50"
          >
            Quero blindar meu relacionamento
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-16 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FF0000]/5"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-12 drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]">
            Perguntas <span className="text-[#FF0000]">Frequentes</span>
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} className="bg-black border border-[#FF0000]/30 shadow-[0_0_10px_rgba(255,0,0,0.2)]">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-[#FF0000]/5 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-[#FF0000] transition-transform ${openFaq === index ? "rotate-180" : ""}`}
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
              className="w-full max-w-md mx-auto bg-[#FF0000] text-white hover:bg-[#FF0000]/90 font-bold py-4 px-6 md:px-8 text-base md:text-lg rounded-full shadow-[0_0_15px_rgba(255,0,0,0.7)] transform hover:scale-105 transition-all border-2 border-[#FF0000]/50"
            >
              Quero blindar meu relacionamento
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-20 md:bottom-6 right-6 z-50">
        <a
          href="https://wa.me/5511999999999?text=Olá! Tenho interesse no método Blindagem Contra Amantes"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white p-3 rounded-full shadow-[0_0_20px_rgba(255,0,0,0.6)] transform hover:scale-110 transition-all flex items-center justify-center group"
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
      <footer className="py-6 px-4 bg-black border-t border-[#FF0000]/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/70 text-sm">
            © 2024 Blindagem Contra Amantes. Desenvolvido por{" "}
            <a 
              href="https://www.devpro.fun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FF0000] font-semibold hover:text-[#FF0000]/80 transition-colors"
            >
              DevPro
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
