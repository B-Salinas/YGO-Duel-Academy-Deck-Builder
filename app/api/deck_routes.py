from app.models import db, Deck
from flask import Blueprint, jsonify

deck_routes = Blueprint("decks", __name__)

@deck_routes.route('/')
def all_decks():
    decks = Deck.query.all()
    return jsonify([deck.to_dict() for deck in decks])

@deck_routes.route('/', methods=["POST"])
def all_decks():
    # I DONT EVEN KNOW HOW TO BEGIN THIS ROUTE
    decks = Deck.query.all()
    return jsonify([deck.to_dict() for deck in decks])

@deck_routes.route('/<int:id>')
def one_deck(id):
    deck = Deck.query.get(id)
    return deck.to_dict() # returns deck informaiton: id, name, user_id

@deck_routes.route('/<int:id>', methods=["DELETE"])
def one_deck(id):
    delete_deck = Deck.query.get(id) # I think I have t ouse the user to grab the deck that belongs to them? 
    db.session.delete(delete_deck)
    db.session.commit()
    return {"success": "success"}