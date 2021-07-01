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

    elemental_hero = Deck(
        name="Elemental Hero",
        user_id=2
    )
    db.session.add(elemental_hero)

    duelist_kingdom = Deck(
        name="Duelist Kingdom",
        user_id=3
    )
    db.session.add(duelist_kingdom)



    db.session.commit()


def undo_decks():
    db.session.execute('TRUNCATE decks RESTART IDENTITY CASCADE;')
    db.session.commit()

