from werkzeug.security import generate_password_hash
from app.models import db, User, Profile_Image, Title, Dorm

# Adds a demo user, you can add other users here if you want
def seed_users():
  profile_img_prof_banner = Profile_Image.query.filter(Profile_Image.name.ilike("Professor Banner")).one()
  profile_img_jaden_yugi = Profile_Image.query.filter(Profile_Image.name.ilike("Jaden Yugi")).one()
  profile_img_yugi_mutou = Profile_Image.query.filter(Profile_Image.name.ilike("Yugi Mutou")).one()
  title_apprentice = Title.query.filter(Title.name.ilike("Apprentice Duelist")).one()
  title_superior = Title.query.filter(Title.name.ilike("Superior Duelist")).one()
  title_kog = Title.query.filter(Title.name.ilike("King of Games")).one()
  dorm_slifer_red = Dorm.query.filter(Dorm.name.ilike("Slifer Red Dorm")).one()

  # 1
  demo = User(
    name="Demo Duelist",
    email="demo@aa.io",
    password="password",
    dorm_id=dorm_slifer_red.id,
    title_id=title_apprentice.id,
    profile_img_id=profile_img_prof_banner.id
  )
  db.session.add(demo)


  # 2
  jaden = User(
    name="Jaden Yugi",
    email="J.Yugi@da.com",
    password="winged_kuriboh",
    dorm_id=dorm_slifer_red.id,
    title_id=title_superior.id,
    profile_img_id=profile_img_jaden_yugi.id
  )
  db.session.add(jaden)


  # 3
  yugi = User(
    name="Yugi Muto",
    email="kog@yugioh.com",
    password="gramps",
    dorm_id=dorm_slifer_red.id,
    title_id=title_kog.id,
    profile_img_id=profile_img_yugi_mutou.id
  )
  db.session.add(yugi)

  db.session.commit()


  demo.sign_up()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
