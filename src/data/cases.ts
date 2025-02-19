import accenture from "../assets/logos/accenture.png"
import algar from "../assets/logos/algar.png"
import doctorAlia from "../assets/logos/doctoralia.svg"
import facilBrasil from "../assets/logos/facilBrasil.png"
import fluency from "../assets/logos/fluency.png"
import oi from "../assets/logos/oi.png"

interface HighlightsInterface {
  title: string
  description: string
}

export interface CasesInterface {
  name: string
  description: string
  highlights: HighlightsInterface[]
  image: any
  companyType: string
  caseType: string
}

export const dataCases = [
  {
    name: "Accenture",
    description:
      "Accenture Fictício: atingindo eficiência operacional e aumentando a satisfação dos clientes.",
    highlights: [
      {
        title: "4.5",
        description: "nota de satisfação dos clientes",
      },
      {
        title: "14x",
        description: "aumento de receitas",
      },
    ],
    image: accenture,
    companyType: "Consultoria",
    caseType: "Eficiência",
  },
  {
    name: "Algar",
    description:
      "Algar Fictício: aprimorando o atendimento ao cliente com soluções integradas de URA.",
    highlights: [
      {
        title: "85%",
        description: "redução no tempo de espera",
      },
      {
        title: "3x",
        description: "melhoria na produtividade dos agentes",
      },
    ],
    image: algar,
    companyType: "Telecom",
    caseType: "Atendimento",
  },
  {
    name: "Doctoralia",
    description:
      "Doctoralia Fictício: automatizando o agendamento e aumentando a eficiência em contato com pacientes.",
    highlights: [
      {
        title: "95%",
        description: "redução de chamadas não atendidas",
      },
      {
        title: "2.5x",
        description: "aumento na eficiência do agendamento",
      },
    ],
    image: doctorAlia,
    companyType: "Saúde",
    caseType: "Automação",
  },
  {
    name: "FacilBrasil",
    description:
      "FacilBrasil Fictício: otimizando a cobrança com distribuição inteligente de chamadas.",
    highlights: [
      {
        title: "72%",
        description: "aumento na recuperação de crédito",
      },
      {
        title: "1.8x",
        description: "melhoria na taxa de conversão",
      },
    ],
    image: facilBrasil,
    companyType: "Fintech",
    caseType: "Cobrança",
  },
  {
    name: "Fluency",
    description:
      "Fluency Fictício: aprimorando a experiência do cliente com atendimento multicanal.",
    highlights: [
      {
        title: "92%",
        description: "satisfação dos clientes",
      },
      {
        title: "40%",
        description: "redução de custos operacionais",
      },
    ],
    image: fluency,
    companyType: "Educação",
    caseType: "Multicanal",
  },
  {
    name: "Oi",
    description:
      "Oi Fictício: transformando o atendimento com plataforma unificada para todos os canais.",
    highlights: [
      {
        title: "98%",
        description: "melhoria no cumprimento de SLA",
      },
      {
        title: "2x",
        description: "aumento na eficiência de atendimento",
      },
    ],
    image: oi,
    companyType: "Telecom",
    caseType: "Atendimento",
  },
] as CasesInterface[]

interface DepoimentsInterface {
  name: string
  company: string
  role: string
  description: string
  image: string
}

export const dataCaseDepoiments = [
  {
    name: "Daniela Ferreira Dias",
    company: "Accenture Operations",
    role: "Diretor de Operações",
    description:
      "A Vonix Phone se destaca ao oferecer a capacidade de criar dashboards personalizados e acompanhar a operação em tempo real. Essa funcionalidade não apenas facilita a visualização dos indicadores, mas também possibilita um monitoramento ágil e preciso do gráfico. Um dos pontos fortes da Vonix é sua capacidade de extrair informações detalhadas, como chamadas perfiladas. Com esse relatório, podemos identificar o tipo de chamadas que entram na fila e ajustar as prioridades e skill conforme necessário.",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQGcf0YReZPiLQ/profile-displayphoto-shrink_400_400/B56ZTsHT49HQAg-/0/1739128128034?e=1745452800&v=beta&t=BWWMAwVUj2SbP3mW3qSuwZvyHrnMzoeoTqLN71xKG-Y",
  },
  {
    name: "André Caetano Monteiro",
    company: "Inove Telecom",
    role: "Diretor Executivo",
    description:
      "As soluções da Vonix mudaram nosso jogo de produtividade. Há alguns anos, os serviços prestados por essa equipe têm feito a diferença no nosso negócio. Compromisso, qualidade e performance são características marcantes na Vonix e em toda sua equipe! Desejamos vida longa a essa parceria!",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQEZ5loRAW3jJg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718200728015?e=1745452800&v=beta&t=FZ8MRTFUot2tzPz6O_QB1r0DcusJXcZyw6pD7xj7_q4",
  },
  {
    name: "Lorraynne Araújo",
    company: "Credi10",
    role: "Gerente de Vendas",
    description:
      "Ficamos extremamente satisfeitos com os serviços da Vonix. Desde o primeiro contato, fomos recebidos com profissionalismo e uma abordagem personalizada que nos fez sentir valorizados como clientes. Recomendo fortemente a Vonix a qualquer empresa que busque uma gestão de telefonia de alto nível.",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQG3oPwJmmqliw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1671633169102?e=1745452800&v=beta&t=5VXvqlNoNJ6btLztf-quT05tIuHv_Rh7sRx_-HID6DE",
  },
  {
    name: "Nicolas Segatto",
    company: "Algar",
    role: "Desenvolvedor SR.",
    description:
      "Descobrir a Vonix nos levou a uma nova fase em nosso call center. Com sua plataforma intuitiva e robusta, desenvolver URAs se transformou em uma jornada ágil e completa. A habilidade de criar códigos em JavaScript e integrar tecnologias avançadas, como STT e TTS, nos permitiu oferecer um atendimento verdadeiramente personalizado.",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQFCuMaLDMdHEA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729919201471?e=1745452800&v=beta&t=Fwxnzw9MSZaHkITU-980Hun_psIQ7QIKyWiPG7Kg4Lw",
  },
  {
    name: "Fabiano Augusto",
    company: "Vonix",
    role: "Diretor de Operações",
    description:
      "A Vonix se dedica a redefinir o contato com o cliente. Com uma infraestrutura de telefonia robusta e uma equipe sempre pronta para suportar nossos clientes, oferecemos uma plataforma que atende as necessidades de empresas que buscam excelência em comunicação.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQFH7zhq155dZA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719590356241?e=1745452800&v=beta&t=Shp801xPB9muA1uheyU6m77Qf4DqZ-tZdEcFenIv2sQ",
  },
] as DepoimentsInterface[]
