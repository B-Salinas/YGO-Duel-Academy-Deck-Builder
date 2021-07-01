from app.models import db, Monster_Card, Spell_Trap_Card
from flask import Blueprint, jsonify

masterlist_routes = Blueprint('masterlist', __name__)

def masterlist_creation():
    masterlist = []

    monster_cards = Monster_Card.query.all()
    spell_trap_cards = Spell_Trap_Card.query.all()

    masterlist.append([monster_card.to_dict() for monster_card in monster_cards])
    masterlist.append([spell_trap_card.to_dict() for spell_trap_card in spell_trap_cards])

    return masterlist

@masterlist_routes.route('/')
def masterlist():
    masterlist = masterlist_creation()
    return jsonify(masterlist)

@masterlist_routes.route('/monster_cards')
def all_monster_cards():
    monster_cards = Monster_Card.query.all()
    return jsonify([monster_card.to_dict() for monster_card in monster_cards])
    

@masterlist_routes.route('/spell_trap_cards')
def all_spell_trap_cards():
    spell_trap_cards = Spell_Trap_Card.query.all()
    return jsonify([spell_trap_card.to_dict() for spell_trap_card in spell_trap_cards])


@masterlist_routes.route('/monster_cards/<int:id>')
def one_monster_card(id):
    monster_card = Monster_Card.query.get(id)
    return monster_card.to_dict()


@masterlist_routes.route('/spell_trap_cards/<int:id>')
def one_spell_trap_card(id):
    spell_trap_card = Spell_Trap_Card.query.get(id)
    return spell_trap_card.to_dict()