import Logo from "../Logo"
import Icon from "../common/Icon"
import SessionUserMenuItem from "../user/SessionUserMenuItem"
import MenuItemList from "./MenuItemList"

export default function HeaderBar() {
  const menus: React.ComponentPropsWithoutRef<typeof MenuItemList>["menus"] = [
    { href: "/", icon: "home", name: "Accueil" },
    { href: "#", icon: "compass", name: "Découvrir" },
    { href: "#", icon: "search", name: "Rechercher" },
    { href: "#", icon: "chat", name: "Discuter" },
  ]

  return (
    <div className="h-14 w-full fixed z-50 bottom-0 md:bottom-auto md:top-0">
      <div className="relative bg-white h-full w-[95%] max-w-7xl mx-auto">
        <div className="h-full flex justify-around items-center md:justify-center md:gap-12">
          <Logo className="hidden md:block md:absolute md:left-0 md:top-[50%] md:-translate-y-[50%]" type="small" />
          <MenuItemList menus={menus} />
          <SessionUserMenuItem className="h-8 w-8 md:h-10 md:w-10 md:absolute md:top-[50%] md:right-0 md:-translate-y-[50%]" />
        </div>
      </div>
    </div>
  )
}