from .db import db


class Monster_Card_Type(db.Model):
    __tablename__ = 'monster_card_types'

    id = db.Column(db.Integer, primary_key=True)
    _type = db.Column(db.String, nullable=False)

    # monster_cards = db.relationship("Monster_Card", back_populates="types")

    def to_dict(self):
        return {
            "id": self.id,
            "type": self._type
        }
