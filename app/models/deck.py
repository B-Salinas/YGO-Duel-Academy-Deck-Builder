from sqlalchemy.orm import backref
from .db import db

from .monster_card import Monster_Card
from .spell_trap_card import Spell_Trap_Card
from .deck_to_cards import deck_monster_cards, deck_spell_trap_cards

class Deck(db.Model):
    __tablename__ = 'decks'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False, unique=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    user = db.relationship("User", back_populates="decks")

    monster_cards = db.relationship("Monster_Card", backref="decks", secondary=deck_monster_cards)
    spell_trap_cards = db.relationship("Spell_Trap_Card", backref="decks", secondary=deck_spell_trap_cards)

    @property
    def cards(self):
        return [*self.monster_cards, *self.spell_trap_cards]

    @cards.setter
    def cards(self, cards_list):
        self.monster_cards = []
        self.spell_trap_cards = []

        if not len(cards_list):
            return
        
        for card in cards_list:
            if isinstance(card, Monster_Card):
                self.monster_cards.append(card)
            elif isinstance(card, Spell_Trap_Card):
                self.spell_trap_cards.append(card)


    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "user_id": self.user_id
        }
