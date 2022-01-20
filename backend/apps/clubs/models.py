from pydantic import BaseModel
from typing import Dict, List, Optional

from ..users.models import User
class ChatRoom(BaseModel):
    title:Optional[str]
    host:Optional[User]
    participants: Optional[List[User]]

class Club(BaseModel):
    _id:id
    clubname:Optional[str]
    founder:Optional[str]
    members:Optional[List[User]]
    # language_percentage:List[Dict]
    chatroom: Optional[List[ChatRoom]]
    class Config:
        orm_mode = True