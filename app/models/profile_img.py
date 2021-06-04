from .db import db, today


class Profile_Image(db.Model):
    __tablename__ = 'profile_images'

    id = db.Column(db.Integer, primary_key=True)
    img_url = db.Column(db.String, nullable=False) # I can make a default picture with a URL, but I think I would need to host to cloudinary for that
    created_at = db.Column(db.DateTime, nullable=False, default=today)
    updated_at = db.Column(db.DateTime, nullable=False, default=today)

    # I actually dont' know if I did this relationship right
    users = db.relationship("User", back_populates="profile_images")

    def to_dict(self):
        return {
            "id": self.id,
            "img_url": self.img_url
        }
