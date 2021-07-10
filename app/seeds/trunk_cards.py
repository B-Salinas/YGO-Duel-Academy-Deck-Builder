from app.models import db, User, Monster_Card, Spell_Trap_Card

def seed_trunk_cards():

    demo = User.query.get(1)
    demo.monster_cards = Monster_Card.query.all()
    demo.spell_trap_cards = Spell_Trap_Card.query.all()

    jaden = User.query.get(2)
    jaden.monster_cards = Monster_Card.query.all()
    jaden.spell_trap_cards = Spell_Trap_Card.query.all()

    yugi = User.query.get(3)
    yugi.monster_cards = Monster_Card.query.all()
    yugi.spell_trap_cards = Spell_Trap_Card.query.all()

    db.session.commit()




def undo_trunk_cards():
    db.session.execute('TRUNCATE user_monster_cards RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE user_spell_trap_cards RESTART IDENTITY CASCADE;')

    db.session.commit()
