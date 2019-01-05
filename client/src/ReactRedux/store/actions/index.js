import {
  ADD_ARTICLE,
  ADD_AGE,
  ADD_USER,
  SIGN_UP
} from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function addAge(age) {
  return { type: ADD_AGE, age };
}
// test
export function addUser(user) {
  return { type: ADD_USER, user };
}

export function signUp(payload) {
  return { type: SIGN_UP, payload };
}