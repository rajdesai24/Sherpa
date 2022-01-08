from pydantic import BaseModel
from typing import Dict, List, Optional
class Club(BaseModel):
    name:str
    chat: List[id]
    founder:str
    memebers:List[id]
    language_percentage:List[Dict]
class chat(BaseModel):
    name:str
    host:str
    viewers:List[id]


    
