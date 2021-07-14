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
          <Store />
        </ProtectedRoute>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
