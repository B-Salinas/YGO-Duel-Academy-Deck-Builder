import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import AuthPage from "./components/AuthPage";

import DeckBuilder from "./components/DeckBuilder";
import AboutPage from "./components/AboutPage";
import MainMenu from './components/MainMenu'
import SplashPage from "./components/SplashPage";
import Store from './components/Store'
import ProfilePage from "./components/ProfilePage";

import Footer from "./components/Footer";
import DeckList from "./components/Decklist";


import { authenticate } from "./store/session";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    }
    )();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <SplashPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/sign-up" exact>
          <SignUpPage />
        </Route>

<<<<<<< HEAD

        <ProtectedRoute path="/mainmenu" exact >
          <MainMenu />
        </ProtectedRoute>
        <ProtectedRoute path="/about" exact >
          <AboutPage />
        </ProtectedRoute>
        <ProtectedRoute path="/decks/new" exact >
          <DeckBuilder />
        </ProtectedRoute>
        <ProtectedRoute path="/decks/:deck_id/edit" exact >
          <DeckBuilder />
        </ProtectedRoute>
        <ProtectedRoute path="/decklist" exact >
          <DeckList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact >
          <ProfilePage/>
        </ProtectedRoute>
        <ProtectedRoute path="/store" exact >
=======
        {/* All of these should be protected routes, but for the time being, I'm making them regular routes */}
        <Route path="/mainmenu" exact={true} >
          <MainMenu />
        </Route>
        <Route path="/about" exact={true} >
          <AboutPage />
        </Route>
        <Route path="/deckbuilder" exact={true} >
          <DeckBuilder />
        </Route>
        <Route path="/decklist" exact={true} >
          <DeckList />
        </Route>
        <Route path="/users" exact={true} >
          <UsersList/>
        </Route>
        <Route path="/users/:userId" exact={true} >
          <User />
        </Route>
        <Route path="/store" exact={true} >
>>>>>>> 82aea66... removed protected routes for the meantime
          <Store />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
