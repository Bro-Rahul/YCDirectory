import NextAuth from "next-auth";
import { UserSchema } from "./userTypes";

declare module "next-auth" {
  interface Session {
    user: UserSchema;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: UserSchema;
  }
}