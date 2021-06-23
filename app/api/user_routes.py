from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

user_routes = Blueprint('users', __name__)

@user_routes.route('/')
# @login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}

@user_routes.route('/<int:id>')
# @login_required
def user(ids):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/decks/')
# @login_required
def decks():
    # user = User.query.get(id) 
    return user.to_dict()


@user_routes.route('/decks/<int:id>')
# @login_required
def deck(deck_id):
    deck = User.query.get(deck_id)
    return user.to_dict()
