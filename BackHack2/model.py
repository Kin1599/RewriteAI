#!/usr/bin/env python
# coding: utf-8

# In[7]:


import numpy as np
from transformers import DistilBertForSequenceClassification, DistilBertTokenizer, pipeline
import torch


# In[15]:


def AI_or_Human(text):
    inputs = tokenizer(text, padding=True, truncation=True, return_tensors='pt')
    inputs = {key: val.to(device) for key, val in inputs.items()}
    with torch.no_grad():
        outputs = model(**inputs)
    logits = outputs.logits
    answers = torch.nn.functional.softmax(logits, dim=-1)
    
    return answers.cpu().numpy()


# In[9]:


model = DistilBertForSequenceClassification.from_pretrained('tommyliphys/ai-detector-distilbert', from_tf=True)
tokenizer = DistilBertTokenizer.from_pretrained('tommyliphys/ai-detector-distilbert')

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

model.to(device)


# In[10]:


text = 'I want to tell your a story about team, which overcame all exceptions just doing their own job, due this recieve what they want and now continuing way straight to NBA winners award. All people can accept that very good defense, but the minority - a fact about eliminate Denver in 7th game. Lets be honest - Jamal Marray right now kick himself from these two games which he failed with a very bad shoot release. After loses contender also not waste their time and take a wonderful analysis - it gave the result. So, introducing Minnesota Timberwolves - my favorites on this season.'


# In[18]:


answers = AI_or_Human(text)



# In[ ]:




