const initialState = {
  //user
  id: "",
  username: "",
  userImg: "",
  //cart
  myOrders: [],
  //favorites
  favPosts: []
};

const UPDATE_ID = "UPDATE_ID";
const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_USERIMG = "UPDATE_USERIMG";
const UPDATE_ORDERS = "UPDATE_ORDERS";
const SUBMIT_ORDER = "SUBMIT_ORDER";
const ADD_FAV = "ADD_FAV";
const DELETE_FAV = "DELETE_FAV";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ID:
      return Object.assign({}, state, { id: action.payload });
    case UPDATE_NAME:
      return Object.assign({}, state, { username: action.payload });
    case UPDATE_USERIMG:
      return Object.assign({}, state, { userImg: action.payload });
    case UPDATE_ORDERS:
      return Object.assign({}, state, {
        myOrders: [...state.myOrders, action.payload]
      });
    case SUBMIT_ORDER:
      return Object.assign({}, state, {
        myOrders: []
      });
    case ADD_FAV:
      return Object.assign({}, state, {
        favPosts: [...state.favPosts, action.payload]
      });

    default:
      return state;
  }
}

export function updateId(id) {
  return {
    type: UPDATE_ID,
    payload: id
  };
}
export function updateName(username) {
  return {
    type: UPDATE_NAME,
    payload: username
  };
}
export function updateUserImg(userImg) {
  return {
    type: UPDATE_USERIMG,
    payload: userImg
  };
}
export function updateOrders(myOrders) {
  return {
    type: UPDATE_ORDERS,
    payload: myOrders
  };
}
export function submitOrder(myOrders) {
  return {
    type: SUBMIT_ORDER,
    payload: myOrders
  };
}
export function addFav(favPosts) {
  return {
    type: ADD_FAV,
    payload: favPosts
  };
}

export default reducer;
