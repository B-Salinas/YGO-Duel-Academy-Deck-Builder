from app.models import db, Monster_Card, Monster_Card_Type, Monster_Card_Race, Monster_Card_Attribute
from app.models import Spell_Trap_Card, Spell_Trap_Card_Type, Spell_Trap_Card_Race

# from urllib.request import Request, urlopen
# from urllib.parse import urlencode, unquote
from json import loads

import os

# from time import sleep

# KEEP THESE
# useragent = "Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion"
# headers = {
#     "User-Agent": useragent
# }

# def get_api_card(card_id):
#     api_card_data = urlopen(Request(f"https://db.ygoprodeck.com/api/v7/cardinfo.php?id={card_id}", headers=headers)).read().decode("UTF-8")
#     return api_card_data

# def get_all_gba_cards():
#     with open("yugioh.json") as all_gba_cards_data:
#         all_gba_cards = loads(all_gba_cards_data.read())

#     return all_gba_cards
    
# def get_all_cards():
#     gba_cards = get_all_gba_cards()

#     all_gba_cards_info = open("all_gba_cards.json", "w")
#     failed_cards = open("failed_cards.json", "w")
#     for id in gba_cards:
#         try:
#             all_gba_cards_info.write(get_api_card(id) + ',\n')
#         except:
#             failed_cards.write(id + ',\n')
            
# get_api_card()
# get_all_gba_cards()
# get_all_cards()

# -----------------------------------------------------------------------

def card_creator(card):
    if card["_type"][-7:] == "Monster":
        monster_card = {
            "card_id": card["id"],
            "name": card["name"],
            "_type": card['_type'],
            "desc": card["desc"],
            "atk": card["atk"],
            "_def": card["_def"],
            "level": card["level"],
            "race": card['race'],
            "attribute": card['attribute'],
            "img_url": card["card_images"][0]["image_url"],
            "img_url_small": card["card_images"][0]["image_url_small"]
        }

        return Monster_Card(**monster_card)

    if card["_type"][-4:] == "Card":
        spell_trap_card = {
            "card_id": card["id"],
            "name": card["name"],
            "_type": card['_type'],
            "desc": card["desc"],
            "race": card['race'],
            "img_url": card["card_images"][0]["image_url"],
            "img_url_small": card["card_images"][0]["image_url_small"]
        }

        return Spell_Trap_Card(**spell_trap_card)


def seed_all_cards():

    absolute_path = os.path.dirname(os.path.abspath(__file__))

    all_cards = loads(open(absolute_path + "/all_gba_cards.json").read())
    # all_cards = [card["data"][0] for card in all_cards]

    for card in all_cards:
        db.session.add(card_creator(card["data"][0]))
    
    db.session.commit()


def undo_all_cards():
    db.session.execute('TRUNCATE monster_cards RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE spell_trap_cards RESTART IDENTITY CASCADE;')

    db.session.commit()
