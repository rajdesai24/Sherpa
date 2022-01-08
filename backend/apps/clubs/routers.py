from fastapi import APIRouter
from fastapi_users import db
club_router=APIRouter()

@club_router.get("/all")
async def all_clubs():
   clubs=await db["club"].find().to_list(100)
   return clubs
@club_router.post("/enterclub/{club}")
async def club_member_add(club:str):
    if (club := await db["club"].find_one({"club_title": club})) is not None:
        members=club.members
        members.append(user.id)
        await db["club"].update_one({"club_title":club,"members":members})

