from .db import db


class Monster_Card_Attribute(db.Model):
    __tablename__ = "monster_card_attributes"

    id = db.Column(db.Integer, primary_key=True)
    attribute = db.Column(db.String, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "attribute": self.attribute
        }
