import PropTypes from 'prop-types';
import React  from 'react';

const Todo = ({ onClick, completed, text, date }) => (
    <li
        onClick={onClick}
        style={{textDecoration: completed ? 'line-through' : 'none'}}
    >
        {text}
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.number.isRequired,
    //date: PropTypes.string.isRequired
}

export default Todo