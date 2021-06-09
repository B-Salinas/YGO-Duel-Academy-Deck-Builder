from flask.cli import AppGroup
from .users import seed_users, undo_users
from .dorms import seed_dorms, undo_dorms
from .titles import seed_titles, undo_titles
from .profile_images import seed_profile_images, undo_profile_images

from .monster_card_types import seed_monster_card_types, undo_monster_card_types
from .monster_card_races import seed_monster_card_races, undo_monster_card_races
from .monster_card_attributes import seed_monster_card_attributes, undo_monster_card_attributes

from .spell_trap_card_types import seed_spell_trap_card_types, undo_spell_trap_card_types
from .spell_trap_card_races import seed_spell_trap_card_races, undo_spell_trap_card_races

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_dorms()
    seed_titles()
    seed_profile_images()
    seed_users()

    seed_monster_card_types()
    seed_monster_card_races()
    seed_monster_card_attributes()

    seed_spell_trap_card_types()
    seed_spell_trap_card_races()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_dorms()
    undo_titles()
    undo_profile_images
    undo_users()

    undo_monster_card_types()
    undo_monster_card_races()
    undo_monster_card_attributes()

    undo_spell_trap_card_types()
    undo_spell_trap_card_races()