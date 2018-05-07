import PropTypes from 'prop-types';
import React  from 'react';

function timeTransform(date) {
    let h = (date.getHours() < 10 ? '0' : '') + date.getHours();
    let m = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    let s = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
    let time = h.toString() + ":" + m.toString() + ":" + s.toString();

    return time
}

const Todo = ({ onClick, completed, text, id, deleteTodo, date }) => (
    <div className="todo">
        <div
            className="todo-time"
            onClick={onClick}
            style={{textDecoration: completed ? 'line-through' : 'none'}}
        >

            {timeTransform(date)}
        </div>
        <div className="todo-text">
            <b>{text}</b>
        </div>
        <button className="todo-btn"
                onClick={() => {deleteTodo(id)}}
        >
            Remove
        </button>
    </div>

);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.number.isRequired,
    date: PropTypes.any.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default Todo