import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

import { getAllSpellTrapCards } from '../store/spell_trap_card'
import { getAllMonsterCards } from '../store/monster_card';

// making sure my store works
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {
  const dispatch = useDispatch();
  const spell_trap_cards = useSelector(state => state.spell_trap_cards.all)
  const monster_cards = useSelector(state => state.all_monster_cards.monster_cards)

  useEffect(() => {
    dispatch(getAllSpellTrapCards());
  }, [dispatch])

  useEffect(() => {
    dispatch(getAllMonsterCards())
  }, [dispatch])

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
