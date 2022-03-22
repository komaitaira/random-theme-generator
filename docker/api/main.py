from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
import psycopg2

app = FastAPI()
origins = ["http://localhost:3000", "https://random-theme-generator.vercel.app"]

app.add_middleware(
<<<<<<< HEAD
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

def get_connection():
  db = os.environ['POSTGRES_DB']
  user = os.environ['POSTGRES_USER']
  password = os.environ['POSTGRES_PASSWORD']
  return psycopg2.connect(f"host=db port=5432 dbname={db} user={user} password={password}")

@app.get("/generate")
async def generate(limit: int = 10):
  connection = get_connection()
  cur = connection.cursor()
  if float(limit).is_integer():
    if limit <= 10:
      cur.execute(f"select * from word where lang = 'jpn' ORDER BY RANDOM() LIMIT {limit};")
      wordlist = [ record[2] for record in cur.fetchall()]
      cur.close()
      connection.close()
      return {"themelist": wordlist}
    else:
      return "value exceeds 10."
  else:
    return "value is not a number."
=======
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_connection():

    db = os.environ['POSTGRES_DB']
    user = os.environ['POSTGRES_USER']
    password = os.environ['POSTGRES_PASSWORD']
    return psycopg2.connect(f"host=db port=5432 dbname={db} user={user} password={password}")

conn = sqlite3.connect("./../wnjpn.db")
    if os.environ.get('IS_PRODUCTION'):
        # host = os.environ.get('PROD_POSTGRES_HOST')
        # port = os.environ.get('PROD_POSTGRES_PORT')
        # db = os.environ.get('PROD_POSTGRES_DB')
        # user = os.environ.get('PROD_POSTGRES_USER')
        # password = os.environ.get('PROD_POSTGRES_PASSWORD')
        DATABASE_URL = os.environ['DATABASE_URL']
        return psycopg2.connect(DATABASE_URL, sslmode='require')
        # return psycopg2.connect(f"host={host} port={port} dbname={db} user={user} password={password}")
    else:
        # host = os.environ.get('POSTGRES_HOST')
        # port = os.environ.get('POSTGRES_PORT')
        db = os.environ['POSTGRES_DB']
        user = os.environ['POSTGRES_USER']
        password = os.environ['POSTGRES_PASSWORD']
        return psycopg2.connect(f"host=db port=5432 dbname={db} user={user} password={password}")

@app.get("/generate")
async def generate(limit: int = 10):
    connection = get_connection()
    cur = connection.cursor()
    cur.execute(f"select * from word where lang = 'jpn' ORDER BY RANDOM() LIMIT {limit};")
    wordlist = [ record[2] for record in cur.fetchall()]
    cur.close() 
    connection.close()
    return {"themelist": wordlist}


>>>>>>> f566026 (Fix api、dbをdocker化)
