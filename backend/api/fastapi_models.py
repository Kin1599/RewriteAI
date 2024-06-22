from pydantic import BaseModel # type: ignore

class UploadTextData(BaseModel):
    text: str
    power: int

class Result(BaseModel):
    human: float
    ai: float
    text: str