# from app.models import db, Monster_Card, Spell_Trap_Card
from urllib.request import Request, urlopen
from urllib.parse import urlencode, unquote
from json import loads

# KEEP THESE
useragent = "Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion"
headers = {
    "User-Agent": useragent
}

def whatever():
    all_cards_data = urlopen(Request("https://db.ygoprodeck.com/api/v7/cardinfo.php", headers=headers)).read().decode("UTF-8")
    print(loads(all_cards_data))


whatever()
