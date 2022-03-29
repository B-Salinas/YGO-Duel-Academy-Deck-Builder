from .db import db
from sqlalchemy.orm import relationship

class Title(db.Model):
  __tablename__ = 'titles'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False, unique=True)

  # users
  users = relationship(
    "User",
    backref="title",
    cascade="all, delete",
    uselist=False
  )

  def to_dict(self):
    return {
      'id': self.id,
      'name': self.name
    }
