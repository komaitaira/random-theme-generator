from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sqlite3

app = FastAPI()
origins = ["http://localhost:3000", "https://random-theme-generator.vercel.app"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
conn = sqlite3.connect("./../wnjpn.db")

@app.get("/generate")
async def generate(limit: int = 10):
    cur = conn.execute(f"select * from word where lang = 'jpn' ORDER BY RANDOM() LIMIT {limit};")
    wordlist = [ record[2] for record in cur.fetchall()]
    return {"themelist": wordlist}


