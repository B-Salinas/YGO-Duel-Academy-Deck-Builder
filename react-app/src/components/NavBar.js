import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

// import the thunks that you need
import { getAllSpellTrapCards } from '../store/spell_trap_card'
import { getAllMonsterCards } from '../store/monster_card';
import { getAllDecks } from '../store/deck'

// CHNAGE THE NAMES
import { getAllTypes, getAllRaces, getAllAttributes } from '../store/monster_card_extra';
// import { getAllTypes, getAllRaces } from '../store/spell_trap_card_extra'

// making sure my store works
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {
  const dispatch = useDispatch();
  const spell_trap_cards = useSelector(state => state.spell_trap_cards.all)
  const monster_cards = useSelector(state => state.monster_cards.all)
  // const mc_types = useSelector(state => state.monster_card_extras.types)
  const decks = useSelector(state => state.decks.all)

  useEffect(() => {
    dispatch(getAllSpellTrapCards());
    dispatch(getAllMonsterCards());
    dispatch(getAllTypes());
    dispatch(getAllDecks())
  }, [dispatch])

  // useEffect(() => {
  //   dispatch(getAllMonsterCards());
  // }, [dispatch])
 
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
