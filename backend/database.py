import os

import psycopg2
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

load_dotenv()

# DB_URL = os.getenv("DB_URL",'postgresql://postgres:shiv@localhost/ssdev')
DB_URL = os.getenv("DB_URL", "")

# Connect to the Postgres database
conn = psycopg2.connect(DB_URL)

engine = create_engine(
    DB_URL,
    echo=True,
    pool_pre_ping=True,  # Checks before reusing a connection
    pool_recycle=280,
    pool_size=10,
    max_overflow=20,
    pool_timeout=30,
)
# engine2 = create_engine(DB_URL, echo=True)


SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


Base = declarative_base()

#  database view
