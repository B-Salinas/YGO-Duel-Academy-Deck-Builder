from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SelectField
from wtforms import validators
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


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
    # dorm = SelectField("Dorm", validators=[DataRequired()], choices = final_dorm_list)
    # title = SelectField("Title", validators=[DataRequired()]) # Connect w database to seed this
    # profile_image = SelectField("Profile Image", validators=[DataRequired()]) # Connect w database to seed this


    # dorm = SelectField("Dorm", validators=[DataRequired()])
    # Connect w database to seed this
    # title = SelectField("Title", validators=[
    #                     DataRequired()], choices=Dorm.query.all())
    # profile_image = SelectField("Profile Image", validators=[DataRequired()])  # Connect w database to seed this
