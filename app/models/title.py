from .db import db


class Title(db.Model):
    __tablename__ = 'titles'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    # created_at = db.Column(db.DateTime, nullable=False, default=today)
    # updated_at = db.Column(db.DateTime, nullable=False, default=today)

    # I actually dont' know if I did this relationship right
    users = db.relationship("User", back_populates="titles")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }
