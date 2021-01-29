from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, IntegerField, SelectField
from wtforms.validators import DataRequired, ValidationError
from app.models import Question



class NewQuestionForm(FlaskForm):
    question_body = StringField("Question", validators=[
                       DataRequired(message="Enter the question here")])
    answer_1 = StringField("answer_1", validators=[
                       DataRequired(message="Enter the first answer here")])
    answer_2 = StringField("answer_2", validators=[
                       DataRequired(message="Enter the second answer here")])
    answer_3 = StringField("answer_3", validators=[
                       DataRequired(message="Enter the third answer here")])
    answer_4 = StringField("answer_4", validators=[
                       DataRequired(message="Enter the fourth answer here")])
    correct_answer = IntegerField("Correct Answer", validators=[
                       DataRequired(message="Please provide the number of the correct answer")])

    quiz_id = IntegerField("Quiz")
    question_number = IntegerField("Question Number")
