from flask_sqlalchemy import SQLAlchemy
import datetime

db = SQLAlchemy()

today = datetime.datetime.now()
