// src/redux/modules/config/configStore.js


// 원래 있던 코드
import { createStore } from "redux";
import { combineReducers } from "redux";

// 새롭게 추가한 부분
import addtodo from "../modules/AddTodo";

const rootReducer = combineReducers({
  addtodo : addtodo // <-- 새롭게 추가한 부분
});
const store = createStore(rootReducer);

export default store;