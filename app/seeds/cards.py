from app.models import db, Monster_Card, Spell_Trap_Card

from urllib.request import Request, urlopen
from urllib.parse import urlencode, unquote
from json import loads

import json

# KEEP THESE
useragent = "Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion"
headers = {
    "User-Agent": useragent
}

def get_all_api_cards():
    all_api_cards_data = urlopen(Request("https://db.ygoprodeck.com/api/v7/cardinfo.php", headers=headers)).read().decode("UTF-8")
    return all_api_cards_data

def get_all_gba_cards():
    with open("yugioh.json") as all_gba_cards_data:
        all_gba_cards = json.load(all_gba_cards_data)
        all_gba_cards_data.close()

    return all_gba_cards
    
def get_all_cards():
    api_cards = get_all_api_cards()
    gba_cards = get_all_gba_cards()

    print(type(api_cards))
    
    for cards in api_cards:
        pass

    for info in gba_cards:
        card_id = info
        card_name = gba_cards[info]
        # print(card_id)
        # print(card_name)

# get_all_api_cards()
# get_all_gba_cards()

get_all_cards()

# -----------------------------------------------------------------------

def seed_all_cards():

    url_reg = f"https://storage.googleapis.com/ygoprodeck.com/pics/{card_id}.jpg"
    url_small = f"https://storage.googleapis.com/ygoprodeck.com/pics_small/{card_id}.jpg"

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


    # 5
    card5 = Spell_Trap_Card(
        user_id=1,
        card_id=49140998,
        name="A Feather of the Phoenix",
        _type=1,
        desc="Discard 1 card, then target 1 card in your Graveyard; return that target to the top of your Deck.",
        race=5,
        img_url=url_reg,
        img_url_small=url_small
    )
    db.session.add(card5)




    db.session.commit()


def undo_all_cards():
    db.session.execute('TRUNCATE all_cards RESTART IDENTITY CASCADE;')
    db.session.commit()
