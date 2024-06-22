from fastapi import FastAPI
from pydantic import BaseModel
from dir.rewriting import mlGOVNO
from dir.model import AI_or_Human
app = FastAPI()

class Text(BaseModel):
    text: str

class Result(BaseModel):
    human: float
    ai: float
    text: str



@app.post("/process_text")
async def process_text(text: Text) -> Result:
    answers = AI_or_Human(text.text)
    out_text = mlGOVNO(text.text)
    #print(f"Human is {answers[0][0]}%\nAI is {answers[0][1]}%")
    return Result(human = answers[0][0], ai = answers[0][1], text = out_text)
