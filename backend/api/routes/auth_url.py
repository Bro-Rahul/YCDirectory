from fastapi import APIRouter,Depends,HTTPException,status
from db.connections import get_db
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from db.query.users_query import UserQuery
from db.models import User
from schema.users_schemas import UserCreateSchema,UserLoginSchema,LoginWithGitSchema


routes = APIRouter()


@routes.post("/register")
def create_user(payload:UserCreateSchema,db:Session = Depends(get_db)):
    try:
        user = UserQuery.create_user(user=payload,db=db)
    except IntegrityError as e:
        db.rollback()
        return {
            'info':'User with this credencial already exists'
        }
    return user

@routes.post("/login")
def login_user(payload:UserLoginSchema,db:Session=Depends(get_db)):
    jwt_token,user = UserQuery.authenticate_user(
        username=payload.username,
        password=payload.password,
        db=db
    )
    if jwt_token:
        return {
            'user':{
                'username' : user.username,
                'id' : user.id,
                'email' : user.email,
                'created_at' : user.created_at,
                'profile_picture' : user.profile_picture,
                'full_name' : user.full_name
            },
            'access' : jwt_token
        }
    else:
        raise HTTPException(
            detail='Login creadencial are not valid ',
            status_code=status.HTTP_400_BAD_REQUEST
        )

@routes.post("/login-with-github/")
def login_user_with_github(payload:LoginWithGitSchema,db:Session=Depends(get_db)):

    jwt_token,user = UserQuery.login_with_git(payload=payload,db=db)
    if jwt_token:
        return {
            'user':{
                'username' : user.username,
                'id' : user.id,
                'email' : user.email,
                'created_at' : user.created_at,
                'profile_picture' : user.profile_picture,
                'full_name' : user.full_name
            },
            'access' : jwt_token
        }
    else:
        raise HTTPException(
            detail='Login creadencial are not valid ',
            status_code=status.HTTP_400_BAD_REQUEST
        ) 