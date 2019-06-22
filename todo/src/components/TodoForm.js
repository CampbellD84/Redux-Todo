import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../actions';



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

    handleDeleteTodo = () => {
        this.props.deleteTodo();
    }

    render() {
        return(
            <React.Fragment>
            <div>
                <div className="heading">
                    <h1>Todo List</h1>
                </div>
                <form>
                    <label className="task-label" htmlFor="task">
                        Task
                    </label>
                    <input 
                            type="text" 
                            name="newTask"
                            value={this.state.newTask}
                            onChange={this.handleChange}
                        />
                    <button onClick={this.handleAddTodo}>Add Task</button>
                </form>
            </div>
            <div className="tasks">
            {this.props.todos.map((todo, idx) => (
                <div  
                    key={idx}
                    className={todo.completed ? "completed" : null}
                >
                    <input 
                        type="checkbox" 
                        name="completed" 
                        value={this.props.completed} 
                        onClick={e => this.handleToggleTodo(e, idx)} 
                    />
                    {todo.task}
                    <button onClick={this.handleDeleteTodo}>Delete</button>
                </div>
            ))}
            </div>
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}



export default connect(mapStateToProps, { addTodo, toggleTodo, deleteTodo})(TodoForm);