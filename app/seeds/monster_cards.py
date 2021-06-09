from app.models import db, Monster_Card

def seed_monster_cards():

    card1 = Monster_Card(
        user_id=1,
        card_id=83994646,
        name="4-Starred Ladybug of Doom"
        _type="Effect"
        desc="FLIP: Destroy all Level 4 monsters your opponent controls.",
        atk=800,
        _def=1200,
        level=3, # not done
        
    )
