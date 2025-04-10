from dataclasses import dataclass

@dataclass
class TranslatorConfig:
    model: str = "facebook/m2m100_1.2B"