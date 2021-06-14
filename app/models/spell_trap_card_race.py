from .db import db


class Spell_Trap_Card_Race(db.Model):
    __tablename__ = "spell_trap_card_races"

    id = db.Column(db.Integer, primary_key=True)
    race = db.Column(db.String, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "race": self.race
        }
