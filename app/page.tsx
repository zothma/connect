import Identity from "@/components/auth/Identity";
import SignOut from "@/components/auth/SignOut";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-[100dvh]">
      <h1 className="text-4xl font-semibold">Accueil</h1>
      <p className="text-2xl">Le site est en cours de développement.</p>
      <div><Identity /> - <SignOut /></div>
    </div>
  )
}