from app.models import db, Monster_Card_Type
from flask import Blueprint

monster_card_type_routes = Blueprint("monster_card_types", __name__)

@monster_card_type_routes.route('/')
def all_monster_card_types():
    monster_card_types = Monster_Card_Type.query.all()
    return {"monster_card_types": [monster_card_type.to_dict() for monster_card_type in monster_card_types]}


@monster_card_type_routes.route('/<int:id>')
def one_monster_card_type(id):
    monster_card_type = Monster_Card_Type.query.get(id)
    return monster_card_type.to_dict()
