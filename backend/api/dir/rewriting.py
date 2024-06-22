import requests
import uuid
import base64
from langchain.chat_models.gigachat import GigaChat

def get_access_token(client_id, client_secret):
    authorization_data = base64.b64encode(f"{client_id}:{client_secret}".encode())
    rquid = str(uuid.uuid4())

    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'RqUID': rquid,
        'Authorization': f'Basic {authorization_data}'
    }
    data = {'scope': 'GIGACHAT_API_PERS'}

    response = requests.post('https://ngw.devices.sberbank.ru:9443/api/v2/oauth', headers=headers, data=data, verify=False)
    response.raise_for_status()

    return response.json().get('access_token')



def mlGOVNO(user_input):
    client_id = '6235a282-7acc-4c96-af75-f16aeb5e44f1'
    client_secret = 'NWNlYmUyMjktYTZjMC00MTUyLTlmZmEtMDU5NzEzYTE3MmIwOjYyMzVhMjgyLTdhY2MtNGM5Ni1hZjc1LWYxNmFlYjVlNDRmMQ=='

    token = get_access_token(client_id, client_secret)

    chat = GigaChat(credentials=token, verify_ssl_certs=False)
    messages = [
    {"role": "system", "content": "You are a helpful assistant."}
    ]

    user_input = input("User: ")
    messages.append({"role": "user", "content": user_input})
    response = chat(messages)
    print("Bot: ", response.content)
