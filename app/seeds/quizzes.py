from werkzeug.security import generate_password_hash
from app.models import db, Quiz, User

# Adds a demo user, you can add other users here if you want
def seed_quizzes():

    user = User.query.first()

    # demo = User(username='Demo', email='demo@aa.io',
    #             password='password')
    demo = Quiz(
        name= "Earth Science",
        hashed_password= None,
        is_private=False,
        question_quantity=1,
        user=user,
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
