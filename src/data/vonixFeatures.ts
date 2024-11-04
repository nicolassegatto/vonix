import img1 from "@/assets/1.jpg"
import img2 from "@/assets/2.jpg"
import img3 from "@/assets/3.jpg"
import img4 from "@/assets/4.jpg"
import img5 from "@/assets/5.jpg"
import img6 from "@/assets/6.jpg"

export interface VonixFeaturesInterface {
  id: number
  name: string
  description: string
  img: any
}

export const VonixFeaturesData = [
  {
    id: 1,
    name: "Gestão e Monitoria em tempo real",
    description: "controle e gerencie sua operação",
    img: img1,
  },
  {
    id: 2,
    name: "Discador Automático",
    description: "Descricao do discador",
    img: img2,
  },
  {
    id: 3,
    name: "Recursos de Multicanalidade",
    description: "Descricao do multicanalidade",
    img: img3,
  },
  {
    id: 4,
    name: "BI em Tempo real",
    description: "Descricao do BI",
    img: img4,
  },
  {
    id: 5,
    name: "Gestor de URA on-line",
    description: "descricao do gestor",
    img: img5,
  },
  {
    id: 6,
    name: "Gerenciamento de Troncos",
    description:
      "Gerenciamento de Troncos para Cumprimento dos Indicadores ANATEL",
    img: img6,
  },
] as VonixFeaturesInterface[]
