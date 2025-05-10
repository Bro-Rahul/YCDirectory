from sqlalchemy import String,Column,Integer
from sqlalchemy.orm import relationship
from db.models import *

class Category(Base):

    __tablename__ = "category"

    id = Column(Integer,primary_key=True)
    name = Column(String,nullable=False)

    startups = relationship("StartUp", back_populates="category")