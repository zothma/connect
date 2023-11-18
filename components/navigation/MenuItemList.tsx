"use client"

import { usePathname } from "next/navigation"
import MenuItem from "./MenuItem"

type Props = {
  menus: React.ComponentPropsWithoutRef<typeof MenuItem>[]
}

export default function MenuItemList({ menus }: Props) {
  const pathname = usePathname()
  return menus.map((props) => <MenuItem selected={pathname == props.href} {...props} />)
}