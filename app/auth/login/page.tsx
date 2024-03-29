'use client'

import Logo from '@/components/Logo'
import FacebookSignIn from '@/components/auth/sign-in/FacebookSignIn'
import GoogleSignIn from '@/components/auth/sign-in/GoogleSignIn'
import LinkedInSignIn from '@/components/auth/sign-in/LinkedInSignIn'
import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function SignInPage() {
  const { data: session } = useSession()

  if (session) redirect('/')

  return (
    <>
      <div className="relative w-full h-[100dvh] bg-background-login bg-cover bg-center">
        {/* Léger fond noir */}
        <div className="absolute h-full w-full bg-black opacity-20"></div>

        <div className="relative w-full h-[100dvh] flex flex-col sm:justify-center sm:items-center lg:flex-row">
          <div className="grow shrink flex items-center justify-center sm:absolute sm:z-0 sm:items-start sm:justify-start sm:w-full sm:h-full lg:static lg:w-[50%]">
            <Logo className="sm:m-7" />
          </div>

          <div className="flex items-center justify-center px-10 py-12 bg-white rounded-t-[34px] sm:relative sm:z-10 sm:px-14 sm:w-[640px] sm:rounded-b-[34px] lg:w-[50%] lg:rounded-none lg:h-full">
            <div className="flex flex-col gap-5 w-full max-w-xl sm:gap-6">
              <h1 className="text-2xl font-semibold sm:text-4xl sm:mb-3">
                Connexion
              </h1>

              {/* Connexion par email */}
              <Input
                id="email"
                label="Email"
              />
              <Input
                id="pwd"
                label="Mot de passe"
                type="password"
              />
              <Button className="w-full font-semibold bg-black text-white">
                Se connecter
              </Button>

              {/* Séparateur */}
              <div className="flex justify-center relative">
                <hr className="absolute top-[50%] h-[1px] w-full border-none bg-black" />
                <span className="relative bg-white px-3">ou</span>
              </div>

              {/* Connexion via un tiers */}
              <div className="flex flex-col gap-5 sm:gap-6 lg:gap-4 lg:flex-row">
                <GoogleSignIn />
                <LinkedInSignIn />
                <FacebookSignIn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
