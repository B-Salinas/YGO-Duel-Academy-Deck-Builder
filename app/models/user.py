from .db import db, today
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship


class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False)
  email = db.Column(db.String, nullable=False, unique=True)
  hashed_password = db.Column(db.String, nullable=False)
  dorm_id = db.Column(db.String, db.ForeignKey("dorms.id"), nullable=False)
  title_id = db.Column(db.String, db.ForeignKey("titles.id"), nullable=False)
  profile_img = db.Column(db.String, db.ForeignKey("profile_images.id"), nullable=False)
  created_at = db.Column(db.DateTime, nullable=False, default=today)
  updated_at = db.Column(db.DateTime, nullable=False, default=today)


  # I actually don't know if I did this relationship right 
  dorms = db.relationship("Dorm", back_populates="users")
  titles = db.relationship("Title", back_populates="users")
  profile_images = db.relationship("Profile_Image", back_populates="users")

  decks = db.relationship("Deck", back_populates="users")

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
      "id": self.id,
      "name": self.name,
      "email": self.email,
      "hashed_password": self.hashed_password,
      "dorm_id": self.dorm_id,
      "title_id": self.title_id,
      "profile_img": self.profile_img
    }
