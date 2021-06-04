from .db import db


class Profile_Image(db.Model):
    __tablename__ = 'profile_images'

    id = db.Column(db.Integer, primary_key=True)
    img_url = db.Column(db.String, nullable=False)

    # I actually dont' know if I did this relationship right
    users = db.relationship("User", back_populates="profile_images")

    def to_dict(self):
        return {
            "id": self.id,
            "img_url": self.img_url
        }
