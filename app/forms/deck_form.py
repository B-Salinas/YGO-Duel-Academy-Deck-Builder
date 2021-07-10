from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired

class NewDeckForm(FlaskForm):
    name = StringField("name", validators=[DataRequired()])
    user_id = IntegerField("user_id", validators=[DataRequired()])
    # submit = SubmitField("submit")

class AddToDeck(FlaskForm):
    card_id = IntegerField("card_id", validators=[DataRequired()])
    #  This might be wrong, given that a card is either a Monster Card or a Spell Trap Card instance ...

class RemoveFromDeck(FlaskForm):
    card_id = IntegerField("card_id", validators=[DataRequired()])
    # This might be wrong, given that a card is either a Monster Card / Spell Trap Card instance ... uh oh. 
