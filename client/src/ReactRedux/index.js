import store from "../ReactRedux/store/index";
import { addArticle } from "../ReactRedux/store/actions/index";
import { addAge } from "../ReactRedux/store/actions/index";
import { signUp } from "../ReactRedux/store/actions/index";
// import { addUser } from "../js/actions/index";
// import {getAllCh} from '../Services/Charities'



window.store = store;
window.addArticle = addArticle;
window.addAge = addAge;
window.signUp = signUp;
// window.getAllCh = getAllCh;
