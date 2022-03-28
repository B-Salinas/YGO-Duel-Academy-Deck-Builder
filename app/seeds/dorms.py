from app.models import db, Dorm

DORMS = [
  "Slifer Red Dorm",
  "Ra Yellow Dorm",
  "Obelisk Blue Dorm"
]

def seed_dorms():
  for dorm in DORMS:
    new_dorm = Dorm(
      name = dorm
    )

    db.session.add(new_dorm)

  db.session.commit()

def undo_dorms():
  db.session.execute("TRUNCATE dorms RESTART IDENTITY CASCADE;")
  db.session.commit()
