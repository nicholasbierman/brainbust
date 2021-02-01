from flask import Blueprint, request
from app.models import Category, Quizzes

search_routes = Blueprint('search', __name__)

@search_routes.route('/<str:searchTerm>', methods=["GET"])
def get_searched_quizzes(searchTerm):
    category = Category.query.all(name=searchTerm)
    console.log(category)
    if(category) {
        quizzes = Quizzes.query.filter()
    } else {

    }
    # return {"categories": [category.to_dict() for category in categories]}
    return "success"
