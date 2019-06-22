import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions';

const initialState = {
    todos: [
        {task: "Learn Redux", completed: false},
        {task: "Learn Material-UI", completed: false},
        {task: "Read about State Machines", completed: false}
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
                // ...state,
                todos: state.todos.map((todo, idx) => action.payload === idx ? {...todo, completed: !todo.completed } : todo)
            }
        case DELETE_TODO:
            return {
                todos: state.todos.filter(todo => !todo.completed)
            }
        default: 
            return state;
    }
};
