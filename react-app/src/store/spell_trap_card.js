/**************************** TYPES ***********************************/

const GET_ALL_SPELL_TRAP_CARDS = "spell_trap_cards/GET_ALL_SPELL_TRAP_CARDS"
const GET_ONE_SPELL_TRAP_CARD = "spell_trap_cards/GET_ONE_SPELL_TRAP_CARD"

/***************************** ACTION CREATORS *********************************/

const getSpellTrapCards = (allSpellTrapCards) => ({
    type: GET_ALL_SPELL_TRAP_CARDS,
    allSpellTrapCards
});

const getSpellTrapCard = (oneSpellTrapCard) => ({
    type: GET_ONE_SPELL_TRAP_CARD,
    oneSpellTrapCard
});

/***************************** INITIAL STATE *********************************/

const initialState = {
    all: {},
    current: {}
}

/********************************* THUNKS ************************************/

export const getAllSpellTrapCards = () => async (dispatch) => {
    const response = await fetch('/api/spell_trap_cards')
    
    if (!response.ok) {
        const errors = await response.json()
        return `Uh oh! Something went wrong ${ errors }`
    }

    const allSpellTrapCards = await response.json()
    dispatch(getSpellTrapCards(allSpellTrapCards))
}

/*****/

export const getOneSpellTrapCard = (id) => async (dispatch) => {
    const response = await fetch(`/api/spell_trap_cards/${id}`)

    if (!response.ok) {
        const errors = await response.json()
        return `Uh oh! Something went wrong ${errors}`
    }

    const oneSpellTrapCard = await response.json()
    dispatch(getSpellTrapCard(oneSpellTrapCard))
}

/****************************** REDUCER ************************************/

// the reducer only goes to the index.js file in the store folder
export default function spellTrapCardsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_SPELL_TRAP_CARDS:
            return {
                ...state,
                all: action.allSpellTrapCards
            }

        case GET_ONE_SPELL_TRAP_CARD:
            return {
                ...state,
                current: action.oneSpellTrapCard
            }

        default:
            return state;
    }
}