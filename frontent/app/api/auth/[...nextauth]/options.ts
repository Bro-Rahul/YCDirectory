import { loginUserWithGit } from "@/http/auth";
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const options: NextAuthOptions = {
    callbacks : {
        jwt : async ({account,token,user,profile})=>{
            if(account?.provider === "github" && profile){
                const response = await loginUserWithGit({
                    email : profile.email!,
                    username : profile.name!,
                    id : account.userId!
                })
                
            }
            return token;
        }
    },
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
    ],
}

export default options;