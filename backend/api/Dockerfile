FROM python:3.11.7

RUN python -m pip install --upgrade pip

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt --timeout 100

COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
