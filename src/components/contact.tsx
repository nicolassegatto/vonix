import { useForm } from "react-hook-form"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Textarea } from "./ui/textarea"

export function Contact() {
  const { register, handleSubmit } = useForm()

  function handleContactRequest(data: any) {
    console.log(data)
  }

  return (
    <div className={`flex w-full flex-col gap-4 rounded-3xl px-6 `}>
      <div className="rounded-3xl border bg-slate-100 p-6 dark:bg-slate-900">
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleContactRequest)}
        >
          <div>
            <Label
              htmlFor="email"
              className="pl-4 font-bold uppercase text-muted-foreground"
            >
              Work email *
            </Label>
            <Input
              className="rounded-full"
              id="email"
              type="email"
              {...register("email")}
            />
          </div>
          <div>
            <Label
              htmlFor="contactPhone"
              className="pl-4 font-bold uppercase text-muted-foreground"
            >
              Phone number*
            </Label>
            <Input
              className="rounded-full"
              id="contactPhone"
              type="tel"
              {...register("contactPhone")}
            />
          </div>

          <div>
            <Label
              htmlFor="companySize"
              className="pl-4 font-bold uppercase text-muted-foreground"
            >
              Company size *
            </Label>
            <Select>
              <SelectTrigger className="rounded-full pl-4 text-xs text-muted-foreground">
                <SelectValue placeholder="Por favor escolha" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Total de funcionários</SelectLabel>
                  <SelectItem value="small">1-49</SelectItem>
                  <SelectItem value="medium">50-99</SelectItem>
                  <SelectItem value="big">100-999</SelectItem>
                  <SelectItem value="extra">1.000-9.999</SelectItem>
                  <SelectItem value="corporate">10.000+</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label
              htmlFor="message"
              className="pl-4 font-bold uppercase text-muted-foreground"
            >
              Mensagem
            </Label>
            <Textarea
              id="message"
              className="resize-none rounded-3xl"
              {...register("message")}
            />
          </div>
          <Button
            type="submit"
            variant={"default"}
            className="rounded-full bg-vonix-blue-400 font-bold dark:bg-vonix-orange-600"
          >
            Enviar
          </Button>
          <p className="text-xs text-muted-foreground">
            Os dados pessoais coletados neste formulário têm por finalidade o
            retorno à mensagem enviada. Referidos dados não serão utilizados
            para forma adversa da finalidade pretendida. Uma vez cumprida com a
            finalidade, os dados ficarão armazenados pelo tempo necessário para
            cumprir com a finalidade e, após referido prazo, serão excluídos da
            base de dados, nos termos da LGPD. Qualquer dúvida, basta entrar em
            contato com o Encarregado.
          </p>
        </form>
      </div>
    </div>
  )
}
