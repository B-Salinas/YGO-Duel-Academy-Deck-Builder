from .db import db


class Monster_Card(db.Model):
    __tablename__ = 'monster_cards'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    deck_id = db.Column(db.Integer, db.ForeignKey("decks.id"))
    card_id = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String, nullable=False)
    type = db.Column(db.Integer, db.ForeignKey("monster_card_types.id"), nullable=False)
    desc = db.Column(db.Text, nullable=False)
    atk = db.Column(db.Integer, nullable=False)
    _def = db.Column(db.Integer, nullable=False)
    level = db.Column(db.Integer, nullable=False)
    race = db.Column(db.Integer, db.ForeignKey("monster_card_races.id"), nullable=False)
    attribute = db.Column(db.Integer, db.ForeignKey("monster_card_attributes.id"), nullable=False)
    img_url = db.Column(db.String, nullable=False)
    img_url_small = db.Column(db.String, nullable=False)
    # created_at = db.Column(db.DateTime, nullable=False, default=today)
    # updated_at = db.Column(db.DateTime, nullable=False, default=today)

    types = db.relationship("Monster_Card_Type", back_populates="monster_cards")
    races = db.relationship("Monster_Card_Race", back_populates="monster_cards")
    attributes = db.relationship("Monster_Card_Attribute", back_populates="monster_cards")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "deck_id": self.deck_id,
            "card_id": self.card_id,
            "name": self.name,
            "type": self.type,
            "desc": self.desc,
            "atk": self.atk,
            "def": self._def,
            "level": self.level,
            "race": self.race,
            "attribute": self.attribute,
            "img_url": self.img_url,
            "img_url_small": self.img_url_small
        }