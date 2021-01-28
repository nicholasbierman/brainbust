from flask import Blueprint, jsonify, request, redirect
from app.models import Quiz, db
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

# creating a quiz
@quiz_routes.route('/new', methods=["POST"])
def post_new_quiz():
    form = NewQuizForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        quiz = Quiz(
            name=form.data['name'],
            is_private=form.data['is_private'],
            question_quantity=1,
            user_id=form.data['user_id']
        )
        db.session.add(quiz)
        db.session.commit()
        return quiz.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}

# deleting a quiz
@quiz_routes.route("/<int:id>/delete", methods=["DELETE"])
def post_delete_quiz(id):
    quiz = Quiz.query.get(id)
    db.session.delete(quiz)
    db.session.commit()
    return redirect("/")

        

# updating a quiz
@quiz_routes.route("/<int:id>/update", methods=["PUT"])
def post_update_quiz(id):
    quiz = Quiz.query.get(id)
    content = request.json
    # update with new info from request
    # quiz.name = content["name"]
    db.session.update()
    db.session.commit()
    # return redirect
    return redirect(f'/api/quizzes/{id}')

