from flask import Blueprint, jsonify
from app.models import Quiz

quiz_routes = Blueprint('quizzes', __name__)

@quiz_routes.route('/', methods=["GET"])
def quizzes():
    quizzes = Quiz.query.all()
    return {"quizzes": [quiz.to_dict() for quiz in quizzes]}

@quiz_routes.route('/<int:id>')
def quiz(id):
    quiz = Quiz.query.get(id)
    return quiz.to_dict()
