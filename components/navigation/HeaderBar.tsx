import Icon from "../common/Icon"
import SessionUserMenuItem from "../user/SessionUserMenuItem"

export default function HeaderBar() {
  const icons = ["home", "compass", "search", "chat"]
  return (
    <div className="h-14 w-full px-5 fixed z-50 bottom-0 bg-white flex justify-between items-center">
      {icons.map(i => <Icon name={i} type="line" width={30} height={30} key={i} />)}
      <SessionUserMenuItem />
    </div>
  )
}