from sqlalchemy import event, Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship
from slugify import slugify
from db.models import Base
from db.models import *


class StartUp(Base):
    __tablename__ = "startup"

    title = Column(String, primary_key=True)
    slug = Column(String, nullable=True)
    author_id = Column(Integer, ForeignKey("users.id", ondelete="cascade"))
    views = Column(Integer, default=0)
    description = Column(String)
    category_id = Column(Integer, ForeignKey("category.id", ondelete="cascade"))
    image = Column(String)
    pitch = Column(String)

    author = relationship("User", back_populates="startups",foreign_keys=[author_id])
    category = relationship("Category", back_populates="startups",foreign_keys=[category_id])

@event.listens_for(StartUp, "before_insert")
def generate_slug(mapper, connection, target):
    if not target.slug:
        target.slug = slugify(target.title)
