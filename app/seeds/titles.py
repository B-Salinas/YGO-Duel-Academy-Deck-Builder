from app.models import db, Title

TITLES = [
  "Apprentice Duelist",
  "Average Duelist",
  "Fiery Duelist",
  "Calm Duelist",
  "Superior Duelist",
  "Honored Duelist",
  "Elite Duelist",
  "Prince of Games",
  "King of Games"
]

def seed_titles():
  for title in TITLES:
    new_title = Title(
      name = title
    )

    db.session.add(new_title)
  
  db.session.commit()

def undo_titles():
  db.session.execute("TRUNCATE titles RESTART IDENTITY CASCADE;")
  db.session.commit()
