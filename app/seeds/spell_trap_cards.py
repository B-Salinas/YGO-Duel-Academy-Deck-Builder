from app.models import db, Spell_Trap_Card


def seed_all_spell_trap_cards():

    # url_reg = f"https://storage.googleapis.com/ygoprodeck.com/pics/{card_id}.jpg"
    # url_small = f"https://storage.googleapis.com/ygoprodeck.com/pics_small/{card_id}.jpg"

    # 2
    card2 = Spell_Trap_Card(
        user_id=1,
        card_id=67048711,
        name="7",
        _type=1,
        desc="When there are 3 face-up \"7\" cards on your side of the field, draw 3 cards from your Deck. Then destroy all \"7\" cards. When this card is sent directly from the field to your Graveyard, increase your Life Points by 700 points.",
        race=1,
        img_url="https://storage.googleapis.com/ygoprodeck.com/pics/67048711.jpg",
        img_url_small="https://storage.googleapis.com/ygoprodeck.com/pics_small/67048711.jpg"
    )
    db.session.add(card2)

    # 5
    card5 = Spell_Trap_Card(
        user_id=1,
        card_id=49140998,
        name="A Feather of the Phoenix",
        _type=1,
        desc="Discard 1 card, then target 1 card in your Graveyard; return that target to the top of your Deck.",
        race=5,
        img_url="https://storage.googleapis.com/ygoprodeck.com/pics/49140998.jpg",
        img_url_small="https://storage.googleapis.com/ygoprodeck.com/pics_small/49140998.jpg"
    )
    db.session.add(card5)


    
    db.session.commit()


def undo_all_spell_trap_cards():
    db.session.execute('TRUNCATE all_spell_trap_cards RESTART IDENTITY CASCADE;')
    db.session.commit()
