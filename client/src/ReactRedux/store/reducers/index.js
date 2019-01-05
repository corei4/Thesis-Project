import {
  ADD_ARTICLE,
  SIGN_UP,
  ADD_AGE,
  ADD_USER
} from "../constants/action-types";

const initialState = {
  articles: [{ title: "azhar", id: Math.random() }],
  age: 0,
  user: [],
  email: "",
  password: "",
  firstName: "",
  lastName: ""
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  } else if (action.type === ADD_AGE) {
    state.age += action.age;
  } else if (action.type === ADD_USER) {
    state.user.push(action.user);
  } else if (action.type === SIGN_UP) {
    state.firstName = action.payload.firstName;
    state.lastName = action.payload.lastName;
    state.password = action.payload.password;
    state.email = action.payload.email;
  }
  return state;
}
export default rootReducer;
