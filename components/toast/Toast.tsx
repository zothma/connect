import InformationIcon from "@icons/information-line.svg"
import AlertIcon from "@icons/alert-line.svg"
import SuccessIcon from "@icons/success-line.svg"
import CloseIcon from "@icons/close.svg"

import { ToastData } from "@/types/components";
import React, { useState } from "react";
import IconSvg from "../common/IconSvg";
import ButtonImage from "../common/ButtonImage";
import ToastTimer from "./ToastTimer";

type ToastType = 'ERROR' | 'WARNING' | 'INFO' | 'SUCCESS'
type ColorName = string
type IconName = React.ComponentPropsWithoutRef<typeof IconSvg>["icon"]
type StyleFromType = {
  [key in ToastType]: { color: ColorName; icon: IconName; };
};

type Props = {
  message: ToastData["message"]
  onDismiss: () => void
  type?: ToastType,
  duration?: number
}

const STYLES: StyleFromType = {
  "ERROR": { icon: AlertIcon, color: "#FF7079" },
  "WARNING": { icon: AlertIcon, color: "#FF7079" },
  "INFO": { icon: InformationIcon, color: "#8AB4F0" },
  "SUCCESS": { icon: SuccessIcon, color: "#0AB21C" }
}

export default function Toast({ message, onDismiss, type = "ERROR", duration = 5 }: Props) {
  const { icon, color } = STYLES[type];
  const [runTimer, setRunTimer] = useState<boolean>(true);

  return (
    <div
      className="relative flex items-center bg-white drop-shadow-box overflow-hidden rounded-[10px] gap-[10px] p-3 pb-4"
      onMouseEnter={() => setRunTimer(false)}
      onMouseLeave={() => setRunTimer(true)}
    >
      <IconSvg
        icon={icon}
        height={20}
        width={20}
        className="grow-0 shrink-0"
        fill={color} />

      <div className="grow shrink text-sm">{message}</div>

      <ButtonImage
        icon={CloseIcon}
        aria-label="Fermer"
        onClick={() => onDismiss()}
        style={{ height: "20px", width: "20px" }} />

      <ToastTimer color={color} onComplete={() => { onDismiss() }} runAnimation={runTimer} />
    </div>
  )
}