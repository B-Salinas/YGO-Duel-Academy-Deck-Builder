"""empty message

Revision ID: 34e8f9daa4a7
Revises: a5c597fea254
Create Date: 2021-06-29 16:06:31.745768

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '34e8f9daa4a7'
down_revision = 'a5c597fea254'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('monster_card_races')
    op.drop_table('spell_trap_card_types')
    op.drop_table('monster_card_attributes')
    op.drop_table('spell_trap_card_races')
    op.drop_table('monster_card_types')
    op.add_column('users', sa.Column('dorm', sa.String(), nullable=False))
    op.add_column('users', sa.Column('profile_img', sa.String(), nullable=False))
    op.add_column('users', sa.Column('title', sa.String(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'title')
    op.drop_column('users', 'profile_img')
    op.drop_column('users', 'dorm')
    op.create_table('monster_card_types',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('_type', sa.VARCHAR(), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='monster_card_types_pkey')
    )
    op.create_table('spell_trap_card_races',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('race', sa.VARCHAR(), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='spell_trap_card_races_pkey')
    )
    op.create_table('monster_card_attributes',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('attribute', sa.VARCHAR(), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='monster_card_attributes_pkey')
    )
    op.create_table('spell_trap_card_types',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('_type', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='spell_trap_card_types_pkey')
    )
    op.create_table('monster_card_races',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('race', sa.VARCHAR(), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='monster_card_races_pkey')
    )
    # ### end Alembic commands ###