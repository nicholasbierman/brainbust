from werkzeug.security import generate_password_hash
from app.models import db, Question, Quiz

# Adds a demo user, you can add other users here if you want


def seed_questions():

    quizzes = Quiz.query.all()

    demo1 = Question(
        question_number=1,
        body="The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
        answer_1="Fiji",
        answer_2="Tuvalu",
        answer_3="Marshall Islands",
        correct_answer="Micronesia",
        quiz=quizzes[0]
    )

    demo2 = Question(
        question_number=2,
        body="The Harvard architecture for micro-controllers added which additional bus?",
        answer_1="Address",
        answer_2="Data",
        answer_3="Control",
        correct_answer="Instruction",
        quiz=quizzes[0]
    )

    demo3 = Question(
        question_number=3,
        body="What internet protocol was documented in RFC 1459?",
        answer_1="HTTP",
        answer_2="HTTPS",
        answer_3="FTP",
        correct_answer="IRC",
        quiz=quizzes[0]
    )

    demo4 = Question(
        question_number=4,
        body="What was the first company to use the term &quot;Golden Master&quot;?",
        answer_1="IBM",
        answer_2="Microsoft",
        answer_3="Google",
        correct_answer="Apple",
        quiz=quizzes[0]
    )

    demo5 = Question(
        question_number=4,
        body="What is the name given to layer 4 of the Open Systems Interconnection (ISO) model?",
        answer_1="Session",
        answer_2="Data link",
        answer_3="Network",
        correct_answer="Transport",
        quiz=quizzes[0]
    )

    demo6 = Question(
        question_number=1,
        body="The front bar or top of the bar also has a section called the rail. Drinks should be made here because:",
        answer_1="There is a spill mat to catch any overflows.",
        answer_2="The customers like to see the bartender make the drink and verify the amount of alcohol poured.",
        answer_3="It makes a good workstation, and the bartender is very efficient making drinks there.",
        correct_answer="All of the above.",
        quiz=quizzes[1]
    )

    demo7 = Question(
        question_number=2,
        body="Shooter drinks are prepared in the metal mixing cup with a quick shake because:",
        answer_1="The ingredients mix naturally.",
        answer_2="The ingredients need to be chilled.",
        answer_3="Several shots are usually prepared at once.",
        correct_answer="All the above.",
        quiz=quizzes[1]
    )

    demo8 = Question(
        question_number=3,
        body="The term Up Against the Wall means?",
        answer_1="Add 1/2 oz of cream on top.",
        answer_2="Add 1/2 oz of Vodka on top.",
        answer_3="Add 1/2 oz Peach Schnapps on top.",
        correct_answer="Add 1/2 Galliano on top.",
        quiz=quizzes[1]
    )

    demo9 = Question(
        question_number=4,
        body="Stir sticks or straws are used in drinks:",
        answer_1="That are served up.",
        answer_2="That have ice.",
        answer_3="That needs to be mixed by the customer.",
        correct_answer="That has ice and at least 2 ingredients.",
        quiz=quizzes[1]
    )

    demo10 = Question(
        question_number=5,
        body="Tequila, Triple sec and Rose's lime are usually next to each other on the rail because",
        answer_1="They are in different colors.",
        answer_2="They are close to each other in the alphabet.",
        answer_3="They taste similar.",
        correct_answer="They are used in Margaritas, which are very popular.",
        quiz=quizzes[1]
    )

    demo11 = Question(
        question_number=1,
        body="All stages in the life cycle of malarial parasite are haploid except",
        answer_1="Sporont",
        answer_2="Schizont",
        answer_3="Gamout",
        correct_answer="Ookinete",
        quiz=quizzes[2]
    )

    demo12 = Question(
        question_number=2,
        body="The infective stage of Entamoeba histolytica is",
        answer_1="Trophic form",
        answer_2="Sporozoite",
        answer_3="Minuta form",
        correct_answer="Mature cyst",
        quiz=quizzes[2]
    )

    demo13 = Question(
        question_number=3,
        body="If an Amoeba is placed in salt water, its contractile vacuole will",
        answer_1="Burst",
        answer_2="Multiple",
        answer_3="Enlarge",
        correct_answer="Disappear",
        quiz=quizzes[2]
    )

    demo14 = Question(
        question_number=4,
        body="Which of the following is not a true amphibian animal?",
        answer_1="Frog",
        answer_2="Toad",
        answer_3="Salamander",
        correct_answer="Tortoise",
        quiz=quizzes[2]
    )

    demo15 = Question(
        question_number=5,
        body="Entamoeba histolytica was first discovered by",
        answer_1="Craig",
        answer_2="Losch",
        answer_3="Dobell",
        correct_answer="Lambel",
        quiz=quizzes[2]
    )

    demo16 = Question(
        question_number=1,
        body="What causes a green plant to bend towards light as it grows?",
        answer_1="because green plants need light to carry on photosynthesis",
        answer_2="because green plants are phototropic",
        answer_3="light stimulates plant cells on the lighted side to grow faster",
        correct_answer="auxin accumulates on shaded side stimulating greater cell elongation",
        quiz=quizzes[3]
    )

    demo17 = Question(
        question_number=2,
        body="Acid concentration in CAM plants is more of",
        answer_1="down",
        answer_2="dunk",
        answer_3="daytime",
        correct_answer="night",
        quiz=quizzes[3]
    )

    demo18 = Question(
        question_number=3,
        body="Cell elongation in internodal regions of the green plants takes place due to",
        answer_1="cytokinins",
        answer_2="ethylene",
        answer_3="indole acetic acid",
        correct_answer="gibberellins",
        quiz=quizzes[3]
    )

    demo19 = Question(
        question_number=4,
        body="Presence of trichomes on leaves",
        answer_1="helps in rapid gaseous exchange",
        answer_2="prevents guttation",
        answer_3="increases transpiration",
        correct_answer="reduces transpiration",
        quiz=quizzes[3]
    )

    demo20 = Question(
        question_number=5,
        body="Flowering dependent on cold treatment is",
        answer_1="cryopreservation",
        answer_2="cryogenics",
        answer_3="cryotherapy",
        correct_answer="vernalization",
        quiz=quizzes[3]
    )

    rails1 = Question(
        question_number=0,
        body="What does the command 'rails new ApplicationName' do?",
        answer_1="Deletes the rails application with the specified application_name",
        answer_2="Creates a new Python application",
        answer_3="Downloads the 'applicationName' package from npm",
        correct_answer="Creates a new rails application",
        quiz=quizzes[4]
    )

    rails2 = Question(
        question_number=1,
        body="What does the command 'rails generate/g model ModelName' do?",
        answer_1="Creates a model with a random ModelName",
        answer_2="Runs 'flask db upgrade'",
        answer_3="Creates a new PostgreSQL database",
        correct_answer="Creates a model with the specified ModelName",
        quiz=quizzes[4]
    )

    rails3 = Question(
        question_number=2,
        body="What does the command 'rails generate/g controller ControllerName' do?",
        answer_1="Immediately purchases a new Xbox controller from Amazon",
        answer_2="Runs 'flask db migrate'",
        answer_3="Destroys the controller with the specified controller_name",
        correct_answer="Creates a controller with the specified controller_name",
        quiz=quizzes[4]
    )

    rails4 = Question(
        question_number=3,
        body="What does the command 'rails generate/g migration MigrationName' do?",
        answer_1="Creates a new instance of PostgreSQL",
        answer_2="Deletes the migration with the specified migration_name",
        answer_3="Runs the migration with the specified migration_name",
        correct_answer="Creates a migration with the specified migration_name",
        quiz=quizzes[4]
    )

    rails5 = Question(
        question_number=5,
        body="What does the command 'rails destroy controller ControllerName' do?",
        answer_1="Destroys only the controller with the specified controller_name",
        answer_2="Runs the application using the specified controller_name",
        answer_3="Destroys all controllers",
        correct_answer="Destroys the controller with the specified controller_name, and its related files",
        quiz=quizzes[4]
    )

    node1 = Question(
        question_number=0,
        body="The 'global object' in the Node runtime can be referenced with the name 'global'. What name can be used in browser runtimes to reference the global object?",
        answer_1="browser",
        answer_2="node",
        answer_3="global",
        correct_answer="window",
        quiz=quizzes[5]
    )


    questions = {demo1, demo2, demo3, demo4, demo5, demo6, demo7, demo8, demo9,
                 demo10,
                 demo11, demo12, demo13, demo14, demo15, demo16, demo17, demo18, demo19, demo20, rails1, rails2, rails3, rails4, rails5, node1}

    for question in questions:
        db.session.add(question)
        db.session.commit()
        db.session.flush()


# db.session.add(demo1)
# db.session.add(demo2)
# db.session.add(demo3)
# db.session.add(demo4)
# db.session.add(demo5)
# db.session.add(demo6)
# db.session.add(demo7)
# db.session.add(demo8)
# db.session.add(demo9)
# db.session.add(demo10)
# db.session.add(demo11)
# db.session.add(demo12)
# db.session.add(demo13)
# db.session.add(demo14)
# db.session.add(demo15)
# db.session.add(demo16)
# db.session.add(demo17)
# db.session.add(demo18)
# db.session.add(demo19)
# db.session.add(demo20)

# db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_questions():
    db.session.execute('TRUNCATE questions CASCADE;')
    db.session.commit()
