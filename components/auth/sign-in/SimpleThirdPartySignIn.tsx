import Button from "@/components/common/Button"
import { MouseEventHandler } from "react"

type Props = {
  name: string,
  icon: any,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  className?: string
}

export default function SimpleThirdPartySignIn({ name, onClick, className, icon }: Props) {
  return <Button
    onClick={onClick ?? (() => { alert("Pas encore implémenté.") })}
    className={"grow shrink basis-0 " + (className ?? "")}
    icon={icon}
  >
    <span>
      <span className="lg:hidden">Se connecter avec </span>
      {name}
    </span>
  </Button>
}