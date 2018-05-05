import PropTypes from 'prop-types';
import React  from 'react';
import Todo from './Todo'
import Charts from './Charts'



const TodoList = ({ todos, onTodoClick }) => (
    <div>
        <ul>
            {todos.map(todo =>
                <Todo
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
       // date: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.number.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList