from flask import Blueprint, request
from app.models import Category, Quiz

search_routes = Blueprint('search', __name__)

@search_routes.route('/<searchTerm>', methods=["GET"])
def get_searched_quizzes(searchTerm):
    category = Category.query.filter_by(name=searchTerm).first()
    print(category)
    if (category):
        quizzes = Quiz.query.filter_by(category_id=category.id)
    else:
        quizzes = Quiz.query.filter(Quiz.name.ilike(f'%{searchTerm}%'))
    return {"quizzes": [quiz.to_dict() for quiz in quizzes]}

