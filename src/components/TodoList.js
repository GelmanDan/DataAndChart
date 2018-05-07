import PropTypes from 'prop-types';
import React  from 'react';
import Todo from './Todo'
import Charts from './Charts'
import AddTodo from '../containers/AddTodo'


const TodoList = ({ todos, onTodoClick, deleteTodo }) => (
    <div className="chartAndData">
        <Charts data={todos}/>
        <div className="data">
            <AddTodo/>
            <p>List of values</p>
            <div>
                {todos.map(todo =>
                    <Todo
                        deleteTodo={deleteTodo}
                        key={todo.id}
                        {...todo}
                        onClick={() => onTodoClick(todo.id)}
                    />
                )}
            </div>
        </div>
    </div>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.number.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default TodoList