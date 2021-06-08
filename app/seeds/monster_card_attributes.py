from operator import attrgetter

from flask_sqlalchemy import _wrap_with_default_query_class
from app.models import db, Monster_Card_Attribute


def seed_monster_card_attributes():

    dark = Monster_Card_Attribute(attribute="Dark")
    db.session.add(dark)

    earth = Monster_Card_Attribute(attribute="Earth")
    db.sesion.add(earth)

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


def undo_monster_card_attributes():
    db.session.execute('TRUNCATE monster_card_attributes RESTART IDENTITY CASCADE;')
    db.session.commit()
