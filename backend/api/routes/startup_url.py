from fastapi import APIRouter,Depends,UploadFile,Form,HTTPException,status
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from db.query.startups_query import StartUpQuery
from db.connections import get_db
from utils.index import get_current_user

routes = APIRouter()

@routes.get("")
def get_startups(db:Session = Depends(get_db)):
    return StartUpQuery.get_all_startups(db=db)

@routes.post("/create/")
def get_startups(
        image:UploadFile,
        title:str = Form(...),
        description:str = Form(...),
        category:str = Form(...),
        pitch:str = Form(...),
        db:Session = Depends(get_db),
        user_id:int = Depends(get_current_user)
    ):
    try:
        response = StartUpQuery.create_startup(
            image=image,
            title=title,
            description=description,
            category=category,
            pitch=pitch,
            user=user_id,
            db=db
        )
    except IntegrityError as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Startup with this title already exists."
        )
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e)
        )
    return response