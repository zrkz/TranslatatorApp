from fastapi import APIRouter

from api.v1.endpoints.translation import translation_router


api_router = APIRouter()
api_router.include_router(translation_router, prefix="/translation", tags=["translation"])