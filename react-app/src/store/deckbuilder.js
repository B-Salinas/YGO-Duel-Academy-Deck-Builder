/**************************** CONSTANTS ***********************************/

const GET_ONE_DECK = "deckbuilder/GET_ONE_DECK"
const GET_ONE_DECKS_CARDS = "deckbuilder/GET_ONE_DECKS_CARDS"

const GET_TRUNK_CARDS = "deckbuilder/GET_TRUNK_CARDS"
const GET_ONE_TRUNK_CARD = "deckbuilder/GET_ONE_TRUNK_CARD"

const GET_ONE_CARD ="deckbuilder/GET_ONE_CARD"

/***************************** ACTION CREATORS *********************************/

const getDeck = (oneDeck) => ({
    type: GET_ONE_DECK,
    oneDeck
});

const getDeckCards = (deckCards) => ({
    type: GET_ONE_DECKS_CARDS,
    deckCards
})

const getTrunk = (allTrunkCards) => ({
    type: GET_TRUNK_CARDS,
    allTrunkCards
})

const getOneTrunkCard = (oneTrunkCard) => ({
    type: GET_ONE_TRUNK_CARD,
    oneTrunkCard
})

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

export const getCardsFromDeck = (deck_id) => async (dispatch) => {
    const response = await fetch(`/api/decks/${deck_id}/all`)

    if (!response.ok) {
        const errors = await response.json()
        return `Yikes! Something went wrong: ${errors}`
    }

    const deckCards = await response.json()
    dispatch(getDeckCards(deckCards))
}


/*****/



export const getTrunkCards = (user_id) => async (dispatch) => {
    const response = await fetch(`/api/users/${user_id}/trunk`)

    if (!response.ok) {
        const errors = await response.json()
        return `Yikes! Something went wrong: ${errors}`
    }

    const trunkCards = await response.json()
    dispatch(getTrunk(trunkCards))
}

/*****/


export const getTrunkCard = (user_id, card_id) => async (dispatch) => {
    const response = await fetch(`/api/users/${user_id}/trunk/${card_id}`)

    if (!response.ok) {
        const errors = await response.json()
        return `Yikes! Something went wrong: ${errors}`
    }

    const trunkCard = await response.json()
    dispatch(getOneTrunkCard(trunkCard))
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
    current_deck_cards: null,
    current_trunk: null,
    current_trunk_card: null,
}

/****************************** REDUCER ************************************/

export default function deckBuilderReducer (state = initialState, action) {
    switch (action.type) {
        case GET_TRUNK_CARDS:
            return {
                ...state,
                current_trunk: action.allTrunkCards
            }

        case GET_ONE_DECK:
            return {
                ...state,
                current_deck: action.oneDeck
            }

        case GET_ONE_DECKS_CARDS:
            return {
                ...state,
                current_deck_cards: action.deckCards
            }

        case GET_ONE_TRUNK_CARD:
            return {
                ...state,
                current_trunk_card: action.oneTrunkCard
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