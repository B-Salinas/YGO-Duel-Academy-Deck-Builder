from flask.cli import AppGroup
from .users import seed_users, undo_users
from .dorms import seed_dorms, undo_dorms
from .titles import seed_titles, undo_titles

from .monster_card_types import seed_monster_card_types, undo_monster_card_types

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_dorms()
    seed_titles()

    seed_monster_card_types()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_dorms()
    undo_titles()

    undo_monster_card_types()
