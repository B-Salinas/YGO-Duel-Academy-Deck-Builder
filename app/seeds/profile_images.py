from app.models import db, Profile_Image


def seed_profile_images():

    # 1
    prof_banner = Profile_Image(
        img_url="https://res.cloudinary.com/soundtrack-2/image/upload/v1623173089/ygo-da-deck-builder/profile_images/prof_banner_c5qipu.png"
    )
    db.session.add(prof_banner)


    # 2
    jaden = Profile_Image(
        img_url="https://res.cloudinary.com/soundtrack-2/image/upload/v1623173089/ygo-da-deck-builder/profile_images/jaden_yugi_nhd8fu.png"
    )
    db.session.add(jaden)


    # 3
    syrus = Profile_Image(
        img_url="https://res.cloudinary.com/soundtrack-2/image/upload/v1623173089/ygo-da-deck-builder/profile_images/syrus_truesdale_omrvam.png"
    )
    db.session.add(syrus)


    # 4
    chumley = Profile_Image(
        img_url="https://res.cloudinary.com/soundtrack-2/image/upload/v1623173089/ygo-da-deck-builder/profile_images/chumley_huffington_vwivmj.png"
    )
    db.session.add(chumley)


    # 5
    bastion = Profile_Image(
        img_url="https://res.cloudinary.com/soundtrack-2/image/upload/v1623173089/ygo-da-deck-builder/profile_images/bastion_misawa_jsgyo1.png"
    )
    db.session.add(bastion)


    # 6
    alexis = Profile_Image(
        img_url="https://res.cloudinary.com/soundtrack-2/image/upload/v1623173089/ygo-da-deck-builder/profile_images/alexis_rhodes_frlh5k.png"
    )
    db.session.add(alexis)


    # 7
    chazz = Profile_Image(
        img_url="https://res.cloudinary.com/soundtrack-2/image/upload/v1623173089/ygo-da-deck-builder/profile_images/chazz_princeton_qdkrtn.png"
    )
    db.session.add(chazz)




    db.session.commit()


def undo_profile_images():
    db.session.execute('TRUNCATE profile_images RESTART IDENTITY CASCADE;')
    db.session.commit()
