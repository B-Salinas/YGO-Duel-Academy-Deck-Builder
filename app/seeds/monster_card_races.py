from app.models import db, Monster_Card_Race


def seed_monster_card_races():

    # 1
    aqua = Monster_Card_Race(race="Aqua")
    db.session.add(aqua)


    # 2
    beast = Monster_Card_Race(race="Beast")
    db.session.add(beast)


    # 3
    beast_warrior = Monster_Card_Race(race="Beast-Warrior")
    db.session.add(beast_warrior)


    # 4 
    creator_god = Monster_Card_Race(race="Creator-God")
    db.session.add(creator_god)


    # 5
    dinosaur = Monster_Card_Race(race="Dinosaur")
    db.session.add(dinosaur)


    # 6
    divine_beast = Monster_Card_Race(race="Divine Beast")
    db.session.add(divine_beast)


    # 7
    dragon = Monster_Card_Race(race="Dragon")
    db.session.add(dragon)


    # 8
    fairy = Monster_Card_Race(race="Fairy")
    db.session.add(fairy)


    # 9
    fiend = Monster_Card_Race(race="Fiend")
    db.session.add(fiend)


    # 10
    fish = Monster_Card_Race(race="Fish")
    db.session.add(fish)


    # 11
    insect = Monster_Card_Race(race="Insect")
    db.session.add(insect) 


    # 12
    machine = Monster_Card_Race(race="Machine")
    db.session.add(machine)


    # 13
    normal = Monster_Card_Race(race="Normal")
    db.session.add(normal)


    # 14
    plant = Monster_Card_Race(race="Plant")
    db.session.add(plant)


    # 15
    psychic = Monster_Card_Race(race="Psychic")
    db.session.add(psychic)


    # 16
    pyro = Monster_Card_Race(race="Pyro")
    db.session.add(pyro)


    # 17
    reptile = Monster_Card_Race(race="Reptile")
    db.session.add(reptile)


    # 18
    rock = Monster_Card_Race(race="Rock")
    db.session.add(rock)


    # 19
    sea = Monster_Card_Race(race="Sea")
    db.session.add(sea)


    # 20
    serpent = Monster_Card_Race(race="Serpent")
    db.session.add(serpent)


    # 21
    spellcaster = Monster_Card_Race(race="Spellcaster")
    db.session.add(spellcaster)


    # 22
    thunder = Monster_Card_Race(race="Thunder")
    db.session.add(thunder)


    # 23
    warrior = Monster_Card_Race(race="Warrior")
    db.session.add(warrior)


    # 24
    winged_beast = Monster_Card_Race(race="Winged Beast")
    db.session.add(winged_beast)


    # 25
    wyrm = Monster_Card_Race(race="Wyrm")
    db.session.add(wyrm)


    # 26
    zombie = Monster_Card_Race(race="Zombie")
    db.session.add(zombie)




    db.session.commit()


def undo_monster_card_races():
    db.session.execute('TRUNCATE monster_card_races RESTART IDENTITY CASCADE;')
    db.session.commit()
