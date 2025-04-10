# Backend

## Settings

### Change the model

To change the translation model dataset, please change the model_name in [backend/core/translation_config.py](backend/core/translation_config.py).

If the model algorithm changes (e. g. from m2m100 to mBART), you need to also change the `tokenzier` and `model` in
[backend/translator/engine.py](backend/translator/engine.py).

The docker image will predownload the model.

## Send a request

translate.int.knt/

-> with body

{
    "text": "hello world",
    "src": "en_XX",
    "target": "de_DE"
}

---

Output

{
    "text": "hallo welt"
}