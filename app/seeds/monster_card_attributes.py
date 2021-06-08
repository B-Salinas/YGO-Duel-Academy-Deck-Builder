from app.models import db, Monster_Card_Attribute


def seed_monster_card_attributes():

    dark = Monster_Card_Attribute(attribute="Dark")
    db.session.add(dark)

    earth = Monster_Card_Attribute(attribute="Earth")
    db.session.add(earth)

    fire = Monster_Card_Attribute(attribute="Fire")
    db.session.add(fire)

    light = Monster_Card_Attribute(attribute="Light")
    db.session.add(light)

    water = Monster_Card_Attribute(attribute="Water")
    db.session.add(water)

    wind = Monster_Card_Attribute(attribute="Wind")
    db.session.add(wind)

    divine = Monster_Card_Attribute(attribute="Divine")
    db.session.add(divine)

    db.session.commit()


def undo_monster_card_attributes():
    db.session.execute('TRUNCATE monster_card_attributes RESTART IDENTITY CASCADE;')
    db.session.commit()
