from app.models import db, Spell_Trap_Card_Type


def seed_spell_trap_card_types():

    # 1
    spell = Spell_Trap_Card_Type(_type="Spell Card")
    db.session.add(spell)


    # 2
    trap = Spell_Trap_Card_Type(_type="Trap Card")
    db.session.add(trap)




    db.session.commit()


def undo_spell_trap_card_types():
    db.session.execute('TRUNCATE spell_trap_card_types RESTART IDENTITY CASCADE;')
    db.session.commit()
    
