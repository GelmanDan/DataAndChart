import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div className="addToDo">
            <h2><b>Data</b></h2>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }
                dispatch(addTodo(parseInt(input.value)));
                input.value = ''
            }}>
                <input ref={node => {
                    input = node
                }}/>

            </form>
        </div>
    )
};
AddTodo = connect()(AddTodo);

export default AddTodo