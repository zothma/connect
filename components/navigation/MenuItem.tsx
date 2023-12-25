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
        <IconSvg icon={selected ? iconFill : iconLine} width={32} height={32} className="md:w-7" />
        <span className={"hidden xl:inline " + (selected && "font-bold")}>{name}</span>
      </Link>
    </div>
  )
}