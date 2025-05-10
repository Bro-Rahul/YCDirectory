from dotenv import load_dotenv
import os
from pathlib import Path

load_dotenv()

class Settings:
    def __init__(self):
        self.database_url = os.getenv("DATABASE_URL")
        self.jwt_secret = os.getenv("SECRET_KEY")
        self.jwt_algo = os.getenv("ALGORITHM")
        self.rootdir = Path(__file__).parent.parent.resolve()
        self.media_root = f"{self.rootdir}/media"

settings = Settings()