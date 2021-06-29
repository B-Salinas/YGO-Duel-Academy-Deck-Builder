from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    url_path = "https://res.cloudinary.com/soundtrack-2/image/upload/v1623173089/ygo-da-deck-builder/profile_images/"
    
    # 1
    demo = User(
        name="Demo Duelist",
        email="demo@aa.io",
        password="password",
        dorm="Slifer Red Dorm",
        title="Apprentice Duelist",
        profile_img='{url}{char}'.format(
            url=url_path, 
            char="prof_banner_c5qipu.png")
        
    )
    db.session.add(demo)


    # 2
    jaden = User(
        name="Jaden Yugi",
        email="J.Yugi@da.com",
        password="winged_kuriboh",
        dorm="Slifer Red Dorm",
        title="Superior Duelist",
        profile_img='{url}{char}'.format(
            url=url_path, 
            char="jaden_yugi_nhd8fu.png")
    )
    db.session.add(jaden)


    # 3
    yugi = User(
        name="Yugi Muto",
        email="kog@yugioh.com",
        password="gramps",
        dorm="Slifer Red Dorm",
        title="King of Games",
        profile_img='{url}{char}'.format(
            url=url_path, 
            char="yugi-moto_x30ozk.png")
    )
    db.session.add(yugi)




    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
