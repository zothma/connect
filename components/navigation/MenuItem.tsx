import Link from "next/link";
import React from "react";
import Icon from "../common/Icon";

type LocalProps = {
  icon: React.ComponentPropsWithoutRef<typeof Icon>["name"],
  name: string
  selected?: boolean,
}
type Props = LocalProps & React.ComponentPropsWithoutRef<typeof Link>

export default function MenuItem({ icon, name, selected = false, ...linkProps }: Props) {
  return (
    <div>
      <Link className="flex items-center gap-3 text-lg" {...linkProps}>
        <Icon name={icon} type={selected ? "fill" : "line"} width={30} height={30} />
        <span className={"hidden lg:inline " + (selected && "font-bold")}>{name}</span>
      </Link>
    </div>
  )
}