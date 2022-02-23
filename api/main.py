from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sqlite3

app = FastAPI()
origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
conn = sqlite3.connect("./../db/wnjpn.db")
@app.get("/")
async def root():
    cur = conn.execute("select * from word where lang = 'jpn' ORDER BY RANDOM() LIMIT 10;")
    wordlist = [ record[2] for record in cur.fetchall()]
    return {"message": wordlist}
    