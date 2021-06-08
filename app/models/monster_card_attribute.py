from .db import db


class Monster_Card_Attribute(db.Model):
    __tablename__ = "monster_card_attributes"

    id = db.Column(db.Integer, primary_key=True)
    attribute = db.Column(db.String, nullable=False)
    # created_at = db.Column(db.DateTime, nullable=False, default=today)
    # updated_at = db.Column(db.DateTime, nullable=False, default=today)

    monster_cards = db.relationship("Monster_Card", back_populates="attributes")

    def to_dict(self):
        return {
            "id": self.id,
            "attribute": self.attribute
        }
