from .db import db

class User_Trunk_Card(db.Model):
  __tablename__ = 'user_trunk_cards'

  id = db.Column(db.Integer, primary_key=True)
  user_card_id = db.Column(db.Integer, db.ForeignKey("user_cards.id"), nullable=False)
  trunk_id = db.Column(db.Integer, db.ForeignKey("trunks.id"), nullable=False)
  quantity = db.Column(db.Integer, nullable=False)

  # implicit associations:
  # ---> user_card
  # ---> trunk

  def to_dict(self):
    return {
      'id': self.id,
      'card': self.user_card.card.to_dict(),
      'quantity': self.quantity
    }
