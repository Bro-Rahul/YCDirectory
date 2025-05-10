from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from routes import users_url,auth_url,startup_url
from config.config import settings

app = FastAPI()

app.mount("/assets", StaticFiles(directory=f"{settings.media_root}"), name="assets")

app.include_router(
    users_url.routes,
    prefix='/users'
)

app.include_router(
    auth_url.routes,
    prefix='/auth'
)

app.include_router(
    startup_url.routes,
    prefix='/startups',
)