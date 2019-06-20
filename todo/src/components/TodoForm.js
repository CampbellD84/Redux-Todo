import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';


class TodoForm extends Component {
    state = {
        newTask: ''
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleAddTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTask);
    }

    render() {
        return(
            <div>
                <form action="">
                    <label htmlFor="task">Task
                        <input 
                            type="text" 
                            name="newTask"
                            value={this.state.newTask}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit" onClick={() => this.handleAddTodo()}>Add Task</button>
                </form>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {addTodo})(TodoForm);