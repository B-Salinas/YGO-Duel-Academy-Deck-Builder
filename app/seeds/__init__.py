from flask.cli import AppGroup
from .profile_images import seed_profile_images, undo_profile_images
from .users import seed_users, undo_users
from .cards import seed_cards, undo_cards
from .dorms import seed_dorms, undo_dorms
from .titles import seed_titles, undo_titles

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
  seed_profile_images()
  seed_dorms()
  seed_titles()
  seed_cards()
  seed_users()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
  undo_profile_images()
  undo_dorms()
  undo_titles()
  undo_cards()
  undo_users()
