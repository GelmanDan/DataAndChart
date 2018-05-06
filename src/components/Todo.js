import PropTypes from 'prop-types';
import React  from 'react';

function deleteButtonClick(){
    console.log(this.props.params);
}

const Todo = ({ onClick, completed, text, id, deleteTodo }) => (
    <div >
        <li
            onClick={onClick}
            style={{textDecoration: completed ? 'line-through' : 'none'}}
        >
            {text}
        </li>
        <button
            onClick={() => {deleteTodo(id)}}
        >
            Remove
        </button>
    </div>

)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.number.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default Todo