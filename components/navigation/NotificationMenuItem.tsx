import NotificationIcon from "@icons/notification-line.svg"
import ButtonImage from "../common/ButtonImage"

type Props = {
  className?: string
}

export default function NotificationMenuItem({ className }: Props) {
  return (
    <ButtonImage
      icon={NotificationIcon}
      iconHeight={26}
      iconWidth={26}
      aria-label="Notifications"
      className={className} />
  )
}