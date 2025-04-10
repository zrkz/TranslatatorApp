FROM docker-registry.default.svc:5000/cp-388868/transformers-pytorch-cpu:4.9.1

WORKDIR /app
COPY . /app

# update PATH environment variable
ENV PATH=$PATH:/root/.local:/root/.local/bin \
    LC_ALL=C.UTF-8 \
    LANG=C.UTF-8 \
    PYTHONIOENCODING=utf-8 \
    PYTHONPATH=${PYTHONPATH}:/app/backend \
    HF_HOME=/app/cache/

RUN pip install -r requirements.txt \
    && pip install -r translator/docker-requirements.txt \
    && mkdir -p /app/cache

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]