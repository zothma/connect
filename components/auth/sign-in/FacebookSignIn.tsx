import ExternalSignIn from "./SimpleThirdPartySignIn";
import facebook from '@/public/icons/facebook.svg'

export default function FacebookSignIn() {
  return <ExternalSignIn className="bg-[#377FEB] text-black font-semibold" name="Facebook" icon={facebook} />
}