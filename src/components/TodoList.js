import PropTypes from 'prop-types';
import React  from 'react';
import Todo from './Todo'
import Charts from './Charts'



const TodoList = ({ todos, onTodoClick, deleteTodo }) => (
    <div>
        <ul>
            {todos.map(todo =>
                <Todo
                    deleteTodo={deleteTodo}
                    key={todo.id}
                    {...todo}
                    onClick={() => onTodoClick(todo.id)}
                />
            )}
        </ul>
        <Charts data={todos}/>
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