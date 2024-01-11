import { MouseEventHandler } from 'react'
import IconSvg from './IconSvg'
import ButtonContent from './ButtonContent'

type Props = {
  children: React.ReactNode
  className?: string
  icon?: any
  iconPosition?: 'left' | 'right'
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button({
  children,
  className,
  icon,
  onClick,
  iconPosition = 'left',
}: Props) {
  return (
    <button
      onClick={onClick}
      className={className}>
      <ButtonContent>
        {iconPosition == 'left' && icon && (
          <IconSvg
            icon={icon}
            height={18}
          />
        )}
        {children}
        {iconPosition == 'right' && icon && (
          <IconSvg
            icon={icon}
            height={18}
          />
        )}
      </ButtonContent>
    </button>
  )
}
