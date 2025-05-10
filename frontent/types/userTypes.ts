export type UserSchema = {
    username: string,
    id: number,
    email: string,
    created_at: string,
    profile_picture: string,
    full_name: string
    access: string
}


export type UserResponseSchema = {
    user:UserSchema,   
    access: string
}

export type UserLoginWithGitSchema = {
    username: string,
    id: string,
    email : string
}