text = "fsdddgadnfgdsafhdgfhfgdfdsgasdghsfgsdfsaczx"

from fastapi import FastAPI
from pydantic import BaseModel
import model

app = FastAPI()

class Text(BaseModel):
    text: str

class Result(BaseModel):
    human: float
    ai: float


@app.post("/process_text")
async def process_text(text: Text) -> Result:
    answers = model.AI_or_Human(text.text)
    #print(f"Human is {answers[0][0]}%\nAI is {answers[0][1]}%")
    return Result(human = answers[0][0], ai = answers[0][1])