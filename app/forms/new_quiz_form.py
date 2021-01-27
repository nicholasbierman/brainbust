from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Quiz


class NewQuizForm(FlaskForm):
    name = StringField("Quiz Name")
    is_private = BooleanField("Private Quiz?")
    