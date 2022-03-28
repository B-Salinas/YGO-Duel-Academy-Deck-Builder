import json
from .db import db
from .deck import Deck
from .trunk import Trunk
from .card import Card
from .user_card import User_Card
from .user_deck_card import User_Deck_Card
from .user_trunk_card import User_Trunk_Card
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
    FIRE_DECK_NAME = "Fire"
    WATER_DECK_NAME = "Water"
    WIND_DECK_NAME = "Wind"

    user_fire_deck = Deck(
      user_id = self.id,
      deck_name = FIRE_DECK_NAME
    )

    user_water_deck = Deck(
      user_id = self.id,
      deck_name = WATER_DECK_NAME
    )

    user_wind_deck = Deck(
      user_id = self.id,
      deck_name = WIND_DECK_NAME
    )

    db.session.add(user_fire_deck)
    db.session.add(user_water_deck)
    db.session.add(user_wind_deck)

    user_trunk = Trunk(
      user_id = self.id
    )

    db.session.add(user_trunk)
    db.session.commit()

    for card in starter_deck_json["fire"]:
      card_ref = Card.query.filter(Card.name.ilike(f"{card['name']}")).one()
      new_user_card = User_Card(
        user_id = self.id,
        card_id = card_ref.id,
        total_quantity = card["qty"]
      )

      db.session.add(new_user_card)
    db.session.commit()

    for card in starter_deck_json["water"]:
      card_ref = Card.query.filter(Card.name.ilike(f"{card['name']}")).one()
      existing_user_card = User_Card.query.filter(
        User_Card.card_id == card_ref.id,
        User_Card.user_id == self.id
      ).first()

      if existing_user_card is None:
        new_user_card = User_Card(
          user_id = self.id,
          card_id = card_ref.id,
          total_quantity = card["qty"]
        )

        db.session.add(new_user_card)
      else:
        existing_user_card.total_quantity += card["qty"]
    db.session.commit()

    for card in starter_deck_json["wind"]:
      card_ref = Card.query.filter(Card.name.ilike(f"{card['name']}")).one()
      existing_user_card = User_Card.query.filter(
        User_Card.card_id == card_ref.id,
        User_Card.user_id == self.id
      ).first()

      if existing_user_card is None:
        new_user_card = User_Card(
          user_id = self.id,
          card_id = card_ref.id,
          total_quantity = card["qty"]
        )

        db.session.add(new_user_card)
      else:
        existing_user_card.total_quantity += card["qty"]
    db.session.commit()

    for card in starter_deck_json["fire"]:
      card_ref = Card.query.filter(Card.name.ilike(f"{card['name']}")).one()
      user_card_ref = User_Card.query.filter(
        User_Card.card_id == card_ref.id,
        User_Card.user_id == self.id
        ).one()
      new_user_deck_card = User_Deck_Card(
        user_card_id = user_card_ref.id,
        deck_id = user_fire_deck.id,
        quantity = card["qty"]
      )

      db.session.add(new_user_deck_card)

    for card in starter_deck_json["water"]:
      card_ref = Card.query.filter(Card.name.ilike(f"{card['name']}")).one()
      user_card_ref = User_Card.query.filter(
        User_Card.card_id == card_ref.id,
        User_Card.user_id == self.id
        ).one()
      new_user_deck_card = User_Deck_Card(
        user_card_id = user_card_ref.id,
        deck_id = user_water_deck.id,
        quantity = card["qty"]
      )

      db.session.add(new_user_deck_card)

    for card in starter_deck_json["wind"]:
      card_ref = Card.query.filter(Card.name.ilike(f"{card['name']}")).one()
      user_card_ref = User_Card.query.filter(
        User_Card.card_id == card_ref.id,
        User_Card.user_id == self.id
        ).one()
      new_user_deck_card = User_Deck_Card(
        user_card_id = user_card_ref.id,
        deck_id = user_wind_deck.id,
        quantity = card["qty"]
      )

      db.session.add(new_user_deck_card)

    for user_card in User_Card.query.filter(User_Card.user_id == self.id).all():
      new_user_trunk_card = User_Trunk_Card(
        user_card_id = user_card.id,
        trunk_id = user_trunk.id,
        quantity = 0
      )

      db.session.add(new_user_trunk_card)
      db.session.commit()

    db.session.commit()
