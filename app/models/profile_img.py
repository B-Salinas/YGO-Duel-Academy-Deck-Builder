from .db import db


class Profile_Image(db.Model):
    __tablename__ = 'profile_images'

    id = db.Column(db.Integer, primary_key=True)
    img_url = db.Column(db.String, nullable=False) # I can make a default picture with a URL, but I think I would need to host to cloudinary for that

    users = db.relationship("User", back_populates="profile_image")

    def to_dict(self):
        return {
            "id": self.id,
            "img_url": self.img_url
        }
