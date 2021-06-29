from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import backref, relationship
from .trunk import user_monster_cards, user_spell_trap_cards

from .monster_card import Monster_Card
from .spell_trap_card import Spell_Trap_Card


class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False)
  email = db.Column(db.String, nullable=False, unique=True)
  hashed_password = db.Column(db.String, nullable=False)
  dorm = db.Column(db.String, nullable=False)
  title = db.Column(db.String, nullable=False)
  profile_img = db.Column(db.String, nullable=False)

  monster_cards = db.relationship("Monster_Card", secondary=user_monster_cards, backref="users")
  spell_trap_cards = db.relationship("Spell_Trap_Card", secondary=user_spell_trap_cards, backref="users")

  decks = db.relationship("Deck", back_populates="user")

  @property                                         
  def password(self):
    return self.hashed_password

  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)

  def check_password(self, password):
    return check_password_hash(self.password, password)

  @property
  def cards(self):
        return [*self.monster_cards, *self.spell_trap_cards]

  @cards.setter
  def cards(self, cards_list):
    self.monster_cards = []
    self.spell_trap_cards = []

    if not len(cards_list):
        return

    for card in cards_list:
        if isinstance(card, Monster_Card):
            self.monster_cards.append(card)
        elif isinstance(card, Spell_Trap_Card):
            self.spell_trap_cards.append(card)

  def to_dict(self):
    return { 
      "id": self.id,
      "name": self.name,
      "email": self.email,
      "hashed_password": self.hashed_password,
      "dorm": self.dorm,
      "title": self.title,
      "profile_img": self.profile_img
    }
