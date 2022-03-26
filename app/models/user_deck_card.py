from .db import db

class User_Deck_Card(db.Model):
  __tablename__ = 'user_deck_cards'

  id = db.Column(db.Integer, primary_key=True)
  user_card_id = db.Column(db.Integer, db.ForeignKey("user_cards.id"), nullable=False)
  deck_id = db.Column(db.Integer, db.ForeignKey("decks.id"), nullable=False)
  quantity = db.Column(db.Integer, nullable=False)

  # implicit associations:
  # ---> user_card
  # ---> deck

  def to_dict(self):
    return {
      'id': self.id,
      'card': self.user_card.card.to_dict(),
      'quantity': self.quantity
    }
