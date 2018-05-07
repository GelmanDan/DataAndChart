import PropTypes from 'prop-types';
import React  from 'react';

function timeTransform(date) {
    let h = (date.getHours() < 10 ? '0' : '') + date.getHours();
    let m = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    let s = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
    let time = h.toString() + ":" + m.toString() + ":" + s.toString();

    return time
}

const Values = ({ completed, text, id, deleteValue, date }) => (
    <div className="value">
        <div
            className="value-time"
            style={{textDecoration: completed ? 'line-through' : 'none'}}
        >

            {timeTransform(date)}
        </div>
        <div className="value-text">
            <b>{text}</b>
        </div>
        <button className="value-btn"
                onClick={() => {deleteValue(id)}}
        >
            Remove
        </button>
    </div>

);

Values.propTypes = {
    completed: PropTypes.bool.isRequired,
    text: PropTypes.number.isRequired,
    date: PropTypes.any.isRequired,
    deleteValue: PropTypes.func.isRequired
};

export default Values