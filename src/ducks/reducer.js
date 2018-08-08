const initialState = {
  //form
  title: "",
  category: "",
  description: "",
  servings: "",
  cost: "",
  image: "",
  //user
  id: "",
  username: "",
  userImg: ""
};

const UPDATE_TITLE = "UPDATE_TITLE";
const UPDATE_CAT = "UPDATE_CAT";
const UPDATE_DESC = "UPDATE_DESC";
const UPDATE_SERV = "UPDATE_SERV";
const UPDATE_COST = "UPDATE_COST";
const UPDATE_IMG = "UPDATE_IMG";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TITLE:
      return Object.assign({}, state, { title: action.payload });

    case UPDATE_CAT:
      return Object.assign({}, state, { category: action.payload });

    case UPDATE_DESC:
      return Object.assign({}, state, { description: action.payload });

    case UPDATE_SERV:
      return Object.assign({}, state, { servings: action.payload });

    case UPDATE_COST:
      return Object.assign({}, state, { cost: action.payload });

    case UPDATE_IMG:
      return Object.assign({}, state, { image: action.payload });

    default:
      return state;
  }
}

export function updateTitle(title) {
  return {
    type: UPDATE_TITLE,
    payload: title
  };
}
export function updateCat(category) {
  return {
    type: UPDATE_CAT,
    payload: category
  };
}
export function updateDesc(description) {
  return {
    type: UPDATE_DESC,
    payload: description
  };
}
export function updateServ(servings) {
  return {
    type: UPDATE_SERV,
    payload: servings
  };
}
export function updateCost(cost) {
  return {
    type: UPDATE_COST,
    payload: cost
  };
}
export function updateImg(image) {
  return {
    type: UPDATE_IMG,
    payload: image
  };
}

export default reducer;
