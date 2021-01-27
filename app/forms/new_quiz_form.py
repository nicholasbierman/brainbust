from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Quiz


class NewQuizForm(FlaskForm):
    name = StringField("Quiz Name", validators=[DataRequired()])
    is_private = BooleanField("Private Quiz?")
    user_id = IntegerField("User")