import {
  BarChartBig,
  CloudCog,
  NotebookTabs,
  PhoneForwarded,
  SquareGanttChart,
  TvMinimal,
  Workflow,
  Wrench,
} from "lucide-react"

export interface ServiceInterface {
  name: string
  description: string
  image: any
}

interface ServiceListInterface {
  management: ServiceInterface[]
  development: ServiceInterface[]
  sustentation: ServiceInterface[]
}

export const Services = {
  management: [
    {
      name: "Gestão de Call Center",
      description:
        "Solução completa para administração de operações de atendimento ao cliente, vendas, cobrança e crédito, com funcionalidades integradas e relatórios em tempo real.",
      image: SquareGanttChart,
    },
    {
      name: "Discador Automático",
      description:
        "Sistema de discagem preditiva, power e preview, com retorno automático de chamadas abandonadas, gravação de chamadas e URA integrada.",
      image: PhoneForwarded,
    },
    {
      name: "Gestão e Monitoria em Tempo Real",
      description:
        "Monitoramento em tempo real das operações, supervisão de áudio e relatórios detalhados para uma gestão eficiente.",
      image: Wrench,
    },
    {
      name: "Business Intelligence (BI)",
      description:
        "Ferramentas de Bl para análises profundas e personalizadas em tempo real, apoiando decisões estratégicas.",
      image: BarChartBig,
    },
  ],
  development: [
    {
      name: "Recursos de Multicanalidade",
      description:
        "Integração de voz, chat, e-mail, WhatsApp, Telegram e Messenger em uma única plataforma, garantindo uma experiência unitorme para o cliente.",
      image: TvMinimal,
    },
    {
      name: "Gestão de URA On-line",
      description:
        "Sistema de discagem preditiva, power e preview, com retorno automático de chamadas abandonadas, gravação de chamadas e URA integrada.",
      image: Workflow,
    },
    {
      name: "Gerenciamento de Troncos",
      description:
        "Controle das origens das chamadas e conformidade com regulamentos da ANATEL, otimizando a operação.",
      image: CloudCog,
    },
  ],
  sustentation: [
    {
      name: "Suporte e Treinamento",
      description:
        "Suporte técnico 24/7, treinamento contínuo para clientes e manutenção da infraestrutura de telefonia.",
      image: NotebookTabs,
    },
  ],
} as ServiceListInterface
