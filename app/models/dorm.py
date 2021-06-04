from .db import db, today


class Dorm(db.Model):
    __tablename__ = 'dorms'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=today)
    updated_at = db.Column(db.DateTime, nullable=False, default=today)

    # I actually dont' know if I did this relationship right
    users = db.relationship("User", back_populates="dorms")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }
