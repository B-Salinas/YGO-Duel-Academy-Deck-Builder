from werkzeug.security import generate_password_hash
from app.models import db, User, Profile_Image

# Adds a demo user, you can add other users here if you want
def seed_users():
  profile_img_prof_banner = Profile_Image.query.filter(Profile_Image.name.ilike("Prof. Banner")).one()
  profile_img_jaden_yugi = Profile_Image.query.filter(Profile_Image.name.ilike("Jaden Yugi")).one()
  profile_img_yugi_mutou = Profile_Image.query.filter(Profile_Image.name.ilike("Yugi Mutou")).one()

  # 1
  demo = User(
    name="Demo Duelist",
    email="demo@aa.io",
    password="password",
    dorm="Slifer Red Dorm",
    title="Apprentice Duelist",
    profile_img=profile_img_prof_banner.img_url
  )
  db.session.add(demo)


  # 2
  jaden = User(
    name="Jaden Yugi",
    email="J.Yugi@da.com",
    password="winged_kuriboh",
    dorm="Slifer Red Dorm",
    title="Superior Duelist",
    profile_img=profile_img_jaden_yugi.img_url
  )
  db.session.add(jaden)


  # 3
  yugi = User(
    name="Yugi Muto",
    email="kog@yugioh.com",
    password="gramps",
    dorm="Slifer Red Dorm",
    title="King of Games",
    profile_img=profile_img_yugi_mutou.img_url
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
