"""
    The translator engine, which is based on models, provided by huggingface.
"""
from transformers import M2M100ForConditionalGeneration, M2M100Tokenizer


class TranslationEngine:
    """
        The translation engine, which is based on models, provided by huggingface.
    """
    def __init__(self, model_name):
        """
            Initialize the translation engine.
        """
        self.tokenizer = M2M100Tokenizer.from_pretrained(model_name)
        self.model = M2M100ForConditionalGeneration.from_pretrained(model_name)

    def translate(self, text: str, src_lang: str, tgt_lang: str) -> str:
        """
            Translate the text.
        """
        # Set source and target language
        tgt_lang_id = self.tokenizer.lang_code_to_id[tgt_lang]
        self.tokenizer.src_lang = src_lang

        # encode text
        encoded_text = self.tokenizer(text, return_tensors="pt")

        # translate
        generated_tokens = self.model.generate(
            **encoded_text, 
            forced_bos_token_id=tgt_lang_id
        )

        # decode translated text and return
        return self.tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)
