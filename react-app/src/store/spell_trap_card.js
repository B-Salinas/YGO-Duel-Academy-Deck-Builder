/**************************** CONSTANTS ***********************************/

const GET_ALL_SPELL_TRAP_CARDS = "spell_trap_cards/SET_ALL_SPELL_TRAP_CARDS"
const GET_ONE_SPELL_TRAP_CARD = "spell_trap_cards/SET_ONE_SPELL_TRAP_CARD"

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

const intialState = {
    spell_trap_cards: {},
    spell_trap_card: {}
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
    return allSpellTrapCards
}



const getOneSpellTrapCard = (id) => async (dispatch) => {
    const response = await fetch(`/api/spell_trap_cards/${id}`)

    if (!response.ok) {
        const errors = await response.json()
        return `Uh oh! Something went wrong ${errors}`
    }

    const oneSpellTrapCard = await response.json()
    dispatch(getSpellTrapCard(oneSpellTrapCard))
    return oneSpellTrapCard
}

/****************************** REDUCER ************************************/

export default function spellTrapCardsReducer(state = intialState, action) {
    let newState;

    switch (action.type) {
        case GET_ALL_SPELL_TRAP_CARDS:
            return {
                ...state,
                spell_trap_cards: action.allSpellTrapCards
            }

        case GET_ONE_SPELL_TRAP_CARD:
            return {
                ...state,
                spell_trap_card: action.onSpellTrapCard
            }

        default:
            return state;
    }
}