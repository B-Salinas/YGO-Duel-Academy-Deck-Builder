/**************************** CONSTANTS ***********************************/

const GET_ALL_DECKS = "decks/GET_ALL_DECKS"
const GET_ONE_DECK = "decks/GET_ONE_DECK"

/***************************** ACTION CREATORS *********************************/

const getDecks = (allDecks) => ({
    type: GET_ALL_DECKS,
    allDecks
});

const getDeck = (oneDeck) => ({
    type: GET_ONE_DECK,
    oneDeck
});

/********************************* THUNKS ************************************/

export const getAllDecks = () => async (dispatch) => {
    const response = await fetch('/api/decks')

    if (!response.ok) {
        const errors = await response.json()
        return `Yikes! Something went wrong: ${ errors }`
    }

    const allDecks = await response.json()
    dispatch(getDecks(allDecks))
}

export const getOneDeck = (id) => async (dispatch) => {
    const response = await fetch(`/api/decks/${id}`)

    if (!response.ok) {
        const errors = await response.json()
        return `Yikes! Something went wrong: ${errors}`
    }

    const oneDeck = await response.json()
    dispatch(getDeck(oneDeck))
}

/***************************** INITIAL STATE *********************************/

const initialState = {
    all: {},
    current: {}
}

/****************************** REDUCER ************************************/

// the reducer only goes to the index.js file in the store folder
export default function deckReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DECKS:
            return {
                ...state,
                all: action.allDecks
            }

        case GET_ONE_DECK:
            return {
                ...state,
                current: action.oneDeck
            }

        default:
            return state;
    }
}