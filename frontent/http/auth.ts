import axios from "axios";
import baseURL from ".";
import { UserLoginWithGitSchema, UserResponseSchema } from "@/types/userTypes";

const authApi = axios.create({
    baseURL: `${baseURL}/auth`,
});

export async function loginUserWithGit(payload:UserLoginWithGitSchema):Promise<UserResponseSchema> {
    try {
        const response = await authApi.post("/login-with-github/", payload);
        return response.data;
    } catch (err: any) {
        const error = err?.response?.data?.detail || err.message || "Can't login user !"
        throw Error(error);
    }
}