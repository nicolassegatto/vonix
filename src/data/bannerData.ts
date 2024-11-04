import Image from "@/assets/premioAbt.jpeg"

export interface BannerDataInterface {
  id: 1
  title: string
  description: string
  fullDescription: string
  img: any
}

export const BannerData = {
  id: 1,
  title: "Prêmiação Associação Brasileira de Telesserviços XXIV Prêmio ABT",
  description:
    "Case Vonix e Algar Telecom recebe reconhecimento público no Prêmio ABT, a maior premiação nacional em Excelência no Relacionamento com o Cliente...",
  fullDescription: `Case Vonix e Algar Telecom recebe reconhecimento público no Prêmio
    ABT, a maior premiação nacional em Excelência no Relacionamento com
    o Cliente. “A URA Inteligente transformou o atendimento B2B com
    automação, resultando em um aumento de 40% na automação de chamados
    técnicos e 15% nos comerciais, além de uma redução de 47% no Tempo
    Médio de Atendimento (TMA). A satisfação do cliente também aumentou
    significativamente, subindo de 76% para 90%, com um Nível de Serviço
    (NS) de 94%.”`,
  img: Image,
} as BannerDataInterface
