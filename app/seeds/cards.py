# from app.models import db, Monster_Card, Spell_Trap_Card
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
