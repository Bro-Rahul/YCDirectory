from sqlalchemy.orm import Session
from db.models.Users import User
from schema.users_schemas import UserCreateSchema,JWTAccessToken,LoginWithGitSchema
from utils.index import get_password_hash,verify_password,create_access_token

class UserQuery:

    @staticmethod
    def get_users(db:Session):
        return db.query(User).all()

    @staticmethod
    def get_user(pk:int,db:Session):
        return db.query(User).get(pk)
    
    
    @staticmethod
    def login_with_git(payload:LoginWithGitSchema,db:Session):
        user = db.query(User).filter(User.username == payload.username,User.email == payload.email).first()
        if user and verify_password(payload.id,user.password):
            data = JWTAccessToken.model_validate(user,from_attributes=True)
            jwt_token = create_access_token(data=data.model_dump())
            return (jwt_token,user)
        else:
            user = User(
                username=payload.username,
                email=payload.email,
                password=get_password_hash(password=payload.id),
                profile_picture = payload.image
            )
            db.add(user)
            db.commit()
            db.refresh(user)
            data = JWTAccessToken.model_validate(user,from_attributes=True)
            jwt_token = create_access_token(data=data.model_dump())
            return (jwt_token,user)


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
            return (jwt_token,user)
        return (None,None)