from .auth_routes import validation_errors_to_error_messages
from flask import Blueprint, jsonify, request, redirect
from app.models import Question, db
from flask_login import login_required, current_user
from ..forms.new_question_form import NewQuestionForm
question_routes = Blueprint('question', __name__)

@question_routes.route('/')
def get_questions():
    questions = Question.query.all()
    return {"questions": [question.to_dict() for question in questions]}

@question_routes.route('/<int:id>')
def get_quiz_questions(id):
    questions = Question.query.filter(Question.quiz_id == id)
    return {"questions": [question.to_dict() for question in questions]}

@question_routes.route('/new', methods=["POST"])
def add_new_question():
    form = NewQuestionForm()
    if form.validate_on_submit():
        question = Question(
            body=form.data["question_body"],
            question_type=form.data["question_type"],
            answer_1=form.data["answer_1"],
            answer_2=form.data["answer_2"],
            answer_3=form.data["answer_3"],
            answer_4=form.data["answer_4"],
            correct_answer=form.data["correct_answer"],
            question_number=form.data[1],
            #^^^ In order to get this functioning we will need to query
            #the length of questions from the quiz in the state
            #and return that length +1 for every new question.
        )
        db.session.add(question)
        db.session.commit()
        return question.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}

@question_routes.route("/<int:id>/delete", methods=["DELETE"])
def delete_question(id):
    question = Question.query.get(id)
    quiz = question.quiz_id
    db.session.delete(question)
    db.session.commit()
    return redirect(f"/api/question/{quiz}")
