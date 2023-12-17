import Logo from "../Logo"
import Button from "../common/Button"
import SessionUserMenuItem from "../user/SessionUserMenuItem"
import MenuItemList from "./MenuItemList"
import NotificationMenuItem from "./NotificationMenuItem"

export default function HeaderBar() {
  return (
    // Position block
    <div className="fixed z-50 bottom-3 left-3 right-3 md:bottom-auto md:top-0 md:left-0 md:right-0">
      {/* Styling block */}
      <div className="bg-white drop-shadow-box border-2 border-[#F0F0F0] rounded-xl md:rounded-none">
        {/* Flex block */}
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-7 py-3 md:justify-normal md:gap-8">
          <Logo className="hidden md:block" type="small" />
          <MenuItemList />

          {/* Separator */}
          <div className="hidden md:block md:flex-grow"></div>

          <NotificationMenuItem className="hidden md:block" />
          <Button className="hidden md:block">Créer une annonce</Button>
          <SessionUserMenuItem className="h-8 w-8 rounded-lg overflow-hidden md:h-10 md:w-10 md:rounded-[10px]" />
        </div>
      </div>
    </div>
  )
}