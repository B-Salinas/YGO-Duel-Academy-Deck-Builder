from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Deck

user_routes = Blueprint('users', __name__)
trunK_routes = Blueprint('trunk_cards', __name__)

# U S E R 

@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


# TRUNK ROUTES  
# This might not work because what if a user wants to get a specific card from there trunk -- thats 2 ids, how do i pass that?
@user_routes.route('/<int:id>/trunk')
def trunk(id):
    user = User.query.get(id)
    return jsonify([card.to_dict() for card in user.cards])


# DECK ROUTES  

#  all of the user's decks
@user_routes.route('/<int:id>/decks')
def all_user_decks(id):
    user = User.query.get(id)
    return jsonify([deck.to_dict() for deck in user.decks])

#  only 1 user deck
@user_routes.route('/<int:user_id>/decks/<int:deck_id>')
def one_user_deck(user_id, deck_id):
    user = User.query.get(user_id)

    for deck in user.decks:
        if deck.id == deck_id:
            return jsonify(deck.to_dict())

#  THIS BREAKS BECAUSE FOR EVERY NEW USER, THE DECK IDS DO NOT RESTART
#  the demo has 4 decks but the next person only has 1 but the deck_id is not 1, its 5

#  only cards from 1 user deck
@user_routes.route('/<int:user_id>/decks/<int:deck_id>/cards')
def all_deck_cards(user_id, deck_id):
    user = User.query.get(user_id)

    for deck in user.decks:
        if deck.id == deck_id:
            return jsonify([card.to_dict() for card in deck.cards])

# this is just getting REALLY ugly and I dont like how the route looks, is there a better way to do this???/


#  only 1 card from 1 user deck
@user_routes.route('/<int:user_id>/decks/<int:deck_id>/cards/<int:card_id>')
def one_deck_card(user_id, deck_id, card_id):
    user = User.query.get(user_id)

    for deck in user.decks:
        if deck.id == deck_id:
            for card in deck.cards:
                if card.id == card_id:
                    return jsonify(card)