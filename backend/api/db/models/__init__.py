from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

from .Users import User
from .Category import Category
from .Startup import StartUp