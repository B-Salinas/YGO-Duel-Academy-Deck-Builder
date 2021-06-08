"""empty message

Revision ID: b9001c171640
Revises: 
Create Date: 2021-06-07 18:11:19.456454

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b9001c171640'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('dorms',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('monster_card_attributes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('attribute', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('monster_card_races',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('race', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('monster_card_types',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('type', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('profile_images',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('img_url', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('spell_trap_card_races',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('race', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('spell_trap_card_types',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('type', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('titles',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('email', sa.String(), nullable=False),
    sa.Column('hashed_password', sa.String(), nullable=False),
    sa.Column('dorm_id', sa.Integer(), nullable=True),
    sa.Column('title_id', sa.Integer(), nullable=True),
    sa.Column('profile_img', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['dorm_id'], ['dorms.id'], ),
    sa.ForeignKeyConstraint(['profile_img'], ['profile_images.id'], ),
    sa.ForeignKeyConstraint(['title_id'], ['titles.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('decks',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('monster_cards',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('deck_id', sa.Integer(), nullable=True),
    sa.Column('card_id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('type', sa.Integer(), nullable=False),
    sa.Column('desc', sa.Text(), nullable=False),
    sa.Column('atk', sa.Integer(), nullable=False),
    sa.Column('_def', sa.Integer(), nullable=False),
    sa.Column('level', sa.Integer(), nullable=False),
    sa.Column('race', sa.Integer(), nullable=False),
    sa.Column('attribute', sa.Integer(), nullable=False),
    sa.Column('img_url', sa.String(), nullable=False),
    sa.Column('img_url_small', sa.String(), nullable=False),
    sa.ForeignKeyConstraint(['attribute'], ['monster_card_attributes.id'], ),
    sa.ForeignKeyConstraint(['deck_id'], ['decks.id'], ),
    sa.ForeignKeyConstraint(['race'], ['monster_card_races.id'], ),
    sa.ForeignKeyConstraint(['type'], ['monster_card_types.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('spell_trap_cards',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('deck_id', sa.Integer(), nullable=True),
    sa.Column('card_id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('type', sa.Integer(), nullable=False),
    sa.Column('desc', sa.Text(), nullable=False),
    sa.Column('race', sa.Integer(), nullable=False),
    sa.Column('img_url', sa.String(), nullable=False),
    sa.Column('img_url_small', sa.String(), nullable=False),
    sa.ForeignKeyConstraint(['deck_id'], ['decks.id'], ),
    sa.ForeignKeyConstraint(['race'], ['spell_trap_card_races.id'], ),
    sa.ForeignKeyConstraint(['type'], ['spell_trap_card_types.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('spell_trap_cards')
    op.drop_table('monster_cards')
    op.drop_table('decks')
    op.drop_table('users')
    op.drop_table('titles')
    op.drop_table('spell_trap_card_types')
    op.drop_table('spell_trap_card_races')
    op.drop_table('profile_images')
    op.drop_table('monster_card_types')
    op.drop_table('monster_card_races')
    op.drop_table('monster_card_attributes')
    op.drop_table('dorms')
    # ### end Alembic commands ###