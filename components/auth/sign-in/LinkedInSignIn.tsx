import ExternalSignIn from "./SimpleThirdPartySignIn";
import icon from '@/public/icons/linkedin.svg'

export default function LinkedInSignIn() {
  return <ExternalSignIn className="bg-[#377FEB] text-black font-semibold" name="LinkedIn" icon={icon} />
}