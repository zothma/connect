import SimpleOAuthSignIn from "./SimpleOAuthSignIn";
import icon from '@/public/icons/google.svg'

export default function GoogleSignIn() {
  return <SimpleOAuthSignIn className="bg-red-500 hover:bg-red-400 text-black font-semibold" type="google" name="Google" icon={icon} />
}