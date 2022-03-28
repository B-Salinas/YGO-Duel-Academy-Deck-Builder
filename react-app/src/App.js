import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import AuthPage from "./components/AuthPage";

import NavBar from "./components/NavBar";

import DeckBuilder from "./components/DeckBuilder";
import AboutPage from "./components/AboutPage";
import MainMenu from "./components/MainMenu";
import SplashPage from "./components/SplashPage";
import Store from "./components/Store";
import ProfilePage from "./components/ProfilePage";

import Footer from "./components/Footer";
import DeckList from "./components/DeckList";
import User from "./components/User";
import UsersList from "./components/UsersList";

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
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      {loaded && (
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

          {/* All of these should be protected routes, but for the time being, I'm making them regular routes */}
          <Route path="/mainmenu" exact={true}>
            <MainMenu />
          </Route>
          <Route path="/about" exact={true}>
            <AboutPage />
          </Route>
          <Route path="/deckbuilder" exact={true}>
            <DeckBuilder />
          </Route>
          <Route path="/decklist" exact={true}>
            <DeckList />
          </Route>
          <Route path="/users" exact={true}>
            <UsersList />
          </Route>
          <Route path="/users/:userId" exact={true}>
            <User />
          </Route>
          <Route path="/store" exact={true}>
            <Store />
          </Route>
        </Switch>
      )}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
