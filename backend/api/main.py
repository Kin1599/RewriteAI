from fastapi import FastAPI # type: ignore
from fastapi.middleware.cors import CORSMiddleware # type: ignore
from fastapi_models import *
from rewriting import mlGOVNO
from model import AI_or_Human

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Разрешаем запросы от всех источников (*), можно также указать конкретные источники ['http://localhost', 'http://localhost:3000']
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # Разрешаем использование указанных методов
    allow_headers=["*"],  # Разрешаем использование всех заголовков
)

@app.post("/process_text")
async def process_text(data: UploadTextData) -> Result:
    answers = AI_or_Human(data.text)
    out_text = mlGOVNO(data.text)
    answers2 = AI_or_Human(out_text.text)
    return Result(original_percent = answers[0][1], rewrite_percent = answers2[0][1], text = out_text)
