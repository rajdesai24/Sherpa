from fastapi import Depends, FastAPI,Request

from .models import UserDB,User
from .manager import auth_backend, fastapi_users

app = FastAPI()
print('here')
current_user = fastapi_users.current_user(get_enabled_backends=[auth_backend])
from ..table.translation import router

# @app.post("/user/islocal/")
# async def islocal(user_id:int,request: Request):
#     if (user := await request.app.mongodb["users"].find_one({"_id": id})) is not None:
#         return task


async def get_enabled_backends(request: Request):
    """Return the enabled dependencies following custom logic."""
    if request.url.path == "/protected-route-only-jwt":
        return [auth_backend]
    else:
        return [auth_backend]

current_active_user = fastapi_users.current_user(active=True,get_enabled_backends=get_enabled_backends)

@app.get("/protected-route")
def protected_route(user: User = Depends(current_active_user)):
    return f"Hello, {user.email}. You are authenticated with a cookie or a JWT."
app.include_router(router,tags=['translate'])
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


@app.get("/authenticated-route")
async def authenticated_route(user: UserDB = Depends(current_active_user)):
    return {"message": f"Hello {user.email}!"}
