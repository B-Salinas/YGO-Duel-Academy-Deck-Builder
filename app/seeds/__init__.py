from flask.cli import AppGroup
from .users import seed_users, undo_users

from .decks import seed_decks, undo_decks

from .monster_card_types import seed_monster_card_types, undo_monster_card_types
from .monster_card_races import seed_monster_card_races, undo_monster_card_races
from .monster_card_attributes import seed_monster_card_attributes, undo_monster_card_attributes

from .spell_trap_card_types import seed_spell_trap_card_types, undo_spell_trap_card_types
from .spell_trap_card_races import seed_spell_trap_card_races, undo_spell_trap_card_races

from .cards import seed_all_cards, undo_all_cards
from .trunk import seed_trunk, undo_trunk

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():

    seed_users()

    seed_decks()

    seed_monster_card_types()
    seed_monster_card_races()
    seed_monster_card_attributes()

    seed_spell_trap_card_types()
    seed_spell_trap_card_races()

    seed_all_cards()
    seed_trunk()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():

    undo_users()

    undo_decks()

    undo_monster_card_types()
    undo_monster_card_races()
    undo_monster_card_attributes()

    undo_spell_trap_card_types()
    undo_spell_trap_card_races()

    undo_all_cards()
    undo_trunk()