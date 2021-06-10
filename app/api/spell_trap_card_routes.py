from app.models import Spell_Trap_Card, db
from flask import Blueprint, jsonify, session, request

spell_trap_card_routes = Blueprint("spell_trap_cards", __name__)

@spell_trap_card_routes.route('/')
def all_spell_trap_cards():
    spell_trap_cards = Spell_Trap_Card.query.all()
    return {"spell_trap_cards": [spell_trap_card.to_dict() for spell_trap_card in spell_trap_cards]}

@spell_trap_card_routes.route('/<int:id>')
def one_spell_trap_card(id):
    spell_trap_card = Spell_Trap_Card.query.get(id)
    return spell_trap_card.to_dict()
