let nextTodoId = 0;
export const addTodo = (text) => {
    let date = new Date();
    return {
        date:  (date),
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
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