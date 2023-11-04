import { MouseEventHandler } from "react"

type Props = {
  name: string,
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function ExternalSignIn({ name, onClick }: Props) {
  return <button onClick={onClick ?? (() => { alert("Pas encore implémenté.") })}> Se connecter avec {name}</button >
}