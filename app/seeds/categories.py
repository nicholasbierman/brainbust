from werkzeug.security import generate_password_hash
from app.models import db, Category

# Adds a demo user, you can add other users here if you want
def seed_categories():
    demo1 = Category(
        name= "Computer Science"
    )
    
    demo2 = Category(
        name="Bartending"
    )

    demo3= Category(
        name="Zoology"
    )

    demo4 = Category(
        name="Plant Science"
    )

    demo5 = Category(
        name="Plumbing"
    )

    demo6 = Category(
        name="Cosmetology"
    )

    demo7 = Category(
        name="Linear Algebra"
    )

    demo8 = Category(
        name="Music"
    )

    demo9 = Category(
        name="Cooking"
    )

    demo10 = Category(
        name="Mental Health"
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