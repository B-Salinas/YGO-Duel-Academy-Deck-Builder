from flask import Blueprint, jsonify, session, request
from app.models import Monster_Card, db

monster_card_routes = Blueprint('monster_cards', __name__)

@monster_card_routes.route('/')
def all_monster_cards():
    monster_cards = Monster_Card.query.all()
    return {"monster_cards": [monster_card.to_dict() for monster_card in monster_cards]}


