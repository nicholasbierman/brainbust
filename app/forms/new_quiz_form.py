from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, IntegerField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Quiz



class NewQuizForm(FlaskForm):
    name = StringField("Quiz Name", validators=[DataRequired()])
    is_private = BooleanField("Private Quiz?")
    category_id = IntegerField("Category")
    user_id = IntegerField("User")
