from pydantic import BaseModel # type: ignore

class UploadTextData(BaseModel):
    text: str
    power: int

class Result(BaseModel):
    original_percent: float
    rewrite_percent: float
    text: str
