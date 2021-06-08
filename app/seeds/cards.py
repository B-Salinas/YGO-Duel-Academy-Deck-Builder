from app.models import db, Monster_Card, Spell_Trap_Card
from urllib.request import Request, urlopen
from urllib.parse import urlencode, unquote
from json import loads


def whatever():
    all_cards_data = urlopen("https://db.ygoprodeck.com/api/v7/cardinfo.php").read().decode("UTF-8")
    
