
# from app.models import db, Monster_Card, Spell_Trap_Card

from urllib.request import Request, urlopen
from urllib.parse import urlencode, unquote
from json import loads

import json

from time import sleep

# KEEP THESE
useragent = "Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion"
headers = {
    "User-Agent": useragent
}

def get_api_card(card_id):
    # sleep(0.04) # just in case
    api_card_data = urlopen(Request(f"https://db.ygoprodeck.com/api/v7/cardinfo.php?id={card_id}", headers=headers)).read().decode("UTF-8")
    return api_card_data

def get_all_gba_cards():
    with open("yugioh.json") as all_gba_cards_data:
        all_gba_cards = loads(all_gba_cards_data.read())

    return all_gba_cards
    
def get_all_cards():
    # api_cards = get_all_api_cards()
    gba_cards = get_all_gba_cards()
    # all_cards = [get_api_card(card_id) for card_id in gba_cards]

    all_gba_cards_info = open("all_gba_cards.json", "w")
    failed_cards = open("failed_cards.txt", "w")
    for id in gba_cards:
        try:
            all_gba_cards_info.write(get_api_card(id) + ',\n')
        except:
            failed_cards.write(id + ',\n')
            

        


# get_api_card()
# get_all_gba_cards()

get_all_cards()

# -----------------------------------------------------------------------

def seed_all_cards():

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
        img_url="https://storage.googleapis.com/ygoprodeck.com/pics/49140998.jpg",
        img_url_small="https://storage.googleapis.com/ygoprodeck.com/pics_small/49140998.jpg"
    )
    db.session.add(card5)


    # 6
    card6 = Spell_Trap_Card(
        user_id=1,
        card_id=21597117,
        name="A Hero Emerges",
        _type=2,
        desc="When an opponent's monster declares an attack: Your opponent chooses 1 random card from your hand, then if it is a monster that can be Special Summoned, Special Summon it. Otherwise, send it to the Graveyard.",
        race=5,
        img_url="https://storage.googleapis.com/ygoprodeck.com/pics/21597117.jpg",
        img_url_small="https://storage.googleapis.com/ygoprodeck.com/pics_small/21597117.jpg"
    )
    db.session.add(card6)


    # 7
    card7 = Spell_Trap_Card(
        user_id=1,
        card_id=295517,
        name="A Legendary Ocean",
        _type=1,
        desc="(This card's name is always treated as \"Umi\".)\r\nAll WATER monsters on the field gain 200 ATK/DEF. Reduce the Level of all WATER monsters in both players' hands and on the field by 1.",
        race=4,
        img_url="https://storage.googleapis.com/ygoprodeck.com/pics/295517.jpg",
        img_url_small="https://storage.googleapis.com/ygoprodeck.com/pics_small/295517.jpg"
    )
    db.session.add(card7)


    # 8
    card8 = Spell_Trap_Card(
        user_id=1,
        card_id=5728014,
        name="A Rival Appears!",
        _type=2,
        desc="Select 1 face-up monster your opponent controls. Special Summon 1 monster from your hand that has the same Level as the selected monster.",
        race=5,
        img_url="https://storage.googleapis.com/ygoprodeck.com/pics/5728014.jpg",
        img_url_small="https://storage.googleapis.com/ygoprodeck.com/pics_small/5728014.jpg"
    )
    db.session.add(card8)

    # 9
    card9 = Monster_Card(
        user_id=1,
        card_id=13026402,
        name="A-Team: Trap Disposal Unit",
        _type=1,
        desc="This effect can be used during either player's turn. When your opponent activates a Trap Card, Tribute this face-up card to negate the activation of the Trap Card and destroy it.",
        atk=300,
        _def=400,
        level=2,
        race=12,
        attribute=4,
        img_url="https://storage.googleapis.com/ygoprodeck.com/pics/13026402.jpg",
        img_url_small="https://storage.googleapis.com/ygoprodeck.com/pics_small/13026402.jpg"
    )
    db.session.add(card9)

    # 10
    card10 = Monster_Card(
        user_id=1,
        card_id=89718302,
        name="Abare Ushioni",
        _type=1,
        desc="Once per turn, you can toss a coin and call it. If you call it right, inflict 1000 damage to your opponent. If you call it wrong, you take 1000 damage.",
        atk=1200,
        _def=1200,
        level=4,
        race=12,
        attribute=3,
        img_url="https://storage.googleapis.com/ygoprodeck.com/pics/89718302.jpg",
        img_url_small="https://storage.googleapis.com/ygoprodeck.com/pics_small/89718302.jpg"
    )
    db.session.add(card10)

    # Next Card: 49771608 - Absorbing Kid from the Sky

    db.session.commit()


def undo_all_cards():
    db.session.execute('TRUNCATE all_cards RESTART IDENTITY CASCADE;')
    db.session.commit()
