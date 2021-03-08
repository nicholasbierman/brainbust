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

    quizzes = {demo1, demo2, demo3, demo4, demo5, demo6}
    for quiz in quizzes:
        db.session.add(quiz)
        db.session.commit()
        db.session.flush()

    # db.session.add(demo1)
    # db.session.add(demo2)
    # db.session.add(demo3)
    # db.session.add(demo4)
    # db.session.add(demo5)

    # db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_quizzes():
    db.session.execute('TRUNCATE quizzes CASCADE;')
    db.session.commit()
