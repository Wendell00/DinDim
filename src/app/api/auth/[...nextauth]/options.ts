import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET
        // }),
        // FacebookProvider({
        //     clientId: process.env.FACEBOOK_CLIENT_ID,
        //     clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        // }),

        CredentialsProvider({
            credentials: {
                email: { label: "email", type: "text", placeholder: "jsmith" },
                password: {label: "password", type: "password"}
            },

            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const user = { id: "1", name: 'J Smith', email: "jsmith@example.com", password: '123' }
                
                if (user &&
                    user?.email === credentials?.email &&
                    user?.password === credentials?.password) {
                  // Any object returned will be saved in `user` property of the JWT
                  return user
                }
                return null
            },
        })    
    ]
}