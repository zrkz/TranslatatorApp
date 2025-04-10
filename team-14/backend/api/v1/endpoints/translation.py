
from fastapi import APIRouter

from fastapi import status, Response

from translator.engine import TranslationEngine
from models.items import TranslatedItem, Item
from core.translation_config import TranslatorConfig

translation_router = APIRouter()

translator_engine = TranslationEngine(
    model_name=TranslatorConfig.model,
)

@translation_router.post("", response_model=TranslatedItem)
async def translate(item: Item, response: Response):
    try:
        translation = translator_engine.translate(text=item.text, src_lang=item.src, tgt_lang=item.target)
    except KeyError:
        response.status_code = status.HTTP_400_BAD_REQUEST
        return TranslatedItem(
            text="Invalid language, do GET on /help for a list of language codes"
        )

    return TranslatedItem(
        text=''.join(translation)
    )

@translation_router.get("/help")
async def help():
    return {
        "supported_languages": list(translator_engine.tokenizer.lang_code_to_id.keys()),
    }
