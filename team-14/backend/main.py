from fastapi import FastAPI

from api.root import root_router
from api.v1.api import api_router
from core.config import settings

app = FastAPI()

app.get("", status_code=400)
def main():
    return {
        "text": "Please use /api"
    }

translation_app = FastAPI(
    title="Translator",
    description="Translate text from one language to another",
    version="0.2.0",
    openapi_url="/openapi.json",
)

app.mount("/api", translation_app)

translation_app.include_router(api_router, prefix=settings.API_V1_STR)
translation_app.include_router(root_router)