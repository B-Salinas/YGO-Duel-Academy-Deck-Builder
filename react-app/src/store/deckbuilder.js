/**************************** CONSTANTS ***********************************/

const GET_ONE_DECK = "deckbuilder/GET_ONE_DECK"
const GET_ONE_CARD ="deckbuilder/GET_ONE_CARD"

/***************************** ACTION CREATORS *********************************/

const getDeck = (oneDeck) => ({
    type: GET_ONE_DECK,
    oneDeck
});

const getCard = (oneCard) => ({
    type: GET_ONE_CARD,
    oneCard
});


/********************************* THUNKS ************************************/

export const getOneDeck = (deck_id) => async (dispatch) => {
    const response = await fetch(`/api/decks/${deck_id}`)

    if (!response.ok) {
        const errors = await response.json()
        return `Yikes! Something went wrong: ${errors}`
    }

    const oneDeck = await response.json()
    dispatch(getDeck(oneDeck))
}

/*****/

export const getOneCard = (user_id, card_id) => async (dispatch) => {
    const response = await fetch(`/api/users/${user_id}/trunk/${card_id}`)

    if (!response.ok) {
        const errors = await response.json()
        return `Yikes! Something went wrong: ${errors}`
    }

   const oneCard = await response.json()
   dispatch(getCard(oneCard))

}

/***************************** INITIAL STATE *********************************/

const initialState = {
    current_deck: null,
    current_trunk_card: null,
}

/****************************** REDUCER ************************************/

export default function deckBuilderReducer (state = initialState, action) {
    switch (action.type) {
        case GET_ONE_DECK:
            return {
                ...state,
                current_deck: action.oneDeck
            }

        case GET_ONE_CARD:
            return {
                ...state,
                current_trunk_card: action.oneCard
            }
        
        default:
            return state;
    }
}