from .db import db


class Dorm(db.Model):
    __tablename__ = 'dorms'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)

    # I actually dont' know if I did this relationship right
    users = db.relationship("User", back_populates="dorms")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }