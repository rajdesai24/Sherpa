from fastapi import FastAPI
from fastapi_users import FastAPIUsers
from fastapi_users.db import MongoDBUserDatabase
import uvicorn
from motor.motor_asyncio import AsyncIOMotorClient
from config import settings
from apps.users.auth import jwt_authentication
from apps.users.models import User, UserCreate, UserUpdate, UserDB
from apps.users.routers import get_users_router
from models import client
app = FastAPI()


@app.on_event("startup")
async def configure_db_and_routes():
    # app.mongodb_client = AsyncIOMotorClient(
    #     settings.DB_URL, uuidRepresentation="standard"
    # )
    app.mongodb_client=client
    app.db = app.mongodb_client.get_default_database()

    user_db = MongoDBUserDatabase(UserDB, app.db["users"])
    fastapi_users = FastAPIUsers(
        get_user_manager,
        [auth_backend],
        User,
        UserCreate,
        UserUpdate,
        UserDB,
    )
    app.include_router(get_users_router(app))


app = FastAPI()
app.include_router(
    fastapi_users.get_auth_router(auth_backend),
    prefix="/auth/jwt",
    tags=["auth"],
)



@app.on_event("shutdown")
async def shutdown_db_client():
    app.mongodb_client.close()


if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host=settings.HOST,
        reload=settings.DEBUG_MODE,
        port=settings.PORT,
    )