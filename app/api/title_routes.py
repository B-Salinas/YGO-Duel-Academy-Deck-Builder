from app.models import db, Title
from flask import Blueprint, jsonify

title_routes = Blueprint('titles', __name__)

@title_routes.route('/')
def all_titles():
    titles = Title.query.all()
    return jsonify([title.to_dict() for title in titles])

@title_routes.route('/<int:id>')
def one_title(id):
    title = Title.query.get(id)
    return title.to_dict()