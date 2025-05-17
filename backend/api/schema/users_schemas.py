from pydantic import BaseModel, EmailStr, Field
from typing import Optional


class UserCreateSchema(BaseModel):
    username: str = Field(..., min_length=3, max_length=50)
    email: EmailStr
    password : str = Field(...,min_length=5,max_length=30)


class UserLoginSchema(BaseModel):
    username: str = Field(..., min_length=3, max_length=50)
    password : str = Field(...,min_length=5,max_length=30)


class LoginWithGitSchema(BaseModel):
    username: str = Field(..., min_length=3, max_length=50)
    id : str = Field(...,)
    email : EmailStr
    image : Optional[str] = None

class JWTAccessToken(BaseModel):
    username: str
    email: EmailStr
    password: str
    id: int
    full_name: Optional[str] = None
    profile_picture: Optional[str] = None
