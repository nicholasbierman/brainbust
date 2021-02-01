from .auth_routes import validation_errors_to_error_messages
from flask import Blueprint, jsonify, request, redirect
from app.models import Quiz, Question, db
from flask_login import login_required, current_user
from ..forms.new_quiz_form import NewQuizForm
quiz_routes = Blueprint('quizzes', __name__)
import json

@quiz_routes.route('/')
def quizzes():
    quizzes = Quiz.query.filter(Quiz.is_private.is_(False))
    return {"quizzes": [quiz.to_dict() for quiz in quizzes]}


@quiz_routes.route('/<int:id>')
def quiz(id):
    quiz = Quiz.query.get(id)
    return quiz.to_dict()

# creating a quiz

@quiz_routes.route('/user/<int:id>')
def get_quiz_questions(id):
    quizzes = Quiz.query.filter(Quiz.user_id == id)
    return {"quizzes": [quiz.to_dict() for quiz in quizzes]}


@quiz_routes.route('/new', methods=["POST"])
@login_required
def post_new_quiz():
    form = NewQuizForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        questions = request.json["added_questions"]
        quiz = Quiz(
            name=form.data['name'],
            is_private=form.data['is_private'],
            question_quantity=len(questions),
            user_id=current_user.id,
            category_id=form.data["category_id"]
        )
        db.session.add(quiz)
        db.session.flush()
        for i in range(len(questions)):
            new_question = Question(
                question_number = i+1,
                body = questions[i]["question_body"],
                answer_1 = questions[i]["answer_1"],
                answer_2 = questions[i]["answer_2"],
                answer_3 = questions[i]["answer_3"],
                correct_answer = questions[i]["correct_answer"],
                quiz_id = quiz.id
            )
            db.session.add(new_question)
        db.session.commit()
        return quiz.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}

# deleting a quiz


@quiz_routes.route("/<int:id>/delete", methods=["DELETE"])
def post_delete_quiz(id):
    quiz = Quiz.query.get(id)
    db.session.delete(quiz)
    db.session.commit()
    return {"message": "Very Nice Great Success"}

# updating a quiz
@quiz_routes.route("/<int:id>/update", methods=["PUT"])
def post_update_quiz(id):
    content = request.json
    quiz = Quiz.query.get(id)
    quiz.name = content["name"]
    if content["is_private"].lower() == "true":
        quiz.is_private = True
    if content["is_private"].lower() == "false":
        quiz.is_private = False
    quiz.question_quantity = content["questions"]
    db.session.commit()
    return redirect(f'/api/quizzes/{id}')

# retrieving quizzes by category
@quiz_routes.route('/category/<int:id>')
def get_quiz_by_category(id):
    quizzes = Quiz.query.filter(Quiz.category_id == id)
    return {"quizzes": [quiz.to_dict() for quiz in quizzes]}
