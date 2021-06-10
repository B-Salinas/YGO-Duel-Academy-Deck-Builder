from app.models import db, Monster_Card_Race
from flask import Blueprint

monster_card_race_routes = Blueprint("monster_card_races", __name__)


@monster_card_race_routes.route('/')
def all_monster_card_races():
    monster_card_races = Monster_Card_Race.query.all()
    return {"monster_card_races": [monster_card_race.to_dict() for monster_card_race in monster_card_races]}

@monster_card_race_routes.route('/<int:id>')
def one_monster_card_race(id):
    monster_card_race = Monster_Card_Race.query.get(id)
    return monster_card_race.to_dict()
