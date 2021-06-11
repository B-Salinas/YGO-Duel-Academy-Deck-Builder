/**************************** CONSTANTS ***********************************/

const GET_ALL_MONSTER_CARDS = "monster_cards/GET_ALL_MONSTER_CARDS"
const GET_ONE_MONSTER_CARD = "monster_cards/GET_ONE_MONSTER_CARD"

/***************************** ACTION CREATORS *********************************/

const getMonsterCards = (allMonsterCards) => ({
    type: GET_ALL_MONSTER_CARDS,
    payload: allMonsterCards
});

const getMonsterCard = (oneMonsterCard) => ({
    type: GET_ONE_MONSTER_CARD,
    payload: oneMonsterCard
});

/***************************** INITIAL STATE *********************************/

const initial_state = { 
    monster_cards: null,
    monster_card: null
}

/********************************* THUNKS ************************************/

const getAllMonsterCards = () => async (dispatch) => {
    const response = await fetch('/api/monster_cards')

    if (!response.ok) {
        const errors = await response.json()
        return `Uh oh! Something went wrong: ${ errors }` // debugging purposes
    }

    const allMonsterCards = await response.json()
    dispatch(getMonsterCards(allMonsterCards))
}

const getOneMonsterCard = (id) => async (dispatch) => {
    const response = await fetch(`/api/monster_cards/${id}`)

    if (!response.ok) {
        const errors = await response.json()
        return `Uh oh! Something went wrong: ${errors}`  // debugging purposes
    }

    const oneMonsterCard = await response.json()
    dispatch(getMonsterCard(oneMonsterCard))
}

/****************************** REDUCER ************************************/

export default function monsterCardsReducer(state = initial_state, action) {
    let newState;

    switch(action.type) {
        case GET_ALL_MONSTER_CARDS:
            newState = {
                ...state,
                monster_cards: action.payload
            }
            return newState;
        
        case GET_ONE_MONSTER_CARD:
            newState = {
                ...state,
                monster_card: action.payload
            }
            return newState;
        
        default:
            return state;
    }
}