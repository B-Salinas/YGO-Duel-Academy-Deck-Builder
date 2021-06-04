from .db import db


class Title(db.Model):
    __tablename__ = 'titles'

    id = db.Column(db.String, primary_key=True)
    name = db.Column(db.String, nullable=False)

    # I actually dont' know if I did this relationship right
    users = db.relationship("User", back_populates="titles")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }
