from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.orm import relationship


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
