from flask.cli import AppGroup
from .users import seed_users, undo_users
from .quizzes import seed_quizzes, undo_quizzes
from .categories import seed_categories, undo_categories
from .questions import seed_questions, undo_questions

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users(),
    seed_categories(),
    seed_quizzes(),
    seed_questions()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users(),
    undo_quizzes(),
    undo_categories(),
    undo_questions()
    # Add other undo functions here
