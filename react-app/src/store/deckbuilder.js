const GET_ONE_DECK = "deckbuilder/GET_ONE_DECK"

const getDeck = (oneDeck) => ({
    type: GET_ONE_DECK,
    oneDeck
});

export const getOneDeck = (id) => async (dispatch) => {
    const response = await fetch(`/api/decks/${id}`)

    if (!response.ok) {
        const errors = await response.json()
        return `Yikes! Something went wrong: ${errors}`
    }

    const oneDeck = await response.json()
    dispatch(getDeck(oneDeck))
}


const initialState = {
    current_deck: null,
}

export default function reducer (state = initialState, action) {
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