import { Contact } from "./contact"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

interface ContactButtonProps {
  text: string
  className?: string
  variant?:
    | "secondary"
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "ghost"
    | null
    | undefined
}

export function ContactButton({
  text,
  variant,
  className,
}: ContactButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={`rounded-xl font-bold shadow-md ${className}`}
          variant={variant}
        >
          {text}
        </Button>
      </DialogTrigger>
      <DialogHeader>
        <DialogTitle />
      </DialogHeader>

      <DialogContent
        className="border-none bg-gradient-to-r outline-none"
        aria-describedby={undefined}
      >
        <Contact />
      </DialogContent>
    </Dialog>
  )
}
