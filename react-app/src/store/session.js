/**************************** CONSTANTS ***********************************/

const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const DELETE_DECK = "session/DELETE_DECK";
const ADD_DECK = "session/ADD_DECK";
const EDIT_DECK = "session/EDIT_DECK";
const GET_DECK_CARDS = "session/GET_DECK_CARDS";
const REMOVE_FROM_DECK = "session/REMOVE_FROM_DECK";
const ADD_TO_DECK = "session/ADD_TO_DECK";

/***************************** ACTION CREATORS *********************************/
const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
});

const deleteDeck = (deckId) => ({
  type: DELETE_DECK,
  payload: deckId
});

/********************************* THUNKS ************************************/

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  if (data.errors) {
    return;
  }

  dispatch(setUser(data))
}

/*****/

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  const data = await response.json();
  if (data.errors) {
    return data;
  }

  dispatch(setUser(data))
  return {};
}

/*****/

export const logout = () => async (dispatch) => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    }
  });

  // const data = await response.json();
  dispatch(removeUser());
};

/*****/

export const signUp = ({ name, email, password }) => async (dispatch) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });
  const data = await response.json();
  if (data.errors) {
    dispatch(setUser(null))
    return data;
  }

  dispatch(setUser(data))
  return {};
};

/*****/

export const deleteUserDeck = (deckId) => async (dispatch) => {
  const response = await fetch("/api/users/decks", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      deckId
    })
  });

  if (response.ok) {
    const data = await response.json();
    console.log("data", data);
  } else {
    console.log("error deleting deck...");
  }
};


/***************************** INITIAL STATE *********************************/

const initialState = {
  user: null
};

/****************************** REDUCER ************************************/

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload }
    case REMOVE_USER:
      return { user: null }
    default:
      return state;
  }
}
