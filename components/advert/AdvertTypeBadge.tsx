import { ProfessionalBridge } from "@prisma/client";
import Link from "next/link";

type Props = {
  type: ProfessionalBridge
}

export default function AdvertTypeBadge({ type }: Props) {
  return (
    <Link href="#passerelle" className="block active:scale-95 transition-transform">
      <span className="block bg-white rounded-full px-5 py-2 font-bold">
        {type.name}
      </span>
    </Link>
  )
}