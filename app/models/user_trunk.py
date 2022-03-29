from .db import db
from sqlalchemy.orm import relationship

class User_Trunk(db.Model):
  __tablename__ = 'user_trunks'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
  card_id = db.Column(db.Integer, db.ForeignKey("cards.id", ondelete="CASCADE"), nullable=False)
  total_quantity = db.Column(db.Integer, nullable=False)

  # implicit associations:
  # ---> card
  # ---> user

  # user_deck_cards
  decks = relationship(
    "User_Deck_Card",
    uselist=False,
    backref="user_trunk", 
    cascade="all, delete"
  )

  def to_dict(self):
    return {
      'id': self.id,
      'card': self.card.to_dict(),
      'totalQuantity': self.total_quantity
    }
