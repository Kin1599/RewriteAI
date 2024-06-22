from fastapi import FastAPI # type: ignore
from fastapi.middleware.cors import CORSMiddleware # type: ignore
from fastapi_models import *
from dir.rewriting import mlGOVNO
from dir.model import AI_or_Human

app = FastAPI()

class Text(BaseModel):
    text: str

class Result(BaseModel):
    human: float
    ai: float
    text: str

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Разрешаем запросы от всех источников (*), можно также указать конкретные источники ['http://localhost', 'http://localhost:3000']
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # Разрешаем использование указанных методов
    allow_headers=["*"],  # Разрешаем использование всех заголовков
)


@app.post("/process_text")
async def process_text(text: Text) -> Result:
    answers = AI_or_Human(text.text)
    out_text = mlGOVNO(text.text)
    return Result(human = answers[0][0], ai = answers[0][1], text = out_text)
