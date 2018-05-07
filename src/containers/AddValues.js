import React from 'react'
import { connect } from 'react-redux'
import { addValue } from '../actions'

let AddValues = ({ dispatch }) => {
    let input;

    return (
        <div className="addValue">
            <h2><b>Data</b></h2>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }
                dispatch(addValue(parseInt(input.value)));
                input.value = ''
            }}>
                <input ref={node => {
                    input = node
                }}/>

            </form>
        </div>
    )
};
AddValues = connect()(AddValues);

export default AddValues