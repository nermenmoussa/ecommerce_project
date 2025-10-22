
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHubProvider  from "next-auth/providers/github";



export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/auth/login'
    },

    providers: [
        Credentials({
            name: 'credentials',
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials) => {
                const res = await fetch(`${process.env.API}/auth/signin`, {
                    method: 'post',
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password
                    }),
                    headers: {
                        'content-type': 'application/json'
                    }
                }
                )
                const payload = await res.json()

                if (payload.message === 'success') {
                    const decode = JSON.parse(Buffer.from(payload.token.split('.')[1], 'base64').toString())
                    return {
                        user: payload.user,
                        token: payload.token,
                        id: decode.id
                    }
                }
                else {
                    throw new Error(payload.message || 'something went error from auth')
                }

            }

        }),
        GitHubProvider ({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        })
    ],
    callbacks: {
        async jwt({ token, user, account }) {
            if (user) {
                if (account?.provider === 'github') {
                    token.user = {
                        name: user.name || '',
                        email: user.email || '',
                        image: user.image || '',
                        role: 'user'

                    }
                }
                else {
                    token.user = user.user;
                    token.token = user.token;
                }
            }
            return token
        },
        async session({ session, token }) {

            session.user = token.user

            return session
        }

    }
}