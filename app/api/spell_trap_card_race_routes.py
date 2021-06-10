from app.models import Spell_Trap_Card_Race, db
from flask import Blueprint, jsonify, session, request

spell_trap_card_race_routes = Blueprint("spell_trap_card_races", __name__)


@spell_trap_card_race_routes.route('/')
def all_spell_trap_card_races():
    spell_trap_card_races = Spell_Trap_Card_Race.query.all()
    return {"spell_trap_card_races": [spell_trap_card_race.to_dict() for spell_trap_card_race in spell_trap_card_races]}


@spell_trap_card_race_routes.route('/<int:id>')
def one_spell_trap_card_race(id):
    spell_trap_card_race = Spell_Trap_Card_Race.query.get(id)
    return spell_trap_card_race.to_dict()
