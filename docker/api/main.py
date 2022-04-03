from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
import psycopg2

app = FastAPI()
origins = ["http://localhost:3000", "https://random-theme-generator.vercel.app"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_connection():
    DATABASE_URL = os.environ['DATABASE_URL']
    return psycopg2.connect(DATABASE_URL, sslmode='require')

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
