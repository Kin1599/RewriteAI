FROM python:3.11.7-slim

RUN python3 -m pip install --upgrade pip
COPY requirements.txt requirements.txt

RUN pip install --cache-dir=/pip-cache -r requirements.txt

COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
