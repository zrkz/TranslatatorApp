# Team 14 - AI Translation

## First steps

```
python3 -m venv venv

source venv/bin/activate

pip install -r requirements.txt
```

## Start frontend

```
cd frontend/

npm install
npm run build-prod

docker build . --network=host -t translation-frontend:v0.1.0

docker run -it --rm --network=host translation-frontend:v0.1.0
```

## Start backend

```
cd backend

docker build . --network=host -t translation-backend:v0.1.0
docker run -it --rm --network=host -v `pwd`/cache:/app/cache translation-backend:v0.1.0
```

## Links

https://huggingface.co/transformers/master/model_doc/mbart.html
