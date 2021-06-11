/**************************** CONSTANTS ***********************************/

const SET_ALL_MONSTER_CARDS = "session/SET_ALL_MONSTER_CARDS"
const SET_ONE_MONSTER_CARD = "session/SET_ONE_MONSTER_CARD"

const SET_ALL_SPELL_TRAP_CARDS = "session/SET_ALL_SPELL_TRAP_CARDS"
const SET_ONE_SPELL_TRAP_CARD = "session/SET_ONE_SPELL_TRAP_CARD"

/***************************** ACTION CREATORS *********************************/

const setAllMonsterCards = (allMonsterCards) => ({
    type: SET_ALL_MONSTER_CARDS,
    payload: allMonsterCards
});

const setOneMonsterCard = (oneMonsterCard) => ({
    type: SET_ONE_MONSTER_CARD,
    payload: oneMonsterCard
});

const setAllSpellTrapCards = (allSpellTrapCards) => ({
    type: SET_ALL_SPELL_TRAP_CARDS,
    payload: allSpellTrapCards
});

const oneSpellTrapCard = (oneSpellTrapCard) => ({
    type: SET_ONE_SPELL_TRAP_CARD,
    payload: oneSpellTrapCard
});

/***************************** INITIAL STATE *********************************/

const intialState = { 
    allMonsterCards: null,
    oneMonsterCard: null,
    allSpellTrapCards: null,
    oneSpellTrapCard: null
}

/********************************* THUNK ************************************/

const monster_card_thunk = () => async (dispatch) => {
    const response = await fetch('/api/monster_cards', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const 



