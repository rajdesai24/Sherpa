from typing import Text
from fastapi import APIRouter,Depends,Request
from ..users.routers import app
from ..users.models import User
from ..users.manager import auth_backend
from translate import Translator
from ..users.manager import fastapi_users 
router = APIRouter()
async def get_enabled_backends(request: Request):
    """Return the enabled dependencies following custom logic."""
    if request.url.path == "/protected-route-only-jwt":
        return [auth_backend]
    else:
        return [auth_backend]


current_active_user = fastapi_users.current_user(active=True,get_enabled_backends=get_enabled_backends)

@router.get("/translate/", tags=["translate"])
async def translate(message:str,to_lang:str,):
    translator=Translator(provide='MyMemory',to_lang = to_lang)
    translation= translator.translate(text=message)
    return {"translation": translation}
