import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface User {
    first_name?: string
    last_name?: string
  }

  interface Session extends DefaultSession {
    user?: User
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends Record<string, unknown>, DefaultJWT {
    first_name?: string
    last_name?: string
  }
}

export type SupportedOAuthProvider = 'google'
