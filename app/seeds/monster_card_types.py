from app.models import db, Monster_Card_Type

def seed_monster_card_types():
    
    # 1
    effect = Monster_Card_Type(_type="Effect")
    db.session.add(effect)


    # 2
    fusion = Monster_Card_Type(_type="Fusion")
    db.session.add(fusion)


    # 3
    normal = Monster_Card_Type(_type="Normal")
    db.session.add(normal)


    # 4
    ritual = Monster_Card_Type(_type="Ritual")
    db.session.add(ritual)




    db.session.commit()


def undo_monster_card_types():    
    db.session.execute('TRUNCATE monster_card_types RESTART IDENTITY CASCADE;')
    db.session.commit()
