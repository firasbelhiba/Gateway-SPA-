import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import post from "./post";
import question from "./questions";
import scraping from "./scraping";


export default combineReducers({
  alert,
  auth,
  profile,
  post,
  question,
  scraping,
 
});
