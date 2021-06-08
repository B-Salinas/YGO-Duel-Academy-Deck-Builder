from app.models import db, Spell_Trap_Card_Type


def seed_spell_trap_card_types():

    spell = Spell_Trap_Card_Type(type="Spell")
    db.session.add(spell)

    trap = Spell_Trap_Card_Type(type="Trap")
    db.session.add(trap)

    db.session.commit()


def undo_spell_trap_card_types():
    db.session.execute('TRUNCATE spell_trap_card_types RESTART IDENTITY CASCADE;')
    db.session.commit()
    
