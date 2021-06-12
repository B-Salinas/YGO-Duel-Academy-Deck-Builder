from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    # demo = User (
    #     username='Demo', 
    #     email='demo@aa.io',
    #     password='password'
    # )
    
    # 1
    demo = User(
        name="Demo Duelist",
        email="demo@aa.io",
        password="password",
        dorm_id=1,
        title_id=1,
        profile_img=1
    )
    db.session.add(demo)


    # 2
    jaden = User(
        name="Jaden Yugi",
        email="J.Yugi@da.com",
        password="winged_kuriboh",
        dorm_id=1, 
        title_id=5,
        profile_img=2
    )
    db.session.add(jaden)


    # 3
    yugi = User(
        name="Yugi Moto",
        email="kog@yugioh.com",
        password="gramps",
        dorm_id=1,
        title_id=9,
        profile_img=1
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
