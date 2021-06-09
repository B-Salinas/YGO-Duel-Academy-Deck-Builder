from .db import db


class Title(db.Model):
    __tablename__ = 'titles'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)

    users = db.relationship("User", back_populates="title")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }
