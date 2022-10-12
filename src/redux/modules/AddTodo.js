// src/redux/modules/counter.js

// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const DONE_TODO = "DONE_TODO";
// Action Creator
export const addTodoAction = (todos) => {
  return {
    type: ADD_TODO,
    todos,
  };
};

export const deleteTodoAction = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const doneTodoAction = (id) => {
  return {
    type: DONE_TODO,
    id,
  };
};

// Initial State
const InitialState = [
  { title: "책읽기", desc: "책을 읽자", isDone: false, id: 1 },
];

// Reducer
const addtodo = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return state.length === 0
        ? [...state, { ...action.todos, id: 0 }]
        : [...state, { ...action.todos, id: state[state.length - 1].id + 1 }];
    }

    case DELETE_TODO: {
      state = state.filter((todos) => {
        if (todos.id !== action.id) {
          return todos;
        }
      });
      return state;
    }

    case DONE_TODO: {
      state = state.map((todos) => {
        if (todos.id == action.id) {
          return { ...todos, isDone: !todos.isDone };
          // 아래의 코드가 왜 true => false 로 안넘어가는지 이해가 안댑니다....
          // action.isDone
          //   ? { ...todos, isDone: false}
          //   : { ...todos, isDone:  true};
        } else {
          return todos;
        }
      });
      return state;
    }

    default: {
      return state;
    }
  }
};

// export default reducer
export default addtodo;
