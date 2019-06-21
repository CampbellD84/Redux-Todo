import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions';



class TodoForm extends Component {
    state = {
        newTask: ''
    };

    handleChange = e => {
        this.setState({
            newTask: e.target.value
        });
    }

    handleAddTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTask);
    }

    handleToggleTodo = (e, idx) => {
        this.props.toggleTodo(idx);
    }

    render() {
        return(
            <React.Fragment>
            <div>
                <form>
                    <label htmlFor="task">Task
                        <input 
                            type="text" 
                            name="newTask"
                            value={this.state.newTask}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button onClick={this.handleAddTodo}>Add Task</button>
                </form>
            </div>
            <ul>
            {this.props.todos.map((todo, idx) => (
                <li onClick={e => this.handleToggleTodo(e, idx)} key={idx}>
                    {todo.task}
                </li>
            ))}
            </ul>
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}



export default connect(mapStateToProps, { addTodo, toggleTodo})(TodoForm);