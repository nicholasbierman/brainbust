from werkzeug.security import generate_password_hash
from app.models import db, Quiz, Question

# Adds a demo user, you can add other users here if you want
def seed_quizzes():

    user = User.query.first()

    # demo = User(username='Demo', email='demo@aa.io',
    #           
    #   password='password')
    # name = db.Column(db.String(100), nullable=False, unique=False)
    # hashed_password = db.Column(db.String(255), nullable=True)
    # is_private = db.Column(db.Boolean)
    # question_quantity = db.Column(db.Integer, nullable=False)
    # user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    # category_id = db.Column(db.Integer, db.ForeignKey("categories.id"))
    demo1 = Quiz(
        name= "Earth Science",
        hashed_password= None,
        is_private=False,
        question_quantity=1,
        user=user,
        category_id=
    )

    demo2 = Quiz (
        name=
        hashed_password=,
        is_private=,
        question_quantity=,
        user=,
        category_id=
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
