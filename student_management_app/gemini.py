import requests

def ask_gemini(question):
    api_key = "AIzaSyAOAHfibh07ddBHQ2c8oPKt5-tiN2i3RSQ"
    url = "https://api.gemini.com/v1/ask"
    headers = {"Authorization": f"Bearer {api_key}"}
    data = {"question": question}

    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()  # Raise an exception for 4xx or 5xx status codes
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        return None

question = "HI"
response = ask_gemini(question)
if response is not None:
    print(f"Bot: {response.get('answer', 'No answer found')}")
else:
    print("Error: Unable to get response from Gemini API")