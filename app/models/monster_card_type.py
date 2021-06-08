from .db import db


class Monster_Card_Type(db.Model):
    __tablename__ = 'monster_card_types'

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String, nullable=False)
    # created_at = db.Column(db.DateTime, nullable=False, default=today)
    # updated_at = db.Column(db.DateTime, nullable=False, default=today)

    monster_cards = db.relationship("Monster_Card", back_populates="monster_card_types")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }