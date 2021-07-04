from app.models import db, User, Deck
from flask import Blueprint, jsonify

trunk_cards_routes = Blueprint("trunk_cards", __name__)


# A L L

@trunk_cards_routes.route('/all')
def all_cards_in_trunk(user_id):
    user = User.query.get(user_id)
    return user.cards # This doesn't seem right, its like I'm missing something


# M O N S T E R   C A R D S 

@trunk_cards_routes.route('/monster_cards')
def all_trunk_monster_cards(user_id):
    user = User.query.get(user_id)
    return user.monster_cards

@trunk_cards_routes.route('/monster_cards', methods=["POST"])
def add_monster_card_to_trunk(user_id):
    # I DONT EVEN KNOW HOW TO BEGIN THIS ROUTE
    user = User.query.get(user_id)
    return user.monster_cards

@trunk_cards_routes.route('/monster_cards/<int:monster_card_id>')
def one_trunk_monster_cards(user_id, monster_card_id):
    user = User.query.get(user_id)
    monster_card = user.monster_cards.query.get(monster_card_id)
    return monster_card

@trunk_cards_routes.route('/monster_cards/<int:monster_card_id>', methods=["DELETE"])
def one_trunk_monster_cards(user_id, monster_card_id):
    user = User.query.get(user_id)
    delete_monster_card = user.monster_cards.query.get(monster_card_id)
    db.session.delete(delete_monster_card)
    db.session.commit()
    return {"success": "success"}


# S P E L L   T R A P   C A R D S

@trunk_cards_routes.route('/spell_trap_cards')
def all_trunk_spell_trap_cards(user_id):
    user = User.query.get(user_id)
    return user.spell_trap_cards

@trunk_cards_routes.route('/spell_trap_cards', methods=["POST"])
def all_trunk_spell_trap_cards(user_id):
    user = User.query.get(user_id)
    return user.spell_trap_cards

@trunk_cards_routes.route('/spell_trap_cards/<int:spell_trap_card_id>')
def one_trunk_spell_trap_cards(user_id, spell_trap_card_id):
    user = User.query.get(user_id)
    spell_trap_card = user.spell_trap_cards.query.get(spell_trap_card_id)
    return spell_trap_card

@trunk_cards_routes.route('/spell_trap_cards/<int:spell_trap_card_id>', methods=["DELETE"])
def one_trunk_spell_trap_cards(user_id, spell_trap_card_id):
    user = User.query.get(user_id)
    delete_spell_trap_card = user.spell_trap_cards.query.get(spell_trap_card_id)
    db.session.delete(delete_spell_trap_card)
    db.session.commit()
    return {"success": "success"}
