from app.models import db, User, Deck, Monster_Card, Spell_Trap_Card
from urllib.request import Request, urlopen
from urllib.parse import urlencode, unquote
from json import loads

import os

useragent = "Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion"
headers = {
    "User-Agent": useragent
}

#  I dont think I should use the API route 
def get_api_card(card_id):
    api_card_data = urlopen(Request(f"https://db.ygoprodeck.com/api/v7/cardinfo.php?id={card_id}", headers=headers)).read().decode("UTF-8")
    return api_card_data

def get_all_fire_cards_from_id():
    with open("fire_deck_card_ids.json") as all_fire_cards_data:
        all_fire_deck_cards = loads(all_fire_cards_data.read())

    return all_fire_deck_cards

def get_all_fire_deck_cards():
    all_fire_deck_cards = get_all_fire_cards_from_id()

    all_fire_deck_cards_info = open("fire_deck_cards.json", "w")
    failed_cards = open("failed_cards.json", "w")
    for id in all_fire_deck_cards:
        try:
            all_fire_deck_cards_info.write(get_api_card(id) + ',\n')
        except:
            failed_cards.write(id + ',\n')
            
get_api_card()
get_all_fire_cards_from_id()
get_all_fire_deck_cards()

# -----------------------------------------------------------------------

def seed_deck_cards():

    fire = Deck.query.get(1)

    absolute_path = os.path.dirname(os.path.abspath(__file__))

    fire_deck = loads(open(absolute_path + "/fire_deck_cards.json").read())
    
    for card in fire_deck:

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

            fire.monster_cards = Monster_Card(**monster_card)

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

            fire.spell_trap_cards = Spell_Trap_Card(**spell_trap_card)

    db.session.add(fire)






    db.session.commit()