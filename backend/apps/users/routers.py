from fastapi import Depends, FastAPI,Request

from .models import UserDB,User
from .manager import auth_backend, fastapi_users
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
print('here')
# current_user = fastapi_users.current_user(get_enabled_backends=[auth_backend])
from ..clubs.translation import router
from pymongo import MongoClient
mongodb_uri = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
port = 8000
client = MongoClient(mongodb_uri, port)
db = client["User"]



from fastapi import Request
from fastapi_users.authentication import AuthenticationBackend, BearerTransport, CookieTransport, JWTStrategy

SECRET = "SECRET"

bearer_transport = BearerTransport(tokenUrl="auth/jwt/login")
cookie_transport = CookieTransport(cookie_max_age=3600)

def get_jwt_strategy() -> JWTStrategy:
    return JWTStrategy(secret=SECRET, lifetime_seconds=3600)

jwt_backend = AuthenticationBackend(
    name="jwt",
    transport=bearer_transport,
    get_strategy=get_jwt_strategy,
)
cookie_backend = AuthenticationBackend(
    name="jwt",
    transport=cookie_transport,
    get_strategy=get_jwt_strategy,
)

async def get_enabled_backends(request: Request):
    """Return the enabled dependencies following custom logic."""
    if request.url.path == "/protected-route-only-jwt":
        return [jwt_backend]
    else:
        return [cookie_backend, jwt_backend]

print('pehla')
current_active_user = fastapi_users.current_user(active=True,get_enabled_backends=get_enabled_backends)
print('dusra aaya')

@app.get("/protected-route")
def protected_route(user: User = Depends(current_active_user)):
    return f"Hello, {user.email}. You are authenticated with a cookie or a JWT."

print('aaaya')

# @app.post("/user/islocal/")
# async def islocal(user_id:int,request: Request,user:Depends(),choice:bool):
#     if (user := await request.app.mongodb["users"].find_one({"email": user.email})) is not None:
        
#         if choice==1:
#             status="local"
#         else:
#             status="traveller"
#         await request.app.mongodb["users"].update_one({"email":user.email,"status":status})
#         return True


# async def get_enabled_backends(request: Request):
#     """Return the enabled dependencies following custom logic."""
#     if request.url.path == "/protected-route-only-jwt":
#         return [auth_backend]
#     else:
#         return [auth_backend]
from ..clubs.routers import club_router
app.include_router(router,tags=['translate'])
app.include_router(club_router,tags=['club'])
app.include_router(
    fastapi_users.get_auth_router(auth_backend), prefix="/auth/jwt", tags=["auth"]
)
app.include_router(fastapi_users.get_register_router(), prefix="/auth", tags=["auth"])
app.include_router(
    fastapi_users.get_reset_password_router(),
    prefix="/auth",
    tags=["auth"],
)
app.include_router(
    fastapi_users.get_verify_router(),
    prefix="/auth",
    tags=["auth"],
)
app.include_router(fastapi_users.get_users_router(), prefix="/users", tags=["users"])


# @app.get("/authenticated-route")
# async def authenticated_route(user: UserDB = Depends(current_active_user)):
#     return {"message": f"Hello {user.email}!"}








