from app.models import db, Deck


def seed_decks():

    starter_fire = Deck(
        name="Fire",
        user_id=1
    )
    db.session.add(starter_fire)


    starter_water = Deck(
        name="Water",
        user_id=1
    )
    db.session.add(starter_water)

    starter_wind = Deck(
        name="Wind",
        user_id=1
    )
    db.session.add(starter_wind)

    starter_static = Deck(
        name="Static",
        user_id=1
    )
    db.session.add(starter_static)



    db.session.commit()


def undo_decks():
    db.session.execute('TRUNCATE decks RESTART IDENTITY CASCADE;')
    db.session.commit()

