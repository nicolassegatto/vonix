import { api } from "@/lib/axios"

export interface SendWhatsappProps {
  id: string
}

export interface SendWhatsappRequest {
  message: string
  phoneNumber: string
}

export async function SendWhatsapp(
  payload: SendWhatsappRequest,
): Promise<SendWhatsappProps> {
  const response = await api.post(`/v1/api-docs/bots-messages`, payload)
  return response.data
}
