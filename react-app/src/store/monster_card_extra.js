/**************************** CONSTANTS ***********************************/

const GET_ALL_TYPES = 'monster_cards/GET_ALL_TYPES'
const GET_ALL_RACES = 'monster_cards/GET_ALL_RACES'
const GET_ALL_ATTRIBUTES = 'monster_cards/GET_ALL_ATTRIBUTES'

/***************************** ACTION CREATORS *********************************/

const getTypes = (allTypes) => ({
    type: GET_ALL_TYPES,
    allTypes
});

const getRaces = (allRaces) => ({
    type: GET_ALL_RACES,
    allRaces
});

const getAttributes = (allAttributes) => ({
    type: GET_ALL_ATTRIBUTES,
    allAttributes
});

/********************************* THUNKS ************************************/

export const getAllTypes = () => async (dispatch) => {
    const response = await fetch('/api/monster_card_types')
    
    if (!response.ok) {
        const errors = await response.json()
        return `Oh no! Something went wrong ${ errors }`
    }

    const allTypes = await response.json()
    dispatch(getTypes(allTypes))
}

export const getAllRaces = () => async (dispatch) => {
    const response = await fetch('/api/monster_card_races')

    if (!response.ok) {
        const errors = await response.json()
        return `Oh no! Something went wrong ${errors}`
    }

    const allRaces = await response.json()
    dispatch(getRaces(allRaces))
}

export const getAllAttributes = () => async (dispatch) => {
    const response = await fetch('/api/monster_card_attributes')

    if (!response.ok) {
        const errors = await response.json()
        return `Oh no! Something went wrong ${errors}`
    }

    const allAttributes = await response.json()
    dispatch(getAttributes(allAttributes))
}

/***************************** INITIAL STATE *********************************/

const initialState = {
    types: {},
    races: {},
    attributes: {}
}

/****************************** REDUCER ************************************/

export default function monsterCardExtraReducer (state = initialState, action) {
    switch(action.type) {
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

            case GET_ALL_ATTRIBUTES:
                return {
                    ...state,
                    attributes: action.allAttributes
                }
            
            default:
                return state
    }
}


