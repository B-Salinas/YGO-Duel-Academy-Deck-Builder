from .db import db


class Monster_Card_Race(db.Model):
    __tablename__ = 'monster_card_races'

    id = db.Column(db.Integer, primary_key=True)
    race = db.Column(db.String, nullable=False)
    # created_at = db.Column(db.DateTime, nullable=False, default=today)
    # updated_at = db.Column(db.DateTime, nullable=False, default=today)

    monster_cards = db.relationship("Monster_Card", back_populates="monster_card_races")

    def to_dict(self):
        return {
            "id": self.id,
            "race": self.race
        }
