from .db import db


class Dorm(db.Model):
    __tablename__ = 'dorms'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)

    users = db.relationship("User", back_populates="dorm")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }
