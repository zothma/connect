"use client"

import { usePathname } from "next/navigation"
import MenuItem from "./MenuItem"

import HomeFill from "@icons/home-fill.svg"
import HomeLine from "@icons/home-line.svg"
import CompassFill from "@icons/compass-fill.svg"
import CompassLine from "@icons/compass-line.svg"
import SearchFill from "@icons/search-fill.svg"
import SearchLine from "@icons/search-line.svg"
import ChatFill from "@icons/chat-fill.svg"
import ChatLine from "@icons/chat-line.svg"

type MenuItemPropsList = React.ComponentPropsWithoutRef<typeof MenuItem>[]

export default function MenuItemList() {
  const menus: MenuItemPropsList = [
    { href: "/", iconFill: HomeFill, iconLine: HomeLine, name: "Accueil" },
    { href: "/discover", iconFill: CompassFill, iconLine: CompassLine, name: "Découvrir" },
    { href: "/search", iconFill: SearchFill, iconLine: SearchLine, name: "Rechercher" },
    { href: "/chat", iconFill: ChatFill, iconLine: ChatLine, name: "Discuter" },
  ]

  const pathname = usePathname()
  return menus.map((props) => <MenuItem selected={pathname == props.href} key={props.href.toString()} {...props} />)
}