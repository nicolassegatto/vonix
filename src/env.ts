import { z } from "zod"

const envSchema = z.object({
  VITE_BASE_URL: z.string().default("/vonix"),
  VITE_API_URL: z.string().url().default("https://sandbox.vonixcc.com.br"),
})

export const env = envSchema.parse(import.meta.env)
