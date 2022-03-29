from sqlalchemy.orm import relationship
from .db import db

class Card(db.Model):
  __tablename__ = 'cards'

  id = db.Column(db.Integer, primary_key=True)
  official_id = db.Column(db.String(8), nullable=False, unique=True)
  name = db.Column(db.String(255), nullable=False, unique=True)
  card_type = db.Column(db.String(255), nullable=False)
  desc = db.Column(db.Text, nullable=False)
  attack = db.Column(db.Integer)
  defense = db.Column(db.Integer)
  level = db.Column(db.Integer)
  race = db.Column(db.String(255), nullable=False)
  attribute = db.Column(db.String(255))
  archetype = db.Column(db.String(255))
  card_img = db.Column(db.Text)
  card_img_small = db.Column(db.Text)

  # user_trunk
  user_cards = relationship(
    "User_Trunk", 
    backref="card", 
    cascade="all, delete", 
    uselist=False
  )

  def to_dict(self):
    return {
      'id': self.id,
      'official_id': self.official_id,
      'name': self.name,
      'type': self.card_type,
      'desc': self.desc,
      'atk': self.attack,
      'def': self.defense,
      'level': self.level,
      'race': self.race,
      'attribute': self.attribute,
      'archetype': self.archetype,
      'cardImg': self.card_img,
      'cardImgSmall': self.card_img_small
    }
