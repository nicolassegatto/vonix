import { ServiceInterface } from "@/data/platformServices"

export function CardPlatform({ service }: { service: ServiceInterface }) {
  return (
    <div className="flex items-center gap-4 rounded-3xl border bg-muted p-6 shadow-sm hover:shadow-lg">
      <div className="flex w-[35%] items-center justify-center opacity-65">
        {<service.image size={36} />}
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <h1 className="text-md font-bold opacity-85">{service.name}</h1>
          <p className="text-sm text-muted-foreground">{service.description}</p>
        </div>
      </div>
    </div>
  )
}
