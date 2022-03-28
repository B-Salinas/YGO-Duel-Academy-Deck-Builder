from flask.cli import AppGroup
from .profile_images import seed_profile_images, undo_profile_images
from .users import seed_users, undo_users
from .cards import seed_cards, undo_cards
from .decks import seed_decks, undo_decks

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
  seed_profile_images()
  seed_users()
  seed_cards()
  seed_decks()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
  undo_profile_images()
  undo_users()
  undo_cards()
  undo_decks()
