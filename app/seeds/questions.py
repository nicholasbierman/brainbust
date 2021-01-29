from werkzeug.security import generate_password_hash
from app.models import db, Question

# Adds a demo user, you can add other users here if you want
def seed_questions():

    demo1 = Question(
        question_number = 1,
        body = "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
        answer_1 = "Fiji",
        answer_2 = "Tuvalu",
        answer_3 = "Marshall Islands",
        correct_answer = "Micronesia",
        quiz_id = 1
    )

    demo2 = Question(
        question_number = 2,
        body = "The Harvard architecture for micro-controllers added which additional bus?",
        answer_1 = "Address",
        answer_2 = "Data",
        answer_3 = "Control",
        correct_answer = "Instruction",
        quiz_id = 1
    )

    demo3 = Question(
        question_number = 3,
        body = "What internet protocol was documented in RFC 1459?",
        answer_1 = "HTTP",
        answer_2 = "HTTPS",
        answer_3 = "FTP",
        correct_answer = "IRC",
        quiz_id = 1
    )

    demo4 = Question(
        question_number = 4,
        body = "What was the first company to use the term &quot;Golden Master&quot;?",
        answer_1 = "IBM",
        answer_2 = "Microsoft",
        answer_3 = "Google",
        correct_answer = "Apple",
        quiz_id = 1
    )
    
    demo5 = Question(
        question_number = 4,
        body = "What is the name given to layer 4 of the Open Systems Interconnection (ISO) model?",
        answer_1 = "Session",
        answer_2 = "Data link",
        answer_3 = "Network",
        correct_answer = "Transport",
        quiz_id = 1
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