import React, { MouseEventHandler } from 'react'
import IconSvg from './IconSvg'
import ButtonContent from './ButtonContent'
import Link from 'next/link'

type Props = {
  children: React.ReactNode
  className?: string
  href: React.ComponentProps<typeof Link>['href']
  icon?: any
}

export default function ButtonLink({ children, className, icon, href }: Props) {
  return (
    <Link
      href={href}
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
    </Link>
  )
}
