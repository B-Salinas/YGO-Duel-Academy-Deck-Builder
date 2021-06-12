from app.models import db, Profile_Image
from flask import Blueprint, jsonify

profile_image_routes = Blueprint('profile_images', __name__)

@profile_image_routes.route('/')
def all_profile_images():
    profile_images = Profile_Image.query.all()
    return jsonify([profile_image.to_dict() for profile_image in profile_images])

@profile_image_routes.route('/<int:id>')
def one_profile_image(id):
    profile_image = Profile_Image.query.get(id)
    return profile_image.to_dict()