from pydantic import BaseModel

class UploadTextData(BaseModel):
    text: str
    power: int