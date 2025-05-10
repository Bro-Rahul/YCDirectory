from . import Base
from sqlalchemy import Column, String, DateTime, Integer
from sqlalchemy.orm import relationship
import datetime
from db.models import *


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True,)
    email = Column(String, unique=True,)
    password = Column(String)
    full_name = Column(String, nullable=True)
    profile_picture = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    startups = relationship("StartUp", back_populates="author")
