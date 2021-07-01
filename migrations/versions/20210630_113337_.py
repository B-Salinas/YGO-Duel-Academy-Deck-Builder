"""empty message

Revision ID: c8e9d4c61982
Revises: 34e8f9daa4a7
Create Date: 2021-06-30 11:33:37.012904

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c8e9d4c61982'
down_revision = '34e8f9daa4a7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('monster_cards_deck_id_fkey', 'monster_cards', type_='foreignkey')
    op.drop_column('monster_cards', 'deck_id')
    op.drop_constraint('spell_trap_cards_deck_id_fkey', 'spell_trap_cards', type_='foreignkey')
    op.drop_column('spell_trap_cards', 'deck_id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('spell_trap_cards', sa.Column('deck_id', sa.INTEGER(), autoincrement=False, nullable=True))
    op.create_foreign_key('spell_trap_cards_deck_id_fkey', 'spell_trap_cards', 'decks', ['deck_id'], ['id'])
    op.add_column('monster_cards', sa.Column('deck_id', sa.INTEGER(), autoincrement=False, nullable=True))
    op.create_foreign_key('monster_cards_deck_id_fkey', 'monster_cards', 'decks', ['deck_id'], ['id'])
    # ### end Alembic commands ###