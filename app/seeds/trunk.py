from app.models import db, User, Monster_Card, Spell_Trap_Card

def seed_trunk():

    demo = User.query.get(1)
    demo.monster_cards = Monster_Card.query.all()
    demo.spell_trap_cards = Spell_Trap_Card.query.all()

    db.session.commit()



def undo_trunk():
    db.session.execute('TRUNCATE user_monster_cards RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE user_spell_trap_cards RESTART IDENTITY CASCADE;')

    db.session.commit()
