FROM python:3.8-alpine
WORKDIR /app
COPY /docker/api/requirements.txt .
RUN apk add --no-cache build-base \
  && pip install --upgrade pip setuptools --no-cache-dir --trusted-host pypi.python.org -r requirements.txt \
  && apk del build-base
COPY /docker/api/main.py .
EXPOSE 8000
CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]