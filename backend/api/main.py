from fastapi import FastAPI # type: ignore
from fastapi.middleware.cors import CORSMiddleware # type: ignore
from fastapi_models import *

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Разрешаем запросы от всех источников (*), можно также указать конкретные источники ['http://localhost', 'http://localhost:3000']
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # Разрешаем использование указанных методов
    allow_headers=["*"],  # Разрешаем использование всех заголовков
)

@app.post("/upload_text")
def upload_text(data: UploadTextData):
    json_data = {
        "text": data.text,
        "power": data.power
    }
    return json_data