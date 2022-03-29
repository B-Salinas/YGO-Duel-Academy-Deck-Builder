from .db import db
from sqlalchemy.orm import relationship

class Deck(db.Model):
  __tablename__ = 'decks'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  deck_name = db.Column(db.String, nullable=False)

  # user_deck_cards
  cards = relationship(
    "User_Deck_Card", 
    backref="deck", 
    cascade="all, delete",
    lazy="dynamic"
  )

  def to_dict(self):
    return {
      'id': self.id,
      'deckName': self.deck_name,
      'numCards': len(self.cards.all())
    }
