from .db import db

class Profile_Image(db.Model):
  __tablename__ = 'profile_images'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False, unique=True)
  img_url = db.Column(db.String, nullable=False, unique=True)

  def to_dict(self):
    return {
      'id': self.id,
      'name': self.name,
      'imgUrl': self.img_url
    }
