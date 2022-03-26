import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import AuthPage from "./components/AuthPage";

import NavBar from "./components/NavBar";
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
  const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {/* <NavBar /> */}
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
          <Store />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
