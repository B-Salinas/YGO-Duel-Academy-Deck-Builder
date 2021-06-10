"""empty message

Revision ID: 827ce2c7fd3d
Revises: 6e5313673a57
Create Date: 2021-06-09 17:29:01.775364

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '827ce2c7fd3d'
down_revision = '6e5313673a57'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('monster_cards_attribute_fkey', 'monster_cards', type_='foreignkey')
    op.drop_constraint('monster_cards_race_fkey', 'monster_cards', type_='foreignkey')
    op.drop_constraint('monster_cards__type_fkey', 'monster_cards', type_='foreignkey')
    op.drop_column('monster_cards', '_type')
    op.drop_column('monster_cards', 'race')
    op.drop_column('monster_cards', 'attribute')
    op.drop_constraint('spell_trap_cards__type_fkey', 'spell_trap_cards', type_='foreignkey')
    op.drop_constraint('spell_trap_cards_race_fkey', 'spell_trap_cards', type_='foreignkey')
    op.drop_column('spell_trap_cards', '_type')
    op.drop_column('spell_trap_cards', 'race')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('spell_trap_cards', sa.Column('race', sa.INTEGER(), autoincrement=False, nullable=False))
    op.add_column('spell_trap_cards', sa.Column('_type', sa.INTEGER(), autoincrement=False, nullable=False))
    op.create_foreign_key('spell_trap_cards_race_fkey', 'spell_trap_cards', 'spell_trap_card_races', ['race'], ['id'])
    op.create_foreign_key('spell_trap_cards__type_fkey', 'spell_trap_cards', 'spell_trap_card_types', ['_type'], ['id'])
    op.add_column('monster_cards', sa.Column('attribute', sa.INTEGER(), autoincrement=False, nullable=False))
    op.add_column('monster_cards', sa.Column('race', sa.INTEGER(), autoincrement=False, nullable=False))
    op.add_column('monster_cards', sa.Column('_type', sa.INTEGER(), autoincrement=False, nullable=False))
    op.create_foreign_key('monster_cards__type_fkey', 'monster_cards', 'monster_card_types', ['_type'], ['id'])
    op.create_foreign_key('monster_cards_race_fkey', 'monster_cards', 'monster_card_races', ['race'], ['id'])
    op.create_foreign_key('monster_cards_attribute_fkey', 'monster_cards', 'monster_card_attributes', ['attribute'], ['id'])
    # ### end Alembic commands ###