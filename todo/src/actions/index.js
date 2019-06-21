export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = task => {
    return {
        type: ADD_TODO,
        payload: { task: task, completed: false}
    };
}

export const toggleTodo = idx => {
    return {
        type: TOGGLE_TODO,
        payload: idx
    }
}