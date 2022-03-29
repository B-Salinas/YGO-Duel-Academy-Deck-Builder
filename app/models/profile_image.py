from .db import db
from sqlalchemy.orm import relationship

class Profile_Image(db.Model):
  __tablename__ = 'profile_images'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False, unique=True)
  img_url = db.Column(db.String, nullable=False, unique=True)

  # users
  users = relationship(
    "User",
    backref="profile_img",
    cascade="all, delete",
    uselist=False
  )

  def to_dict(self):
    return {
      'id': self.id,
      'name': self.name,
      'imgUrl': self.img_url
    }
