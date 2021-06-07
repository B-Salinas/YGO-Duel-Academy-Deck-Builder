from .db import db


class Spell_Trap_Card_Type(db.Model):
    __tablename__ = "spell_trap_card_types"

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.Integer, nullable=True)
    # created_at = db.Column(db.DateTime, nullable=False, default=today)
    # updated_at = db.Column(db.DateTime, nullable=False, default=today)

    spell_trap_cards = db.relationship("Spell_Trap_Card", back_populates="spell_trap_card_types")

    def to_dict(self):
        return {
            "id": self.id,
            "type": self.type
        }