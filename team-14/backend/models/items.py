from pydantic import BaseModel

class Item(BaseModel):
    text: str
    src: str
    target: str

class TranslatedItem(BaseModel):
    text: str
