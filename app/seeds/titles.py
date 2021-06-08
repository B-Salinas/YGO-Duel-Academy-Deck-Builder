from app.models import db, Title


def seed_titles():

    apprentice = Title(name="Apprentice Duelist")
    db.session.add(apprentice)

    average = Title(name="Average Duelist")
    db.session.add(average)

    fiery = Title(name="Fiery Duelist")
    db.session.add(fiery)

    calm = Title(name="Calm Duelist")
    db.session.add(calm)

    superior = Title(name="Superior Duelist")
    db.session.add(superior)

    honored = Title(name="Honored Duelist")
    db.session.add(honored)

    elite = Title(name="Elite Duelist")
    db.session.add(elite)

    prince = Title(name="Prince of Games")
    db.session.add(prince)

    king = Title(name="King of Games")
    db.session.add(king)

    db.session.commit()


def undo_titles():
    db.session.execute('TRUNCATE titles RESTART IDENTITY CASCADE;')
    db.session.commit()
