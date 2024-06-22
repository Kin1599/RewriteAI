from pydantic import BaseModel

class UploadTextData(BaseModel):
    text: str
    power: int

class Result(BaseModel):
    human: float
    ai: float