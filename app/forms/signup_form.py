from flask_wtf import FlaskForm
from wtforms import StringField, SelectField
from wtforms import validators
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


url_path = "https://res.cloudinary.com/soundtrack-2/image/upload/v1623173089/ygo-da-deck-builder/profile_images/"

dorms = [
    ("Slifer Red Dorm", "Slifer Red Dorm"),
    ("Ra Yellow Dorm", "Ra Yellow Dorm"),
    ("Obelisk Blue Dorm", "Obelisk Blue Dorm")
]

titles = [
    ("Apprentice Duelist", "Apprentice Duelist"),
    ("Average Duelist", "Average Duelist"),
    ("Fiery Duelist", "Fiery Duelist"),
    ("Calm Duelist", "Calm Duelist"),
    ("Superior Duelist", "Superior Duelist"),
    ("Honored Duelist", "Honored Duelist"),
    ("Elite Duelist", "Elite Duelist"),
    ("Prince of Games", "Prince of Games"),
    ("King of Games", "King of Games")
]

profile_images = [
    ('{url}{char}'.format(
        url=url_path, 
        char="prof_banner_c5qipu.png"), "Professor Banner"),
    ('{url}{char}'.format(
        url=url_path, 
        char="chumley_huffington_vwivmj.png"), "Chumley Huffington"),
    ('{url}{char}'.format(
        url=url_path, 
        char="jaden_yugi_nhd8fu.png"), "Jaden Yuki"),
    ('{url}{char}'.format(
        url=url_path, 
        char="syrus_truesdale_omrvam.png"), "Syrus Truesdale"),
    ('{url}{char}'.format(
        url=url_path, 
        char="chazz_princeton_qdkrtn.png"), "Chazz Princeton"),
    ('{url}{char}'.format(
        url=url_path, 
        char="bastion_misawa_jsgyo1.png"), "Bastion Misawa"),
    ('{url}{char}'.format(
        url=url_path, 
        char="alexis_rhodes_frlh5k.png"), "Alexis Rhodes"),
    ('{url}{char}'.format(
        url=url_path, 
        char="yugi-moto_x30ozk.png"), "Yugi Muto")
]


def user_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("User is already registered.")


class SignUpForm(FlaskForm):
    name = StringField("Full Name", validators=[DataRequired()])
    email = StringField("Email Address", validators=[DataRequired(), user_exists])
    password = StringField("Password", validators=[DataRequired()])
    dorm = SelectField("Dorm", validators=[DataRequired()], choices=dorms)
    title = SelectField("Title", validators=[DataRequired()], choices=titles)
    profile_img = SelectField("Profile Images", validators=[DataRequired()], choices=profile_images)


   