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

    db = os.environ['POSTGRES_DB']
    user = os.environ['POSTGRES_USER']
    password = os.environ['POSTGRES_PASSWORD']
    return psycopg2.connect(f"host=db port=5432 dbname={db} user={user} password={password}")

conn = sqlite3.connect("./../wnjpn.db")

@app.get("/generate")
async def generate(limit: int = 10):
    connection = get_connection()
    cur = connection.cursor()
    cur.execute(f"select * from word where lang = 'jpn' ORDER BY RANDOM() LIMIT {limit};")
    wordlist = [ record[2] for record in cur.fetchall()]
    cur.close() 
    connection.close()
    return {"themelist": wordlist}


