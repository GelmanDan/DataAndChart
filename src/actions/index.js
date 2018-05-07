let nextValueId = 0;
export const addValue = (text) => {
    let date = new Date();
    return {
        date:  (date),
        type: 'ADD_VALUE',
        id: nextValueId++,
        text
    }
}

export const deleteValue = (id) => {
    return {
        type: 'DELETE_VALUE',
        id
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}