from app.models import db, Spell_Trap_Card_Type
from flask import Blueprint

spell_trap_card_type_routes = Blueprint("spell_trap_card_types", __name__)


@spell_trap_card_type_routes.route('/')
def all_spell_trap_card_types():
    spell_trap_card_types = Spell_Trap_Card_Type.query.all()
    return {"spell_trap_card_types": [spell_trap_card_type.to_dict() for spell_trap_card_type in spell_trap_card_types]}


@spell_trap_card_type_routes.route('/<int:id>')
def one_spell_trap_card_type(id):
    spell_trap_card_type = Spell_Trap_Card_Type.query.get(id)
    return spell_trap_card_type.to_dict()
