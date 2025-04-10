from fastapi.routing import APIRouter

root_router = APIRouter()

@root_router.get("/healthz", status_code=200)
async def healthz():
    return {
        "status": "UP"
    }
