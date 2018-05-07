import PropTypes from 'prop-types';
import React  from 'react';
import Values from './Values'
import Charts from './Charts'
import AddValues from '../containers/AddValues'


const ValuesList = ({ todos, deleteValue }) => (
    <div className="chartAndData">
        <Charts data={todos}/>
        <div className="data">
            <AddValues/>
            <p>List of values</p>
            <div>
                {todos.map(todo =>
                    <Values
                        deleteValue={deleteValue}
                        key={todo.id}
                        {...todo}
                    />
                )}
            </div>
        </div>
    </div>
);

ValuesList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.number.isRequired
    }).isRequired).isRequired,
    deleteValue: PropTypes.func.isRequired
};

export default ValuesList