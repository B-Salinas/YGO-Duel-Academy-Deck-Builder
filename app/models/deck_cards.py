from .db import db

deck_monster_cards = db.Table(
    "deck_monster_cards",
    db.Column(
        "deck_id",
        db.Integer,
        db.ForeignKey("decks.id"),
        primary_key=True
    ),
    db.Column(
        "monster_card_id",
        db.Integer,
        db.ForeignKey("monster_cards.id"),
        primary_key=True
    )
)

deck_spell_trap_cards = db.Table(
    "deck_spell_trap_cards",
    db.Column(
        "deck_id",
        db.Integer,
        db.ForeignKey("decks.id"),
        primary_key=True
    ),
    db.Column(
        "spell_trap_card_id",
        db.Integer,
        db.ForeignKey("spell_trap_cards.id"),
        primary_key=True
    )
)