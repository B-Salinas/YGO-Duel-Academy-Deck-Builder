from app.models import db, Deck, deck
from flask import Blueprint, jsonify

deck_routes = Blueprint("decks", __name__)

@deck_routes.route('/')
def all_decks():
    decks = Deck.query.all()
    return jsonify([deck.to_dict() for deck in decks])

@deck_routes.route('/<int:id>')
def one_deck(id):
    deck = Deck.query.get(id)
    return deck.to_dict()