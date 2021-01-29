from werkzeug.security import generate_password_hash
from app.models import db, Category

# Adds a demo user, you can add other users here if you want
def seed_categories():

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
    # id = db.Column(db.Integer, primary_key=True)
    # name = db.Column(db.String(30), nullable=False)
    demo1 = Category(
        name= "Computer Science"
    )

    demo2 = Category(
        name=
    )

    demo3= Category(
        name=
    )

    demo4 = Category(
        name=
    )

    demo5 = Category(
        name=
    )

    demo6 = Category(
        name=
    )

    demo7 = Category(
        name=
    )

    demo8 = Category(
        name=
    )

    demo9 = Category(
        name=
    )

    demo10 = Category(
        name=
    )



    db.session.add(
        demo1,
        demo2,
        demo3,
        demo4,
        demo5,
        demo6,
        demo7,
        demo8,
        demo9,
        demo10
        )

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_categories():
    db.session.execute('TRUNCATE categories CASCADE;')
    db.session.commit()