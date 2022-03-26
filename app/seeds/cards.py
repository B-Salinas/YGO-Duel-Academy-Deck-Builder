import json
from app.models import db, Card

with open("./app/seeds/card_data/gba_card_list.json", "r") as card_json:
  card_data = json.load(card_json)

def seed_cards():
  for card in card_data:
    card_archetype = card["archetype"] if "archetype" in card else None
    card_level = card["level"] if "level" in card else None
    card_atk = card["atk"] if "atk" in card else None
    card_def = card["def"] if "def" in card else None
    card_attr = card["attribute"] if "attribute" in card else None

    new_card = Card(
      official_id = card['id'],
      name = card['name'],
      card_type = card['type'],
      desc = card['desc'],
      attack = card_atk,
      defense = card_def,
      level = card_level,
      race = card['race'],
      attribute = card_attr,
      archetype = card_archetype,
      card_img = card['card_images'][0]['image_url'],
      card_img_small = card['card_images'][0]['image_url_small']
    )
    db.session.add(new_card)

  db.session.commit()

def undo_cards():
  db.session.execute("TRUNCATE cards RESTART IDENTITY CASCADE;")
  db.session.commit()
