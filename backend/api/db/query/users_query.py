from sqlalchemy.orm import Session
from db.models.Users import User
from schema.users_schemas import UserCreateSchema,JWTAccessToken
from utils.index import get_password_hash,verify_password,create_access_token

class UserQuery:

    @staticmethod
    def get_users(db:Session):
        return db.query(User).all()

    @staticmethod
    def get_user(pk:int,db:Session):
        return db.query(User).get(pk)
    
    @staticmethod
    def create_user(user:UserCreateSchema,db:Session):
        user = User(
            username=user.username,
            email=user.email,
            password=get_password_hash(user.password)
        )
        db.add(user)
        db.commit()
        db.refresh(user)
        return user


    
    @staticmethod
    def authenticate_user(username:str,password,db:Session):
        user = db.query(User).filter(User.username == username).first()
        if user and verify_password(password,user.password):
            data = JWTAccessToken.model_validate(user,from_attributes=True)
            jwt_token = create_access_token(data=data.model_dump())
            return jwt_token
        return None