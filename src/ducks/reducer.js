const initialState = {
  //user
  id: "",
  username: "",
  userImg: "",
  myOrders: []
};

const UPDATE_ID = "UPDATE_ID";
const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_USERIMG = "UPDATE_USERIMG";
const UPDATE_ORDERS = "UPDATE_ORDERS";

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

export default reducer;
