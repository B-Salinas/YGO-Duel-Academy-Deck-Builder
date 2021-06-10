from flask import Blueprint, jsonify, session, request
from app.models import Title, db

title_routes = Blueprint('titles', __name__)

@title_routes.route('/')
def all_titles():
    titles = Title.query.all()
    return {"titles": [title.to_dict() for title in titles]}

@title_routes.route('/<int:id>')
def one_title(id):
    title = Title.query.get(id)
    return title.to_dict()