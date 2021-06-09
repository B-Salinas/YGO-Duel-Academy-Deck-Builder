from app.models import db, Monster_Card

def seed_all_monster_cards():

    # url_reg = f"https://storage.googleapis.com/ygoprodeck.com/pics/{card_id}.jpg"
    # url_small = f"https://storage.googleapis.com/ygoprodeck.com/pics_small/{card_id}.jpg"

    # 1
    card1 = Monster_Card(
        user_id=1,
        card_id=83994646,
        name="4-Starred Ladybug of Doom",
        _type=1,
        desc="FLIP: Destroy all Level 4 monsters your opponent controls.",
        atk=800,
        _def=1200,
        level=3,
        race=11,
        attribute=7,
        img_url="https://storage.googleapis.com/ygoprodeck.com/pics/83994646.jpg",
        img_url_small="https://storage.googleapis.com/ygoprodeck.com/pics_small/83994646.jpg"
    )
    db.session.add(card1)

    # 3
    card3 = Monster_Card(
        user_id=1,
        card_id=23771716,
        name="7 Colored Fish",
        _type=3,
        desc="A rare rainbow fish that has never been caught by mortal man.",
        atk=1800,
        _def=800,
        level=4,
        race=10,
        attribute=6,
        img_url="https://storage.googleapis.com/ygoprodeck.com/pics/23771716.jpg",
        img_url_small="https://storage.googleapis.com/ygoprodeck.com/pics_small/23771716.jpg"
    )
    db.session.add(card3)

    # 4
    card4 = Monster_Card(
        user_id=1,
        card_id=14261867,
        name="8-Claws Scorpion",
        _type=1,
        desc="Once per turn, you can flip this card into face-down Defense Position. When this card attacks an opponent's face-down Defense Position monster, this card's ATK becomes 2400 during damage calculation only.",
        atk=300,
        _def=200,
        level=2,
        race=11,
        attribute=1,
        img_url="https://storage.googleapis.com/ygoprodeck.com/pics/14261867.jpg",
        img_url_small="https://storage.googleapis.com/ygoprodeck.com/pics_small/14261867.jpg"
    )
    db.session.add(card4)


    db.session.commit()

def undo_all_monster_cards():
    db.session.execute('TRUNCATE all_monster_cards RESTART IDENTITY CASCADE;')
    db.session.commit()
