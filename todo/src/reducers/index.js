import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
    todos: [
        {task: "Learn Redux", completed: false},
        {task: "Learn Material-UI", completed: false}
    ]
};

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: 
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, idx) => action.payload === idx ? {...todo, completed: !todo.completed } : todo)
            }
        default: 
            return state;
    }
};
