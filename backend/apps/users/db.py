import os

import motor.motor_asyncio
from fastapi_users.db import MongoDBUserDatabase

from .models import UserDB

DATABASE_URL = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
client = motor.motor_asyncio.AsyncIOMotorClient(
    DATABASE_URL, uuidRepresentation="standard"
)
db = client["sherpa"]
collection = db["users"]



async def get_user_db():
    yield MongoDBUserDatabase(UserDB, collection)
