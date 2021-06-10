from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SelectField
from wtforms import validators
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User

dorms = ["Slifer Red", "Ra Yellow", "Obelisk Blue"]

titles = ["Apprentice Duelist", "Average Duelist", "Fiery Duelist", "Calm Duelist",
        "Superior Duelist", "Honored Duelist", "Elite Duelist", "Prince of Games",
        "King of Games"]
profile_images = [
    "https://res.cloudinary.com/soundtrack-2/image/upload/v1623173089/ygo-da-deck-builder/profile_images/prof_banner_c5qipu.png",
    "https://res.cloudinary.com/soundtrack-2/image/upload/v1623173089/ygo-da-deck-builder/profile_images/jaden_yugi_nhd8fu.png"]

def user_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("User is already registered.")


class SignUpForm(FlaskForm):
    # username = StringField('username', validators=[DataRequired()])
    # email = StringField('email', validators=[DataRequired(), user_exists])
    # password = StringField('password', validators=[DataRequired()])

    name = StringField("Full Name", validators=[DataRequired()])
    email = StringField("Email Address", validators=[DataRequired(), user_exists])
    password = StringField("Password", validators=[DataRequired()])
    dorm = SelectField("Dorm", validators=[DataRequired()], choices=[(1, "Slifer Red"), (2, "Ra Yellow"), (3, "Obelisk Blue")]) # Connect w database to seed this
    title = SelectField("Title", validators=[DataRequired()], choices=None) # Connect w database to seed this
    profile_image = SelectField("Profile Image", validators=[DataRequired()], choices=None) # Connect w database to seed this
