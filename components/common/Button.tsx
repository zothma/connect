import { MouseEventHandler } from 'react'
import IconSvg from './IconSvg'
import ButtonContent from './ButtonContent'

type Props = {
  children: React.ReactNode
  className?: string
  icon?: any
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button({ children, className, icon, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={className}>
      <ButtonContent>
        {icon ? (
          <IconSvg
            icon={icon}
            height={18}
          />
        ) : (
          <></>
        )}
        {children}
      </ButtonContent>
    </button>
  )
}
