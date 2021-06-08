from .db import db


class Spell_Trap_Card_Type(db.Model):
    __tablename__ = "spell_trap_card_types"

    id = db.Column(db.Integer, primary_key=True)
    _type = db.Column(db.String, nullable=True)
    # created_at = db.Column(db.DateTime, nullable=False, default=today)
    # updated_at = db.Column(db.DateTime, nullable=False, default=today)

    spell_trap_cards = db.relationship("Spell_Trap_Card", back_populates="types")

    def to_dict(self):
        return {
            "id": self.id,
            "type": self._type
        }