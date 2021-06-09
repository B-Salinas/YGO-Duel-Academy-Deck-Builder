from .db import db

user_monster_cards = db.Table(
    "user_monster_cards",
    db.Column(
        "user_id",
        db.Integer,
        db.ForeignKey("users.id"),
        primary_key=True
    ),
    db.Column(
        "monster_card_id",
        db.Integer,
        db.ForeignKey("monster_cards.id"),
        primary_key=True
    )
)

user_spell_trap_cards = db.Table(
    "user_spell_trap_cards",
    db.Column(
        "user_id",
        db.Integer,
        db.ForeignKey("users.id"),
        primary_key=True
    ),
    db.Column(
        "spell_trap_card_id",
        db.Integer,
        db.ForeignKey("spell_trap_cards.id"),
        primary_key=True
    )
)
