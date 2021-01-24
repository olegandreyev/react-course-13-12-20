import { combineReducers } from "redux";
import todoList from './todo-list';
import counter from './counter';
import filter from './filter';

/*...*/

export default combineReducers({
  todo: combineReducers({
    list: todoList,
    filter: filter
  }),
  counter
})

// {
//   todoList: {
//     list: [],
//     filter: ''
//   }
// }
