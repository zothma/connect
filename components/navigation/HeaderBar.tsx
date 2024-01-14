import Logo from '../Logo'
import ButtonLink from '../common/ButtonLink'
import Container from '../common/Container'
import UserMenuItem from '../user/UserMenuItem'
import HeaderBarBackground from './HeaderBarBackground'
import MenuItemList from './MenuItemList'
import NotificationMenuItem from './NotificationMenuItem'

export default function HeaderBar() {
  return (
    // Position block
    <div className="fixed z-50 bottom-3 left-3 right-3 md:bottom-auto md:top-0 md:left-0 md:right-0">
      {/* Styling block */}
      <HeaderBarBackground>
        {/* Flex block */}
        <Container className="flex justify-between items-center py-3 md:justify-normal md:gap-8">
          <Logo
            className="hidden md:block"
            type="small"
          />
          <MenuItemList />

          {/* Separator */}
          <div className="hidden md:block md:flex-grow -mx-8"></div>

          <NotificationMenuItem className="hidden md:block" />
          <ButtonLink
            className="hidden md:block"
            href="/advert/create">
            Créer une annonce
          </ButtonLink>
          <UserMenuItem className="h-8 w-8 rounded-lg overflow-hidden md:h-10 md:w-10 md:rounded-[10px]" />
        </Container>
      </HeaderBarBackground>
    </div>
  )
}
