from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from schema.users_schemas import UserCreateSchema
from db.connections import get_db
from utils.index import get_current_user
from db.query.users_query import UserQuery


routes = APIRouter()


@routes.get('/')
def get_users(db:Session = Depends(get_db)):
    return UserQuery.get_users(db=db)


@routes.post('/')
def get_user(user_id:int=Depends(get_current_user),db:Session = Depends(get_db)):
    return {'info':f"user id is {user_id}"}