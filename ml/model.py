import numpy as np
from transformers import DistilBertForSequenceClassification, DistilBertTokenizer
import torch

def AI_or_Human(text):
    inputs = tokenizer(text, padding=True, truncation=True, return_tensors='pt')
    inputs = {key: val.to(device) for key, val in inputs.items()}
    with torch.no_grad():
        outputs = model(**inputs)
    logits = outputs.logits
    answers = torch.nn.functional.softmax(logits, dim=-1)
    
    return answers.cpu().numpy()

model = DistilBertForSequenceClassification.from_pretrained('tommyliphys/ai-detector-distilbert', from_tf=True)
tokenizer = DistilBertTokenizer.from_pretrained('tommyliphys/ai-detector-distilbert')

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

model.to(device)