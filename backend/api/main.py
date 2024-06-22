from fastapi import FastAPI # type: ignore
from fastapi.middleware.cors import CORSMiddleware # type: ignore
from fastapi_models import *
import model

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Разрешаем запросы от всех источников (*), можно также указать конкретные источники ['http://localhost', 'http://localhost:3000']
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # Разрешаем использование указанных методов
    allow_headers=["*"],  # Разрешаем использование всех заголовков
)

@app.post("/upload_text")
async def upload_text(data: UploadTextData):
    answers = model.AI_or_Human(data.text)
    #print(f"Human is {answers[0][0]}%\nAI is {answers[0][1]}%")
    return Result(human = answers[0][0], ai = answers[0][1])