from huggingface_hub import hf_hub_download
from core.translation_config import TranslatorConfig

hf_hub_download(TranslatorConfig.model, filename="config.json")
hf_hub_download(TranslatorConfig.model, filename="pytorch_model.bin")
hf_hub_download(TranslatorConfig.model, filename="sentencepiece.bpe.model")
hf_hub_download(TranslatorConfig.model, filename="special_tokens_map.json")
hf_hub_download(TranslatorConfig.model, filename="tokenizer_config.json")
hf_hub_download(TranslatorConfig.model, filename="vocab.json")