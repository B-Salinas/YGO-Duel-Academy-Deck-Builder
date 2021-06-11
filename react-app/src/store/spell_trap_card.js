/**************************** CONSTANTS ***********************************/

const GET_ALL_SPELL_TRAP_CARDS = "spell_trap_cards/SET_ALL_SPELL_TRAP_CARDS"
const GET_ONE_SPELL_TRAP_CARD = "spell_trap_cards/SET_ONE_SPELL_TRAP_CARD"

/***************************** ACTION CREATORS *********************************/

const getSpellTrapCards = (allSpellTrapCards) => ({
    type: GET_ALL_SPELL_TRAP_CARDS,
    payload: allSpellTrapCards
});

const getSpellTrapCard = (oneSpellTrapCard) => ({
    type: GET_ONE_SPELL_TRAP_CARD,
    payload: oneSpellTrapCard
});

/***************************** INITIAL STATE *********************************/

const intialState = {}

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
            newState = {...state}
            newState = action.payload
            
            return newState;

        case GET_ONE_SPELL_TRAP_CARD:
            newState = {
                ...state,
                spell_trap_card: action.payload
            }
            return newState;

        default:
            return state;
    }
}