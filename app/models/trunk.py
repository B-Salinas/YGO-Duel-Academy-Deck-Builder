from .db import db
from sqlalchemy.orm import relationship

class Trunk(db.Model):
  __tablename__ = 'trunks'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

  # user_cards
  cards = relationship("User_Trunk_Card", backref="trunk", cascade="all, delete")

  def to_dict(self):
    return {
      'id': self.id
    }
