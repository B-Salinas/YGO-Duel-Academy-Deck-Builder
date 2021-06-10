from app.models import db, Dorm
from flask import Blueprint, jsonify, session, request

dorm_routes = Blueprint('dorms', __name__)

@dorm_routes.route('/')
def all_dorms():
    dorms = Dorm.query.all()
    return {"dorms": [dorm.to_dict() for dorm in dorms]}

@dorm_routes.route('/<int:id>')
def one_dorm(id):
    dorm = Dorm.query.get(id)
    return dorm.to_dict()
