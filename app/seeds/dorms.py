from app.models import db, Dorm


def seed_dorms():

    # 1
    slifer = Dorm(name="Slifer Red")
    db.session.add(slifer)


    # 2
    ra = Dorm(name="Ra Yellow")
    db.session.add(ra)


    # 3
    obelisk = Dorm(name="Obelisk Blue")
    db.session.add(obelisk)




    db.session.commit()


def undo_dorms():
    db.session.execute('TRUNCATE dorms RESTART IDENTITY CASCADE;')
    db.session.commit()
