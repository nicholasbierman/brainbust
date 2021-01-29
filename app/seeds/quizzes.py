from werkzeug.security import generate_password_hash
from app.models import db, Quiz, Question, User, Category

# Adds a demo user, you can add other users here if you want
def seed_quizzes():

    users = User.query.all()
    categories = Category.query.all()

    demo1 = Quiz(
        name = "How Well Do You Know Computer Science?",
        hashed_password = None,
        is_private = False,
        question_quantity = 5,
        user = users[0],
        category = categories[0]
    )

    demo2 = Quiz(
        name = "Let's Make Drinks!",
        hashed_password = None,
        is_private = False,
        question_quantity = 5,
        user = users[0],
        category = categories[1]
    )

    demo3 = Quiz(
        name = "What is Zoology?",
        hashed_password = None,
        is_private = False,
        question_quantity = 5,
        user = users[0],
        category = categories[2]
    )

    demo4 = Quiz(
        name = "Let's Dive into Some Plant Science...",
        hashed_password = None,
        is_private = False,
        question_quantity = 5,
        user = users[0],
        category = categories[3]
    )



    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_quizzes():
    db.session.execute('TRUNCATE quizzes CASCADE;')
    db.session.commit()
