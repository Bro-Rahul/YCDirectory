from sqlalchemy.orm import Session
from db.models.Startup import StartUp
from db.query.category_query import CategoryQuery
from db.query.users_query import UserQuery
from fastapi import HTTPException, UploadFile
from config.config import settings
import shutil
from slugify import slugify


class StartUpQuery:
    
    @staticmethod
    def get_all_startups(db:Session):
        return db.query(StartUp).all()
    
    @staticmethod 
    def create_startup(
            image:UploadFile,
            title:str,
            description:str, 
            category:str, 
            pitch:str,
            user:int,
            db:Session
        ):

        if image.content_type not in ["image/jpeg", "image/png", "image/gif"]:
            raise HTTPException(status_code=400, detail="Invalid image format. Only JPEG, PNG, and GIF are allowed.")
        
        file_name,extension = image.filename.split(".")
        image_path = f"{slugify(title)}.{extension}"
        with open(f"{settings.media_root}/startups/{image_path}", "wb") as buffer:
            shutil.copyfileobj(image.file, buffer)

        category_obj = CategoryQuery.get_or_create(name=category,db=db)
        user_obj = UserQuery.get_user(pk=user,db=db)
        new_startup = StartUp(
            title=title,
            description=description,
            author=user_obj,
            image=f"/startups/{image_path}",
            category = category_obj,
            pitch = pitch
        )
        db.add(new_startup)
        db.commit()
        db.refresh(new_startup)
        
        return new_startup