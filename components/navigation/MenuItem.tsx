import Link from "next/link";
import React from "react";
import IconSvg from "../common/IconSvg";

type LocalProps = {
  iconFill: React.ComponentPropsWithoutRef<typeof IconSvg>["icon"],
  iconLine: React.ComponentPropsWithoutRef<typeof IconSvg>["icon"],
  name: string
  selected?: boolean,
}
type Props = LocalProps & React.ComponentPropsWithoutRef<typeof Link>

export default function MenuItem({ iconFill, iconLine, name, selected = false, ...linkProps }: Props) {
  return (
    <div>
      <Link className="flex items-center gap-3 text-lg" {...linkProps}>
        <IconSvg icon={selected ? iconFill : iconLine} width={30} height={30} />
        <span className={"hidden lg:inline " + (selected && "font-bold")}>{name}</span>
      </Link>
    </div>
  )
}