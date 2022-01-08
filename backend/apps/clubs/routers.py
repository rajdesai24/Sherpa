from fastapi import APIRouter
from fastapi_users import db
from ..users.models import User
club_router=APIRouter(prefix="/club")
import motor.motor_asyncio
client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false')
db = client['sherpa']

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

@club_router.post("/create")
async def create_club(founder:User,clubname:str):
    club=await db["club"].insert_one({"clubname":clubname,"founder":founder})