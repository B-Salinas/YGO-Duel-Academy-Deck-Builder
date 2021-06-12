from app.models import db, Monster_Card
from flask import Blueprint, jsonify

monster_card_routes = Blueprint('monster_cards', __name__)

@monster_card_routes.route('/')
def all_monster_cards():
    monster_cards = Monster_Card.query.all()
    return jsonify([monster_card.to_dict() for monster_card in monster_cards])

@monster_card_routes.route('/<int:id>')
def one_monster_card(id):
    monster_card = Monster_Card.query.get(id)
    return monster_card.to_dict()
