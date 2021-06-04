from .db import db


class Monster_Card(db.Model):
    __tablename__ = 'monster_cards'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    deck_id = db.Column(db.Integer, db.ForeignKey("decks.id"))
    card_id = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String, nullable=False)
    type = 
