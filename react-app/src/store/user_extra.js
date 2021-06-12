/**************************** CONSTANTS ***********************************/

const GET_ALL_DORMS = 'dorms/GET_ALL_DORMS'
const GET_ALL_TITLES = 'titles/GET_ALL_TITLES'
const GET_ALL_PROFILE_IMAGES = 'profile_images/GET_ALL_PROFILE_IMAGES'

/***************************** ACTION CREATORS *********************************/

const getDorms = (allDorms) => ({
    type: GET_ALL_DORMS,
    allDorms
});

const getTitles = (allTitles) => ({
    type: GET_ALL_TITLES,
    allTitles
});

const getProfileImages = (allProfileImages) => ({
    type: GET_ALL_PROFILE_IMAGES,
    allProfileImages
});

/********************************* THUNKS ************************************/

export const getAllDorms = () => async (dispatch) => {
    const response = await fetch('/api/dorms')

    if (!response.ok) {
        const errors = await response.json()
        return `Oh no! Something went wrong ${errors}`
    }

    const allDorms = await response.json()
    dispatch(getDorms(allDorms))
}




export const getAllTitles = () => async (dispatch) => {
    const response = await fetch('/api/titles')

    if (!response.ok) {
        const errors = await response.json()
        return `Oh no! Something went wrong ${errors}`
    }

    const allTitles = await response.json()
    dispatch(getTitles(allTitles))
}




export const getAllProfileImages = () => async (dispatch) => {
    const response = await fetch('/api/profile_images')

    if (!response.ok) {
        const errors = await response.json()
        return `Oh no! Something went wrong ${errors}`
    }

    const allProfileImages = await response.json()
    dispatch(getProfileImages(allProfileImages))
}

/***************************** INITIAL STATE *********************************/

const initialState = {
    dorms: {},
    titles: {},
    profile_images: {}
}

/****************************** REDUCER ************************************/

export default function userExtraReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DORMS:
            return {
                ...state,
                dorms: action.allDorms
            }

        case GET_ALL_TITLES:
            return {
                ...state,
                titles: action.allTitles
            }

        case GET_ALL_PROFILE_IMAGES:
            return {
                ...state,
                profile_images: action.allProfileImages
            }

        default:
            return state
    }
}