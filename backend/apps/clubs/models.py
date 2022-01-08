from pydantic import BaseModel
from typing import Dict, List, Optional

from backend.apps.users.models import User
class ChatRoom(BaseModel):
    title:str
    host:User
    participants: List[User]

class Club(BaseModel):
    club_name:str
    founder:User
    memebers:List[User]
    # language_percentage:List[Dict]
    chatroom: List[ChatRoom]


    
