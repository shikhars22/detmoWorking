## To install the environment
    python -m venv .venv

## To activate the environment (Windows)
    source .venv/Scripts/activate

## To activate the environment (Linux/Mac)
    source .venv/bin/activate

## To install the dependencies
    pip install -r requirements.txt

## To run the reverse proxy for clerk webhooks
1. Go to ngrok dashboard -> https://dashboard.ngrok.com/get-started/setup/windows
2. Download the latest version of ngrok for windows
3. Get the auth token after signing up for ngrok
4. Unzip the file and run ngrok.exe
5. Type following commands in the terminal

### ngrok Commands
    ngrok config add-authtoken YOUR_AUTH_TOKEN
    ngrok http http://localhost:8000

## To run the backend application
    uvicorn main:app --host 0.0.0.0 --port 8000