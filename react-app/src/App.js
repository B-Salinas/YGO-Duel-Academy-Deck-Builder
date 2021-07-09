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

import UsersList from "./components/UsersList";
import User from "./components/User";

import Footer from "./components/Footer";
import DeckList from "./components/Decklist";


import { authenticate } from "./store/session";

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
        <Route path="/" exact={true}>
          <SplashPage />
        </Route>
        <Route path="/login" exact={true}>
          <AuthPage />
        </Route>
        <Route path="/sign-up" exact={true}>
          <AuthPage />
        </Route>


        <ProtectedRoute path="/mainmenu" exact={true} >
          <MainMenu />
        </ProtectedRoute>
        <ProtectedRoute path="/about" exact={true} >
          <AboutPage />
        </ProtectedRoute>
        <ProtectedRoute path="/decks/new" exact={true} >
          <DeckBuilder />
        </ProtectedRoute>
        <ProtectedRoute path="/decks/:deck_id/edit" exact={true} >
          <DeckBuilder />
        </ProtectedRoute>
        <ProtectedRoute path="/decklist" exact={true} >
          <DeckList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/store" exact={true} >
          <Store />
        </ProtectedRoute>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
