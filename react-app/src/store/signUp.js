const SET_SIGN_UP_DATA = "signup/SET_SIGN_UP_DATA";

const setSignUpData = (data) => ({
  type: SET_SIGN_UP_DATA,
  payload: data
});

export const getSignUpData = () => async (dispatch) => {
  const response = await fetch('/api/auth/signup-data');

  if (response.ok) {
    const data = await response.json();

    dispatch(setSignUpData(data));
  } else {
    console.log("error getting sign up data...");
  }
};

const initialState = {
  dorms: null,
  titles: null,
  profilePictures: null
};

export default function reducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case SET_SIGN_UP_DATA:
      newState = Object.assign({}, state);
      newState.dorms = action.payload.dorms;
      newState.titles = action.payload.titles;
      newState.profilePictures = action.payload.profilePictures;

      return newState;
    default:
      return state;
  }

}
