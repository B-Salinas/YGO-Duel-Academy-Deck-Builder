from app.models import db, Profile_Image

def seed_profile_images():
  url_path = "https://res.cloudinary.com/soundtrack-2/image/upload/v1623173089/ygo-da-deck-builder/profile_images/"
  img_data = [
    {
      "name": 'Professor Banner',
      "filename": "prof_banner_c5qipu.png"
    },
    {
      "name": 'Chumley Huffington',
      "filename": "asdf.png"
    },
    {
      "name": 'Jaden Yugi',
      "filename": "jaden_yugi_nhd8fu.png"
    },
    {
      "name": 'Syrus Truesdale',
      "filename": "prof_bann32er_c5qipu.png"
    },
    {
      "name": 'Chazz Princeton',
      "filename": "prof_ban3aewfner_c5qipu.png"
    },
    {
      "name": 'Bastion Misawa',
      "filename": "asd332r.png"
    },
    {
      "name": 'Alexis Rhodes',
      "filename": "prof_banhshdhner_c5qipu.png"
    },
    {
      "name": 'Yugi Mutou',
      "filename": "yugi-moto_x30ozk.png"
    }
  ]

  for profile_image in img_data:
    data = Profile_Image(
      name = profile_image["name"],
      img_url = url_path + profile_image["filename"]
    )

    db.session.add(data)

  db.session.commit()

def undo_profile_images():
  db.session.execute("TRUNCATE profile_images RESTART IDENTITY CASCADE;")
  db.session.commit()
