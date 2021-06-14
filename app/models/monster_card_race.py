from .db import db


class Monster_Card_Race(db.Model):
    __tablename__ = 'monster_card_races'

    id = db.Column(db.Integer, primary_key=True)
    race = db.Column(db.String, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "race": self.race
        }
