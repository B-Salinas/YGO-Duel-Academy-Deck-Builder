from app.models import db, Monster_Card_Attribute


def seed_monster_card_attributes():

    dark = Monster_Card_Attribute(attribute="DARK")
    db.session.add(dark)

    earth = Monster_Card_Attribute(attribute="EARTH")
    db.session.add(earth)

    fire = Monster_Card_Attribute(attribute="FIRE")
    db.session.add(fire)

    light = Monster_Card_Attribute(attribute="LIGHT")
    db.session.add(light)

    water = Monster_Card_Attribute(attribute="WATER")
    db.session.add(water)

    wind = Monster_Card_Attribute(attribute="WIND")
    db.session.add(wind)

    divine = Monster_Card_Attribute(attribute="DIVINE")
    db.session.add(divine)

    db.session.commit()


def undo_monster_card_attributes():
    db.session.execute('TRUNCATE monster_card_attributes RESTART IDENTITY CASCADE;')
    db.session.commit()
