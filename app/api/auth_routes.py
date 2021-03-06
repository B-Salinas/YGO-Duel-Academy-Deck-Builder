from flask import Blueprint, jsonify, session, request
from app.models import User, db, Dorm, Profile_Image, Title
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
# import random
# import string

auth_routes = Blueprint('auth', __name__)
#  /api/auth...

def validation_errors_to_error_messages(validation_errors):
  """
  Simple function that turns the WTForms validation errors into a simple list
  """
  errorMessages = []
  for field in validation_errors:
    for error in validation_errors[field]:
      errorMessages.append(f"{field} : {error}")
  return errorMessages


@auth_routes.route('/')
def authenticate():
  """
  Authenticates a user.
  """
  if current_user.is_authenticated:
    return current_user.to_dict()
  return {'errors': ['Unauthorized']}


@auth_routes.route('/login', methods=['POST'])
def login():
  """
  Logs a user in
  """
  form = LoginForm()
  print(request.get_json())
  # Get the csrf_token from the request cookie and put it into the
  # form manually to validate_on_submit can be used
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    # Add the user to the session, we are logged in!
    user = User.query.filter(User.email == form.data['email']).first()
    login_user(user)
    return user.to_dict()
  return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
def logout():
  """
  Logs a user out
  """
  logout_user()
  return {'message': 'User logged out'}


@auth_routes.route('/signup-data')
def sign_up_data():
  dorms = Dorm.query.all()
  profile_images = Profile_Image.query.all()
  titles = Title.query.all()

  return {
    'dorms': [dorm.to_dict() for dorm in dorms], 
    'profilePictures': [profile_picture.to_dict() for profile_picture in profile_images], 
    'titles': [title.to_dict() for title in titles]
  }


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
  """
  Creates a new user and logs them in
  """
  form = SignUpForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    user = User (
      name=form.data['name'],
      email=form.data['email'],
      password=form.data['password'],
      dorm_id=form.data['dorm'],
      title_id=form.data['title'],
      profile_img_id=form.data['profile_img']
    )

    db.session.add(user)
    db.session.commit()
    user.sign_up()

    login_user(user)
    return user.to_dict()
      
  return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/unauthorized')
def unauthorized():
  """
  Returns unauthorized JSON when flask-login authentication fails
  """
  return {'errors': ['Unauthorized']}, 401

# @auth_routes.route('/testing')
# def test():
#   user = Card.query.get(1)

#   print()
#   print()
#   print()
#   print(current_user.remove_from_deck(2, 103, 100))
#   print()
#   print()
#   print()

#   return user.to_dict()
  # return {'data': [user.to_dict() for user in users]}

# @auth_routes.route('/signup-test')
# def sign_up_test():
#   letters = string.ascii_letters
#   user = User (
#     name=''.join(random.choice(letters) for i in range(int(random.random() * (21 - 4) + 4))),
#     email=''.join(random.choice(letters) for i in range(int(random.random() * (21 - 4) + 4)))+'@gmail.com',
#     password=''.join(random.choice(letters) for i in range(int(random.random() * (21 - 4) + 4))),
#     dorm=''.join(random.choice(letters) for i in range(int(random.random() * (21 - 4) + 4))),
#     title=''.join(random.choice(letters) for i in range(int(random.random() * (21 - 4) + 4))),
#     profile_img=''.join(random.choice(letters) for i in range(int(random.random() * (21 - 4) + 4)))
#   )

#   db.session.add(user)
#   db.session.commit()

#   user.sign_up()
#   return user.to_dict()
