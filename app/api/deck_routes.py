from flask import Blueprint, jsonify, request
from app.models import db, Deck
from flask_login import current_user
from app.forms import NewDeckForm

deck_routes = Blueprint("decks", __name__)
#  /api/decks...

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field}: {error}")
    return errorMessages







# D E C K S
@deck_routes.route('/')
def get_all_decks():
    decks = Deck.query.all()
    return jsonify([deck.to_dict() for deck in decks])

# @deck_routes.route('/', methods=["POST"])
# def add_new_deck(user_id):
#     print("hello, this is right after the function executes!")
#     form = NewDeckForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
    
#     if form.validate_on_submit():
#         data = form.data
#         new_deck = Deck(
#             deckName = data['deckName'],
#             user_id = data['user_id']
#         )
        
#         db.session.add(new_deck)
#         db.session.commit()

#         return new_deck.to_dict()
    
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@deck_routes.route('/<int:id>')
def get_one_deck(id):
    deck = Deck.query.get(id)
    return deck.to_dict() # returns deck informaiton: id, name, user_id

@deck_routes.route('/<int:id>', methods=["DELETE"])
def delete_deck(id):
    delete_deck = Deck.query.get(id) # I think I have t ouse the user to grab the deck that belongs to them? 
    db.session.delete(delete_deck)
    db.session.commit()
    return {"success": "success"}

# D E C K   C A R D S 
@deck_routes.route('/<int:deck_id>/all')
def get_all_cards_in_deck(deck_id):
    deck = Deck.query.get(deck_id)
    return jsonify([card.to_dict() for card in deck.cards])
