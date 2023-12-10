import ExternalSignIn from "./SimpleThirdPartySignIn";
import icon from '@icons/linkedin.svg'

export default function LinkedInSignIn() {
  return <ExternalSignIn className="bg-sky-400 hover:bg-sky-300 text-black font-semibold" name="LinkedIn" icon={icon} />
}