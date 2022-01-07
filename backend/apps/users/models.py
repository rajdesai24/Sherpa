from typing import List
from fastapi_users.models import BaseUser, BaseUserCreate, BaseUserUpdate, BaseUserDB


class User(BaseUser):
    status:str
    languages:List[str]
    locals:List[str]

class UserCreate(BaseUserCreate):
    status:str
    languages:List[str]
    locals:List[str]

class UserUpdate(User, BaseUserUpdate):
    status:str
    languages:List[str]
    locals:List[str]

class UserDB(User, BaseUserDB):
    pass