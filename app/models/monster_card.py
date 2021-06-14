from .db import db

class Monster_Card(db.Model):
    __tablename__ = 'monster_cards'

    id = db.Column(db.Integer, primary_key=True)
    deck_id = db.Column(db.Integer, db.ForeignKey("decks.id"))
    card_id = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String, nullable=False)
    _type = db.Column(db.String, nullable=False)
    desc = db.Column(db.Text, nullable=False)
    atk = db.Column(db.Integer, nullable=False)
    _def = db.Column(db.Integer, nullable=False)
    level = db.Column(db.Integer, nullable=False)
    race = db.Column(db.String, nullable=False)
    attribute = db.Column(db.String, nullable=False)
    img_url = db.Column(db.String, nullable=False)
    img_url_small = db.Column(db.String, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "deck_id": self.deck_id,
            "card_id": self.card_id,
            "name": self.name,
            "type": self._type,
            "desc": self.desc,
            "atk": self.atk,
            "def": self._def,
            "level": self.level,
            "race": self.race,
            "attribute": self.attribute,
            "img_url": self.img_url,
            "img_url_small": self.img_url_small
        }
