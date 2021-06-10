from app.models import db, Monster_Card_Attribute
from flask import Blueprint

monster_card_attribute_routes = Blueprint("monster_card_attributes", __name__)


@monster_card_attribute_routes.route('/')
def all_monster_card_attributes():
    monster_card_attributes = Monster_Card_Attribute.query.all()
    return {"monster_card_attributes": [monster_card_attribute.to_dict() for monster_card_attribute in monster_card_attributes]}


@monster_card_attribute_routes.route('/<int:id>')
def one_monster_card_attribute(id):
    monster_card_attribute = Monster_Card_Attribute.query.get(id)
    return monster_card_attribute.to_dict()
