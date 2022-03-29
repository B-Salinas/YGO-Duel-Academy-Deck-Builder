from .db import db
from sqlalchemy.orm import relationship

class Dorm(db.Model):
  __tablename__ = 'dorms'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False, unique=True)

  # users
  users = relationship(
    "User",
    backref="dorm",
    cascade="all, delete",
    uselist=False
  )

  def to_dict(self):
    return {
      'id': self.id,
      'name': self.name
    }
