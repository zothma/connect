import React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  icon: any
}

export default function IconSvg({ icon, ...props }: Props) {
  return React.createElement(icon, props)
}