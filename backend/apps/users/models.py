from typing import List
from fastapi_users.models import BaseUser, BaseUserCreate, BaseUserUpdate, BaseUserDB


class User(BaseUser):
    languages:str

class UserCreate(BaseUserCreate):
    languages:str

class UserUpdate(User, BaseUserUpdate):
    languages:str

class UserDB(User, BaseUserDB):
    pass