from app.models import db, Title


def seed_titles():

    # 1
    apprentice = Title(name="Apprentice Duelist")
    db.session.add(apprentice)


    # 2
    average = Title(name="Average Duelist")
    db.session.add(average)


    # 3
    fiery = Title(name="Fiery Duelist")
    db.session.add(fiery)


    # 4
    calm = Title(name="Calm Duelist")
    db.session.add(calm)


    # 5
    superior = Title(name="Superior Duelist")
    db.session.add(superior)


    # 6
    honored = Title(name="Honored Duelist")
    db.session.add(honored)


    # 7
    elite = Title(name="Elite Duelist")
    db.session.add(elite)


    # 8
    prince = Title(name="Prince of Games")
    db.session.add(prince)


    # 9
    king = Title(name="King of Games")
    db.session.add(king)




    db.session.commit()


def undo_titles():
    db.session.execute('TRUNCATE titles RESTART IDENTITY CASCADE;')
    db.session.commit()
