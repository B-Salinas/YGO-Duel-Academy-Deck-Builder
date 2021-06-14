/**************************** CONSTANTS ***********************************/

const GET_ALL_TYPES = 'spell_trap_cards/GET_ALL_TYPES'
const GET_ALL_RACES = 'spell_trap_cards/GET_ALL_RACES'

/***************************** ACTION CREATORS *********************************/

const getTypes = (allTypes) => ({
    type: GET_ALL_TYPES,
    allTypes
});

const getRaces = (allRaces) => ({
    type: GET_ALL_RACES,
    allRaces
});

/********************************* THUNKS ************************************/

export const getAllTypes = () => async (dispatch) => {
    const response = await fetch('/api/spell_trap_card_types')

    if (!response.ok) {
        const errors = await response.json()
        return `Oh no! Something went wrong ${errors}`
    }

    const allTypes = await response.json()
    dispatch(getTypes(allTypes))
}

/*****/

export const getAllRaces = () => async (dispatch) => {
    const response = await fetch('/api/spell_trap_card_races')

    if (!response.ok) {
        const errors = await response.json()
        return `Oh no! Something went wrong ${errors}`
    }

    const allRaces = await response.json()
    dispatch(getRaces(allRaces))
}

/***************************** INITIAL STATE *********************************/

const initialState = {
    types: {},
    races: {}
}

/****************************** REDUCER ************************************/

export default function spellTrapCardExtraReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_TYPES:
            return {
                ...state,
                types: action.allTypes
            }

        case GET_ALL_RACES:
            return {
                ...state,
                races: action.allRaces
            }

        default:
            return state
    }
}


