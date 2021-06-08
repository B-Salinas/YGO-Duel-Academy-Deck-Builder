from .db import db


class Spell_Trap_Card (db.Model):
    __tablename__ = "spell_trap_cards"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    deck_id = db.Column(db.Integer, db.ForeignKey("decks.id"))
    card_id = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String, nullable=False)
    _type = db.Column(db.Integer, db.ForeignKey("spell_trap_card_types.id"), nullable=False)
    desc = db.Column(db.Text, nullable=False)
    race = db.Column(db.Integer, db.ForeignKey("spell_trap_card_races.id"), nullable=False)
    img_url = db.Column(db.String, nullable=False)
    img_url_small = db.Column(db.String, nullable=False)
    # created_at = db.Column(db.DateTime, nullable=False, default=today)
    # updated_at = db.Column(db.DateTime, nullable=False, default=today)

    types = db.relationship("Spell_Trap_Card_Type", back_populates="spell_trap_cards")
    races = db.relationship("Spell_Trap_Card_Race", back_populates="spell_trap_cards")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "deck_id": self.deck_id,
            "card_id": self.card_id,
            "name": self.name,
            "type": self._type,
            "desc": self.desc,
            "race": self.race,
            "img_url": self.img_url,
            "img_url_small": self.img_url_small
        }
