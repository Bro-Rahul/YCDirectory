from datetime import datetime, timedelta, timezone
from fastapi.security import OAuth2PasswordBearer
from passlib.context import CryptContext
from config.config import settings
from fastapi import Depends,HTTPException,status
import jwt

pwd_context = CryptContext(schemes=["bcrypt"])
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)


def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(days=7)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.jwt_secret, algorithm=settings.jwt_algo)
    return encoded_jwt

def verify_access_token(token: str):
    try:
        payload = jwt.decode(token, settings.jwt_secret, algorithms=[settings.jwt_algo])
        return payload
    except jwt.exceptions.ExpiredSignatureError:
        return None

def get_user_id_from_token(token: str):
    payload = verify_access_token(token)
    if payload:
        return payload.get('id')
    return None


def get_current_user(token: str = Depends(oauth2_scheme))->int:
    user_id = get_user_id_from_token(token)
    if user_id is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials or token has been expired ",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return user_id