![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) ![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white) ![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white) 


#  Welcome to YGO Duel Academy Deck Builder!

### Live Link: [YGO DA Deck Builder](https://en.wikipedia.org/wiki/HTTP_404)

**_YGO Duel Academy Deck Builder-** is a clone of Yu-Gi-Oh! GX: Duel Academy's in-game Deck Builder for the Gameboy Advanced, based on the famous Yu-Gi-Oh! Trading Card Game. Duelists have the option to browse, sort, or filter cards they own in their trunk or acquire new cards through the built-in store, as well as create, edit, rename, or delete their decks.

<p align="center">
  <a href="https://github.com/B-Salinas/YGO-Duel-Academy-Deck-Builder/wiki"><strong>Explore the Wiki »</strong></a> 
  or 
  <a href="https://en.wikipedia.org/wiki/HTTP_404"><strong>Explore the Mock Up »</strong></a> 
</p>

<p align="center">
  <a href="#technologies">Technologies</a> 
  · 
  <a href="#key-features">Key Features</a> 
  · 
  <a href="#wiki-pages">Wiki Pages</a> 
  ·
  <a href="#future-implementations">Future Implementations</a> 
  · 
  <a href="#the-dev-behind-this-project">The Dev Behind This Project</a>
</p>

<p align="center">
  <img src="/ygo-da-gba-homescreen.gif" alt="YGO Duel Academy GBA Game Home Screen" width="750" height="500">
</p>

## Technologies

#### Frontend 
- JavaScript
- React / Redux
- [Chakra-UI](https://chakra-ui.com/)
- CSS
- [React Icons](https://react-icons.github.io/react-icons/)
- Hosted using Heroku and Docker

#### Backend
- Python
- Flask
- PostgreSQL Database
- Alembic
- SQLAlchemy
- [Yu-Gi-Oh! API](https://db.ygoprodeck.com/api-guide/)

## Key Features
- User authentication is handled using [Werkzeug's Security Helpers](https://werkzeug.palletsprojects.com/en/1.0.x/utils/#module-werkzeug.security) for password hashing.
- Grants access to features such as creating, editing, renaming, and deleting decks to authorized users only.
- Designed around a relational database schema, which allows users to browse, sort, and filter cards, as well as update their decks with dynamic data and rendering.
- Makes use of AJAX / API Routes to render elements such as updating and deleting cards and decks asynchronously.
- Includes csrf attack protection and performs front-end and back-end validation on forms.

## Wiki Pages
#### Database Schema
![YGO DA Deck Builder Database Schema](/YGO-DA-Deck-Builder.png)

#### Frontend Routes
- `/`
- `/Edit-Deck`
- `/Store`
- `/Duelist/:id`

#### Backend Routes
- `/api/auth`
- `/api/duelist`
- `/api/duelist/:id/deck`
- `/api/duelist/:id/card`
- `/api/store/packs`

## Future Implementations
- Allowing Users to select a pre-populated profile pictures upon account creation/new game. 
- Allowing Duelist to favorite cards in their trunk. 
- Dynamically rendering music, much like the in-game Deck Builder.

## The Dev Behind This Project
Hey there 👋🏽 My name is Bianca "B" Salinas and I had so much fun creating this project! Feel free to connect with me below :)

<ul>
  <li>
    <a href="https://www.linkedin.com/in/b-salinas/">
      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
    </a>
  </li>
  <li>
    <a href="mailto:b.salinas397@gmail.com">
      <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white">
    </a>
  </li>
</ul>


<p align="center">
  <img src="https://i.pinimg.com/originals/25/b4/f4/25b4f46ee64cdaae5687b8c05b036be9.gif" alt="Jaden Yuki in YGO Bonds Beyond Time Movie">
</p>
