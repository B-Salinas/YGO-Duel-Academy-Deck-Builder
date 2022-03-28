import json
from .db import db
from .deck import Deck
from .trunk import Trunk
from .card import Card
from .user_card import User_Card
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.orm import relationship

with open("./app/seeds/card_data/starter_decks.json", "r") as decks_json:
  starter_deck_json = json.load(decks_json)
class User(db.Model, UserMixin):
  __tablename__ = "users"

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False)
  email = db.Column(db.String, nullable=False, unique=True)
  hashed_password = db.Column(db.String, nullable=False)
  dorm = db.Column(db.String, nullable=False)
  title = db.Column(db.String, nullable=False)
  profile_img = db.Column(db.String, nullable=False)

  # user_cards
  cards = relationship("User_Card", backref="user", cascade="all, delete")

  # trunk
  trunk = relationship("Trunk", backref="user", cascade="all, delete")

  # decks
  decks = relationship("Deck", backref="user", cascade="all, delete")

  @property                                         
  def password(self):
    return self.hashed_password

  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)

  def check_password(self, password):
    return check_password_hash(self.password, password)

  def to_dict(self):
    return {
      'id': self.id,
      'name': self.name,
      'email': self.email,
      'dorm': self.dorm,
      'title': self.title,
      'profileImg': self.profile_img,
      'decks': [deck.to_dict() for deck in self.decks]
    }

  def sign_up(self):
    starter_decks = ["Fire", "Water", "Wind"]

    for starter_deck in starter_decks:
      user_starter_deck = Deck(
        user_id = self.id,
        deck_name = starter_deck
      )

      db.session.add(user_starter_deck)

    user_trunk = Trunk(
      user_id = self.id
    )

    db.session.add(user_trunk)
    db.session.commit()

    starter_fire_card_ids = []
    starter_water_card_ids = []
    starter_wind_card_ids = []

    for card in starter_deck_json["fire"]:
      card_ref = Card.query.filter(Card.name.ilike(f"{card['name']}")).one()
      new_user_card = User_Card(
        user_id = self.id,
        card_id = card_ref.id,
        total_quantity = card["qty"]
      )

      db.session.add(new_user_card)
      starter_fire_card_ids.append(card_ref.id)
    db.session.commit()

    for card in starter_deck_json["water"]:
      card_ref = Card.query.filter(Card.name.ilike(f"{card['name']}")).one()
      existing_user_card = User_Card.query.filter(User_Card.card_id == card_ref.id).first()

      if existing_user_card is None:
        new_user_card = User_Card(
          user_id = self.id,
          card_id = card_ref.id,
          total_quantity = card["qty"]
        )

        db.session.add(new_user_card)
        starter_water_card_ids.append(card_ref.id)
      else:
        existing_user_card.total_quantity += card["qty"]
    db.session.commit()

    for card in starter_deck_json["wind"]:
      card_ref = Card.query.filter(Card.name.ilike(f"{card['name']}")).one()
      existing_user_card = User_Card.query.filter(User_Card.card_id == card_ref.id).first()

      if existing_user_card is None:
        new_user_card = User_Card(
          user_id = self.id,
          card_id = card_ref.id,
          total_quantity = card["qty"]
        )

        db.session.add(new_user_card)
        starter_wind_card_ids.append(card_ref.id)
      else:
        existing_user_card.total_quantity += card["qty"]
    db.session.commit()
