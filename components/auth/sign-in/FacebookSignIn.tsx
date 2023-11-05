import ExternalSignIn from "./SimpleThirdPartySignIn";
import facebook from '@/public/icons/facebook.svg'

export default function FacebookSignIn() {
  return <ExternalSignIn className="bg-blue-500 hover:bg-blue-400 text-black font-semibold" name="Facebook" icon={facebook} />
}