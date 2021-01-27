from flask import Blueprint, jsonify
from app.models import Quiz
from ..forms.new_quiz_form import NewQuizForm
quiz_routes = Blueprint('quizzes', __name__)


@quiz_routes.route('/', methods=["GET"])
def quizzes():
    quizzes = Quiz.query.filter(Quiz.is_private.is_(False))
    return {"quizzes": [quiz.to_dict() for quiz in quizzes]}


@quiz_routes.route('/<int:id>')
def quiz(id):
    quiz = Quiz.query.get(id)
    return quiz.to_dict()


@quiz_routes.route('/new', methods=["POST"])
def post_new_quiz():
    # data = form.data
    # new_quiz_form = NewQuizForm(
    #     name=data["name"],
    #     is_private=data["private"]
    # )
    return form.data
