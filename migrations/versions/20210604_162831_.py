"""empty message

Revision ID: a06417350adf
Revises: ffdc0a98111c
Create Date: 2021-06-04 16:28:31.460413

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a06417350adf'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('dorms',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('monster_card_attributes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('attribute', sa.Integer(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('monster_card_races',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('race', sa.String(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('monster_card_types',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('type', sa.String(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('profile_images',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('img_url', sa.String(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('spell_trap_card_races',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('race', sa.String(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('spell_trap_card_types',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('type', sa.Integer(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('titles',
    sa.Column('id', sa.String(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('decks',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
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
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
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
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['deck_id'], ['decks.id'], ),
    sa.ForeignKeyConstraint(['race'], ['spell_trap_card_races.id'], ),
    sa.ForeignKeyConstraint(['type'], ['spell_trap_card_types.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column('users', sa.Column('created_at', sa.DateTime(), nullable=False))
    op.add_column('users', sa.Column('dorm_id', sa.String(), nullable=True))
    op.add_column('users', sa.Column('name', sa.String(), nullable=False))
    op.add_column('users', sa.Column('profile_img', sa.String(), nullable=True))
    op.add_column('users', sa.Column('title_id', sa.String(), nullable=True))
    op.add_column('users', sa.Column('updated_at', sa.DateTime(), nullable=False))
    op.drop_constraint('users_username_key', 'users', type_='unique')
    op.create_foreign_key(None, 'users', 'dorms', ['dorm_id'], ['id'])
    op.create_foreign_key(None, 'users', 'titles', ['title_id'], ['id'])
    op.create_foreign_key(None, 'users', 'profile_images', ['profile_img'], ['id'])
    op.drop_column('users', 'username')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('username', sa.VARCHAR(length=40), autoincrement=False, nullable=False))
    op.drop_constraint(None, 'users', type_='foreignkey')
    op.drop_constraint(None, 'users', type_='foreignkey')
    op.drop_constraint(None, 'users', type_='foreignkey')
    op.create_unique_constraint('users_username_key', 'users', ['username'])
    op.drop_column('users', 'updated_at')
    op.drop_column('users', 'title_id')
    op.drop_column('users', 'profile_img')
    op.drop_column('users', 'name')
    op.drop_column('users', 'dorm_id')
    op.drop_column('users', 'created_at')
    op.drop_table('spell_trap_cards')
    op.drop_table('monster_cards')
    op.drop_table('decks')
    op.drop_table('titles')
    op.drop_table('spell_trap_card_types')
    op.drop_table('spell_trap_card_races')
    op.drop_table('profile_images')
    op.drop_table('monster_card_types')
    op.drop_table('monster_card_races')
    op.drop_table('monster_card_attributes')
    op.drop_table('dorms')
    # ### end Alembic commands ###
