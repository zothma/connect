import { NextAuthOptions } from 'next-auth'

import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'
import prisma from './prisma'

function resizeGoogleImage(url: string): string {
  const noOptionsUrl = url.split('=')[0]
  const options = '=s400-c'
  return noOptionsUrl + options
}

export const authConfig: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      profile: (_profile) => {
        return {
          id: _profile.sub,
          name: _profile.name,
          first_name: _profile.given_name,
          last_name: _profile.family_name,
          email: _profile.email,
          image: resizeGoogleImage(_profile.picture),
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.first_name = user.first_name
        token.last_name = user.last_name
        token.user_id = user.id
      }
      return token
    },

    async session({ session, token }) {
      if (token && session.user) {
        session.user.first_name = token.first_name
        session.user.last_name = token.last_name
      }

      return session
    },
  },
}
