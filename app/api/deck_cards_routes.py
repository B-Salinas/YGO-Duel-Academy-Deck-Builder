from app.models import db, Deck
from flask import Blueprint, jsonify

deck_cards_routes = Blueprint("deck_cards", __name__) 
#  /api/deck_cards...
# These routes (like the url path) make no sense ... /api/deck_cards/<int:deck_id>/card ????

# A L L

@deck_cards_routes.route('/<int:deck_id>/all')
def get_all_cards_in_deck(deck_id):
    deck = Deck.query.get(deck_id)
    return jsonify([card.to_dict() for card in deck.cards])


# M O N S T E R   C A R D S 

@deck_cards_routes.route('/<int:deck_id>/monster_cards')
def get_all_monster_cards_in_deck(deck_id):
    deck = Deck.query.get(deck_id)
    return deck.monster_cards

@deck_cards_routes.route('/<int:deck_id>/monster_cards', methods=["POST"])
def add_monster_card_to_deck(deck_id):
    # I DONT EVEN KNOW HOW TO BEGIN THIS ROUTE
    deck = Deck.query.get(deck_id)
    return deck.monster_cards



@deck_cards_routes.route('/<int:deck_id>/monster_cards/<int:monster_card_id>')
def get_monster_card_from_deck(deck_id, monster_card_id):
    deck = Deck.query.get(deck_id)
    monster_card = deck.monster_cards.query.get(monster_card_id)
    return monster_card

@deck_cards_routes.route('/<int:deck_id>/monster_cards/<int:monster_card_id>', methods=["DELETE"])
def delete_monster_card_from_deck(deck_id, monster_card_id):
    deck = Deck.query.get(deck_id)
    delete_monster_card = deck.monster_cards.query.get(monster_card_id)
    db.session.delete(delete_monster_card)
    db.session.commit()
    return {"success": "success"}


# S P E L L   T R A P   C A R D S

@deck_cards_routes.route('/<int:deck_id>/spell_trap_cards')
def get_all_spell_trap_cards_in_deck(deck_id):
    deck = Deck.query.get(deck_id)
    return deck.spell_trap_cards

@deck_cards_routes.route('/<int:deck_id>/spell_trap_cards', methods=["POST"])
def add_spell_trap_card_to_deck(deck_id):
    # I DONT EVEN KNOW HOW TO BEGIN THIS ROUTE
    deck = Deck.query.get(deck_id)
    return deck.spell_trap_cards

@deck_cards_routes.route('/<int:deck_id>/spell_trap_cards/<int:spell_trap_card_id>')
def get_spell_trap_card_from_deck(deck_id, spell_trap_card_id):
    deck = Deck.query.get(deck_id)
    spell_trap_card = deck.spell_trap_cards.query.get(spell_trap_card_id)
    return spell_trap_card

@deck_cards_routes.route('/<int:deck_id>/spell_trap_cards/<int:spell_trap_card_id>', methods=["DELETE"])
def delete_spell_trap_card_from_deck(deck_id, spell_trap_card_id):
    deck = Deck.query.get(deck_id)
    delete_spell_trap_card = deck.spell_trap_cards.query.get(spell_trap_card_id)
    db.session.delete(delete_spell_trap_card)
    db.session.commit()
    return {"success": "success"}