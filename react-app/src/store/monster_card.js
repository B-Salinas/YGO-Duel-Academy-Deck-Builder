/**************************** CONSTANTS ***********************************/

const GET_ALL_MONSTER_CARDS = "monster_cards/GET_ALL_MONSTER_CARDS"
const GET_ONE_MONSTER_CARD = "monster_cards/GET_ONE_MONSTER_CARD"

/***************************** ACTION CREATORS *********************************/

const getMonsterCards = (allMonsterCards) => ({
    type: GET_ALL_MONSTER_CARDS,
    allMonsterCards
});

const getMonsterCard = (oneMonsterCard) => ({
    type: GET_ONE_MONSTER_CARD,
    oneMonsterCard
});

/********************************* THUNKS ************************************/

export const getAllMonsterCards = () => async (dispatch) => {
    const response = await fetch('/api/monster_cards')

    if (!response.ok) {
        const errors = await response.json()
        return `Uh oh! Something went wrong: ${ errors }`
    }

    const allMonsterCards = await response.json()
    dispatch(getMonsterCards(allMonsterCards))
}




export const getOneMonsterCard = (id) => async (dispatch) => {
    const response = await fetch(`/api/monster_cards/${id}`)

    if (!response.ok) {
        const errors = await response.json()
        return `Uh oh! Something went wrong: ${errors}`
    }

    const oneMonsterCard = await response.json()
    dispatch(getMonsterCard(oneMonsterCard))
}

/***************************** INITIAL STATE *********************************/

const initialState = {
    all: {},
    current: {}
}
/****************************** REDUCER ************************************/

// the reducer only goes to the index.js file in the store folder
export default function monsterCardsReducer(state = initialState, action) {
    switch(action.type) {
        case GET_ALL_MONSTER_CARDS:
            return {
                ...state,
                all: action.allMonsterCards
            }

        case GET_ONE_MONSTER_CARD:
            return {
                ...state,
                current: action.oneMonsterCard
            }
        
        default:
            return state;
    }
}
