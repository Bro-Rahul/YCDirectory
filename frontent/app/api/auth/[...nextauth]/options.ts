import { loginUserWithGit } from "@/http/auth";
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const options: NextAuthOptions = {
    callbacks : {
        jwt : async ({account,token,user,profile})=>{
            if(account?.provider === "github" && profile){
                console.log(user)
                const {access,user:userData} = await loginUserWithGit({
                    email : user.email!,
                    username : user.name!,
                    id : user.id!,
                    image : user.image!
                })
                token.user = {
                    ...userData,
                    access : access,
                }
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.user;
            return session;
        },
    },
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!, 
        }),
    ],
}

export default options;