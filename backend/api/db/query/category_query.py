from db.models import Category
from sqlalchemy.orm import Session

class CategoryQuery:

    @staticmethod
    def get_or_create(name:str,db:Session):
        category = db.query(Category).filter(Category.name == name).first()
        if category:
            return category
        new_category = Category(name=name)
        db.add(new_category)
        db.commit()
        db.refresh(new_category)
        return new_category
    
