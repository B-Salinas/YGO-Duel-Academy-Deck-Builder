from app.models import db, Monster_Card_Attribute


def seed_monster_card_attributes():

    # 1
    dark = Monster_Card_Attribute(attribute="DARK")
    db.session.add(dark)


    # 2
    divine = Monster_Card_Attribute(attribute="DIVINE")
    db.session.add(divine)


    # 3
    earth = Monster_Card_Attribute(attribute="EARTH")
    db.session.add(earth)


    # 4
    fire = Monster_Card_Attribute(attribute="FIRE")
    db.session.add(fire)


    # 5
    light = Monster_Card_Attribute(attribute="LIGHT")
    db.session.add(light)


    # 6
    water = Monster_Card_Attribute(attribute="WATER")
    db.session.add(water)


    # 7
    wind = Monster_Card_Attribute(attribute="WIND")
    db.session.add(wind)

    
    

    db.session.commit()


def undo_monster_card_attributes():
    db.session.execute('TRUNCATE monster_card_attributes RESTART IDENTITY CASCADE;')
    db.session.commit()
