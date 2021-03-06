from werkzeug.security import generate_password_hash
from app.models import db, Quiz, Question, User, Category

# Adds a demo user, you can add other users here if you want


def seed_quizzes():

    users = User.query.all()
    categories = Category.query.all()

    demo1 = Quiz(
        name="How Well Do You Know Computer Science?",
        hashed_password=None,
        is_private=False,
        question_quantity=5,
        user=users[0],
        category=categories[0]
    )

    demo2 = Quiz(
        name="Let's Make Drinks!",
        hashed_password=None,
        is_private=False,
        question_quantity=5,
        user=users[0],
        category=categories[1]
    )

    demo3 = Quiz(
        name="What is Zoology?",
        hashed_password=None,
        is_private=False,
        question_quantity=5,
        user=users[0],
        category=categories[2]
    )

    demo4 = Quiz(
        name="Let's Dive into Some Plant Science...",
        hashed_password=None,
        is_private=False,
        question_quantity=5,
        user=users[0],
        category=categories[3]
    )

    demo5 = Quiz(
        name="Ruby on Rails Commands",
        hashed_password=None,
        is_private=False,
        question_quantity=5,
        user=users[0],
        category=categories[0])

    demo6 = Quiz(
        name="Learn Node.js",
        hashed_password=None,
        is_private=False,
        question_quantity=5,
        user=users[0],
        category=categories[0])

    demo7 = Quiz(
        name="Properties of Hair and Scalp",
        hashed_password=None,
        is_private=False,
        question_quantity=5,
        user=users[0],
        category=categories[5]
    )

    demo8 = Quiz(
        name="Basics of Linear Algebra",
        hashed_password=None,
        is_private=False,
        question_quantity=5,
        user=users[0],
        category=categories[6]
    )

    demo9 = Quiz(
        name="Grammy Awards 2019",
        hashed_password=None,
        is_private=False,
        question_quantity=5,
        user=users[0],
        category=categories[7]
    )

    demo10 = Quiz(
        name="Cooking Vocabulary",
        hashed_password=None,
        is_private=False,
        question_quantity=5,
        user=users[0],
        category=categories[8]
    )

    demo11 = Quiz(
        name="NBA All Stars 2020-21",
        hashed_password=None,
        is_private=False,
        question_quantity=5,
        user=users[0],
        category=categories[4]
    )

    quizzes = {demo1, demo2, demo3, demo4, demo5,
               demo6, demo7, demo8, demo9, demo10,
               demo11}
    for quiz in quizzes:
        db.session.add(quiz)
        db.session.commit()
        db.session.flush()


def undo_quizzes():
    db.session.execute('TRUNCATE quizzes CASCADE;')
    db.session.commit()
