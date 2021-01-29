from werkzeug.security import generate_password_hash
from app.models import db, Question

# Adds a demo user, you can add other users here if you want
def seed_questions():

    # user = User.query.first()

    # # demo = User(username='Demo', email='demo@aa.io',
    # #             password='password')
    # demo = Quiz(
    #     name= "Earth Science",
    #     hashed_password= None,
    #     is_private=False,
    #     question_quantity=1,
    #     user=user,
    # )
    #  question_number = db.Column(db.Integer, nullable=False)
    # body = db.Column(db.String(260), nullable=False, unique=False)
    # question_type = db.Column(db.String(50), nullable=False, unique=False)
    # answer_1 = db.Column(db.String(100), nullable=False)
    # answer_2 = db.Column(db.String(100), nullable=False)
    # answer_3 = db.Column(db.String(100), nullable=False)
    # answer_4 = db.Column(db.String(100), nullable=False)
    # correct_answer = db.Column(db.Integer)
    # quiz_id = db.Column(db.Integer, db.ForeignKey("quizzes.id"))
    demo1 = Question(
        question_number=1,
        body= "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
        question_type="MCQ"
        answer_1= "Fiji",
        answer_2="Tuvalu",
        answer_3="Marshall Islands",
        answer_4="Micronesia",
        # correct_answer="Micronesia",
        quiz_id=
    )
      demo2 = Question(
        question_number=2,
        body=,
        question_type="MCQ"
        answer_1=,
        answer_2=,
        answer_3=,
        answer_4=,
        correct_answer=,
        quiz_id=
    )
      demo3 = Question(
        question_number=3,
        body=,
        question_type="MCQ"
        answer_1=,
        answer_2=,
        answer_3=,
        answer_4=,
        correct_answer=,
        quiz_id=
    )
      demo4 = Question(
        question_number=4,
        body=,
        question_type="MCQ"
        answer_1=,
        answer_2=,
        answer_3=,
        answer_4=,
        correct_answer=,
        quiz_id=
    )



    db.session.add(
        demo1,
        demo2,
        demo3,
        demo4
        )

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_questions():
    db.session.execute('TRUNCATE questions CASCADE;')
    db.session.commit()