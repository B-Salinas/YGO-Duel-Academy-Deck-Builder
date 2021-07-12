/**************************** CONSTANTS ***********************************/

const GET_ALL_DECKS = "decks/GET_ALL_DECKS"
const GET_ONE_DECK = "decks/GET_ONE_DECK"

const ADD_DECK = "decks/ADD_DECK"

const DELETE_DECK ="decks/DELETE_DECK"

/***************************** ACTION CREATORS *********************************/

const getDecks = (allDecks) => ({
    type: GET_ALL_DECKS,
    allDecks
});

const getDeck = (oneDeck) => ({
    type: GET_ONE_DECK,
    oneDeck
});

const addDeck = (newDeck) => ({
    type: ADD_DECK,
    newDeck
});

const deleteDeck = () => ({
    type: DELETE_DECK,
})


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

/*****/

export const getOneDeck = (id) => async (dispatch) => {
    const response = await fetch(`/api/decks/${id}`)

    if (!response.ok) {
        const errors = await response.json()
        return `Yikes! Something went wrong: ${errors}`
    }

    const oneDeck = await response.json()
    dispatch(getDeck(oneDeck))
}

/*****/

export const addOneDeck = ({deckName, user_id}) => async dispatch => {
    const response = await fetch(`/api/decks/`, {
        method: `POST`,
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            deckName,
            user_id
        })
    })

    if (!response.ok) {
        const errors = await response.json()
        return `Yikes! Something went wrong: ${errors}`
    }

    const newDeck = await response.json()
    dispatch(addDeck(newDeck))
}

/*****/

export const deleteOneDeck = ({deck_id}) => async dispatch => {
    const response = await fetch(`/api/decks/${deck_id}`, {
        method: `DELETE`,
        // headers: {
        //     'Content-Type': "application/json"
        // },
        // body: JSON.stringify({
        //     deck_id
        // })
    })

    if (!response.ok) {
        const errors = await response.json()
        return `Yikes! Something went wrong: ${errors}`
    }

    const deletedDeck = await response.json()
    dispatch(deleteDeck(deletedDeck))
    return null
}



/***************************** INITIAL STATE *********************************/

const initialState = {
    all: {},
    current: {},
    new: {}
}

/****************************** REDUCER ************************************/

// the reducer only goes to the index.js file in the store folder
export default function deckReducer(state = initialState, action) {
    
    // const newState = { ...state }
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

        case ADD_DECK:
            return {
                ...state,
                new: action.deck
            }
        
        case DELETE_DECK:
            return state

        default:
            return state;
    }
}