import {createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import session from "./session"

import monster_cards from './monster_card'
import monster_card_extras from './monster_card_extra'
import spell_trap_cards from './spell_trap_card'
import spell_trap_card_extras from './spell_trap_card_extra'

import decks from './deck'

const rootReducer = combineReducers({
    session,
    monster_cards,
    monster_card_extras,
    spell_trap_cards,
    spell_trap_card_extras,
    decks
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
