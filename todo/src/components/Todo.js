import React from 'react';

const Todo = props => {
    return(
        <li>
            {props.task}
            <input type="checkbox" name="completed" value={props.completed} />
        </li>
    );
}

export default Todo;