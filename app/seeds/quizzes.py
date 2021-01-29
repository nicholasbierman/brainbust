from werkzeug.security import generate_password_hash
from app.models import db, Quiz, Question, User

# Adds a demo user, you can add other users here if you want
def seed_quizzes():

    demo1 = Quiz(
        name = "How Well Do You Know Computer Science?",
        hashed_password = None,
        is_private = False,
        question_quantity = 5,
        user_id = 1,
        category_id = 1
    )

    demo2 = Quiz (
        name = "Let's Make Drinks!"
        hashed_password = ,
        is_private = ,
        question_quantity = ,
        user = 1,
        category_id = 2
    )






    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_quizzes():
    db.session.execute('TRUNCATE quizzes CASCADE;')
    db.session.commit()
