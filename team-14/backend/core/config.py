from pydantic import BaseSettings

class Settings(BaseSettings):
    API_V1_STR: str = "/v1"
    class Config:
        case_sensitive = True


settings = Settings()