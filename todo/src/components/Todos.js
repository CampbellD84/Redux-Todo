import React from 'react';
import Todo from './TodoForm';


const Todos = props => {
    return(
        <ul>
            {props.todos.map(todo => (
                <Todo todo={todo} />
            ))}
        </ul>
    );
}

export default Todos;