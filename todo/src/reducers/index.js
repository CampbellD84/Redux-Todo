import { ADD_TODO } from '../actions';

const taskReducer = (todos = [], action) => {
    switch (action.type) {
        case ADD_TODO: 
            return [
                ...todos,
                {
                    task: action.task,
                    completed: false
                }
            ]
        default: 
            return todos;
    }
};

export default taskReducer;