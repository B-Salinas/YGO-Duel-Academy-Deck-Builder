from .db import db


class Spell_Trap_Card_Type(db.Model):
    __tablename__ = "spell_trap_card_types"

    id = db.Column(db.Integer, primary_key=True)
    _type = db.Column(db.String, nullable=True)

    def to_dict(self):
        return {
            "id": self.id,
            "type": self._type
        }