from app.models import db, Monster_Card_Race, spell_trap_card


def seed_monster_card_races():

    zombie = Monster_Card_Race(race="Zombie")
    db.session.add(zombie)

    fiend = Monster_Card_Race(race="Fiend")
    db.session.add(fiend)

    normal = Monster_Card_Race(race="Normal")
    db.session.add(normal)

    rock = Monster_Card_Race(race="Rock")
    db.session.add(rock)

    warrior = Monster_Card_Race(race="Warrior")
    db.session.add(warrior)

    winged_beast = Monster_Card_Race(race="Winged Beast")
    db.session.add(winged_beast)

    spellcaster = Monster_Card_Race(race="Spellcaster")
    db.session.add(spellcaster)

    beast = Monster_Card_Race(race="Beast")
    db.session.add(beast)

    fairy = Monster_Card_Race(race="Fairy")
    db.session.add(fairy)

    fish = Monster_Card_Race(race="Fish")
    db.session.add(fish)

    beast_warrior = Monster_Card_Race(race="Beast-Warrior")
    db.session.add(beast_warrior)

    thunder = Monster_Card_Race(race="Thunder")
    db.session.add(thunder)

    machine = Monster_Card_Race(race="Machine")
    db.session.add(machine)

    sea = Monster_Card_Race(race="Sea")
    db.session.add(sea)

    serpent = Monster_Card_Race(race="Serpent")
    db.session.add(serpent)

    aqua = Monster_Card_Race(race="Aqua")
    db.session.add(aqua)

    plant = Monster_Card_Race(race="Plant")
    db.session.add(plant)

    dragon = Monster_Card_Race(race="Dragon")
    db.session.add(dragon)

    reptile = Monster_Card_Race(race="Reptile")
    db.session.add(reptile)

    psychic = Monster_Card_Race(race="Psychic")
    db.session.add(psychic)

    insect = Monster_Card_Race(race="Insect")
    db.session.add(insect)

    pyro = Monster_Card_Race(race="Pyro")
    db.session.add(pyro)

    dinosaur = Monster_Card_Race(race="Dinosaur")
    db.session.add(dinosaur)

    wyrm = Monster_Card_Race(race="Wyrm")
    db.session.add(wyrm)

    divine_beast = Monster_Card_Race(race="Divine Beast")
    db.session.add(divine_beast)

    creator_god= Monster_Card_Race(race="Creator-God")
    db.session.add(creator_god)


def undo_monster_card_races():
    db.session.execute('TRUNCATE monster_card_races RESTART IDENTITY CASCADE;')
    db.session.commit()
