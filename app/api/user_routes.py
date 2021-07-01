from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

user_routes = Blueprint('users', __name__)

#  USER ROUTES

@user_routes.route('/')
# @login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
# @login_required
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

@user_routes.route('/<int:id>/decks')
def decks(id):
    user = User.query.get(id)
    return jsonify([deck.to_dict() for deck in user.decks])

@user_routes.route('/<int:id>/decks/cards')
def deck_cards(user_id, deck_id):
    user = User.query.get(user_id)
    deck = User.decks(deck_id)

    return jsonify([card.to_dict() for card in deck])