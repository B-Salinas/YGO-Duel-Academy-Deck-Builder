from app.models import db, Monster_Card_Type

def seed_monster_card_types():
    
    normal = Monster_Card_Type(_type="Normal")
    db.session.add(normal)

    effect = Monster_Card_Type(_type="Effect")
    db.session.add(effect)

    ritual = Monster_Card_Type(_type="Ritual")
    db.session.add(ritual)

    fusion = Monster_Card_Type(_type="Fusion")
    db.session.add(fusion)

    db.session.commit()


def undo_monster_card_types():    
    db.session.execute('TRUNCATE monster_card_types RESTART IDENTITY CASCADE;')
    db.session.commit()
