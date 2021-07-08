/**************************** CONSTANTS ***********************************/

const GET_ONE_DECK = "deckbuilder/GET_ONE_DECK"

/***************************** ACTION CREATORS *********************************/

const getDeck = (oneDeck) => ({
    type: GET_ONE_DECK,
    oneDeck
});


/********************************* THUNKS ************************************/

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
    current_deck: null,
}

/****************************** REDUCER ************************************/

export default function deckBuilderReducer (state = initialState, action) {
    switch (action.type) {
        case GET_ONE_DECK:
            return {
                ...state,
                current_deck: action.oneDeck
            }
        
        default:
            return state;
    }
}