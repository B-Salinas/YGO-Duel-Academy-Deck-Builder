from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, User

user_routes = Blueprint('users', __name__)
#  /api/users...





# U S E R 

# all users
@user_routes.route('/')
@login_required
def get_all_users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}

# one user
@user_routes.route('/<int:id>')
@login_required
def get_one_user(id):
    user = User.query.get(id)
    return user.to_dict()








# T R U N K 

# all cards in trunk
@user_routes.route('/<int:user_id>/trunk')
def get_all_cards_from_trunk(user_id):
    user = User.query.get(user_id)
    return jsonify([card.to_dict() for card in user.cards])

# add card to trunk
@user_routes.route('/<int:user_id>/trunk', methods=["POST"])
def add_card_to_trunk(user_id, card_id):
    # I DONT EVEN KNOW HOW TO BEGIN THIS ROUTE
    # user = User.query.get(user_id)
    # return user.monster_cards
    pass





# T R U N K    C A R D S 

# one card in trunk 
@user_routes.route('/<int:user_id>/trunk/<int:card_id>')
def get_card_from_trunk(user_id, card_id):
    user = User.query.get(user_id)
    for card in user.cards:
        if card.id == card_id:
            return jsonify(card.to_dict())


# delete card from trunk 
@user_routes.route('/<int:user_id>/trunk/<int:card_id>', methods=["DELETE"])
def delete_card_from_trunk(user_id, monster_card_id):
    user = User.query.get(user_id)
    delete_monster_card = user.monster_cards.query.get(monster_card_id)
    db.session.delete(delete_monster_card)
    db.session.commit()
    return {"success": "success"}






# D E C K 

#  all user decks
@user_routes.route('/<int:user_id>/decks')
def get_all_user_decks(user_id):
    user = User.query.get(user_id)
    return jsonify([deck.to_dict() for deck in user.decks])

# add a deck to a user
@user_routes.route('/<int:user_id>/decks', methods=["POST"])
def add_deck_to_user(user_id, card_id):
    # I DONT EVEN KNOW HOW TO BEGIN THIS ROUTE
    # user = User.query.get(user_id)
    # return user.monster_cards
    pass

#  get one user deck
@user_routes.route('/<int:user_id>/decks/<int:deck_id>')
def get_one_user_deck(user_id, deck_id):
    user = User.query.get(user_id)

    for deck in user.decks:
        if deck.id == deck_id:
            return jsonify(deck.to_dict())

#  THIS BREAKS BECAUSE FOR EVERY NEW USER, THE DECK IDS DO NOT RESTART
#  the demo has 4 decks but the next person only has 1 but the deck_id is not 1, its 5

#  delete a deck
@user_routes.route('/<int:user_id>/decks/<int:deck_id>', methods=["DELETE"])
def delete_one_user_deck(user_id, deck_id):
    user = User.query.get(user_id)
    delete_user_deck = user.decks.query.get(deck_id)
    db.session.delete(delete_user_deck)
    db.session.commit()
    return {"success": "success"}







# D E C K   C A R D S

#  only cards from 1 user deck
@user_routes.route('/<int:user_id>/decks/<int:deck_id>/cards')
def get_all_cards_from_user_deck(user_id, deck_id):
    user = User.query.get(user_id)

    for deck in user.decks:
        if deck.id == deck_id:
            return jsonify([card.to_dict() for card in deck.cards])

#  add a card to a user's deck
@user_routes.route('/<int:user_id>/decks/<int:deck_id>/cards', methods=["POST"])
def add_card_to_user_deck(user_id, deck_id):
    user = User.query.get(user_id)

    for deck in user.decks:
        if deck.id == deck_id:
            return jsonify([card.to_dict() for card in deck.cards])


#  only 1 card from 1 user deck
@user_routes.route('/<int:user_id>/decks/<int:deck_id>/cards/<int:card_id>')
def get_card_from_user_deck(user_id, deck_id, card_id):
    user = User.query.get(user_id)
    user_deck = user.decks.query.get(deck_id)
    user_card_in_user_deck = user_deck.cards.query.get(card_id)
    return jsonify(user_card_in_user_deck.to_dict())

    # for deck in user.decks:
    #     if deck.id == deck_id:
    #         for card in deck.cards:
    #             if card.id == card_id:
    #                 return jsonify(card.to_dict())

#  delete only 1 card from 1 user deck
@user_routes.route('/<int:user_id>/decks/<int:deck_id>/cards/<int:card_id>', methods=["DELETE"])
def delete_card_from_user_deck(user_id, deck_id, card_id):
    user = User.query.get(user_id)
    user_deck = user.decks.query.get(deck_id)
    delete_card_in_user_deck = user_deck.cards.query.get(card_id)
    db.session.delete(delete_card_in_user_deck)
    db.session.commit()
    return {"success": "success"}
