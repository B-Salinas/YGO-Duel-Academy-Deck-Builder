from app.models import db, Spell_Trap_Card_Race

def seed_spell_trap_card_races():

    # 1 - Spell / Trap 
    continuous = Spell_Trap_Card_Race(race="Continuous")
    db.session.add(continuous)

    
    # 2 - Trap
    counter = Spell_Trap_Card_Race(race="Counter")
    db.session.add(counter)


    # 3 - Spell
    equip = Spell_Trap_Card_Race(race="Equip")
    db.session.add(equip)


    # 4 - Spell
    field = Spell_Trap_Card_Race(race="Field")
    db.session.add(field)


    # 5 - Spell / Trap
    normal = Spell_Trap_Card_Race(race="Normal")
    db.session.add(normal)


    # 6 - Spell 
    ritual = Spell_Trap_Card_Race(race="Ritual")
    db.session.add(ritual)


    # 7 - Spell
    quick_play = Spell_Trap_Card_Race(race="Quick-Play")
    db.session.add(quick_play)

    


    db.session.commit()


def undo_spell_trap_card_races():
    db.session.execute('TRUNCATE spell_trap_card_races RESTART IDENTITY CASCADE;')
    db.session.commit()


