from .db import db


class Spell_Trap_Card_Race(db.Model):
    __tablename__ = "spell_trap_card_races"

    id = db.Column(db.Integer, primary_key=True)
    race = db.Column(db.String, nullable=False)
    # created_at = db.Column(db.DateTime, nullable=False, default=today)
    # updated_at = db.Column(db.DateTime, nullable=False, default=today)

    spell_trap_cards = db.relationship("Spell_Trap_Card", back_populates="races")

    def to_dict(self):
        return {
            "id": self.id,
            "race": self.race
        }
