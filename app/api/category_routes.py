from flask import Blueprint, jsonify, request, redirect
from app.models import Category, db

category_routes = Blueprint('categories', __name__)

@category_routes.route('/', methods=["GET"])
def get_categories():
    categories = Category.query.all()
    return {"categories": [category.to_dict() for category in categories]}

@category_routes.route('/<int:id>')
def get_category(id):
    category = Category.query.get(id)
    return category.to_dict()
