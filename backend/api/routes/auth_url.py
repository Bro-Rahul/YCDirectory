from fastapi import APIRouter,Depends
from db.connections import get_db
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from db.query.users_query import UserQuery
from schema.users_schemas import UserCreateSchema,UserLoginSchema,JWTAccessToken


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
    jwt_token = UserQuery.authenticate_user(
        username=payload.username,
        password=payload.password,
        db=db
    )
    if jwt_token:
        return {
            'access-token' : jwt_token
        }
    return {
        'info' : 'login faile invalid credencial'
    }