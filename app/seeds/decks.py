import json
from app.models import db, Deck, Card, User_Card, User_Deck_Card

with open("./app/seeds/card_data/starter_decks.json", "r") as decks_json:
  starter_deck_data = json.load(decks_json)

def seed_decks():
  demo_user_id = 1
  demo_fire_starter_card_ids = []
  demo_water_starter_card_ids = []
  demo_wind_starter_card_ids = []

  for card in starter_deck_data["fire"]:
    card_ref = Card.query.filter(Card.name.ilike(f"{card['name']}")).one()
    new_user_card = User_Card(
      user_id = demo_user_id,
      card_id = card_ref.id,
      total_quantity = card["qty"]
    )
    
    db.session.add(new_user_card)
    demo_fire_starter_card_ids.append(card_ref.id)
  
  fire_deck = Deck(
    user_id = demo_user_id,
    deck_name = "Fire"
  )
  
  db.session.add(fire_deck)
  db.session.commit()

  for card_id in demo_fire_starter_card_ids:
    card_ref = User_Card.query.filter(User_Card.card_id == card_id).one()
    new_user_deck_card = User_Deck_Card(
      user_card_id = card_ref.id,
      deck_id = fire_deck.id,
      quantity = card_ref.total_quantity
    )

    db.session.add(new_user_deck_card)

  db.session.commit()


  for card in starter_deck_data["water"]:
    card_ref = Card.query.filter(Card.name.ilike(f"{card['name']}")).one()
    user_card_exists = User_Card.query.filter(User_Card.card_id == card_ref.id).first()


    if user_card_exists is None:
      new_user_card = User_Card(
        user_id = demo_user_id,
        card_id = card_ref.id,
        total_quantity = card["qty"]
      )
      
      db.session.add(new_user_card)
      demo_water_starter_card_ids.append(card_ref.id)

  water_deck = Deck(
    user_id = demo_user_id,
    deck_name = "Water"
  )

  db.session.add(water_deck)
  db.session.commit()

  for card_id in demo_water_starter_card_ids:
    card_ref = User_Card.query.filter(User_Card.card_id == card_id).one()
    new_user_deck_card = User_Deck_Card(
      user_card_id = card_ref.id,
      deck_id = water_deck.id,
      quantity = card_ref.total_quantity
    )

    db.session.add(new_user_deck_card)

  db.session.commit()

  for card in starter_deck_data["wind"]:
    card_ref = Card.query.filter(Card.name.ilike(f"{card['name']}")).one()
    user_card_exists = User_Card.query.filter(User_Card.card_id == card_ref.id).first()

    if user_card_exists is None:
      new_user_card = User_Card(
        user_id = demo_user_id,
        card_id = card_ref.id,
        total_quantity = card["qty"]
      )
      
      db.session.add(new_user_card)
      demo_wind_starter_card_ids.append(card_ref.id)

  wind_deck = Deck(
    user_id = demo_user_id,
    deck_name = "Wind"
  )

  db.session.add(wind_deck)
  db.session.commit()

  for card_id in demo_wind_starter_card_ids:
    card_ref = User_Card.query.filter(User_Card.card_id == card_id).one()
    new_user_deck_card = User_Deck_Card(
      user_card_id = card_ref.id,
      deck_id = wind_deck.id,
      quantity = card_ref.total_quantity
    )

    db.session.add(new_user_deck_card)

  db.session.commit()

def undo_decks():
  db.session.execute("TRUNCATE decks RESTART IDENTITY CASCADE;")
  db.session.commit()
